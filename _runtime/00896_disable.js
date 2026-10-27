// _runtime/00896_disable.js
import _mod177 from "metro/00177__.js";

require = arg1;
let dependencyMap = arg6;
const items = [ReferenceError, TypeError, RangeError];
let c3 = false;

export const disable = function disable() {
  c3 = false;
  _mod177._B = null;
  _mod177._C = null;
};
export const enable = function enable(arg0) {
  let obj = arg0;
  function onUnhandled(arg0) {
    let allRejections = obj.allRejections;
    if (!allRejections) {
      let whitelist = obj.whitelist;
      if (!whitelist) {
        whitelist = items;
      }
      let error = dependencyMap[arg0].error;
      allRejections = whitelist.some((item) => closure_0 instanceof item);
    }
    if (allRejections) {
      closure_2 = tmp4 + 1;
      dependencyMap[arg0].displayId = +closure_2;
      dependencyMap[arg0].logged = true;
      if (obj.onUnhandled) {
        obj.onUnhandled(dependencyMap[arg0].displayId, dependencyMap[arg0].error);
      } else {
        error = dependencyMap[arg0].error;
        const _console = console;
        console.warn(`Possible Unhandled Promise Rejection (id: ${tmp2[arg0].displayId}):`);
        let tmp7 = error;
        if (error) {
          tmp7 = error.stack || error;
          const tmp8 = error.stack || error;
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
  if (dependencyMap) {
    dependencyMap = false;
    obj(177)._B = null;
    obj(177)._C = null;
  }
  closure_2 = 0;
  dependencyMap = {};
  obj(177)._B = (_y) => {
    let _E = _y;
    let tmp3 = 2 === _y._y;
    if (tmp3) {
      tmp3 = dependencyMap[_E._E];
    }
    if (tmp3) {
      if (dependencyMap[_E._E].logged) {
        const _E2 = _E._E;
        if (dependencyMap[_E2].logged) {
          if (obj.onHandled) {
            obj.onHandled(dependencyMap[_E2].displayId, dependencyMap[_E2].error);
          } else if (!dependencyMap[_E2].onUnhandled) {
            const _console = console;
            console.warn(`Promise Rejection Handled (id: ${tmp5[_E2].displayId}):`);
            const _console2 = console;
            console.warn(
              `  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ${tmp5[_E2].displayId}.`,
            );
          }
        }
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(dependencyMap[_E._E].timeout);
      }
      _E = _E._E;
      delete tmp2[tmp];
    }
  };
  obj(177)._C = (_x, error) => {
    if (0 === _x._x) {
      closure_1 = tmp3 + 1;
      _x._E = +closure_1;
      obj = { displayId: null, error, timeout: null, logged: false };
      closure_0 = error;
      let num = 2000;
      if (items.some((item) => closure_0 instanceof item)) {
        num = 100;
      }
      obj.timeout = setTimeout(onUnhandled.bind(null, _x._E), num);
      closure_3[_x._E] = obj;
      const bindResult = onUnhandled.bind(null, _x._E);
    }
  };
};
