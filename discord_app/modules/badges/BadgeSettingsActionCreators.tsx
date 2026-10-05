// === Module 14432: BadgeSettingsActionCreators ===

// Module 14432 (BadgeSettingsActionCreators)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, display_order;

let obj = function _updateBadgeSettings() {
  obj = _asyncToGenerator(async (display_order) => {
    let c0;
    let c1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (display_order === 1) {
        throw value;
      } else if (display_order === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let hidden_badges;
        let obj8;
        c6 = 2;
        if (0 === c5) {
          if (display_order === 1) {
            c6 = 3;
            throw value;
          } else if (display_order === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            display_order = undefined;
            hidden_badges = undefined;
            ({ displayOrder: c0, hiddenBadges: c1 } = closure_0);
            obj8 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (display_order === 1) {
            c6 = 3;
            throw value;
          } else if (display_order === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let obj7;
            let obj10;
            if (null != display_order) {
              const obj6 = { display_order };
              obj7 = obj6;
            } else {
              obj7 = {};
            }
            obj8 = {};
            const merged = Object.assign(obj7);
            if (null != hidden_badges) {
              const obj9 = { hidden_badges };
              obj10 = obj9;
            } else {
              obj10 = {};
            }
            const merged1 = Object.assign(obj10);
            const _Object = Object;
            if (0 === Object.keys(obj8).length) {
              c6 = 3;
              return { value: true, done: true };
            } else {
              c4 = 1;
              const HTTP = closure_130_0(closure_130_2[2]).HTTP;
              const request = { url: closure_130_4.USER_BADGE_SETTINGS, body: obj8, rejectWithError: true };
              c5 = 3;
              c6 = 1;
              const obj11 = { value: HTTP.patch(request), done: false };
              return obj11;
            }
          }
        } else if (2 === c5) {
          c4 = 0;
          const obj2 = closure_130_1(closure_130_2[3]);
          obj2.captureException(closure_3);
          c6 = 3;
          return { value: false, done: true };
        } else if (display_order === 1) {
          c6 = 3;
          throw value;
        } else if (display_order === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp34) {
        closure_3 = tmp34;
        if (0 === c4) {
          c6 = 3;
          throw tmp34;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/badges/BadgeSettingsActionCreators.tsx");

export const updateBadgeSettings = function updateBadgeSettings() {
  return obj(...arguments);
};