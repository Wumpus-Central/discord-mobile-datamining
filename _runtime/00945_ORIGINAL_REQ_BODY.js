// === Module 945: ORIGINAL_REQ_BODY ===

// Module 945 (ORIGINAL_REQ_BODY)
import _mod693 from "module_693" /* 693 */;
import _mod911 from "module_911" /* 911 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function serializeFormData(size) {
  const str = new URLSearchParams(size);
  return str.toString();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("sentry__originalRequestBody");
let c3 = forResult;

export const ORIGINAL_REQ_BODY = forResult;
export const getBodyString = function getBodyString(fetchRequestArgBody, arg1) {
  let debug = arg1;
  if (arg1 === undefined) {
    debug = _mod693.debug;
  }
  try {
    if (typeof fetchRequestArgBody === "string") {
      const items = [fetchRequestArgBody];
      return items;
    } else {
      const _URLSearchParams = URLSearchParams;
      if (fetchRequestArgBody instanceof URLSearchParams) {
        const items1 = [fetchRequestArgBody.toString()];
        return items1;
      } else {
        const _FormData = FormData;
        if (fetchRequestArgBody instanceof FormData) {
          const items2 = [serializeFormData(fetchRequestArgBody)];
          return items2;
        } else if (fetchRequestArgBody) {
          if (_mod911.DEBUG_BUILD) {
            debug.log("Skipping network body because of body type", fetchRequestArgBody);
          }
          const items3 = [undefined, "UNPARSEABLE_BODY_TYPE"];
          return items3;
        } else {
          const items4 = [undefined];
          return items4;
        }
      }
    }
  } catch (tmp7) {
    if (_mod911.DEBUG_BUILD) {
      debug.error(tmp7, "Failed to serialize body", fetchRequestArgBody);
    }
    const items5 = [undefined, "BODY_PARSE_ERROR"];
    return items5;
  }
};
export const getFetchRequestArgBody = function getFetchRequestArgBody() {
  let items = input;
  if (input === undefined) {
    items = [];
  }
  if (items.length >= 2) {
    if (items[1]) {
      if (typeof items[1] === "object") {
        if ("body" in items[1]) {
          return items[1].body;
        }
      }
    }
  }
  if (items.length >= 1) {
    const _Request = Request;
    if (items[0] instanceof Request) {
      let tmp4;
      if (undefined !== items[0][c3]) {
        tmp4 = tmp3;
      }
      return tmp4;
    }
  }
};
export const parseXhrResponseHeaders = function parseXhrResponseHeaders(xhr) {
  try {
    let reduced;
    const str = xhr.getAllResponseHeaders();
    const tmp = str;
    if (tmp) {
      const tmp2 = str;
      const parts = str.split("\r\n");
      reduced = parts.reduce((acc, item) => {
        let str;
        let tmp2;
        [str, tmp2] = item.split(": ");
        _slicedToArray(item.split(": "), 2);
        if (tmp2) {
          acc[str.toLowerCase()] = tmp2;
        }
        return acc;
      }, {});
    } else {
      reduced = {};
    }
    return reduced;
  } catch (tmp3) {
    if (_mod911.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.error(tmp3, "Failed to get xhr response headers", xhr);
    }
    return {};
  }
};
export { serializeFormData };