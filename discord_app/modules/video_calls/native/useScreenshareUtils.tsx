import apexExperiment from "apexExperiment";
import reset from "reset";
import { ApplicationStreamStates } from "ME";
import DCDDeviceManager from "DCDDeviceManager";

const require = arg1;
function stopScreenshare() {
  const voiceEngine = require(4242) /* inject */.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    let tmpResult = tmp(4373);
    tmpResult = tmp(4257);
    tmpResult.stopStream(tmpResult.encodeStreamKey(currentUserActiveStream));
  }
  const obj = require(4242) /* inject */;
  importDefault(8847).setGoLiveSource(null);
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    const result = importDefault(6046).isForegroundServiceRunning((arg0) => {
      if (arg0) {
        let tmpResult = tmp(tmp2[6]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.startBroadcast();
      } else {
        tmpResult = tmp(tmp2[7]);
        const result = tmpResult.showScreenshareDisabledAlert();
      }
    });
    const obj2 = importDefault(6046);
  } else {
    BroadcastUploadManager.showPicker();
  }
}
DCDDeviceManager = DCDDeviceManager.getSystemVersionMajor();
const BroadcastUploadManager = require("registerAsset").NativeModules.BroadcastUploadManager;
let result = require("reset").fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  const _require = arg0;
  let tmp = importDefault(10755)(arg0);
  importDefault = tmp;
  const dependencyMap = tmp2;
  const showMobileGoLiveUpsell = importDefault(10766).useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  let obj = importDefault(10766);
  const items = [stateFromStores];
  stateFromStores = _require(589).useStateFromStores(items, () => stateFromStores.getCurrentUserActiveStream());
  const analyticsLocations = importDefault(5519)().analyticsLocations;
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
    const obj = require(4373) /* watchStream */;
    obj.stopStream(require(4257) /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
    const obj2 = require(4257) /* isStreamKey */;
  }
  importDefault(8847).setGoLiveSource(null);
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
      const S = require(8840) /* _handleToggleVideo */.showScreenshareDisabledAlert;
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
    videoPermission = require(10755) /* useHasVideoPermission */.getVideoPermission(channel);
    const obj = require(10755) /* useHasVideoPermission */;
  }
  if (videoPermission) {
    if ("android" === obj2.getVoiceEngine().platform) {
      let result = importDefault(6046).isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = tmp(tmp2[6]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = tmp(tmp2[7]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
      const obj3 = importDefault(6046);
    } else {
      BroadcastUploadManager.showPicker();
    }
    obj2 = require(4242) /* inject */;
  }
};