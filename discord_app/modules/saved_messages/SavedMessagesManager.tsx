// === Module 17478: SavedMessagesManager ===

// Module 17478 (SavedMessagesManager)
import ForLaterExperiment from "ForLaterExperiment" /* 7855 */;
import SavedMessagesActions from "SavedMessagesActions" /* 11705 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
let closure_3 = async function _refreshSavedMessages() {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp4;
          let obj2 = ForLaterExperiment;
          if (obj2.isForLaterExperimentOn("saved_messages_manager")) {
            c1 = 1;
            c2 = 1;
            const obj1 = { value: SavedMessagesActions.fetchAndUpdateSavedMessages(), done: false };
            return obj1;
          } else {
            c2 = 3;
          }
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj = closure_128_0(closure_128_1[3]);
        const result = obj.showOverdueRemindersToast();
      }
      c2 = 3;
      obj2 = { value, done: true };
      return obj2;
    } catch (tmp13) {
      c2 = tmp;
      throw tmp13;
    }
  }
};
let prototype = function SavedMessagesManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    !(function refreshSavedMessages() {
      const self = this;
      const apply = closure_1_3.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesManager.tsx");

export default prototype;