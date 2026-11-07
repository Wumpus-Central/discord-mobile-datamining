// _runtime/09926__nitroFetch.js
import NitroRequest from "09927_NitroRequest.js";
import _mod9933 from "metro/09933__.js";
import _resolveRequestBody from "09934__resolveRequestBody.js";
import _nitroFetchRaw from "09941__nitroFetchRaw.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = arg1;
let closure_4 = async function _nitroFetch(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_7 = tmp2;
          closure_6 = tmp5;
          closure_134_0 = _require;
          closure_134_1 = closure_1;
          closure_134_2 = undefined;
          closure_134_3 = undefined;
          if (_require instanceof NitroRequest.NitroRequest) {
            const obj3 = {};
            const merged = Object.assign(closure_134_1);
            let signal;
            if (closure_134_1 != null) {
              signal = closure_134_1.signal;
            }
            if (signal == null) {
              signal = _require.signal;
            }
            obj3.signal = signal;
            let redirect;
            if (closure_134_1 != null) {
              redirect = closure_134_1.redirect;
            }
            if (redirect == null) {
              redirect = _require.redirect;
            }
            obj3.redirect = redirect;
            let cache;
            if (closure_134_1 != null) {
              cache = closure_134_1.cache;
            }
            if (cache == null) {
              cache = _require.cache;
            }
            obj3.cache = cache;
            closure_134_1 = obj3;
          }
          let stream;
          if (closure_134_1 != null) {
            stream = closure_134_1.stream;
          }
          if (true === stream) {
            const obj11 = _mod9933;
            if (obj11.isHttpUrl(obj12.getUrlString(_require))) {
              c8 = 1;
              c9 = 1;
              const obj5 = { value: _resolveRequestBody.resolveRequestBody(_require, closure_134_1), done: false };
              return obj5;
            }
            obj12 = _mod9933;
          }
          let redirect1;
          if (closure_134_1 != null) {
            redirect1 = closure_134_1.redirect;
          }
          let follow = redirect1;
          if (redirect1 == null) {
            follow = "follow";
          }
          closure_134_2 = follow;
          c8 = 3;
          c9 = 1;
          const obj6 = { value: _nitroFetchRaw.nitroFetchRaw(_require, closure_134_1), done: false };
          return obj6;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_134_1 = value;
          c8 = 2;
          c9 = 1;
          const obj9 = { value: closure_135_0(closure_135_1[3]).resolveBlobBody(closure_134_1), done: false };
          return obj9;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_134_1 = value;
          c9 = 3;
          const obj14 = {
            value: closure_135_0(closure_135_1[4]).nitroStreamFetch(closure_134_0, closure_134_1),
            done: true,
          };
          return obj14;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 3;
        const obj16 = { value, done: true };
        return obj16;
      } else {
        closure_134_3 = value;
        if ("error" === closure_134_2) {
          if (closure_135_3.has(closure_134_3.status)) {
            const headers = closure_134_3.headers;
            if (headers.some((key) => "location" === key.key.toLowerCase())) {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError(
                'redirect mode is "error": redirected request to "' + closure_134_3.url + '"',
              );
              throw typeError;
            }
          }
        }
        const response = {
          url: closure_134_3.url,
          status: closure_134_3.status,
          statusText: closure_134_3.statusText,
          ok: closure_134_3.ok,
          redirected: closure_134_3.redirected,
          headers: closure_134_3.headers,
          bodyBytes: closure_134_3.bodyBytes,
          bodyString: closure_134_3.bodyString,
        };
        const nitroResponse = new closure_135_0(closure_135_1[6]).NitroResponse(response);
        c9 = 3;
        const obj17 = { value: nitroResponse, done: true };
        return obj17;
      }
    } catch (tmp70) {
      c9 = tmp;
      throw tmp70;
    }
  }
};
const set = new Set([301, 302, 303, 307, 308]);

export function nitroFetch(url, request) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
