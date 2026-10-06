// === Module 6833: MobileWebHandoffUtils ===

// Module 6833 (MobileWebHandoffUtils)
import Constants from "Constants" /* 1085 */;
import v1 from "v1" /* 1266 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1;

let obj = function _createHandoffToken() {
  obj = _asyncToGenerator(async (key) => {
    let c2 = 0;
    let c3 = 0;
    return (async function(arg0) {
      let obj4;
      if (c3 === 2) {
        c3 = 3;
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
          let handoff_token;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp3;
              handoff_token = undefined;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.HANDOFF, body: obj4, oldFormErrors: true, retries: 1, rejectWithError: false };
              c2 = 1;
              c3 = 1;
              obj4 = { key };
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            handoff_token = value.body.handoff_token;
            if (null != handoff_token) {
              c3 = 3;
              return { value: handoff_token, done: true };
            } else {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Missing handoff token!");
              throw error;
            }
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
obj = {
  generateNonce() {
    obj = v1;
    return obj.v4();
  },
  createHandoffToken() {
    return obj(...arguments);
  }
};
const result = size.fileFinishedImporting("modules/mobile_web_handoff/MobileWebHandoffUtils.tsx");

export default obj;