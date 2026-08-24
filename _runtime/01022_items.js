// === Module 1022: items ===

// Module 1022 (items)
import noop from "noop" /* 1019 */;

require = arg1;
let dependencyMap = arg6;
const items = [ReferenceError, TypeError, RangeError];
let c3 = false;
arg5.disable = function disable() {
  c3 = false;
  noop._37 = null;
  noop._87 = null;
};
arg5.enable = function enable(arg0) {
  let obj = arg0;
  obj = arg0;
  function onUnhandled(arg0) {
    let allRejections = error.allRejections;
    if (!allRejections) {
      let whitelist = obj.whitelist;
      if (!whitelist) {
        whitelist = c2;
      }
      error = dependencyMap[arg0].error;
      allRejections = whitelist.some((arg0) => closure_0 instanceof arg0);
    }
    if (allRejections) {
      closure_2 = tmp4 + 1;
      dependencyMap[arg0].displayId = +closure_2;
      dependencyMap[arg0].logged = true;
      if (obj.onUnhandled) {
        obj.onUnhandled(tmp2[arg0].displayId, tmp2[arg0].error);
      } else {
        error = tmp2[arg0].error;
        const _console = console;
        console.warn(`Possible Unhandled Promise Rejection (id: ${tmp2[arg0].displayId}):`);
        let tmp7 = error;
        if (error) {
          tmp7 = error.stack || error;
          const tmp8 = error.stack || error;
        }
        const text = `${tmp7}`;
        const parts = `${tmp7}`.split("\n");
        const item = parts.forEach((arg0) => {
          console.warn(`  ${arg0}`);
        });
      }
    }
  }
  if (!arg0) {
    obj = {};
  }
  if (closure_3) {
    closure_3 = false;
    obj(1019)._37 = null;
    obj(1019)._87 = null;
  }
  closure_3 = true;
  dependencyMap = 0;
  c2 = 0;
  closure_3 = {};
  obj(1019)._37 = (_65) => {
    let _51 = _65;
    let tmp3 = 2 === _65._65;
    if (tmp3) {
      tmp3 = dependencyMap[_51._51];
    }
    if (tmp3) {
      if (dependencyMap[_51._51].logged) {
        const _512 = _51._51;
        if (tmp5[_512].logged) {
          if (obj.onHandled) {
            obj.onHandled(tmp5[_512].displayId, tmp5[_512].error);
          } else if (!tmp5[_512].onUnhandled) {
            const _console = console;
            console.warn(`Promise Rejection Handled (id: ${tmp5[_512].displayId}):`);
            const _console2 = console;
            console.warn(`  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ${tmp5[_512].displayId}.`);
          }
        }
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp5[_51._51].timeout);
      }
      _51 = _51._51;
      delete tmp2[tmp];
    }
  };
  obj(1019)._87 = (_40) => {
    if (0 === _40._40) {
      closure_1 = tmp3 + 1;
      _40._51 = +closure_1;
      obj = { displayId: null, error: null, timeout: null, logged: false };
      obj[1] = arg1;
      closure_0 = arg1;
      let num = 2000;
      if (c2.some((arg0) => closure_0 instanceof arg0)) {
        num = 100;
      }
      obj[2] = setTimeout(onUnhandled.bind(null, _40._51), num);
      closure_3[_40._51] = obj;
      const bindResult = onUnhandled.bind(null, _40._51);
      const tmp4 = closure_3;
    }
  };
};