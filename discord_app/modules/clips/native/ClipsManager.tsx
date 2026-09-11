// === Module 17888: ClipsManager ===

// Module 17888 (ClipsManager)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import ClipsConstants from "ClipsConstants" /* 5183 */;
import ClipsManager from "clips/ClipsManager" /* 17889 */;
import size from "module_2" /* 2 */;

const CLIPS_TOAST_DURATION = ClipsConstants.CLIPS_TOAST_DURATION;
class ClipsManager extends tmp2 {
}
const prototype = ClipsManager.prototype;
prototype["showClipsToast"] = function showClipsToast() {
  const obj = { key: "CLIPS_IN_CALL_WARNING", content: null, toastDurationMs: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["d+41qJ"]);
  obj.toastDurationMs = CLIPS_TOAST_DURATION;
  obj.open(obj);
};
prototype["applyNativeClipsSettings"] = function applyNativeClipsSettings() {

};
prototype["handleClipsInitOnToggleDetection"] = function handleClipsInitOnToggleDetection() {

};
prototype["handleClipsInitOnGamesChange"] = function handleClipsInitOnGamesChange() {

};
prototype["fireClipsInitEvent"] = function fireClipsInitEvent() {

};
prototype["handleStreamEnded"] = function handleStreamEnded() {

};
prototype["maybeStartNtpClock"] = function maybeStartNtpClock() {

};
const clipsManager = new ClipsManager();
const result = size.fileFinishedImporting("modules/clips/native/ClipsManager.tsx");

export default clipsManager;