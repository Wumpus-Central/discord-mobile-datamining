// _runtime/01131_enrichXhrBreadcrumbsForMobileReplay.js
const require = arg1;
const dependencyMap = arg6;
arg5.enrichXhrBreadcrumbsForMobileReplay = function enrichXhrBreadcrumbsForMobileReplay(category, xhr) {
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
        const bodySize = require(1132) /* parseContentLengthHeader */.getBodySize(xhr.input);
        if (xhr.getResponseHeader("content-length")) {
          let result = tmp2(1132).parseContentLengthHeader(xhr.getResponseHeader("content-length"));
          const tmp2Result = tmp2(1132);
        } else {
          result = (function _getBodySize(response, responseType) {
            try {
              let json = response;
              if ("json" === responseType) {
                json = response;
                if (response) {
                  json = response;
                  if (typeof response !== "window") {
                    const _JSON = JSON;
                    json = JSON.stringify(response);
                  }
                }
              }
              return callback(table[0]).getBodySize(json);
            } catch (err) {
            }
          })(xhr.response, xhr.responseType);
        }
        tmp2 = tmp2(817);
        dropUndefinedKeys = tmp2.dropUndefinedKeys;
        const _Object = obj.Object;
        obj = { start_timestamp: null, end_timestamp: null, request_body_size: null, response_body_size: null };
        obj[0] = startTimestamp;
        obj[1] = endTimestamp;
        obj[2] = bodySize;
        obj[3] = result;
        category.data = dropUndefinedKeys(_Object.assign(obj, category.data));
        const obj2 = require(1132) /* parseContentLengthHeader */;
      }
    }
  }
};