// === Module 18567: ClipsManager ===

// Module 18567 (ClipsManager)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ClipsConstants from "ClipsConstants" /* 7762 */;
import ClipsManager from "clips/ClipsManager" /* 18568 */;
import size from "module_2" /* 2 */;

const CLIPS_TOAST_DURATION = ClipsConstants.CLIPS_TOAST_DURATION;
class ClipsManager extends tmp2 {
}
const prototype = ClipsManager.prototype;
prototype["showClipsToast"] = function showClipsToast() {
  const obj2 = { text: null, duration: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["d+41qJ"]);
  obj2.duration = CLIPS_TOAST_DURATION;
  ToastActionCreatorsDefault.open("CLIPS_IN_CALL_WARNING", obj2);
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