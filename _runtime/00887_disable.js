// _runtime/00887_disable.js
import _mod884 from "metro/00884__.js";

require = arg1;
let dependencyMap = arg6;
const items = [ReferenceError, TypeError, RangeError];
let c3 = false;

export const disable = function disable() {
  c3 = false;
  _mod884._37 = null;
  _mod884._87 = null;
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
    obj(884)._37 = null;
    obj(884)._87 = null;
  }
  closure_2 = 0;
  dependencyMap = {};
  obj(884)._37 = (_65) => {
    let _51 = _65;
    let tmp3 = 2 === _65._65;
    if (tmp3) {
      tmp3 = dependencyMap[_51._51];
    }
    if (tmp3) {
      if (dependencyMap[_51._51].logged) {
        const _512 = _51._51;
        if (dependencyMap[_512].logged) {
          if (obj.onHandled) {
            obj.onHandled(dependencyMap[_512].displayId, dependencyMap[_512].error);
          } else if (!dependencyMap[_512].onUnhandled) {
            const _console = console;
            console.warn(`Promise Rejection Handled (id: ${tmp5[_512].displayId}):`);
            const _console2 = console;
            console.warn(
              `  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ${tmp5[_512].displayId}.`,
            );
          }
        }
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(dependencyMap[_51._51].timeout);
      }
      _51 = _51._51;
      delete tmp2[tmp];
    }
  };
  obj(884)._87 = (_40, error) => {
    if (0 === _40._40) {
      closure_1 = tmp3 + 1;
      _40._51 = +closure_1;
      obj = { displayId: null, error, timeout: null, logged: false };
      closure_0 = error;
      let num = 2000;
      if (items.some((item) => closure_0 instanceof item)) {
        num = 100;
      }
      obj.timeout = setTimeout(onUnhandled.bind(null, _40._51), num);
      closure_3[_40._51] = obj;
      const bindResult = onUnhandled.bind(null, _40._51);
    }
  };
};
