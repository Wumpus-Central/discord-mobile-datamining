// discord_app/modules/message_request/hooks/useMessageRequestPreview.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import Constants from "../../../Constants.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import MessageStore from "../../../stores/MessageStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import MessageRequestPreviewStore from "../MessageRequestPreviewStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c1, c10, c11, c4, closure_4, id;

function loadMessageRequestData() {
  return obj(...arguments);
}
let obj = function _loadMessageRequestData() {
  obj = _asyncToGenerator(async () => {
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
      let c3;
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
            let closure_0 = tmp;
            c3 = 1;
            const obj3 = _modDef12;
            if (!obj3.isEmpty(set)) {
              c1 = 2;
              c4 = 1;
              const obj5 = { value: closure_128_12(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          c9 = null;
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c9 = null;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_1(closure_128_2[8]);
        }
        c3 = 0;
        c9 = null;
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp19) {
        closure_2 = tmp19;
        if (0 === c3) {
          c4 = 3;
          throw tmp19;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function loadMessageRequestDataHelper() {
  return obj(...arguments);
}
obj = function _loadMessageRequestDataHelper() {
  obj = _asyncToGenerator(async () => {
    let obj5;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let body;
        let c2;
        let substr;
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
            let closure_7 = tmp;
            let closure_6 = tmp4;
            body = undefined;
            c2 = undefined;
            let _Array = Array;
            let arr = Array.from(set);
            substr = arr.slice(0, 25);
            c9 = 2;
            let HTTP = HTTPUtils.HTTP;
            let request = { url: constants.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA, query: obj5, rejectWithError: true };
            obj5 = { channel_ids: substr };
            c10 = 3;
            c11 = 1;
            let obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else {
          let closure_0;
          if (1 === tmp4) {
            c9 = 0;
            body = substr;
            closure_0 = substr[Symbol.iterator]();
            while (closure_0 !== undefined) {
              c2 = tmp57;
              let deleteResult = closure_135_8.delete(c2);
              c9 = 0;
              continue;
            }
            throw closure_1_8;
          } else {
            if (2 === tmp4) {
              c9 = 1;
              let obj4 = closure_135_1(closure_135_2[10]);
              let obj7 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR", requestedChannelIds: substr };
              let dispatchResult = obj4.dispatch(obj7);
            } else {
              let closure_2;
              if (3 === tmp4) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 0;
                  let closure_3 = substr;
                  closure_2 = substr[Symbol.iterator]();
                  while (closure_2 !== undefined) {
                    c2 = tmp26;
                    let deleteResult1 = closure_135_8.delete(c2);
                    c9 = 0;
                    continue;
                  }
                  c11 = 3;
                  let obj8 = { value, done: true };
                  return obj8;
                } else {
                  body = value;
                  obj = closure_135_1(closure_135_2[10]);
                  let obj9 = {
                    type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
                    requestedChannelIds: substr,
                    supplementalData: body.body,
                  };
                  let dispatchResult1 = obj.dispatch(obj9);
                  c9 = 1;
                }
              } else if (4 === tmp4) {
                c9 = 0;
                closure_2.return();
                throw closure_1_8;
              } else if (5 === tmp4) {
                c9 = 0;
                closure_4.return();
                throw closure_1_8;
              } else {
                c9 = 0;
                closure_0.return();
                throw closure_1_8;
              }
            }
            c9 = 0;
            let closure_5 = substr;
            closure_4 = substr[Symbol.iterator]();
            while (closure_4 !== undefined) {
              c2 = tmp44;
              let deleteResult2 = closure_135_8.delete(c2);
              c9 = 0;
              continue;
            }
            c11 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const set = new Set();
let c9 = null;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1) => {
      let closure_9;
      let error;
      let first;
      let loaded;
      let message;
      let timeout;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp15;
      let tmp9;
      obj = arg1;
      const obj2 = id(576);
      const cResult = obj2.c(12);
      id = id.id;
      if (undefined === arg1) {
        obj = {};
      }
      const enabled = obj.enabled;
      let tmp4 = undefined === enabled || enabled;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageRequestPreviewStore, MessageStore, ReadStateStore];
        cResult[0] = items;
        first = items;
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
                return { loaded: true, error: false, message };
              }
            }
          }
          return messageRequestPreview;
        };
        const items1 = [id];
        cResult[1] = id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = id(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp9, tmp10);
      ({ loaded, message, error } = stateFromStoresObject);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MessageRequestPreviewStore];
        cResult[4] = items2;
        tmp12 = items2;
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
        tmp15 = items3;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[6];
        tmp15 = cResult[7];
      }
      const tmpResult2 = id(504);
      const stateFromStores = tmpResult2.useStateFromStores(tmp12, tmp14, tmp15);
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
          let tmp23;
          if (cResult[10] === message) {
            tmp23 = cResult[11];
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
    }
  : (id) => {
      let closure_9;
      let error;
      let loaded;
      let message;
      let timeout;
      id = id.id;
      obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let flag = obj.enabled;
      if (flag === undefined) {
        flag = true;
      }
      const items = [MessageRequestPreviewStore, MessageStore, ReadStateStore];
      const items1 = [id];
      const obj2 = id(504);
      const stateFromStoresObject = obj2.useStateFromStoresObject(
        items,
        () => {
          const lastMessageIdResult = ReadStateStore.lastMessageId(id);
          const messageRequestPreview = MessageRequestPreviewStore.getMessageRequestPreview(id);
          if (null == messageRequestPreview.message) {
            if (null != lastMessageIdResult) {
              const message = MessageStore.getMessage(id, lastMessageIdResult);
              if (null != message) {
                return { loaded: true, error: false, message };
              }
            }
          }
          return messageRequestPreview;
        },
        items1,
      );
      ({ loaded, message, error } = stateFromStoresObject);
      const items2 = [MessageRequestPreviewStore];
      const items3 = [id];
      const obj3 = id(504);
      const stateFromStores = obj3.useStateFromStores(
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
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestPreview.tsx");

export const useMessageRequestPreview = tmp3;
