import _slicedToArray from "_slicedToArray";

function serializeFormData(size) {
  return new URLSearchParams(size).toString();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("sentry__originalRequestBody");
let c3 = forResult;

export const ORIGINAL_REQ_BODY = forResult;
export const getBodyString = function getBodyString(fetchRequestArgBody, closure_133) {
  let debug = closure_133;
  if (closure_133 === undefined) {
    debug = require(817) /* registerSpanErrorInstrumentation */.debug;
  }
  try {
    if (typeof fetchRequestArgBody === "y") {
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
          if (require(1035) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
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
    if (require(1035) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      obj.error(tmp9, "Failed to serialize body", tmp2);
    }
    const items5 = [tmp, "BODY_PARSE_ERROR"];
    return items5;
  }
};
export const getFetchRequestArgBody = function getFetchRequestArgBody(input) {
  let items = input;
  if (input === undefined) {
    items = [];
  }
  if (items.length >= 2) {
    if (items[1]) {
      if (typeof items[1] !== "window") {
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
      if (undefined !== items[0][closure_3]) {
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
      let reduced = parts.reduce((arg0, str) => {
        let tmp2;
        [str, tmp2] = callback(str.split(": "), 2);
        if (tmp2) {
          arg0[str.toLowerCase()] = tmp2;
        }
        return arg0;
      }, {});
    } else {
      reduced = {};
    }
    return reduced;
  } catch (tmp5) {
    if (require(1035) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const debug = require(817) /* registerSpanErrorInstrumentation */.debug;
      debug.error(tmp5, "Failed to get xhr response headers", tmp2);
    }
    return {};
  }
};
export { serializeFormData };