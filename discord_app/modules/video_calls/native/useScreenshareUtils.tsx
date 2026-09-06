// discord_app/modules/video_calls/native/useScreenshareUtils.tsx
import util from "../../../intl/index.native.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import inject from "../../../../discord_common/js/packages/media-engine/native/inject.tsx";
import StreamKeyUtils from "../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../actions/StreamActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import ForegroundServiceManagerDefault from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import CallsUtils from "../../voice_calls/native/CallsUtils.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import useHasVideoPermission from "../useHasVideoPermission.tsx";
import MobileGoLiveUpsellExperimentDefault from "../../go_live/native/MobileGoLiveUpsellExperiment.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";

const useHasVideoPermissionDefault = useHasVideoPermission;

require = fn;
function stopScreenshare() {
  const voiceEngine = inject.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    tmp(4702);
    const tmpResult = tmp(4612);
    tmpResult.stopStream(tmpResult.encodeStreamKey(currentUserActiveStream));
  }
  AudioActionCreatorsDefault.setGoLiveSource(null);
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    const result = ForegroundServiceManagerDefault.isForegroundServiceRunning((arg0) => {
      if (arg0) {
        let tmpResult = tmp(tmp2[8]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.startBroadcast();
      } else {
        tmpResult = tmp(tmp2[9]);
        const result = tmpResult.showScreenshareDisabledAlert();
      }
    });
  } else {
    BroadcastUploadManager.showPicker();
  }
}
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const Features = fn(4585).Features;
const DeviceUtils = fn(4539);
const systemVersionMajor = DeviceUtils.getSystemVersionMajor();
const BroadcastUploadManager = fn(17).NativeModules.BroadcastUploadManager;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default function useScreenshareUtils(arg0) {
  _require = arg0;
  let tmp = useHasVideoPermissionDefault(arg0);
  importDefault = tmp;
  dependencyMap = tmp2;
  const items = [stateFromStores1];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    stateFromStores1.supports(constants.VIDEO),
  );
  let obj = require("initialize");
  const showMobileGoLiveUpsell = MobileGoLiveUpsellExperimentDefault.useConfig({
    location: "useScreenshareUtils",
  }).showMobileGoLiveUpsell;
  const items1 = [showMobileGoLiveUpsell];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    showMobileGoLiveUpsell.getCurrentUserActiveStream(),
  );
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items2 = [
    stateFromStores1,
    arg0,
    stateFromStores,
    tmp,
    closure_8 >= 12,
    showMobileGoLiveUpsell,
    analyticsLocations,
  ];
  return stateFromStores.useMemo(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = stateFromStores1.state === ApplicationStreamStates.ACTIVE;
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
        const intl = util.intl;
        let stringResult = intl.string(util.t.CpkXwZ);
      }
      obj.text = stringResult;
      let flag = tmp4;
      if (tmp4 === undefined) {
        flag = false;
      }
      closure_1 = analyticsLocations;
      if (tmp12) {
        if (tmp11) {
          if (flag) {
            let fn = function l() {
              return closure_0(9952).showMobileGoLiveActionSheet(closure_1);
            };
          } else {
            fn = tmp14;
            if (tmp) {
              fn = stopScreenshare;
            }
          }
        } else {
          fn = CallsUtils.showScreenshareDisabledAlert;
        }
      } else {
        fn = function l() {
          closure_0(9110);
          const obj = { type: closure_0(9110).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
          obj.reportAVError(obj);
          const result = closure_0(9082).showMinOSScreenshareRequirementAlert();
        };
      }
      obj.onPress = fn;
      if (obj2.isMetaQuest()) {
        tmp19(tmp ? 9971 : 9972);
      } else {
        if (tmp4) {
          let tmp20 = 9973;
        } else {
          tmp20 = tmp ? 9974 : 9973;
        }
        obj.imgSource = tmp19(tmp20);
        return obj;
      }
      obj2 = MetaQuestUtils;
      tmp11 = closure_1;
      tmp12 = dependencyMap;
    }
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.fjBNo1);
  }, items2);
}
export const handleCloseScreenshare = function handleCloseScreenshare() {
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = StreamActionCreators;
    obj.stopStream(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
  }
  AudioActionCreatorsDefault.setGoLiveSource(null);
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
          return closure_0(9952).showMobileGoLiveActionSheet(closure_1);
        };
      } else {
        fn = tmp;
        if (isActive) {
          fn = stopScreenshare;
        }
      }
    } else {
      fn = CallsUtils.showScreenshareDisabledAlert;
    }
  } else {
    fn = function l() {
      closure_0(9110);
      const obj = { type: closure_0(9110).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
      obj.reportAVError(obj);
      const result = closure_0(9082).showMinOSScreenshareRequirementAlert();
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
      let result = ForegroundServiceManagerDefault.isForegroundServiceRunning((arg0) => {
        if (arg0) {
          let tmpResult = tmp(tmp2[8]);
          const voiceEngine = tmpResult.getVoiceEngine();
          voiceEngine.startBroadcast();
        } else {
          tmpResult = tmp(tmp2[9]);
          const result = tmpResult.showScreenshareDisabledAlert();
        }
      });
    } else {
      BroadcastUploadManager.showPicker();
    }
    obj2 = inject;
  }
};
