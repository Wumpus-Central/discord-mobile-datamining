// === Module 10931: stopScreenshare ===

// Module 10931 (stopScreenshare)
import inject from "inject" /* 4499 */;
import isStreamKey from "isStreamKey" /* 4531 */;
import contextDefault from "context" /* 7139 */;
import initializeDefault from "initialize" /* 7504 */;
import _handleToggleVideo from "_handleToggleVideo" /* 9647 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import watchStream from "watchStream" /* 9860 */;
import useHasVideoPermission from "useHasVideoPermission" /* 10930 */;
import useHasVideoPermissionDefault from "useHasVideoPermission" /* 10930 */;
import apexExperimentDefault from "apexExperiment" /* 10938 */;
import noop from "noop" /* 19 */;
import reset from "reset" /* 4652 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { ApplicationStreamStates } from "ME" /* 676 */;
import { Features } from "DesktopSources" /* 4529 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

require = fn;
function stopScreenshare() {
  const voiceEngine = inject.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const tmpResult = isStreamKey;
    tmpResult.stopStream(tmpResult.encodeStreamKey(currentUserActiveStream));
  }
  trackDeviceChangedDefault.setGoLiveSource(null);
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    const result = initializeDefault.isForegroundServiceRunning((arg0) => {
      if (arg0) {
        let tmpResult = callback(dependencyMap[8]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.startBroadcast();
      } else {
        tmpResult = callback(dependencyMap[9]);
        const result = tmpResult.showScreenshareDisabledAlert();
      }
    });
  } else {
    BroadcastUploadManager.showPicker();
  }
  obj = inject;
}
const systemVersionMajor = DCDDeviceManager.getSystemVersionMajor();
const BroadcastUploadManager = require("get ActivityIndicator").NativeModules.BroadcastUploadManager;
let result = require("obj132").fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  const _require = arg0;
  let tmp = useHasVideoPermissionDefault(arg0);
  importDefault = tmp;
  dependencyMap = tmp2;
  const items = [stateFromStores1];
  const stateFromStores = _require(589).useStateFromStores(items, () => stateFromStores1.supports(constants.VIDEO));
  let obj = _require(589);
  const showMobileGoLiveUpsell = apexExperimentDefault.useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  const items1 = [showMobileGoLiveUpsell];
  stateFromStores1 = _require(589).useStateFromStores(items1, () => showMobileGoLiveUpsell.getCurrentUserActiveStream());
  const analyticsLocations = contextDefault().analyticsLocations;
  const items2 = [stateFromStores1, arg0, stateFromStores, tmp, closure_8 >= 12, showMobileGoLiveUpsell, analyticsLocations];
  return stateFromStores.useMemo(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = stateFromStores1.state === analyticsLocations.ACTIVE;
    }
    let tmp3 = stateFromStores;
    if (stateFromStores) {
      tmp3 = closure_1;
    }
    if (tmp3) {
      tmp3 = dependencyMap;
    }
    let obj = { isFeatureEnabled: tmp3, isActive: tmp, text: null, onPress: null, imgSource: null };
    if (!showMobileGoLiveUpsell) {
      if (tmp) {
        const intl = callback(1236).intl;
        let stringResult = intl.string(callback(1236).t.CpkXwZ);
      }
      obj[2] = stringResult;
      let flag = showMobileGoLiveUpsell;
      if (showMobileGoLiveUpsell === undefined) {
        flag = false;
      }
      closure_1 = analyticsLocations;
      if (dependencyMap) {
        if (tmp11) {
          if (flag) {
            let fn = function l() {
              return lib(closure_1_2[14]).showMobileGoLiveActionSheet(closure_1);
            };
          } else {
            fn = tmp14;
            if (tmp) {
              fn = stopScreenshare;
            }
          }
        } else {
          fn = callback(9647).showScreenshareDisabledAlert;
        }
      } else {
        fn = function l() {
          lib(closure_1_2[13]);
          const obj = { type: lib(closure_1_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: lib.id };
          obj.reportAVError(obj);
          const result = lib(closure_1_2[9]).showMinOSScreenshareRequirementAlert();
        };
      }
      obj[3] = fn;
      if (obj2.isMetaQuest()) {
        tmp19(tmp ? 10943 : 10944);
      } else {
        if (showMobileGoLiveUpsell) {
          let tmp20 = 10945;
        } else {
          tmp20 = tmp ? 10946 : 10945;
        }
        obj[4] = tmp19(tmp20);
        return obj;
      }
      obj2 = callback(1625);
      tmp11 = closure_1;
    }
    const intl2 = callback(1236).intl;
    stringResult = intl2.string(callback(1236).t.fjBNo1);
  }, items2);
};
export const handleCloseScreenshare = function handleCloseScreenshare() {
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = watchStream;
    obj.stopStream(isStreamKey.encodeStreamKey(currentUserActiveStream));
  }
  trackDeviceChangedDefault.setGoLiveSource(null);
};
export { stopScreenshare };
export { startStream };
export const getOSRequirement = function getOSRequirement() {
  return closure_8 >= 12;
};
export const getStreamPressHandler = function getStreamPressHandler(analyticsLocations) {
  ({ channel: require, showMobileGoLiveUpsell } = analyticsLocations);
  ({ hasPermission, isActive, osRequirement } = analyticsLocations);
  if (showMobileGoLiveUpsell === undefined) {
    showMobileGoLiveUpsell = false;
  }
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (osRequirement) {
    if (hasPermission) {
      if (showMobileGoLiveUpsell) {
        let fn = function l() {
          return lib(closure_1_2[14]).showMobileGoLiveActionSheet(closure_1);
        };
      } else {
        fn = tmp;
        if (isActive) {
          fn = stopScreenshare;
        }
      }
    } else {
      fn = _handleToggleVideo.showScreenshareDisabledAlert;
    }
  } else {
    fn = function l() {
      lib(closure_1_2[13]);
      const obj = { type: lib(closure_1_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: lib.id };
      obj.reportAVError(obj);
      const result = lib(closure_1_2[9]).showMinOSScreenshareRequirementAlert();
    };
  }
  return fn;
};
export const tryStartScreenShare = function tryStartScreenShare(channel) {
  let videoPermission = closure_8 >= 12;
  if (videoPermission) {
    videoPermission = useHasVideoPermission.getVideoPermission(channel);
  }
  if (videoPermission) {
    if ("android" === obj2.getVoiceEngine().platform) {
      let result = initializeDefault.isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = callback(dependencyMap[8]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = callback(dependencyMap[9]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
    } else {
      BroadcastUploadManager.showPicker();
    }
    obj2 = inject;
  }
};