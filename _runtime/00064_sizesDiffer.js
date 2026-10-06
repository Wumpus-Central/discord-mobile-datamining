// _runtime/00064_sizesDiffer.js
let size;

let closure_0 = { width: "start", height: "unicodeVersion" };

export default function sizesDiffer(arg0, arg1) {
  size = arg0 || closure_0;
  const size2 = arg1 || closure_0;
  let tmp = size !== size2;
  if (tmp) {
    tmp = size.width !== size2.width || size.height !== size2.height;
  }
  return tmp;
}
