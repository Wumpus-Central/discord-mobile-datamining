// === Module 17644: AppStoreAgeSignalReport ===

// Module 17644 (AppStoreAgeSignalReport)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5587 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 8148 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c5, c6, closure_12, dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
function collectAgeSignal() {
  return obj(...arguments);
}
let obj = function _collectAgeSignal() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
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
            let closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            const obj6 = { firstAgeGate: require("AppStoreAgeSignalSupport").MIN_AGE_GATE, secondAgeGate: require("AppStoreAgeSignalSupport").ADULT_AGE_GATE };
            const getAgeSignals = require("AppStoreAgeAssurance").default.getAgeSignals;
            const _default = require("AppStoreAgeAssurance").default;
            c4 = 2;
            c5 = 1;
            const obj7 = { value: getAgeSignals(obj6), done: false };
            return obj7;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const obj8 = { tags: { source: "parental_consent_manager", step: "collect_age_signal" } };
          const obj3 = closure_129_1(closure_129_2[7]);
          obj3.captureException(closure_0, obj8);
          let str = "android";
          const obj5 = closure_129_0(closure_129_2[8]);
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
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_2 = tmp15;
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _performAgeCheck() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj10;
    let obj2;
    let obj7;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let closure_3;
      try {
        let closure_1;
        let closure_2;
        let closure_4;
        let closure_5;
        let closure_6;
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
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            c4 = 1;
            const obj18 = require("AppStoreAgeSignalAttestation");
            const result = obj18.warmAgeSignalAttestation();
            const items = [collectAgeSignal(), ];
            const obj19 = require("AppStoreAgeSignalAttestation");
            items[1] = obj19.getAgeSignalChallenge();
            c5 = 2;
            c6 = 1;
            const obj6 = { value: all(items), done: false };
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            let closure_7 = closure_3;
            const obj8 = { tags: { source: "parental_consent_manager", step: "perform_age_check" } };
            const obj13 = closure_130_1(closure_130_2[7]);
            obj13.captureException(closure_7, obj8);
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_1 = value;
              closure_2 = closure_130_3(closure_1, 2);
              closure_3 = closure_2[0];
              closure_4 = closure_2[1];
              c5 = 3;
              c6 = 1;
              const obj11 = { value: obj10.getAgeSignalIntegrityToken(closure_4, closure_3), done: false };
              obj10 = closure_130_0(closure_130_2[9]);
              return obj11;
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              closure_5 = value;
              c5 = 4;
              c6 = 1;
              const obj14 = { value: obj7.getAppStoreAgeSignalAssertion(closure_3, closure_0), done: false };
              obj7 = closure_130_0(closure_130_2[9]);
              return obj14;
            }
          } else if (4 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_6 = value;
              const obj4 = closure_130_0(closure_130_2[10]);
              c5 = 5;
              c6 = 1;
              const obj16 = { value: obj4.submitAgeSignal(closure_3, closure_5, closure_0, "app_start", closure_6), done: false };
              return obj16;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            obj = { platform: obj2.getNativePlatform() };
            const track = closure_130_1(closure_130_2[11]).track;
            const PARENTAL_CONSENT_CHECKED = closure_130_7.PARENTAL_CONSENT_CHECKED;
            const tmp8 = closure_130_1(closure_130_2[11]);
            obj2 = closure_130_0(closure_130_2[8]);
            track(PARENTAL_CONSENT_CHECKED, obj);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp46) {
        closure_3 = tmp46;
        if (0 === c4) {
          c6 = 3;
          throw tmp46;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function mustWaitForForeground() {
  obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid() && AppStateStore.getState() !== metroImportAll.ACTIVE;
  return isAndroidResult;
}
obj = function _settleAppStoreAgeSignalReport() {
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
          } else if (null != closure_2_10) {
            const items = [tmp11, ];
            const obj2 = require("TimeUtils");
            items[1] = obj2.sleep(15000);
            c1 = 1;
            c0 = 1;
            const obj5 = { value: race(items), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportDefault, AppStates: metroImportAll } = Constants);
let c9 = false;
let c10 = null;
let c11 = null;
let c12 = null;
let c13 = 0;
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReport.tsx");

export const beginAppStoreAgeSignalReport = function beginAppStoreAgeSignalReport() {
  let closure_0;
  let closure_2;
  let obj2;
  c9 = true;
  const sum = c13 + 1;
  c13 = sum;
  let closure_10 = null;
  let tmp3 = null != UserStore.getCurrentUser();
  if (tmp3) {
    obj = require("AppStoreAgeSignalSupport");
    let result = obj.isAppStoreAgeSignalSupported();
    const tmp4 = _require;
    if (result) {
      const tmp4Result = tmp4(5587);
      result = tmp4Result.shouldCollectAppStoreSignal();
    }
    tmp3 = result;
  }
  if (tmp3) {
    const obj3 = require("PlatformUtils");
    const isAndroidResult = obj3.isAndroid() && AppStateStore.getState() !== constants.ACTIVE;
    if (!isAndroidResult) {
      _require = tmp12;
      importDefault = sum;
      function _run() {
        obj = _asyncToGenerator(async () => {
          function performAgeCheck() {
            return closure_1_16(...arguments);
          }
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
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
                  let closure_1 = tmp;
                  let closure_0 = tmp;
                  c3 = 1;
                  if (null != closure_2_2) {
                    c4 = 2;
                    c5 = 1;
                    const obj4 = { value: tmp27, done: false };
                    return obj4;
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
                const tmp23 = closure_2;
                if (c12 === closure_129_4) {
                  c12 = null;
                }
                throw tmp23;
              } else if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  if (c12 === closure_129_4) {
                    c12 = null;
                  }
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else if (closure_129_1 !== closure_1_13) {
                  c3 = 0;
                  if (c12 === closure_129_4) {
                    c12 = null;
                  }
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                } else if (closure_1_17()) {
                  const obj6 = { isColdLaunch: closure_129_0, connection: closure_129_1 };
                  c3 = 0;
                  if (c12 === closure_129_4) {
                    c12 = null;
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
                if (c12 === closure_129_4) {
                  c12 = null;
                }
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                if (c12 === closure_129_4) {
                  c12 = null;
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
              c4 = 3;
              c5 = 1;
              const obj8 = { value: performAgeCheck(closure_129_0), done: false };
              return obj8;
            } catch (tmp31) {
              closure_2 = tmp31;
              if (0 === c3) {
                c5 = 3;
                throw tmp31;
              } else {
                c4 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      }
      dependencyMap = closure_12;
      const tmp14 = (function run() {
        return obj(...arguments);
      })();
      let closure_4 = tmp14;
      closure_12 = tmp14;
      closure_10 = tmp14;
    }
  }
};
export const resumeAppStoreAgeSignalReport = function resumeAppStoreAgeSignalReport() {
  let require;
  const tmp = c11;
  if (null != c11) {
    c11 = null;
    let tmp5 = null != UserStore.getCurrentUser();
    if (tmp5) {
      const tmp3 = dependencyMap;
      obj = AppStoreAgeSignalSupport;
      let result = obj.isAppStoreAgeSignalSupported();
      if (result) {
        const tmp2Result = RegionalFeatureConfigUtils;
        result = tmp2Result.shouldCollectAppStoreSignal();
      }
      tmp5 = result;
    }
    if (tmp5) {
      ({ isColdLaunch: require, connection: importDefault } = tmp);
      obj = function _run() {
        obj = _asyncToGenerator(async () => {
          function performAgeCheck() {
            return closure_1_16(...arguments);
          }
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
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
                  let closure_1 = tmp;
                  let closure_0 = tmp;
                  c3 = 1;
                  if (null != closure_2_2) {
                    c4 = 2;
                    c5 = 1;
                    const obj4 = { value: tmp27, done: false };
                    return obj4;
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
                const tmp23 = closure_2;
                if (c12 === closure_129_4) {
                  c12 = null;
                }
                throw tmp23;
              } else if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  if (c12 === closure_129_4) {
                    c12 = null;
                  }
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else if (closure_129_1 !== closure_1_13) {
                  c3 = 0;
                  if (c12 === closure_129_4) {
                    c12 = null;
                  }
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                } else if (closure_1_17()) {
                  const obj6 = { isColdLaunch: closure_129_0, connection: closure_129_1 };
                  c3 = 0;
                  if (c12 === closure_129_4) {
                    c12 = null;
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
                if (c12 === closure_129_4) {
                  c12 = null;
                }
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                if (c12 === closure_129_4) {
                  c12 = null;
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
              c4 = 3;
              c5 = 1;
              const obj8 = { value: performAgeCheck(closure_129_0), done: false };
              return obj8;
            } catch (tmp31) {
              closure_2 = tmp31;
              if (0 === c3) {
                c5 = 3;
                throw tmp31;
              } else {
                c4 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      dependencyMap = closure_12;
      const tmp7 = (function run() {
        return obj(...arguments);
      })();
      let closure_4 = tmp7;
      closure_12 = tmp7;
      let closure_10 = tmp7;
    }
  }
};
export const settleAppStoreAgeSignalReport = function settleAppStoreAgeSignalReport() {
  return obj(...arguments);
};