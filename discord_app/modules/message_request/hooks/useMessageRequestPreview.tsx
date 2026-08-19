// discord_app/modules/message_request/hooks/useMessageRequestPreview.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import reinjectEphemerals from "../../../stores/MessageStore.tsx";
import generateOldThreadCutoff from "../../../stores/ReadStateStore.tsx";
import isMessagePreviewEnabledForChannel from "../MessageRequestPreviewStore.tsx";
import { Endpoints } from "../../../Constants.tsx";

const require = fn;
function loadMessageRequestData() {
  const self = this;
  const apply = _loadMessageRequestData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadMessageRequestData() {
  const self = this;
  const tmp = callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            if (obj3.isEmpty(closure_1_8)) {
              c3 = 0;
              c9 = null;
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              callback();
              v0 = 2;
              c4 = 1;
            }
            obj3 = v0(closure_1_2[6]);
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c9 = null;
          throw table;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          obj = v0(table[6]);
        }
        c3 = 0;
        c9 = null;
        c4 = 3;
        obj1 = { value: null, done: true };
        obj1[0] = arg1;
        return obj1;
      } catch (tmp23) {
        table = tmp23;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp23;
        } else {
          v0 = tmp;
        }
      }
    }
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function loadMessageRequestDataHelper() {
  const self = this;
  const apply = _loadMessageRequestDataHelper.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadMessageRequestDataHelper() {
  const self = this;
  const tmp = callback(function*() {
    if (c11 === 2) {
      c11 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      while (true) {
        c11 = 2;
        let tmp4 = c10;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c11 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_7 = tmp;
            closure_6 = tmp4;
            let lib2;
            closure_2 = undefined;
            let _Array = Array;
            let arr = Array.from(closure_1_8);
            let substr = arr.slice(0, 25);
            let lib = substr;
            c9 = 2;
            let HTTP = closure_1_0(closure_1_2[7]).HTTP;
            obj1 = { url: null, query: null, rejectWithError: true };
            obj1[0] = closure_1_7.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA;
            let obj2 = { channel_ids: null };
            obj2[0] = substr;
            obj1[1] = obj2;
            c10 = 3;
            c11 = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = HTTP.get(obj1);
            return obj3;
          }
        } else if (1 === tmp4) {
          c9 = 0;
          lib2 = lib;
          lib = lib[Symbol.iterator]();
          while (lib !== undefined) {
            closure_2 = tmp49;
            let deleteResult = set.delete(closure_2);
            c9 = 0;
            continue;
          }
          throw set;
        } else {
          if (2 === tmp4) {
            obj3 = lib2(closure_2[8]);
            let obj4 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR", requestedChannelIds: null };
            obj4[1] = lib;
            let dispatchResult = obj3.dispatch(obj4);
            c9 = 0;
            closure_5 = lib;
            closure_4 = lib[Symbol.iterator]();
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib2 = arg1;
              obj = lib2(closure_2[8]);
              let obj5 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS", requestedChannelIds: null, supplementalData: null };
              obj5[1] = lib;
              obj5[2] = lib2.body;
              let dispatchResult1 = obj.dispatch(obj5);
              c9 = 1;
            }
          } else if (4 === tmp4) {
            c9 = 0;
            closure_2.return();
            throw set;
          } else if (5 === tmp4) {
            c9 = 0;
            closure_4.return();
            throw set;
          } else {
            c9 = 0;
            lib.return();
            throw set;
          }
          c9 = 0;
          closure_3 = lib;
          closure_2 = lib[Symbol.iterator]();
          while (closure_2 !== undefined) {
            closure_2 = tmp26;
            let deleteResult1 = set.delete(closure_2);
            c9 = 0;
            continue;
          }
          c11 = 3;
          let obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        }
      }
    }
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const set = new Set();
let c9 = null;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useMessageRequestPreview.tsx");

export const useMessageRequestPreview = function useMessageRequestPreview(channel, arg1) {
  const id = channel.id;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const items = [closure_6, closure_4, closure_5];
  const items1 = [id];
  const stateFromStoresObject = id(589).useStateFromStoresObject(items, () => {
    const lastMessageIdResult = closure_1_5.lastMessageId(id);
    const messageRequestPreview = closure_1_6.getMessageRequestPreview(id);
    if (null == messageRequestPreview.message) {
      if (null != lastMessageIdResult) {
        const message = closure_1_4.getMessage(id, lastMessageIdResult);
        if (null != message) {
          const obj = { loaded: true, error: false, message: null };
          obj[2] = message;
          return obj;
        }
      }
    }
    return messageRequestPreview;
  }, items1);
  ({ loaded, message, error } = stateFromStoresObject);
  const obj2 = id(589);
  const items2 = [closure_6];
  const items3 = [id];
  const stateFromStores = id(589).useStateFromStores(items2, () => closure_1_6.shouldLoadMessageRequestPreview(id), items3);
  if (flag) {
    flag = !loaded;
  }
  if (flag) {
    flag = null == message;
  }
  if (flag) {
    flag = stateFromStores;
  }
  if (flag) {
    set.add(id);
    if (null == timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(loadMessageRequestData, 0);
    }
  }
  return { loaded, error, message };
};