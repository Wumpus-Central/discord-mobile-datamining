// discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx");
class APIError {
  constructor(message, code) {
    let fields;
    let obj;
    let retryAfter;
    let status;
    let str = arg2;
    if (arg2 === undefined) {
      str = "An unexpected error occurred.";
    }
    const prototype = new.target.prototype;
    if (typeof message === "string") {
      obj = { message, code };
      const obj2 = { message, code };
    } else if (null != message.body) {
      if (null != message.body.message) {
        const _Array2 = Array;
        if (!Array.isArray(message.body.message)) {
          if (null != message.body.code) {
            const _Array = Array;
          }
          obj = {
            message: message.body.message,
            code: message.body.code,
            retryAfter: message.body.retry_after,
            status: message.status,
          };
          const obj3 = {
            message: message.body.message,
            code: message.body.code,
            retryAfter: message.body.retry_after,
            status: message.status,
          };
        }
      }
      const body = message.body;
      let first = null;
      if (null != body) {
        const _Object = Object;
        first = Object.values(body)[0];
      }
      let first1;
      if (null != first) {
        first1 = first[0];
      }
      obj = { message: first1, fields: body, status: message.status };
      const obj4 = { message: first1, fields: body, status: message.status };
    } else {
      obj = { status: message.status };
    }
    ({ message, code, fields } = obj);
    let tmp5 = message;
    ({ retryAfter, status } = obj);
    if (!message) {
      tmp5 = str;
    }
    const obj8 = Object.create(prototype);
    obj8.message = tmp5;
    obj8.retryAfter = retryAfter;
    if (!code) {
      code = -1;
    }
    obj8.code = code;
    if (!fields) {
      fields = {};
    }
    obj8.fields = fields;
    obj8.status = status;
    const error = new Error(message);
    obj8.error = error;
    return obj8;
  }
  getFieldMessage(discriminator) {
    let first = null;
    if (null != this.fields[discriminator]) {
      first = this.fields[discriminator][0];
    }
    return first;
  }
}
let prototype = APIError.prototype;

export { APIError };
