// discord_app/modules/rpc/native/server/NativeRPCHelpers.tsx
import Constants from "../../../../Constants.tsx";
import Constants2 from "../../Constants.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c5, c6, constants;

const TransportTypes = Constants2.TransportTypes;
const RPCCloseCodes = Constants.RPCCloseCodes;
let closure_0 = _asyncToGenerator(async function (arg0, arg1, arg2) {
  let obj;
  let obj4;
  closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const constants2 = 0;
          constants = tmp;
          const obj10 = closure_0(closure_2[3]);
          const result = obj10.validateOriginAndUpdateSocket(closure_0, closure_1);
          if (null == closure_2) {
            const obj5 = { closeCode: constants2.INVALID_CLIENTID };
            const self = this;
            const self2 = this;
            const tmp20 = new closure_1(closure_2[4])(obj5, "No Client ID Specified");
            c6 = 3;
            const obj6 = { value: reject(tmp20), done: true };
            return obj6;
          } else {
            const transport = closure_0.transport;
            const POST_MESSAGE = constants.POST_MESSAGE;
            c5 = 1;
            c6 = 1;
            const obj7 = {
              value: obj4.processSocketThrottlers(
                closure_2,
                transport !== POST_MESSAGE,
                closure_0.abortController.signal,
              ),
              done: false,
            };
            obj4 = closure_0(closure_2[3]);
            return obj7;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        c6 = 3;
        const obj9 = { value: obj.validateSocketApplication(closure_0, closure_2, closure_1), done: true };
        obj = closure_0(closure_2[3]);
        return obj9;
      }
    } catch (tmp22) {
      c6 = 3;
      throw tmp22;
    }
  }
});
let result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCHelpers.tsx");

export const validateSocketClient = function () {
  return closure_0(...arguments);
};
export const getDeprecatedVoiceSettings = () => {
  const obj = RPCHelpers;
  return obj.getDeprecatedVoiceSettingsWithShortcut(() => []);
};
export const getVoiceSettings = (arg0) => {
  const obj = RPCHelpers;
  return obj.getVoiceSettingsWithShortcut(arg0, () => "");
};
