// _runtime/00737_getNative.js

export default function getNative(arg0, arg1) {
  const tmp = require("00738_getValue.js") /* getValue */(arg0, arg1);
  let tmp2;
  if (require("00739_baseIsNative.js") /* baseIsNative */(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};