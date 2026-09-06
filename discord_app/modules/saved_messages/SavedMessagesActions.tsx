// discord_app/modules/saved_messages/SavedMessagesActions.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "SavedMessagesStore.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _upsertSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0) {
      const table = tmp2;
      closure_1 = tmp5;
      const HTTP = lib(closure_1_2[3]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_5.PUT_SAVED_MESSAGE(lib.channelId, lib.messageId);
      ({ dueAt: obj8[0], source: obj8[1] } = lib);
      obj1[1] = { due_at: null, source: null };
      obj1[2] = lib(closure_1_2[3]).rejectWithMigratedError();
      lib = yield HTTP.put(obj1);
      const obj = lib(table[4]);
      return obj.savedMessageCreateObjectToClient(lib.body);
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      const HTTP = lib(1272).HTTP;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_5.DELETE_SAVED_MESSAGE(lib.channelId, lib.messageId);
      obj1[1] = lib(1272).rejectWithMigratedError();
      yield HTTP.del(obj1);
      return true;
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAndUpdateSavedMessages() {
  const self = this;
  const tmp = callback(function* () {
    if (isStale === 2) {
      isStale = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        isStale = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            isStale = 3;
            throw arg1;
          } else if (arg0 === 2) {
            isStale = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            let body = tmp7;
            body = undefined;
            callback = undefined;
            if (isStale.getIsStale()) {
              dependencyMap = 1;
              const HTTP = closure_1_0(1272).HTTP;
              obj1 = { url: null, rejectWithError: null };
              obj1[0] = closure_1_5.GET_SAVED_MESSAGES;
              let obj10 = closure_1_0(1272);
              obj1[1] = obj10.rejectWithMigratedError();
              c3 = 4;
              isStale = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            } else {
              isStale = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = Promise.resolve();
              return obj3;
            }
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          let obj5 = callback(573);
          const obj4 = { type: "SAVED_MESSAGES_UPDATE", savedMessages: null };
          obj4[1] = [];
          c3 = 2;
          isStale = 1;
          obj5 = { value: null, done: false };
          obj5[0] = obj5.dispatch(obj4);
          return obj5;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            isStale = 3;
            throw arg1;
          } else if (arg0 === 2) {
            isStale = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            isStale = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = undefined;
            return obj7;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            isStale = 3;
            throw arg1;
          } else if (arg0 === 2) {
            isStale = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            isStale = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          isStale = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          isStale = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = arg1;
          return obj9;
        } else {
          body = arg1;
          dependencyMap = 0;
          const results = body.body.results;
          callback = results.map((message) => {
            let messageRecord = null;
            if (null != message.message) {
              let obj = callback(4783);
              messageRecord = obj.createMessageRecord(message.message);
            }
            obj = { message: messageRecord, saveData: callback(7860).savedMessageDataToClient(message.save_data) };
            return obj;
          });
          obj10 = { type: "SAVED_MESSAGES_UPDATE", savedMessages: null };
          obj10[1] = callback;
          c3 = 3;
          isStale = 1;
          obj = { value: null, done: false };
          obj[0] = callback(573).dispatch(obj10);
          return obj;
        }
      } catch (tmp15) {
        if (tmp4 === dependencyMap) {
          isStale = tmp2;
          throw tmp15;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/saved_messages/SavedMessagesActions.tsx");

export const upsertSavedMessage = function upsertSavedMessage() {
  const self = this;
  const apply = _upsertSavedMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSavedMessage = function deleteSavedMessage(closure_2) {
  const self = this;
  const apply = _deleteSavedMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAndUpdateSavedMessages = function fetchAndUpdateSavedMessages() {
  const self = this;
  const apply = _fetchAndUpdateSavedMessages.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
