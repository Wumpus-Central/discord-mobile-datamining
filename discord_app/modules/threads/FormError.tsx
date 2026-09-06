// === Module 16621: threads/FormError ===

// Module 16621 (threads/FormError)
import util from "util" /* 1114 */;
import AutomodErrorUtils from "AutomodErrorUtils" /* 7939 */;
import size from "module_2" /* 2 */;

const FormSubmitErrorType = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", ApiValidation: 2, [2]: "ApiValidation" };
const result = size.fileFinishedImporting("modules/threads/FormError.tsx");

export { FormSubmitErrorType };
export const makeEmptyTitleError = function makeEmptyTitleError() {
  const intl = util.intl;
  let stringResult = intl.string(util.t.uXA573);
  obj = { type: obj.EmptyContent, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj.message = stringResult;
  return obj;
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  const intl = util.intl;
  let stringResult = intl.string(util.t.kesTVT);
  obj = { type: obj.EmptyContent, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj.message = stringResult;
  return obj;
};
export const makeApiNameRequiredError = function makeApiNameRequiredError() {
  const intl = util.intl;
  let stringResult = intl.string(util.t.uXA573);
  obj = { type: obj.ApiValidation, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj.message = stringResult;
  return obj;
};
export const makeAutomodViolationError = function makeAutomodViolationError(errorResponseBody, id) {
  let obj = AutomodErrorUtils;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let automodErrorMessageFromErrorResponse = obj.getAutomodErrorMessageFromErrorResponse(errorResponseBody, id);
  obj = { type: obj.AutomodViolation, message: null };
  if (automodErrorMessageFromErrorResponse == null) {
    automodErrorMessageFromErrorResponse = null;
  }
  obj.message = automodErrorMessageFromErrorResponse;
  return obj;
};
export const renderError = function renderError(type, content) {
  let tmp = null;
  if (null != type) {
    if (type.type === obj.EmptyContent) {
      if (null != content.content) {
        tmp = null;
      }
    }
    let message = type.message;
    if (message == null) {
      message = null;
    }
    tmp = message;
  }
  return tmp;
};