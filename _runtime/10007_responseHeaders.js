// _runtime/10007_responseHeaders.js
import normalizeName from "09987_normalizeName.js";
import _mod9988 from "metro/09988__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = arg1;
function responseHeaders(arr) {
  const obj = {};
  const item = arr.forEach((item, index) => {
    obj[index] = item;
  });
  return obj;
}
function isBinaryResponse(arg0) {
  let tmp = "arraybuffer" === arg0;
  if (!tmp) {
    tmp = "blob" === arg0;
  }
  return tmp;
}
const set = new Set(["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]);
const re6 = /(?:^|,)\s*text\/event-stream\s*(?:[;,]|$)/i;

export function bodySize(size) {
  if (null == size) {
    return 0;
  } else if (typeof size === "string") {
    let byteLength = _mod9988.utf8Length(size);
  } else {
    const _ArrayBuffer2 = ArrayBuffer;
    if (!(size instanceof ArrayBuffer)) {
      const _ArrayBuffer = ArrayBuffer;
      if (!ArrayBuffer.isView(size)) {
        const _Blob = Blob;
        if (typeof Blob !== "undefined") {
          const _Blob2 = Blob;
          if (size instanceof Blob) {
            byteLength = size.size;
          }
        }
        const _URLSearchParams = URLSearchParams;
        if (typeof URLSearchParams !== "undefined") {
          const _URLSearchParams2 = URLSearchParams;
          if (size instanceof URLSearchParams) {
            byteLength = _mod9988.utf8Length(size.toString());
          }
        }
      }
    }
    byteLength = size.byteLength;
  }
}
export function sendXMLHttpRequest(request, arg1) {
  closure_1 = arg1;
  const abortController = new AbortController();
  c3 = false;
  function complete(arg0) {
    if (!c3) {
      c3 = true;
      closure_1.onComplete("");
    }
  }
  function fail(message) {
    if (!c3) {
      const _Error = Error;
      if (message instanceof Error) {
        message = message.message;
      } else {
        const _String = String;
        message = String(message);
      }
      if (typeof complete === "function") {
        if (!c3) {
          c3 = true;
          closure_1.onComplete(message);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  c6 = false;
  function respond(arg0, arg1, arg2) {
    c6 = true;
    closure_1.onResponse(arg0, arg1, arg2);
  }
  let responseType = (allHeadersAsList) => {
    const nitroHeaders = new normalizeName.NitroHeaders(allHeadersAsList.allHeadersAsList);
    const item = nitroHeaders.forEach((item, index) => {
      obj[index] = item;
    });
    if (typeof respond === "function") {
      c6 = true;
      closure_1.onResponse(allHeadersAsList.httpStatusCode, obj, tmp2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    obj = {};
  };
  let f126692 = () => {
    items = [...arguments];
    if (!responseHeaders) {
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, undefined);
      } catch (tmp9) {
        asyncGeneratorStep.abort();
        isBinaryResponse(tmp9);
      }
    }
  };
  c9 = null;
  responseType = request.responseType;
  let tmp2 = "arraybuffer" === responseType;
  if (!tmp2) {
    tmp2 = "blob" === responseType;
  }
  closure_10 = !tmp2;
  function flushProgress() {
    if (null != c9) {
      c9 = null;
      closure_1.onProgress(c9);
    }
  }
  responseType = (arg0) => {
    if (c6) {
      if (!closure_10) {
        closure_1.onProgress(arg0);
      }
    }
    c9 = arg0;
  };
  f126692 = () => {
    items = [...arguments];
    if (!responseHeaders) {
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, undefined);
      } catch (tmp9) {
        asyncGeneratorStep.abort();
        isBinaryResponse(tmp9);
      }
    }
  };
  c13 = false;
  closure_14 = 0;
  responseType = (byteLength) => {
    c9 = null;
    c13 = true;
    closure_14 = closure_14 + byteLength.byteLength;
    responseType = responseType.responseType;
    let tmp2 = "arraybuffer" === responseType;
    if (!tmp2) {
      tmp2 = "blob" === responseType;
    }
    let substr = byteLength;
    if (tmp2) {
      substr = byteLength.slice(0);
    }
    const uint8Array = new Uint8Array(substr);
    closure_1.onChunk(uint8Array, closure_14);
  };
  f126692 = () => {
    items = [...arguments];
    if (!responseHeaders) {
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, undefined);
      } catch (tmp9) {
        asyncGeneratorStep.abort();
        isBinaryResponse(tmp9);
      }
    }
  };
  function onData(arg0) {
    f126692(arg0);
    return !c3;
  }
  closure_17 = request.method.toUpperCase();
  responseType = abortController(function* () {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === v4) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            let v0 = 1;
            let str = "omit";
            if (Uint8Array.withCredentials) {
              str = "include";
            }
            const request = {
              body: Uint8Array.body,
              credentials: str,
              headers: Uint8Array.headers,
              method: Uint8Array.method,
              signal: tmp3.signal,
              _withEvents: null,
            };
            const obj4 = {
              responseBytes: fail(Uint8Array.responseType),
              customMethod: null,
              separateConnections: null,
            };
            let tmp62;
            if (!complete.has(closure_1_17)) {
              tmp62 = closure_1_17;
            }
            const obj5 = { options: null, onResponseStarted: null, onData: null, onProgress: null };
            obj4.customMethod = tmp62;
            const _Object = Object;
            const entries = Object.entries(Uint8Array.headers);
            obj4.separateConnections = entries.some((item) => {
              [str, tmp] = item;
              let isMatch = "accept" === str.toLowerCase();
              if (isMatch) {
                isMatch = regex.test(tmp);
              }
              return isMatch;
            });
            obj5.options = obj4;
            let tmp65;
            if (Uint8Array.incremental) {
              tmp65 = closure_1_8;
            }
            obj5.onResponseStarted = tmp65;
            let tmp67;
            if (Uint8Array.incremental) {
              tmp67 = onData;
            }
            obj5.onData = tmp67;
            let tmp69;
            if (Uint8Array.observesProgress) {
              tmp69 = closure_1_12;
            }
            obj5.onProgress = tmp69;
            request._withEvents = obj5;
            v4 = 2;
            c6 = 1;
            const obj6 = { value: _Uint8Array(closure_1[3]).nitroFetch(Uint8Array.url, request), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp7) {
            v0 = 0;
            v4(tmp73);
            c6 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_129_0 = value;
              if (v0) {
                v0 = 0;
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (!c6) {
                  respond(closure_129_0.status, v0(closure_129_0.headers), closure_129_0.url);
                  if (v0) {
                    v0 = 0;
                    c6 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
                if (closure_1_13) {
                  tmp73("");
                  v0 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else if (fail(Uint8Array.responseType)) {
                  flushProgress();
                  _Uint8Array = Uint8Array;
                  v4 = 3;
                  c6 = 1;
                  const obj8 = { value: closure_129_0.arrayBuffer(), done: false };
                  return obj8;
                } else {
                  v4 = 4;
                  c6 = 1;
                  const obj9 = { value: closure_129_0.text(), done: false };
                  return obj9;
                }
              }
            }
          } else {
            if (3 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                const tmp90 = new Uint8Array(value);
                closure_129_1 = tmp90;
                if (!v0) {
                  closure_1.onChunk(closure_129_1, closure_129_1.byteLength);
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_2 = value;
              if (v0) {
                v0 = 0;
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (65279 === closure_129_2.charCodeAt(0)) {
                  let substr = closure_129_2.slice(1);
                } else {
                  substr = closure_129_2;
                }
                closure_1.onText(substr);
                if (v0) {
                  v0 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  flushProgress();
                }
              }
            }
            tmp73("");
            v0 = 0;
          }
          v0 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp73) {
        if (tmp4 === v0) {
          c6 = tmp2;
          throw tmp73;
        } else {
          v4 = tmp;
        }
      }
    }
  });
  (function performRequest() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  return {
    abort() {
      if (!c3) {
        c3 = true;
        abortController.abort();
      }
    },
  };
}
