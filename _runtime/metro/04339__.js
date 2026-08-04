// _runtime/metro/04339__.js
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: null, writable: true };
    obj[2] = require(4340) /* constant */(arg1);
    return require(805) /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;