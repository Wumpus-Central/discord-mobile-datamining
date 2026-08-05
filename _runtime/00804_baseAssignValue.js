// _runtime/00804_baseAssignValue.js

export default function baseAssignValue(arg0, arg1, arg2) {
  if ("__proto__" == arg1) {
    if (require("00805_getNative.js") /* getNative */) {
      const obj = { configurable: true, enumerable: true, value: null, writable: true };
      obj[2] = arg2;
      require("00805_getNative.js") /* getNative */(arg0, arg1, obj);
    }
  }
  arg0[arg1] = arg2;
};