// === Module 9191: SafeAreaDisabledStore ===

// Module 9191 (SafeAreaDisabledStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let set;

let obj = module_570.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    lockKeys: set,
    shouldDisableSafeAreas() {
      return closure_1().lockKeys.size > 0;
    },
    requestSafeAreaDisableLock(arg0) {
      ({ key: closure_0, lockEnabled: closure_1 } = arg0);
      let obj = closure_0(closure_1[1]);
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
const result = size.fileFinishedImporting("modules/panels/morphable/native/SafeAreaDisabledStore.tsx");

export default obj;