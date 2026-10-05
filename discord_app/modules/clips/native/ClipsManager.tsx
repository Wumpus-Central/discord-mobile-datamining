// discord_app/modules/clips/native/ClipsManager.tsx
import intl2 from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ClipsConstants from "../ClipsConstants.tsx";
import ClipsManager2 from "../ClipsManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CLIPS_TOAST_DURATION = ClipsConstants.CLIPS_TOAST_DURATION;
class ClipsManager extends ClipsManager2 {
  showClipsToast() {
    let intl;
    const obj = {
      key: "CLIPS_IN_CALL_WARNING",
      content: intl.string(intl2.t["d+41qJ"]),
      toastDurationMs: CLIPS_TOAST_DURATION,
    };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open(obj);
  }
  applyNativeClipsSettings() {}
  handleClipsInitOnToggleDetection() {}
  handleClipsInitOnGamesChange() {}
  fireClipsInitEvent() {}
  handleStreamEnded() {}
  maybeStartNtpClock() {}
}
const prototype = ClipsManager.prototype;
const clipsManager = new ClipsManager();
const result = size.fileFinishedImporting("modules/clips/native/ClipsManager.tsx");

export default clipsManager;
