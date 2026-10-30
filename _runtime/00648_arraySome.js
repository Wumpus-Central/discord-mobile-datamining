// _runtime/00648_arraySome.js

export default function arraySome(length, fn) {
  let num = 0;
  if (null != length) {
    num = length.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!fn(length[num2], num2, length)) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
}
