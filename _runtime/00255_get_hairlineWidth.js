// _runtime/00255_get_hairlineWidth.js
import resultDefault from "00026_result.js";
import flattenStyleDefault from "00148_flattenStyle.js";
import composeStylesDefault from "00256_composeStyles.js";
import { PixelRatio } from "00087_PixelRatio.js";

const require = arg1;
let obj = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
obj = {};
Object.defineProperty(obj, "hairlineWidth", {
  get: () => {
    if (null == closure_3) {
      const _default = PixelRatio /* PixelRatio */.default;
      const roundToNearestPixelResult = _default.roundToNearestPixel(0.4);
      closure_3 = roundToNearestPixelResult;
      if (0 === roundToNearestPixelResult) {
        closure_3 = 1 / _default.get();
      }
    }
    return closure_3;
  },
  set: undefined,
});
obj.absoluteFill = obj;
obj.absoluteFillObject = obj;
obj.compose = composeStylesDefault;
obj.flatten = flattenStyleDefault;
obj.setStyleAttributePreprocessor = function setStyleAttributePreprocessor(arg0, process) {
  if (true === resultDefault[arg0]) {
    let obj = { process: null };
    obj[0] = process;
  } else if (typeof tmp(26)[arg0] !== "object") {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.error("" + arg0 + " is not a valid style attribute");
  } else {
    obj = {};
    const merged = Object.assign(tmp(26)[arg0]);
    obj.process = process;
  }
  resultDefault[arg0] = obj;
};
obj.create = function create(arg0) {
  return arg0;
};

export default obj;
