// discord_app/modules/video_calls/native/useScreenshareUtils.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import inject from "../../../../discord_common/js/packages/media-engine/native/inject.tsx";
import Constants2 from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import StreamKeyUtils from "../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../actions/StreamActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import ForegroundServiceManagerDefault from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import CallsUtils from "../../voice_calls/native/CallsUtils.tsx";
import useHasVideoPermission from "../useHasVideoPermission.tsx";
import MobileGoLiveUpsellExperimentDefault from "../../go_live/native/MobileGoLiveUpsellExperiment.tsx";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const useHasVideoPermissionDefault = useHasVideoPermission;
let _require, closure_1, dependencyMap, importDefault, obj1, reportAVErrorResult;

const f140155 = (arg0) => {
  const tmp3 = arg0;
  if (tmp3) {
    const tmpResult = require("inject");
    const voiceEngine = tmpResult.getVoiceEngine();
    voiceEngine.startBroadcast();
  } else {
    const tmpResult2 = require("CallsUtils");
    const result = tmpResult2.showScreenshareDisabledAlert();
  }
};
function stopScreenshare() {
  const obj = inject;
  const voiceEngine = obj.getVoiceEngine();
  voiceEngine.stopBroadcast();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const stopStream = StreamActionCreators.stopStream;
    StreamActionCreators;
    const tmpResult2 = StreamKeyUtils;
    stopStream(tmpResult2.encodeStreamKey(currentUserActiveStream));
  }
  const obj4 = AudioActionCreatorsDefault;
  obj4.setGoLiveSource(null);
}
function startStream() {
  const obj = inject;
  if ("android" === obj.getVoiceEngine().platform) {
    const obj2 = ForegroundServiceManagerDefault;
    const result = obj2.isForegroundServiceRunning(f140155);
  } else {
    BroadcastUploadManager.showPicker();
  }
}
const NativeModules = react_native.NativeModules;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const Features = Constants2.Features;
const systemVersionMajor = DeviceUtils.getSystemVersionMajor();
const BroadcastUploadManager = NativeModules.BroadcastUploadManager;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocations;
      let closure_0;
      let currentUserActiveStream;
      let first;
      let stringResult;
      let tmp10;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp21;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(24);
      const tmp5 = analyticsLocations(9639)(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[0] = closure_8 >= 12;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function v() {
          return MediaEngineStore.supports(constants.VIDEO);
        };
        cResult[1] = items;
        cResult[2] = fn;
        tmp10 = fn;
        tmp9 = items;
      } else {
        tmp9 = cResult[1];
        tmp10 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useScreenshareUtils" };
        cResult[3] = obj2;
        tmp13 = obj2;
      } else {
        tmp13 = cResult[3];
      }
      const tmp4Result = analyticsLocations(9650);
      const showMobileGoLiveUpsell = tmp4Result.useConfig(tmp13).showMobileGoLiveUpsell;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationStreamingStore];
        class E {
          constructor() {
            return currentUserActiveStream.getCurrentUserActiveStream();
          }
        }
        cResult[4] = items1;
        cResult[5] = E;
        tmp15 = E;
        tmp14 = items1;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      const tmpResult3 = require("get initialized");
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp14, tmp15);
      analyticsLocations = tmp4(6664)().analyticsLocations;
      if (cResult[6] === (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE)) {
        if (cResult[7] === showMobileGoLiveUpsell) {
          tmp21 = cResult[8];
        }
        if (cResult[9] === analyticsLocations) {
          if (cResult[10] === arg0) {
            if (cResult[11] === tmp5) {
              if (
                cResult[12] === (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE)
              ) {
                let tmp23;
                if (cResult[13] === showMobileGoLiveUpsell) {
                  tmp23 = cResult[14];
                }
                if (
                  cResult[15] ===
                  (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE)
                ) {
                  let tmp24;
                  if (cResult[16] === showMobileGoLiveUpsell) {
                    tmp24 = cResult[17];
                  }
                  if (
                    cResult[18] ===
                    (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE)
                  ) {
                    if (cResult[19] === (stateFromStores && tmp5 && first)) {
                      if (cResult[20] === tmp21) {
                        if (cResult[21] === tmp23) {
                          let tmp27;
                          if (cResult[22] === tmp24) {
                            tmp27 = cResult[23];
                          }
                          return tmp27;
                        }
                      }
                    }
                  }
                  const obj3 = {
                    isFeatureEnabled: null,
                    isActive: null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE,
                    text: tmp21,
                    onPress: tmp23,
                    imgSource: tmp24,
                  };
                  class E {
                    constructor() {
                      return currentUserActiveStream.getCurrentUserActiveStream();
                    }
                  }
                  cResult[18] = null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE;
                  cResult[19] = stateFromStores && tmp5 && first;
                  cResult[20] = tmp21;
                  cResult[21] = tmp23;
                  cResult[22] = tmp24;
                  cResult[23] = obj3;
                  tmp27 = obj3;
                }
                require("MetaQuestUtils");
                class E {
                  constructor() {
                    return currentUserActiveStream.getCurrentUserActiveStream();
                  }
                }
                cResult[15] = null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE;
                cResult[16] = showMobileGoLiveUpsell;
                cResult[17] = tmp26;
                tmp24 = tmp26;
              }
            }
          }
        }
        _require = arg0;
        class E {
          constructor() {
            return currentUserActiveStream.getCurrentUserActiveStream();
          }
        }
        if (first) {
          if (tmp5) {
            if (flag) {
              class S {
                constructor() {
                  const obj = user(closure_2_2[14]);
                  return obj.showMobileGoLiveActionSheet(closure_1);
                }
              }
            } else {
              class S {
                constructor() {
                  const obj = user(closure_2_2[14]);
                  return obj.showMobileGoLiveActionSheet(closure_1);
                }
              }
              if (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE) {
                class S {
                  constructor() {
                    const obj = user(closure_2_2[14]);
                    return obj.showMobileGoLiveActionSheet(closure_1);
                  }
                }
              }
            }
          } else {
            class S {
              constructor() {
                const obj = user(closure_2_2[14]);
                return obj.showMobileGoLiveActionSheet(closure_1);
              }
            }
          }
        } else {
          class S {
            constructor() {
              const obj = user(closure_2_2[13]);
              const obj2 = { type: user(closure_2_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: id.id };
              obj.reportAVError(obj2);
              const obj3 = user(closure_2_2[9]);
              const result = obj3.showMinOSScreenshareRequirementAlert();
            }
          }
        }
        cResult[9] = analyticsLocations;
        cResult[10] = arg0;
        cResult[11] = tmp5;
        cResult[12] = null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE;
        cResult[13] = showMobileGoLiveUpsell;
        cResult[14] = S;
        tmp23 = S;
      }
      if (!showMobileGoLiveUpsell) {
        class S {
          constructor() {
            const obj = user(closure_2_2[13]);
            const obj2 = { type: user(closure_2_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: id.id };
            obj.reportAVError(obj2);
            const obj3 = user(closure_2_2[9]);
            const result = obj3.showMinOSScreenshareRequirementAlert();
          }
        }
        cResult[6] = null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE;
        class E {
          constructor() {
            return currentUserActiveStream.getCurrentUserActiveStream();
          }
        }
        cResult[7] = showMobileGoLiveUpsell;
        cResult[8] = stringResult;
        tmp21 = stringResult;
      }
      const intl = tmp(1126).intl;
      stringResult = intl.string(require("intl").t.fjBNo1);
    }
  : (arg0) => {
      let closure_2;
      let stateFromStores1;
      let user;
      _require = arg0;
      const tmp = useHasVideoPermissionDefault(arg0);
      importDefault = tmp;
      dependencyMap = tmp2;
      let obj = require("get initialized");
      const items = [stateFromStores1];
      const stateFromStores = obj.useStateFromStores(items, () => stateFromStores1.supports(constants.VIDEO));
      let obj2 = MobileGoLiveUpsellExperimentDefault;
      const showMobileGoLiveUpsell = obj2.useConfig({ location: "useScreenshareUtils" }).showMobileGoLiveUpsell;
      let obj3 = require("get initialized");
      const items1 = [showMobileGoLiveUpsell];
      stateFromStores1 = obj3.useStateFromStores(items1, () => showMobileGoLiveUpsell.getCurrentUserActiveStream());
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
        let obj = {
          isFeatureEnabled: stateFromStores && closure_1 && closure_2,
          isActive: tmp,
          text: null,
          onPress: null,
          imgSource: null,
        };
        if (!showMobileGoLiveUpsell) {
          let stringResult;
          let tmp17Result;
          if (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE) {
            const intl = intl3.intl;
            stringResult = intl.string(intl3.t.CpkXwZ);
          }
          obj.text = stringResult;
          let flag = showMobileGoLiveUpsell;
          const tmp11 = closure_1;
          if (showMobileGoLiveUpsell === undefined) {
            flag = false;
          }
          closure_1 = analyticsLocations;
          if (closure_2) {
            if (tmp11) {
              if (flag) {
                class S {
                  constructor() {
                    obj = closure_2_0(closure_2_2[14]);
                    return obj.showMobileGoLiveActionSheet(closure_1);
                  }
                }
              } else {
                class S {
                  constructor() {
                    obj = closure_2_0(closure_2_2[14]);
                    return obj.showMobileGoLiveActionSheet(closure_1);
                  }
                }
                if (null != stateFromStores1 && stateFromStores1.state === ApplicationStreamStates.ACTIVE) {
                  class S {
                    constructor() {
                      obj = closure_2_0(closure_2_2[14]);
                      return obj.showMobileGoLiveActionSheet(closure_1);
                    }
                  }
                }
              }
            } else {
              class S {
                constructor() {
                  obj = closure_2_0(closure_2_2[14]);
                  return obj.showMobileGoLiveActionSheet(closure_1);
                }
              }
              const S = CallsUtils.showScreenshareDisabledAlert;
            }
          } else {
            class S {
              constructor() {
                obj = closure_2_0(closure_2_2[13]);
                obj1 = {
                  type: closure_2_0(closure_2_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED,
                  channelId: closure_0.id,
                };
                reportAVErrorResult = obj.reportAVError(obj1);
                obj3 = closure_2_0(closure_2_2[9]);
                result = obj3.showMinOSScreenshareRequirementAlert();
                return;
              }
            }
          }
          obj.onPress = S;
          let obj2 = MetaQuestUtils;
          if (obj2.isMetaQuest()) {
            class S {
              constructor() {
                obj = closure_2_0(closure_2_2[13]);
                obj1 = {
                  type: closure_2_0(closure_2_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED,
                  channelId: closure_0.id,
                };
                reportAVErrorResult = obj.reportAVError(obj1);
                obj3 = closure_2_0(closure_2_2[9]);
                result = obj3.showMinOSScreenshareRequirementAlert();
                return;
              }
            }
          } else {
            class S {
              constructor() {
                obj = closure_2_0(closure_2_2[13]);
                obj1 = {
                  type: closure_2_0(closure_2_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED,
                  channelId: closure_0.id,
                };
                reportAVErrorResult = obj.reportAVError(obj1);
                obj3 = closure_2_0(closure_2_2[9]);
                result = obj3.showMinOSScreenshareRequirementAlert();
                return;
              }
            }
            tmp17Result = importDefault(tmp18);
          }
          obj.imgSource = tmp17Result;
          return obj;
        }
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.fjBNo1);
      }, items2);
    };
function handleCloseScreenshare() {
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const stopStream = StreamActionCreators.stopStream;
    StreamActionCreators;
    const obj = StreamKeyUtils;
    stopStream(obj.encodeStreamKey(currentUserActiveStream));
  }
  const obj2 = AudioActionCreatorsDefault;
  obj2.setGoLiveSource(null);
}
function getOSRequirement() {
  return closure_8 >= 12;
}
function getStreamPressHandler(analyticsLocations) {
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
            obj = closure_2_0(closure_2_2[14]);
            return obj.showMobileGoLiveActionSheet(closure_1);
          }
        }
      } else {
        class S {
          constructor() {
            obj = closure_2_0(closure_2_2[14]);
            return obj.showMobileGoLiveActionSheet(closure_1);
          }
        }
        if (isActive) {
          class S {
            constructor() {
              obj = closure_2_0(closure_2_2[14]);
              return obj.showMobileGoLiveActionSheet(closure_1);
            }
          }
        }
      }
    } else {
      class S {
        constructor() {
          obj = closure_2_0(closure_2_2[14]);
          return obj.showMobileGoLiveActionSheet(closure_1);
        }
      }
      const S = CallsUtils.showScreenshareDisabledAlert;
    }
  } else {
    class S {
      constructor() {
        obj = closure_2_0(closure_2_2[13]);
        obj1 = { type: closure_2_0(closure_2_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
        reportAVErrorResult = obj.reportAVError(obj1);
        obj3 = closure_2_0(closure_2_2[9]);
        result = obj3.showMinOSScreenshareRequirementAlert();
        return;
      }
    }
  }
  return S;
}
let result = size.fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default tmp2;
export { handleCloseScreenshare };
export { stopScreenshare };
export { startStream };
export { getOSRequirement };
export { getStreamPressHandler };
export const tryStartScreenShare = function tryStartScreenShare(channel) {
  let videoPermission = closure_8 >= 12;
  if (videoPermission) {
    const obj = useHasVideoPermission;
    videoPermission = obj.getVideoPermission(channel);
  }
  if (videoPermission) {
    const obj2 = inject;
    if ("android" === obj2.getVoiceEngine().platform) {
      const obj3 = ForegroundServiceManagerDefault;
      let result = obj3.isForegroundServiceRunning(f140155);
    } else {
      BroadcastUploadManager.showPicker();
    }
  }
};
