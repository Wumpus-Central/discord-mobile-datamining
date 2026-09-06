// === Module 12594: useMessageRequestPreview ===

// Module 12594 (useMessageRequestPreview)
import _modDef12 from "module_12" /* 12 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MessageStore from "MessageStore" /* 4781 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import MessageRequestPreviewStore from "MessageRequestPreviewStore" /* 12595 */;

require = fn;
function loadMessageRequestData() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _loadMessageRequestData(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp3;
          c3 = 1;
          if (obj3.isEmpty(set)) {
            c3 = 0;
            closure_128_9 = null;
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            closure_128_12();
            c1 = 2;
            c4 = 1;
          }
          obj3 = _modDef12;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_9 = null;
        throw closure_2;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj = closure_128_1(closure_128_2[6]);
      }
      c3 = 0;
      closure_128_9 = null;
      c4 = 3;
      const obj1 = { value, done: true };
      return obj1;
    } catch (tmp23) {
      closure_2 = tmp23;
      if (tmp4 === c3) {
        c4 = tmp2;
        throw tmp23;
      } else {
        c1 = tmp;
      }
    }
  }
};
function loadMessageRequestDataHelper() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _loadMessageRequestDataHelper(arg0, value) {
  if (c11 === 2) {
    c11 = 3;
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
    while (true) {
      c11 = 2;
      let tmp4 = c10;
      if (0 === c10) {
        if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_7 = tmp;
          closure_6 = tmp4;
          closure_134_1 = undefined;
          closure_134_2 = undefined;
          let _Array = Array;
          let arr = Array.from(set);
          let substr = arr.slice(0, 25);
          closure_134_0 = substr;
          c9 = 2;
          let HTTP = HTTPUtils.HTTP;
          let request = { url: null, query: null, rejectWithError: true };
          request.url = constants.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA;
          let obj1 = { channel_ids: substr };
          request.query = obj1;
          c10 = 3;
          c11 = 1;
          let obj2 = { value: HTTP.get(request), done: false };
          return obj2;
        }
      } else if (1 === tmp4) {
        c9 = 0;
        let tmp43 = closure_1_8;
        closure_1 = closure_134_0;
        _require = closure_134_0[Symbol.iterator]();
        while (_require !== undefined) {
          closure_134_2 = tmp49;
          let deleteResult = closure_135_8.delete(closure_134_2);
          c9 = 0;
          continue;
        }
        throw tmp43;
      } else {
        if (2 === tmp4) {
          closure_135_1(closure_135_2[8]);
          let obj3 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR", requestedChannelIds: null };
          obj3.requestedChannelIds = closure_134_0;
          let dispatchResult = obj3.dispatch(obj3);
          c9 = 0;
          closure_5 = closure_134_0;
          MessageStore = closure_134_0[Symbol.iterator]();
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_134_1 = value;
            obj = closure_135_1(closure_135_2[8]);
            let obj4 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS", requestedChannelIds: null, supplementalData: null };
            obj4.requestedChannelIds = closure_134_0;
            obj4.supplementalData = closure_134_1.body;
            let dispatchResult1 = obj.dispatch(obj4);
            c9 = 1;
          }
        } else if (4 === tmp4) {
          c9 = 0;
          dependencyMap.return();
          throw closure_1_8;
        } else if (5 === tmp4) {
          c9 = 0;
          MessageStore.return();
          throw closure_1_8;
        } else {
          c9 = 0;
          _require.return();
          throw closure_1_8;
        }
        c9 = 0;
        closure_3 = closure_134_0;
        dependencyMap = closure_134_0[Symbol.iterator]();
        while (dependencyMap !== undefined) {
          closure_134_2 = tmp26;
          let deleteResult1 = closure_135_8.delete(closure_134_2);
          c9 = 0;
          continue;
        }
        c11 = 3;
        let obj5 = { value, done: true };
        return obj5;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const set = new Set();
let c9 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestPreview.tsx");

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
  const items = [MessageRequestPreviewStore, MessageStore, ReadStateStore];
  const items1 = [id];
  const stateFromStoresObject = id(504).useStateFromStoresObject(items, () => {
    const lastMessageIdResult = ReadStateStore.lastMessageId(id);
    const messageRequestPreview = MessageRequestPreviewStore.getMessageRequestPreview(id);
    if (null == messageRequestPreview.message) {
      if (null != lastMessageIdResult) {
        const message = MessageStore.getMessage(id, lastMessageIdResult);
        if (null != message) {
          const obj = { loaded: true, error: false, message };
          return obj;
        }
      }
    }
    return messageRequestPreview;
  }, items1);
  ({ loaded, message, error } = stateFromStoresObject);
  const obj2 = id(504);
  const items2 = [MessageRequestPreviewStore];
  const items3 = [id];
  const stateFromStores = id(504).useStateFromStores(items2, () => MessageRequestPreviewStore.shouldLoadMessageRequestPreview(id), items3);
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