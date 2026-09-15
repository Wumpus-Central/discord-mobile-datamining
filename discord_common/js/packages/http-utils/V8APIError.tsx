// === Module 1325: V8APIError ===

// Module 1325 (V8APIError)
import _slicedToArray from "module_32" /* 32 */;

function convertStringArrayToSkemaErrorItems(arr) {
  return arr.map((message) => ({ code: "UNKNOWN", message }));
}
function convertOldFormError(captcha_key) {
  const obj = {};
  const entries = Object.entries(captcha_key);
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
  constructor(arg0, arg1) {
    str = importDefault;
    if (importDefault === undefined) {
      str = "An unexpected error occurred.";
    }
    if (typeof global === "string") {
      tmp4 = fn;
      obj1 = { message: null, code: null };
      obj1.message = global;
      obj1.code = fn;
      obj = obj1;
    } else {
      tmp6 = null;
      if (null == global.body) {
        obj6 = { status: null };
        obj6.status = global.status;
        obj = obj6;
      } else {
        captcha_key = global.body;
        if (null != global.body.message) {
          tmp7 = globalThis;
          _Array2 = Array;
          if (!Array.isArray(global.body.message)) {
            if (null != global.body.code) {
              _Array = Array;
            }
            obj = { message: null, code: null, retryAfter: null, errors: null, status: null };
            ({ message: obj.message, code: obj.code, retry_after: obj.retryAfter, errors: obj.errors } = captcha_key);
            obj.status = global.status;
          }
        }
        if (null == captcha_key) {
          obj7 = { status: null, code: 50035, errors: null };
          obj7.status = global.status;
          tmp = convertOldFormError;
          num = 0;
          obj7.errors = convertOldFormError(captcha_key);
          tmp3 = obj7;
        } else {
          str2 = "captcha_key";
        }
        obj8 = { code: -1, captchaFields: null, status: null, message: null };
        obj8.captchaFields = captcha_key;
        obj8.status = global.status;
        num2 = 0;
        first = undefined;
        if (captcha_key.captcha_key.length > 0) {
          captcha_key = captcha_key.captcha_key;
          first = captcha_key[0];
        }
        obj8.message = first;
        obj7 = obj8;
      }
    }
    ({ message, code, captchaFields } = obj);
    ({ retryAfter, errors, status } = obj);
    if (message == null) {
      message = str;
    }
    _Array21 = new _Array2(message);
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
    _Array21.cause = global;
    return _Array21;
  }
}
const prototype = APIError.prototype;
prototype["hasFieldErrors"] = function hasFieldErrors() {
  let tmp2 = null != this.errors;
  if (tmp2) {
    const _Object = Object;
    tmp2 = Object.keys(tmp.errors).length > 0;
  }
  return tmp2;
};
prototype["getFieldErrors"] = function getFieldErrors(ASSET) {
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
};
prototype["getAllFieldErrors"] = function getAllFieldErrors() {
  return this.getAllFieldErrorsUnder(this.errors);
};
prototype["getAllFieldErrorsUnder"] = function getAllFieldErrorsUnder(errors) {
  const self = this;
  const obj = {};
  let _errors;
  if (errors != null) {
    _errors = errors._errors;
  }
  let tmp2 = null != _errors;
  if (tmp2) {
    tmp2 = _errors.length > 0;
  }
  if (tmp2) {
    obj[self] = _errors;
  }
  if (undefined !== errors) {
    let _Object = Object;
    let entries = Object.entries(errors);
    let item = entries.forEach((item) => {
      [tmp, tmp2] = item;
      if ("_errors" !== tmp) {
        const _Object = Object;
        const entries = Object.entries(self.getAllFieldErrorsUnder(tmp2));
        item = entries.forEach((item) => {
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
};
prototype["getFirstFieldErrorMessage"] = function getFirstFieldErrorMessage(name) {
  const fieldErrors = this.getFieldErrors(name);
  let message = null;
  if (null != fieldErrors) {
    message = null;
    if (fieldErrors.length >= 1) {
      message = fieldErrors[0].message;
    }
  }
  return message;
};
prototype["getAnyErrorMessage"] = function getAnyErrorMessage() {
  const anyErrorMessageAndField = this.getAnyErrorMessageAndField();
  let error;
  if (anyErrorMessageAndField != null) {
    error = anyErrorMessageAndField.error;
  }
  if (error == null) {
    error = this.message;
  }
  return error;
};
prototype["getAnyErrorMessageAndField"] = function getAnyErrorMessageAndField() {
  let errors = this.errors;
  let tmp = null;
  if (null != errors) {
    while (null == errors._errors) {
      let _Object = Object;
      let first = Object.keys(errors)[0];
      errors = errors[first];
      tmp = first;
    }
    const obj = { fieldName: tmp, error: errors._errors[0].message };
    return obj;
  }
  return null;
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/V8APIError.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = 50035;
export const ROOT_FORM_ERRORS_KEY = "__root_errors";
export const CaptchaTypes = { HCAPTCHA: "hcaptcha", RECAPTCHA: "recaptcha", RECAPTCHA_ENTERPRISE: "recaptcha_enterprise", TURNSTILE: "turnstile" };
export { APIError };