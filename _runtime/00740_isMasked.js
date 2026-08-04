// _runtime/00740_isMasked.js
const match = /[^.]+$/.exec(require("module_741") && require("module_741").keys && require("module_741").keys.IE_PROTO || "");
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp2}`;
}

export default function isMasked(arg0) {
  let tmp2 = str;
  if (tmp2) {
    tmp2 = tmp in arg0;
  }
  return tmp2;
};