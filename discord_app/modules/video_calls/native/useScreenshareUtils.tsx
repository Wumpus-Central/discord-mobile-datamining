// === Module 11919: useScreenshareUtils ===

// Module 11919 (useScreenshareUtils)
import util from "util" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import inject from "inject" /* 2008 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5915 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6717 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import StreamActionCreators from "StreamActionCreators" /* 7901 */;
import CallsUtils from "CallsUtils" /* 9221 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10211 */;
import useHasVideoPermission from "useHasVideoPermission" /* 11914 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 11925 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;

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
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
const Features = fn(5768).Features;
const DeviceUtils = fn(4971);
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
              return closure_0(11920).showMobileGoLiveActionSheet(closure_1);
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
          const obj = closure_0(5947);
          obj.reportAVError({ type: closure_0(5947).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id });
          const obj2 = { type: closure_0(5947).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
          const result = closure_0(9221).showMinOSScreenshareRequirementAlert();
        };
      }
      obj.onPress = fn;
      if (obj2.isMetaQuest()) {
        importDefault(tmp ? 11930 : 11931);
      } else {
        if (showMobileGoLiveUpsell) {
          let tmp20 = 11932;
        } else {
          tmp20 = tmp ? 11933 : 11932;
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
export function handleCloseScreenshare() {
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = StreamActionCreators;
    obj.stopStream(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
  }
  AudioActionCreatorsDefault.setGoLiveSource(null);
}
export { stopScreenshare };
export { startStream };
export function getOSRequirement() {
  return closure_8 >= 12;
}
export function getStreamPressHandler(analyticsLocations) {
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
          return closure_0(11920).showMobileGoLiveActionSheet(closure_1);
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
      const obj = closure_0(5947);
      obj.reportAVError({ type: closure_0(5947).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id });
      const obj2 = { type: closure_0(5947).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
      const result = closure_0(9221).showMinOSScreenshareRequirementAlert();
    };
  }
  return fn;
}
export function tryStartScreenShare(channel) {
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
}