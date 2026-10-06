// === Module 11348: SavedMessagesActions ===

// Module 11348 (SavedMessagesActions)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11296 */;
import size from "module_2" /* 2 */;

let c3, c4;

let obj = function _upsertSavedMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj4;
    let obj9;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.PUT_SAVED_MESSAGE(closure_0.channelId, closure_0.messageId), body: obj4, rejectWithError: obj9.rejectWithMigratedError() };
            const put = HTTP.put;
            obj4 = { due_at: null, source: null };
            ({ dueAt: obj8.due_at, source: obj8.source } = closure_0);
            obj9 = HTTPUtils;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: put(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          c4 = 3;
          const obj7 = { value: obj.savedMessageCreateObjectToClient(closure_0.body), done: true };
          obj = closure_130_0(closure_130_2[4]);
          return obj7;
        }
      } catch (tmp10) {
        c4 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
obj = function _deleteSavedMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let obj6;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.DELETE_SAVED_MESSAGE(closure_0.channelId, closure_0.messageId), rejectWithError: obj6.rejectWithMigratedError() };
    const del = HTTP.del;
    obj6 = HTTPUtils;
    await del(obj4);
    return true;
  });
  return obj(...arguments);
};
obj = function _fetchAndUpdateSavedMessages() {
  let isStale;
  obj = _asyncToGenerator(async () => {
    let obj11;
    let obj15;
    let obj6;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
      try {
        let body;
        let savedMessages;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            body = undefined;
            savedMessages = undefined;
            if (isStale.getIsStale()) {
              c2 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj4 = { url: constants.GET_SAVED_MESSAGES, rejectWithError: obj11.rejectWithMigratedError() };
              const get = HTTP.get;
              obj11 = HTTPUtils;
              c3 = 4;
              c4 = 1;
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            } else {
              c4 = 3;
              const obj7 = { value: Promise.resolve(), done: true };
              return obj7;
            }
          }
        } else if (1 === c3) {
          c2 = 0;
          const obj8 = { type: "SAVED_MESSAGES_UPDATE", savedMessages: [] };
          c3 = 2;
          c4 = 1;
          const obj9 = { value: obj6.dispatch(obj8), done: false };
          obj6 = closure_129_1(closure_129_2[5]);
          return obj9;
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c4 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
        } else if (3 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          body = value;
          c2 = 0;
          const results = body.body.results;
          savedMessages = results.map((message) => {
            let obj3;
            let messageRecord = null;
            if (null != message.message) {
              obj = body(closure_1_2[6]);
              messageRecord = obj.createMessageRecord(message.message);
            }
            const obj2 = { message: messageRecord, saveData: obj3.savedMessageDataToClient(message.save_data) };
            obj3 = body(closure_1_2[4]);
            return obj2;
          });
          const obj16 = { type: "SAVED_MESSAGES_UPDATE", savedMessages };
          c3 = 3;
          c4 = 1;
          obj = { value: obj15.dispatch(obj16), done: false };
          obj15 = closure_129_1(closure_129_2[5]);
          return obj;
        }
      } catch (tmp12) {
        if (0 === c2) {
          c4 = 3;
          throw tmp12;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesActions.tsx");

export const upsertSavedMessage = function upsertSavedMessage() {
  return obj(...arguments);
};
export const deleteSavedMessage = function deleteSavedMessage() {
  return obj(...arguments);
};
export const fetchAndUpdateSavedMessages = function fetchAndUpdateSavedMessages() {
  return obj(...arguments);
};