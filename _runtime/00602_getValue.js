// _runtime/00602_getValue.js

export default function getValue(arg0, arg1) {
  let tmp;
  if (null != arg0) {
    tmp = arg0[arg1];
  }
  return tmp;
}
