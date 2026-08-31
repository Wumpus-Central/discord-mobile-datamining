// === Module 7417: useConsoleQuestUIStore ===

// Module 7417 (useConsoleQuestUIStore)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

let closure_0 = [];
let obj = keys.create((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = {
    errorHintsByQuestId: new Map(),
    setErrorHints(questId, arg1) {
      const callback = questId;
      closure_1 = arg1;
      callback((errorHintsByQuestId) => {
        if (0 === length.length) {
          errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
          if (!errorHintsByQuestId.has(closure_0)) {
            return errorHintsByQuestId;
          }
        }
        errorHintsByQuestId = new Map(errorHintsByQuestId.errorHintsByQuestId);
        if (0 === length.length) {
          errorHintsByQuestId.delete(closure_0);
        } else {
          const items = [];
          HermesBuiltin.arraySpread(arr, 0);
          const result = errorHintsByQuestId.set(closure_0, items);
        }
        return { errorHintsByQuestId };
      });
    },
    getErrorHints(arg0) {
      const errorHintsByQuestId = callback2().errorHintsByQuestId;
      let value = errorHintsByQuestId.get(arg0);
      if (value == null) {
        value = closure_0;
      }
      return value;
    },
    clearErrorHints(arg0) {
      const callback = arg0;
      callback((errorHintsByQuestId) => {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        if (errorHintsByQuestId.has(closure_0)) {
          const _Map = Map;
          const map = new Map(errorHintsByQuestId.errorHintsByQuestId);
          map.delete(tmp);
          const obj = { errorHintsByQuestId: null };
          obj[0] = map;
          return obj;
        } else {
          return errorHintsByQuestId;
        }
        tmp = closure_0;
      });
    },
    clearErrorHintsByType(arg0, arg1) {
      const callback = arg0;
      closure_1 = arg1;
      callback((errorHintsByQuestId) => {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        const value = errorHintsByQuestId.get(closure_0);
        if (null == value) {
          return errorHintsByQuestId;
        } else {
          const found = value.filter((type) => type.type !== closure_1);
          if (found.length === value.length) {
            return errorHintsByQuestId;
          } else {
            const _Map = Map;
            const map = new Map(errorHintsByQuestId.errorHintsByQuestId);
            if (0 === found.length) {
              map.delete(tmp);
            } else {
              const result = map.set(tmp, found);
            }
            const obj = { errorHintsByQuestId: null };
            obj[0] = map;
            return obj;
          }
        }
      });
    },
    reset() {
      const obj = { errorHintsByQuestId: new Map() };
      callback(obj);
    }
  };
  return obj;
});
let result = set.fileFinishedImporting("modules/quests/ConsoleQuestUIStore.tsx");

export default obj;
export const useConsoleQuestUIStore = obj;