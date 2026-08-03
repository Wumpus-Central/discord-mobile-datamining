// === Module 10798: ? ===

// Module 10798
import keys from "keys";

let obj = keys.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = { lockKeys: null, shouldDisableSafeAreas: null, requestSafeAreaDisableLock: null };
  obj[0] = new Set();
  obj[1] = function shouldDisableSafeAreas() {
    return dependencyMap().lockKeys.size > 0;
  };
  obj[2] = function requestSafeAreaDisableLock(arg0) {
    let closure_0;
    let closure_1;
    ({ key: closure_0, lockEnabled: closure_1 } = arg0);
    callback(705).batchUpdates(() => {
      outer1_0((lockKeys) => {
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
  };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/panels/morphable/native/SafeAreaDisabledStore.tsx");

export default obj;