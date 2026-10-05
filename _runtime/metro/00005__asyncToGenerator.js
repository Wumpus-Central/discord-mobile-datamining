// === Module 5: _asyncToGenerator ===

// Module 5 (_asyncToGenerator)
let _self;

function asyncGeneratorStep(arg0, fn, fn2, arg3, arg4, arg5, arg6) {
  try {
    const iter = arg0[arg5](arg6);
    const value = iter.value;
    if (iter.done) {
      fn(value);
    } else {
      const resolved = Promise.resolve(value);
      resolved.then(arg3, arg4);
    }
  } catch (tmp12) {
    fn2(tmp12);
  }
}

export default function _asyncToGenerator(arg0) {
  let closure_0 = arg0;
  return function() {
    const self = this;
    let closure_1 = arguments;
    const promise = new Promise((arg0, arg1) => {
      _self = arg0;
      closure_1 = arg1;
      function _next(arg0) {
        _self(applyResult, closure_0, closure_1, _next, _throw, "next", arg0);
      }
      function _throw(arg0) {
        _self(applyResult, closure_0, closure_1, _next, _throw, "throw", arg0);
      }
      const applyResult = _self.apply(self, closure_1);
      asyncGeneratorStep(applyResult, arg0, arg1, _next, _throw, "next", undefined);
    });
    return promise;
  };
};