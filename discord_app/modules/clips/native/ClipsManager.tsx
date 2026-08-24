// discord_app/modules/clips/native/ClipsManager.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import result2 from "../ClipsConstants.tsx";
import handleRTCConnectionStateDefault from "../ClipsManager.tsx";

const CLIPS_TOAST_DURATION = result2.CLIPS_TOAST_DURATION;
handleRTCConnectionStateDefault;
class ClipsManager extends tmp2 {
}
const prototype = ClipsManager.prototype;
prototype["showClipsToast"] = function showClipsToast() {
  let obj = dispatcherDefault;
  obj = { key: "CLIPS_IN_CALL_WARNING", content: null, toastDurationMs: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["d+41qJ"]);
  obj[2] = CLIPS_TOAST_DURATION;
  obj.open(obj);
};
prototype["applyNativeClipsSettings"] = function applyNativeClipsSettings(arg0) {

};
prototype["handleClipsInitOnToggleDetection"] = function handleClipsInitOnToggleDetection(arg0) {

};
prototype["handleClipsInitOnGamesChange"] = function handleClipsInitOnGamesChange(arg0) {

};
prototype["fireClipsInitEvent"] = function fireClipsInitEvent(arg0) {

};
prototype["handleStreamEnded"] = function handleStreamEnded(arg0) {

};
const clipsManager = new ClipsManager();
const result = set.fileFinishedImporting("modules/clips/native/ClipsManager.tsx");

export default clipsManager;