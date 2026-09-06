// === Module 13363: AppIconUtils ===

// Module 13363 (AppIconUtils)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import AppIconTypes from "AppIconTypes" /* 9324 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

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
let closure_15 = async function _fetchCurrentAppIcon(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          c3 = 1;
          let obj3 = DCDIconManager;
          let currentIcon;
          if (DCDIconManager != null) {
            currentIcon = obj3.getCurrentIcon();
          }
          c4 = 2;
          c5 = 1;
          const obj1 = { value: currentIcon, done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        const _HermesInternal = HermesInternal;
        closure_129_12.warn("Error fetching current app icon: " + closure_128_0);
        c5 = 3;
        const obj2 = { value: closure_129_0(closure_129_2[10]).FreemiumAppIconIds.DEFAULT, done: true };
        return obj2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj3 = { value, done: true };
        return obj3;
      } else {
        c3 = 0;
        c5 = 3;
        obj = { value: value.id, done: true };
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
let closure_16 = async function _setAppIcon(arg0, arg1) {
  closure_3 = tmp3;
  closure_2 = tmp5;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  let obj3 = DCDIconManager;
  if (DCDIconManager != null) {
    const setIconResult = obj3.setIcon(tmp27);
  }
  await setIconResult;
  if (1 === tmp8) {
    c5 = 0;
    closure_130_2 = closure_4;
    const obj2 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: null };
    const intl = closure_131_0(closure_131_2[15]).intl;
    obj2.content = intl.string(closure_131_0(closure_131_2[15]).t["c76eo/"]);
    closure_131_1(closure_131_2[14]).open(obj2);
    const _HermesInternal = HermesInternal;
    closure_131_12.warn("Error changing users app icon: " + closure_130_2);
    c7 = 3;
    closure_131_1(closure_131_2[14]);
  } else if (arg0 === 1) {
    c7 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_131_1(closure_131_2[12]).dispatch({ type: "APP_ICON_UPDATED" });
    closure_131_1(closure_131_2[12]);
    obj3 = { icon_id: closure_130_0, user_premium_tier: closure_130_1, icon_premium_tier: null };
    let TIER_2 = null;
    if (closure_130_0 !== closure_131_0(closure_131_2[10]).FreemiumAppIconIds.DEFAULT) {
      TIER_2 = closure_131_11.TIER_2;
    }
    obj3.icon_premium_tier = TIER_2;
    closure_131_1(closure_131_2[13]).track(closure_131_9.APP_ICON_UPDATED, obj3);
    c5 = 0;
    closure_131_1(closure_131_2[13]);
  }
  return arg1;
};
const AppIconConstants = fn(9323);
({ getDefaultIcon: metroRequire, getOfficialAlternateIcons: closure_7, getLimitedAlternateIcons: closure_8 } = AppIconConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, UserSettingsSections: c10 } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
let closure_12 = new LoggerDefault("AppIconUtils");
const PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let DCDIconManager = fn(13364).default;
} else {
  DCDIconManager = fn(17).NativeModules.DCDIconManager;
}
function useCurrentAppIcon() {
  const tmp = _slicedToArray(noop.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT), 2);
  _require = tmp[1];
  importDefault = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: fetchCurrentAppIcon(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export { useCurrentAppIcon };
export const setAppIcon = function setAppIcon() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useAppIcons = function useAppIcons() {
  const currentAppIcon = _slicedToArray(noop.useState(AppIconTypes.FreemiumAppIconIds.DEFAULT), 2);
  closure_129_0 = currentAppIcon[1];
  closure_129_1 = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: fetchCurrentAppIcon(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
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
  [tmp4, require] = _slicedToArray(noop.useState([]), 2);
  const tmp3 = _slicedToArray(noop.useState([]), 2);
  [tmp6, importDefault] = _slicedToArray(noop.useState([]), 2);
  dependencyMap = noop.useCallback(asyncGeneratorStep(async () => {
    if (availableIcons != null) {
      availableIcons = availableIcons.getAvailableIcons();
    }
    await availableIcons;
    if (1 === tmp7) {
      c4 = 0;
      closure_129_3 = closure_3;
      const obj2 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: null };
      const intl = closure_0(tmp3[15]).intl;
      obj2.content = intl.string(closure_0(tmp3[15]).t["c76eo/"]);
      closure_1(tmp3[14]).open(obj2);
      const _HermesInternal = HermesInternal;
      logger.warn("Error fetching available app icons: " + closure_129_3);
      let v3 = 3;
      closure_1(tmp3[14]);
    } else if (arg0 === 1) {
      v3 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_129_0 = arg1.map((id) => id.id);
      closure_129_1 = closure_1_7().filter((id) => closure_1_0.includes(id.id));
      closure_1_7();
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
    return arg1;
  }), []);
  useMountEffectDefault(() => {
    closure_2();
    const subscription = DispatcherDefault.subscribe("APP_ICON_UPDATED", closure_2);
    return () => {
      require("Dispatcher").unsubscribe("APP_ICON_UPDATED", closure_1_2);
    };
  });
  return { officialAppIcons, limitedTimeAppIcons, currentAppIcon: currentAppIcon[0] };
};
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  const obj = { screen: constants.APP_ICONS };
  obj.openUserSettings(obj);
};
export const isAppIconsSupported = function isAppIconsSupported() {
  return !MetaQuestUtils.isMetaQuest();
};