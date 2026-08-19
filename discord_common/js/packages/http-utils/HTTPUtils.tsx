// === Module 530: sendRequest ===

// Module 530 (sendRequest)
import log from "log" /* 4 */;
import _createForOfIteratorHelperDefault from "_createForOfIteratorHelper" /* 531 */;
import failsDefault from "fails" /* 584 */;
import convertStringArrayToSkemaErrorItems from "convertStringArrayToSkemaErrorItems" /* 585 */;
import convertSkemaError from "convertSkemaError" /* 586 */;
import stringifyErrors from "stringifyErrors" /* 587 */;
import getFieldMessage from "getFieldMessage" /* 588 */;
import set from "set" /* 2 */;

function sendRequest(arg0, signal) {
  closure_0 = arg0;
  importDefault = signal;
  dependencyMap = arg2;
  closure_3 = arg3;
  closure_4 = arg4;
  signal = signal.signal;
  let aborted;
  if (signal != null) {
    aborted = signal.aborted;
  }
  if (aborted) {
    const _Object = Object;
    const _Error = Error;
    error = new Error("Request aborted");
    let merged = Object.assign(error, { code: "ABORTED" });
    cleanupRequestEntry(signal);
    arg3(merged);
    if (null != arg4) {
      let obj = { ok: false, hasErr: true, err: null };
      obj[2] = merged;
      arg4(obj);
    }
  } else {
    const promise = _createForOfIteratorHelperDefault[arg0](signal.url);
    if (null != signal.onRequestCreated) {
      signal.onRequestCreated(promise);
    }
    if (null != signal.query) {
      let query = signal.query;
      let tmp6 = query;
      if (typeof query === "object") {
        obj = {};
        let merged1 = Object.assign(query);
        const _Object2 = Object;
        const keys = Object.keys(obj);
        const mapped = keys.map((arg0) => {
          if (null == obj[arg0]) {
            delete tmp[tmp2];
          }
        });
        tmp6 = obj;
      }
      query = promise.query(tmp6);
    }
    if (signal.body) {
      promise.send(signal.body);
    }
    if (null != signal.headers) {
      const result = promise.set(signal.headers);
    }
    if (true === signal.withCredentials) {
      promise.withCredentials();
    }
    if (null != signal.reason) {
      const _encodeURIComponent = encodeURIComponent;
      const result1 = promise.set("X-Audit-Log-Reason", encodeURIComponent(signal.reason));
    }
    const attachments = signal.attachments;
    if (attachments != null) {
      const item = attachments.forEach((name) => {
        promise.attach(name.name, name.file, name.filename);
      });
    }
    const fields = signal.fields;
    if (fields != null) {
      const item1 = fields.forEach((name) => {
        promise.field(name.name, name.value);
      });
    }
    if (null != signal.context) {
      const tmp16 = encodeProperties(signal.context);
      if (null != tmp16) {
        const result2 = promise.set("X-Context-Properties", tmp16);
      }
    }
    let tmp18 = null != signal.retried;
    if (tmp18) {
      tmp18 = 0 !== signal.retried;
    }
    if (tmp18) {
      const _HermesInternal = HermesInternal;
      const result3 = promise.set("X-Failed-Requests", "" + signal.retried);
    }
    let tmp21 = null != signal.timeout;
    if (tmp21) {
      tmp21 = 0 !== signal.timeout;
    }
    if (tmp21) {
      promise.timeout(signal.timeout);
    }
    if (signal.binary) {
      promise.responseType("blob");
    }
    if (null != signal.onRequestProgress) {
      promise.on("progress", (direction) => {
        const onRequestProgress = signal.onRequestProgress;
        if (onRequestProgress != null) {
          onRequestProgress(direction);
        }
      });
    }
    function retry() {

    }
    let prepareRequestResult;
    if (c10 != null) {
      const prepareRequest = c10.prepareRequest;
      if (prepareRequest != null) {
        prepareRequestResult = prepareRequest(promise);
      }
    }
    promise.ok((status) => null != status.status);
    promise.then((ok) => {
      if (null != signal.retries) {
        tmp.retries = +tmp.retries - 1;
        if (+tmp.retries > 0) {
          if (set.has(ok.status)) {
            if (typeof retry !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (null != tmp.backoff) {
              let backoff = tmp.backoff;
            } else {
              backoff = new signal(584)();
            }
            tmp.backoff = backoff;
            let num5 = 0;
            if (null != tmp.retried) {
              num5 = tmp.retried;
            }
            tmp.retried = num5 + 1;
            const backoff2 = tmp.backoff;
            backoff2.fail(() => closure_1_11(url.url).then(() => closure_1_7(closure_0, closure_1, closure_2, closure_3, closure_4)));
          }
        }
      }
      obj = { ok: ok.ok, headers: ok.headers, body: ok.body, text: ok.text, status: ok.status, retryAfter: null };
      ({ headers, body } = ok);
      let prop;
      if (headers != null) {
        prop = headers["retry-after"];
      }
      if (prop == null) {
        let prop1;
        if (headers != null) {
          prop1 = headers["Retry-After"];
        }
        prop = prop1;
      }
      if (typeof prop === "string") {
        const _parseInt = parseInt;
        let parsed = parseInt(prop, 10);
        const _Number = Number;
        obj[5] = parsed;
        closure_1_9(tmp, obj);
        c0 = false;
        function interceptRetry(arg0, interceptResponse) {
          obj = {};
          const merged = Object.assign(closure_1_1);
          obj = {};
          const merged1 = Object.assign(closure_1_1.headers);
          const merged2 = Object.assign(arg0);
          obj.headers = obj;
          obj.interceptResponse = interceptResponse;
          c0 = true;
          retry(c0, obj, closure_1_2, closure_1_3, closure_1_4);
        }
        function interceptCancel(arg0) {
          if (!c0) {
            closure_1_3(arg0);
            if (closure_1_4 != null) {
              obj = { ok: false, hasErr: true, err: null };
              obj[2] = arg0;
              tmp4(obj);
            }
          }
        }
        let interceptResponseResult;
        if (tmp != null) {
          const interceptResponse = tmp.interceptResponse;
          if (interceptResponse != null) {
            interceptResponseResult = interceptResponse(ok, interceptRetry, interceptCancel);
          }
        }
        if (true !== interceptResponseResult) {
          let interceptResponse2Result;
          if (closure_1_10 != null) {
            const interceptResponse2 = tmp43.interceptResponse;
            if (interceptResponse2 != null) {
              interceptResponse2Result = interceptResponse2(ok, interceptRetry, interceptCancel, closure_8);
            }
          }
          if (true !== interceptResponse2Result) {
            if (ok.ok) {
              dependencyMap(obj);
            } else {
              if (tmp.oldFormErrors) {
                const body2 = obj.body;
                let code;
                if (body2 != null) {
                  code = body2.code;
                }
                if (code === callback(585).INVALID_FORM_BODY_ERROR_CODE) {
                  const errors = obj.body.errors;
                  if (null != errors) {
                    obj.body = tmp17(586).convertSkemaError(errors);
                    const tmp17Result = tmp17(586);
                  }
                }
                tmp17 = callback;
              }
              if (tmp.rejectWithError) {
                obj = { method: null, url: null, status: null, body: null, text: null, headers: null, retryAfter: null };
                obj[0] = c0;
                obj[1] = tmp.url;
                ({ status: obj3[2], body: obj3[3], text: obj3[4], headers: obj3[5], retryAfter: obj3[6] } = obj);
                callback2(new obj(obj));
              } else {
                callback2(obj);
              }
            }
            if (null != set) {
              obj = { hasErr: false };
              let merged = Object.assign(obj);
              tmp30(obj);
            }
          }
        }
      }
      if (null != body) {
        if (typeof body === "object") {
          const retry_after = body.retry_after;
          if (typeof retry_after === "number") {
            const _Number2 = Number;
            if (Number.isFinite(retry_after)) {
              if (retry_after > 0) {
                parsed = retry_after;
              }
            }
          }
        }
      }
    }, (code) => {
      if (null != signal.retries) {
        tmp.retries = +tmp.retries - 1;
        if (+tmp.retries > 0) {
          if ("ABORTED" !== code.code) {
            if (typeof retry !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (null != tmp.backoff) {
              let backoff = tmp.backoff;
            } else {
              backoff = new signal(584)();
            }
            tmp.backoff = backoff;
            let num2 = 0;
            if (null != tmp.retried) {
              num2 = tmp.retried;
            }
            tmp.retried = num2 + 1;
            const backoff2 = tmp.backoff;
            backoff2.fail(() => closure_1_11(url.url).then(() => closure_1_7(closure_0, closure_1, closure_2, closure_3, closure_4)));
          }
        }
      }
      closure_1_9(signal);
      callback2(code);
      if (null != closure_4) {
        obj = { ok: false, hasErr: true, err: null };
        obj[2] = code;
        tmp5(obj);
      }
    });
    const signal2 = signal.signal;
    let aborted1;
    if (signal2 != null) {
      aborted1 = signal2.aborted;
    }
    if (aborted1) {
      promise.abort();
    } else {
      const signal3 = signal.signal;
      if (signal3 != null) {
        const listener = signal3.addEventListener("abort", () => promise.abort(), { once: true });
      }
    }
  }
}
function cleanupRequestEntry(url) {
  closure_0 = url;
  let obj = map;
  let value = map.get(url.url);
  if (null != arg1) {
    if (set1.has(arg1.status)) {
      let backoff;
      if (value != null) {
        backoff = value.backoff;
      }
      if (backoff == null) {
        backoff = new failsDefault(1000, 60000);
      }
      ({ headers, body } = arg1);
      let prop;
      if (headers != null) {
        prop = headers["retry-after"];
      }
      if (prop == null) {
        let prop1;
        if (headers != null) {
          prop1 = headers["Retry-After"];
        }
        prop = prop1;
      }
      if (typeof prop === "string") {
        const _parseInt = parseInt;
        let num4 = parseInt(prop, 10);
        const _Number = Number;
        if (num4 == null) {
          num4 = 5;
        }
        const failResult = backoff.fail(undefined, 1000 * num4);
        const _Date2 = Date;
        const sum = Date.now() + failResult;
        if (null != value) {
          if (value.retryAfterTimestamp >= sum) {
            logger.verbose("cleanupRequestEntry: already has rate limit for ", url.url);
          }
        }
        if (null != value) {
          logger.verbose("cleanupRequestEntry: extending rate limit for ", url.url);
          const _clearTimeout = clearTimeout;
          clearTimeout(value.timeoutId);
        }
        const _HermesInternal = HermesInternal;
        logger.verbose("cleanupRequestEntry: rate limit for " + url.url + " retry after " + failResult + "ms");
        const _setTimeout = setTimeout;
        let queue;
        const timerId = setTimeout(() => {
          url = url.url;
          const value = closure_1_8.get(url);
          if (null != value) {
            const queue = value.queue;
            const arr = queue.shift();
            if (null == arr) {
              closure_1_3.verbose("rateLimitExpirationHandler: removing key for", url);
              closure_1_8.delete(url);
            } else {
              closure_1_3.verbose("rateLimitExpirationHandler: moving to next record for ", url);
              arr();
            }
          } else {
            closure_1_3.verbose("rateLimitExpirationHandler: rate limit for", url, "expired, but record was already removed");
          }
        }, failResult);
        if (value != null) {
          queue = value.queue;
        }
        if (queue == null) {
          queue = [];
        }
        obj = { queue: null, retryAfterTimestamp: null, latestErrorMessage: null, status: null, timeoutId: null, backoff: null };
        obj[0] = queue;
        obj[1] = sum;
        const body2 = arg1.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = String(message);
        obj[3] = arg1.status;
        obj[4] = timerId;
        obj[5] = backoff;
        const result = obj.set(url.url, obj);
      }
      if (null != body) {
        if (typeof body === "object") {
          const retry_after = body.retry_after;
          if (typeof retry_after === "number") {
            const _Number2 = Number;
            if (Number.isFinite(retry_after)) {
              if (retry_after > 0) {
                num4 = retry_after;
              }
            }
          }
        }
      }
    }
  }
  let tmp3 = null != value;
  if (tmp3) {
    const _Date = Date;
    tmp3 = value.retryAfterTimestamp < Date.now();
  }
  if (tmp3) {
    logger.verbose("cleanupRequestEntry: rate limit for ", url.url, "expired");
    url = url.url;
    value = obj.get(url);
    if (null != value) {
      const queue1 = value.queue;
      let arr = queue1.shift();
      if (null == arr) {
        obj2.verbose("rateLimitExpirationHandler: removing key for", url);
        obj.delete(url);
      } else {
        obj2.verbose("rateLimitExpirationHandler: moving to next record for ", url);
        arr();
      }
    } else {
      obj2.verbose("rateLimitExpirationHandler: rate limit for", url, "expired, but record was already removed");
    }
  }
}
function makeRequest(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return new Promise((serializer, bindResult) => {
    if (typeof obj === "string") {
      obj = { url: null, rejectWithError: false };
      obj[0] = tmp;
    }
    const value = closure_1_8.get(obj.url);
    if (null != value) {
      if (obj.failImmediatelyWhenRateLimited) {
        const _Date = Date;
        const _Math = Math;
        obj = { status: null, body: null };
        obj[0] = value.status;
        obj = { message: null, retry_after: null };
        obj[0] = value.latestErrorMessage;
        obj[1] = Math.round((value.retryAfterTimestamp - Date.now()) / 1000);
        obj[1] = obj;
        bindResult(obj);
        if (null != closure_2) {
          obj1 = { ok: true, hasErr: false, status: null, body: null, text: "", headers: null };
          ({ status: obj3[2], body: obj3[3] } = obj);
          obj1[5] = {};
          closure_2(obj1);
        }
      }
    }
    if (null != value) {
      closure_1_3.verbose("makeRequest: queueing request for ", obj.url);
      const queue = value.queue;
      queue.push(closure_1_7.bind(null, closure_0, obj, serializer, bindResult, closure_2));
    } else {
      closure_1_7(closure_0, obj, serializer, bindResult, closure_2);
    }
  });
}
function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    return Buffer.from(JSON.stringify(arg0)).toString("base64");
  } catch (err) {
    return null;
  }
}
const logger = new log.Logger("HTTPUtils");
let set = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
const set1 = new Set([429, 503]);
class HTTPResponseError extends Error {
  constructor(arg0) {
    ({ method, url, status } = global);
    ({ body, text, headers, retryAfter } = global);
    substr = [...arguments].slice();
    replaced = url.replace(/\d+/g, "xxx");
    items = ["" + method.toUpperCase() + " " + replaced + " [" + status + "]", ...substr];
    applyWithNewTargetResult = HermesBuiltin.applyWithNewTarget(items, new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    applyWithNewTargetResult.name = "HTTPResponseError";
    applyWithNewTargetResult.method = method;
    applyWithNewTargetResult.url = url;
    applyWithNewTargetResult.ok = false;
    applyWithNewTargetResult.status = status;
    applyWithNewTargetResult.body = body;
    applyWithNewTargetResult.text = text;
    applyWithNewTargetResult.headers = headers;
    applyWithNewTargetResult.retryAfter = retryAfter;
    return applyWithNewTargetResult;
  }
}
const map = new Map();
let bindResult = makeRequest.bind(null, "get");
let bindResult1 = makeRequest.bind(null, "post");
let bindResult2 = makeRequest.bind(null, "put");
let bindResult3 = makeRequest.bind(null, "patch");
let noop = makeRequest.bind(null, "del");
if (global.isServerRendering) {
  noop = function noop() {
    return Promise.resolve({ ok: true, status: 200, headers: {}, body: null, text: "" });
  };
  bindResult3 = noop;
  bindResult2 = noop;
  bindResult1 = noop;
  bindResult = noop;
}
let c10 = null;
function awaitOnline() {
  return Promise.resolve();
}
function migratedRejectEnabled() {
  return true;
}
function isRateLimitedStatus(arg0) {
  return set1.has(arg0);
}
function parseRetryAfter(retry_after, obj) {
  let prop;
  if (retry_after != null) {
    prop = retry_after["retry-after"];
  }
  if (prop == null) {
    let prop1;
    if (retry_after != null) {
      prop1 = retry_after["Retry-After"];
    }
    prop = prop1;
  }
  if (typeof prop === "string") {
    const _parseInt = parseInt;
    const parsed = parseInt(prop, 10);
    const _Number = Number;
    if (Number.isFinite(parsed)) {
      if (parsed > 0) {
        return parsed;
      }
    }
  }
  if (null != obj) {
    if (typeof obj === "object") {
      retry_after = obj.retry_after;
      if (typeof retry_after === "number") {
        const _Number2 = Number;
        if (Number.isFinite(retry_after)) {
          if (retry_after > 0) {
            return retry_after;
          }
        }
      }
    }
  }
}
function getRateLimitFloorMs(retry_after, obj) {
  let prop;
  if (retry_after != null) {
    prop = retry_after["retry-after"];
  }
  if (prop == null) {
    let prop1;
    if (retry_after != null) {
      prop1 = retry_after["Retry-After"];
    }
    prop = prop1;
  }
  if (typeof prop === "string") {
    const _parseInt = parseInt;
    let num2 = parseInt(prop, 10);
    const _Number = Number;
    if (num2 == null) {
      num2 = 5;
    }
    return 1000 * num2;
  }
  if (null != obj) {
    if (typeof obj === "object") {
      retry_after = obj.retry_after;
      if (typeof retry_after === "number") {
        const _Number2 = Number;
        if (Number.isFinite(retry_after)) {
          if (retry_after > 0) {
            num2 = retry_after;
          }
        }
      }
    }
  }
}
function makeRateLimitedResponse(status, message, retry_after) {
  obj = { status, body: obj };
  obj = { message, retry_after };
  return obj;
}
let result = set.fileFinishedImporting("../discord_common/js/packages/http-utils/HTTPUtils.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = convertStringArrayToSkemaErrorItems.INVALID_FORM_BODY_ERROR_CODE;
export const convertSkemaError = convertSkemaError.convertSkemaError;
export const stringifyErrors = stringifyErrors.stringifyErrors;
export const V6OrEarlierAPIError = getFieldMessage.APIError;
export const V8APIError = convertStringArrayToSkemaErrorItems.APIError;
export { isRateLimitedStatus };
export const DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS = 5;
export { HTTPResponseError };
export { parseRetryAfter };
export { getRateLimitFloorMs };
export { makeRateLimitedResponse };
export const get = bindResult;
export const post = bindResult1;
export const put = bindResult2;
export const patch = bindResult3;
export const del = noop;
export const HTTP = { get: bindResult, post: bindResult1, put: bindResult2, patch: bindResult3, del: noop };
export const getAPIBaseURL = function getAPIBaseURL(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let str = "";
  const text = `https:${window.GLOBAL_ENV.API_ENDPOINT}`;
  if (flag) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    str = "/v" + window.GLOBAL_ENV.API_VERSION;
  }
  return text + str;
};
export function setRequestPatch(ApexExperiment) {
  closure_10 = ApexExperiment;
}
export function setAwaitOnline(arg0) {
  closure_11 = arg0;
}
export function setRejectWithMigratedError(arg0) {
  closure_12 = arg0;
}
export const rejectWithMigratedError = function rejectWithMigratedError() {
  return migratedRejectEnabled();
};
export { encodeProperties };