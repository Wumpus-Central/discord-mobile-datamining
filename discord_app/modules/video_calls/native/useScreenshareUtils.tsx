// discord_app/modules/video_calls/native/useScreenshareUtils.tsx
import registerAsset from "registerAsset";
import reset from "reset";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { ApplicationStreamStates } from "ME";
import { Features } from "DesktopSources";
import DCDDeviceManager from "DCDDeviceManager";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { inject } from "../../../../discord_common/js/packages/media-engine/native/inject.tsx";
import { trackDeviceChanged } from "../../../actions/AudioActionCreators.tsx";
import { watchStream } from "../../../actions/StreamActionCreators.tsx";
import { context } from "../../app_analytics/useAnalyticsLocations.tsx";
import { initialize } from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import { apexExperiment } from "../../go_live/native/MobileGoLiveUpsellExperiment.tsx";
import { isStreamKey } from "../../go_live/utils/StreamKeyUtils.tsx";
import { _handleToggleVideo } from "../../voice_calls/native/CallsUtils.tsx";
import { useHasVideoPermission } from "../useHasVideoPermission.tsx";

const require = arg1;
function stopScreenshare() {
  const voiceEngine = inject.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    let tmpResult = tmp(9860);
    tmpResult = tmp(4531);
    tmpResult.stopStream(tmpResult.encodeStreamKey(currentUserActiveStream));
  }
  const obj = inject;
  trackDeviceChanged.setGoLiveSource(null);
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    const result = initialize.isForegroundServiceRunning((arg0) => {
      if (arg0) {
        let tmpResult = tmp(tmp2[8]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.startBroadcast();
      } else {
        tmpResult = tmp(tmp2[9]);
        const result = tmpResult.showScreenshareDisabledAlert();
      }
    });
    const obj2 = initialize;
  } else {
    BroadcastUploadManager.showPicker();
  }
}
DCDDeviceManager = DCDDeviceManager.getSystemVersionMajor();
const BroadcastUploadManager = require("registerAsset").NativeModules.BroadcastUploadManager;
let result = require("reset").fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  const _require = arg0;
  let tmp = useHasVideoPermission(arg0);
  importDefault = tmp;
  const dependencyMap = tmp2;
  const items = [stateFromStores1];
  const stateFromStores = _initialize.useStateFromStores(items, () => stateFromStores1.supports(constants.VIDEO));
  let obj = _initialize;
  const showMobileGoLiveUpsell = apexExperiment.useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  let obj2 = apexExperiment;
  const items1 = [showMobileGoLiveUpsell];
  stateFromStores1 = _initialize.useStateFromStores(items1, () => showMobileGoLiveUpsell.getCurrentUserActiveStream());
  const analyticsLocations = context().analyticsLocations;
  const items2 = [stateFromStores1, arg0, stateFromStores, tmp, DCDDeviceManager >= 12, showMobileGoLiveUpsell, analyticsLocations];
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
      tmp3 = tmp2;
    }
    let obj = { isFeatureEnabled: tmp3, isActive: tmp, text: null, onPress: null, imgSource: null };
    if (!showMobileGoLiveUpsell) {
      if (tmp) {
        const intl = callback(tmp2[24]).intl;
        let stringResult = intl.string(callback(tmp2[24]).t.CpkXwZ);
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
              return lib(outer1_2[14]).showMobileGoLiveActionSheet(closure_1);
            };
          } else {
            fn = tmp14;
            if (tmp) {
              fn = outer1_10;
            }
          }
        } else {
          fn = callback(tmp2[9]).showScreenshareDisabledAlert;
        }
      } else {
        fn = function l() {
          let obj = lib(outer1_2[13]);
          obj = { type: lib(outer1_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: lib.id };
          obj.reportAVError(obj);
          const result = lib(outer1_2[9]).showMinOSScreenshareRequirementAlert();
        };
      }
      obj[3] = fn;
      if (obj2.isMetaQuest()) {
        tmp19(tmp ? tmp18[17] : tmp18[18]);
      } else {
        if (tmp4) {
          let tmp20 = tmp18[19];
        } else {
          tmp20 = tmp ? tmp18[20] : tmp18[19];
        }
        obj[4] = tmp19(tmp20);
        return obj;
      }
      obj2 = callback(tmp2[16]);
      tmp11 = closure_1;
      tmp12 = tmp2;
      const tmp13 = analyticsLocations;
    }
    const intl2 = callback(tmp2[24]).intl;
    stringResult = intl2.string(callback(tmp2[24]).t.fjBNo1);
  }, items2);
};
export const handleCloseScreenshare = function handleCloseScreenshare() {
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = watchStream;
    obj.stopStream(isStreamKey.encodeStreamKey(currentUserActiveStream));
    const obj2 = isStreamKey;
  }
  trackDeviceChanged.setGoLiveSource(null);
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
        let fn = function l() {
          return lib(outer1_2[14]).showMobileGoLiveActionSheet(closure_1);
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
      let obj = lib(outer1_2[13]);
      obj = { type: lib(outer1_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: lib.id };
      obj.reportAVError(obj);
      const result = lib(outer1_2[9]).showMinOSScreenshareRequirementAlert();
    };
  }
  return fn;
};
export const tryStartScreenShare = function tryStartScreenShare(channel) {
  let videoPermission = DCDDeviceManager >= 12;
  if (videoPermission) {
    videoPermission = useHasVideoPermission.getVideoPermission(channel);
    const obj = useHasVideoPermission;
  }
  if (videoPermission) {
    if ("android" === obj2.getVoiceEngine().platform) {
      let result = initialize.isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = tmp(tmp2[8]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = tmp(tmp2[9]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
      const obj3 = initialize;
    } else {
      BroadcastUploadManager.showPicker();
    }
    obj2 = inject;
  }
};