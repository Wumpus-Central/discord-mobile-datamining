let _self = typeof self === "object";
if (typeof self === "object") {
  _self = self;
}
if (_self) {
  const _self2 = self;
  const _Object = Object;
  _self = self.Object === Object;
}
if (_self) {
  _self = self;
}
let tmp = require("module_610") || _self;
if (!tmp) {
  const _Function = Function;
  tmp = Function("return this")();
}

export default tmp;