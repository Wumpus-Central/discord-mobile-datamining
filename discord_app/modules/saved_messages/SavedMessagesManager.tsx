// === Module 18107: SavedMessagesManager ===

// Module 18107 (SavedMessagesManager)
import SavedMessagesActions from "SavedMessagesActions" /* 12602 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;

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
      return { value: "IconComponent", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp4;
          c1 = 1;
          c2 = 1;
          const obj5 = { value: SavedMessagesActions.fetchAndUpdateSavedMessages(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const result = closure_128_0(closure_128_1[2]).showOverdueRemindersToast();
        c2 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp11) {
      c2 = tmp;
      throw tmp11;
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