// === Module 10697: validateSocketClient ===

// Module 10697 (validateSocketClient)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCCloseCodes } from "ME";
import importDefaultResult from "set";

let closure_0 = arg1;
closure_0 = require("set")((arg0, arg1, arg2) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let c5 = 0;
  let c6 = 0;
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
            let c4 = 0;
            let closure_3 = tmp2;
            const result = callback(10698).validateOriginAndUpdateSocket(callback, callback2);
            if (null == dependencyMap) {
              const obj1 = { closeCode: null };
              obj1[0] = outer1_4.INVALID_CLIENTID;
              const tmp23 = new callback2(10693)(obj1, "No Client ID Specified");
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = Promise.reject(tmp23);
              return obj2;
            } else {
              let obj3 = callback(10698);
              c5 = 1;
              c6 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj3.processSocketThrottlers(tmp33, tmp31.transport !== outer1_3.POST_MESSAGE, tmp31.abortController.signal);
              return obj3;
            }
            const obj10 = callback(10698);
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
          obj = callback(10698);
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
let result = require("ME").fileFinishedImporting("modules/rpc/native/server/NativeRPCHelpers.tsx");

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
export const getDeprecatedVoiceSettings = () => callback(10698).getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (arg0) => callback(10698).getVoiceSettingsWithShortcut(arg0, () => "");