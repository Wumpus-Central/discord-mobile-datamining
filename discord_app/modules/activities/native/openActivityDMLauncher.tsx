// === Module 15768: openActivityDMLauncher ===

// Module 15768 (openActivityDMLauncher)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _openActivityDMLauncher(arg0) {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ applicationId: closure_129_0, referrerId: closure_129_1, customId: closure_129_2, linkId: closure_129_3, channelId: closure_129_4, isDeepLink } = closure_0);
          if (isDeepLink === undefined) {
            isDeepLink = false;
          }
          closure_129_5 = isDeepLink;
          let customId;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flexDirection", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 2;
          c4 = 1;
          const obj6 = { value: closure_130_0(closure_130_2[2]).getCustomActivityLinkParams(closure_129_0, closure_129_3, closure_129_2), done: false };
          return obj6;
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
          customId = value.customId;
          if (closure_129_5) {
            c3 = 3;
            c4 = 1;
            const obj8 = { value: closure_130_1(closure_130_2[6]).fetchApplication(closure_129_0), done: false };
            return obj8;
          } else {
            const obj9 = { applicationId: closure_129_0, fromLink: true, linkChannelId: closure_129_4, customId, referrerId: closure_129_1, analyticsLocations: null, commandOrigin: null };
            const items = [closure_130_1(closure_130_2[4]).ACTIVITY_BOOKMARK];
            obj9.analyticsLocations = items;
            obj9.commandOrigin = closure_130_0(closure_130_2[5]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED;
            c3 = 4;
            c4 = 1;
            const obj10 = { value: closure_130_1(closure_130_2[3]).launch(obj9), done: false };
            return obj10;
          }
        }
      } else {
        if (3 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_129_7 = value;
            const bot = closure_129_7.bot;
            let id;
            if (bot != null) {
              id = bot.id;
            }
            closure_129_8 = id;
            if (null != closure_129_8) {
              const obj12 = { recipientIds: closure_129_8 };
              c3 = 5;
              c4 = 1;
              const obj14 = { value: closure_130_1(closure_130_2[7]).openPrivateChannel(obj12), done: false };
              return obj14;
            }
          }
        } else {
          if (4 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj15 = { value, done: true };
              return obj15;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const bestActiveInput = closure_130_0(closure_130_2[8]).getBestActiveInput();
            if (bestActiveInput != null) {
              const obj16 = { type: closure_130_0(closure_130_2[9]).KeyboardTypes.APP_LAUNCHER, context: null };
              const obj17 = { application: closure_129_7, initialRouteName: closure_130_4.APPLICATION_VIEW, customId, referrerId: closure_129_1 };
              obj16.context = obj17;
              bestActiveInput.openCustomKeyboard(obj16);
            }
            const obj18 = closure_130_0(closure_130_2[8]);
          }
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      }
    } catch (tmp30) {
      c4 = tmp;
      throw tmp30;
    }
  }
};
const AppLauncherRouteName = fn(1497).AppLauncherRouteName;
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