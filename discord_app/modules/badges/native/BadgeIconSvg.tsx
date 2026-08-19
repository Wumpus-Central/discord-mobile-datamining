// discord_app/modules/badges/native/BadgeIconSvg.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

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
let result = obj132.fileFinishedImporting("modules/badges/native/BadgeIconSvg.tsx");

export { normalizeSvgXml };
export const getCachedSvgXml = function getCachedSvgXml(abortController) {
  return map.get(abortController);
};
export const loadSvgXml = function loadSvgXml(abortController, signal) {
  closure_0 = abortController;
  let value = map.get(abortController);
  if (null != value) {
    let resolved = Promise.resolve(value);
  } else {
    let _Date = Date;
    let timestamp = Date.now();
    let num = map2.get(abortController);
    if (num == null) {
      num = 0;
    }
    if (timestamp < num) {
      let _Error = Error;
      let _HermesInternal = HermesInternal;
      error = new Error("badge icon fetch is backed off: " + abortController);
      resolved = Promise.reject(error);
    } else {
      const _fetch = fetch;
      const obj = { signal: null };
      obj[0] = signal;
      const response = fetch(abortController, obj);
      const nextPromise = response.then((result) => {
        if (result.ok) {
          return result.text();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon fetch failed with " + result.status + ": " + closure_0);
          throw error;
        }
      });
      resolved = response.then((result) => {
        if (result.ok) {
          return result.text();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon fetch failed with " + result.status + ": " + closure_0);
          throw error;
        }
      }).then((result) => {
        if (closure_1_2.test(result)) {
          const tmp8 = normalizeSvgXml(result);
          result = map.set(closure_0, tmp8);
          const value = map1.get(closure_0);
          if (value != null) {
            value.succeed();
          }
          map2.delete(closure_0);
          return tmp8;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon response was not an svg: " + closure_0);
          throw error;
        }
      }).catch((error) => {
        if ("AbortError" === error.name) {
          throw error;
        } else {
          let tmp3 = map1.get(abortController);
          if (tmp3 == null) {
            tmp3 = abortController(dependencyMap[0]);
            const result = 10 * abortController(dependencyMap[1]).Millis.SECOND;
            tmp3 = new tmp3(result, abortController(dependencyMap[1]).Millis.HOUR, true);
          }
          const result1 = map1.set(abortController, tmp3);
          const _Date = Date;
          const timestamp = Date.now();
          const result2 = map2.set(abortController, timestamp + tmp3.fail());
          throw error;
        }
      });
      const nextPromise1 = response.then((result) => {
        if (result.ok) {
          return result.text();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("badge icon fetch failed with " + result.status + ": " + closure_0);
          throw error;
        }
      }).then((result) => {
        if (closure_1_2.test(result)) {
          const tmp8 = normalizeSvgXml(result);
          result = map.set(closure_0, tmp8);
          const value = map1.get(closure_0);
          if (value != null) {
            value.succeed();
          }
          map2.delete(closure_0);
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