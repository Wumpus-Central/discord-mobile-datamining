// _runtime/00628_arrayMap.js

export default function arrayMap(arg0, fn) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const ArrayResult = Array(num);
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    ArrayResult[num2] = fn(arg0[num2], num2, arg0);
  }
  return ArrayResult;
}
