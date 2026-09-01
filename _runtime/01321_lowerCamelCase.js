// _runtime/01321_lowerCamelCase.js
arg5.lowerCamelCase = function lowerCamelCase(name) {
  const items = [];
  let num = 0;
  let flag = false;
  if (0 < name.length) {
    do {
      let str = name.charAt(num);
      let tmp = num;
      let tmp2 = flag;
      let flag2 = true;
      if ("_" != str) {
        let obj = /\d/;
        if (obj.test(str)) {
          let arr = items.push(str);
          flag2 = true;
        } else if (flag) {
          arr = items.push(str.toUpperCase());
          flag2 = false;
        } else if (0 === num) {
          let arr1 = items.push(str.toLowerCase());
          flag2 = flag;
        } else {
          let arr2 = items.push(str);
          flag2 = flag;
        }
      }
      num = num + 1;
      flag = flag2;
    } while (num < name.length);
  }
  return items.join("");
};
