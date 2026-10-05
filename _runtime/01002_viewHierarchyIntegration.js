// === Module 1002: viewHierarchyIntegration ===

// Module 1002 (viewHierarchyIntegration)
let c5, c6;

function processEvent(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return fn(this, undefined, undefined, function*() {
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let data;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp5;
            data = undefined;
            const exception = data.exception;
            let values;
            if (null !== exception) {
              if (undefined !== exception) {
                values = exception.values;
              }
            }
            if (values) {
              if (data.exception.values.length > 0) {
                data = null;
                c4 = 1;
                const NATIVE = data(closure_1[0]).NATIVE;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: NATIVE.fetchViewHierarchy(), done: false };
                return obj4;
              }
            }
            c6 = 3;
            const obj5 = { value: data, done: true };
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            const debug = data(closure_1[1]).debug;
            debug.error("Failed to get view hierarchy from native.", closure_1);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            data = value;
            c4 = 0;
          }
          const tmp16 = data;
          if (tmp16) {
            const obj6 = { filename: "view-hierarchy.json", contentType: "application/json", attachmentType: "event.view_hierarchy", data };
            const items = [obj6];
            data = 1;
            let attachments;
            if (null != closure_130_1) {
              attachments = closure_130_1.attachments;
            }
            if (!attachments) {
              attachments = [];
            }
            data = HermesBuiltin.arraySpread(items, attachments, data);
            closure_130_1.attachments = items;
          }
          c6 = 3;
          const obj7 = { value: closure_130_0, done: true };
          return obj7;
        }
      } catch (tmp31) {
        closure_3 = tmp31;
        if (0 === c4) {
          c6 = 3;
          throw tmp31;
        } else {
          c5 = 1;
        }
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

export const viewHierarchyIntegration = () => ({
  name: "ViewHierarchy",
  setupOnce() {

  },
  processEvent
});