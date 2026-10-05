// === Module 7515: AppChannelChat ===

// Module 7515 (AppChannelChat)
import SidebarActionTypes from "SidebarActionTypes" /* 6785 */;
import SidebarActionCreatorsDefault from "SidebarActionCreators" /* 7516 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const tmp2 = null != closure_0 && ChannelSectionStore.getCurrentSidebarChannelId(closure_0) === closure_0;
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelSectionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const tmp2 = null != closure_0 && ChannelSectionStore.getCurrentSidebarChannelId(closure_0) === closure_0;
    return tmp2;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let num;
      const obj = { hasUnread: null != closure_0 && ReadStateStore.hasUnread(closure_0), mentionCount: num };
      num = 0;
      if (null != closure_0) {
        num = ReadStateStore.getMentionCount(closure_0);
      }
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let num;
    const obj = { hasUnread: null != closure_0 && ReadStateStore.hasUnread(closure_0), mentionCount: num };
    num = 0;
    if (null != closure_0) {
      num = ReadStateStore.getMentionCount(closure_0);
    }
    return obj;
  }, items1);
});
const result = size.fileFinishedImporting("modules/app_channels/AppChannelChat.tsx");

export const openAppChannelChat = function openAppChannelChat(guild_id, id, id2) {
  const obj2 = { guildId: guild_id, channelId: id, baseChannelId: id, details: { type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: id2 } };
  const obj = SidebarActionCreatorsDefault;
  ({ type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: id2 });
  obj.openChannelAsSidebar(obj2);
};
export const closeAppChannelChat = function closeAppChannelChat(id) {
  const obj = SidebarActionCreatorsDefault;
  obj.closeChannelSidebar(id);
};
export const useIsAppChannelChatOpen = tmp2;
export const useAppChannelChatUnread = tmp3;