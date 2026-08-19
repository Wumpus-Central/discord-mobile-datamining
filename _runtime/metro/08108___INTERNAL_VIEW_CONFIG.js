// _runtime/metro/08108___INTERNAL_VIEW_CONFIG.js
import processColor from "../00050_processColor.js";
import resolveAssetSource from "../00081_resolveAssetSource.js";
import codegenNativeComponent2 from "../00463_codegenNativeComponent.js";
import 08106__ from "08106__.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

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