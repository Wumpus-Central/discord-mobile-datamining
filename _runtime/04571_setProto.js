if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4572) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4573");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4574")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4574)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;