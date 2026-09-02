// _runtime/00782_arraySome.js

export default function arraySome(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!arg1(arg0[num2], num2, arg0)) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
}
