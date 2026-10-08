// === Module 17368: useSortedMessageRequests ===

// Module 17368 (useSortedMessageRequests)
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import UserStore from "UserStore" /* 1389 */;
import MessageRequestStore from "MessageRequestStore" /* 6060 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSortedMessageRequests.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSortedMessageRequests() {
  const cResult = stateFromStoresArray(stateFromStoresObject[5]).c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    const fn = function u() {
      return ChannelStore.getPrivateChannelsVersion();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStoresArray(stateFromStoresObject[5]);
  const stateFromStores = stateFromStoresArray(stateFromStoresObject[6]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore, MessageRequestStore];
    class S {
      constructor() {
        closure_0 = closure_1_3.getMutablePrivateChannels();
        arr = Array.from(closure_1_5.getMessageRequestChannelIds());
        mapped = arr.map((item) => closure_0[item]);
        found = mapped.filter((item) => null != item);
        obj = closure_0(closure_1[7]);
        return obj.sortChannelIds(found);
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    let tmp9 = S;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    class S {
      constructor() {
        closure_0 = closure_1_3.getMutablePrivateChannels();
        arr = Array.from(closure_1_5.getMessageRequestChannelIds());
        mapped = arr.map((item) => closure_0[item]);
        found = mapped.filter((item) => null != item);
        obj = closure_0(closure_1[7]);
        return obj.sortChannelIds(found);
      }
    }
    let tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult = stateFromStoresArray(stateFromStoresObject[6]);
  stateFromStoresArray = stateFromStoresArray(stateFromStoresObject[6]).useStateFromStoresArray(tmp8, tmp9, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    cResult[6] = items3;
    class S {
      constructor() {
        closure_0 = closure_1_3.getMutablePrivateChannels();
        arr = Array.from(closure_1_5.getMessageRequestChannelIds());
        mapped = arr.map((item) => closure_0[item]);
        found = mapped.filter((item) => null != item);
        obj = closure_0(closure_1[7]);
        return obj.sortChannelIds(found);
      }
    }
  } else {
    const tmp13 = cResult[6];
  }
  if (cResult[7] !== stateFromStoresArray) {
    const fn2 = function _() {
      const obj = {};
      const item = stateFromStoresArray.forEach((id) => {
        user = user.getUser(id.recipients[0]);
        if (null != user) {
          obj[id.id] = user;
        }
      });
      return obj;
    };
    const items4 = [stateFromStoresArray];
    cResult[7] = stateFromStoresArray;
    class S {
      constructor() {
        closure_0 = closure_1_3.getMutablePrivateChannels();
        arr = Array.from(closure_1_5.getMessageRequestChannelIds());
        mapped = arr.map((item) => closure_0[item]);
        found = mapped.filter((item) => null != item);
        obj = closure_0(closure_1[7]);
        return obj.sortChannelIds(found);
      }
    }
    cResult[8] = fn2;
    cResult[9] = items4;
    let tmp16 = items4;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[8];
    tmp16 = cResult[9];
  }
  const tmpResult3 = stateFromStoresArray(stateFromStoresObject[6]);
  stateFromStoresObject = stateFromStoresArray(stateFromStoresObject[6]).useStateFromStoresObject(tmp13, tmp15, tmp16);
  if (cResult[10] === stateFromStoresArray) {
    if (cResult[11] === stateFromStoresObject) {
      return cResult[12];
    }
  }
  if (cResult[13] !== stateFromStoresObject) {
    class M {
      constructor(arg0) {
        obj = { channel: arg0, user: closure_1[arg0.id] };
        return obj;
      }
    }
    cResult[13] = stateFromStoresObject;
    cResult[14] = M;
    class S {
      constructor() {
        closure_0 = closure_1_3.getMutablePrivateChannels();
        arr = Array.from(closure_1_5.getMessageRequestChannelIds());
        mapped = arr.map((item) => closure_0[item]);
        found = mapped.filter((item) => null != item);
        obj = closure_0(closure_1[7]);
        return obj.sortChannelIds(found);
      }
    }
  } else {
    class M {
      constructor(arg0) {
        obj = { channel: arg0, user: closure_1[arg0.id] };
        return obj;
      }
    }
  }
  let mapped = stateFromStoresArray.map(tmp18);
  cResult[10] = stateFromStoresArray;
  cResult[11] = stateFromStoresObject;
  cResult[12] = mapped;
  const tmpResult4 = stateFromStoresArray(stateFromStoresObject[6]);
}) : (function useSortedMessageRequests() {
  const items = [ChannelStore];
  const stateFromStores = stateFromStoresArray(stateFromStoresObject[6]).useStateFromStores(items, () => ChannelStore.getPrivateChannelsVersion());
  let obj = stateFromStoresArray(stateFromStoresObject[6]);
  const items1 = [ChannelStore, MessageRequestStore];
  const items2 = [stateFromStores];
  stateFromStoresArray = stateFromStoresArray(stateFromStoresObject[6]).useStateFromStoresArray(items1, () => {
    const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
    const mapped = Array.from(messageRequestChannelIds.getMessageRequestChannelIds()).map((item) => closure_0[item]);
    const found = mapped.filter((item) => null != item);
    const arr = Array.from(messageRequestChannelIds.getMessageRequestChannelIds());
    return stateFromStoresArray(stateFromStoresObject[7]).sortChannelIds(found);
  }, items2);
  const obj2 = stateFromStoresArray(stateFromStoresObject[6]);
  const items3 = [UserStore];
  const items4 = [stateFromStoresArray];
  stateFromStoresObject = stateFromStoresArray(stateFromStoresObject[6]).useStateFromStoresObject(items3, () => {
    const obj = {};
    const item = stateFromStoresArray.forEach((id) => {
      user = user.getUser(id.recipients[0]);
      if (null != user) {
        obj[id.id] = user;
      }
    });
    return obj;
  }, items4);
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return noop.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: stateFromStoresObject[channel.id] })), items5);
});