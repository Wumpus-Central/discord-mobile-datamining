// _runtime/00627_arrayMap.js

export default function arrayMap(f, fn) {
  let num = 0;
  if (null != f) {
    num = f.length;
  }
  const ArrayResult = Array(num);
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    ArrayResult[num2] = fn(f[num2], num2, f);
  }
  return ArrayResult;
}
