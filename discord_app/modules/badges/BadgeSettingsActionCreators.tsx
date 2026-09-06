// === Module 14606: BadgeSettingsActionCreators ===

// Module 14606 (BadgeSettingsActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _updateBadgeSettings(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ displayOrder: closure_129_0, hiddenBadges: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (null != closure_129_0) {
            const obj2 = { display_order: closure_129_0 };
            let obj3 = obj2;
          } else {
            obj3 = {};
          }
          const obj4 = {};
          const merged = Object.assign(obj3);
          if (null != closure_129_1) {
            const obj5 = { hidden_badges: closure_129_1 };
            let obj6 = obj5;
          } else {
            obj6 = {};
          }
          const merged1 = Object.assign(obj6);
          closure_129_2 = obj4;
          const _Object = Object;
          if (0 === Object.keys(closure_129_2).length) {
            c6 = 3;
            return { value: true, done: true };
          } else {
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[2]).HTTP;
            const request = { url: closure_130_4.USER_BADGE_SETTINGS, body: closure_129_2, rejectWithError: true };
            c5 = 3;
            c6 = 1;
            const obj7 = { value: HTTP.patch(request), done: false };
            return obj7;
          }
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_4 = closure_3;
        obj3 = closure_130_1(closure_130_2[4]);
        obj3.captureException(closure_129_4);
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_129_3 = value;
        obj = closure_130_1(closure_130_2[3]);
        const obj9 = { type: "BADGE_SETTINGS_UPDATE", settings: closure_129_3.body };
        obj.dispatch(obj9);
        c4 = 0;
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp43) {
      closure_3 = tmp43;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp43;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/BadgeSettingsActionCreators.tsx");

export const updateBadgeSettings = function updateBadgeSettings() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};