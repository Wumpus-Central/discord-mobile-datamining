// _runtime/00648_arraySome.js

export default function arraySome(f, fn) {
  let num = 0;
  if (null != f) {
    num = f.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!fn(f[num2], num2, f)) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
}
