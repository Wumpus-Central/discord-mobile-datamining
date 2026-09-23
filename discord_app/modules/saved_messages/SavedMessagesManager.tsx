// === Module 17964: SavedMessagesManager ===

// Module 17964 (SavedMessagesManager)
import ForLaterExperiment from "ForLaterExperiment" /* 8183 */;
import SavedMessagesActions from "SavedMessagesActions" /* 12039 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7449 */;

require = fn;
let closure_3 = async function _refreshSavedMessages() {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = tmp4;
          if (obj3.isForLaterExperimentOn("saved_messages_manager")) {
            c1 = 1;
            c2 = 1;
            const obj6 = { value: SavedMessagesActions.fetchAndUpdateSavedMessages(), done: false };
            return obj6;
          } else {
            c2 = 3;
          }
          obj3 = ForLaterExperiment;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const result = closure_128_0(closure_128_1[3]).showOverdueRemindersToast();
        const obj = closure_128_0(closure_128_1[3]);
      }
      c2 = 3;
      const obj7 = { value, done: true };
      return obj7;
    } catch (tmp13) {
      c2 = tmp;
      throw tmp13;
    }
  }
};
const prototype = function SavedMessagesManager() {
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
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesManager.tsx");

export default prototype1;