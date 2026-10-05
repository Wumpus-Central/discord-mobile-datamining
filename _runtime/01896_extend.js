// _runtime/01896_extend.js

export const extend = function extend(objCreateResult) {
  let num;
  const callResult = slice.call(arguments, 1);
  const length = callResult.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp = callResult[num];
    if (tmp) {
      for (const key10018 in tmp) {
        if (!hasOwnProperty.call(tmp, key10018)) {
          continue;
        } else {
          objCreateResult[key10018] = tmp[key10018];
          continue;
        }
        continue;
      }
    }
  }
  return objCreateResult;
};
export const hop = hasOwnProperty;
