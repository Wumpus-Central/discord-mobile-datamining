// === Module 256: composeStyles ===

// Module 256 (composeStyles)

export default function composeStyles(arg0, arg1) {
  let tmp = arg1;
  if (null != arg0) {
    let tmp2 = arg0;
    if (null != arg1) {
      const items = [arg0, arg1];
      tmp2 = items;
    }
    tmp = tmp2;
  }
  return tmp;
};