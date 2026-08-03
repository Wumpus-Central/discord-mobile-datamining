// === Module 6974: arrayIncludesWith ===

// Module 6974 (arrayIncludesWith)

export default function arrayIncludesWith(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!arg2(arg1, arg0[num2])) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
};