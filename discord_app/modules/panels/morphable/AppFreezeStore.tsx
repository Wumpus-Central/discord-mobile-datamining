// === Module 8531: ? ===

// Module 8531
import set2 from "set" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  let obj = {
    lockKeys: new Set(),
    requestFreezeLock(arg0) {
      ({ key: closure_0, lockEnabled: closure_1 } = arg0);
      callback(closure_1_1[1]).batchUpdates(() => {
        closure_1_0((lockKeys) => {
          lockKeys = lockKeys.lockKeys;
          const hasItem = lockKeys.has(closure_0);
          if (closure_1) {
            let tmp12 = lockKeys;
            if (!hasItem) {
              let obj = {};
              const merged = Object.assign(lockKeys);
              const _Set2 = Set;
              const items = [tmp];
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
            set1.delete(tmp);
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
const result = set2.fileFinishedImporting("modules/panels/morphable/AppFreezeStore.tsx");

export default obj;