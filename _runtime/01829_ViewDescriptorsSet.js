// _runtime/01829_ViewDescriptorsSet.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function pnpm_ViewDescriptorsSetTs1(descriptors){let[item,updater]=this.__closure;var _updater;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===item.tag;});if(index!==-1){descriptors[index]=item;}else{descriptors.push(item);}(_updater=updater)===null||_updater===void 0||_updater(true);return descriptors;})",
};
let closure_3 = {
  code: "(function pnpm_ViewDescriptorsSetTs2(descriptors){let[viewTag]=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===viewTag;});if(index!==-1){descriptors.splice(index,1);}return descriptors;})",
};

export function makeViewDescriptorsSet() {
  mutable = mutable(set[0]).makeMutable([]);
  set = new Set();
  return {
    shareableViewDescriptors: mutable,
    add(tag, current) {
      set.add(tag.tag);
      current = undefined;
      if (current != null) {
        current = current.current;
      }
      items = [closure_2, tag, current];
      c0 = undefined;
      c1 = undefined;
      [tmp3, tmp4, tmp5] = items;
      function pnpm_ViewDescriptorsSetTs1(arr) {
        const findIndexResult = arr.findIndex((tag) => tag.tag === tag.tag);
        if (-1 !== findIndexResult) {
          arr[findIndexResult] = c0;
        } else {
          arr = arr.push(c0);
        }
        if (c1 != null) {
          tmp5(true);
        }
        return arr;
      }
      const items1 = [tmp4, tmp5];
      pnpm_ViewDescriptorsSetTs1.__closure = items1;
      pnpm_ViewDescriptorsSetTs1.__workletHash = 7481939312552;
      pnpm_ViewDescriptorsSetTs1.__initData = tmp3;
      mutable.modify(pnpm_ViewDescriptorsSetTs1, false);
    },
    remove(arg0) {
      set.delete(arg0);
      items = [closure_3, arg0];
      c0 = undefined;
      [tmp2, tmp3] = items;
      function pnpm_ViewDescriptorsSetTs2(arr) {
        const findIndexResult = arr.findIndex((tag) => tag.tag === closure_1_0);
        if (-1 !== findIndexResult) {
          arr.splice(findIndexResult, 1);
        }
        return arr;
      }
      const items1 = [tmp3];
      pnpm_ViewDescriptorsSetTs2.__closure = items1;
      pnpm_ViewDescriptorsSetTs2.__workletHash = 13805714304784;
      pnpm_ViewDescriptorsSetTs2.__initData = tmp2;
      mutable.modify(pnpm_ViewDescriptorsSetTs2, false);
    },
    has(arg0) {
      return set.has(arg0);
    },
  };
}
