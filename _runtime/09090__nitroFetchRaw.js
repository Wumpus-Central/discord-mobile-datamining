// === Module 9090: _nitroFetchRaw ===

// Module 9090 (_nitroFetchRaw)
import _resolveRequestBody from "_resolveRequestBody" /* 9083 */;
import _mod9086 from "module_9086" /* 9086 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = arg1;
let closure_3 = async function _nitroFetchRaw(arg0) {
  if (c15 === 2) {
    c15 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c15 = 2;
      if (0 === c14) {
        if (arg0 === 1) {
          c15 = 3;
          throw value;
        } else if (arg0 === 2) {
          c15 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_11 = tmp3;
          closure_10 = tmp9;
          closure_138_0 = closure_0;
          closure_138_1 = closure_1;
          closure_138_2 = undefined;
          closure_138_3 = undefined;
          closure_138_4 = undefined;
          closure_138_5 = undefined;
          closure_138_6 = undefined;
          closure_138_7 = undefined;
          closure_138_8 = undefined;
          closure_138_9 = undefined;
          closure_138_10 = undefined;
          closure_138_11 = undefined;
          closure_138_12 = undefined;
          closure_138_13 = undefined;
          let signal;
          if (closure_138_1 != null) {
            signal = closure_138_1.signal;
          }
          closure_138_2 = signal;
          let aborted;
          if (signal != null) {
            aborted = signal.aborted;
          }
          if (aborted) {
            throw _mod9086.createAbortError(signal);
          } else if (typeof closure_0 !== "string") {
            const _URL = URL;
            if (!(closure_0 instanceof URL)) {
              c14 = 1;
              c15 = 1;
              const obj6 = { value: _resolveRequestBody.resolveRequestBody(closure_0, closure_138_1), done: false };
              return obj6;
            }
          }
        }
      } else {
        if (1 === tmp9) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_138_1 = value;
            let aborted1;
            if (closure_138_2 != null) {
              aborted1 = closure_138_2.aborted;
            }
            if (aborted1) {
              throw closure_139_0(closure_139_1[1]).createAbortError(closure_138_2);
            }
          }
        } else if (2 === tmp9) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_138_1 = value;
            let aborted2;
            if (closure_138_2 != null) {
              aborted2 = closure_138_2.aborted;
            }
            if (aborted2) {
              throw closure_139_0(closure_139_1[1]).createAbortError(closure_138_2);
            }
          }
        } else if (3 === tmp9) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_138_3 = value;
            const url = closure_138_3.url;
            closure_2 = url;
            if (url == null) {
              const _String2 = String;
              closure_2 = String(closure_138_0);
            }
            closure_138_4 = closure_2;
            c14 = 4;
            c15 = 1;
            const obj12 = { value: closure_138_3.arrayBuffer(), done: false };
            return obj12;
          }
        } else if (4 === tmp9) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            closure_138_5 = value;
            closure_138_6 = [];
            const headers1 = closure_138_3.headers;
            const item = headers1.forEach((value, key) => {
              const entry = { key, value };
              return closure_1_6.push(entry);
            });
            const response = { url: closure_138_4, status: closure_138_3.status, statusText: closure_138_3.statusText, ok: closure_138_3.ok, redirected: null, headers: null, bodyBytes: null, bodyString: "Boolean" };
            let redirected = closure_138_3.redirected;
            if (redirected == null) {
              redirected = false;
            }
            response.redirected = redirected;
            response.headers = closure_138_6;
            response.bodyBytes = closure_138_5;
            c15 = 3;
            const obj15 = { value: response, done: true };
            return obj15;
          }
        } else if (5 === tmp9) {
          c13 = 0;
          let tmp73 = closure_138_2;
          if (closure_138_2) {
            tmp73 = closure_138_11;
          }
          if (tmp73) {
            const removed = closure_138_2.removeEventListener("abort", closure_138_11);
          }
          throw closure_12;
        } else if (6 === tmp9) {
          c13 = 1;
          closure_138_14 = closure_12;
          if (closure_138_7) {
            const NetworkInspector2 = closure_139_0(closure_139_1[7]).NetworkInspector;
            const _String = String;
            NetworkInspector2._recordEnd(closure_138_7, 0, "", [], 0, String(closure_138_14));
          }
          let aborted3;
          if (closure_138_2 != null) {
            aborted3 = closure_138_2.aborted;
          }
          if (aborted3) {
            throw closure_139_0(closure_139_1[1]).createAbortError(closure_138_2);
          } else {
            throw closure_138_14;
          }
        } else if (arg0 === 1) {
          c15 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 0;
          let tmp46 = closure_138_2;
          if (closure_138_2) {
            tmp46 = closure_138_11;
          }
          if (tmp46) {
            const removed1 = closure_138_2.removeEventListener("abort", closure_138_11);
          }
          c15 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else {
          closure_138_13 = value;
          let aborted4;
          if (closure_138_2 != null) {
            aborted4 = closure_138_2.aborted;
          }
          if (aborted4) {
            throw closure_139_0(closure_139_1[1]).createAbortError(closure_138_2);
          } else {
            if (closure_138_7) {
              const NetworkInspector = closure_139_0(closure_139_1[7]).NetworkInspector;
              const status = closure_138_13.status;
              const statusText = closure_138_13.statusText;
              const headers = closure_138_13.headers;
              closure_7 = headers;
              if (headers == null) {
                closure_7 = [];
              }
              const bodyString1 = closure_138_13.bodyString;
              length = undefined;
              if (bodyString1 != null) {
                length = bodyString1.length;
              }
              c8 = length;
              if (length == null) {
                c8 = 0;
              }
              const bodyString = closure_138_13.bodyString;
              c9 = bodyString;
              if (bodyString == null) {
                c9 = undefined;
              }
              NetworkInspector._recordEnd(closure_138_7, status, statusText, closure_7, c8, undefined, c9);
            }
            c13 = 0;
            let tmp37 = closure_138_2;
            if (closure_138_2) {
              tmp37 = closure_138_11;
            }
            if (tmp37) {
              const removed2 = closure_138_2.removeEventListener("abort", closure_138_11);
            }
            c15 = 3;
            const obj = { value: closure_138_13, done: true };
            return obj;
          }
        }
        const NitroFetchHybrid = closure_139_0(closure_139_1[3]).NitroFetchHybrid;
        let createClient;
        if (NitroFetchHybrid != null) {
          createClient = NitroFetchHybrid.createClient;
        }
        if (typeof createClient === "function") {
          closure_138_8 = closure_139_0(closure_139_1[4]).buildNitroRequest(closure_138_0, closure_138_1);
          let _withEvents;
          if (closure_138_1 != null) {
            _withEvents = closure_138_1._withEvents;
          }
          closure_138_9 = _withEvents;
          let customMethod;
          if (closure_138_9 != null) {
            customMethod = closure_138_9.options.customMethod;
          }
          if (null != customMethod) {
            closure_138_8.method = undefined;
          }
          const obj16 = closure_139_0(closure_139_1[4]);
          if (obj17.isHttpUrl(closure_138_8.url)) {
            const NetworkInspector3 = closure_139_0(closure_139_1[7]).NetworkInspector;
            if (NetworkInspector3.isEnabled()) {
              const _String3 = String;
              const _Date = Date;
              const _String4 = String;
              const _Math = Math;
              const text = `${String(Date.now())}-`;
              closure_138_7 = `${String(Date.now())}-` + String(Math.random()).slice(2, 8);
              const NetworkInspector4 = closure_139_0(closure_139_1[7]).NetworkInspector;
              const url2 = closure_138_8.url;
              let customMethod1;
              if (closure_138_9 != null) {
                customMethod1 = closure_138_9.options.customMethod;
              }
              let method = customMethod1;
              if (customMethod1 == null) {
                method = closure_138_8.method;
              }
              let GET = method;
              if (method == null) {
                GET = "GET";
              }
              const headers2 = closure_138_8.headers;
              closure_6 = headers2;
              if (headers2 == null) {
                closure_6 = [];
              }
              NetworkInspector4._recordStart(closure_138_7, url2, GET, closure_6, closure_138_8.bodyString);
              const StringResult = String(Math.random());
            }
            let StringResult1;
            if (closure_138_2) {
              const _String5 = String;
              const _Math2 = Math;
              StringResult1 = String(Math.random());
            }
            closure_138_10 = StringResult1;
            if (closure_138_10) {
              closure_138_8.requestId = closure_138_10;
            }
            closure_138_12 = closure_139_0(closure_139_1[3]).ensureClient();
            if (closure_138_12) {
              if (typeof closure_138_12.request === "function") {
                let tmp172 = closure_138_2;
                if (closure_138_2) {
                  tmp172 = closure_138_10;
                }
                if (tmp172) {
                  closure_138_11 = function b() {
                    try {
                      closure_1_12.cancelRequest(closure_1_10);
                    } catch (err) {
                    }
                  };
                  const listener = closure_138_2.addEventListener("abort", closure_138_11, { once: true });
                }
                c13 = 2;
                if (closure_138_9) {
                  const withEvents = obj21.requestWithEvents(closure_138_8, closure_138_9.options, closure_138_9.onResponseStarted, closure_138_9.onData, closure_138_9.onProgress);
                } else {
                  obj21.request(closure_138_8);
                }
                c14 = 7;
                c15 = 1;
              }
            }
            const obj20 = closure_139_0(closure_139_1[3]);
            throw closure_139_0(closure_139_1[3]).clientUnavailableError();
          } else {
            c15 = 3;
            const obj24 = { value: closure_139_0(closure_139_1[6]).fetchLocalResource(closure_138_8), done: true };
            return obj24;
          }
          obj17 = closure_139_0(closure_139_1[5]);
        } else {
          const _fetch = fetch;
          c14 = 3;
          c15 = 1;
          const obj26 = { value: fetch(closure_138_0, closure_138_1), done: false };
          return obj26;
        }
      }
      const _Blob = Blob;
      if (typeof Blob !== "undefined") {
        let body;
        if (closure_138_1 != null) {
          body = closure_138_1.body;
        }
        const _Blob2 = Blob;
        if (body instanceof Blob) {
          c14 = 2;
          c15 = 1;
          const obj27 = { value: closure_139_0(closure_139_1[2]).resolveBlobBody(closure_138_1), done: false };
          return obj27;
        }
      }
    } catch (tmp197) {
      closure_12 = tmp197;
      if (tmp4 === c13) {
        c15 = tmp2;
        throw tmp197;
      } else if (tmp === tmp199) {
        c14 = tmp6;
      } else {
        c14 = tmp5;
      }
    }
  }
};

export function nitroFetchRaw(arg0, arg1) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}