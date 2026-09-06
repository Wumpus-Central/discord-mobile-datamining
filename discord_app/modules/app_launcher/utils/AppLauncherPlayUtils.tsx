// === Module 11519: AppLauncherPlayUtils ===

// Module 11519 (AppLauncherPlayUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _launchActivityInBotDM(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ appId: closure_129_0, botId: closure_129_1, analyticsLocations: closure_129_2, customId: closure_129_3, referrerId: closure_129_4, commandOrigin: closure_129_5 } = closure_0);
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const obj2 = { applicationId: closure_129_0, analyticsContext: null };
          const obj3 = { isStart: true, analyticsLocations: closure_129_2 };
          obj2.analyticsContext = obj3;
          if (obj13.tryLaunchAsFrame(obj2)) {
            c4 = 3;
            let obj4 = { value: Promise.resolve(true), done: true };
            return obj4;
          } else {
            obj4 = closure_130_1(closure_130_2[2]);
            const obj5 = { recipientIds: closure_129_1 };
            c3 = 2;
            c4 = 1;
            const obj6 = { value: obj4.openPrivateChannel(obj5), done: false };
            return obj6;
          }
          obj13 = closure_130_0(closure_130_2[1]);
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_129_6 = value;
          const obj8 = { targetApplicationId: closure_129_0, channelId: closure_129_6, analyticsLocations: closure_129_2, customId: closure_129_3, referrerId: closure_129_4, commandOrigin: closure_129_5 };
          c3 = 3;
          c4 = 1;
          const obj9 = { value: closure_130_1(closure_130_2[3])(obj8), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        c4 = 3;
        obj = { value, done: true };
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