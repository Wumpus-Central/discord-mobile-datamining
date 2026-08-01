// === Module 1126: processEvent ===

// Module 1126 (processEvent)
const require = arg1;
const dependencyMap = arg6;
function processEvent(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return fn(this, undefined, undefined, function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp3;
            let attachments = tmp7;
            let closure_0;
            const exception = outer1_0.exception;
            let values;
            if (null !== exception) {
              if (undefined !== exception) {
                values = exception.values;
              }
            }
            if (values) {
              if (outer1_0.exception.values.length > 0) {
                closure_0 = null;
                let c4 = 1;
                const NATIVE = outer1_0(outer1_1[0]).NATIVE;
                c5 = 2;
                c6 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = NATIVE.fetchViewHierarchy();
                return obj1;
              }
            }
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = outer1_0;
            return obj2;
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            attachments = closure_3;
            const debug = outer1_0(outer1_1[1]).debug;
            debug.error("Failed to get view hierarchy from native.", attachments);
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = arg1;
            c4 = 0;
          }
          if (closure_0) {
            const obj3 = { filename: "view-hierarchy.json", contentType: "application/json", attachmentType: "event.view_hierarchy", data: null };
            obj3[3] = closure_0;
            const items = [obj3];
            closure_0 = 1;
            attachments = undefined;
            if (null != attachments) {
              attachments = attachments.attachments;
            }
            if (!attachments) {
              attachments = [];
            }
            closure_0 = HermesBuiltin.arraySpread(attachments, closure_0);
            attachments.attachments = items;
            const tmp20 = attachments;
          }
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = closure_0;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
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
            tmp = new tmp((arg0) => {
              arg0(closure_0);
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
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
arg5.viewHierarchyIntegration = () => ({
  name: "ViewHierarchy",
  setupOnce() {

  },
  processEvent
});