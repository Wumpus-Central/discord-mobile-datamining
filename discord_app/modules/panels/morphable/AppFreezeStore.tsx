// discord_app/modules/panels/morphable/AppFreezeStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import keys from "../../../../_runtime/00644_keys.js";

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  let obj = {
    lockKeys: new Set(),
    requestFreezeLock(arg0) {
      ({ key: closure_0, lockEnabled: closure_1 } = arg0);
      callback(dependencyMap[1]).batchUpdates(() => {
        closure_1_0((lockKeys) => {
          lockKeys = lockKeys.lockKeys;
          const hasItem = lockKeys.has(closure_0);
          if (closure_1) {
            let tmp12 = lockKeys;
            if (!hasItem) {
              let obj = {};
              const merged = Object.assign(lockKeys);
              const _Set2 = Set;
              const items = [closure_0];
              const _Array = Array;
              HermesBuiltin.arraySpread(Array.from(lockKeys.lockKeys), 1);
              const set = new Set(items);
              obj.lockKeys = set;
              tmp12 = obj;
            }
            return tmp12;
          } else if (hasItem) {
            const _Set = Set;
            const set1 = new Set(lockKeys);
            set1.delete(closure_0);
            obj = {};
            const merged1 = Object.assign(lockKeys);
            obj.lockKeys = set1;
            return obj;
          } else {
            return lockKeys;
          }
        });
      });
    }
  };
  return obj;
});
const result = obj132.fileFinishedImporting("modules/panels/morphable/AppFreezeStore.tsx");

export default obj;