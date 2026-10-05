// discord_app/modules/panels/morphable/AppFreezeStore.tsx
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

let set;

let obj = module_570.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    lockKeys: set,
    requestFreezeLock(arg0) {
      let closure_1;
      ({ key: closure_0, lockEnabled: closure_1 } = arg0);
      let obj = closure_0(dependencyMap[1]);
      obj.batchUpdates(() => {
        closure_0(function(lockKeys) {
          lockKeys = lockKeys.lockKeys;
          const hasItem = lockKeys.has(closure_1_0);
          if (closure_1_1) {
            let tmp11 = lockKeys;
            if (!hasItem) {
              const obj = { lockKeys: set };
              const merged = Object.assign(lockKeys);
              const _Set2 = Set;
              const items = [closure_1_0];
              const _Array = Array;
              HermesBuiltin.arraySpread(items, Array.from(lockKeys.lockKeys), 1);
              const self3 = this;
              const self4 = this;
              tmp11 = obj;
              set = new Set(items);
            }
            return tmp11;
          } else if (hasItem) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            const set1 = new Set(lockKeys);
            set1.delete(closure_1_0);
            const obj2 = { lockKeys: set1 };
            const merged1 = Object.assign(lockKeys);
            return obj2;
          } else {
            return lockKeys;
          }
        });
      });
    }
  };
  set = new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/panels/morphable/AppFreezeStore.tsx");

export default obj;