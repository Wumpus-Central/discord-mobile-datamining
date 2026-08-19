// discord_app/modules/quests/ConsoleQuestUIStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import keys from "../../../_runtime/00644_keys.js";

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
          HermesBuiltin.arraySpread(length, 0);
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
          map.delete(closure_0);
          const obj = { errorHintsByQuestId: null };
          obj[0] = map;
          return obj;
        } else {
          return errorHintsByQuestId;
        }
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
          const found = value.filter((item, index) => item.type !== closure_1);
          if (found.length === value.length) {
            return errorHintsByQuestId;
          } else {
            const _Map = Map;
            const map = new Map(errorHintsByQuestId.errorHintsByQuestId);
            if (0 === found.length) {
              map.delete(closure_0);
            } else {
              const result = map.set(closure_0, found);
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
let result = obj132.fileFinishedImporting("modules/quests/ConsoleQuestUIStore.tsx");

export default obj;
export const useConsoleQuestUIStore = obj;