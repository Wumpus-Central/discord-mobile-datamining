// === Module 11519: _launchActivityInBotDM ===

// Module 11519 (_launchActivityInBotDM)
import closure_3 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
function _launchActivityInBotDM() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: null };
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
              dependencyMap = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ appId: c0, botId: c1, analyticsLocations: c2, customId: c3, referrerId: c4, commandOrigin: c5 } = callback);
              closure_6 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { applicationId: null, analyticsContext: null };
              obj2[0] = callback;
              const obj3 = { isStart: true, analyticsLocations: null };
              obj3[1] = dependencyMap;
              obj2[1] = obj3;
              if (obj13.tryLaunchAsFrame(obj2)) {
                c4 = 3;
                let obj4 = { value: null, done: true };
                obj4[0] = Promise.resolve(true);
                return obj4;
              } else {
                obj4 = callback2(4573);
                const obj5 = { recipientIds: null };
                obj5[0] = callback2;
                c3 = 2;
                c4 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = obj4.openPrivateChannel(obj5);
                return obj6;
              }
              obj13 = callback(9523);
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              closure_6 = arg1;
              const obj8 = { targetApplicationId: null, channelId: null, analyticsLocations: null, customId: null, referrerId: null, commandOrigin: null };
              obj8[0] = callback;
              obj8[1] = closure_6;
              obj8[2] = dependencyMap;
              obj8[3] = c3;
              obj8[4] = c4;
              obj8[5] = c5;
              c3 = 3;
              c4 = 1;
              const obj9 = { value: null, done: false };
              obj9[0] = callback2(9548)(obj8);
              return obj9;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value: null, done: true };
            obj10[0] = arg1;
            return obj10;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/app_launcher/utils/AppLauncherPlayUtils.tsx");

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