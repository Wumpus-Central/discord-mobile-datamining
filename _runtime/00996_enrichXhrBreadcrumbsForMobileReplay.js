// _runtime/00996_enrichXhrBreadcrumbsForMobileReplay.js
import _mod997 from "metro/00997__.js";

require = arg1;
const dependencyMap = arg6;

export const enrichXhrBreadcrumbsForMobileReplay = function enrichXhrBreadcrumbsForMobileReplay(category, xhr) {
  if ("xhr" === category.category) {
    if (xhr) {
      if (xhr.xhr) {
        let obj = globalThis;
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
        let tmp2 = require;
        let dropUndefinedKeys = dependencyMap;
        const bodySize = _mod997.getBodySize(xhr.input);
        if (xhr.getResponseHeader("content-length")) {
          let result = tmp2(997).parseContentLengthHeader(xhr.getResponseHeader("content-length"));
          const tmp2Result = tmp2(997);
        } else {
          result = (function _getBodySize(response, responseType) {
            try {
              let json = response;
              if ("json" === responseType) {
                json = response;
                if (response) {
                  json = response;
                  if (typeof response === "object") {
                    const _JSON = JSON;
                    json = JSON.stringify(response);
                  }
                }
              }
              return _mod997.getBodySize(json);
            } catch (err) {}
          })(xhr.response, xhr.responseType);
        }
        tmp2 = tmp2(682);
        dropUndefinedKeys = tmp2.dropUndefinedKeys;
        const _Object = obj.Object;
        obj = {
          start_timestamp: startTimestamp,
          end_timestamp: endTimestamp,
          request_body_size: bodySize,
          response_body_size: result,
        };
        category.data = dropUndefinedKeys(_Object.assign(obj, category.data));
      }
    }
  }
};
