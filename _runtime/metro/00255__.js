// === Module 255: ? ===

// Module 255
import _modDef26 from "module_26" /* 26 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import composeStylesDefault from "composeStyles" /* 256 */;

const require = arg1;
const rect = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
let obj = {};
Object.defineProperty(obj, "hairlineWidth", {
  get: () => {
    if (null == closure_3) {
      const _default = require("PixelRatio").default;
      const roundToNearestPixelResult = _default.roundToNearestPixel(0.4);
      closure_3 = roundToNearestPixelResult;
      if (0 === roundToNearestPixelResult) {
        closure_3 = 1 / _default.get();
      }
    }
    return closure_3;
  },
  set: undefined
});
obj.absoluteFill = rect;
obj.absoluteFillObject = rect;
obj.compose = composeStylesDefault;
obj.flatten = flattenStyleDefault;
obj.setStyleAttributePreprocessor = function setStyleAttributePreprocessor(arg0, process) {
  if (true === _modDef26[arg0]) {
    let obj = { process };
  } else if (typeof tmp(26)[arg0] !== "object") {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.error("" + arg0 + " is not a valid style attribute");
  } else {
    obj = {};
    const merged = Object.assign(tmp(26)[arg0]);
    obj.process = process;
  }
  _modDef26[arg0] = obj;
};
obj.create = function create(arg0) {
  return arg0;
};

export default obj;