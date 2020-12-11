// https://github.com/marcomow/babel-apps-script/

const doGet = function () {
  
  return HtmlService.createHtmlOutputFromFile('index')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setTitle('babel-apps-script')
  
  
}


const get_array_objects_scripts = function () {
  
  const array_objects_scripts = [];
  
  const iterator = DriveApp.getFilesByType(MimeType.GOOGLE_APPS_SCRIPT)
  
  while (iterator.hasNext()) {
    
    const file = iterator.next();
    
    const object_script = {
      id: file.getId(),
      name: file.getName()
    }
    
    array_objects_scripts.push(object_script)
    
  }
  
  return JSON.stringify(array_objects_scripts);
  
}






const get_project = function (id_script) {
  
  const url_base = 'https://script.googleapis.com/v1/projects/' + id_script + '/content';
  
  const object_payload = {}
  
  const object_headers = {
    'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
  }
  
  const object_options = {
    method: 'get',
    headers: object_headers,
    muteHttpExceptions: true
  }
  
  const fetch = UrlFetchApp.fetch(url_base, object_options).getContentText();
  
  const content = JSON.parse(fetch);
  
  return content;
  
}





const update_project = function (id_script, object_project) {
  
  const url_base = 'https://script.googleapis.com/v1/projects/' + id_script + '/content';
  
  const object_payload = JSON.stringify(object_project)
  
  const object_headers = {
    'Authorization': 'Bearer ' + ScriptApp.getOAuthToken(),
    'Content-Type': 'application/json'
  }
  
  const object_options = {
    method: 'put',
    headers: object_headers,
    payload: object_payload,
    muteHttpExceptions: true
  }
  
  const fetch = UrlFetchApp.fetch(url_base, object_options).getContentText();
  
  const content = JSON.parse(fetch);
  
  return content;
  
}






const compile = function (id_script_origin, id_script_destination) {
  
  const object_project_origin = get_project(id_script_origin);
  
  
  const array_files_origin = object_project_origin.files;
  
  const array_files_destination = array_files_origin.map(function (object_file) {
    
    if (object_file.type === 'SERVER_JS') {
      
      object_file.source = Babel.transform(object_file.source, {
        presets: ['env']
      }).code;
      
    }
    
    if(object_file.name === 'appsscript' && object_file.type === 'JSON'){
      
      const object_source = JSON.parse(object_file.source) ;
      
      object_source.runtimeVersion = 'DEPRECATED_ES5';
    
      object_file.source = JSON.stringify(object_source) ;
    
    }
    
    return object_file;
    
  });
  
  object_project_origin.files = array_files_destination;
  
  const result = update_project(id_script_destination, object_project_origin);
  
  return JSON.stringify(result) ;
  
}
