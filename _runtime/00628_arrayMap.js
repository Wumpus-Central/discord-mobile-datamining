// _runtime/00628_arrayMap.js

export default function arrayMap(arr, fn) {
  let num = 0;
  if (null != arr) {
    num = arr.length;
  }
  const ArrayResult = Array(num);
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    ArrayResult[num2] = fn(arr[num2], num2, arr);
  }
  return ArrayResult;
}
