// discord_app/modules/app_icons/native/AppIconUtils.tsx
import _slicedToArray from "_slicedToArray";
import closure_4 from "ME";
import noop from "noop";
import items from "items";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";
import set from "set";
import set from "noop";
import { useMountLayoutEffect } from "../../../hooks/useMountEffect.tsx";
import { isMetaQuest } from "../../device/MetaQuestUtils.android.tsx";
import { openUserSettings } from "../../user_settings/core/native/openUserSettings.tsx";
import { FreemiumAppIconIds } from "../AppIconTypes.tsx";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function fetchCurrentAppIcon() {
  const self = this;
  const apply = _fetchCurrentAppIcon.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchCurrentAppIcon() {
  const self = this;
  const tmp = callback2(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let callback = tmp7;
            let c3 = 1;
            let obj3 = outer1_13;
            let currentIcon;
            if (outer1_13 != null) {
              currentIcon = obj3.getCurrentIcon();
            }
            c4 = 2;
            c5 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = currentIcon;
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = table;
          const _HermesInternal = HermesInternal;
          logger.warn("Error fetching current app icon: " + callback);
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = callback(table[10]).FreemiumAppIconIds.DEFAULT;
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1.id;
          return obj;
        }
      } catch (tmp18) {
        table = tmp18;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp18;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _fetchCurrentAppIcon = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setAppIcon() {
  const self = this;
  const tmp = callback2((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let _slicedToArray = tmp3;
      let dependencyMap = tmp5;
      let c5 = 1;
      let obj3 = outer1_13;
      if (outer1_13 != null) {
        const setIconResult = obj3.setIcon(tmp27);
      }
      yield setIconResult;
      if (1 === tmp8) {
        c5 = 0;
        dependencyMap = closure_4;
        const obj1 = callback2(3986);
        const obj2 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: null };
        const intl = callback(1236).intl;
        obj2[1] = intl.string(callback(1236).t["c76eo/"]);
        obj1.open(obj2);
        const _HermesInternal = HermesInternal;
        logger.warn("Error changing users app icon: " + dependencyMap);
        let c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        callback2(709).dispatch({ type: "APP_ICON_UPDATED" });
        const obj8 = callback2(709);
        obj3 = { icon_id: null, user_premium_tier: null, icon_premium_tier: null };
        obj3[0] = callback;
        obj3[1] = callback2;
        let TIER_2 = null;
        if (callback !== callback(7584).FreemiumAppIconIds.DEFAULT) {
          TIER_2 = TIER_2.TIER_2;
        }
        obj3[2] = TIER_2;
        callback2(698).track(constants.APP_ICON_UPDATED, obj3);
        c5 = 0;
        const obj9 = callback2(698);
      }
      c5 = 0;
      return arg1;
    })();
  });
  const _setAppIcon = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ getDefaultIcon: closure_6, getOfficialAlternateIcons: error, getLimitedAlternateIcons: metroImportAll } = items);
({ AnalyticEvents: c9, UserSettingsSections: c10 } = ME);
let closure_12 = new require("get ActivityIndicator")("AppIconUtils");
if (set.isAndroid()) {
  let DCDIconManager = require("enforcing").default;
} else {
  DCDIconManager = require("isMetaQuest").NativeModules.DCDIconManager;
}
function useCurrentAppIcon() {
  const tmp = callback(React.useState(_FreemiumAppIconIds.FreemiumAppIconIds.DEFAULT), 2);
  _require = tmp[1];
  const importDefault = React.useCallback(callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let callback = tmp2;
            callback = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_14();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback = arg1;
          callback(callback);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  }), []);
  useMountLayoutEffect(() => {
    callback();
    const subscription = callback(709).subscribe("APP_ICON_UPDATED", callback);
    return () => {
      outer1_1(outer1_2[12]).unsubscribe("APP_ICON_UPDATED", closure_1);
    };
  });
  return tmp[0];
}
const result = set.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export { useCurrentAppIcon };
export const setAppIcon = function setAppIcon(DEFAULT, premiumType) {
  const self = this;
  const apply = _setAppIcon.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useAppIcons = function useAppIcons() {
  let closure_0;
  let closure_1;
  let tmp4;
  let tmp6;
  const currentAppIcon = callback(React.useState(_FreemiumAppIconIds.FreemiumAppIconIds.DEFAULT), 2);
  _require = currentAppIcon[1];
  const importDefault = React.useCallback(callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let callback = tmp2;
            callback = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_14();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback = arg1;
          callback(callback);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  }), []);
  useMountLayoutEffect(() => {
    callback();
    const subscription = callback(709).subscribe("APP_ICON_UPDATED", callback);
    return () => {
      outer1_1(outer1_2[12]).unsubscribe("APP_ICON_UPDATED", closure_1);
    };
  });
  [tmp4, closure_0] = callback(React.useState([]), 2);
  const tmp3 = callback(React.useState([]), 2);
  [tmp6, closure_1] = callback(React.useState([]), 2);
  const dependencyMap = React.useCallback(callback2(function*() {
    let closure_2 = tmp3;
    let c4 = 1;
    if (outer1_13 != null) {
      const availableIcons = outer1_13.getAvailableIcons();
    }
    yield availableIcons;
    if (1 === tmp7) {
      c4 = 0;
      const outer1_3 = _slicedToArray;
      const obj1 = outer1_1(outer1_2[14]);
      const obj2 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: null };
      const intl = outer1_0(outer1_2[15]).intl;
      obj2[1] = intl.string(outer1_0(outer1_2[15]).t["c76eo/"]);
      obj1.open(obj2);
      const _HermesInternal = HermesInternal;
      outer1_12.warn("Error fetching available app icons: " + outer1_3);
      let v0 = 3;
    } else if (arg0 === 1) {
      v0 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      let callback = arg1.map((id) => id.id);
      const callback2 = outer1_7().filter((id) => closure_0.includes(id.id));
      const arr = outer1_7();
      closure_2 = outer1_8().filter((id) => closure_0.includes(id.id));
      callback2(closure_2);
      callback = 0;
      const items = [v0()];
      const sum = callback + 1;
      callback = sum;
      callback = HermesBuiltin.arraySpread(callback2, sum);
      callback(items);
      c4 = 0;
      const arr2 = outer1_8();
    }
    c4 = 0;
    return arg1;
  }), []);
  useMountLayoutEffect(() => {
    dependencyMap();
    const subscription = callback(709).subscribe("APP_ICON_UPDATED", dependencyMap);
    return () => {
      outer1_1(outer1_2[12]).unsubscribe("APP_ICON_UPDATED", closure_2);
    };
  });
  return { officialAppIcons, limitedTimeAppIcons, currentAppIcon: currentAppIcon[0] };
};
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  let obj = openUserSettings;
  obj = { screen: constants.APP_ICONS };
  obj.openUserSettings(obj);
};
export const isAppIconsSupported = function isAppIconsSupported() {
  return !isMetaQuest.isMetaQuest();
};