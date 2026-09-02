// === Module 9011: normalizeSvgXml ===

// Module 9011 (normalizeSvgXml)
import set from "set" /* 2 */;

function normalizeSvgXml(str) {
  const match = str.match(closure_2);
  let first;
  if (match != null) {
    first = match[0];
  }
  if (null != first) {
    if (!regex.test(first)) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const regExp = new RegExp("(?:^|\\s)" + "width" + "\\s*=\\s*\"(\\d+(?:\\.\\d+)?)(?:px)?\"", "i");
      const match1 = first.match(regExp);
      let tmp9;
      if (match1 != null) {
        tmp9 = match1[1];
      }
      if (null != tmp9) {
        const _Number2 = Number;
        let _NaN = Number.parseFloat(tmp9);
      } else {
        const _Number = Number;
        _NaN = Number.NaN;
      }
      const _Number3 = Number;
      let replaced = str;
      if (Number.isFinite(_NaN)) {
        replaced = str;
        if (_NaN > 0) {
          const _RegExp2 = RegExp;
          const _HermesInternal3 = HermesInternal;
          const regExp1 = new RegExp("(?:^|\\s)" + "height" + "\\s*=\\s*\"(\\d+(?:\\.\\d+)?)(?:px)?\"", "i");
          const match2 = first.match(regExp1);
          let tmp12;
          if (match2 != null) {
            tmp12 = match2[1];
          }
          if (null != tmp12) {
            const _Number5 = Number;
            let _NaN2 = Number.parseFloat(tmp12);
          } else {
            const _Number4 = Number;
            _NaN2 = Number.NaN;
          }
          replaced = str;
          if (_NaN === _NaN2) {
            const _HermesInternal2 = HermesInternal;
            replaced = str.replace(first, first.replace(/<svg\b/i, "<svg viewBox=\"0 0 " + tmp10 + " " + tmp10 + "\""));
          }
        }
      }
      return replaced;
    }
  }
  return str;
}
const re2 = /<svg\b[^>]*>/i;
const re3 = /\bviewBox\s*=/i;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let result = set.fileFinishedImporting("modules/badges/native/BadgeIconSvg.tsx");

export { normalizeSvgXml };
export const getCachedSvgXml = function getCachedSvgXml(complex_icon_animated_url) {
  return map.get(complex_icon_animated_url);
};
export const loadSvgXml = function loadSvgXml(arg0, signal) {
  closure_0 = arg0;
  let value = map.get(arg0);
  if (null != value) {
    let resolved = Promise.resolve(value);
  } else {
    let _Date = Date;
    let timestamp = Date.now();
    let num = map2.get(arg0);
    if (num == null) {
      num = 0;
    }
    if (timestamp < num) {
      let _Error = Error;
      let _HermesInternal = HermesInternal;
      error = new Error("badge icon fetch is backed off: " + arg0);
      resolved = Promise.reject(error);
    } else {
      const _fetch = fetch;
      const obj = { signal: null };
      obj[0] = signal;
      const response = fetch(arg0, obj);
      const nextPromise = response.then((ok) => {
        if (ok.ok) {
          return ok.text();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon fetch failed with " + ok.status + ": " + closure_0);
          throw error;
        }
      });
      resolved = response.then((ok) => {
        if (ok.ok) {
          return ok.text();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon fetch failed with " + ok.status + ": " + closure_0);
          throw error;
        }
      }).then((arg0) => {
        if (closure_1_2.test(arg0)) {
          const tmp8 = closure_1_7(arg0);
          const result = closure_1_4.set(closure_0, tmp8);
          const value = closure_1_5.get(closure_0);
          if (value != null) {
            value.succeed();
          }
          closure_1_6.delete(closure_0);
          return tmp8;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon response was not an svg: " + closure_0);
          throw error;
        }
      }).catch((name) => {
        if ("AbortError" === name.name) {
          throw name;
        } else {
          let tmp3 = closure_1_5.get(callback);
          if (tmp3 == null) {
            tmp3 = callback(closure_1_1[0]);
            const result = 10 * callback(closure_1_1[1]).Millis.SECOND;
            tmp3 = new tmp3(result, callback(closure_1_1[1]).Millis.HOUR, true);
          }
          const result1 = closure_1_5.set(tmp13, tmp3);
          const _Date = Date;
          const timestamp = Date.now();
          const result2 = closure_1_6.set(tmp13, timestamp + tmp3.fail());
          throw name;
        }
      });
      const nextPromise1 = response.then((ok) => {
        if (ok.ok) {
          return ok.text();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon fetch failed with " + ok.status + ": " + closure_0);
          throw error;
        }
      }).then((arg0) => {
        if (closure_1_2.test(arg0)) {
          const tmp8 = closure_1_7(arg0);
          const result = closure_1_4.set(closure_0, tmp8);
          const value = closure_1_5.get(closure_0);
          if (value != null) {
            value.succeed();
          }
          closure_1_6.delete(closure_0);
          return tmp8;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon response was not an svg: " + closure_0);
          throw error;
        }
      });
    }
  }
  return resolved;
};