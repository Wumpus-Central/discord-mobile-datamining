// _runtime/00323_clamp.js

export default function clamp(arg0, arg1, arg2) {
  let tmp = arg0;
  let tmp2 = arg1;
  if (arg1 >= arg0) {
    if (tmp2 > arg2) {
      tmp2 = arg2;
    }
    tmp = tmp2;
  }
  return tmp;
}
