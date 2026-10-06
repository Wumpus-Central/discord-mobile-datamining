// _runtime/metro/08278__.js
import react_native from "../00017_react-native.js";
import Buffer from "../01263_Buffer.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";

let c1;

let obj = function _fetchText() {
  obj = _asyncToGenerator(async (arg0) => {
    function dataUriToXml(arg0) {
      try {
        const _decodeURIComponent = decodeURIComponent;
        const str = decodeURIComponent(arg0);
        const parts = str.split(",");
        const substr = parts.slice(1);
        return substr.join(",");
      } catch (tmp2) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Decoding " + arg0 + " failed with error: " + tmp2);
        throw error;
      }
    }
    function fetchUriData(arg0) {
      return closure_1_5(...arguments);
    }
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      const str3 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let tmp5 = null;
          if (closure_0) {
            let tmp3;
            let str = "data:image/svg+xml;utf8";
            if (closure_0.startsWith("data:image/svg+xml;utf8")) {
              tmp3 = dataUriToXml(closure_0);
            } else {
              const str2 = "data:image/svg+xml;base64";
              if (closure_0.startsWith("data:image/svg+xml;base64")) {
                tmp3 = decodeBase64Image(closure_0);
              } else {
                tmp3 = fetchUriData(closure_0);
              }
            }
            tmp5 = tmp3;
          }
          c1 = 3;
          obj = { value: tmp5, done: true };
          return obj;
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchUriData() {
  obj = _asyncToGenerator(async function (arg0) {
    let c2;
    let c3;
    let closure_0 = arg0;
    const _fetch = fetch;
    await fetch(closure_0);
    let closure_1 = value;
    if (!closure_1.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Fetching " + closure_0 + " failed with status " + closure_1.status);
      throw error;
    }
    await closure_1.text();
    return value;
  });
  return obj(...arguments);
};
const Platform = react_native.Platform;
function decodeBase64Image(arg0) {
  const str = decodeURIComponent(arg0);
  const str2 = str.split(";")[1];
  const parts = str2.split(",");
  const first = parts[0];
  const substr = parts.slice(1);
  const joined = substr.join(",");
  const _Buffer = Buffer.Buffer;
  const str3 = _Buffer.from(joined, first);
  return str3.toString("utf-8");
}

export const fetchText = function fetchText(arg0) {
  return obj(...arguments);
};
