// === Module 898: disable ===

// Module 898 (disable)
import _mod895 from "module_895" /* 895 */;

let closure_1, closure_3, dependencyMap;

const items = [ReferenceError, TypeError, RangeError];
let c3 = false;

export const disable = function disable() {
  c3 = false;
  _mod895._37 = null;
  _mod895._87 = null;
};
export const enable = function enable(arg0) {
  let obj = arg0;
  function onUnhandled(arg0) {
    let allRejections = obj.allRejections;
    if (!allRejections) {
      let whitelist = obj.whitelist;
      const error = closure_3[arg0].error;
      if (!whitelist) {
        whitelist = items;
      }
      allRejections = whitelist.some((item) => closure_0 instanceof item);
    }
    if (allRejections) {
      closure_2 = tmp4 + 1;
      closure_3[arg0].displayId = +closure_2;
      closure_3[arg0].logged = true;
      if (obj.onUnhandled) {
        obj.onUnhandled(closure_3[arg0].displayId, closure_3[arg0].error);
      } else {
        const error2 = closure_3[arg0].error;
        const _console = console;
        console.warn(`Possible Unhandled Promise Rejection (id: ${tmp2[arg0].displayId}):`);
        let tmp7 = error2;
        if (tmp7) {
          tmp7 = error2.stack || error2;
        }
        const text = `${tmp7}`;
        const parts = `${tmp7}`.split("\n");
        const item = parts.forEach((item) => {
          console.warn(`  ${item}`);
        });
      }
    }
  }
  if (!arg0) {
    obj = {};
  }
  let tmp = closure_3;
  if (tmp) {
    closure_3 = false;
    const tmp2 = obj;
    const tmp3 = dependencyMap;
    const tmp4 = null;
    obj(895)._37 = null;
    obj(895)._87 = null;
  }
  dependencyMap = 0;
  let closure_2 = 0;
  closure_3 = {};
  obj(895)._37 = (_65) => {
    const tmp = 2 === _65._65 && closure_3[_65._51];
    if (tmp) {
      if (closure_3[_65._51].logged) {
        const _51 = _65._51;
        if (closure_3[_51].logged) {
          if (obj.onHandled) {
            obj.onHandled(closure_3[_51].displayId, closure_3[_51].error);
          } else if (!closure_3[_51].onUnhandled) {
            const _console = console;
            console.warn(`Promise Rejection Handled (id: ${tmp3[_51].displayId}):`);
            const _console2 = console;
            console.warn(`  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ${tmp3[_51].displayId}.`);
          }
        }
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3[_65._51].timeout);
      }
      delete closure_3[_65._51];
    }
  };
  obj(895)._87 = (_40, error) => {
    let _setTimeout;
    let bindResult;
    let num;
    if (0 === _40._40) {
      closure_1 = tmp3 + 1;
      _40._51 = +closure_1;
      const _51 = _40._51;
      obj = { displayId: null, error, timeout: _setTimeout(bindResult, num), logged: false };
      _setTimeout = setTimeout;
      let closure_0 = error;
      num = 2000;
      bindResult = onUnhandled.bind(null, _40._51);
      if (items.some((item) => closure_0 instanceof item)) {
        num = 100;
      }
      closure_3[_51] = obj;
    }
  };
};