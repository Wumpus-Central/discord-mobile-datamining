import keys from "keys";

let closure_0 = [];
let obj = keys.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = { errorHintsByQuestId: null, setErrorHints: null, getErrorHints: null, clearErrorHints: null, clearErrorHintsByType: null, reset: null };
  obj[0] = new Map();
  obj[1] = function setErrorHints(questId, arg1) {
    const callback = questId;
    let closure_1 = arg1;
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
  };
  obj[2] = function getErrorHints(arg0) {
    const errorHintsByQuestId = callback2().errorHintsByQuestId;
    let value = errorHintsByQuestId.get(arg0);
    if (value == null) {
      value = closure_0;
    }
    return value;
  };
  obj[3] = function clearErrorHints(arg0) {
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
  };
  obj[4] = function clearErrorHintsByType(arg0, arg1) {
    const callback = arg0;
    let closure_1 = arg1;
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
  };
  obj[5] = function reset() {
    const obj = { errorHintsByQuestId: null };
    obj[0] = new Map();
    callback(obj);
  };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/quests/ConsoleQuestUIStore.tsx");

export default obj;
export const useConsoleQuestUIStore = obj;