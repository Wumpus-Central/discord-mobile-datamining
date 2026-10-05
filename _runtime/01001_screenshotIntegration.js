// === Module 1001: screenshotIntegration ===

// Module 1001 (screenshotIntegration)
let c3, c4, options;

function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return closure_2(this, undefined, undefined, function*() {
    let value;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            options = tmp5;
            closure_1 = tmp;
            value = undefined;
            const exception = value.exception;
            let values;
            if (null !== exception) {
              if (undefined !== exception) {
                values = exception.values;
              }
            }
            if (values) {
              if (value.exception.values.length > 0) {
                options = options.getOptions();
                const beforeScreenshot = options.beforeScreenshot;
                let callResult;
                if (null !== beforeScreenshot) {
                  if (undefined !== beforeScreenshot) {
                    callResult = beforeScreenshot.call(options, value, closure_1);
                  }
                }
                if (false !== callResult) {
                  const NATIVE = value(closure_1[0]).NATIVE;
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: NATIVE.captureScreenshot(), done: false };
                  return obj4;
                }
              }
            }
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const tmp7 = value && value.length > 0;
          if (tmp7) {
            value = 0;
            const items = [];
            value = HermesBuiltin.arraySpread(items, value, 0);
            let attachments;
            if (null != closure_130_1) {
              attachments = closure_130_1.attachments;
            }
            if (!attachments) {
              attachments = [];
            }
            value = HermesBuiltin.arraySpread(items, attachments, value);
            closure_130_1.attachments = items;
          }
          c4 = 3;
          const obj = { value: closure_130_0, done: true };
          return obj;
        }
      } catch (tmp26) {
        c4 = 3;
        throw tmp26;
      }
    }
  });
}
const fn = this && this.__awaiter || ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _Promise = arg2;
  const Promise = arg2;
  let closure_3 = arg3;
  if (!arg2) {
    let tmp = globalThis;
    _Promise = Promise;
  }
  const _Promise1 = new _Promise(function(fn, arg1) {
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
        fn(done.value);
      } else {
        let tmp1 = done.value;
        const value = tmp1;
        if (!(tmp1 instanceof Promise)) {
          const self = this;
          const self2 = this;
          tmp1 = new tmp((fn) => {
            fn(value);
          });
        }
        tmp1.then(fulfilled, iter);
      }
    }
    let items = closure_1;
    const tmp = iter;
    const apply = iter.apply;
    const tmp2 = closure_0;
    if (!closure_1) {
      items = [];
    }
    iter = apply(tmp2, items);
    const iter2 = iter.next();
    let value = iter2.value;
    if (iter2.done) {
      const tmp5 = fn(value);
    } else {
      let tmp32 = value;
      if (!(value instanceof fulfilled)) {
        let self = this;
        let self2 = this;
        tmp32 = new tmp3((fn) => {
          fn(value);
        });
      }
      tmp32.then(fulfilled, rejected);
    }
  });
  return _Promise1;
});

export const screenshotIntegration = () => ({
  name: "Screenshot",
  setupOnce() {

  },
  processEvent
});