// _runtime/metro/06406__.js

export const useDataMultiplier = function useDataMultiplier(arg0, arg1) {
  let num;
  const length = arg0.length;
  const array = new Array(arg1);
  let flag = false;
  if (typeof arg0[0] === "object") {
    flag = true;
  }
  for (let num = 0; num < arg1; num = num + 1) {
    let tmp4;
    let tmp2 = arg0[num % length];
    if (flag) {
      let obj = {};
      let merged = Object.assign(tmp2);
      tmp4 = obj;
    } else {
      tmp4 = tmp2;
    }
    array[num] = tmp4;
  }
  const items = [array];
  return items;
};
