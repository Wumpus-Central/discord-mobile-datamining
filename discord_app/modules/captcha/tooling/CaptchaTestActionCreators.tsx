// === Module 15563: CaptchaTestActionCreators ===

// Module 15563 (CaptchaTestActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _testCaptcha() {
  obj = _asyncToGenerator(async (decider, options) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.CAPTCHA_TEST, body: obj4, rejectWithError: false };
              c3 = 1;
              c2 = 1;
              obj4 = { decider, options };
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c2 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/captcha/tooling/CaptchaTestActionCreators.tsx");

export const CaptchaDeciderType = { HCAPTCHA_RQDATA: "hCaptchaRqdata", SMITE_RQDATA: "SmiteRqdata", RECAPTCHA: "Recaptcha", RECAPTCHA_ENTERPRISE: "RecaptchaEnterprise" };
export const HCaptchaDifficulty = { EASY: 1, [1]: "EASY", MODERATE: 2, [2]: "MODERATE", DIFFICULT: 3, [3]: "DIFFICULT", VERY_DIFFICULT: 4, [4]: "VERY_DIFFICULT" };
export const testCaptcha = function testCaptcha() {
  return obj(...arguments);
};