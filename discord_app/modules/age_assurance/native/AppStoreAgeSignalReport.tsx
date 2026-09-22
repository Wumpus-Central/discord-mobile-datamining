// discord_app/modules/age_assurance/native/AppStoreAgeSignalReport.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
function collectAgeSignal() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _collectAgeSignal() {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          c3 = 1;
          const obj6 = {
            firstAgeGate: require("AppStoreAgeSignalSupport").MIN_AGE_GATE,
            secondAgeGate: require("AppStoreAgeSignalSupport").ADULT_AGE_GATE,
          };
          c4 = 2;
          c5 = 1;
          const obj7 = { value: require("AppStoreAgeAssurance").default.getAgeSignals(obj6), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        const obj8 = { tags: { source: "parental_consent_manager", step: "collect_age_signal" } };
        closure_129_1(closure_129_2[6]).captureException(closure_128_0, obj8);
        const obj3 = closure_129_1(closure_129_2[6]);
        let str = "android";
        if (obj5.isIOS()) {
          str = "ios";
        }
        const obj9 = { platform: str };
        c5 = 3;
        const obj10 = { value: obj9, done: true };
        return obj10;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp18) {
      closure_2 = tmp18;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp18;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_13 = async function _performAgeCheck(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const result = require("AppStoreAgeSignalAttestation").warmAgeSignalAttestation();
  const items = [collectAgeSignal()];
  items[1] = require("AppStoreAgeSignalAttestation").getAgeSignalChallenge();
  await Promise.all(items);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_7 = closure_3;
    closure_130_1(closure_130_2[6]).captureException(closure_129_7, {
      tags: { source: "parental_consent_manager", step: "perform_age_check" },
    });
    c6 = 3;
    closure_130_1(closure_130_2[6]);
  } else if (2 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_1 = value;
      closure_129_2 = closure_130_3(closure_129_1, 2);
      closure_129_3 = closure_129_2[0];
      closure_129_4 = closure_129_2[1];
      c5 = 3;
      c6 = 1;
      return {
        value: closure_130_0(closure_130_2[8]).getAgeSignalIntegrityToken(closure_129_4, closure_129_3),
        done: false,
      };
    }
  } else if (3 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_5 = value;
      c5 = 4;
      c6 = 1;
      return {
        value: closure_130_0(closure_130_2[8]).getAppStoreAgeSignalAssertion(closure_129_3, closure_129_0),
        done: false,
      };
    }
  } else if (4 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_6 = value;
      c5 = 5;
      c6 = 1;
      closure_130_0(closure_130_2[9]);
      return {
        value: closure_130_0(closure_130_2[9]).submitAgeSignal(
          closure_129_3,
          closure_129_5,
          closure_129_0,
          "app_start",
          closure_129_6,
        ),
        done: false,
      };
    }
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const obj17 = { platform: null };
    obj17.platform = closure_130_0(closure_130_2[7]).getNativePlatform();
    closure_130_1(closure_130_2[10]).track(closure_130_6.PARENTAL_CONSENT_CHECKED, obj17);
    c4 = 0;
    closure_130_0(closure_130_2[7]);
    closure_130_1(closure_130_2[10]);
  }
  return value;
};
let closure_14 = async function _settleAppStoreAgeSignalReport() {
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
          const items = [tmp13, require("TimeUtils").sleep(15000)];
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
const AnalyticEvents = fn(1074).AnalyticEvents;
let c7 = false;
let c8 = null;
let c9 = null;
let c10 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReport.tsx");

export const beginAppStoreAgeSignalReport = function beginAppStoreAgeSignalReport() {
  c7 = true;
  const sum = c10 + 1;
  c10 = sum;
  closure_8 = null;
  let result = null != UserStore.getCurrentUser();
  if (result) {
    result = require("AppStoreAgeSignalSupport").isAppStoreAgeSignalSupported();
    let obj = require("AppStoreAgeSignalSupport");
  }
  if (result) {
    result = require("RegionalFeatureConfigUtils").shouldCollectAppStoreSignal();
    let obj2 = require("RegionalFeatureConfigUtils");
  }
  if (result) {
    _require = !c7;
    importDefault = sum;
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
                c4 = 3;
                c5 = 1;
                const obj4 = { value: tmp25, done: false };
                return obj4;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            if (c9 === closure_129_4) {
              c9 = null;
            }
            throw closure_2;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (c9 === closure_129_4) {
                c9 = null;
              }
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c3 = 0;
              if (c9 === closure_129_4) {
                c9 = null;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (c9 === closure_129_4) {
              c9 = null;
            }
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else if (closure_129_1 !== closure_1_10) {
            c3 = 0;
            if (c9 === closure_129_4) {
              c9 = null;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c4 = 2;
          c5 = 1;
          const obj6 = {
            value: (function performAgeCheck() {
              const self = this;
              const apply = closure_1_13.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_129_0),
            done: false,
          };
          return obj6;
        } catch (tmp29) {
          closure_2 = tmp29;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp29;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    dependencyMap = closure_9;
    const tmp9 = (function run() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    closure_4 = tmp9;
    closure_9 = tmp9;
    closure_8 = tmp9;
  }
};
export const settleAppStoreAgeSignalReport = function settleAppStoreAgeSignalReport() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
