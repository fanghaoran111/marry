function getToday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) {
    month = '0' + month;
  };
  if (day < 10) {
    day = '0' + day;
  };

  var formatDate = year + '-' + month + '-' + day;
  return formatDate;
}
//把函数添加到对象属性里 
module.exports = {
  getToday: getToday
}
