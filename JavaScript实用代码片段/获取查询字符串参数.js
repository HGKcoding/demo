function getQueryStringArgs() {
  // 取得查询字符串并去掉开头的问号
  var qs = (location.search.length > 0 ? location.search.substring(1) : "");
  var args = {};
  // 取得每一项
  items = qs.length ? qs.split("&") : [];
  var item = null;
  var name = null;
  var value = null;
  for (var i = 0; i < items.length; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}