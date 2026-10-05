// === Module 613: getValue ===

// Module 613 (getValue)

export default function getValue(arg0, arg1) {
  let tmp;
  if (null != arg0) {
    tmp = arg0[arg1];
  }
  return tmp;
};