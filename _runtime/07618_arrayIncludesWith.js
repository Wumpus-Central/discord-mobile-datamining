// === Module 7618: arrayIncludesWith ===

// Module 7618 (arrayIncludesWith)

export default function arrayIncludesWith(arg0, value, fn) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!fn(value, arg0[num2])) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
};