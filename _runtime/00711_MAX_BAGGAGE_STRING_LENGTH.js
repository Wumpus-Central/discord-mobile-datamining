// _runtime/00711_MAX_BAGGAGE_STRING_LENGTH.js
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import _mod703 from "metro/00703__.js";

const f81853 = (acc, item) => {
  let closure_0 = acc;
  const parts = item.split(",");
  const mapped = parts.map((arr) => {
    let items;
    const index = arr.indexOf("=");
    if (-1 === index) {
      items = [];
    } else {
      const items1 = [arr.slice(0, index), arr.slice(index + 1)];
      items = items1.map((item) => {
        try {
          const _decodeURIComponent = decodeURIComponent;
          return decodeURIComponent(item.trim());
        } catch (err) {}
      });
    }
    return items;
  });
  const entries = Object.entries(
    mapped.reduce((acc, item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const tmp3 = tmp && tmp2;
      if (tmp3) {
        acc[tmp] = tmp2;
      }
      return acc;
    }, {}),
  );
  item = entries.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    acc[tmp] = tmp2;
  });
  return acc;
};
const f81856 = (acc, item, index) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const encodeURIComponentResult = encodeURIComponent(tmp);
  const combined = "" + encodeURIComponentResult + "=" + encodeURIComponent(tmp2);
  let combined1 = combined;
  if (0 !== index) {
    const _HermesInternal = HermesInternal;
    combined1 = "" + acc + "," + combined;
  }
  if (combined1.length > 8192) {
    combined1 = acc;
    if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      const _HermesInternal2 = HermesInternal;
      debug.warn(
        "Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.",
      );
      combined1 = acc;
    }
  }
  return combined1;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = "sentry-";
let tmp2 = /^sentry-/;
const re3 = tmp2;

export const MAX_BAGGAGE_STRING_LENGTH = 8192;
export const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
export const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = tmp2;
export const baggageHeaderToDynamicSamplingContext = function baggageHeaderToDynamicSamplingContext(arr) {
  let tmp;
  if (arr) {
    const obj = _mod703;
    if (obj.isString(arr)) {
      let reduced;
      const _Array2 = Array;
      if (Array.isArray(arr)) {
        reduced = arr.reduce(f81853, {});
      } else {
        const str = ",";
        let parts = arr.split(",");
        let mapped = parts.map((arr) => {
          let items;
          const index = arr.indexOf("=");
          if (-1 === index) {
            items = [];
          } else {
            const items1 = [arr.slice(0, index), arr.slice(index + 1)];
            items = items1.map((item) => {
              try {
                const _decodeURIComponent = decodeURIComponent;
                return decodeURIComponent(item.trim());
              } catch (err) {}
            });
          }
          return items;
        });
        reduced = mapped.reduce((acc, item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const tmp3 = tmp && tmp2;
          if (tmp3) {
            acc[tmp] = tmp2;
          }
          return acc;
        }, {});
      }
      tmp = reduced;
    } else {
      const _Array = Array;
    }
  }
  if (tmp) {
    const _Object = Object;
    let entries = Object.entries(tmp);
    const reduced1 = entries.reduce((acc, item) => {
      let str;
      let tmp;
      [str, tmp] = item;
      if (str.match(closure_1_3)) {
        acc[str.slice(7)] = tmp;
      }
      return acc;
    }, {});
    const _Object2 = Object;
    let tmp9;
    if (Object.keys(reduced1).length > 0) {
      tmp9 = reduced1;
    }
    return tmp9;
  }
};
export const dynamicSamplingContextToSentryBaggageHeader = function dynamicSamplingContextToSentryBaggageHeader(
  dynamicSamplingContextFromSpan,
) {
  const tmp = dynamicSamplingContextFromSpan;
  if (tmp) {
    const tmp2 = globalThis;
    const _Object = Object;
    const entries = Object.entries(dynamicSamplingContextFromSpan);
    const reduced = entries.reduce((acc, item) => {
      let tmp;
      let tmp2;
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
      reduced1 = entries1.reduce(f81856, "");
    }
    return reduced1;
  }
};
export const objectToBaggageHeader = function objectToBaggageHeader(arg0) {
  if (0 !== Object.keys(arg0).length) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    return entries.reduce(f81856, "");
  }
};
export const parseBaggageHeader = function parseBaggageHeader(arr) {
  const tmp = arr;
  if (tmp) {
    let reduced;
    const obj = _mod703;
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      reduced = arr.reduce(f81853, {});
    } else {
      const parts = arr.split(",");
      const mapped = parts.map((arr) => {
        let items;
        const index = arr.indexOf("=");
        if (-1 === index) {
          items = [];
        } else {
          const items1 = [arr.slice(0, index), arr.slice(index + 1)];
          items = items1.map((item) => {
            try {
              const _decodeURIComponent = decodeURIComponent;
              return decodeURIComponent(item.trim());
            } catch (err) {}
          });
        }
        return items;
      });
      reduced = mapped.reduce((acc, item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        const tmp3 = tmp && tmp2;
        if (tmp3) {
          acc[tmp] = tmp2;
        }
        return acc;
      }, {});
    }
    return reduced;
  }
};
