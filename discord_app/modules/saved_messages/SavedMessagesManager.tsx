// === Module 17298: _refreshSavedMessages ===

// Module 17298 (_refreshSavedMessages)
import initializeDefault from "initialize" /* 5494 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

let require = arg1;
function _refreshSavedMessages() {
  const self = this;
  const tmp = callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp4;
            let obj2 = closure_1_0(7609);
            if (obj2.isForLaterExperimentOn("saved_messages_manager")) {
              dependencyMap = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(11511).fetchAndUpdateSavedMessages();
              return obj1;
            } else {
              c2 = 3;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          obj = callback(17299);
          const result = obj.showOverdueRemindersToast();
        }
        c2 = 3;
        obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  });
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
initializeDefault;
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
      const apply = closure_3.apply;
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
let result = require("set").fileFinishedImporting("modules/saved_messages/SavedMessagesManager.tsx");

export default prototype;