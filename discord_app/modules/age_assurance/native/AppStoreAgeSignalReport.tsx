// discord_app/modules/age_assurance/native/AppStoreAgeSignalReport.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
function collectAgeSignal() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _collectAgeSignal() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          c3 = 1;
          value = {};
          const obj6 = {
            firstAgeGate: require("AppStoreAgeSignalSupport").MIN_AGE_GATE,
            secondAgeGate: require("AppStoreAgeSignalSupport").ADULT_AGE_GATE,
          };
          c5 = 2;
          c6 = 1;
          const obj7 = { value: require("AppStoreAgeAssurance").default.getAgeSignals(obj6), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_129_0 = closure_4;
        const obj8 = { tags: { source: "parental_consent_manager", step: "collect_age_signal" } };
        closure_130_1(closure_130_2[7]).captureException(closure_129_0, obj8);
        const obj3 = closure_130_1(closure_130_2[7]);
        let str = "android";
        if (obj5.isIOS()) {
          str = "ios";
        }
        const obj9 = { signal: null, degraded: true };
        const obj10 = { platform: str };
        obj9.signal = obj10;
        c6 = 3;
        const obj11 = { value: obj9, done: true };
        return obj11;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c6 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        value.signal = value;
        value.degraded = false;
        c3 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp20) {
      closure_4 = tmp20;
      if (tmp4 === c3) {
        c6 = tmp2;
        throw tmp20;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_15 = async function _performAgeCheck(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp6;
          let tmp127 = closure_0;
          closure_129_0 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          let signal;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_1 = "failed";
          c4 = 2;
          const isAppStoreConsentReinstateEndpointEnabled =
            require("AppStoreConsentReinstateEndpointExperiment").getIsAppStoreConsentReinstateEndpointEnabled(
              "appStoreAgeSignalReport",
              false,
            );
          if (isAppStoreConsentReinstateEndpointEnabled) {
            tmp127 = null;
          }
          closure_129_4 = tmp127;
          if (isAppStoreConsentReinstateEndpointEnabled) {
            c5 = 3;
            c6 = 1;
            const obj7 = { value: collectAgeSignal(), done: false };
            return obj7;
          } else {
            const result = require("AppStoreAgeSignalAttestation").warmAgeSignalAttestation();
            items = [collectAgeSignal()];
            const obj28 = require("AppStoreAgeSignalAttestation");
            items[1] = require("AppStoreAgeSignalAttestation").getAgeSignalChallenge();
            c5 = 4;
            c6 = 1;
            const obj9 = { value: Promise.all(items), done: false };
            return obj9;
          }
          const obj34 = require("AppStoreConsentReinstateEndpointExperiment");
        }
      } else if (1 === tmp9) {
        c4 = 0;
        const result1 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
          "app_start",
          closure_129_1,
          closure_129_0,
        );
        throw closure_3;
      } else {
        if (2 === tmp9) {
          c4 = 1;
          closure_129_10 = closure_3;
          const obj11 = { tags: { source: "parental_consent_manager", step: "perform_age_check" } };
          closure_130_1(closure_130_2[7]).captureException(closure_129_10, obj11);
          c4 = 0;
          const obj24 = closure_130_1(closure_130_2[7]);
          const result2 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
            "app_start",
            closure_129_1,
            closure_129_0,
          );
          c6 = 3;
          const obj26 = closure_130_0(closure_130_2[13]);
        } else if (3 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            const result3 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
              "app_start",
              closure_129_1,
              closure_129_0,
            );
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_129_2 = value;
            if (!value.degraded) {
              if (obj17.isAgeSignalCached(closure_129_2.signal)) {
                closure_129_1 = "cache_hit";
                c4 = 0;
                const result4 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
                  "app_start",
                  closure_129_1,
                  closure_129_0,
                );
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
              obj17 = closure_130_0(closure_130_2[10]);
            }
            const result5 = closure_130_0(closure_130_2[11]).warmAgeSignalAttestation();
            const obj19 = closure_130_0(closure_130_2[11]);
            c5 = 6;
            c6 = 1;
            const obj16 = { value: closure_130_0(closure_130_2[11]).getAgeSignalChallenge(), done: false };
            return obj16;
          }
        } else {
          if (4 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const result6 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
                "app_start",
                closure_129_1,
                closure_129_0,
              );
              c6 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else {
              closure_129_5 = value;
              closure_129_6 = closure_130_3(closure_129_5, 2);
              closure_129_2 = closure_129_6[0];
              closure_129_3 = closure_129_6[1];
              signal = closure_129_2.signal;
              const ageSignalIntegrityToken = closure_130_0(closure_130_2[11]).getAgeSignalIntegrityToken(
                closure_129_3,
                signal,
              );
              c5 = 5;
              c6 = 1;
              const obj14 = closure_130_0(closure_130_2[11]);
            }
          } else if (5 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const result7 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
                "app_start",
                closure_129_1,
                closure_129_0,
              );
              c6 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              closure_129_8 = value;
              c5 = 7;
              c6 = 1;
              const obj25 = {
                value: closure_130_0(closure_130_2[11]).getAppStoreAgeSignalAssertion(signal, closure_129_4),
                done: false,
              };
              return obj25;
            }
          } else if (6 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_3 = value;
            }
          } else if (7 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const result8 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
                "app_start",
                closure_129_1,
                closure_129_0,
              );
              c6 = 3;
              const obj30 = { value, done: true };
              return obj30;
            } else {
              closure_129_9 = value;
              const obj4 = closure_130_0(closure_130_2[12]);
              c5 = 8;
              c6 = 1;
              const obj31 = {
                value: obj4.submitAgeSignal(signal, closure_129_8, closure_129_4, "app_start", closure_129_9),
                done: false,
              };
              return obj31;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_0 = value;
            closure_129_1 = "submitted";
            if (!closure_129_2.degraded) {
              const result9 = closure_130_0(closure_130_2[10]).recordAgeSignalSubmitted(signal, closure_129_0);
              const obj = closure_130_0(closure_130_2[10]);
            }
            c4 = 1;
          }
          c4 = 0;
          const result10 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
            "app_start",
            closure_129_1,
            closure_129_0,
          );
          c6 = 3;
          const obj32 = { value, done: true };
          return obj32;
        }
        c4 = 0;
        const result11 = closure_130_0(closure_130_2[13]).trackAgeSignalReported(
          "app_start",
          closure_129_1,
          closure_129_0,
        );
        c6 = 3;
        const obj33 = { value, done: true };
        return obj33;
      }
    } catch (tmp135) {
      closure_3 = tmp135;
      if (tmp5 === c4) {
        c6 = tmp3;
        throw tmp135;
      } else if (tmp2 === tmp137) {
        c5 = tmp2;
      } else {
        c5 = tmp;
      }
    }
  }
};
function startAgeSignalReport(isColdLaunch, connection) {
  let tmp = null != UserStore.getCurrentUser();
  if (tmp) {
    let result = require("AppStoreAgeSignalSupport").isAppStoreAgeSignalSupported();
    if (result) {
      result = tmp2(5705).shouldCollectAppStoreSignal();
      const tmp2Result = tmp2(5705);
    }
    tmp = result;
    const obj = require("AppStoreAgeSignalSupport");
    tmp2 = _require;
  }
  if (tmp) {
    let isAndroidResult = require("PlatformUtils").isAndroid();
    if (isAndroidResult) {
      isAndroidResult = AppStateStore.getState() !== AppStates.ACTIVE;
    }
    if (isAndroidResult) {
      const obj2 = { isColdLaunch, connection, until: "foreground" };
    } else {
      _require = isColdLaunch;
      closure_1 = connection;
      async function _run() {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp3;
                c3 = 1;
                if (null != dependencyMap) {
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: tmp30, done: false };
                  return obj4;
                }
              }
            } else if (1 === tmp7) {
              c3 = 0;
              if (c11 === closure_129_4) {
                c11 = null;
              }
              throw closure_2;
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else if (closure_129_1 !== closure_1_12) {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else if (mustWaitForForeground()) {
                const obj6 = { isColdLaunch: closure_129_0, connection: closure_129_1, until: "foreground" };
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (c11 === closure_129_4) {
                c11 = null;
              }
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
              if (c11 === closure_129_4) {
                c11 = null;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            c4 = 3;
            c5 = 1;
            const obj8 = {
              value: (function performAgeCheck() {
                const self = this;
                const apply = closure_1_15.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_129_0),
              done: false,
            };
            return obj8;
          } catch (tmp34) {
            closure_2 = tmp34;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp34;
            } else {
              c4 = tmp;
            }
          }
        }
      }
      dependencyMap = closure_11;
      const tmp13 = (function run() {
        const self = this;
        const apply = closure_3.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      closure_4 = tmp13;
      closure_11 = tmp13;
      closure_9 = tmp13;
    }
    const obj3 = require("PlatformUtils");
  }
}
function mustWaitForForeground() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = AppStateStore.getState() !== AppStates.ACTIVE;
  }
  return isAndroidResult;
}
let closure_18 = async function _settleAppStoreAgeSignalReport() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != React6) {
          items = [tmp13, require("TimeUtils").sleep(15000)];
          c1 = 1;
          c0 = 1;
          const obj5 = { value: Promise.race(items), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
const AppStates = fn(1071).AppStates;
let c8 = false;
let c9 = null;
let c10 = null;
let c11 = null;
let c12 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReport.tsx");

export function isAppStoreAgeSignalColdLaunch() {
  return 1 === c12;
}
export function isAppStoreAgeSignalLaunchPending() {
  return !c8;
}
export function queueAppStoreAgeSignalSubmit(submitUserInitiatedAgeSignal) {
  closure_0 = submitUserInitiatedAgeSignal;
  closure_3 = async function _settle() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            items = [dependencyMap];
            c1 = 1;
            c2 = 1;
            const obj4 = { value: Promise.allSettled(items), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (c11 === closure_128_4) {
            c11 = null;
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c2 = tmp;
        throw tmp11;
      }
    }
  };
  closure_1 = closure_11;
  const tmp = (async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            if (null != closure_1) {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: tmp5, done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c1 = 2;
        c2 = 1;
        const obj7 = { value: closure_128_0(), done: false };
        return obj7;
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  })();
  closure_2 = tmp;
  const tmp2 = (function settle() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  asyncGeneratorStep = tmp2;
  closure_11 = tmp2;
  return tmp;
}
export function beginAppStoreAgeSignalReport() {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  c8 = true;
  const sum = c12 + 1;
  c12 = sum;
  c9 = null;
  c10 = null;
  if (flag) {
    const obj = { isColdLaunch: tmp, connection: sum, until: "post_connection_open" };
    c10 = obj;
  } else {
    startAgeSignalReport(tmp, sum);
  }
}
export function startPendingAppStoreAgeSignalReport() {
  let until;
  if (c10 != null) {
    until = tmp.until;
  }
  if ("post_connection_open" === until) {
    c10 = null;
    startAgeSignalReport(tmp.isColdLaunch, tmp.connection);
  }
}
export function resumeAppStoreAgeSignalReport() {
  let until;
  if (c10 != null) {
    until = tmp.until;
  }
  if ("foreground" === until) {
    c10 = null;
    let tmp6 = null != UserStore.getCurrentUser();
    if (tmp6) {
      let result = AppStoreAgeSignalSupport.isAppStoreAgeSignalSupported();
      if (result) {
        result = RegionalFeatureConfigUtils.shouldCollectAppStoreSignal();
        const tmp3Result = RegionalFeatureConfigUtils;
      }
      tmp6 = result;
    }
    if (tmp6) {
      ({ isColdLaunch: require, connection: importDefault } = tmp);
      closure_3 = async function _run() {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp3;
                c3 = 1;
                if (null != dependencyMap) {
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: tmp30, done: false };
                  return obj4;
                }
              }
            } else if (1 === tmp7) {
              c3 = 0;
              if (c11 === closure_129_4) {
                c11 = null;
              }
              throw closure_2;
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else if (closure_129_1 !== closure_1_12) {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else if (mustWaitForForeground()) {
                const obj6 = { isColdLaunch: closure_129_0, connection: closure_129_1, until: "foreground" };
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (c11 === closure_129_4) {
                c11 = null;
              }
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
              if (c11 === closure_129_4) {
                c11 = null;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            c4 = 3;
            c5 = 1;
            const obj8 = {
              value: (function performAgeCheck() {
                const self = this;
                const apply = closure_1_15.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_129_0),
              done: false,
            };
            return obj8;
          } catch (tmp34) {
            closure_2 = tmp34;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp34;
            } else {
              c4 = tmp;
            }
          }
        }
      };
      dependencyMap = closure_11;
      const tmp8 = (function run() {
        const self = this;
        const apply = closure_3.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      closure_4 = tmp8;
      closure_11 = tmp8;
      closure_9 = tmp8;
    }
  }
}
export function settleAppStoreAgeSignalReport() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
