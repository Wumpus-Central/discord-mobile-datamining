// === Module 16804: threads/FormError ===

// Module 16804 (threads/FormError)
import intl2 from "intl" /* 1126 */;
import AutomodErrorUtils from "AutomodErrorUtils" /* 7609 */;
import size from "module_2" /* 2 */;

const FormSubmitErrorType = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", ApiValidation: 2, [2]: "ApiValidation" };
const result = size.fileFinishedImporting("modules/threads/FormError.tsx");

export { FormSubmitErrorType };
export const makeEmptyTitleError = function makeEmptyTitleError() {
  let obj;
  const intl = intl2.intl;
  let stringResult = intl.string(intl2.t.uXA573);
  obj = { type: obj.EmptyContent, message: stringResult };
  if (stringResult == null) {
    stringResult = null;
  }
  return obj;
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  let obj;
  const intl = intl2.intl;
  let stringResult = intl.string(intl2.t.kesTVT);
  obj = { type: obj.EmptyContent, message: stringResult };
  if (stringResult == null) {
    stringResult = null;
  }
  return obj;
};
export const makeApiNameRequiredError = function makeApiNameRequiredError() {
  let obj;
  const ApiValidation = obj.ApiValidation;
  const intl = intl2.intl;
  let stringResult = intl.string(intl2.t.uXA573);
  obj = { type: ApiValidation, message: stringResult };
  if (stringResult == null) {
    stringResult = null;
  }
  return obj;
};
export const makeAutomodViolationError = function makeAutomodViolationError(errorResponseBody, id) {
  let obj;
  const AutomodViolation = obj.AutomodViolation;
  id = undefined;
  const getAutomodErrorMessageFromErrorResponse = AutomodErrorUtils.getAutomodErrorMessageFromErrorResponse;
  AutomodErrorUtils;
  if (id != null) {
    id = id.id;
  }
  let automodErrorMessageFromErrorResponse = getAutomodErrorMessageFromErrorResponse(errorResponseBody, id);
  obj = { type: AutomodViolation, message: automodErrorMessageFromErrorResponse };
  if (automodErrorMessageFromErrorResponse == null) {
    automodErrorMessageFromErrorResponse = null;
  }
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