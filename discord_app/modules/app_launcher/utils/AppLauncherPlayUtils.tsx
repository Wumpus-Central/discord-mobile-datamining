// discord_app/modules/app_launcher/utils/AppLauncherPlayUtils.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _launchActivityInBotDM(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({
            appId: closure_129_0,
            botId: closure_129_1,
            analyticsLocations: closure_129_2,
            customId: closure_129_3,
            referrerId: closure_129_4,
            commandOrigin: closure_129_5,
          } = closure_0);
          closure_129_6 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj6 = { applicationId: closure_129_0, analyticsContext: null };
          const obj7 = { isStart: true, analyticsLocations: closure_129_2 };
          obj6.analyticsContext = obj7;
          if (obj13.tryLaunchAsFrame(obj6)) {
            c4 = 3;
            const obj8 = { value: Promise.resolve(true), done: true };
            return obj8;
          } else {
            const obj9 = { recipientIds: closure_129_1 };
            c3 = 2;
            c4 = 1;
            const obj10 = { value: closure_130_1(closure_130_2[2]).openPrivateChannel(obj9), done: false };
            return obj10;
          }
          obj13 = closure_130_0(closure_130_2[1]);
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_129_6 = value;
          const obj12 = {
            targetApplicationId: closure_129_0,
            channelId: closure_129_6,
            analyticsLocations: closure_129_2,
            customId: closure_129_3,
            referrerId: closure_129_4,
            commandOrigin: closure_129_5,
          };
          c3 = 3;
          c4 = 1;
          const obj14 = { value: closure_130_1(closure_130_2[3])(obj12), done: false };
          return obj14;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj15 = { value, done: true };
        return obj15;
      } else {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp12) {
      c4 = tmp;
      throw tmp12;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/utils/AppLauncherPlayUtils.tsx");

export const launchActivityInBotDM = function launchActivityInBotDM() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
