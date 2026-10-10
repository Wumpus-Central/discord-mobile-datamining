// === Module 11052: useScreenshareUtils ===

// Module 11052 (useScreenshareUtils)
import util from "util" /* 1126 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import inject from "inject" /* 2014 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5243 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import StreamActionCreators from "StreamActionCreators" /* 7443 */;
import CallsUtils from "CallsUtils" /* 8785 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 9702 */;
import useHasVideoPermission from "useHasVideoPermission" /* 11047 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 11058 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;

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
const ApplicationStreamStates = fn(1085).ApplicationStreamStates;
const Features = fn(5117).Features;
const DeviceUtils = fn(5068);
const systemVersionMajor = DeviceUtils.getSystemVersionMajor();
const BroadcastUploadManager = fn(17).NativeModules.BroadcastUploadManager;
const ReactCompilerGating = fn(558);
function handleCloseScreenshare() {
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj = StreamActionCreators;
    obj.stopStream(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
  }
  AudioActionCreatorsDefault.setGoLiveSource(null);
}
function getOSRequirement() {
  return closure_8 >= 12;
}
function getStreamPressHandler(analyticsLocations) {
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
            obj = closure_0(closure_2[14]);
            return obj.showMobileGoLiveActionSheet(closure_1);
          }
        }
      } else {
        class S {
          constructor() {
            obj = closure_0(closure_2[14]);
            return obj.showMobileGoLiveActionSheet(closure_1);
          }
        }
        if (isActive) {
          class S {
            constructor() {
              obj = closure_0(closure_2[14]);
              return obj.showMobileGoLiveActionSheet(closure_1);
            }
          }
        }
      }
    } else {
      class S {
        constructor() {
          obj = closure_0(closure_2[14]);
          return obj.showMobileGoLiveActionSheet(closure_1);
        }
      }
      const S = CallsUtils.showScreenshareDisabledAlert;
    }
  } else {
    class S {
      constructor() {
        obj = closure_0(closure_2[13]);
        obj1 = { type: closure_0(closure_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
        reportAVErrorResult = obj.reportAVError(obj1);
        obj3 = closure_0(closure_2[9]);
        result = obj3.showMinOSScreenshareRequirementAlert();
        return;
      }
    }
  }
  return S;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useScreenshareUtils.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useScreenshareUtils(arg0) {
  const cResult = require("c").c(24);
  const tmp5 = analyticsLocations(11047)(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[0] = closure_8 >= 12;
    let first = tmp8;
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
    let tmp10 = fn;
    let tmp9 = items;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useScreenshareUtils" };
    cResult[3] = obj2;
    let tmp13 = obj2;
  } else {
    tmp13 = cResult[3];
  }
  const tmpResult = require("initialize");
  const showMobileGoLiveUpsell = analyticsLocations(11058).useConfig(tmp13).showMobileGoLiveUpsell;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStreamingStore];
    class E {
      constructor() {
        return closure_1_4.getCurrentUserActiveStream();
      }
    }
    cResult[4] = items1;
    cResult[5] = E;
    let tmp15 = E;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const tmp4Result = analyticsLocations(11058);
  const stateFromStores1 = require("initialize").useStateFromStores(tmp14, tmp15);
  analyticsLocations = tmp4(6851)().analyticsLocations;
  let tmp18 = null != stateFromStores1;
  if (tmp18) {
    tmp18 = stateFromStores1.state === ApplicationStreamStates.ACTIVE;
  }
  let tmp20 = stateFromStores;
  if (stateFromStores) {
    tmp20 = tmp5;
  }
  if (tmp20) {
    tmp20 = first;
  }
  if (cResult[6] === tmp18) {
    if (cResult[7] === showMobileGoLiveUpsell) {
      if (cResult[9] === analyticsLocations) {
        if (cResult[10] === arg0) {
          if (cResult[11] === tmp5) {
            if (cResult[12] === tmp18) {
              if (cResult[13] === showMobileGoLiveUpsell) {
                if (cResult[15] === tmp18) {
                  if (cResult[16] === showMobileGoLiveUpsell) {
                    if (cResult[18] === tmp18) {
                      if (cResult[19] === tmp20) {
                        if (cResult[20] === tmp21) {
                          if (cResult[21] === tmp24) {
                            if (cResult[22] === tmp26) {
                              let tmp29 = cResult[23];
                            }
                            return tmp29;
                          }
                        }
                      }
                    }
                    const obj3 = { isFeatureEnabled: null, isActive: null, text: null, onPress: null, imgSource: null };
                    class E {
                      constructor() {
                        return closure_1_4.getCurrentUserActiveStream();
                      }
                    }
                    obj3.isActive = tmp18;
                    obj3.text = tmp21;
                    obj3.onPress = tmp24;
                    obj3.imgSource = cResult[17];
                    cResult[18] = tmp18;
                    cResult[19] = tmp20;
                    cResult[20] = tmp21;
                    cResult[21] = tmp24;
                    cResult[22] = cResult[17];
                    cResult[23] = obj3;
                    tmp29 = obj3;
                  }
                }
                tmp(1628);
                class E {
                  constructor() {
                    return closure_1_4.getCurrentUserActiveStream();
                  }
                }
                tmp4(tmp18 ? 11063 : 11064);
              }
            }
          }
        }
      }
      _require = arg0;
      class E {
        constructor() {
          return closure_1_4.getCurrentUserActiveStream();
        }
      }
      if (first) {
        if (tmp5) {
          if (flag) {
            class S {
              constructor() {
                obj = closure_0(closure_2[14]);
                return obj.showMobileGoLiveActionSheet(closure_1);
              }
            }
          } else {
            class S {
              constructor() {
                obj = closure_0(closure_2[14]);
                return obj.showMobileGoLiveActionSheet(closure_1);
              }
            }
            if (tmp18) {
              class S {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  return obj.showMobileGoLiveActionSheet(closure_1);
                }
              }
            }
          }
        } else {
          class S {
            constructor() {
              obj = closure_0(closure_2[14]);
              return obj.showMobileGoLiveActionSheet(closure_1);
            }
          }
        }
      } else {
        class S {
          constructor() {
            obj = closure_0(closure_2[13]);
            obj1 = { type: closure_0(closure_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
            reportAVErrorResult = obj.reportAVError(obj1);
            obj3 = closure_0(closure_2[9]);
            result = obj3.showMinOSScreenshareRequirementAlert();
            return;
          }
        }
      }
      cResult[9] = analyticsLocations;
      cResult[10] = arg0;
      cResult[11] = tmp5;
      cResult[12] = tmp18;
      cResult[13] = showMobileGoLiveUpsell;
      cResult[14] = S;
    }
  }
  if (!showMobileGoLiveUpsell) {
    class S {
      constructor() {
        obj = closure_0(closure_2[13]);
        obj1 = { type: closure_0(closure_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
        reportAVErrorResult = obj.reportAVError(obj1);
        obj3 = closure_0(closure_2[9]);
        result = obj3.showMinOSScreenshareRequirementAlert();
        return;
      }
    }
    cResult[6] = tmp18;
    class E {
      constructor() {
        return closure_1_4.getCurrentUserActiveStream();
      }
    }
    cResult[7] = showMobileGoLiveUpsell;
    cResult[8] = stringResult;
  }
  const intl = tmp(1126).intl;
  stringResult = intl.string(require("util").t.fjBNo1);
  const tmpResult3 = require("initialize");
}) : (function useScreenshareUtils(arg0) {
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
            class S {
              constructor() {
                obj = closure_0(closure_2[14]);
                return obj.showMobileGoLiveActionSheet(closure_1);
              }
            }
          } else {
            class S {
              constructor() {
                obj = closure_0(closure_2[14]);
                return obj.showMobileGoLiveActionSheet(closure_1);
              }
            }
            if (tmp) {
              class S {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  return obj.showMobileGoLiveActionSheet(closure_1);
                }
              }
            }
          }
        } else {
          class S {
            constructor() {
              obj = closure_0(closure_2[14]);
              return obj.showMobileGoLiveActionSheet(closure_1);
            }
          }
          const S = CallsUtils.showScreenshareDisabledAlert;
        }
      } else {
        class S {
          constructor() {
            obj = closure_0(closure_2[13]);
            obj1 = { type: closure_0(closure_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
            reportAVErrorResult = obj.reportAVError(obj1);
            obj3 = closure_0(closure_2[9]);
            result = obj3.showMinOSScreenshareRequirementAlert();
            return;
          }
        }
      }
      obj.onPress = S;
      if (obj2.isMetaQuest()) {
        class S {
          constructor() {
            obj = closure_0(closure_2[13]);
            obj1 = { type: closure_0(closure_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
            reportAVErrorResult = obj.reportAVError(obj1);
            obj3 = closure_0(closure_2[9]);
            result = obj3.showMinOSScreenshareRequirementAlert();
            return;
          }
        }
      } else {
        class S {
          constructor() {
            obj = closure_0(closure_2[13]);
            obj1 = { type: closure_0(closure_2[13]).AVError.SCREENSHARE_OS_NOT_SUPPORTED, channelId: closure_0.id };
            reportAVErrorResult = obj.reportAVError(obj1);
            obj3 = closure_0(closure_2[9]);
            result = obj3.showMinOSScreenshareRequirementAlert();
            return;
          }
        }
        obj.imgSource = importDefault(tmp18);
        return obj;
      }
      obj2 = MetaQuestUtils;
      tmp11 = closure_1;
    }
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.fjBNo1);
  }, items2);
});
export { handleCloseScreenshare };
export { stopScreenshare };
export { startStream };
export { getOSRequirement };
export { getStreamPressHandler };
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