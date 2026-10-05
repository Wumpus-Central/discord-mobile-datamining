// === Module 255: ? ===

// Module 255
import _modDef26 from "module_26" /* 26 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import composeStylesDefault from "composeStyles" /* 256 */;

const require = globalThis.__r;
let closure_3;

const rect = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
let obj = {
  absoluteFill: rect,
  absoluteFillObject: rect,
  compose: composeStylesDefault,
  flatten: flattenStyleDefault,
  setStyleAttributePreprocessor(arg0, process) {
    let obj2;
    if (true === _modDef26[arg0]) {
      obj2 = { process };
      const obj = { process };
    } else if (typeof _modDef26[arg0] !== "object") {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("" + arg0 + " is not a valid style attribute");
    } else {
      obj2 = { process };
      const merged = Object.assign(_modDef26[arg0]);
    }
    _modDef26[arg0] = obj2;
  },
  create(arg0) {
    return arg0;
  }
};
Object.defineProperty(obj, "hairlineWidth", {
  get: () => {
    if (null == closure_3) {
      const _default = require("module_87").default;
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

export default obj;