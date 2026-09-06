// === Module 991: ? ===

// Module 991
const require = arg1;
let dependencyMap = arg6;
function processEvent(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return fn(this, undefined, undefined, function*(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            dependencyMap = tmp7;
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
                closure_129_0 = null;
                c4 = 1;
                const NATIVE = value(866).NATIVE;
                c5 = 2;
                c6 = 1;
                const obj1 = { value: NATIVE.fetchViewHierarchy(), done: false };
                return obj1;
              }
            }
            c6 = 3;
            const obj2 = { value, done: true };
            return obj2;
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            closure_129_1 = closure_3;
            const debug = value(682).debug;
            debug.error("Failed to get view hierarchy from native.", closure_129_1);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = value;
            c4 = 0;
          }
          if (closure_129_0) {
            const obj3 = { filename: "view-hierarchy.json", contentType: "application/json", attachmentType: "event.view_hierarchy", data: closure_129_0 };
            const items = [obj3];
            value = 1;
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
          c6 = 3;
          const obj4 = { value: closure_130_0, done: true };
          return obj4;
        }
      } catch (tmp33) {
        closure_3 = tmp33;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp33;
        } else {
          c5 = tmp;
        }
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
  name: "ViewHierarchy",
  setupOnce() {

  },
  processEvent
})