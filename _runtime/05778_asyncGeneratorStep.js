// === Module 5778: asyncGeneratorStep ===

// Module 5778 (asyncGeneratorStep)
function asyncGeneratorStep(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  try {
    const iter = arg0[arg5](arg6);
    const value = iter.value;
    if (iter.done) {
      arg1(value);
    } else {
      const resolved = Promise.resolve(value);
      resolved.then(arg3, arg4);
    }
  } catch (tmp13) {
    arg2(tmp13);
  }
}

export default function _asyncToGenerator(arg0) {
  closure_0 = arg0;
  return function() {
    const self = this;
    closure_1 = arguments;
    return new Promise((arg0, arg1) => {
      const _self = arg0;
      closure_1 = arg1;
      function _next(arg0) {
        callback(closure_2, callback, closure_1, _next, _throw, "next", arg0);
      }
      function _throw(arg0) {
        callback(closure_2, callback, closure_1, _next, _throw, "throw", arg0);
      }
      const applyResult = self.apply(_self, closure_1);
      closure_2 = applyResult;
      _self(applyResult, arg0, arg1, _next, _throw, "next", undefined);
    });
  };
};