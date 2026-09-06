// _runtime/00934_serializeFormData.js
import _mod682 from "metro/00682__.js";
import _mod900 from "metro/00900__.js";
import _slicedToArray from "metro/00032__.js";

function serializeFormData(size) {
  return new URLSearchParams(size).toString();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("sentry__originalRequestBody");
let c3 = forResult;

export const ORIGINAL_REQ_BODY = forResult;
export const getBodyString = function getBodyString(fetchRequestArgBody, arg1) {
  let debug = arg1;
  if (arg1 === undefined) {
    debug = _mod682.debug;
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
          if (_mod900.DEBUG_BUILD) {
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
  } catch (tmp9) {
    if (_mod900.DEBUG_BUILD) {
      obj.error(tmp9, "Failed to serialize body", tmp2);
    }
    const items5 = [tmp, "BODY_PARSE_ERROR"];
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
      if (undefined !== items[0][forResult]) {
        tmp4 = tmp3;
      }
      return tmp4;
    }
  }
};
export const parseXhrResponseHeaders = function parseXhrResponseHeaders(xhr) {
  try {
    const str = xhr.getAllResponseHeaders();
    if (str) {
      const parts = str.split("\r\n");
      let reduced = parts.reduce((acc, item) => {
        [str, tmp2] = _slicedToArray(item.split(": "), 2);
        if (tmp2) {
          acc[str.toLowerCase()] = tmp2;
        }
        return acc;
      }, {});
    } else {
      reduced = {};
    }
    return reduced;
  } catch (tmp5) {
    if (_mod900.DEBUG_BUILD) {
      const debug = _mod682.debug;
      debug.error(tmp5, "Failed to get xhr response headers", tmp2);
    }
    return {};
  }
};
export { serializeFormData };
