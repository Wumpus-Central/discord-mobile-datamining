// discord_app/modules/media_engine/VideoGuardBannerManager.tsx
import initializeDefault from "initialize" /* 5038 */;
import closure_3 from "initialize" /* 16722 */;
import { RTCConnectionStates } from "ME" /* 676 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4529 */;

let require = arg1;
initializeDefault;
let prototype = function VideoGuardBannerManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    RTC_CONNECTION_STATE(state) {
      return applyArgumentsResult.handleConnectionState(state);
    }
  };
  applyArgumentsResult.handleConnectionState = function handleConnectionState(state) {
    let tmp = state.state === constants.RTC_CONNECTED;
    if (tmp) {
      tmp = state.context === constants2.DEFAULT;
    }
    if (tmp) {
      let videoEnabled = closure_3.hasShownBanner();
      if (!videoEnabled) {
        const VideoGuardExperiment = applyArgumentsResult(13106).VideoGuardExperiment;
        videoEnabled = VideoGuardExperiment.getConfig({ location: "VideoGuardBannerManager" }).videoEnabled;
      }
      if (!videoEnabled) {
        const result = applyArgumentsResult(16723).presentVideoGuardBanner();
        const obj = applyArgumentsResult(16723);
        callback(709).dispatch({ type: "VIDEO_GUARD_BANNER_SHOWN" });
        const obj2 = callback(709);
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/media_engine/VideoGuardBannerManager.tsx");

export default prototype;