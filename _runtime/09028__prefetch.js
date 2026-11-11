// _runtime/09028__prefetch.js
import _resolveRequestBody from "09017__resolveRequestBody.js";
import hybridObject from "09023_hybridObject.js";
import NitroFetchHybrid2 from "09025_NitroFetchHybrid.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = arg1;
let closure_3 = async function _prefetch(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_5 = tmp2;
          closure_4 = tmp5;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          const NitroFetchHybrid = NitroFetchHybrid2.NitroFetchHybrid;
          let createClient;
          if (NitroFetchHybrid != null) {
            createClient = NitroFetchHybrid.createClient;
          }
          if (typeof createClient === "function") {
            c6 = 1;
            c7 = 1;
            const obj5 = { value: _resolveRequestBody.resolveRequestBody(closure_0, closure_132_1), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_132_1 = value;
          c6 = 2;
          c7 = 1;
          const obj8 = { value: closure_133_0(closure_133_1[2]).resolveBlobBody(closure_132_1), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_132_1 = value;
          closure_132_2 = closure_133_0(closure_133_1[3]).buildNitroRequest(closure_132_0, closure_132_1);
          const headers3 = closure_132_2.headers;
          let someResult;
          if (headers3 != null) {
            someResult = headers3.some((key) => "prefetchkey" === key.key.toLowerCase());
          }
          c2 = someResult;
          if (someResult == null) {
            c2 = false;
          }
          closure_132_3 = c2;
          let prefetchKey;
          if (closure_132_1 != null) {
            prefetchKey = closure_132_1.prefetchKey;
          }
          closure_132_4 = prefetchKey;
          let tmp12 = !closure_132_3;
          if (!closure_132_3) {
            tmp12 = closure_132_4;
          }
          if (tmp12) {
            const headers = closure_132_2.headers;
            closure_3 = headers;
            if (headers == null) {
              closure_3 = [];
            }
            const entry = { key: "prefetchKey", value: closure_132_4 };
            items = [entry];
            closure_132_2.headers = closure_3.concat(items);
          }
          const headers2 = closure_132_2.headers;
          let someResult1;
          if (headers2 != null) {
            someResult1 = headers2.some((key) => "prefetchkey" === key.key.toLowerCase());
          }
          closure_132_5 = someResult1;
          if (closure_132_5) {
            closure_132_6 = closure_133_0(closure_133_1[1]).ensureClient();
            let tmp33 = closure_132_6;
            if (closure_132_6) {
              tmp33 = typeof closure_132_6.prefetch === "function";
            }
            if (tmp33) {
              c6 = 3;
              c7 = 1;
              const obj11 = { value: closure_132_6.prefetch(closure_132_2), done: false };
              return obj11;
            }
            const obj3 = closure_133_0(closure_133_1[1]);
          } else {
            const _Error = Error;
            const error = new Error('prefetch requires a "prefetchKey" header');
            throw error;
          }
          const obj13 = closure_133_0(closure_133_1[3]);
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c7 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp48) {
      c7 = tmp;
      throw tmp48;
    }
  }
};
let closure_5 = async function _prefetchOnAppStart(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp8;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          let secureString;
          c8 = 1;
          c9 = 1;
          const obj6 = { value: _resolveRequestBody.resolveRequestBody(closure_0, closure_132_1), done: false };
          return obj6;
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_132_1 = value;
          c8 = 2;
          c9 = 1;
          const obj8 = { value: closure_133_0(closure_133_1[2]).resolveBlobBody(closure_132_1), done: false };
          return obj8;
        }
      } else {
        if (2 === tmp8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_132_1 = value;
            closure_132_2 = closure_133_0(closure_133_1[3]).buildNitroRequest(closure_132_0, closure_132_1);
            const headers1 = closure_132_2.headers;
            value = undefined;
            if (headers1 != null) {
              const iter = headers1.find((key) => "prefetchkey" === key.key.toLowerCase());
              if (iter != null) {
                value = iter.value;
              }
            }
            closure_132_3 = value;
            let prefetchKey;
            if (closure_132_1 != null) {
              prefetchKey = closure_132_1.prefetchKey;
            }
            closure_132_4 = prefetchKey;
            closure_2 = closure_132_3;
            if (closure_132_3 == null) {
              closure_2 = closure_132_4;
            }
            closure_132_5 = closure_2;
            if (closure_132_5) {
              const headers = closure_132_2.headers;
              closure_3 = headers;
              if (headers == null) {
                closure_3 = [];
              }
              closure_132_6 = closure_3.reduce((acc, key) => {
                acc[String(key.key)] = String(key.value);
                return acc;
              }, {});
              const obj = { url: closure_132_2.url, prefetchKey: closure_132_5, headers: closure_132_6 };
              closure_132_7 = obj;
              let method = closure_132_2.method;
              if (method) {
                method = "GET" !== closure_132_2.method;
              }
              if (method) {
                closure_132_7.method = closure_132_2.method;
              }
              if (undefined !== closure_132_2.bodyString) {
                closure_132_7.bodyString = closure_132_2.bodyString;
              }
              let bodyBytes = closure_132_2.bodyBytes;
              if (bodyBytes) {
                bodyBytes = closure_132_2.bodyBytes.byteLength > 0;
              }
              if (bodyBytes) {
                const _Uint8Array = Uint8Array;
                const uint8Array = new Uint8Array(closure_132_2.bodyBytes);
                closure_132_7.bodyBytesBase64 = closure_133_0(closure_133_1[4]).base64FromBytes(uint8Array);
                const obj2 = closure_133_0(closure_133_1[4]);
              }
              let bodyFormData = closure_132_2.bodyFormData;
              if (bodyFormData) {
                bodyFormData = closure_132_2.bodyFormData.length > 0;
              }
              if (bodyFormData) {
                closure_132_7.bodyFormData = closure_132_2.bodyFormData;
              }
              if (typeof closure_132_2.timeoutMs === "number") {
                closure_132_7.timeoutMs = closure_132_2.timeoutMs;
              }
              if (closure_132_2.priority) {
                closure_132_7.priority = closure_132_2.priority;
              }
              if (false === closure_132_2.followRedirects) {
                closure_132_7.followRedirects = false;
              }
              let credentials = closure_132_2.credentials;
              if (credentials) {
                credentials = "same-origin" !== closure_132_2.credentials;
              }
              if (credentials) {
                closure_132_7.credentials = closure_132_2.credentials;
              }
              if (typeof closure_132_2.prefetchCacheTtlMs === "number") {
                closure_132_7.prefetchCacheTtlMs = closure_132_2.prefetchCacheTtlMs;
              }
              closure_132_8 = [];
              c7 = 2;
              const NativeStorage = closure_133_0(closure_133_1[5]).NativeStorage;
              secureString = NativeStorage.getSecureString(closure_133_4);
              if (secureString) {
                const _JSON = JSON;
                closure_132_8 = JSON.parse(secureString);
              }
              const _Array = Array;
              if (!Array.isArray(closure_132_8)) {
                closure_132_8 = [];
              }
              c7 = 1;
              if (
                closure_132_8.some((prefetchKey) => {
                  let tmp = prefetchKey;
                  if (prefetchKey) {
                    tmp = prefetchKey.prefetchKey === closure_1_5;
                  }
                  return tmp;
                })
              ) {
                closure_132_8 = closure_132_8.filter((prefetchKey) => {
                  let tmp = prefetchKey;
                  if (prefetchKey) {
                    tmp = prefetchKey.prefetchKey !== closure_1_5;
                  }
                  return tmp;
                });
              }
              closure_132_8.push(closure_132_7);
              const NativeStorage2 = closure_133_0(closure_133_1[5]).NativeStorage;
              const _JSON2 = JSON;
              NativeStorage2.setSecureString(closure_133_4, JSON.stringify(closure_132_8));
              c7 = 0;
            } else {
              const _Error = Error;
              const error = new Error('prefetchOnAppStart requires a "prefetchKey" (header or init.prefetchKey)');
              throw error;
            }
            const obj10 = closure_133_0(closure_133_1[3]);
          }
        } else if (3 === tmp8) {
          c7 = 0;
          closure_132_10 = closure_6;
          const _console = console;
          console.warn("Failed to persist prefetch queue", closure_132_10);
        } else {
          c7 = 1;
          closure_132_8 = [];
        }
        c9 = 3;
      }
    } catch (tmp117) {
      closure_6 = tmp117;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp117;
      } else if (tmp === tmp119) {
        c8 = tmp2;
      } else {
        c8 = tmp5;
      }
    }
  }
};
let closure_6 = async function _removeFromAutoPrefetch(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp13;
          closure_129_0 = closure_0;
          closure_129_2 = undefined;
          closure_129_1 = [];
          c4 = 2;
          const NativeStorage3 = hybridObject.NativeStorage;
          const secureString = NativeStorage3.getSecureString(nitrofetch_autoprefetch_queue);
          if (secureString) {
            const _JSON = JSON;
            closure_129_1 = JSON.parse(secureString);
          }
          const _Array = Array;
          if (!Array.isArray(closure_129_1)) {
            closure_129_1 = [];
          }
          c4 = 1;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_3 = closure_3;
        const _console = console;
        console.warn("Failed to remove from prefetch queue", closure_129_3);
        c6 = 3;
      } else {
        c4 = 1;
        closure_129_1 = [];
      }
      closure_129_2 = closure_129_1.filter((prefetchKey) => {
        let tmp = prefetchKey;
        if (prefetchKey) {
          tmp = prefetchKey.prefetchKey !== closure_1_0;
        }
        return tmp;
      });
      if (0 === closure_129_2.length) {
        const NativeStorage2 = closure_130_0(closure_130_1[5]).NativeStorage;
        NativeStorage2.removeSecureString(closure_130_4);
      } else if (closure_129_2.length !== closure_129_1.length) {
        const NativeStorage = closure_130_0(closure_130_1[5]).NativeStorage;
        const _JSON2 = JSON;
        NativeStorage.setSecureString(closure_130_4, JSON.stringify(closure_129_2));
      }
      c4 = 0;
    } catch (tmp35) {
      closure_3 = tmp35;
      if (tmp5 === c4) {
        c6 = tmp3;
        throw tmp35;
      } else if (tmp2 === tmp37) {
        c5 = tmp2;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_7 = async function _removeAllFromAutoprefetch() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c4 = 2;
      let removeSecureStringResult = c1;
      if (0 === c1) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 1;
          const NativeStorage = hybridObject.NativeStorage;
          removeSecureStringResult = NativeStorage.removeSecureString(nitrofetch_autoprefetch_queue);
          c3 = 0;
        }
      } else {
        c3 = 0;
        closure_128_0 = closure_2;
        const _console = console;
        removeSecureStringResult = console.warn("Failed to clear prefetch queue", closure_128_0);
      }
      c4 = 3;
    } catch (tmp14) {
      closure_2 = tmp14;
      if (tmp3 === c3) {
        c4 = tmp2;
        throw tmp14;
      } else {
        c1 = tmp;
      }
    }
  }
};
const nitrofetch_autoprefetch_queue = "nitrofetch_autoprefetch_queue";

export function prefetch(arg0, arg1) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function prefetchOnAppStart(arg0, arg1) {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function removeFromAutoPrefetch(arg0) {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function removeAllFromAutoprefetch() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function __readAutoPrefetchQueue() {
  try {
    const NativeStorage = hybridObject.NativeStorage;
    const secureString = NativeStorage.getSecureString(nitrofetch_autoprefetch_queue);
    if (secureString) {
      const _JSON = JSON;
      const parsed = JSON.parse(secureString);
      const _Array = Array;
      if (Array.isArray(parsed)) {
        items = parsed;
      } else {
        items = [];
      }
      return items;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
}
