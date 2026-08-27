// === Module 9428: validateSocketClient ===

// Module 9428 (validateSocketClient)
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4347 */;
import { RPCCloseCodes } from "ME" /* 676 */;
import importDefaultResult from "asyncGeneratorStep" /* 5 */;

let closure_0 = arg1;
closure_0 = importDefaultResult((arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (function*(arg0, arg1, arg2) {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            closure_3 = tmp2;
            const result = callback(9429).validateOriginAndUpdateSocket(callback, callback2);
            if (null == dependencyMap) {
              obj1 = { closeCode: null };
              obj1[0] = closure_1_4.INVALID_CLIENTID;
              const tmp23 = new callback2(9424)(obj1, "No Client ID Specified");
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = Promise.reject(tmp23);
              return obj2;
            } else {
              let obj3 = callback(9429);
              c5 = 1;
              c6 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj3.processSocketThrottlers(tmp33, tmp31.transport !== closure_1_3.POST_MESSAGE, tmp31.abortController.signal);
              return obj3;
            }
            const obj10 = callback(9429);
            tmp33 = dependencyMap;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          obj = callback(9429);
          c6 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = obj.validateSocketApplication(callback, dependencyMap, callback2);
          return obj5;
        }
      } catch (tmp25) {
        c6 = tmp;
        throw tmp25;
      }
    }
  })();
});
let result = require("set").fileFinishedImporting("modules/rpc/native/server/NativeRPCHelpers.tsx");

export const validateSocketClient = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getDeprecatedVoiceSettings = () => callback(9429).getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (arg0) => callback(9429).getVoiceSettingsWithShortcut(arg0, () => "");