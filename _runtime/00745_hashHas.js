// _runtime/00745_hashHas.js

export default function hashHas(arg0) {
  const __data__ = this.__data__;
  if (require("00736_getNative.js") /* getNative */) {
    let tmp2 = undefined !== __data__[arg0];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(arg0) : call(__data__, arg0);
    const tmp = hasOwnProperty;
  }
  return tmp2;
};