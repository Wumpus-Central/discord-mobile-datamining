// discord_app/modules/activities/native/openActivityDMLauncher.tsx
import _handleUsePrimaryEntryPointAppCommand from "_handleUsePrimaryEntryPointAppCommand";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";

const require = arg1;
function _openActivityDMLauncher() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let _handleUsePrimaryEntryPointAppCommand = arg3;
    let closure_4 = arg4;
    let c7 = 0;
    let c8 = 0;
    const iter = (function*(arg0, customId) {
      let id = tmp2;
      if (flag === undefined) {
        flag = false;
      }
      yield "ct";
      yield callback2(5729).fetchApplication(callback);
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
          let bot = customId;
          bot = bot.bot;
          id = undefined;
          if (bot != null) {
            id = bot.id;
          }
          if (null != bot) {
            if (null != id) {
              let obj9 = callback2(4313);
              const obj4 = { recipientIds: null };
              obj4[0] = id;
              let c7 = 3;
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
          obj6 = callback(12216);
          c7 = 4;
          customId = 1;
          const obj7 = { value: null, done: false };
          obj7[0] = obj6.getCustomActivityLinkParams(callback, _handleUsePrimaryEntryPointAppCommand, dependencyMap);
          return obj7;
        }
      } else if (4 === tmp5) {
        if (arg0 === 1) {
          customId = 3;
          throw customId;
        } else if (arg0 !== 2) {
          customId = customId.customId;
          if (flag) {
            obj3 = callback(4166);
            const bestActiveInput = obj3.getBestActiveInput();
            if (bestActiveInput != null) {
              const obj8 = { type: null, context: null };
              obj8[0] = callback(1607).KeyboardTypes.APP_LAUNCHER;
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
            const items = [callback2(5748).ACTIVITY_BOOKMARK];
            obj10[3] = items;
            obj10[4] = callback(6982).CommandOrigin.ACTIVITY_BOOKMARK_EMBED;
            obj10[5] = callback2;
            obj10[6] = customId;
            c7 = 5;
            customId = 1;
            const obj11 = { value: null, done: false };
            obj11[0] = callback2(10974)(obj10);
            return obj11;
          }
        }
      } else if (arg0 === 1) {
        customId = 3;
        throw customId;
      } else if (arg0 === 2) {
        customId = 3;
        const obj = { value: null, done: true };
        obj[0] = customId;
        return obj;
      }
      return customId;
    })();
    iter.next();
    return iter;
  });
  const _openActivityDMLauncher = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("fetchApplication").fileFinishedImporting("modules/activities/native/openActivityDMLauncher.tsx");

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