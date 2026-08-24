// === Module 10209: FormSubmitErrorType ===

// Module 10209 (FormSubmitErrorType)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAutomodErrorMessageFromErrorResponse from "getAutomodErrorMessageFromErrorResponse" /* 7646 */;

let obj = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", EmptyTags: 2, [2]: "EmptyTags", ApiValidation: 3, [3]: "ApiValidation" };
const result = set.fileFinishedImporting("modules/forums/FormError.tsx");

export const FormSubmitErrorType = obj;
export const makeEmptyTitleError = function makeEmptyTitleError() {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t["71wuR0"]);
  obj = { type: obj.EmptyContent, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj[1] = stringResult;
  return obj;
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t["w/BT3G"]);
  obj = { type: obj.EmptyContent, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj[1] = stringResult;
  return obj;
};
export const makeAutomodViolationError = function makeAutomodViolationError(errorResponseBody, id) {
  obj = getAutomodErrorMessageFromErrorResponse;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let automodErrorMessageFromErrorResponse = obj.getAutomodErrorMessageFromErrorResponse(errorResponseBody, id);
  obj = { type: obj.AutomodViolation, message: null };
  if (automodErrorMessageFromErrorResponse == null) {
    automodErrorMessageFromErrorResponse = null;
  }
  obj[1] = automodErrorMessageFromErrorResponse;
  return obj;
};
export const makeApiNameValidationError = function makeApiNameValidationError() {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t["71wuR0"]);
  obj = { type: obj.ApiValidation, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj[1] = stringResult;
  return obj;
};
export const makeEmptyTagsError = function makeEmptyTagsError() {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t.xPfNQi);
  obj = { type: obj.EmptyTags, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj[1] = stringResult;
  return obj;
};
export const renderError = function renderError(type, content) {
  let tmp = null;
  if (null != type) {
    if (type.type === obj.EmptyContent) {
      if (null != content.content) {
        tmp = null;
        const str = content.content;
      }
    }
    if (type.type === tmp3.EmptyTags) {
      if (null != content.tags) {
        tmp = null;
      }
    }
    let message = type.message;
    if (message == null) {
      message = null;
    }
    tmp = message;
    tmp3 = obj;
  }
  return tmp;
};