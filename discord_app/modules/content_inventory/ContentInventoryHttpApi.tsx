// discord_app/modules/content_inventory/ContentInventoryHttpApi.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { ContentInventoryFeedKey } from "ContentInventoryConstants.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _getMyContentInventory() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === date) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp3;
              c1 = tmp7;
              let callback;
              c1 = undefined;
              dependencyMap = undefined;
              ({ token: c0, feedId: c1, feature: c2 } = callback);
              body = undefined;
              let constants;
              date = undefined;
              date = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              constants = 1;
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: null };
              obj2[0] = date.MY_CONTENT_INVENTORY(callback);
              const obj3 = { for_game_profile: null, feature: null };
              obj3[0] = c1 === constants.GAME_PROFILE_FEED;
              obj3[1] = dependencyMap;
              obj2[1] = obj3;
              obj2[2] = callback(530).rejectWithMigratedError();
              date = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj2);
              return obj4;
            }
          } else if (2 === tmp7) {
            constants = 0;
            c6 = body;
            const aPIError = new callback(4277).APIError(c6);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            constants = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            body = body.body;
            constants = body.wait_ms_until_next_fetch;
            if (null != constants) {
              const _Date = Date;
              const _Date2 = Date;
              date = new Date(Date.now() + constants);
              body.expired_at = date.toISOString();
            }
            constants = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp29) {
          body = tmp29;
          if (tmp4 === constants) {
            c6 = tmp2;
            throw tmp29;
          } else {
            date = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function _getContentInventoryOutbox() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              body = undefined;
              c5 = 1;
              obj1 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_START", userId: null };
              obj1[1] = callback;
              callback2(closure_1_2[5]).dispatch(obj1);
              const HTTP = callback(closure_1_2[3]).HTTP;
              const obj2 = { url: null, signal: null, rejectWithError: null };
              obj2[0] = c5.CONTENT_INVENTORY_OUTBOX(callback);
              obj2[1] = body;
              const obj10 = callback2(closure_1_2[5]);
              obj2[2] = callback(closure_1_2[3]).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            dependencyMap = closure_4;
            let obj4 = body(709);
            obj4 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE", userId: null };
            obj4[1] = callback;
            obj4.dispatch(obj4);
            const aPIError = new callback(4277).APIError(dependencyMap);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            body = body.body;
            obj = body(709);
            const obj6 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS", outbox: null, userId: null };
            obj6[1] = body;
            obj6[2] = callback;
            obj.dispatch(obj6);
            c5 = 0;
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = body;
            return obj7;
          }
        } catch (tmp30) {
          closure_4 = tmp30;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp30;
          } else {
            c6 = tmp;
          }
        }
      }
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
function _deleteContentInventoryEntryHistory() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_5 = tmp3;
      c7 = 1;
      callback(709).dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START" });
      const HTTP = lib(530).HTTP;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_5.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(lib.id);
      const obj9 = callback(709);
      obj1[1] = lib(530).rejectWithMigratedError();
      yield HTTP.del(obj1);
      if (1 === tmp7) {
        c7 = 0;
        let message;
        if (body != null) {
          body = body.body;
          if (body != null) {
            message = body.message;
          }
        }
        closure_3 = message;
        if (message == null) {
          const intl = lib(1236).intl;
          closure_3 = intl.string(lib(1236).t.FMbL3s);
        }
        let obj3 = callback(709);
        obj3 = { type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE", error: null };
        obj3[1] = closure_3;
        obj3.dispatch(obj3);
        c9 = 3;
      } else if (arg0 === 1) {
        c9 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = callback(709);
        const obj4 = { type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS", userId: null, entry: null };
        obj4[1] = callback;
        obj4[2] = lib;
        obj.dispatch(obj4);
        if (dependencyMap != null) {
          dependencyMap();
        }
        c7 = 0;
      }
      c7 = 0;
      return arg1;
    })();
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
function _postTrackToContentInventory() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              const table = tmp7;
              let constants = 1;
              const HTTP = callback(closure_1_2[3]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = constants.MY_SPOTIFY_CONTENT_INVENTORY;
              const obj2 = { connection_id: null, tracks: null };
              obj2[0] = callback;
              const items = [closure_1];
              obj2[1] = items;
              obj1[1] = obj2;
              obj1[2] = callback(closure_1_2[3]).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            constants = 0;
            callback = closure_4;
            const aPIError = new callback(table[4]).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            constants = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          closure_4 = tmp19;
          if (tmp4 === constants) {
            c7 = tmp2;
            throw tmp19;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/content_inventory/ContentInventoryHttpApi.tsx");

export const getMyContentInventory = function getMyContentInventory(arg0) {
  const self = this;
  const apply = _getMyContentInventory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getContentInventoryOutbox = function getContentInventoryOutbox() {
  const self = this;
  const apply = _getContentInventoryOutbox.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteContentInventoryEntryHistory = function deleteContentInventoryEntryHistory() {
  const self = this;
  const apply = _deleteContentInventoryEntryHistory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const postTrackToContentInventory = function postTrackToContentInventory() {
  const self = this;
  const apply = _postTrackToContentInventory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};