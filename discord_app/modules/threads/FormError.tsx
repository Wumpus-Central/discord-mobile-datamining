// discord_app/modules/threads/FormError.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";
import getAutomodErrorMessageFromErrorResponse from "../guild_automod/AutomodErrorUtils.tsx";

let obj = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", ApiValidation: 2, [2]: "ApiValidation" };
const result = set.fileFinishedImporting("modules/threads/FormError.tsx");

export const FormSubmitErrorType = obj;
export const makeEmptyTitleError = function makeEmptyTitleError() {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t.uXA573);
  obj = { type: obj.EmptyContent, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj[1] = stringResult;
  return obj;
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t.kesTVT);
  obj = { type: obj.EmptyContent, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj[1] = stringResult;
  return obj;
};
export const makeApiNameRequiredError = function makeApiNameRequiredError() {
  const intl = getSystemLocale.intl;
  let stringResult = intl.string(getSystemLocale.t.uXA573);
  obj = { type: obj.ApiValidation, message: null };
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
export const renderError = function renderError(type, content) {
  let tmp = null;
  if (null != type) {
    if (type.type === obj.EmptyContent) {
      if (null != content.content) {
        tmp = null;
        const str = content.content;
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