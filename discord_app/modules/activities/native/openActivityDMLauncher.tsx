// === Module 14085: openActivityDMLauncher ===

// Module 14085 (openActivityDMLauncher)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _openActivityDMLauncher(arg0) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp2;
          closure_5 = tmp5;
          closure_133_4 = undefined;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = closure_2;
          closure_133_3 = closure_3;
          let flag = closure_4;
          if (closure_4 === undefined) {
            flag = false;
          }
          closure_133_4 = flag;
          closure_133_5 = undefined;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          let customId;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c7 = 2;
          c8 = 1;
          const obj6 = { value: closure_134_1(closure_134_2[2]).fetchApplication(closure_133_0), done: false };
          return obj6;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_133_5 = value;
            const bot = closure_133_5.bot;
            let id;
            if (bot != null) {
              id = bot.id;
            }
            closure_133_6 = id;
            if (null != closure_133_5) {
              if (null != closure_133_6) {
                const obj9 = { recipientIds: closure_133_6 };
                c7 = 3;
                c8 = 1;
                const obj11 = { value: closure_134_1(closure_134_2[3]).openPrivateChannel(obj9), done: false };
                return obj11;
              }
            }
            c8 = 3;
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_133_7 = value;
            c7 = 4;
            c8 = 1;
            const obj13 = { value: closure_134_0(closure_134_2[4]).getCustomActivityLinkParams(closure_133_0, closure_133_3, closure_133_2), done: false };
            return obj13;
          }
        } else if (4 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            customId = value.customId;
            if (closure_133_4) {
              const bestActiveInput = closure_134_0(closure_134_2[8]).getBestActiveInput();
              if (bestActiveInput != null) {
                const obj15 = { type: closure_134_0(closure_134_2[9]).KeyboardTypes.APP_LAUNCHER, context: null };
                const obj16 = { application: closure_133_5, initialRouteName: closure_134_4.APPLICATION_VIEW, customId, referrerId: closure_133_1 };
                obj15.context = obj16;
                bestActiveInput.openCustomKeyboard(obj15);
              }
              const obj4 = closure_134_0(closure_134_2[8]);
            } else {
              const obj17 = { targetApplicationId: closure_133_0, locationObject: {}, channelId: closure_133_7, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
              const items = [closure_134_1(closure_134_2[6]).ACTIVITY_BOOKMARK];
              obj17.analyticsLocations = items;
              obj17.commandOrigin = closure_134_0(closure_134_2[7]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED;
              obj17.referrerId = closure_133_1;
              obj17.customId = customId;
              c7 = 5;
              c8 = 1;
              const obj18 = { value: closure_134_1(closure_134_2[5])(obj17), done: false };
              return obj18;
            }
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c8 = 3;
        const obj19 = { value, done: true };
        return obj19;
      }
    } catch (tmp49) {
      c8 = tmp;
      throw tmp49;
    }
  }
};
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/openActivityDMLauncher.tsx");

export default function openActivityDMLauncher() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};