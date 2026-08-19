// === Module 5035: arrayIncludesWith ===

// Module 5035 (arrayIncludesWith)

export default function arrayIncludesWith(arg0, closure_0, fn) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!fn(closure_0, arg0[num2])) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
};