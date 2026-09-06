// discord_app/modules/forums/FormError.tsx
import util from "../../intl/index.native.tsx";
import AutomodErrorUtils from "../guild_automod/AutomodErrorUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const FormSubmitErrorType = {
  EmptyContent: 0,
  [0]: "EmptyContent",
  AutomodViolation: 1,
  [1]: "AutomodViolation",
  EmptyTags: 2,
  [2]: "EmptyTags",
  ApiValidation: 3,
  [3]: "ApiValidation",
};
const result = size.fileFinishedImporting("modules/forums/FormError.tsx");

export { FormSubmitErrorType };
export const makeEmptyTitleError = function makeEmptyTitleError() {
  const intl = util.intl;
  let stringResult = intl.string(util.t["71wuR0"]);
  obj = { type: obj.EmptyContent, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj.message = stringResult;
  return obj;
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  const intl = util.intl;
  let stringResult = intl.string(util.t["w/BT3G"]);
  obj = { type: obj.EmptyContent, message: null };
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
export const makeApiNameValidationError = function makeApiNameValidationError() {
  const intl = util.intl;
  let stringResult = intl.string(util.t["71wuR0"]);
  obj = { type: obj.ApiValidation, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj.message = stringResult;
  return obj;
};
export const makeEmptyTagsError = function makeEmptyTagsError() {
  const intl = util.intl;
  let stringResult = intl.string(util.t.xPfNQi);
  obj = { type: obj.EmptyTags, message: null };
  if (stringResult == null) {
    stringResult = null;
  }
  obj.message = stringResult;
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
