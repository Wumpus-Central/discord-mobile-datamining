// _runtime/06346__arrayLikeToArray.js

export default function _arrayLikeToArray(arg0, arg1) {
  let num;
  let length = arg1;
  const tmp = null == arg1 || length > arg0.length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
