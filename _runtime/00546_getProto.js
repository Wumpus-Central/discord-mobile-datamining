// _runtime/00546_getProto.js
if (require("getPrototypeOf")) {
  function getProto(arg0) {
    return require("00547_getPrototypeOf.js") /* getPrototypeOf */(arg0);
  }
} else if (require("module_548")) {
  getProto = function getProto(obj) {
    if (obj) {
      return require("metro/00548__.js")(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (require("module_550")) {
    getProto = function getProto(arg0) {
      return require("metro/00550__.js")(arg0);
    };
  }
}

export default getProto;