// === Module 8700: getAuthenticationErrorsFromAPIError ===

// Module 8700 (getAuthenticationErrorsFromAPIError)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/auth/getAuthenticationErrorsFromAPIError.tsx");

export const getAuthenticationErrorsFromAPIError = function getAuthenticationErrorsFromAPIError(c6) {
  const obj = { error_code: c6.code };
  if (null != c6.errors) {
    const _Object = Object;
    const keys = Object.keys(c6.errors);
    for (const item10017 of keys) {
      let items = [arg0.getFirstFieldErrorMessage(item10017)];
      obj[item10017] = items;
      continue;
    }
    return obj;
  } else {
    obj.message = c6.message;
    if (null != c6.retryAfter) {
      obj.retry_after = c6.retryAfter;
    }
    return obj;
  }
};
export const getAuthenticationErrorsFromV6OrEarlierAPIError = function getAuthenticationErrorsFromV6OrEarlierAPIError(closure_2) {
  if (Object.keys(closure_2.fields).length > 0) {
    return closure_2.fields;
  } else {
    const obj = { message: null };
    obj[0] = closure_2.message;
    if (null != closure_2.retryAfter) {
      obj.retry_after = closure_2.retryAfter;
    }
    return obj;
  }
};