// _runtime/metro/12814__.js

export const SPAN_STATUS_ERROR = 2;
export const SPAN_STATUS_OK = 1;
export const SPAN_STATUS_UNSET = 0;
export const getSpanStatusFromHttpCode = function getSpanStatusFromHttpCode(arg0) {
  if (arg0 < 400) {
    if (arg0 >= 100) {
      return { code: 1 };
    }
  }
  if (arg0 >= 400) {
    if (arg0 < 500) {
      if (401 === arg0) {
        return { code: 2, message: "unauthenticated" };
      } else if (403 === arg0) {
        return { code: 2, message: "permission_denied" };
      } else if (404 === arg0) {
        return { code: 2, message: "not_found" };
      } else if (409 === arg0) {
        return { code: 2, message: "already_exists" };
      } else if (413 === arg0) {
        return { code: 2, message: "failed_precondition" };
      } else if (429 === arg0) {
        return { code: 2, message: "resource_exhausted" };
      } else {
        return 499 === arg0 ? { code: 2, message: "cancelled" } : { code: 2, message: "invalid_argument" };
      }
    }
  }
  if (arg0 >= 500) {
    if (arg0 < 600) {
      if (501 === arg0) {
        return { code: 2, message: "unimplemented" };
      } else if (503 === arg0) {
        return { code: 2, message: "unavailable" };
      } else {
        return 504 === arg0 ? { code: 2, message: "deadline_exceeded" } : { code: 2, message: "internal_error" };
      }
    }
  }
  return { code: 2, message: "unknown_error" };
};
export const setHttpStatus = function setHttpStatus(setAttribute, arg1) {
  const attr = setAttribute.setAttribute("http.response.status_code", arg1);
  if (arg1 < 400) {
    if (arg1 >= 100) {
      let obj = { code: 1 };
    }
    if ("unknown_error" !== obj.message) {
      setAttribute.setStatus(obj);
    }
  }
  if (arg1 >= 400) {
    if (arg1 < 500) {
      if (401 === arg1) {
        obj = { code: 2, message: "unauthenticated" };
      } else if (403 === arg1) {
        obj = { code: 2, message: "permission_denied" };
      } else if (404 === arg1) {
        obj = { code: 2, message: "not_found" };
      } else if (409 === arg1) {
        obj = { code: 2, message: "already_exists" };
      } else if (413 === arg1) {
        obj = { code: 2, message: "failed_precondition" };
      } else if (429 === arg1) {
        obj = { code: 2, message: "resource_exhausted" };
      } else {
        obj = 499 === arg1 ? { code: 2, message: "cancelled" } : { code: 2, message: "invalid_argument" };
      }
    }
  }
  if (arg1 >= 500) {
    if (arg1 < 600) {
      if (501 === arg1) {
        obj = { code: 2, message: "unimplemented" };
      } else if (503 === arg1) {
        obj = { code: 2, message: "unavailable" };
      } else {
        obj = 504 === arg1 ? { code: 2, message: "deadline_exceeded" } : { code: 2, message: "internal_error" };
      }
    }
  }
  obj = { code: 2, message: "unknown_error" };
};
