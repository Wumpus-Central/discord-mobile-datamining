// _runtime/01200_lowerCamelCase.js

export const lowerCamelCase = function lowerCamelCase(name) {
  const items = [];
  let num = 0;
  let flag = false;
  if (0 < name.length) {
    do {
      let str = name.charAt(num);
      let flag2 = true;
      if ("_" != str) {
        let obj = /\d/;
        if (obj.test(str)) {
          let arr = items.push(str);
          flag2 = true;
        } else if (flag) {
          let arr5 = items.push(str.toUpperCase());
          flag2 = false;
        } else if (0 === num) {
          let arr6 = items.push(str.toLowerCase());
          flag2 = flag;
        } else {
          let arr7 = items.push(str);
          flag2 = flag;
        }
      }
      num = num + 1;
      flag = flag2;
    } while (num < name.length);
  }
  return items.join("");
};
