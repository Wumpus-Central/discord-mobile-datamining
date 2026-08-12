// _runtime/metro/04731___INTERNAL_VIEW_CONFIG.js
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSTabsBottomAccessory", directEventTypes: { topEnvironmentChange: { registrationName: "onEnvironmentChange" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onEnvironmentChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSTabsBottomAccessory", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;