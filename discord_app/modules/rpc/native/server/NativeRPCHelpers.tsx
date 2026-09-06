// === Module 9558: NativeRPCHelpers ===

// Module 9558 (NativeRPCHelpers)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const TransportTypes = fn(4465).TransportTypes;
const RPCCloseCodes = fn(1074).RPCCloseCodes;
let closure_0 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            constants = 0;
            closure_131_0 = closure_0;
            closure_131_1 = closure_1;
            closure_131_2 = dependencyMap;
            const result = closure_0(9559).validateOriginAndUpdateSocket(closure_0, closure_1);
            if (null == dependencyMap) {
              const obj1 = { closeCode: constants.INVALID_CLIENTID };
              const tmp23 = new closure_1(9554)(obj1, "No Client ID Specified");
              c6 = 3;
              const obj2 = { value: Promise.reject(tmp23), done: true };
              return obj2;
            } else {
              let obj3 = closure_0(9559);
              c5 = 1;
              c6 = 1;
              obj3 = { value: null, done: false };
              obj3.value = obj3.processSocketThrottlers(tmp32, tmp30.transport !== tmp2.POST_MESSAGE, tmp30.abortController.signal);
              return obj3;
            }
            const obj10 = closure_0(9559);
            tmp32 = dependencyMap;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          obj = closure_0(9559);
          c6 = 3;
          const obj5 = { value: obj.validateSocketApplication(closure_131_0, closure_131_2, closure_131_1), done: true };
          return obj5;
        }
      } catch (tmp25) {
        c6 = tmp;
        throw tmp25;
      }
    }
  })();
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCHelpers.tsx");

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
export const getDeprecatedVoiceSettings = () => closure_0(9559).getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (arg0) => closure_0(9559).getVoiceSettingsWithShortcut(arg0, () => "");