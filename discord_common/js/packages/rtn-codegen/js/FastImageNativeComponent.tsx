// discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = { source: true, resizeMode: true, placeholder: true, enableAnimation: true, paused: true, manualPlayback: true, fade: true, usesSmallCache: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoadStart: true, onProgress: true, onError: true, onLoad: true, onLoadEnd: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDFastImageView", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;