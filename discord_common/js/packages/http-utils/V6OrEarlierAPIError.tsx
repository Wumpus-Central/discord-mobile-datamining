// discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx");
class APIError {
  constructor(arg0, arg1) {
    str = importDefault;
    if (importDefault === undefined) {
      str = "An unexpected error occurred.";
    }
    if (typeof global === "string") {
      tmp4 = require;
      obj = { message: null, code: null };
      obj[0] = global;
      obj[1] = require;
    } else {
      tmp8 = null;
      if (null != global.body) {
        if (null != global.body.message) {
          tmp9 = globalThis;
          _Array2 = Array;
          if (!Array.isArray(global.body.message)) {
            if (null != global.body.code) {
              _Array = Array;
            }
            obj1 = { message: null, code: null, retryAfter: null, status: null };
            obj1[0] = global.body.message;
            obj1[1] = global.body.code;
            obj1[2] = global.body.retry_after;
            obj1[3] = global.status;
            obj = obj1;
          }
        }
        body = global.body;
        first = null;
        if (null != body) {
          tmp2 = globalThis;
          _Object = Object;
          first = Object.values(body)[0];
        }
        first1 = undefined;
        if (null != first) {
          first1 = first[0];
        }
        obj2 = { message: null, fields: null, status: null };
        obj2[0] = first1;
        obj2[1] = body;
        obj2[2] = global.status;
        obj = obj2;
      } else {
        obj = { status: null };
        obj[0] = global.status;
      }
    }
    ({ message, code, fields } = obj);
    tmp5 = message;
    ({ retryAfter, status } = obj);
    if (!message) {
      tmp5 = str;
    }
    obj3 = Object.create(new.target.prototype);
    obj3.message = tmp5;
    obj3.retryAfter = retryAfter;
    if (!code) {
      code = -1;
    }
    obj3.code = code;
    if (!fields) {
      fields = {};
    }
    obj3.fields = fields;
    obj3.status = status;
    error = new Error(message);
    obj3.error = error;
    return obj3;
  }
}
APIError.prototype["getFieldMessage"] = function getFieldMessage(discriminator) {
  let first = null;
  if (null != this.fields[discriminator]) {
    first = this.fields[discriminator][0];
  }
  return first;
};

export { APIError };