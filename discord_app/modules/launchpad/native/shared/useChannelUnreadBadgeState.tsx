// === Module 16683: useChannelUnreadBadgeState ===

// Module 16683 (useChannelUnreadBadgeState)
import NewChannelsStore from "NewChannelsStore" /* 7774 */;
import ReadStateStore from "ReadStateStore" /* 4771 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = function useChannelUnreadBadgeState(channel, flag) {
  _require = channel;
  closure_129_0 = channel;
  closure_129_1 = flag;
  const items = [ReadStateStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !dependencyMap;
    if (!dependencyMap) {
      hasUnreadResult = ReadStateStore.hasUnread(user.id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = ReadStateStore.getMentionCount(user.id);
    obj.isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(user.id);
    return obj;
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj = require("initialize");
  const items1 = [NewChannelsStore];
  const items2 = [, ];
  ({ guild_id: arr3[0], id: arr3[1] } = channel);
  const stateFromStores = require("initialize").useStateFromStores(items1, () => NewChannelsStore.shouldIndicateNewChannel(user.guild_id, user.id), items2);
  const obj2 = require("initialize");
  const obj4 = { unread, resolvedUnreadSetting: null, newChannel: null, optInEnabled: null, mentionCount: null, isMentionLowImportance: null };
  const optInEnabledForGuild = require("isOptInEnabled").useOptInEnabledForGuild(channel.guild_id);
  const obj3 = require("isOptInEnabled");
  const items3 = [UserGuildSettingsStore];
  obj4.resolvedUnreadSetting = require("initialize").useStateFromStores(items3, () => UserGuildSettingsStore.resolveUnreadSetting(closure_0));
  obj4.newChannel = stateFromStores;
  obj4.optInEnabled = optInEnabledForGuild;
  obj4.mentionCount = mentionCount;
  obj4.isMentionLowImportance = isMentionLowImportance;
  return obj4;
};
export const useBaseChannelUnreadBadgeState = function useBaseChannelUnreadBadgeState(channel, muted) {
  _require = channel;
  dependencyMap = muted;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !dependencyMap;
    if (!dependencyMap) {
      hasUnreadResult = ReadStateStore.hasUnread(user.id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = ReadStateStore.getMentionCount(user.id);
    obj.isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(user.id);
    return obj;
  });
};