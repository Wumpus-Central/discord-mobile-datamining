// discord_app/modules/video_calls/native/useScreenshareUtils.tsx
import inject from "../../../../discord_common/js/packages/media-engine/native/inject.tsx";
import isStreamKey from "../../go_live/utils/StreamKeyUtils.tsx";
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import initializeDefault from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import _handleToggleVideo from "../../voice_calls/native/CallsUtils.tsx";
import trackDeviceChangedDefault from "../../../actions/AudioActionCreators.tsx";
import watchStream from "../../../actions/StreamActionCreators.tsx";
import useHasVideoPermission from "../useHasVideoPermission.tsx";
import useHasVideoPermissionDefault from "../useHasVideoPermission.tsx";
import apexExperimentDefault from "../../go_live/native/MobileGoLiveUpsellExperiment.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import reset from "../../../stores/ApplicationStreamingStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import { ApplicationStreamStates } from "../../../Constants.tsx";
import { Features } from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import DCDDeviceManager from "../../../utils/native/DeviceUtils.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

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
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => stateFromStores1.supports(constants.VIDEO));
  let obj = initialize;
  const showMobileGoLiveUpsell = apexExperimentDefault.useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  const items1 = [showMobileGoLiveUpsell];
  stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => showMobileGoLiveUpsell.getCurrentUserActiveStream());
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