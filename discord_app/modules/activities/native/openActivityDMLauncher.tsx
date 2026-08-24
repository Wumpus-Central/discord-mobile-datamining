// discord_app/modules/activities/native/openActivityDMLauncher.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { AppLauncherRouteName } from "../../app_launcher/native/AppLauncherNativeConstants.tsx";

const require = arg1;
function _openActivityDMLauncher() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c7 = 0;
    c8 = 0;
    const iter = (function*(arg0, customId) {
      if (customId === 2) {
        customId = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw customId;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = customId;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          customId = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              customId = 3;
              throw customId;
            } else if (arg0 === 2) {
              customId = 3;
              obj = { value: null, done: true };
              obj[0] = customId;
              return obj;
            } else {
              let id = tmp2;
              let bot = tmp5;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              bot = undefined;
              id = undefined;
              c7 = undefined;
              customId = undefined;
              c7 = 1;
              customId = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              customId = 3;
              throw customId;
            } else if (arg0 === 2) {
              customId = 3;
              obj1 = { value: null, done: true };
              obj1[0] = customId;
              return obj1;
            } else {
              c7 = 2;
              customId = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback2(7178).fetchApplication(callback);
              return obj2;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                customId = 3;
                throw customId;
              } else if (arg0 === 2) {
                customId = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = customId;
                return obj3;
              } else {
                bot = customId;
                bot = bot.bot;
                id = undefined;
                if (bot != null) {
                  id = bot.id;
                }
                if (null != bot) {
                  if (null != id) {
                    let obj9 = callback2(4775);
                    const obj4 = { recipientIds: null };
                    obj4[0] = id;
                    c7 = 3;
                    customId = 1;
                    const obj5 = { value: null, done: false };
                    obj5[0] = obj9.openPrivateChannel(obj4);
                    return obj5;
                  }
                }
                customId = 3;
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                customId = 3;
                throw customId;
              } else if (arg0 === 2) {
                customId = 3;
                let obj6 = { value: null, done: true };
                obj6[0] = customId;
                return obj6;
              } else {
                c7 = customId;
                obj6 = callback(12463);
                c7 = 4;
                customId = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = obj6.getCustomActivityLinkParams(callback, closure_3, dependencyMap);
                return obj7;
              }
            } else if (4 === tmp5) {
              if (arg0 === 1) {
                customId = 3;
                throw customId;
              } else if (arg0 !== 2) {
                customId = customId.customId;
                if (flag) {
                  obj3 = callback(4241);
                  const bestActiveInput = obj3.getBestActiveInput();
                  if (bestActiveInput != null) {
                    const obj8 = { type: null, context: null };
                    obj8[0] = callback(1627).KeyboardTypes.APP_LAUNCHER;
                    obj9 = { application: null, initialRouteName: null, customId: null, referrerId: null };
                    obj9[0] = bot;
                    obj9[1] = flag.APPLICATION_VIEW;
                    obj9[2] = customId;
                    obj9[3] = callback2;
                    obj8[1] = obj9;
                    bestActiveInput.openCustomKeyboard(obj8);
                  }
                } else {
                  const obj10 = { targetApplicationId: null, locationObject: null, channelId: null, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
                  obj10[0] = callback;
                  obj10[1] = {};
                  obj10[2] = c7;
                  const items = [callback2(7197).ACTIVITY_BOOKMARK];
                  obj10[3] = items;
                  obj10[4] = callback(5253).CommandOrigin.ACTIVITY_BOOKMARK_EMBED;
                  obj10[5] = callback2;
                  obj10[6] = customId;
                  c7 = 5;
                  customId = 1;
                  const obj11 = { value: null, done: false };
                  obj11[0] = callback2(8783)(obj10);
                  return obj11;
                }
              }
            } else if (arg0 === 1) {
              customId = 3;
              throw customId;
            } else if (arg0 === 2) {
              customId = 3;
              obj = { value: null, done: true };
              obj[0] = customId;
              return obj;
            }
            customId = 3;
            const obj12 = { value: null, done: true };
            obj12[0] = customId;
            return obj12;
          }
        } catch (tmp49) {
          customId = tmp;
          throw tmp49;
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
const result = require("set").fileFinishedImporting("modules/activities/native/openActivityDMLauncher.tsx");

export default function openActivityDMLauncher() {
  const self = this;
  const apply = _openActivityDMLauncher.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};