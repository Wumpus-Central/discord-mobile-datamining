// === Module 835: baggageHeaderToDynamicSamplingContext ===

// Module 835 (baggageHeaderToDynamicSamplingContext)
import isInstanceOf from "isInstanceOf" /* 827 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = "sentry-";
const tmp2 = /^sentry-/;
const re3 = tmp2;
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
      let reduced = arr.reduce((acc, item, index) => {
        closure_0 = acc;
        const parts = item.split(",");
        const mapped = parts.map((item, index) => {
          index = item.indexOf("=");
          if (-1 === index) {
            let items = [];
          } else {
            const items1 = [item.slice(0, index), item.slice(index + 1)];
            items = items1.map((item, index) => {
              try {
                const _decodeURIComponent = decodeURIComponent;
                return decodeURIComponent(item.trim());
              } catch (err) {
              }
            });
          }
          return items;
        });
        const entries = Object.entries(mapped.reduce((acc, item, index) => {
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
        item = entries.forEach((item, index) => {
          [tmp, tmp2] = item;
          closure_0[tmp] = tmp2;
        });
        return acc;
      }, {});
    } else {
      let parts = arr.split(",");
      let mapped = parts.map((item, index) => {
        index = item.indexOf("=");
        if (-1 === index) {
          let items = [];
        } else {
          const items1 = [item.slice(0, index), item.slice(index + 1)];
          items = items1.map((item, index) => {
            try {
              const _decodeURIComponent = decodeURIComponent;
              return decodeURIComponent(item.trim());
            } catch (err) {
            }
          });
        }
        return items;
      });
      reduced = mapped.reduce((acc, item, index) => {
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
    obj = isInstanceOf;
  }
  if (undefined) {
    const _Object = Object;
    let entries = Object.entries(tmp);
    const reduced1 = entries.reduce((acc, item, index) => {
      [str, tmp] = item;
      if (str.match(closure_3)) {
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
arg5.dynamicSamplingContextToSentryBaggageHeader = function dynamicSamplingContextToSentryBaggageHeader(arg0) {
  if (arg0) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const reduced = entries.reduce((acc, item, index) => {
      [tmp, tmp2] = item;
      if (tmp2) {
        const _HermesInternal = HermesInternal;
        acc["" + closure_2 + tmp] = tmp2;
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
          if (callback(table[1]).DEBUG_BUILD) {
            const debug = callback(table[2]).debug;
            const _HermesInternal2 = HermesInternal;
            debug.warn("Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.");
            combined1 = acc;
          }
        }
        return combined1;
      }, "");
    }
    return reduced1;
  }
};
arg5.objectToBaggageHeader = function objectToBaggageHeader(arg0) {
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
        if (callback(table[1]).DEBUG_BUILD) {
          const debug = callback(table[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug.warn("Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.");
          combined1 = acc;
        }
      }
      return combined1;
    }, "");
  }
};
arg5.parseBaggageHeader = function parseBaggageHeader(arr) {
  if (arr) {
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      let reduced = arr.reduce((acc, item, index) => {
        closure_0 = acc;
        const parts = item.split(",");
        const mapped = parts.map((item, index) => {
          index = item.indexOf("=");
          if (-1 === index) {
            let items = [];
          } else {
            const items1 = [item.slice(0, index), item.slice(index + 1)];
            items = items1.map((item, index) => {
              try {
                const _decodeURIComponent = decodeURIComponent;
                return decodeURIComponent(item.trim());
              } catch (err) {
              }
            });
          }
          return items;
        });
        const entries = Object.entries(mapped.reduce((acc, item, index) => {
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
        item = entries.forEach((item, index) => {
          [tmp, tmp2] = item;
          closure_0[tmp] = tmp2;
        });
        return acc;
      }, {});
    } else {
      const parts = arr.split(",");
      const mapped = parts.map((item, index) => {
        index = item.indexOf("=");
        if (-1 === index) {
          let items = [];
        } else {
          const items1 = [item.slice(0, index), item.slice(index + 1)];
          items = items1.map((item, index) => {
            try {
              const _decodeURIComponent = decodeURIComponent;
              return decodeURIComponent(item.trim());
            } catch (err) {
            }
          });
        }
        return items;
      });
      reduced = mapped.reduce((acc, item, index) => {
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