// discord_app/modules/captcha/tooling/CaptchaTestActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _testCaptcha() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[2]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = constants.CAPTCHA_TEST;
              const obj2 = { decider: null, options: null };
              obj2[0] = callback;
              obj2[1] = table;
              obj1[1] = obj2;
              constants = 1;
              c2 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _testCaptcha = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/captcha/tooling/CaptchaTestActionCreators.tsx");

export const CaptchaDeciderType = { HCAPTCHA_RQDATA: "hCaptchaRqdata", SMITE_RQDATA: "SmiteRqdata", RECAPTCHA: "Recaptcha", RECAPTCHA_ENTERPRISE: "RecaptchaEnterprise" };
export const HCaptchaDifficulty = { EASY: 1, [1]: "EASY", MODERATE: 2, [2]: "MODERATE", DIFFICULT: 3, [3]: "DIFFICULT", VERY_DIFFICULT: 4, [4]: "VERY_DIFFICULT" };
export const testCaptcha = function testCaptcha(arg0, arg1) {
  const self = this;
  const apply = _testCaptcha.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};