// _runtime/00616_eq.js

export default function eq(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = arg0 != arg0 && arg1 != arg1;
    const tmp2 = arg0 != arg0 && arg1 != arg1;
  }
  return tmp;
}
