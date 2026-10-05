// discord_common/js/packages/http-utils/V8APIError.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

function convertStringArrayToSkemaErrorItems(arr) {
  return arr.map((message) => ({ code: "UNKNOWN", message }));
}
function convertOldFormError(body) {
  let tmp6;
  let tmp8;
  const obj = {};
  const entries = Object.entries(body);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp8] = tmp5;
    if ("_misc" !== tmp6) {
      let obj2 = { _errors: convertStringArrayToSkemaErrorItems(tmp8) };
      obj[tmp7] = obj2;
    } else {
      obj._errors = convertStringArrayToSkemaErrorItems(tmp8);
    }
    continue;
  }
  return obj;
}
const __root_errors = "__root_errors";
class APIError extends Error {
  constructor(message, code) {
    let _Array2;
    let captchaFields;
    let errors;
    let first;
    let obj;
    let retryAfter;
    let status;
    let str = arg2;
    if (arg2 === undefined) {
      str = "An unexpected error occurred.";
    }
    if (typeof message === "string") {
      obj = { message, code };
      const obj2 = { message, code };
    } else if (null == message.body) {
      obj = { status: message.status };
      const obj3 = { status: message.status };
    } else {
      const body = message.body;
      if (null != message.body.message) {
        _Array2 = Array;
        if (!Array.isArray(message.body.message)) {
          if (null != message.body.code) {
            const _Array = Array;
          }
          obj = { message: null, code: null, retryAfter: null, errors: null, status: message.status };
          ({ message: obj.message, code: obj.code, retry_after: obj.retryAfter, errors: obj.errors } = body);
        }
      }
      if (null != body) {
        let obj5;
        if ("captcha_key" in body) {
          const obj4 = { code: -1, captchaFields: body, status: message.status, message: first };
          first = undefined;
          if (body.captcha_key.length > 0) {
            first = body.captcha_key[0];
          }
          obj5 = obj4;
        }
        obj = obj5;
      }
      obj5 = { status: message.status, code: 50035, errors: convertOldFormError(body) };
    }
    ({ message, code, captchaFields } = obj);
    ({ retryAfter, errors, status } = obj);
    if (message == null) {
      message = str;
    }
    const _Array21 = new _Array2(message);
    if (code == null) {
      code = -1;
    }
    _Array21.code = code;
    _Array21.retryAfter = retryAfter;
    _Array21.errors = errors;
    _Array21.status = status;
    if (captchaFields == null) {
      captchaFields = {};
    }
    _Array21.captchaFields = captchaFields;
    _Array21.cause = message;
    return _Array21;
  }
  hasFieldErrors() {
    let tmp2 = null != this.errors;
    if (tmp2) {
      const _Object = Object;
      tmp2 = Object.keys(tmp.errors).length > 0;
    }
    return tmp2;
  }
  getFieldErrors(ASSET) {
    let arr = ASSET;
    if (typeof ASSET === "string") {
      const items = [ASSET];
      arr = items;
    }
    const errors = this.errors;
    let tmp = errors;
    if (arr.length > 0) {
      tmp = errors;
      if (null != errors) {
        const spliceResult = arr.splice(1);
        tmp = tmp4;
        while (spliceResult.length > 0) {
          arr = spliceResult;
          tmp = tmp4;
          if (null == tmp4) {
            break;
          }
        }
      }
    }
    let _errors;
    if (tmp != null) {
      _errors = tmp._errors;
    }
    return _errors;
  }
  getAllFieldErrors() {
    return this.getAllFieldErrorsUnder(this.errors);
  }
  getAllFieldErrorsUnder(errors) {
    const self = this;
    const obj = {};
    let _errors;
    if (errors != null) {
      _errors = errors._errors;
    }
    const tmp2 = null != _errors && _errors.length > 0;
    if (tmp2) {
      obj[self] = _errors;
    }
    if (undefined !== errors) {
      let _Object = Object;
      let entries = Object.entries(errors);
      let item = entries.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        if ("_errors" !== tmp) {
          const _Object = Object;
          const entries = Object.entries(self.getAllFieldErrorsUnder(tmp2));
          item = entries.forEach((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            if (tmp === __root_errors) {
              obj[closure_1_0] = tmp2;
            } else {
              const _HermesInternal = HermesInternal;
              obj["" + closure_1_0 + "." + tmp] = tmp2;
            }
          });
        }
      });
    }
    return obj;
  }
  getFirstFieldErrorMessage(name) {
    const fieldErrors = this.getFieldErrors(name);
    let message = null;
    if (null != fieldErrors) {
      message = null;
      if (fieldErrors.length >= 1) {
        message = fieldErrors[0].message;
      }
    }
    return message;
  }
  getAnyErrorMessage() {
    const anyErrorMessageAndField = this.getAnyErrorMessageAndField();
    let error;
    if (anyErrorMessageAndField != null) {
      error = anyErrorMessageAndField.error;
    }
    if (error == null) {
      error = this.message;
    }
    return error;
  }
  getAnyErrorMessageAndField() {
    let errors = this.errors;
    let tmp = null;
    if (null != errors) {
      while (null == errors._errors) {
        let _Object = Object;
        let first = Object.keys(errors)[0];
        errors = errors[first];
        tmp = first;
      }
      return { fieldName: tmp, error: errors._errors[0].message };
    }
    return null;
  }
}
const prototype = APIError.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/V8APIError.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = 50035;
export const ROOT_FORM_ERRORS_KEY = "__root_errors";
export const CaptchaTypes = {
  HCAPTCHA: "hcaptcha",
  RECAPTCHA: "recaptcha",
  RECAPTCHA_ENTERPRISE: "recaptcha_enterprise",
  TURNSTILE: "turnstile",
};
export { APIError };
