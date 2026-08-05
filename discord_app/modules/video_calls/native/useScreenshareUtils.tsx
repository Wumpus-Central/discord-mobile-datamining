// discord_app/modules/video_calls/native/useScreenshareUtils.tsx
import apexExperiment from "apexExperiment";
import reset from "reset";
import { ApplicationStreamStates } from "ME";
import DCDDeviceManager from "DCDDeviceManager";

const require = arg1;
function stopScreenshare() {
  const voiceEngine = require("../../../../discord_common/js/packages/media-engine/native/inject.tsx") /* inject */.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    let tmpResult = tmp(4464);
    tmpResult = tmp(4348);
    tmpResult.stopStream(tmpResult.encodeStreamKey(currentUserActiveStream));
  }
  const obj = require("../../../../discord_common/js/packages/media-engine/native/inject.tsx") /* inject */;
  require("../../../actions/AudioActionCreators.tsx").setGoLiveSource(null);
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    const result = require("../../foreground_service/mobile/ForegroundServiceManager.android.tsx").isForegroundServiceRunning((arg0) => {
      if (arg0) {
        let tmpResult = tmp(tmp2[6]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.startBroadcast();
      } else {
        tmpResult = tmp(tmp2[7]);
        const result = tmpResult.showScreenshareDisabledAlert();
      }
    });
    const obj2 = require("../../foreground_service/mobile/ForegroundServiceManager.android.tsx");
  } else {
    BroadcastUploadManager.showPicker();
  }
}
DCDDeviceManager = DCDDeviceManager.getSystemVersionMajor();
const BroadcastUploadManager = require("registerAsset").NativeModules.BroadcastUploadManager;
let result = require("reset").fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  const _require = arg0;
  let tmp = require("../useHasVideoPermission.tsx")(arg0);
  importDefault = tmp;
  const dependencyMap = tmp2;
  const showMobileGoLiveUpsell = require("../../go_live/native/MobileGoLiveUpsellExperiment.tsx").useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  let obj = require("../../go_live/native/MobileGoLiveUpsellExperiment.tsx");
  const items = [stateFromStores];
  stateFromStores = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => stateFromStores.getCurrentUserActiveStream());
  const analyticsLocations = require("../../app_analytics/useAnalyticsLocations.tsx")().analyticsLocations;
  const items1 = [stateFromStores, arg0, tmp, DCDDeviceManager >= 12, showMobileGoLiveUpsell, analyticsLocations];
  return showMobileGoLiveUpsell.useMemo(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = stateFromStores.state === analyticsLocations.ACTIVE;
    }
    let tmp4 = closure_1;
    if (closure_1) {
      tmp4 = tmp2;
    }
    let obj = { isFeatureEnabled: tmp4, isActive: tmp, text: null, onPress: null, imgSource: null };
    if (!showMobileGoLiveUpsell) {
      if (tmp) {
        const intl = callback(tmp2[22]).intl;
        let stringResult = intl.string(callback(tmp2[22]).t.CpkXwZ);
      }
      obj[2] = stringResult;
      let flag = tmp5;
      if (tmp5 === undefined) {
        flag = false;
      }
      closure_1 = analyticsLocations;
      if (tmp12) {
        if (closure_1) {
          if (flag) {
            class S {
              constructor() {
                obj = closure_0(outer1_2[12]);
                return obj.showMobileGoLiveActionSheet(closure_1);
              }
            }
          } else {
            class S {
              constructor() {
                obj = closure_0(outer1_2[12]);
                return obj.showMobileGoLiveActionSheet(closure_1);
              }
            }
            if (tmp) {
              class S {
                constructor() {
                  obj = closure_0(outer1_2[12]);
                  return obj.showMobileGoLiveActionSheet(closure_1);
                }
              }
            }
          }
        } else {
          class S {
            constructor() {
              obj = closure_0(outer1_2[12]);
              return obj.showMobileGoLiveActionSheet(closure_1);
            }
          }
          const S = callback(tmp2[7]).showScreenshareDisabledAlert;
        }
      } else {
        class S {
          constructor() {
            obj = closure_0(outer1_2[11]);
            obj = { type: closure_0(outer1_2[11]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
            reportAVErrorResult = obj.reportAVError(obj);
            obj3 = closure_0(outer1_2[7]);
            result = obj3.showMinOSScreenshareRequirementAlert();
            return;
          }
        }
      }
      obj[3] = S;
      if (obj2.isMetaQuest()) {
        class S {
          constructor() {
            obj = closure_0(outer1_2[11]);
            obj = { type: closure_0(outer1_2[11]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
            reportAVErrorResult = obj.reportAVError(obj);
            obj3 = closure_0(outer1_2[7]);
            result = obj3.showMinOSScreenshareRequirementAlert();
            return;
          }
        }
      } else {
        class S {
          constructor() {
            obj = closure_0(outer1_2[11]);
            obj = { type: closure_0(outer1_2[11]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
            reportAVErrorResult = obj.reportAVError(obj);
            obj3 = closure_0(outer1_2[7]);
            result = obj3.showMinOSScreenshareRequirementAlert();
            return;
          }
        }
        obj[4] = tmp17(tmp18);
        return obj;
      }
      obj2 = callback(tmp2[14]);
      tmp12 = tmp2;
      const tmp13 = analyticsLocations;
      tmp17 = closure_1;
    }
    const intl2 = callback(tmp2[22]).intl;
    stringResult = intl2.string(callback(tmp2[22]).t.fjBNo1);
  }, items1);
};
export const handleCloseScreenshare = function handleCloseScreenshare() {
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = require("../../../actions/StreamActionCreators.tsx") /* watchStream */;
    obj.stopStream(require("../../go_live/utils/StreamKeyUtils.tsx") /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
    const obj2 = require("../../go_live/utils/StreamKeyUtils.tsx") /* isStreamKey */;
  }
  require("../../../actions/AudioActionCreators.tsx").setGoLiveSource(null);
};
export { stopScreenshare };
export { startStream };
export const getOSRequirement = function getOSRequirement() {
  return DCDDeviceManager >= 12;
};
export const getStreamPressHandler = function getStreamPressHandler(analyticsLocations) {
  let hasPermission;
  let isActive;
  let osRequirement;
  let require;
  let showMobileGoLiveUpsell;
  ({ channel: require, showMobileGoLiveUpsell } = analyticsLocations);
  ({ hasPermission, isActive, osRequirement } = analyticsLocations);
  if (showMobileGoLiveUpsell === undefined) {
    showMobileGoLiveUpsell = false;
  }
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (osRequirement) {
    if (hasPermission) {
      if (showMobileGoLiveUpsell) {
        class S {
          constructor() {
            obj = closure_0(outer1_2[12]);
            return obj.showMobileGoLiveActionSheet(closure_1);
          }
        }
      } else {
        class S {
          constructor() {
            obj = closure_0(outer1_2[12]);
            return obj.showMobileGoLiveActionSheet(closure_1);
          }
        }
        if (isActive) {
          class S {
            constructor() {
              obj = closure_0(outer1_2[12]);
              return obj.showMobileGoLiveActionSheet(closure_1);
            }
          }
        }
      }
    } else {
      class S {
        constructor() {
          obj = closure_0(outer1_2[12]);
          return obj.showMobileGoLiveActionSheet(closure_1);
        }
      }
      const S = require("../../voice_calls/native/CallsUtils.tsx") /* _handleToggleVideo */.showScreenshareDisabledAlert;
    }
  } else {
    class S {
      constructor() {
        obj = closure_0(outer1_2[11]);
        obj = { type: closure_0(outer1_2[11]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
        reportAVErrorResult = obj.reportAVError(obj);
        obj3 = closure_0(outer1_2[7]);
        result = obj3.showMinOSScreenshareRequirementAlert();
        return;
      }
    }
  }
  return S;
};
export const tryStartScreenShare = function tryStartScreenShare(channel) {
  let videoPermission = DCDDeviceManager >= 12;
  if (videoPermission) {
    videoPermission = require("../useHasVideoPermission.tsx") /* useHasVideoPermission */.getVideoPermission(channel);
    const obj = require("../useHasVideoPermission.tsx") /* useHasVideoPermission */;
  }
  if (videoPermission) {
    if ("android" === obj2.getVoiceEngine().platform) {
      let result = require("../../foreground_service/mobile/ForegroundServiceManager.android.tsx").isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = tmp(tmp2[6]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = tmp(tmp2[7]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
      const obj3 = require("../../foreground_service/mobile/ForegroundServiceManager.android.tsx");
    } else {
      BroadcastUploadManager.showPicker();
    }
    obj2 = require("../../../../discord_common/js/packages/media-engine/native/inject.tsx") /* inject */;
  }
};