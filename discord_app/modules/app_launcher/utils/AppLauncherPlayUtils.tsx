// discord_app/modules/app_launcher/utils/AppLauncherPlayUtils.tsx
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let obj = function _launchActivityInBotDM() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let customId;
    let obj5;
    let obj7;
    let referrerId;
    let closure_0 = arg0;
    if (referrerId === 2) {
      referrerId = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let targetApplicationId;
        let recipientIds;
        let analyticsLocations;
        let commandOrigin;
        let channelId;
        referrerId = 2;
        if (0 === customId) {
          if (arg0 === 1) {
            referrerId = 3;
            throw value;
          } else if (arg0 === 2) {
            referrerId = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            targetApplicationId = undefined;
            recipientIds = undefined;
            analyticsLocations = undefined;
            commandOrigin = undefined;
            ({
              appId: c0,
              botId: c1,
              analyticsLocations: c2,
              customId: c3,
              referrerId: c4,
              commandOrigin: c5,
            } = closure_0);
            channelId = undefined;
            customId = 1;
            referrerId = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === customId) {
          if (arg0 === 1) {
            referrerId = 3;
            throw value;
          } else if (arg0 === 2) {
            referrerId = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj6 = { applicationId: targetApplicationId, analyticsContext: obj7 };
            obj7 = { isStart: true, analyticsLocations };
            const obj13 = closure_130_0(closure_130_2[1]);
            if (obj13.tryLaunchAsFrame(obj6)) {
              referrerId = 3;
              const obj8 = { value: Promise.resolve(true), done: true };
              return obj8;
            } else {
              const obj9 = { recipientIds };
              customId = 2;
              referrerId = 1;
              const obj10 = { value: obj5.openPrivateChannel(obj9), done: false };
              obj5 = closure_130_1(closure_130_2[2]);
              return obj10;
            }
          }
        } else if (2 === customId) {
          if (arg0 === 1) {
            referrerId = 3;
            throw value;
          } else if (arg0 === 2) {
            referrerId = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            channelId = value;
            const obj12 = { targetApplicationId, channelId, analyticsLocations, customId, referrerId, commandOrigin };
            customId = 3;
            referrerId = 1;
            const obj14 = { value: closure_130_1(closure_130_2[3])(obj12), done: false };
            return obj14;
          }
        } else if (arg0 === 1) {
          referrerId = 3;
          throw value;
        } else if (arg0 === 2) {
          referrerId = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          referrerId = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp11) {
        referrerId = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/app_launcher/utils/AppLauncherPlayUtils.tsx");

export const launchActivityInBotDM = function launchActivityInBotDM() {
  return obj(...arguments);
};
