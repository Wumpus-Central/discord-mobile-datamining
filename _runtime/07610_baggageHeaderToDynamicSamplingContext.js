// _runtime/07610_baggageHeaderToDynamicSamplingContext.js
import isInstanceOf from "07604_isInstanceOf.js";

require = arg1;
const dependencyMap = arg6;
let c2 = "sentry-";
const tmp2 = /^sentry-/;
const re3 = tmp2;
let c4 = 8192;
arg5.BAGGAGE_HEADER_NAME = "baggage";
arg5.MAX_BAGGAGE_STRING_LENGTH = 8192;
arg5.SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
arg5.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = tmp2;
arg5.baggageHeaderToDynamicSamplingContext = function baggageHeaderToDynamicSamplingContext(arr) {
  if (arr) {
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      let reduced = arr.reduce((arg0, str) => {
        closure_0 = arg0;
        let parts = str.split(",");
        const mapped = parts.map((str) => {
          const parts = str.split("=");
          return parts.map((str) => decodeURIComponent(str.trim()));
        });
        const entries = Object.entries(mapped.reduce((arg0, arg1) => {
          [tmp, tmp2] = arg1;
          let tmp3 = tmp;
          if (tmp) {
            tmp3 = tmp2;
          }
          if (tmp3) {
            arg0[tmp] = tmp2;
          }
          return arg0;
        }, {}));
        const item = entries.forEach((arg0) => {
          [tmp, tmp2] = arg0;
          closure_0[tmp] = tmp2;
        });
        return arg0;
      }, {});
    } else {
      let parts = arr.split(",");
      let mapped = parts.map((str) => {
        const parts = str.split("=");
        return parts.map((str) => decodeURIComponent(str.trim()));
      });
      reduced = mapped.reduce((arg0, arg1) => {
        [tmp, tmp2] = arg1;
        let tmp3 = tmp;
        if (tmp) {
          tmp3 = tmp2;
        }
        if (tmp3) {
          arg0[tmp] = tmp2;
        }
        return arg0;
      }, {});
    }
    obj = isInstanceOf;
  }
  if (undefined) {
    const _Object = Object;
    let entries = Object.entries(tmp);
    const reduced1 = entries.reduce((arg0, arg1) => {
      [str, tmp] = arg1;
      if (str.match(closure_3)) {
        arg0[str.slice(7)] = tmp;
      }
      return arg0;
    }, {});
    const _Object2 = Object;
    let tmp10;
    if (Object.keys(reduced1).length > 0) {
      tmp10 = reduced1;
    }
    return tmp10;
  }
};
arg5.dynamicSamplingContextToSentryBaggageHeader = function dynamicSamplingContextToSentryBaggageHeader(arg0) {
  if (arg0) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const reduced = entries.reduce((arg0, arg1) => {
      [tmp, tmp2] = arg1;
      if (tmp2) {
        const _HermesInternal = HermesInternal;
        arg0["" + closure_2 + tmp] = tmp2;
      }
      return arg0;
    }, {});
    const _Object2 = Object;
    let reduced1;
    if (0 !== Object.keys(reduced).length) {
      const _Object3 = Object;
      const entries1 = Object.entries(reduced);
      reduced1 = entries1.reduce((arg0, arg1, arg2) => {
        [tmp, tmp2] = arg1;
        const combined = "" + encodeURIComponent(tmp) + "=" + encodeURIComponent(tmp2);
        let combined1 = combined;
        if (0 !== arg2) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + arg0 + "," + combined;
        }
        if (combined1.length > closure_4) {
          combined1 = arg0;
          if (callback(table[1]).DEBUG_BUILD) {
            const logger = tmp5(tmp6[2]).logger;
            const _HermesInternal2 = HermesInternal;
            logger.warn("Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.");
            combined1 = arg0;
          }
          tmp5 = callback;
          tmp6 = table;
        }
        return combined1;
      }, "");
    }
    return reduced1;
  }
};
arg5.parseBaggageHeader = function parseBaggageHeader(arr) {
  if (arr) {
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      let reduced = arr.reduce((arg0, str) => {
        closure_0 = arg0;
        let parts = str.split(",");
        const mapped = parts.map((str) => {
          const parts = str.split("=");
          return parts.map((str) => decodeURIComponent(str.trim()));
        });
        const entries = Object.entries(mapped.reduce((arg0, arg1) => {
          [tmp, tmp2] = arg1;
          let tmp3 = tmp;
          if (tmp) {
            tmp3 = tmp2;
          }
          if (tmp3) {
            arg0[tmp] = tmp2;
          }
          return arg0;
        }, {}));
        const item = entries.forEach((arg0) => {
          [tmp, tmp2] = arg0;
          closure_0[tmp] = tmp2;
        });
        return arg0;
      }, {});
    } else {
      const parts = arr.split(",");
      const mapped = parts.map((str) => {
        const parts = str.split("=");
        return parts.map((str) => decodeURIComponent(str.trim()));
      });
      reduced = mapped.reduce((arg0, arg1) => {
        [tmp, tmp2] = arg1;
        let tmp3 = tmp;
        if (tmp) {
          tmp3 = tmp2;
        }
        if (tmp3) {
          arg0[tmp] = tmp2;
        }
        return arg0;
      }, {});
    }
    return reduced;
  }
};