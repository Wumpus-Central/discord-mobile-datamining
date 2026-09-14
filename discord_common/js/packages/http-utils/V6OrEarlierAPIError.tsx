// discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx");
class APIError {
  constructor(arg0, arg1) {
    str = importDefault;
    if (importDefault === undefined) {
      str = "An unexpected error occurred.";
    }
    if (typeof global === "string") {
      tmp4 = require;
      obj1 = { message: null, code: null };
      obj1.message = global;
      obj1.code = require;
      obj = obj1;
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
            obj5 = { message: null, code: null, retryAfter: null, status: null };
            obj5.message = global.body.message;
            obj5.code = global.body.code;
            obj5.retryAfter = global.body.retry_after;
            obj5.status = global.status;
            obj = obj5;
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
        obj6 = { message: null, fields: null, status: null };
        obj6.message = first1;
        obj6.fields = body;
        obj6.status = global.status;
        obj = obj6;
      } else {
        obj = { status: null };
        obj.status = global.status;
      }
    }
    ({ message, code, fields } = obj);
    tmp5 = message;
    ({ retryAfter, status } = obj);
    if (!message) {
      tmp5 = str;
    }
    obj7 = Object.create(new.target.prototype);
    obj7.message = tmp5;
    obj7.retryAfter = retryAfter;
    if (!code) {
      code = -1;
    }
    obj7.code = code;
    if (!fields) {
      fields = {};
    }
    obj7.fields = fields;
    obj7.status = status;
    error = new Error(message);
    obj7.error = error;
    return obj7;
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
