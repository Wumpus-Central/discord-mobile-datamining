// _runtime/00624_baseTimes.js

export default function baseTimes(arg0, arg1) {
  const ArrayResult = Array(arg0);
  for (let num = 0; num < arg0; num = num + 1) {
    ArrayResult[num] = arg1(num);
  }
  return ArrayResult;
}
