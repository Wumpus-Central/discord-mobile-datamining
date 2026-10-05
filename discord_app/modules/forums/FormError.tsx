// === Module 10065: FormError ===

// Module 10065 (FormError)
import intl2 from "intl" /* 1126 */;
import AutomodErrorUtils from "AutomodErrorUtils" /* 7598 */;
import size from "module_2" /* 2 */;

const FormSubmitErrorType = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", EmptyTags: 2, [2]: "EmptyTags", ApiValidation: 3, [3]: "ApiValidation" };
const result = size.fileFinishedImporting("modules/forums/FormError.tsx");

export { FormSubmitErrorType };
export const makeEmptyTitleError = function makeEmptyTitleError() {
  let obj;
  const intl = intl2.intl;
  let stringResult = intl.string(intl2.t["71wuR0"]);
  obj = { type: obj.EmptyContent, message: stringResult };
  if (stringResult == null) {
    stringResult = null;
  }
  return obj;
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  let obj;
  const intl = intl2.intl;
  let stringResult = intl.string(intl2.t["w/BT3G"]);
  obj = { type: obj.EmptyContent, message: stringResult };
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
export const makeApiNameValidationError = function makeApiNameValidationError() {
  let obj;
  const ApiValidation = obj.ApiValidation;
  const intl = intl2.intl;
  let stringResult = intl.string(intl2.t["71wuR0"]);
  obj = { type: ApiValidation, message: stringResult };
  if (stringResult == null) {
    stringResult = null;
  }
  return obj;
};
export const makeEmptyTagsError = function makeEmptyTagsError() {
  let obj;
  const EmptyTags = obj.EmptyTags;
  const intl = intl2.intl;
  let stringResult = intl.string(intl2.t.xPfNQi);
  obj = { type: EmptyTags, message: stringResult };
  if (stringResult == null) {
    stringResult = null;
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
    if (type.type === obj.EmptyTags) {
      if (null != content.tags) {
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