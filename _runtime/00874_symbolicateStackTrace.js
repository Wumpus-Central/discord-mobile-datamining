// === Module 874: symbolicateStackTrace ===

// Module 874 (symbolicateStackTrace)
import _mod215 from "module_215" /* 215 */;
import getDevServer from "getDevServer" /* 875 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let _fetch;

let obj = function _symbolicateStackTrace() {
  obj = _asyncToGenerator(async (arg0, extraData) => {
    let closure_3;
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj4;
      const obj10 = getDevServer;
      const defaultResult = obj10.default();
      const tmp18 = closure_0;
      if (!defaultResult.bundleLoadedFromServer) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Bundle was not loaded from Metro.");
        throw error;
      }
      _fetch = _fetch.fetch;
      fetch = _fetch;
      if (_fetch == null) {
        fetch = _mod215.fetch;
      }
      const request = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj4) };
      const _JSON = JSON;
      const text = `${tmp22.url}symbolicate`;
      obj4 = { stack: tmp18, extraData };
      await fetch(`${tmp22.url}symbolicate`, request);
      closure_0 = value;
      await closure_0.json();
      return value;
    })();
  });
  return obj(...arguments);
};

export default function symbolicateStackTrace(arg0, arg1) {
  return obj(...arguments);
};