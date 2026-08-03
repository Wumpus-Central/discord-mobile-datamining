import callBind from "callBind";
import defineProperty from "defineProperty";

let closure_2 = callBind.apply(require("getPolyfill")());
let closure_3 = require("callBoundIntrinsic")("Array.prototype.slice");
function map(arg0, arg1) {
  require(4509) /* RequireObjectCoercible */(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = require("getPolyfill");
obj[1] = require("map");
obj[2] = require("shimArrayPrototypeMap");
defineProperty(map, obj);

export default map;