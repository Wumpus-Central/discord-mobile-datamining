// _runtime/metro/04430__.js
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: null, writable: true };
    obj[2] = require("../04431_constant.js") /* constant */(arg1);
    return require("../00805_getNative.js") /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;