// === Module 9658: SafeAreaDisabledStore ===

// Module 9658 (SafeAreaDisabledStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/panels/morphable/native/SafeAreaDisabledStore.tsx");

export default module_560.create((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  let obj = {
    lockKeys: new Set(),
    shouldDisableSafeAreas() {
      return dependencyMap().lockKeys.size > 0;
    },
    requestSafeAreaDisableLock(arg0) {
      ({ key: closure_0, lockEnabled: closure_1 } = arg0);
      closure_0(1249).batchUpdates(() => {
        closure_0((lockKeys) => {
          lockKeys = lockKeys.lockKeys;
          const hasItem = lockKeys.has(closure_1_0);
          if (closure_1_1) {
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