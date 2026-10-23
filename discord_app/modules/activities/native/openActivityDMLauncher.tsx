// === Module 15209: openActivityDMLauncher ===

// Module 15209 (openActivityDMLauncher)
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
      return { value: "IconComponent", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
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
          let customId;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "Reflect", done: true };
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
          const obj6 = { value: closure_134_0(closure_134_2[2]).getCustomActivityLinkParams(closure_133_0, closure_133_3, closure_133_2), done: false };
          return obj6;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          customId = value.customId;
          if (closure_133_4) {
            c7 = 3;
            c8 = 1;
            const obj8 = { value: closure_134_1(closure_134_2[6]).fetchApplication(closure_133_0), done: false };
            return obj8;
          } else {
            const obj9 = { applicationId: closure_133_0, fromLink: true, customId, referrerId: closure_133_1, analyticsLocations: null, commandOrigin: null };
            const items = [closure_134_1(closure_134_2[4]).ACTIVITY_BOOKMARK];
            obj9.analyticsLocations = items;
            obj9.commandOrigin = closure_134_0(closure_134_2[5]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED;
            c7 = 4;
            c8 = 1;
            const obj10 = { value: closure_134_1(closure_134_2[3]).launch(obj9), done: false };
            return obj10;
          }
        }
      } else {
        if (3 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_133_6 = value;
            const bot = closure_133_6.bot;
            let id;
            if (bot != null) {
              id = bot.id;
            }
            closure_133_7 = id;
            if (null != closure_133_7) {
              const obj12 = { recipientIds: closure_133_7 };
              c7 = 5;
              c8 = 1;
              const obj14 = { value: closure_134_1(closure_134_2[7]).openPrivateChannel(obj12), done: false };
              return obj14;
            }
          }
        } else {
          if (4 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj15 = { value, done: true };
              return obj15;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const bestActiveInput = closure_134_0(closure_134_2[8]).getBestActiveInput();
            if (bestActiveInput != null) {
              const obj16 = { type: closure_134_0(closure_134_2[9]).KeyboardTypes.APP_LAUNCHER, context: null };
              const obj17 = { application: closure_133_6, initialRouteName: closure_134_4.APPLICATION_VIEW, customId, referrerId: closure_133_1 };
              obj16.context = obj17;
              bestActiveInput.openCustomKeyboard(obj16);
            }
            const obj18 = closure_134_0(closure_134_2[8]);
          }
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c8 = 3;
      }
    } catch (tmp33) {
      c8 = tmp;
      throw tmp33;
    }
  }
};
const AppLauncherRouteName = fn(1504).AppLauncherRouteName;
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