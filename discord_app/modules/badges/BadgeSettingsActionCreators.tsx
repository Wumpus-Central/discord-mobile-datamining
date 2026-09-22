// === Module 14888: BadgeSettingsActionCreators ===

// Module 14888 (BadgeSettingsActionCreators)
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ displayOrder: closure_129_0, hiddenBadges: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (null != closure_129_0) {
            const obj6 = { display_order: closure_129_0 };
            let obj7 = obj6;
          } else {
            obj7 = {};
          }
          const obj8 = {};
          const merged = Object.assign(obj7);
          if (null != closure_129_1) {
            const obj9 = { hidden_badges: closure_129_1 };
            let obj10 = obj9;
          } else {
            obj10 = {};
          }
          const merged1 = Object.assign(obj10);
          closure_129_2 = obj8;
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
            const obj11 = { value: HTTP.patch(request), done: false };
            return obj11;
          }
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        closure_130_1(closure_130_2[3]).captureException(closure_129_3);
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp37) {
      closure_3 = tmp37;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp37;
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