var Cookie = (function() {
  var Cookie = {};
  Cookie.set = function(name, value, expires) {
    var expiresDate = new Date().getDate() + expires;
    document.cookie = name + "=" + value + ";expires=" + expiresDate;
  }
  Cookie.get = function(name) {
    var arr = document.cookie.split(";"),i;
    for(i=0;i<arr.length;i++) {
      var arr2=arr[i].split("=");
      if(arr2[0]===name) return arr2[1];
    }
    return "";
  }
  Cookie.remove = function(name) {
    setCookie(name, "", -1);
  }
  return Cookie;
})();