// discord_app/modules/saved_messages/SavedMessagesActions.tsx
import dispatcher from "dispatcher";
import getTimeSafe from "getTimeSafe";
import { Endpoints } from "ME";

const require = arg1;
function _upsertSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              let closure_1 = tmp5;
              let lib;
              const HTTP = lib(outer1_2[3]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_5.PUT_SAVED_MESSAGE(lib.channelId, lib.messageId);
              ({ dueAt: obj8[0], source: obj8[1] } = lib);
              obj1[1] = { due_at: null, source: null };
              obj1[2] = lib(outer1_2[3]).rejectWithMigratedError();
              c3 = 1;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.put(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            if (lib.ok) {
              obj = lib(table[4]);
              c4 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = obj.savedMessageCreateObjectToClient(lib.body);
              return obj5;
            } else {
              c4 = 3;
              return { value: "T", done: null };
            }
          }
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _upsertSavedMessage = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0, ok) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw ok;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = ok;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c1 = 3;
              throw ok;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = ok;
              return obj;
            } else {
              const HTTP = lib(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_5.DELETE_SAVED_MESSAGE(lib.channelId, lib.messageId);
              obj1[1] = lib(530).rejectWithMigratedError();
              dependencyMap = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw ok;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = ok;
            return obj;
          } else {
            c1 = 3;
            return ok.ok ? { value: true, done: true } : { value: "T", done: null };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _deleteSavedMessage = tmp;
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
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp2;
            let closure_0 = tmp5;
            closure_0 = undefined;
            callback = undefined;
            if (outer1_4.getIsStale()) {
              const HTTP = outer1_0(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_5.GET_SAVED_MESSAGES;
              obj1[1] = outer1_0(530).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            } else {
              c3 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = Promise.resolve();
              return obj3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1;
          if (closure_0.ok) {
            const results = closure_0.body.results;
            callback = results.map((message) => {
              let messageRecord = null;
              if (null != message.message) {
                let obj = callback(4474);
                messageRecord = obj.createMessageRecord(message.message);
              }
              obj = { message: messageRecord, saveData: null };
              obj[1] = callback(8164).savedMessageDataToClient(message.save_data);
              return obj;
            });
            obj2 = callback(709);
            const obj5 = { type: "SAVED_MESSAGES_UPDATE", savedMessages: null };
            obj5[1] = callback;
            obj2.dispatch(obj5);
          } else {
            obj = callback(709);
            const obj6 = { type: "SAVED_MESSAGES_UPDATE", savedMessages: null };
            obj6[1] = [];
            obj.dispatch(obj6);
          }
          c3 = 3;
        }
      } catch (tmp22) {
        c3 = tmp;
        throw tmp22;
      }
    }
  });
  const _fetchAndUpdateSavedMessages = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("ME").fileFinishedImporting("modules/saved_messages/SavedMessagesActions.tsx");

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