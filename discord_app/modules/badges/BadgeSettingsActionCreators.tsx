// discord_app/modules/badges/BadgeSettingsActionCreators.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

const require = fn;
function _updateBadgeSettings() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj4 = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              ({ displayOrder: c0, hiddenBadges: c1 } = callback);
              obj4 = undefined;
              let body;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (null != callback) {
                const obj2 = { display_order: null };
                obj2[0] = callback;
                let obj3 = obj2;
              } else {
                obj3 = {};
              }
              obj4 = {};
              const merged = Object.assign(obj3);
              if (null != callback2) {
                const obj5 = { hidden_badges: null };
                obj5[0] = callback2;
                let obj6 = obj5;
              } else {
                obj6 = {};
              }
              const merged1 = Object.assign(obj6);
              const _Object = Object;
              if (0 === Object.keys(obj4).length) {
                c6 = 3;
                return { value: true, done: true };
              } else {
                let constants = 1;
                const HTTP = callback(obj4[2]).HTTP;
                const obj7 = { url: null, body: null, rejectWithError: true };
                obj7[0] = constants.USER_BADGE_SETTINGS;
                obj7[1] = obj4;
                c5 = 3;
                c6 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = HTTP.patch(obj7);
                return obj8;
              }
            }
          } else if (2 === tmp7) {
            constants = 0;
            constants = body;
            obj6 = callback2(obj4[5]);
            obj6.captureException(constants);
            c6 = 3;
            return { value: false, done: true };
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 0;
              c6 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = arg1;
              return obj9;
            } else {
              body = arg1;
              obj1 = callback2(obj4[3]);
              const obj10 = { type: "BADGE_SETTINGS_UPDATE", settings: null };
              obj10[1] = body.body;
              obj1.dispatch(obj10);
              obj3 = callback(obj4[4]);
              c5 = 4;
              c6 = 1;
              const obj11 = { value: null, done: false };
              obj11[0] = obj3.fetchBadgeDirectory();
              return obj11;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            constants = 0;
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp45) {
          body = tmp45;
          if (tmp4 === constants) {
            c6 = tmp2;
            throw tmp45;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("obj132").fileFinishedImporting("modules/badges/BadgeSettingsActionCreators.tsx");

export const updateBadgeSettings = function updateBadgeSettings(arg0) {
  const self = this;
  const apply = _updateBadgeSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};