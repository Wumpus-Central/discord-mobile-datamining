// discord_app/modules/app_launcher/utils/AppLauncherPlayUtils.tsx
import set from "set";

const require = arg1;
function _launchActivityInBotDM() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = 0;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ appId: c0, botId: c1, analyticsLocations: c2, customId: c3, referrerId: c4, commandOrigin: c5 } = callback);
              let closure_6;
              c3 = 1;
              c4 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { applicationId: null };
              obj2[0] = callback;
              if (obj14.tryLaunchAsFrame(obj2)) {
                let obj7 = callback(10544);
                const result = obj7.stashPendingFrameLaunch(callback, { isStart: true });
                c4 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = Promise.resolve(true);
                return obj3;
              } else {
                let obj4 = callback2(4312);
                obj4 = { recipientIds: null };
                obj4[0] = callback2;
                c3 = 2;
                c4 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = obj4.openPrivateChannel(obj4);
                return obj5;
              }
              obj14 = callback(10543);
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              closure_6 = arg1;
              obj7 = { targetApplicationId: null, channelId: null, analyticsLocations: null, customId: null, referrerId: null, commandOrigin: null };
              obj7[0] = callback;
              obj7[1] = closure_6;
              obj7[2] = dependencyMap;
              obj7[3] = c3;
              obj7[4] = c4;
              obj7[5] = c5;
              c3 = 3;
              c4 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = callback2(10907)(obj7);
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp14) {
          c4 = tmp;
          throw tmp14;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _launchActivityInBotDM = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("stashPendingFrameLaunch").fileFinishedImporting("modules/app_launcher/utils/AppLauncherPlayUtils.tsx");

export const launchActivityInBotDM = function launchActivityInBotDM(arg0) {
  const self = this;
  const apply = _launchActivityInBotDM.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};