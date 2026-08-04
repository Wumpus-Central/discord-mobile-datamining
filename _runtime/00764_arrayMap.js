// _runtime/00764_arrayMap.js

export default function arrayMap(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const ArrayResult = Array(num);
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    ArrayResult[num2] = arg1(arg0[num2], num2, arg0);
  }
  return ArrayResult;
};