(function(window, undefined) {
  var dictionary = {
    "50fb98e1-b1df-4cd8-ae1c-274015a2aba4": "Centros",
    "a7374a21-42fb-4c67-9e25-27c1a4bc7722": "Dynamic",
    "8d242a67-94eb-4edf-85bd-e019b2b6ae81": "Info Centros",
    "19fb25f1-98a6-4418-a32f-14483ef3baa9": "6",
    "77669536-018e-4b55-8023-4555a730eecd": "5",
    "b4b4e80b-09cf-40f4-bb70-7ce11d44dcd0": "4",
    "1d93f609-b8d6-46b1-a2eb-dc1c023ffcf3": "Login",
    "6945ff83-ce8f-4757-85ed-309d07f6a3ed": "3",
    "6a5ce6aa-0572-4b9a-b3dc-2fd8ced84b78": "Juegos",
    "21581fe2-9fe5-44ad-9aac-c21b4dc96e91": "2",
    "899466c8-ed87-4a63-812e-948a09ee5c0e": "1",
    "8942f6ed-eb80-4f9b-a522-fb3010129c65": "consulta rapida",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);