import { getSystemLocale } from "../../../intl/index.native.tsx";
import { dispatcher } from "../../toast/native/ToastActionCreators.tsx";
// discord_app/modules/clips/native/ClipsManager.tsx
import { CLIPS_TOAST_DURATION } from "result";
import "handleRTCConnectionState";

class ClipsManager extends tmp2 {
}
const prototype = ClipsManager.prototype;
prototype["showClipsToast"] = function showClipsToast() {
  let obj = dispatcher;
  obj = { key: "CLIPS_IN_CALL_WARNING", content: null, toastDurationMs: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t["d+41qJ"]);
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
const result = require("dispatcher").fileFinishedImporting("modules/clips/native/ClipsManager.tsx");

export default clipsManager;