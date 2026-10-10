// discord_app/modules/clips/native/ClipsManager.tsx
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ClipsConstants from "../ClipsConstants.tsx";
import ClipsManager from "../ClipsManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CLIPS_TOAST_DURATION = ClipsConstants.CLIPS_TOAST_DURATION;
class ClipsManager extends tmp2 {}
const prototype = ClipsManager.prototype;
prototype["showClipsToast"] = function showClipsToast() {
  const obj2 = { text: null, duration: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["d+41qJ"]);
  obj2.duration = CLIPS_TOAST_DURATION;
  ToastActionCreatorsDefault.open("CLIPS_IN_CALL_WARNING", obj2);
};
prototype["applyNativeClipsSettings"] = function applyNativeClipsSettings() {};
prototype["handleClipsInitOnToggleDetection"] = function handleClipsInitOnToggleDetection() {};
prototype["handleClipsInitOnGamesChange"] = function handleClipsInitOnGamesChange() {};
prototype["fireClipsInitEvent"] = function fireClipsInitEvent() {};
prototype["handleStreamEnded"] = function handleStreamEnded() {};
prototype["maybeStartNtpClock"] = function maybeStartNtpClock() {};
const clipsManager = new ClipsManager();
const result = size.fileFinishedImporting("modules/clips/native/ClipsManager.tsx");

export default clipsManager;
