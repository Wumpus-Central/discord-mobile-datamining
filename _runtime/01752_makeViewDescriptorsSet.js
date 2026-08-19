// === Module 1752: makeViewDescriptorsSet ===

// Module 1752 (makeViewDescriptorsSet)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_ViewDescriptorsSetTs1(descriptors){const{item,updater}=this.__closure;var _updater;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===item.tag;});if(index!==-1){descriptors[index]=item;}else{descriptors.push(item);}(_updater=updater)===null||_updater===void 0||_updater(true);return descriptors;}" };
let closure_3 = { code: "function pnpm_ViewDescriptorsSetTs2(descriptors){const{viewTag}=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===viewTag;});if(index!==-1){descriptors.splice(index,1);}return descriptors;}" };
arg5.makeViewDescriptorsSet = function makeViewDescriptorsSet() {
  let obj = mutable(set[0]);
  mutable = obj.makeMutable([]);
  set = new Set();
  obj = {
    shareableViewDescriptors: mutable,
    add(item, current) {
      mutable = item;
      current.add(item.tag);
      current = undefined;
      if (current != null) {
        current = current.current;
      }
      const fn = function u(arr) {
        const findIndexResult = arr.findIndex((item, index) => item.tag === tag.tag);
        if (-1 !== findIndexResult) {
          arr[findIndexResult] = closure_0;
        } else {
          arr = arr.push(closure_0);
        }
        if (current != null) {
          tmp5(true);
        }
        return arr;
      };
      fn.__closure = { item, updater: current };
      fn.__workletHash = 1368679644593;
      fn.__initData = closure_1_2;
      mutable.modify(fn, false);
    },
    remove(viewTag) {
      mutable = viewTag;
      set.delete(viewTag);
      const fn = function c(arr) {
        const findIndexResult = arr.findIndex((item, index) => item.tag === closure_0);
        if (-1 !== findIndexResult) {
          arr.splice(findIndexResult, 1);
        }
        return arr;
      };
      fn.__closure = { viewTag };
      fn.__workletHash = 5508648561577;
      fn.__initData = closure_1_3;
      mutable.modify(fn, false);
    },
    has(arg0) {
      return set.has(arg0);
    }
  };
  return obj;
};