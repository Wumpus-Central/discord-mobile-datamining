import initialize from "initialize";
import reinjectEphemerals from "reinjectEphemerals";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import isMessagePreviewEnabledForChannel from "isMessagePreviewEnabledForChannel";
import { Endpoints } from "ME";
import set from "generateOldThreadCutoff";

const require = arg1;
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp3;
            let c3 = 1;
            if (obj3.isEmpty(outer1_8)) {
              c3 = 0;
              let c9 = null;
              c4 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              callback();
              v0 = 2;
              c4 = 1;
            }
            obj3 = v0(outer1_2[6]);
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
        const obj1 = { value: null, done: true };
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
  const _loadMessageRequestData = tmp;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let num = 2;
        c11 = 2;
        let tmp4 = c10;
        if (0 === c10) {
          if (arg0 === 1) {
            let num5 = 3;
            c11 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num4 = 3;
            c11 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_7 = tmp;
            let isMessagePreviewEnabledForChannel = tmp4;
            let lib;
            let lib2;
            let closure_2;
            let _Array = Array;
            let tmp60 = outer1_8;
            let arr = Array.from(outer1_8);
            let substr = arr.slice(0, 25);
            lib = substr;
            let c9 = 2;
            let tmp62 = outer1_0;
            let tmp63 = outer1_2;
            let HTTP = outer1_0(outer1_2[7]).HTTP;
            let obj1 = { url: null, query: null, rejectWithError: true };
            let tmp64 = outer1_7;
            obj1[0] = outer1_7.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA;
            let obj2 = { channel_ids: null };
            obj2[0] = substr;
            obj1[1] = obj2;
            c10 = 3;
            let num15 = 1;
            c11 = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = HTTP.get(obj1);
            return obj3;
          }
        } else if (1 === tmp4) {
          let tmp42 = isMessagePreviewEnabledForChannel;
          let tmp44 = set;
          c9 = 0;
          let tmp45 = lib;
          lib2 = lib;
          let tmp46 = lib;
          let tmp43 = set;
          lib2 = lib;
          lib = lib[Symbol.iterator]();
          let tmp47 = lib2;
          let tmp48 = lib;
          while (lib !== undefined) {
            let tmp50 = isMessagePreviewEnabledForChannel;
            let tmp51 = closure_7;
            c9 = 5;
            closure_2 = tmp49;
            let tmp52 = set;
            let tmp53 = closure_2;
            let deleteResult = set.delete(closure_2);
            c9 = 0;
            continue;
          }
          throw tmp43;
        } else {
          if (2 === tmp4) {
            let tmp32 = isMessagePreviewEnabledForChannel;
            let tmp33 = closure_7;
            let tmp34 = set;
            c9 = 1;
            let tmp35 = lib2;
            let tmp36 = closure_2;
            obj3 = lib2(closure_2[8]);
            let obj4 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR", requestedChannelIds: null };
            let tmp37 = lib;
            obj4[1] = lib;
            let dispatchResult = obj3.dispatch(obj4);
            c9 = 0;
            let tmp39 = isMessagePreviewEnabledForChannel;
            let tmp40 = lib;
            let generateOldThreadCutoff = lib;
            let tmp41 = lib;
            generateOldThreadCutoff = lib;
            let reinjectEphemerals = lib[Symbol.iterator]();
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              let num3 = 3;
              c11 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              let tmp14 = isMessagePreviewEnabledForChannel;
              let tmp15 = closure_7;
              lib2 = arg1;
              let tmp16 = lib2;
              let tmp17 = closure_2;
              obj = lib2(closure_2[8]);
              let obj5 = { type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS", requestedChannelIds: null, supplementalData: null };
              let tmp18 = lib;
              obj5[1] = lib;
              let tmp19 = lib2;
              obj5[2] = lib2.body;
              let dispatchResult1 = obj.dispatch(obj5);
              c9 = 1;
            }
          } else if (4 === tmp4) {
            let tmp11 = set;
            let tmp12 = set;
            c9 = 0;
            let tmp13 = closure_2;
            closure_2.return();
            throw set;
          } else if (5 === tmp4) {
            let tmp8 = set;
            let tmp9 = set;
            c9 = 0;
            let tmp10 = reinjectEphemerals;
            reinjectEphemerals.return();
            throw set;
          } else {
            let tmp5 = set;
            let tmp6 = set;
            c9 = 0;
            let tmp7 = lib;
            lib.return();
            throw set;
          }
          c9 = 0;
          let tmp21 = isMessagePreviewEnabledForChannel;
          let tmp22 = lib;
          let initialize = lib;
          let tmp23 = lib;
          initialize = lib;
          closure_2 = lib[Symbol.iterator]();
          let tmp24 = initialize;
          let tmp25 = closure_2;
          while (closure_2 !== undefined) {
            let tmp27 = isMessagePreviewEnabledForChannel;
            let tmp28 = closure_7;
            c9 = 3;
            closure_2 = tmp26;
            let tmp29 = set;
            let tmp30 = closure_2;
            let deleteResult1 = set.delete(closure_2);
            c9 = 0;
            continue;
          }
          let num2 = 3;
          c11 = 3;
          let obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        }
      }
    }
  });
  const _loadMessageRequestDataHelper = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let set = new Set();
let c9 = null;
const result = set.fileFinishedImporting("modules/message_request/hooks/useMessageRequestPreview.tsx");

export const useMessageRequestPreview = function useMessageRequestPreview(channel, arg1) {
  let error;
  let loaded;
  let message;
  const id = channel.id;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const items = [isMessagePreviewEnabledForChannel, reinjectEphemerals, generateOldThreadCutoff];
  const items1 = [id];
  const stateFromStoresObject = id(589).useStateFromStoresObject(items, () => {
    const lastMessageIdResult = outer1_5.lastMessageId(id);
    const messageRequestPreview = outer1_6.getMessageRequestPreview(id);
    if (null == messageRequestPreview.message) {
      if (null != lastMessageIdResult) {
        const message = outer1_4.getMessage(id, lastMessageIdResult);
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
  const items2 = [isMessagePreviewEnabledForChannel];
  const items3 = [id];
  const stateFromStores = id(589).useStateFromStores(items2, () => outer1_6.shouldLoadMessageRequestPreview(id), items3);
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