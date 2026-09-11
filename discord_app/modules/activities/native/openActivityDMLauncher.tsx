// discord_app/modules/activities/native/openActivityDMLauncher.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _openActivityDMLauncher(arg0) {
  closure_6 = tmp2;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  closure_133_2 = closure_2;
  closure_133_3 = closure_3;
  let flag = closure_4;
  if (closure_4 === undefined) {
    flag = false;
  }
  closure_133_4 = flag;
  await "PX_16";
  await closure_134_1(closure_134_2[2]).fetchApplication(closure_133_0);
  if (2 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      let obj3 = { value, done: true };
      return obj3;
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
          let obj9 = closure_134_1(closure_134_2[3]);
          c7 = 3;
          c8 = 1;
          return { value: obj9.openPrivateChannel({ recipientIds: closure_133_6 }), done: false };
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
      let obj6 = { value, done: true };
      return obj6;
    } else {
      closure_133_7 = value;
      obj6 = closure_134_0(closure_134_2[4]);
      c7 = 4;
      c8 = 1;
      return { value: obj6.getCustomActivityLinkParams(closure_133_0, closure_133_3, closure_133_2), done: false };
    }
  } else if (4 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const customId = value.customId;
      if (closure_133_4) {
        obj3 = closure_134_0(closure_134_2[8]);
        const bestActiveInput = obj3.getBestActiveInput();
        if (bestActiveInput != null) {
          const obj8 = { type: closure_134_0(closure_134_2[9]).KeyboardTypes.APP_LAUNCHER, context: null };
          obj9 = {
            application: closure_133_5,
            initialRouteName: closure_134_4.APPLICATION_VIEW,
            customId,
            referrerId: closure_133_1,
          };
          obj8.context = obj9;
          bestActiveInput.openCustomKeyboard(obj8);
        }
      } else {
        const obj10 = {
          targetApplicationId: closure_133_0,
          locationObject: {},
          channelId: closure_133_7,
          analyticsLocations: null,
          commandOrigin: null,
          referrerId: null,
          customId: null,
        };
        const items = [closure_134_1(closure_134_2[6]).ACTIVITY_BOOKMARK];
        obj10.analyticsLocations = items;
        obj10.commandOrigin = closure_134_0(closure_134_2[7]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED;
        obj10.referrerId = closure_133_1;
        obj10.customId = customId;
        c7 = 5;
        c8 = 1;
        return { value: closure_134_1(closure_134_2[5])(obj10), done: false };
      }
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 3;
    return { value, done: true };
  }
  return value;
};
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
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
}
