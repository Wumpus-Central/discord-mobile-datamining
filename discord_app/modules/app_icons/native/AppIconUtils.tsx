// === Module 13280: AppIconUtils ===

// Module 13280 (AppIconUtils)
import LoggerDefault from "Logger" /* 3 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import react_nativeDefault from "react-native" /* 13281 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AppIconConstants from "AppIconConstants" /* 8858 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let APP_ICON_UPDATED, _require, c2, closure_4, dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function fetchCurrentAppIcon() {
  return obj(...arguments);
}
let obj = function _fetchCurrentAppIcon() {
  obj = _asyncToGenerator(async () => {
    let obj4;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj4.getCurrentIcon(), done: false };
            obj4 = react_nativeDefault;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const _HermesInternal = HermesInternal;
          closure_129_12.warn("Error fetching current app icon: " + closure_0);
          c5 = 3;
          const obj6 = { value: closure_129_0(closure_129_2[8]).FreemiumAppIconIds.DEFAULT, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value: value.id, done: true };
          return obj;
        }
      } catch (tmp16) {
        closure_2 = tmp16;
        if (0 === c3) {
          c5 = 3;
          throw tmp16;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _setAppIcon() {
  obj = _asyncToGenerator(async (icon_id, user_premium_tier) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let TIER_2;
      let intl;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              c5 = 1;
              const obj3 = react_nativeDefault;
              APP_ICON_UPDATED = obj3.setIcon(icon_id);
              c6 = 2;
              c7 = 1;
              return { value: APP_ICON_UPDATED, done: false };
            }
          } else {
            if (1 === tmp4) {
              c5 = 0;
              let closure_2 = closure_4;
              const obj6 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: intl.string(closure_131_0(closure_131_2[15]).t["c76eo/"]) };
              const open = closure_131_1(closure_131_2[14]).open;
              closure_131_1(closure_131_2[14]);
              intl = closure_131_0(closure_131_2[15]).intl;
              open(obj6);
              const _HermesInternal = HermesInternal;
              closure_131_12.warn("Error changing users app icon: " + closure_2);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              const obj7 = closure_131_1(closure_131_2[11]);
              obj7.dispatch({ type: "APP_ICON_UPDATED" });
              APP_ICON_UPDATED = closure_131_9.APP_ICON_UPDATED;
              const obj8 = { icon_id, user_premium_tier, icon_premium_tier: TIER_2 };
              const track = closure_131_1(closure_131_2[13]).track;
              TIER_2 = null;
              closure_131_1(closure_131_2[13]);
              if (icon_id !== closure_131_0(closure_131_2[8]).FreemiumAppIconIds.DEFAULT) {
                TIER_2 = closure_131_11.TIER_2;
              }
              track(APP_ICON_UPDATED, obj8);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          closure_4 = tmp28;
          if (0 === c5) {
            c7 = 3;
            throw tmp28;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ getDefaultIcon: metroRequire, getOfficialAlternateIcons: metroImportDefault, getLimitedAlternateIcons: metroImportAll } = AppIconConstants);
({ AnalyticEvents: c9, UserSettingsSections: c10 } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp4 = new LoggerDefault("AppIconUtils");
let closure_12 = tmp4;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let first1;
  obj = require("react");
  const cResult = obj.c(2);
  [first, _require] = react.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    _require = _asyncToGenerator(async () => {
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: fetchCurrentAppIcon(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            tmp(tmp);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp = closure_1();
        obj = closure_1(closure_2[11]);
        subscription = obj.subscribe("APP_ICON_UPDATED", closure_1);
        return () => {
          obj = first1(dependencyMap[11]);
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
        };
      }
    }
    cResult[1] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_1();
        obj = closure_1(closure_2[11]);
        subscription = obj.subscribe("APP_ICON_UPDATED", closure_1);
        return () => {
          obj = first1(dependencyMap[11]);
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
        };
      }
    }
  }
  first1(5597)(A);
  return first;
}) : (() => {
  let first;
  [first, _require] = react.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT);
  importDefault = react.useCallback(_asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
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
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: fetchCurrentAppIcon(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          closure_129_0(closure_0);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  }), []);
  const tmp3 = useMountEffectDefault(() => {
    closure_1();
    obj = DispatcherDefault;
    const subscription = obj.subscribe("APP_ICON_UPDATED", closure_1);
    return () => {
      obj = closure_1(dependencyMap[11]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  return first;
});
let closure_15 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let require;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  const tmp = dependencyMap;
  obj = react2;
  const cResult = obj.c(8);
  const tmp3 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  [tmp7, require] = _slicedToArray(react.useState(first), 2);
  const tmp6 = _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[1] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[1];
  }
  [tmp10, importDefault] = react.useState(tmp8);
  _slicedToArray(react.useState(tmp8), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let closure_0 = _asyncToGenerator(async () => {
      let intl;
      let obj3;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        let closure_3;
        try {
          let closure_1;
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
              closure_0 = undefined;
              closure_1 = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj3.getAvailableIcons(), done: false };
              obj3 = require("react-native");
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj6 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: intl.string(closure_0(closure_2_2[15]).t["c76eo/"]) };
              const open = require("ToastActionCreators").open;
              const tmp12 = require("ToastActionCreators");
              intl = closure_0(closure_2_2[15]).intl;
              open(obj6);
              const _HermesInternal = HermesInternal;
              logger.warn("Error fetching available app icons: " + closure_3);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              value.map((id) => id.id);
              const arr = closure_2_7();
              closure_1 = arr.filter((id) => closure_1_0.includes(id.id));
              const arr2 = closure_2_8();
              closure_2 = arr2.filter((id) => closure_1_0.includes(id.id));
              closure_1(closure_2);
              closure_0 = 0;
              const items = [closure_2_6()];
              const sum = closure_0 + 1;
              closure_0 = HermesBuiltin.arraySpread(items, closure_1, sum);
              closure_0(items);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          closure_3 = tmp22;
          if (0 === c4) {
            c6 = 3;
            throw tmp22;
          } else {
            c5 = 1;
          }
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  dependencyMap = tmp11;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        closure_2();
        obj = DispatcherDefault;
        const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
        return () => {
          obj = require("Dispatcher");
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
        };
      }
    }
    cResult[3] = D;
  } else {
    class D {
      constructor() {
        closure_2();
        obj = DispatcherDefault;
        const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
        return () => {
          obj = require("Dispatcher");
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
        };
      }
    }
  }
  useMountEffectDefault(D);
  if (cResult[4] === tmp3) {
    class D {
      constructor() {
        closure_2();
        obj = DispatcherDefault;
        const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
        return () => {
          obj = require("Dispatcher");
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
        };
      }
    }
  }
  let obj3 = { officialAppIcons: tmp7, limitedTimeAppIcons: tmp10, currentAppIcon: tmp3 };
  cResult[4] = tmp3;
  cResult[5] = tmp10;
  cResult[6] = tmp7;
  cResult[7] = obj3;
}) : (() => {
  let limitedTimeAppIcons;
  let require;
  let tmp3;
  const currentAppIcon = closure_15();
  [tmp3, require] = react.useState([]);
  _slicedToArray(react.useState([]), 2);
  [limitedTimeAppIcons, importDefault] = react.useState([]);
  dependencyMap = react.useCallback(_asyncToGenerator(async () => {
    let intl;
    let obj3;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_0;
        v3 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            c4 = 1;
            c5 = 2;
            v3 = 1;
            const obj5 = { value: obj3.getAvailableIcons(), done: false };
            obj3 = closure_1(closure_2[7]);
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj6 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: intl.string(closure_0(closure_2[15]).t["c76eo/"]) };
            const open = closure_1(closure_2[14]).open;
            const tmp12 = closure_1(closure_2[14]);
            intl = closure_0(closure_2[15]).intl;
            open(obj6);
            const _HermesInternal = HermesInternal;
            logger.warn("Error fetching available app icons: " + closure_3);
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            value.map((id) => id.id);
            const arr = closure_1_7();
            closure_1 = arr.filter((id) => closure_1_0.includes(id.id));
            const arr2 = closure_1_8();
            closure_2 = arr2.filter((id) => closure_1_0.includes(id.id));
            closure_130_1(closure_2);
            closure_0 = 0;
            const items = [v3()];
            const sum = closure_0 + 1;
            closure_0 = HermesBuiltin.arraySpread(items, closure_1, sum);
            closure_130_0(items);
            c4 = 0;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp22) {
        closure_3 = tmp22;
        if (0 === c4) {
          v3 = 3;
          throw tmp22;
        } else {
          c5 = 1;
        }
      }
    }
  }), []);
  useMountEffectDefault(() => {
    closure_2();
    obj = DispatcherDefault;
    const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
    return () => {
      obj = closure_1(closure_2[11]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
    };
  });
  return { officialAppIcons, limitedTimeAppIcons, currentAppIcon };
});
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export const useCurrentAppIcon = tmp5;
export const setAppIcon = function setAppIcon() {
  return obj(...arguments);
};
export const useAppIcons = tmp6;
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  obj = openUserSettings;
  const obj2 = { screen: constants.APP_ICONS };
  obj.openUserSettings(obj2);
};
export const isAppIconsSupported = function isAppIconsSupported() {
  obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};