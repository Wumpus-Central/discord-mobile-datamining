// discord_app/modules/quests/ConsoleQuestUIStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = [];
let obj = module_560.create((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = {
    errorHintsByQuestId: new Map(),
    setErrorHints(questId, arg1) {
      closure_0 = questId;
      closure_0((errorHintsByQuestId) => {
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
      const errorHintsByQuestId = closure_1().errorHintsByQuestId;
      value = errorHintsByQuestId.get(arg0);
      if (value == null) {
        value = closure_0;
      }
      return value;
    },
    clearErrorHints(arg0) {
      closure_0 = arg0;
      closure_0((errorHintsByQuestId) => {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        if (errorHintsByQuestId.has(closure_0)) {
          const _Map = Map;
          const map = new Map(errorHintsByQuestId.errorHintsByQuestId);
          map.delete(closure_0);
          const obj = { errorHintsByQuestId: map };
          return obj;
        } else {
          return errorHintsByQuestId;
        }
      });
    },
    clearErrorHintsByType(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_0((errorHintsByQuestId) => {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        value = errorHintsByQuestId.get(closure_0);
        if (null == value) {
          return errorHintsByQuestId;
        } else {
          const found = value.filter((type) => type.type !== closure_1_1);
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
            const obj = { errorHintsByQuestId: map };
            return obj;
          }
        }
      });
    },
    reset() {
      const obj = { errorHintsByQuestId: new Map() };
      closure_0(obj);
    }
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/quests/ConsoleQuestUIStore.tsx");

export default obj;
export const useConsoleQuestUIStore = obj;