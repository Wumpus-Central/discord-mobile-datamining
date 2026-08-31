// === Module 9588: ? ===

// Module 9588
import set2 from "set" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = {
    lockKeys: new Set(),
    shouldDisableSafeAreas() {
      return dependencyMap().lockKeys.size > 0;
    },
    requestSafeAreaDisableLock(arg0) {
      ({ key: closure_0, lockEnabled: closure_1 } = arg0);
      callback(705).batchUpdates(() => {
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
const result = set2.fileFinishedImporting("modules/panels/morphable/native/SafeAreaDisabledStore.tsx");

export default obj;