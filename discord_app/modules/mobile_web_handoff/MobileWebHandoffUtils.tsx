// discord_app/modules/mobile_web_handoff/MobileWebHandoffUtils.tsx
import v1 from "../../../_runtime/01256_v1.js";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _createHandoffToken(key, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (key === 1) {
      throw value;
    } else if (key === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (key === 1) {
          c3 = 3;
          throw value;
        } else if (key === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          let handoff_token;
          const HTTP = HTTPUtils.HTTP;
          const request = {
            url: constants.HANDOFF,
            body: null,
            oldFormErrors: true,
            retries: 1,
            rejectWithError: false,
          };
          const obj1 = { key };
          request.body = obj1;
          c2 = 1;
          c3 = 1;
          const obj2 = { value: HTTP.post(request), done: false };
          return obj2;
        }
      } else if (key === 1) {
        c3 = 3;
        throw value;
      } else if (key === 2) {
        c3 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        handoff_token = value.body.handoff_token;
        if (null != handoff_token) {
          c3 = 3;
          obj = { value: handoff_token, done: true };
          return obj;
        } else {
          const _Error = Error;
          const error = new Error("Missing handoff token!");
          throw error;
        }
      }
    } catch (tmp14) {
      c3 = tmp;
      throw tmp14;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/mobile_web_handoff/MobileWebHandoffUtils.tsx");

export default {
  generateNonce() {
    return v1.v4();
  },
  createHandoffToken() {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
};
