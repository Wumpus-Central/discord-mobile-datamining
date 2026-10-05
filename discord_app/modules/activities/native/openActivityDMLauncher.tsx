// discord_app/modules/activities/native/openActivityDMLauncher.tsx
import AppLauncherNativeConstants from "../../app_launcher/native/AppLauncherNativeConstants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c7, c8;

let obj = function _openActivityDMLauncher() {
  obj = _asyncToGenerator(async (targetApplicationId, referrerId, arg2, arg3) => {
    let items;
    let obj13;
    let obj17;
    let obj6;
    let obj9;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (targetApplicationId === 1) {
        throw value;
      } else if (targetApplicationId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let application;
        let flag;
        let id;
        let channelId;
        let customId;
        c8 = 2;
        if (0 === c7) {
          if (targetApplicationId === 1) {
            c8 = 3;
            throw value;
          } else if (targetApplicationId === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp;
            application = tmp4;
            flag = closure_4;
            if (closure_4 === undefined) {
              flag = false;
            }
            application = undefined;
            id = undefined;
            channelId = undefined;
            customId = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (targetApplicationId === 1) {
            c8 = 3;
            throw value;
          } else if (targetApplicationId === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c7 = 2;
            c8 = 1;
            const obj7 = { value: obj13.fetchApplication(targetApplicationId), done: false };
            obj13 = closure_134_1(closure_134_2[2]);
            return obj7;
          }
        } else {
          if (2 === c7) {
            if (targetApplicationId === 1) {
              c8 = 3;
              throw value;
            } else if (targetApplicationId === 2) {
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              application = value;
              const bot = application.bot;
              id = undefined;
              if (bot != null) {
                id = bot.id;
              }
              if (null != application) {
                if (null != id) {
                  const obj10 = { recipientIds: id };
                  c7 = 3;
                  c8 = 1;
                  const obj11 = { value: obj9.openPrivateChannel(obj10), done: false };
                  obj9 = closure_134_1(closure_134_2[3]);
                  return obj11;
                }
              }
            }
          } else if (3 === c7) {
            if (targetApplicationId === 1) {
              c8 = 3;
              throw value;
            } else if (targetApplicationId === 2) {
              c8 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              channelId = value;
              c7 = 4;
              c8 = 1;
              const obj14 = {
                value: obj6.getCustomActivityLinkParams(targetApplicationId, closure_3, closure_2),
                done: false,
              };
              obj6 = closure_134_0(closure_134_2[4]);
              return obj14;
            }
          } else if (4 === c7) {
            if (targetApplicationId === 1) {
              c8 = 3;
              throw value;
            } else if (targetApplicationId === 2) {
              c8 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              customId = value.customId;
              const tmp54 = flag;
              if (tmp54) {
                const obj4 = closure_134_0(closure_134_2[8]);
                const bestActiveInput = obj4.getBestActiveInput();
                if (bestActiveInput != null) {
                  const obj16 = { type: closure_134_0(closure_134_2[9]).KeyboardTypes.APP_LAUNCHER, context: obj17 };
                  const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                  obj17 = { application, initialRouteName: closure_134_4.APPLICATION_VIEW, customId, referrerId };
                  openCustomKeyboard(obj16);
                }
              } else {
                const obj18 = {
                  targetApplicationId,
                  locationObject: {},
                  channelId,
                  analyticsLocations: items,
                  commandOrigin: closure_134_0(closure_134_2[7]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED,
                  referrerId,
                  customId,
                };
                items = [];
                const tmp9 = closure_134_1(closure_134_2[5]);
                items[0] = closure_134_1(closure_134_2[6]).ACTIVITY_BOOKMARK;
                c7 = 5;
                c8 = 1;
                const obj19 = { value: tmp9(obj18), done: false };
                return obj19;
              }
            }
          } else if (targetApplicationId === 1) {
            c8 = 3;
            throw value;
          } else if (targetApplicationId === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp49) {
        c8 = 3;
        throw tmp49;
      }
    }
  });
  return obj(...arguments);
};
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const result = size.fileFinishedImporting("modules/activities/native/openActivityDMLauncher.tsx");

export default function openActivityDMLauncher() {
  return obj(...arguments);
}
