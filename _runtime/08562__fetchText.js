// _runtime/08562__fetchText.js
import Buffer from "01253_Buffer.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = async function _fetchText(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else if (!_require) {
        c1 = 3;
        obj = { value: null, done: true };
        return obj;
      } else if (_require.startsWith("data:image/svg+xml;utf8")) {
        let tmp4 = (function dataUriToXml(arg0) {
          try {
            const _decodeURIComponent = decodeURIComponent;
            const parts = decodeURIComponent(arg0).split(",");
            const substr = parts.slice(1);
            return substr.join(",");
          } catch (tmp3) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Decoding " + tmp + " failed with error: " + tmp3);
            throw error;
          }
        })(_require);
      } else if (_require.startsWith("data:image/svg+xml;base64")) {
        tmp4 = decodeBase64Image(_require);
      } else {
        tmp4 = (function fetchUriData(arg0) {
          const self = this;
          const apply = closure_1_5.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(_require);
      }
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
let closure_5 = async function _fetchUriData() {
  closure_129_0 = closure_0;
  const _fetch = fetch;
  await fetch(closure_0);
  closure_129_1 = value;
  if (!closure_129_1.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Fetching " + closure_129_0 + " failed with status " + closure_129_1.status);
    throw error;
  }
  await closure_129_1.text();
  return value;
};
const Platform = fn(17).Platform;
function decodeBase64Image(arg0) {
  const str = decodeURIComponent(arg0);
  const parts = decodeURIComponent(arg0).split(";")[1].split(",");
  const substr = parts.slice(1);
  const joined = substr.join(",");
  const _Buffer = Buffer.Buffer;
  const str2 = decodeURIComponent(arg0).split(";")[1];
  return _Buffer.from(joined, parts[0]).toString("utf-8");
}

export const fetchText = function fetchText(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
