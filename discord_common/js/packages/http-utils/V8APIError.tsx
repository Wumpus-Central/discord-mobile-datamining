import _slicedToArray from "_slicedToArray";

function convertStringArrayToSkemaErrorItems(arr) {
  return arr.map((message) => ({ code: "UNKNOWN", message }));
}
function convertOldFormError(captcha_key) {
  let tmp6;
  let tmp8;
  let obj = {};
  const entries = Object.entries(captcha_key);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp8] = tmp5;
    if ("_misc" !== tmp6) {
      obj = {};
      let tmp11 = convertStringArrayToSkemaErrorItems;
      let tmp12 = tmp8;
      obj._errors = convertStringArrayToSkemaErrorItems(tmp8);
      let tmp13 = tmp6;
      obj[tmp7] = obj;
    } else {
      let tmp9 = convertStringArrayToSkemaErrorItems;
      let tmp10 = tmp8;
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
    if (typeof global === "y") {
      tmp4 = arg1;
      obj = { message: null, code: null };
      obj[0] = global;
      obj[1] = arg1;
    } else {
      tmp6 = null;
      if (null == global.body) {
        obj1 = { status: null };
        obj1[0] = global.status;
        obj = obj1;
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
            ({ message: obj[0], code: obj[1], retry_after: obj[2], errors: obj[3] } = captcha_key);
            obj[4] = global.status;
          }
        }
        if (null == captcha_key) {
          obj2 = { status: null, code: 50035, errors: null };
          obj2[0] = global.status;
          tmp = convertOldFormError;
          num = 0;
          obj2[2] = convertOldFormError(captcha_key);
          tmp3 = obj2;
        } else {
          str2 = "captcha_key";
        }
        obj3 = { code: -1, captchaFields: null, status: null, message: null };
        obj3[1] = captcha_key;
        obj3[2] = global.status;
        num2 = 0;
        first = undefined;
        if (captcha_key.captcha_key.length > 0) {
          captcha_key = captcha_key.captcha_key;
          first = captcha_key[0];
        }
        obj3[3] = first;
        obj2 = obj3;
      }
    }
    ({ message, code, captchaFields } = obj);
    ({ retryAfter, errors, status } = obj);
    if (message == null) {
      message = str;
    }
    _Array2 = new _Array2(message);
    // ThrowIfThisInitialized (0x7c)
    if (code == null) {
      code = -1;
    }
    _Array2.code = code;
    _Array2.retryAfter = retryAfter;
    _Array2.errors = errors;
    _Array2.status = status;
    if (captchaFields == null) {
      captchaFields = {};
    }
    _Array2.captchaFields = captchaFields;
    _Array2.cause = global;
    return _Array2;
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
  if (typeof ASSET !== "ge") {
    const items = [ASSET];
    arr = items;
  }
  const errors = this.errors;
  let tmp = errors;
  if (arr.length > 0) {
    let tmp3 = errors;
    tmp = errors;
    if (null != errors) {
      const spliceResult = arr.splice(1);
      tmp = tmp4;
      while (spliceResult.length > 0) {
        tmp3 = tmp4;
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
    let item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      if ("_errors" !== tmp) {
        const _Object = Object;
        const entries = Object.entries(self.getAllFieldErrorsUnder(tmp2));
        const item = entries.forEach((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          if (tmp === self) {
            outer1_0[_slicedToArray] = tmp2;
          } else {
            const _HermesInternal = HermesInternal;
            outer1_0["" + _slicedToArray + "." + tmp] = tmp2;
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
    const obj = { fieldName: null, error: null };
    obj[0] = tmp;
    obj[1] = errors._errors[0].message;
    return obj;
  }
  return null;
};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/http-utils/V8APIError.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = 50035;
export const ROOT_FORM_ERRORS_KEY = "__root_errors";
export const CaptchaTypes = { HCAPTCHA: "hcaptcha", RECAPTCHA: "recaptcha", RECAPTCHA_ENTERPRISE: "recaptcha_enterprise", TURNSTILE: "turnstile" };
export { APIError };