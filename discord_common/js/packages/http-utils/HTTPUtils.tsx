// discord_common/js/packages/http-utils/HTTPUtils.tsx
import logger_Logger from "../logger/Logger.tsx";
import BackoffDefault from "../backoff/Backoff.tsx";
import _createForOfIteratorHelperDefault from "../../../../_runtime/01273__createForOfIteratorHelper.js";
import V8APIError from "V8APIError.tsx";
import convertSkemaError from "convertSkemaError.tsx";
import stringifyErrors from "stringifyErrors.tsx";
import discord_common_V6OrEarlierAPIError from "V6OrEarlierAPIError.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function sendRequest(method, signal, arg2, fn, fn2, cause) {
  importDefault = signal;
  dependencyMap = arg2;
  closure_3 = fn;
  signal = signal.signal;
  let aborted;
  if (signal != null) {
    aborted = signal.aborted;
  }
  if (aborted) {
    const _Object = Object;
    const _Error = Error;
    let headers = { cause };
    const error = new Error("Request aborted", headers);
    let merged = Object.assign(error, { code: "ABORTED" });
    cleanupRequestEntry(signal);
    fn(merged);
    if (null != fn2) {
      headers = { ok: false, hasErr: true, err: merged };
      fn2(headers);
    }
  } else {
    const promise = _createForOfIteratorHelperDefault[method](signal.url);
    if (null != signal.onRequestCreated) {
      signal.onRequestCreated(promise);
    }
    if (null != signal.query) {
      let query = signal.query;
      let tmp6 = query;
      if (typeof query === "object") {
        headers = {};
        let merged1 = Object.assign(query);
        const _Object2 = Object;
        const keys = Object.keys(headers);
        const mapped = keys.map((item) => {
          if (null == obj[item]) {
            delete tmp[tmp2];
          }
        });
        tmp6 = headers;
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
    function retry() {}
    let prepareRequestResult;
    if (global != null) {
      const prepareRequest = global.prepareRequest;
      if (prepareRequest != null) {
        prepareRequestResult = prepareRequest(promise);
      }
    }
    cleanupRequestEntry = prepareRequestResult;
    promise.ok((status) => null != status.status);
    promise.then(
      (ok) => {
        if (null != signal.retries) {
          signal.retries = +signal.retries - 1;
          if (+signal.retries > 0) {
            if (set.has(ok.status)) {
              if (typeof retry === "function") {
                if (null != signal.backoff) {
                  let backoff = signal.backoff;
                } else {
                  backoff = new signal(559)();
                }
                signal.backoff = backoff;
                let num5 = 0;
                if (null != signal.retried) {
                  num5 = signal.retried;
                }
                signal.retried = num5 + 1;
                const backoff2 = signal.backoff;
                backoff2.fail(() =>
                  global(url.url).then(() =>
                    headers(closure_1_0, url, closure_1_2, closure_1_3, closure_1_4, closure_1_5),
                  ),
                );
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
        const response = {
          ok: ok.ok,
          headers: ok.headers,
          body: ok.body,
          text: ok.text,
          status: ok.status,
          retryAfter: null,
        };
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
          response.retryAfter = parsed;
          prepareRequestResult(signal, response);
          method = false;
          function interceptRetry(arg0, interceptResponse) {
            headers = {};
            const merged = Object.assign(headers);
            headers = {};
            const merged1 = Object.assign(headers.headers);
            const merged2 = Object.assign(arg0);
            headers.headers = headers;
            headers.interceptResponse = interceptResponse;
            c0 = true;
            sendRequest(closure_0, headers, closure_2, closure_3, closure_4, closure_5);
          }
          function interceptCancel(err) {
            if (!c0) {
              closure_3(err);
              if (closure_4 != null) {
                const obj = { ok: false, hasErr: true, err };
                tmp4(obj);
              }
            }
          }
          let interceptResponseResult;
          if (signal != null) {
            const interceptResponse = signal.interceptResponse;
            if (interceptResponse != null) {
              interceptResponseResult = interceptResponse(ok, interceptRetry, interceptCancel);
            }
          }
          if (true !== interceptResponseResult) {
            let interceptResponse2Result;
            if (global != null) {
              const interceptResponse2 = global.interceptResponse;
              if (interceptResponse2 != null) {
                interceptResponse2Result = interceptResponse2(ok, interceptRetry, interceptCancel, closure_9);
              }
            }
            if (true !== interceptResponse2Result) {
              if (ok.ok) {
                dependencyMap(response);
              } else {
                if (signal.oldFormErrors) {
                  const body2 = response.body;
                  let code;
                  if (body2 != null) {
                    code = body2.code;
                  }
                  if (code === method(1326).INVALID_FORM_BODY_ERROR_CODE) {
                    const errors = response.body.errors;
                    if (null != errors) {
                      response.body = tmp17(1327).convertSkemaError(errors);
                      const tmp17Result = tmp17(1327);
                    }
                  }
                  tmp17 = method;
                }
                if (signal.rejectWithError) {
                  const response1 = {
                    method,
                    url: signal.url,
                    status: null,
                    body: null,
                    text: null,
                    headers: null,
                    retryAfter: null,
                  };
                  ({
                    status: obj3.status,
                    body: obj3.body,
                    text: obj3.text,
                    headers: obj3.headers,
                    retryAfter: obj3.retryAfter,
                  } = response);
                  const tmp26 = new promise(response1);
                  if (null != cause) {
                    tmp26.cause = cause;
                  }
                  closure_3(tmp26);
                } else {
                  closure_3(response);
                }
              }
              if (null != set) {
                let obj = { hasErr: false };
                let merged = Object.assign(response);
                tmp31(obj);
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
      },
      (code) => {
        if (null != signal.retries) {
          signal.retries = +signal.retries - 1;
          if (+signal.retries > 0) {
            if ("ABORTED" !== code.code) {
              if (typeof retry === "function") {
                if (null != signal.backoff) {
                  let backoff = signal.backoff;
                } else {
                  backoff = new BackoffDefault();
                }
                signal.backoff = backoff;
                let num2 = 0;
                if (null != signal.retried) {
                  num2 = signal.retried;
                }
                signal.retried = num2 + 1;
                const backoff2 = signal.backoff;
                backoff2.fail(() =>
                  global(url.url).then(() =>
                    headers(closure_1_0, url, closure_1_2, closure_1_3, closure_1_4, closure_1_5),
                  ),
                );
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
        cleanupRequestEntry(signal);
        let tmp5 = null != cause;
        if (tmp5) {
          tmp5 = null == code.cause;
        }
        if (tmp5) {
          code.cause = cause;
        }
        closure_3(code);
        if (null != closure_4) {
          const obj = { ok: false, hasErr: true, err: code };
          tmp7(obj);
        }
      },
    );
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
function cleanupRequestEntry(url, arg1) {
  let obj = map;
  value = map.get(url.url);
  if (null != arg1) {
    if (set1.has(arg1.status)) {
      let backoff;
      if (value != null) {
        backoff = value.backoff;
      }
      if (backoff == null) {
        backoff = new BackoffDefault(1000, 60000);
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
          value = map.get(url);
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
            logger.verbose(
              "rateLimitExpirationHandler: rate limit for",
              url,
              "expired, but record was already removed",
            );
          }
        }, failResult);
        if (value != null) {
          queue = value.queue;
        }
        if (queue == null) {
          queue = [];
        }
        obj = {
          queue,
          retryAfterTimestamp: sum,
          latestErrorMessage: null,
          status: null,
          timeoutId: null,
          backoff: null,
        };
        const body2 = arg1.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj.latestErrorMessage = String(message);
        obj.status = arg1.status;
        obj.timeoutId = timerId;
        obj.backoff = backoff;
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
        logger.verbose("rateLimitExpirationHandler: removing key for", url);
        obj.delete(url);
      } else {
        logger.verbose("rateLimitExpirationHandler: moving to next record for ", url);
        arr();
      }
    } else {
      logger.verbose("rateLimitExpirationHandler: rate limit for", url, "expired, but record was already removed");
    }
  }
}
function makeRequest(str, body, arg2) {
  closure_0 = str;
  closure_2 = arg2;
  const error = new Error("HTTP " + str.toUpperCase() + " initiated here");
  return new Promise((serializer, fn) => {
    if (typeof body === "string") {
      body = { url: tmp, rejectWithError: false };
    }
    value = map.get(body.url);
    if (null != value) {
      if (body.failImmediatelyWhenRateLimited) {
        const _Date = Date;
        const _Math = Math;
        body = { status: value.status, body: null };
        body = {
          message: value.latestErrorMessage,
          retry_after: Math.round((value.retryAfterTimestamp - Date.now()) / 1000),
        };
        body.body = body;
        fn(body);
        if (null != closure_2) {
          const response = { ok: true, hasErr: false, status: null, body: null, text: "", headers: null };
          ({ status: obj3.status, body: obj3.body } = body);
          response.headers = {};
          closure_2(response);
        }
      }
    }
    if (null != value) {
      logger.verbose("makeRequest: queueing request for ", body.url);
      const queue = value.queue;
      queue.push(sendRequest.bind(null, closure_0, body, serializer, fn, closure_2, error));
    } else {
      sendRequest(closure_0, body, serializer, fn, closure_2, error);
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
const logger = new logger_Logger.Logger("HTTPUtils");
const set = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
const set1 = new Set([429, 503]);
class HTTPResponseError extends Error {
  constructor(arg0) {
    ({ method, url, status } = global);
    ({ body, text, headers, retryAfter } = global);
    substr = [...arguments].slice();
    replaced = url.replace(/\d+/g, "xxx");
    items = ["" + method.toUpperCase() + " " + replaced + " [" + status + "]", ...substr];
    applyWithNewTargetResult = HermesBuiltin.applyWithNewTarget(items, new.target, new.target);
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
global = function awaitOnline() {
  return Promise.resolve();
};
global = function migratedRejectEnabled() {
  return true;
};
function isRateLimitedStatus(arg0) {
  return set1.has(arg0);
}
function parseRetryAfter(retry_after, retry_after) {
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
function getRateLimitFloorMs(retry_after, retry_after) {
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
  let obj = { status, body: null };
  obj = { message, retry_after };
  obj.body = obj;
  return obj;
}
let result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/HTTPUtils.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = V8APIError.INVALID_FORM_BODY_ERROR_CODE;
export const convertSkemaError = convertSkemaError.convertSkemaError;
export const stringifyErrors = stringifyErrors.stringifyErrors;
export const V6OrEarlierAPIError = discord_common_V6OrEarlierAPIError.APIError;
export const V8APIError = V8APIError.APIError;
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
  global = arg0;
}
export function setAwaitOnline(arg0) {
  global = arg0;
}
export function setRejectWithMigratedError(arg0) {
  global = arg0;
}
export const rejectWithMigratedError = function rejectWithMigratedError() {
  return global();
};
export { encodeProperties };
