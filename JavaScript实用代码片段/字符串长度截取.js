function cutstr(str, len) {
  var temp;
  var icount = 0;
  var patrn = /[^\x00-\xff]/; // 双字节字符(包括汉字在内)，长度被计算为2
  var strre = "";
  for (var i = 0; i < str.length; i++) {
    if (icount < len) {
      temp = str.substr(i, 1); // str.substr(start[, length])
      if (patrn.exec(temp) == null) {
        icount = icount + 1
      } else {
        icount = icount + 2
      }
      strre += temp
    } else {
      break
    }
  }
  return strre + "..." + icount
}
console.log(cutstr("abcdefgh", 6))
