// === Module 17087: useSortedMessageRequests ===

// Module 17087 (useSortedMessageRequests)
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import MessageRequestStore from "MessageRequestStore" /* 6734 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let messageRequestChannelIds;
  let stateFromStoresArray;
  let stateFromStoresObject;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = stateFromStoresArray(stateFromStoresObject[5]);
  const cResult = obj.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    const fn = function l() {
      return ChannelStore.getPrivateChannelsVersion();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStoresArray(stateFromStoresObject[6]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore, MessageRequestStore];
    const fn2 = function h() {
      const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
      const arr = Array.from(messageRequestChannelIds.getMessageRequestChannelIds());
      const mapped = arr.map((item) => closure_0[item]);
      const found = mapped.filter((item) => null != item);
      const obj = stateFromStoresArray(stateFromStoresObject[7]);
      return obj.sortChannelIds(found);
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult3 = stateFromStoresArray(stateFromStoresObject[6]);
  stateFromStoresArray = tmpResult3.useStateFromStoresArray(tmp8, tmp9, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    cResult[6] = items3;
    tmp13 = items3;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== stateFromStoresArray) {
    const fn3 = function _() {
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
    cResult[8] = fn3;
    cResult[9] = items4;
    tmp16 = items4;
    tmp15 = fn3;
  } else {
    tmp15 = cResult[8];
    tmp16 = cResult[9];
  }
  const tmpResult4 = stateFromStoresArray(stateFromStoresObject[6]);
  stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp13, tmp15, tmp16);
  if (cResult[10] === stateFromStoresArray) {
    let tmp18;
    if (cResult[11] === stateFromStoresObject) {
      tmp18 = cResult[12];
    }
    return tmp18;
  }
  if (cResult[13] !== stateFromStoresObject) {
    const fn4 = function y(channel) {
      return { channel, user: stateFromStoresObject[channel.id] };
    };
    cResult[13] = stateFromStoresObject;
    cResult[14] = fn4;
    tmp19 = fn4;
  } else {
    tmp19 = cResult[14];
  }
  let mapped = stateFromStoresArray.map(tmp19);
  cResult[10] = stateFromStoresArray;
  cResult[11] = stateFromStoresObject;
  cResult[12] = mapped;
  tmp18 = mapped;
}) : (() => {
  let messageRequestChannelIds;
  let stateFromStoresArray;
  let stateFromStoresObject;
  let obj = stateFromStoresArray(stateFromStoresObject[6]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getPrivateChannelsVersion());
  const items1 = [ChannelStore, MessageRequestStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStoresArray(stateFromStoresObject[6]);
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
    const arr = Array.from(messageRequestChannelIds.getMessageRequestChannelIds());
    const mapped = arr.map((item) => closure_0[item]);
    const found = mapped.filter((item) => null != item);
    const obj = stateFromStoresArray(stateFromStoresObject[7]);
    return obj.sortChannelIds(found);
  }, items2);
  const items3 = [UserStore];
  const items4 = [stateFromStoresArray];
  const obj3 = stateFromStoresArray(stateFromStoresObject[6]);
  stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => {
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
  return react.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: stateFromStoresObject[channel.id] })), items5);
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useSortedMessageRequests.tsx");

export default tmp2;