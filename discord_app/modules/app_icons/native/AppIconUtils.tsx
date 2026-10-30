// === Module 15301: AppIconUtils ===

// Module 15301 (AppIconUtils)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import AppIconTypes from "AppIconTypes" /* 9959 */;
import NativeAppIconModuleDefault from "NativeAppIconModule" /* 15302 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function fetchCurrentAppIcon() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _fetchCurrentAppIcon() {
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
          closure_0 = tmp7;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj5 = { value: NativeAppIconModuleDefault.getCurrentIcon(), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        const _HermesInternal = HermesInternal;
        closure_129_13.warn("Error fetching current app icon: " + closure_128_0);
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
        const obj = { value: value.id, done: true };
        return obj;
      }
    } catch (tmp19) {
      closure_2 = tmp19;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp19;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_16 = async function _setAppIcon(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj6 = closure_2;
          if (closure_2 === undefined) {
            obj6 = {};
          }
          let flag = obj6.showErrorToast;
          if (flag === undefined) {
            flag = true;
          }
          closure_131_2 = flag;
          c7 = 1;
          c8 = 1;
          return { value: "flexDirection", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c6 = 1;
          c7 = 3;
          c8 = 1;
          const obj8 = { value: closure_132_1(closure_132_2[7]).setIcon(closure_131_0), done: false };
          return obj8;
        }
      } else if (2 === tmp8) {
        c6 = 0;
        closure_131_3 = closure_5;
        if (closure_131_2) {
          const obj9 = { text: null };
          const intl = closure_132_0(closure_132_2[13]).intl;
          obj9.text = intl.string(closure_132_0(closure_132_2[13]).t["c76eo/"]);
          closure_132_1(closure_132_2[12]).open("APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", obj9);
          const obj2 = closure_132_1(closure_132_2[12]);
        }
        const _HermesInternal = HermesInternal;
        closure_132_13.warn("Error changing users app icon: " + closure_131_3);
        c8 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_132_1(closure_132_2[10]).dispatch({ type: "APP_ICON_UPDATED" });
        const obj10 = closure_132_1(closure_132_2[10]);
        const obj12 = { icon_id: closure_131_0, user_premium_tier: closure_131_1, icon_premium_tier: null };
        let TIER_2 = null;
        if (closure_132_7(closure_131_0).isPremium) {
          TIER_2 = closure_132_12.TIER_2;
        }
        obj12.icon_premium_tier = TIER_2;
        closure_132_1(closure_132_2[11]).track(closure_132_10.APP_ICON_UPDATED, obj12);
        c6 = 0;
        c8 = 3;
        return { value: true, done: true };
      }
    } catch (tmp36) {
      closure_5 = tmp36;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp36;
      } else {
        c7 = tmp;
      }
    }
  }
};
const AppIconConstants = fn(9958);
({ getDefaultIcon: metroRequire, getIconById: closure_7, getLimitedAlternateIcons: closure_8, getOfficialAlternateIcons: closure_9 } = AppIconConstants);
const Constants = fn(1072);
({ AnalyticEvents: c10, UserSettingsSections: closure_11 } = Constants);
const PremiumTypes = fn(1386).PremiumTypes;
let closure_13 = new LoggerDefault("AppIconUtils");
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export function useCurrentAppIcon() {
  const tmp = _slicedToArray(noop.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT), 2);
  _require = tmp[1];
  importDefault = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
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
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          closure_129_0(closure_128_0);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  }), []);
  useMountEffectDefault(() => {
    closure_1_1();
    const subscription = DispatcherDefault.subscribe("APP_ICON_UPDATED", closure_1_1);
    return () => {
      require("Dispatcher").unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  return tmp[0];
}
export function setAppIcon() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function useAppIcons() {
  const currentAppIcon = _slicedToArray(noop.useState(AppIconTypes.FreemiumAppIconIds.DEFAULT), 2);
  closure_129_0 = currentAppIcon[1];
  closure_129_1 = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
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
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          closure_129_0(closure_128_0);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  }), []);
  useMountEffectDefault(() => {
    closure_1_1();
    const subscription = DispatcherDefault.subscribe("APP_ICON_UPDATED", closure_1_1);
    return () => {
      require("Dispatcher").unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  [tmp4, require] = noop.useState([]);
  const tmp3 = _slicedToArray(noop.useState([]), 2);
  [tmp6, importDefault] = noop.useState([]);
  dependencyMap = noop.useCallback(asyncGeneratorStep(async () => {
    await closure_1(tmp3[7]).getAvailableIcons();
    if (1 === tmp7) {
      c4 = 0;
      closure_129_3 = closure_3;
      const obj7 = { text: null };
      const intl = closure_0(tmp3[13]).intl;
      obj7.text = intl.string(closure_0(tmp3[13]).t["c76eo/"]);
      closure_1(tmp3[12]).open("APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", obj7);
      const _HermesInternal = HermesInternal;
      logger.warn("Error fetching available app icons: " + closure_129_3);
      let v3 = 3;
      closure_1(tmp3[12]);
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_0 = value.map((id) => id.id);
      closure_129_1 = closure_1_9().filter((id) => closure_1_0.includes(id.id));
      closure_1_9();
      closure_129_2 = closure_1_8().filter((id) => closure_1_0.includes(id.id));
      closure_130_1(closure_129_2);
      closure_0 = 0;
      const items = [v3()];
      const sum = closure_0 + 1;
      closure_0 = HermesBuiltin.arraySpread(closure_129_1, sum);
      closure_130_0(items);
      c4 = 0;
      closure_1_8();
    }
    return value;
  }), []);
  useMountEffectDefault(() => {
    closure_2();
    const subscription = DispatcherDefault.subscribe("APP_ICON_UPDATED", closure_2);
    return () => {
      require("Dispatcher").unsubscribe("APP_ICON_UPDATED", closure_1_2);
    };
  });
  return { officialAppIcons, limitedTimeAppIcons, currentAppIcon: currentAppIcon[0] };
}
export function navigateToAppIconSettings() {
  openUserSettings.openUserSettings({ screen: constants.APP_ICONS });
}
export function isAppIconsSupported() {
  return !MetaQuestUtils.isMetaQuest();
}