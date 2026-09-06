// _runtime/metro/01734__.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "function pnpm_ViewDescriptorsSetTs1(descriptors){const{item,updater}=this.__closure;var _updater;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===item.tag;});if(index!==-1){descriptors[index]=item;}else{descriptors.push(item);}(_updater=updater)===null||_updater===void 0||_updater(true);return descriptors;}",
};
let closure_3 = {
  code: "function pnpm_ViewDescriptorsSetTs2(descriptors){const{viewTag}=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===viewTag;});if(index!==-1){descriptors.splice(index,1);}return descriptors;}",
};

export const makeViewDescriptorsSet = function makeViewDescriptorsSet() {
  let obj = mutable(set[0]);
  mutable = obj.makeMutable([]);
  set = new Set();
  obj = {
    shareableViewDescriptors: mutable,
    add(tag, current) {
      closure_0 = tag;
      set.add(tag.tag);
      current = undefined;
      if (current != null) {
        current = current.current;
      }
      const fn = function u(arr) {
        const findIndexResult = arr.findIndex((tag) => tag.tag === tag.tag);
        if (-1 !== findIndexResult) {
          arr[findIndexResult] = tag;
        } else {
          arr = arr.push(tag);
        }
        if (current != null) {
          tmp5(true);
        }
        return arr;
      };
      fn.__closure = { item: tag, updater: current };
      fn.__workletHash = 1368679644593;
      fn.__initData = __initData;
      mutable.modify(fn, false);
    },
    remove(viewTag) {
      closure_0 = viewTag;
      set.delete(viewTag);
      const fn = function c(arr) {
        const findIndexResult = arr.findIndex((tag) => tag.tag === viewTag);
        if (-1 !== findIndexResult) {
          arr.splice(findIndexResult, 1);
        }
        return arr;
      };
      fn.__closure = { viewTag };
      fn.__workletHash = 5508648561577;
      fn.__initData = __initData2;
      mutable.modify(fn, false);
    },
    has(arg0) {
      return set.has(arg0);
    },
  };
  return obj;
};
