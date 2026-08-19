// _runtime/01125_processEvent.js
const require = arg1;
const dependencyMap = arg6;
function processEvent(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  const callback = arg2;
  return callback(this, undefined, undefined, () => {
    let options = 0;
    c4 = 0;
    return (function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              let attachments = tmp2;
              let length;
              const exception = closure_1_0.exception;
              let values;
              if (null !== exception) {
                if (undefined !== exception) {
                  values = exception.values;
                }
              }
              if (values) {
                if (closure_1_0.exception.values.length > 0) {
                  options = closure_1_2.getOptions();
                  const beforeScreenshot = options.beforeScreenshot;
                  if (null !== beforeScreenshot) {
                    if (undefined !== beforeScreenshot) {
                      const call = beforeScreenshot.call;
                      if (typeof call === "unknown") {
                        let beforeScreenshotResult = beforeScreenshot(closure_1_0, closure_1_1);
                      } else {
                        beforeScreenshotResult = call(tmp24, closure_1_0, closure_1_1);
                      }
                      tmp24 = options;
                    }
                  }
                  if (false !== undefined) {
                    const NATIVE = closure_1_0(closure_1_1[0]).NATIVE;
                    c3 = 1;
                    c4 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = NATIVE.captureScreenshot();
                    return obj1;
                  }
                }
              }
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = closure_1_0;
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            length = arg1;
            let tmp7 = length;
            if (length) {
              tmp7 = length.length > 0;
            }
            if (tmp7) {
              length = 0;
              const items = [];
              length = HermesBuiltin.arraySpread(length, 0);
              attachments = undefined;
              if (null != attachments) {
                attachments = attachments.attachments;
              }
              if (!attachments) {
                attachments = [];
              }
              length = HermesBuiltin.arraySpread(attachments, length);
              attachments.attachments = items;
            }
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = length;
            return obj;
          }
        } catch (tmp31) {
          c4 = tmp;
          throw tmp31;
        }
      }
    })();
  });
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((fn) => {
              fn(closure_0);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      const value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
arg5.screenshotIntegration = () => ({
  name: "Screenshot",
  setupOnce() {

  },
  processEvent
});