// === Module 700: MAX_BAGGAGE_STRING_LENGTH ===

// Module 700 (MAX_BAGGAGE_STRING_LENGTH)
import _mod688 from "module_688" /* 688 */;
import _mod692 from "module_692" /* 692 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = "sentry-";
const tmp2 = /^sentry-/;
const re3 = tmp2;

export const MAX_BAGGAGE_STRING_LENGTH = 8192;
export const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
export const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = tmp2;
export const baggageHeaderToDynamicSamplingContext = function baggageHeaderToDynamicSamplingContext(arr) {
  if (arr) {
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      let reduced = arr.reduce((acc, item) => {
        closure_0 = acc;
        const parts = item.split(",");
        const mapped = parts.map((arr) => {
          const index = arr.indexOf("=");
          if (-1 === index) {
            let items = [];
          } else {
            const items1 = [arr.slice(0, index), arr.slice(index + 1)];
            items = items1.map((item) => {
              try {
                const _decodeURIComponent = decodeURIComponent;
                return decodeURIComponent(item.trim());
              } catch (err) {
              }
            });
          }
          return items;
        });
        const entries = Object.entries(mapped.reduce((acc, item) => {
          [tmp, tmp2] = item;
          let tmp3 = tmp;
          if (tmp) {
            tmp3 = tmp2;
          }
          if (tmp3) {
            acc[tmp] = tmp2;
          }
          return acc;
        }, {}));
        item = entries.forEach((item) => {
          [tmp, tmp2] = item;
          closure_0[tmp] = tmp2;
        });
        return acc;
      }, {});
    } else {
      let parts = arr.split(",");
      let mapped = parts.map((arr) => {
        const index = arr.indexOf("=");
        if (-1 === index) {
          let items = [];
        } else {
          const items1 = [arr.slice(0, index), arr.slice(index + 1)];
          items = items1.map((item) => {
            try {
              const _decodeURIComponent = decodeURIComponent;
              return decodeURIComponent(item.trim());
            } catch (err) {
            }
          });
        }
        return items;
      });
      reduced = mapped.reduce((acc, item) => {
        [tmp, tmp2] = item;
        let tmp3 = tmp;
        if (tmp) {
          tmp3 = tmp2;
        }
        if (tmp3) {
          acc[tmp] = tmp2;
        }
        return acc;
      }, {});
    }
    obj = _mod692;
  }
  if (undefined) {
    const _Object = Object;
    let entries = Object.entries(tmp);
    const reduced1 = entries.reduce((acc, item) => {
      [str, tmp] = item;
      if (str.match(closure_1_3)) {
        acc[str.slice(7)] = tmp;
      }
      return acc;
    }, {});
    const _Object2 = Object;
    let tmp10;
    if (Object.keys(reduced1).length > 0) {
      tmp10 = reduced1;
    }
    return tmp10;
  }
};
export const dynamicSamplingContextToSentryBaggageHeader = function dynamicSamplingContextToSentryBaggageHeader(arg0) {
  if (arg0) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const reduced = entries.reduce((acc, item) => {
      [tmp, tmp2] = item;
      if (tmp2) {
        const _HermesInternal = HermesInternal;
        acc["" + closure_1_2 + tmp] = tmp2;
      }
      return acc;
    }, {});
    const _Object2 = Object;
    let reduced1;
    if (0 !== Object.keys(reduced).length) {
      const _Object3 = Object;
      const entries1 = Object.entries(reduced);
      reduced1 = entries1.reduce((acc, item, index) => {
        [tmp, tmp2] = item;
        const combined = "" + encodeURIComponent(tmp) + "=" + encodeURIComponent(tmp2);
        let combined1 = combined;
        if (0 !== index) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + acc + "," + combined;
        }
        if (combined1.length > 8192) {
          combined1 = acc;
          if (_mod688.DEBUG_BUILD) {
            const debug = tmp5(tmp6[2]).debug;
            const _HermesInternal2 = HermesInternal;
            debug.warn("Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.");
            combined1 = acc;
          }
          tmp5 = require;
          tmp6 = dependencyMap;
        }
        return combined1;
      }, "");
    }
    return reduced1;
  }
};
export const objectToBaggageHeader = function objectToBaggageHeader(arg0) {
  if (0 !== Object.keys(arg0).length) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    return entries.reduce((acc, item, index) => {
      [tmp, tmp2] = item;
      const combined = "" + encodeURIComponent(tmp) + "=" + encodeURIComponent(tmp2);
      let combined1 = combined;
      if (0 !== index) {
        const _HermesInternal = HermesInternal;
        combined1 = "" + acc + "," + combined;
      }
      if (combined1.length > 8192) {
        combined1 = acc;
        if (_mod688.DEBUG_BUILD) {
          const debug = tmp5(tmp6[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug.warn("Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.");
          combined1 = acc;
        }
        tmp5 = require;
        tmp6 = dependencyMap;
      }
      return combined1;
    }, "");
  }
};
export const parseBaggageHeader = function parseBaggageHeader(arr) {
  if (arr) {
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      let reduced = arr.reduce((acc, item) => {
        closure_0 = acc;
        const parts = item.split(",");
        const mapped = parts.map((arr) => {
          const index = arr.indexOf("=");
          if (-1 === index) {
            let items = [];
          } else {
            const items1 = [arr.slice(0, index), arr.slice(index + 1)];
            items = items1.map((item) => {
              try {
                const _decodeURIComponent = decodeURIComponent;
                return decodeURIComponent(item.trim());
              } catch (err) {
              }
            });
          }
          return items;
        });
        const entries = Object.entries(mapped.reduce((acc, item) => {
          [tmp, tmp2] = item;
          let tmp3 = tmp;
          if (tmp) {
            tmp3 = tmp2;
          }
          if (tmp3) {
            acc[tmp] = tmp2;
          }
          return acc;
        }, {}));
        item = entries.forEach((item) => {
          [tmp, tmp2] = item;
          closure_0[tmp] = tmp2;
        });
        return acc;
      }, {});
    } else {
      const parts = arr.split(",");
      const mapped = parts.map((arr) => {
        const index = arr.indexOf("=");
        if (-1 === index) {
          let items = [];
        } else {
          const items1 = [arr.slice(0, index), arr.slice(index + 1)];
          items = items1.map((item) => {
            try {
              const _decodeURIComponent = decodeURIComponent;
              return decodeURIComponent(item.trim());
            } catch (err) {
            }
          });
        }
        return items;
      });
      reduced = mapped.reduce((acc, item) => {
        [tmp, tmp2] = item;
        let tmp3 = tmp;
        if (tmp) {
          tmp3 = tmp2;
        }
        if (tmp3) {
          acc[tmp] = tmp2;
        }
        return acc;
      }, {});
    }
    return reduced;
  }
};