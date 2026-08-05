// _runtime/05575_useDataMultiplier.js
arg5.useDataMultiplier = function useDataMultiplier(arg0, arg1) {
  const array = new Array(arg1);
  let flag = false;
  if (typeof arg0[0] === "object") {
    flag = true;
  }
  for (let num = 0; num < arg1; num = num + 1) {
    let tmp3 = arg0[num % tmp];
    let tmp4 = num;
    if (flag) {
      let obj = {};
      let tmp6 = obj;
      let tmp7 = tmp3;
      let merged = Object.assign(tmp3);
      let tmp5 = obj;
    } else {
      tmp5 = tmp3;
    }
    array[num] = tmp5;
  }
  const items = [array];
  return items;
};