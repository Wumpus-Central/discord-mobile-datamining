// === Module 17811: ContentInventoryHttpApi ===

// Module 17811 (ContentInventoryHttpApi)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_6 = async function _getMyContentInventory(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ token: closure_129_0, feedId: closure_129_1, feature: closure_129_2 } = closure_0);
          let body;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[3]).HTTP;
          const request = { url: closure_130_5.MY_CONTENT_INVENTORY(closure_129_0), query: null, rejectWithError: null };
          const obj2 = { for_game_profile: closure_129_1 === closure_130_4.GAME_PROFILE_FEED, feature: closure_129_2 };
          request.query = obj2;
          request.rejectWithError = closure_130_0(closure_130_2[3]).rejectWithMigratedError();
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.get(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_6 = closure_3;
        const aPIError = new closure_130_0(closure_130_2[4]).APIError(closure_129_6);
        throw aPIError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        body = value.body;
        closure_129_4 = body.wait_ms_until_next_fetch;
        if (null != closure_129_4) {
          const _Date = Date;
          const _Date2 = Date;
          const date = new Date(Date.now() + closure_129_4);
          closure_129_5 = date;
          body.expired_at = closure_129_5.toISOString();
        }
        c4 = 0;
        c6 = 3;
        obj = { value: body, done: true };
        return obj;
      }
    } catch (tmp29) {
      closure_3 = tmp29;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp29;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_7 = async function _getContentInventoryOutbox(userId, signal) {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = userId;
            let body;
            c5 = 1;
            const obj1 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_START", userId };
            DispatcherDefault.dispatch(obj1);
            const HTTP = HTTPUtils.HTTP;
            const obj2 = { url: Endpoints.CONTENT_INVENTORY_OUTBOX(userId), signal, rejectWithError: null };
            obj2.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c6 = 2;
            c7 = 1;
            const obj3 = { value: HTTP.get(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = closure_4;
          let obj4 = closure_131_1(closure_131_2[5]);
          obj4 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE", userId: closure_130_0 };
          obj4.dispatch(obj4);
          const aPIError = new closure_131_0(closure_131_2[4]).APIError(closure_130_2);
          throw aPIError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          body = value.body;
          obj = closure_131_1(closure_131_2[5]);
          const obj6 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS", outbox: body, userId: closure_130_0 };
          obj.dispatch(obj6);
          c5 = 0;
          c7 = 3;
          const obj7 = { value: body, done: true };
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
};
let closure_8 = async function _deleteContentInventoryEntryHistory(arg0, arg1, arg2) {
  let id = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2) => {
    closure_5 = tmp3;
    closure_132_0 = id;
    closure_132_1 = closure_1;
    closure_132_2 = closure_2;
    DispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START" });
    const HTTP = HTTPUtils.HTTP;
    const obj1 = { url: Endpoints.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(id.id), rejectWithError: null };
    obj1.rejectWithError = HTTPUtils.rejectWithMigratedError();
    await HTTP.del(obj1);
    if (1 === tmp7) {
      c7 = 0;
      let message;
      if (tmp30 != null) {
        const body = tmp30.body;
        if (body != null) {
          message = body.message;
        }
      }
      closure_3 = message;
      if (message == null) {
        const intl = closure_133_0(closure_133_2[6]).intl;
        closure_3 = intl.string(closure_133_0(closure_133_2[6]).t.FMbL3s);
      }
      closure_132_3 = closure_3;
      closure_133_1(closure_133_2[5]);
      const obj3 = { type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE", error: closure_132_3 };
      obj3.dispatch(obj3);
      c9 = 3;
    } else if (arg0 === 1) {
      c9 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_133_1(closure_133_2[5]).dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS", userId: closure_132_1, entry: closure_132_0 });
      if (closure_132_2 != null) {
        closure_132_2();
      }
      c7 = 0;
      closure_133_1(closure_133_2[5]);
    }
    return value;
  })();
};
let closure_9 = async function _postTrackToContentInventory(connection_id, arg1) {
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.MY_SPOTIFY_CONTENT_INVENTORY, body: null, rejectWithError: null };
            const obj1 = { connection_id, tracks: null };
            const items = [closure_1];
            obj1.tracks = items;
            request.body = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c6 = 2;
            c7 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          const aPIError = new closure_131_0(closure_131_2[4]).APIError(closure_130_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        closure_4 = tmp19;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp19;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const ContentInventoryFeedKey = fn(8358).ContentInventoryFeedKey;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryHttpApi.tsx");

export const getMyContentInventory = function getMyContentInventory() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getContentInventoryOutbox = function getContentInventoryOutbox() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteContentInventoryEntryHistory = function deleteContentInventoryEntryHistory() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const postTrackToContentInventory = function postTrackToContentInventory() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};