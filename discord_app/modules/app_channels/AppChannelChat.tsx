// === Module 7515: AppChannelChat ===

// Module 7515 (AppChannelChat)
import SidebarActionTypes from "SidebarActionTypes" /* 6785 */;
import SidebarActionCreatorsDefault from "SidebarActionCreators" /* 7516 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = ChannelSectionStore.getCurrentSidebarChannelId(closure_0) === closure_0;
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelSectionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = ChannelSectionStore.getCurrentSidebarChannelId(closure_0) === closure_0;
    }
    return tmp2;
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelChat.tsx");

export const openAppChannelChat = function openAppChannelChat(guild_id, id, id2) {
  const obj2 = { guildId: guild_id, channelId: id, baseChannelId: id, details: null };
  const obj = SidebarActionCreatorsDefault;
  obj2.details = { type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: id2 };
  obj.openChannelAsSidebar(obj2);
};
export const closeAppChannelChat = function closeAppChannelChat(id) {
  SidebarActionCreatorsDefault.closeChannelSidebar(id);
};
export const useIsAppChannelChatOpen = tmp2;
export const useAppChannelChatUnread = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let hasUnreadResult = null != closure_0;
      if (hasUnreadResult) {
        hasUnreadResult = ReadStateStore.hasUnread(closure_0);
      }
      const obj = { hasUnread: hasUnreadResult, mentionCount: null };
      let num = 0;
      if (null != closure_0) {
        num = ReadStateStore.getMentionCount(closure_0);
      }
      obj.mentionCount = num;
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    let hasUnreadResult = null != closure_0;
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(closure_0);
    }
    const obj = { hasUnread: hasUnreadResult, mentionCount: null };
    let num = 0;
    if (null != closure_0) {
      num = ReadStateStore.getMentionCount(closure_0);
    }
    obj.mentionCount = num;
    return obj;
  }, items1);
});