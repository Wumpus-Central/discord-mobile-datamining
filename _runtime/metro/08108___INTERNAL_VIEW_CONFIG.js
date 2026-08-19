// === Module 8108: __INTERNAL_VIEW_CONFIG ===

// Module 8108 (__INTERNAL_VIEW_CONFIG)
import processColor from "processColor" /* 50 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 463 */;
import module_8106 from "module_8106" /* 8106 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = module_8106(codegenNativeComponent2);
const obj = { process: resolveAssetSource };
obj[6] = obj;
obj[7] = { process: processColor.default };
obj[9] = { process: resolveAssetSource };
obj[10] = { process: processColor.default };
obj[14] = { process: resolveAssetSource };
obj[15] = { process: processColor.default };
obj[16] = { process: resolveAssetSource };
obj[3] = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onChange: true, onRNCSliderSlidingStart: true, onRNCSliderSlidingComplete: true, onRNCSliderValueChange: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default setRuntimeConfigProvider.get("RNCSlider", () => obj);