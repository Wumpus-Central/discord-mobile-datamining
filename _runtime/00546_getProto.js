if (require("getPrototypeOf")) {
  function getProto(arg0) {
    return require(547) /* getPrototypeOf */(arg0);
  }
} else if (require("module_548")) {
  getProto = function getProto(obj) {
    if (obj) {
      return require(548)(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (require("module_550")) {
    getProto = function getProto(arg0) {
      return require(550)(arg0);
    };
  }
}

export default getProto;