// _runtime/01007_enrichXhrBreadcrumbsForMobileReplay.js
import _mod693 from "metro/00693__.js";
import _mod1008 from "metro/01008__.js";

export const enrichXhrBreadcrumbsForMobileReplay = function enrichXhrBreadcrumbsForMobileReplay(category, xhr) {
  function _getBodySize(response, responseType) {
    try {
      let json = response;
      if ("json" === responseType) {
        json = response;
        if (json) {
          json = response;
          if (typeof response === "object") {
            const _JSON = JSON;
            json = JSON.stringify(response);
          }
        }
      }
      const obj = _mod1008;
      return obj.getBodySize(json);
    } catch (err) {}
  }
  if ("xhr" === category.category) {
    const tmp7 = xhr;
    if (tmp7) {
      if (xhr.xhr) {
        let result;
        const _Date = Date;
        const timestamp = Date.now();
        let startTimestamp = xhr.startTimestamp;
        if (undefined === startTimestamp) {
          startTimestamp = timestamp;
        }
        let endTimestamp = xhr.endTimestamp;
        if (undefined === endTimestamp) {
          endTimestamp = timestamp;
        }
        xhr = xhr.xhr;
        const input = xhr.input;
        let obj = _mod1008;
        const bodySize = obj.getBodySize(input);
        if (xhr.getResponseHeader("content-length")) {
          const tmp3Result = _mod1008;
          result = tmp3Result.parseContentLengthHeader(xhr.getResponseHeader("content-length"));
        } else {
          result = _getBodySize(xhr.response, xhr.responseType);
        }
        const _Object = Object;
        const obj2 = {
          start_timestamp: startTimestamp,
          end_timestamp: endTimestamp,
          request_body_size: bodySize,
          response_body_size: result,
        };
        const tmp3Result2 = _mod693;
        category.data = tmp3Result2.dropUndefinedKeys(Object.assign(obj2, category.data));
      }
    }
  }
};
