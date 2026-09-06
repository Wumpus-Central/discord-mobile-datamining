// === Module 15685: CaptchaTestActionCreators ===

// Module 15685 (CaptchaTestActionCreators)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _testCaptcha(decider, options) {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CAPTCHA_TEST, body: null, rejectWithError: false };
            const obj1 = { decider, options };
            request.body = obj1;
            c3 = 1;
            c2 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
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
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/tooling/CaptchaTestActionCreators.tsx");

export const CaptchaDeciderType = { HCAPTCHA_RQDATA: "hCaptchaRqdata", SMITE_RQDATA: "SmiteRqdata", RECAPTCHA: "Recaptcha", RECAPTCHA_ENTERPRISE: "RecaptchaEnterprise" };
export const HCaptchaDifficulty = { EASY: 1, [1]: "EASY", MODERATE: 2, [2]: "MODERATE", DIFFICULT: 3, [3]: "DIFFICULT", VERY_DIFFICULT: 4, [4]: "VERY_DIFFICULT" };
export const testCaptcha = function testCaptcha() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};