// === Module 990: ? ===

// Module 990
const require = arg1;
const dependencyMap = arg6;
function processEvent(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return closure_2(this, undefined, undefined, function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = undefined;
            const exception = value.exception;
            let values;
            if (null !== exception) {
              if (undefined !== exception) {
                values = exception.values;
              }
            }
            if (values) {
              if (value.exception.values.length > 0) {
                options = tmp5.getOptions();
                const beforeScreenshot = options.beforeScreenshot;
                if (null !== beforeScreenshot) {
                  if (undefined !== beforeScreenshot) {
                    const call = beforeScreenshot.call;
                    if (typeof call === "unknown") {
                      let beforeScreenshotResult = beforeScreenshot(tmp25, tmp2);
                    } else {
                      beforeScreenshotResult = call(tmp24, tmp25, tmp2);
                    }
                    tmp24 = options;
                  }
                }
                if (false !== undefined) {
                  const NATIVE = value(tmp2[0]).NATIVE;
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: NATIVE.captureScreenshot(), done: false };
                  return obj1;
                }
              }
            }
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_0 = value;
          let tmp7 = closure_129_0;
          if (closure_129_0) {
            tmp7 = closure_129_0.length > 0;
          }
          if (tmp7) {
            value = 0;
            const items = [];
            value = HermesBuiltin.arraySpread(closure_129_0, 0);
            let attachments;
            if (null != closure_130_1) {
              attachments = closure_130_1.attachments;
            }
            if (!attachments) {
              attachments = [];
            }
            value = HermesBuiltin.arraySpread(attachments, value);
            closure_130_1.attachments = items;
          }
          c4 = 3;
          obj = { value: closure_130_0, done: true };
          return obj;
        }
      } catch (tmp31) {
        c4 = tmp;
        throw tmp31;
      }
    }
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
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
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
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}

export () => ({
  name: "Screenshot",
  setupOnce() {

  },
  processEvent
})