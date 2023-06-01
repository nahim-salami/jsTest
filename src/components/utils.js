// export const apiBaseUrl = "https://c6q5rfze41.execute-api.us-east-2.amazonaws.com/back/";
export const apiBaseUrl = "https://jsonplaceholder.typicode.com/";

export const apiKey = {
  public: "ze11Aze1666;zdedzef8pm0@eezaaedzefvbsrempm:!ù*rfeerf6954e5ffe545ezf",
  private: "a87AsdP85468518@$erfefs12xvd;jhiperzddzà"
}
export const apiUrl = {
    login: apiBaseUrl + 'users',
    register: apiBaseUrl + 'users',
    folderList: apiBaseUrl + 'get-folder',
    addComponent: apiBaseUrl + 'add-component',
    createFolder: apiBaseUrl + 'add-folder',
    removeFolder: apiBaseUrl + 'remove-folder',
    componentlist: apiBaseUrl + 'posts/1/comments',
    removeComponent: apiBaseUrl + 'remove-component',
};

export const setCookie = (cname, cvalue, exdays = 30) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
