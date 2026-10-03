// discord_app/modules/message_request/hooks/useMessageRequestPreview.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import MessageStore from "../../../stores/MessageStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import MessageRequestPreviewStore from "../MessageRequestPreviewStore.tsx";

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
let closure_11 = async function _loadMessageRequestData() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp3;
          c3 = 1;
          if (obj3.isEmpty(set)) {
            c3 = 0;
            closure_128_9 = null;
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
        closure_128_1(closure_128_2[8]);
      }
      c3 = 0;
      closure_128_9 = null;
      c4 = 3;
      const obj5 = { value, done: true };
      return obj5;
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
let closure_13 = async function _loadMessageRequestDataHelper() {
  if (c11 === 2) {
    c11 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          let obj3 = { value, done: true };
          return obj3;
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
          let request = { url: constants.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA, query: null, rejectWithError: true };
          let obj5 = { channel_ids: substr };
          request.query = obj5;
          c10 = 3;
          c11 = 1;
          let obj6 = { value: HTTP.get(request), done: false };
          return obj6;
        }
      } else if (1 === tmp4) {
        c9 = 0;
        closure_1 = closure_134_0;
        _require = closure_134_0[Symbol.iterator]();
        while (_require !== undefined) {
          closure_134_2 = tmp49;
          let deleteResult = closure_135_8.delete(closure_134_2);
          c9 = 0;
          continue;
        }
        throw closure_1_8;
      } else {
        if (2 === tmp4) {
          let obj4 = closure_135_1(closure_135_2[10]);
          let obj7 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR", requestedChannelIds: null };
          obj7.requestedChannelIds = closure_134_0;
          let dispatchResult = obj4.dispatch(obj7);
          c9 = 0;
          closure_5 = closure_134_0;
          MessageStore = closure_134_0[Symbol.iterator]();
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_134_1 = value;
            let obj = closure_135_1(closure_135_2[10]);
            let obj8 = {
              type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
              requestedChannelIds: null,
              supplementalData: null,
            };
            obj8.requestedChannelIds = closure_134_0;
            obj8.supplementalData = closure_134_1.body;
            let dispatchResult1 = obj.dispatch(obj8);
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
        let obj9 = { value, done: true };
        return obj9;
      }
    }
  }
};
const Endpoints = fn(1085).Endpoints;
const set = new Set();
let c9 = null;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestPreview.tsx");

export const useMessageRequestPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1) => {
      let obj = arg1;
      const cResult = id(576).c(12);
      id = id.id;
      if (undefined === arg1) {
        obj = {};
      }
      const enabled = obj.enabled;
      let tmp4 = undefined === enabled || enabled;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageRequestPreviewStore, MessageStore, ReadStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function n() {
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
        };
        const items1 = [id];
        cResult[1] = id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const obj2 = id(576);
      const stateFromStoresObject = id(504).useStateFromStoresObject(first, tmp9, tmp10);
      ({ loaded, message, error } = stateFromStoresObject);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MessageRequestPreviewStore];
        cResult[4] = items2;
        let tmp12 = items2;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== id) {
        const fn2 = function f() {
          return MessageRequestPreviewStore.shouldLoadMessageRequestPreview(id);
        };
        const items3 = [id];
        cResult[5] = id;
        cResult[6] = fn2;
        cResult[7] = items3;
        let tmp15 = items3;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[6];
        tmp15 = cResult[7];
      }
      const tmpResult = id(504);
      const stateFromStores = id(504).useStateFromStores(tmp12, tmp14, tmp15);
      if (tmp4) {
        tmp4 = !loaded;
      }
      if (tmp4) {
        tmp4 = null == message;
      }
      if (tmp4) {
        tmp4 = stateFromStores;
      }
      if (tmp4) {
        set.add(id);
        if (null == timeout) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(loadMessageRequestData, 0);
        }
      }
      if (cResult[8] === error) {
        if (cResult[9] === loaded) {
          if (cResult[10] === message) {
            let tmp23 = cResult[11];
          }
          return tmp23;
        }
      }
      const obj3 = { loaded, error, message };
      cResult[8] = error;
      cResult[9] = loaded;
      cResult[10] = message;
      cResult[11] = obj3;
      tmp23 = obj3;
      const tmpResult2 = id(504);
    }
  : (id) => {
      id = id.id;
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
      const stateFromStoresObject = id(504).useStateFromStoresObject(
        items,
        () => {
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
        },
        items1,
      );
      ({ loaded, message, error } = stateFromStoresObject);
      const obj2 = id(504);
      const items2 = [MessageRequestPreviewStore];
      const items3 = [id];
      const stateFromStores = id(504).useStateFromStores(
        items2,
        () => MessageRequestPreviewStore.shouldLoadMessageRequestPreview(id),
        items3,
      );
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
