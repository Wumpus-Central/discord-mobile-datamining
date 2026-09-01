// discord_app/modules/video_calls/native/useScreenshareUtils.tsx
import inject from "../../../../discord_common/js/packages/media-engine/native/inject.tsx";
import isStreamKey from "../../go_live/utils/StreamKeyUtils.tsx";
import watchStream from "../../../actions/StreamActionCreators.tsx";
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import initializeDefault from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import _handleToggleVideo from "../../voice_calls/native/CallsUtils.tsx";
import trackDeviceChangedDefault from "../../../actions/AudioActionCreators.tsx";
import useHasVideoPermission from "../useHasVideoPermission.tsx";
import useHasVideoPermissionDefault from "../useHasVideoPermission.tsx";
import apexExperimentDefault from "../../go_live/native/MobileGoLiveUpsellExperiment.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/ApplicationStreamingStore.tsx";
import closure_5 from "../../../stores/MediaEngineStore.tsx";
import { ApplicationStreamStates } from "../../../Constants.tsx";
import { Features } from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import DCDDeviceManager from "../../../utils/native/DeviceUtils.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
function stopScreenshare() {
  const voiceEngine = inject.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    let tmpResult = tmp(4663);
    tmpResult = tmp(4544);
    tmpResult.stopStream(tmpResult.encodeStreamKey(currentUserActiveStream));
  }
  const obj = inject;
  trackDeviceChangedDefault.setGoLiveSource(null);
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    const result = initializeDefault.isForegroundServiceRunning((arg0) => {
      if (arg0) {
        let tmpResult = tmp(tmp2[8]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.startBroadcast();
      } else {
        tmpResult = tmp(tmp2[9]);
        const result = tmpResult.showScreenshareDisabledAlert();
      }
    });
    const obj2 = initializeDefault;
  } else {
    BroadcastUploadManager.showPicker();
  }
}
const systemVersionMajor = DCDDeviceManager.getSystemVersionMajor();
const BroadcastUploadManager = require("get ActivityIndicator").NativeModules.BroadcastUploadManager;
let result = require("set").fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  const _require = arg0;
  let tmp = useHasVideoPermissionDefault(arg0);
  importDefault = tmp;
  dependencyMap = tmp2;
  const items = [stateFromStores1];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => stateFromStores1.supports(constants.VIDEO));
  let obj = initialize;
  const showMobileGoLiveUpsell = apexExperimentDefault.useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  let obj2 = apexExperimentDefault;
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
      let flag = tmp4;
      if (tmp4 === undefined) {
        flag = false;
      }
      closure_1 = analyticsLocations;
      if (tmp12) {
        if (tmp11) {
          if (flag) {
            let fn = function l() {
              return lib(closure_1_2[14]).showMobileGoLiveActionSheet(closure_1);
            };
          } else {
            fn = tmp14;
            if (tmp) {
              fn = closure_1_10;
            }
          }
        } else {
          fn = callback(9774).showScreenshareDisabledAlert;
        }
      } else {
        fn = function l() {
          let obj = lib(closure_1_2[13]);
          obj = { type: lib(closure_1_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: lib.id };
          obj.reportAVError(obj);
          const result = lib(closure_1_2[9]).showMinOSScreenshareRequirementAlert();
        };
      }
      obj[3] = fn;
      if (obj2.isMetaQuest()) {
        tmp19(tmp ? 10054 : 10055);
      } else {
        if (tmp4) {
          let tmp20 = 10056;
        } else {
          tmp20 = tmp ? 10057 : 10056;
        }
        obj[4] = tmp19(tmp20);
        return obj;
      }
      obj2 = callback(1624);
      tmp11 = closure_1;
      tmp12 = dependencyMap;
      const tmp13 = analyticsLocations;
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
    const obj2 = isStreamKey;
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
      let obj = lib(closure_1_2[13]);
      obj = { type: lib(closure_1_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: lib.id };
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
    const obj = useHasVideoPermission;
  }
  if (videoPermission) {
    if ("android" === obj2.getVoiceEngine().platform) {
      let result = initializeDefault.isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = tmp(tmp2[8]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = tmp(tmp2[9]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
      const obj3 = initializeDefault;
    } else {
      BroadcastUploadManager.showPicker();
    }
    obj2 = inject;
  }
};