// === Module 10083: useScreenshareUtils ===

// Module 10083 (useScreenshareUtils)
import util from "util" /* 1115 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import inject from "inject" /* 1911 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4691 */;
import StreamActionCreators from "StreamActionCreators" /* 4781 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7269 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7861 */;
import CallsUtils from "CallsUtils" /* 9214 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9221 */;
import useHasVideoPermission from "useHasVideoPermission" /* 10078 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 10090 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4661 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;

const require = globalThis.__r;
const useHasVideoPermissionDefault = useHasVideoPermission;

require = fn;
function stopScreenshare() {
  const voiceEngine = inject.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const tmpResult = StreamActionCreators;
    tmpResult.stopStream(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
    const tmpResult2 = StreamKeyUtils;
  }
  AudioActionCreatorsDefault.setGoLiveSource(null);
}
function startStream() {
  if ("android" === obj.getVoiceEngine().platform) {
    const result = ForegroundServiceManagerDefault.isForegroundServiceRunning((arg0) => {
      if (arg0) {
        const voiceEngine = require("inject").getVoiceEngine();
        voiceEngine.startBroadcast();
        const tmpResult = require("inject");
      } else {
        const result = require("CallsUtils").showScreenshareDisabledAlert();
        const tmpResult2 = require("CallsUtils");
      }
    });
  } else {
    BroadcastUploadManager.showPicker();
  }
  obj = inject;
}
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const Features = fn(4664).Features;
const DeviceUtils = fn(4618);
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
  const stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores1.supports(constants.VIDEO));
  let obj = require("initialize");
  const showMobileGoLiveUpsell = MobileGoLiveUpsellExperimentDefault.useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
  const items1 = [showMobileGoLiveUpsell];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => showMobileGoLiveUpsell.getCurrentUserActiveStream());
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items2 = [stateFromStores1, arg0, stateFromStores, tmp, closure_8 >= 12, showMobileGoLiveUpsell, analyticsLocations];
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
      let flag = showMobileGoLiveUpsell;
      if (showMobileGoLiveUpsell === undefined) {
        flag = false;
      }
      closure_1 = analyticsLocations;
      if (dependencyMap) {
        if (tmp11) {
          if (flag) {
            let fn = function l() {
              return closure_0(10084).showMobileGoLiveActionSheet(closure_1);
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
          const obj = closure_0(9242);
          obj.reportAVError({ type: closure_0(9242).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id });
          const obj2 = { type: closure_0(9242).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
          const result = closure_0(9214).showMinOSScreenshareRequirementAlert();
        };
      }
      obj.onPress = fn;
      if (obj2.isMetaQuest()) {
        importDefault(tmp ? 10102 : 10103);
      } else {
        if (showMobileGoLiveUpsell) {
          let tmp20 = 10104;
        } else {
          tmp20 = tmp ? 10105 : 10104;
        }
        obj.imgSource = importDefault(tmp20);
        return obj;
      }
      obj2 = MetaQuestUtils;
      tmp11 = closure_1;
    }
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.fjBNo1);
  }, items2);
};
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
          return closure_0(10084).showMobileGoLiveActionSheet(closure_1);
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
      const obj = closure_0(9242);
      obj.reportAVError({ type: closure_0(9242).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id });
      const obj2 = { type: closure_0(9242).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
      const result = closure_0(9214).showMinOSScreenshareRequirementAlert();
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
          const voiceEngine = require("inject").getVoiceEngine();
          voiceEngine.startBroadcast();
          const tmpResult = require("inject");
        } else {
          const result = require("CallsUtils").showScreenshareDisabledAlert();
          const tmpResult2 = require("CallsUtils");
        }
      });
    } else {
      BroadcastUploadManager.showPicker();
    }
    obj2 = inject;
  }
};