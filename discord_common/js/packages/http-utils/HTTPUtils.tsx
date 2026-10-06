// === Module 1282: HTTPUtils ===

// Module 1282 (HTTPUtils)
import logger_Logger from "logger/Logger" /* 4 */;
import BackoffDefault from "Backoff" /* 569 */;
import RequestDefault from "Request" /* 1283 */;
import V8APIError from "V8APIError" /* 1336 */;
import convertSkemaError from "convertSkemaError" /* 1337 */;
import stringifyErrors from "stringifyErrors" /* 1338 */;
import discord_common_V6OrEarlierAPIError from "discord_common/V6OrEarlierAPIError" /* 1339 */;
import size from "module_2" /* 2 */;

let c0, dependencyMap, importDefault;

function sendRequest(method, signal, arg2, fn, fn2, cause) {
  let closure_2;
  const f135083 = () => {
    promise = awaitOnline(url.url);
    return promise.then(() => obj6(closure_1_0, url, closure_1_2, closure_1_3, closure_1_4, closure_1_5));
  };
  importDefault = signal;
  dependencyMap = arg2;
  let closure_3 = fn;
  set = fn2;
  signal = signal.signal;
  let aborted;
  if (signal != null) {
    aborted = signal.aborted;
  }
  if (aborted) {
    const _Object = Object;
    const _Error = Error;
    let obj = { cause };
    let self = this;
    let self2 = this;
    const error = new Error("Request aborted", obj);
    let obj2 = assign(error, { code: "ABORTED" });
    cleanupRequestEntry(signal);
    fn(obj2);
    if (null != fn2) {
      const obj3 = { ok: false, hasErr: true, err: obj2 };
      fn2(obj3);
    }
  } else {
    const tmp4 = RequestDefault;
    let promise = tmp4[method](signal.url);
    if (null != signal.onRequestCreated) {
      signal.onRequestCreated(promise);
    }
    if (null != signal.query) {
      const query = signal.query;
      let tmp6 = query;
      if (typeof query === "object") {
        const obj6 = {};
        let merged = Object.assign(query);
        const _Object2 = Object;
        const keys = Object.keys(obj6);
        const mapped = keys.map((item) => {
          if (null == obj6[item]) {
            delete obj6[item];
          }
        });
        tmp6 = obj6;
      }
      const query1 = promise.query(tmp6);
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
      let num2 = 0;
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
    if (_null != null) {
      const prepareRequest = _null.prepareRequest;
      if (prepareRequest != null) {
        prepareRequestResult = prepareRequest(promise);
      }
    }
    cleanupRequestEntry = prepareRequestResult;
    promise.ok((status) => null != status.status);
    promise.then(function(ok) {
      let body;
      let headers;
      let parsed;
      if (null != signal.retries) {
        signal.retries = +signal.retries - 1;
        if (+signal.retries > 0) {
          if (set.has(ok.status)) {
            if (typeof retry === "function") {
              let backoff;
              if (null != signal.backoff) {
                backoff = signal.backoff;
              } else {
                const self2 = this;
                const self3 = this;
                backoff = new signal(closure_2[2])();
              }
              signal.backoff = backoff;
              let num5 = 0;
              if (null != signal.retried) {
                num5 = signal.retried;
              }
              signal.retried = num5 + 1;
              const backoff2 = signal.backoff;
              backoff2.fail(f135083);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
      const response = { ok: ok.ok, headers: ok.headers, body: ok.body, text: ok.text, status: ok.status, retryAfter: null };
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
        parsed = parseInt(prop, 10);
        const _Number = Number;
        response.retryAfter = parsed;
        cleanupRequestEntry(signal, response);
        method = false;
        function interceptRetry(arg0, interceptResponse) {
          let obj2;
          const obj = { headers: obj2, interceptResponse };
          const merged = Object.assign(headers);
          obj2 = {};
          const merged1 = Object.assign(headers.headers);
          const merged2 = Object.assign(arg0);
          c0 = true;
          sendRequest(method, obj, closure_2, fn, set, cause);
        }
        function interceptCancel(err) {
          if (!c0) {
            fn(err);
            if (set != null) {
              const obj = { ok: false, hasErr: true, err };
              tmp5(obj);
            }
          }
        }
        let interceptResponseResult;
        if (signal != null) {
          interceptResponse = signal.interceptResponse;
          if (interceptResponse != null) {
            interceptResponseResult = interceptResponse(ok, interceptRetry, interceptCancel);
          }
        }
        if (true !== interceptResponseResult) {
          let interceptResponse2Result;
          if (interceptResponse != null) {
            const interceptResponse2 = interceptResponse.interceptResponse;
            if (interceptResponse2 != null) {
              interceptResponse2Result = interceptResponse2(ok, interceptRetry, interceptCancel, closure_9);
            }
          }
          if (true !== interceptResponse2Result) {
            if (ok.ok) {
              closure_2(response);
            } else {
              if (signal.oldFormErrors) {
                const body2 = response.body;
                let code;
                if (body2 != null) {
                  code = body2.code;
                }
                const tmp17 = method;
                if (code === method(closure_2[3]).INVALID_FORM_BODY_ERROR_CODE) {
                  const errors = response.body.errors;
                  if (null != errors) {
                    const tmp17Result = tmp17(closure_2[4]);
                    response.body = tmp17Result.convertSkemaError(errors);
                  }
                }
              }
              if (signal.rejectWithError) {
                const response1 = { method, url: signal.url, status: null, body: null, text: null, headers: null, retryAfter: null };
                ({ status: obj3.status, body: obj3.body, text: obj3.text, headers: obj3.headers, retryAfter: obj3.retryAfter } = response);
                const self = this;
                const tmp25 = new promise(response1);
                if (null != cause) {
                  tmp25.cause = cause;
                }
                closure_3(tmp25);
              } else {
                closure_3(response);
              }
            }
            if (null != set) {
              let obj = { hasErr: false };
              let merged = Object.assign(response);
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
    }, function(code) {
      let url;
      if (null != signal.retries) {
        signal.retries = +signal.retries - 1;
        if (+signal.retries > 0) {
          if ("ABORTED" !== code.code) {
            if (typeof retry === "function") {
              let backoff;
              if (null != signal.backoff) {
                backoff = signal.backoff;
              } else {
                const self = this;
                const self2 = this;
                backoff = new BackoffDefault();
              }
              signal.backoff = backoff;
              let num2 = 0;
              if (null != signal.retried) {
                num2 = signal.retried;
              }
              signal.retried = num2 + 1;
              const backoff2 = signal.backoff;
              backoff2.fail(f135083);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
      cleanupRequestEntry(signal);
      const tmp5 = null != cause && null == code.cause;
      if (tmp5) {
        code.cause = cause;
      }
      fn(code);
      if (null != set) {
        const obj = { ok: false, hasErr: true, err: code };
        tmp7(obj);
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
function cleanupRequestEntry(url, response) {
  let _String;
  let body;
  let headers;
  let message;
  let value = map.get(url.url);
  if (null != response) {
    if (set1.has(response.status)) {
      let num4;
      let backoff;
      if (value != null) {
        backoff = value.backoff;
      }
      if (backoff == null) {
        const self = this;
        const self2 = this;
        backoff = new BackoffDefault(1000, 60000);
      }
      ({ headers, body } = response);
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
        num4 = parseInt(prop, 10);
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
          const value = map.get(url);
          if (null != value) {
            const queue = value.queue;
            const arr = queue.shift();
            if (null == arr) {
              logger.verbose("rateLimitExpirationHandler: removing key for", url);
              map.delete(url);
            } else {
              logger.verbose("rateLimitExpirationHandler: moving to next record for ", url);
              arr();
            }
          } else {
            logger.verbose("rateLimitExpirationHandler: rate limit for", url, "expired, but record was already removed");
          }
        }, failResult);
        const url2 = url.url;
        set = map.set;
        if (value != null) {
          queue = value.queue;
        }
        if (queue == null) {
          queue = [];
        }
        const body2 = response.body;
        const obj3 = { queue, retryAfterTimestamp: sum, latestErrorMessage: _String(message), status: response.status, timeoutId: timerId, backoff };
        message = undefined;
        _String = String;
        if (body2 != null) {
          message = body2.message;
        }
        const result = set(url2, obj3);
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
    const value2 = map.get(url);
    if (null != value2) {
      const queue1 = value2.queue;
      let arr = queue1.shift();
      if (null == arr) {
        logger.verbose("rateLimitExpirationHandler: removing key for", url);
        map.delete(url);
      } else {
        logger.verbose("rateLimitExpirationHandler: moving to next record for ", url);
        arr();
      }
    } else {
      logger.verbose("rateLimitExpirationHandler: rate limit for", url, "expired, but record was already removed");
    }
  }
}
function makeRequest(str, arg1, arg2) {
  let closure_0 = str;
  let obj2 = arg1;
  let closure_2 = arg2;
  const error = new Error("HTTP " + str.toUpperCase() + " initiated here");
  const promise = new Promise((serializer, fn) => {
    let closure_0;
    let obj4;
    if (typeof obj2 === "string") {
      obj2 = { url: tmp, rejectWithError: false };
    }
    const value = map.get(obj2.url);
    if (null != value) {
      if (obj2.failImmediatelyWhenRateLimited) {
        const _Date = Date;
        const _Math = Math;
        const obj = { status: value.status, body: obj4 };
        obj4 = { message: value.latestErrorMessage, retry_after: Math.round((value.retryAfterTimestamp - Date.now()) / 1000) };
        fn(obj);
        if (null != closure_2) {
          const response = { ok: true, hasErr: false, status: null, body: null, text: "", headers: {} };
          ({ status: obj3.status, body: obj3.body } = obj);
          closure_2(response);
        }
      }
    }
    if (null != value) {
      closure_0 = "makeRequest: queueing request for ";
      logger.verbose("makeRequest: queueing request for ", obj2.url);
      const queue = value.queue;
      queue.push(sendRequest.bind(null, closure_0, obj2, serializer, fn, closure_2, error));
    } else {
      sendRequest(closure_0, obj2, serializer, fn, closure_2, error);
    }
  });
  return promise;
}
function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    const str = Buffer.from(JSON.stringify(arg0));
    return str.toString("base64");
  } catch (err) {
    return null;
  }
}
const logger = new logger_Logger.Logger("HTTPUtils");
let set = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
const set1 = new Set([429, 503]);
class HTTPResponseError extends Error {
  constructor(arg0) {
    let body;
    let headers;
    let method;
    let retryAfter;
    let status;
    let text;
    let url;
    ({ method, url, status } = arg0);
    ({ body, text, headers, retryAfter } = arg0);
    const substr = [...arguments].slice();
    const replaced = url.replace(/\d+/g, "xxx");
    const items = ["" + method.toUpperCase() + " " + replaced + " [" + status + "]", ...substr];
    const applyWithNewTargetResult = HermesBuiltin.applyWithNewTarget(items, this, new.target);
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
function parseRetryAfter(retry_after, retry_after2) {
  let prop;
  if (retry_after2 != null) {
    prop = retry_after2["retry-after"];
  }
  if (prop == null) {
    let prop1;
    if (retry_after2 != null) {
      prop1 = retry_after2["Retry-After"];
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
  if (null != retry_after) {
    if (typeof retry_after === "object") {
      retry_after = retry_after.retry_after;
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
function getRateLimitFloorMs(retry_after, retry_after2) {
  let num2;
  let prop;
  if (retry_after2 != null) {
    prop = retry_after2["retry-after"];
  }
  if (prop == null) {
    let prop1;
    if (retry_after2 != null) {
      prop1 = retry_after2["Retry-After"];
    }
    prop = prop1;
  }
  if (typeof prop === "string") {
    const _parseInt = parseInt;
    num2 = parseInt(prop, 10);
    const _Number = Number;
    if (num2 == null) {
      num2 = 5;
    }
    return 1000 * num2;
  }
  if (null != retry_after) {
    if (typeof retry_after === "object") {
      retry_after = retry_after.retry_after;
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
  const obj = { status, body: obj2 };
  return obj;
}
let result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/HTTPUtils.tsx");
const convertSkemaError_export = convertSkemaError.convertSkemaError;
const stringifyErrors_export = stringifyErrors.stringifyErrors;
const V8APIError_export = V8APIError.APIError;

export const INVALID_FORM_BODY_ERROR_CODE = V8APIError.INVALID_FORM_BODY_ERROR_CODE;
export { convertSkemaError_export as convertSkemaError };
export { stringifyErrors_export as stringifyErrors };
export const V6OrEarlierAPIError = discord_common_V6OrEarlierAPIError.APIError;
export { V8APIError_export as V8APIError };
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
export function setRequestPatch(arg0) {
  let c10 = arg0;
}
export function setAwaitOnline(arg0) {
  awaitOnline = arg0;
}
export function setRejectWithMigratedError(arg0) {
  migratedRejectEnabled = arg0;
}
export const rejectWithMigratedError = function rejectWithMigratedError() {
  return migratedRejectEnabled();
};
export { encodeProperties };