// discord_app/modules/quests/ConsoleQuestUIStore.tsx
import 00570__ from "../../../_runtime/metro/00570__.js";
import size from "../../../_runtime/metro/00002__.js";

let map, set;

let closure_0 = [];
let obj = module_570.create((arg0, arg1) => {
  closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    errorHintsByQuestId: map,
    setErrorHints(questId, arg1) {
      closure_0 = questId;
      closure_1 = arg1;
      closure_0((errorHintsByQuestId) => {
        if (0 === length.length) {
          errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
          if (!errorHintsByQuestId.has(closure_0)) {
            return errorHintsByQuestId;
          }
        }
        const errorHintsByQuestId1 = new Map(errorHintsByQuestId.errorHintsByQuestId);
        if (0 === length.length) {
          errorHintsByQuestId1.delete(closure_0);
        } else {
          const items = [];
          set = errorHintsByQuestId1.set;
          HermesBuiltin.arraySpread(items, length, 0);
          const result = set(closure_0, items);
        }
        return { errorHintsByQuestId: errorHintsByQuestId1 };
      });
    },
    getErrorHints(arg0) {
      const errorHintsByQuestId = closure_1().errorHintsByQuestId;
      let value = errorHintsByQuestId.get(arg0);
      if (value == null) {
        value = closure_0;
      }
      return value;
    },
    clearErrorHints(arg0) {
      closure_0 = arg0;
      closure_0(function(errorHintsByQuestId) {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        if (errorHintsByQuestId.has(closure_0)) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map(errorHintsByQuestId.errorHintsByQuestId);
          map.delete(closure_0);
          return { errorHintsByQuestId: map };
        } else {
          return errorHintsByQuestId;
        }
      });
    },
    clearErrorHintsByType(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_0(function(errorHintsByQuestId) {
        errorHintsByQuestId = errorHintsByQuestId.errorHintsByQuestId;
        const value = errorHintsByQuestId.get(closure_0);
        if (null == value) {
          return errorHintsByQuestId;
        } else {
          const found = value.filter((type) => type.type !== closure_1_1);
          if (found.length === value.length) {
            return errorHintsByQuestId;
          } else {
            const _Map = Map;
            const self = this;
            const self2 = this;
            map = new Map(errorHintsByQuestId.errorHintsByQuestId);
            if (0 === found.length) {
              map.delete(closure_0);
            } else {
              const result = map.set(closure_0, found);
            }
            return { errorHintsByQuestId: map };
          }
        }
      });
    },
    reset() {
      const obj = { errorHintsByQuestId: new Map() };
      new Map();
      closure_0(obj);
    }
  };
  map = new Map();
  return obj;
});
let result = size.fileFinishedImporting("modules/quests/ConsoleQuestUIStore.tsx");

export default obj;
export const useConsoleQuestUIStore = obj;