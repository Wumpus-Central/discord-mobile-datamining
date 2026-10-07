// discord_app/modules/auth/getAuthenticationErrorsFromAPIError.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/auth/getAuthenticationErrorsFromAPIError.tsx");

export const getAuthenticationErrorsFromAPIError = function getAuthenticationErrorsFromAPIError(error) {
  const obj = { error_code: error.code };
  if (null != error.errors) {
    const _Object = Object;
    const keys = Object.keys(error.errors);
    for (const item10017 of keys) {
      let items = [arg0.getFirstFieldErrorMessage(item10017)];
      obj[item10017] = items;
      continue;
    }
    return obj;
  } else {
    obj.message = error.message;
    if (null != error.retryAfter) {
      obj.retry_after = error.retryAfter;
    }
    return obj;
  }
};
export const getAuthenticationErrorsFromV6OrEarlierAPIError = function getAuthenticationErrorsFromV6OrEarlierAPIError(
  error,
) {
  if (Object.keys(error.fields).length > 0) {
    return error.fields;
  } else {
    const obj = { message: error.message };
    if (null != error.retryAfter) {
      obj.retry_after = error.retryAfter;
    }
    return obj;
  }
};
