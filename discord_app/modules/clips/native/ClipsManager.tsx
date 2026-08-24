// === Module 17116: showClipsToast ===

// Module 17116 (showClipsToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4097 */;
import result2 from "result" /* 4528 */;
import handleRTCConnectionStateDefault from "handleRTCConnectionState" /* 17117 */;

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