import { v1 } from "../../../_runtime/00514_v1.js";
// discord_app/modules/mobile_web_handoff/MobileWebHandoffUtils.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _createHandoffToken() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_1 = tmp4;
              let handoff_token;
              const HTTP = callback(outer1_1[3]).HTTP;
              const obj1 = { url: null, body: null, oldFormErrors: true, retries: 1, rejectWithError: false };
              obj1[0] = constants.HANDOFF;
              const obj2 = { key: null };
              obj2[0] = handoff_token;
              obj1[1] = obj2;
              c2 = 1;
              constants = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw body;
          } else if (arg0 === 2) {
            constants = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            handoff_token = body.body.handoff_token;
            if (null != handoff_token) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = handoff_token;
              return obj;
            } else {
              const _Error = Error;
              const error = new Error("Missing handoff token!");
              throw error;
            }
          }
        } catch (tmp14) {
          constants = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _createHandoffToken = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("v1").fileFinishedImporting("modules/mobile_web_handoff/MobileWebHandoffUtils.tsx");

export default {
  generateNonce() {
    return v1 /* v1 */.v4();
  },
  createHandoffToken(closure_0) {
    const self = this;
    const apply = _createHandoffToken.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};