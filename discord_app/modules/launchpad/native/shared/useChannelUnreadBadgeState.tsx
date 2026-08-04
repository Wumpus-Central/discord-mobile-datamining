// discord_app/modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx
import guildHasCommunity from "guildHasCommunity";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

const require = arg1;
const result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = function useChannelUnreadBadgeState(channel, flag) {
  let isMentionLowImportance;
  let mentionCount;
  let unread;
  const _require = channel;
  const dependencyMap = flag;
  let obj = _require(589);
  const items = [generateOldThreadCutoff];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: outer1_3.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = obj2.hasUnread(tmp.id);
    }
    obj[1] = hasUnreadResult;
    obj[2] = outer1_3.getMentionCount(user.id);
    obj[3] = outer1_3.getIsMentionLowImportance(user.id);
    return obj;
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  const items1 = [guildHasCommunity];
  const items2 = [, ];
  ({ guild_id: arr3[0], id: arr3[1] } = channel);
  const stateFromStores = _require(589).useStateFromStores(items1, () => outer1_2.shouldIndicateNewChannel(user.guild_id, user.id), items2);
  const obj2 = _require(589);
  obj = { unread, resolvedUnreadSetting: null, newChannel: null, optInEnabled: null, mentionCount: null, isMentionLowImportance: null };
  const optInEnabledForGuild = _require(5794).useOptInEnabledForGuild(channel.guild_id);
  const obj3 = _require(5794);
  const items3 = [updateUserGuildSettingsInternal];
  obj[1] = _require(589).useStateFromStores(items3, () => outer1_4.resolveUnreadSetting(closure_0));
  obj[2] = stateFromStores;
  obj[3] = optInEnabledForGuild;
  obj[4] = mentionCount;
  obj[5] = isMentionLowImportance;
  return obj;
};
export const useBaseChannelUnreadBadgeState = function useBaseChannelUnreadBadgeState(channel, muted) {
  const _require = channel;
  const dependencyMap = muted;
  const items = [generateOldThreadCutoff];
  return _require(589).useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: outer1_3.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = obj2.hasUnread(tmp.id);
    }
    obj[1] = hasUnreadResult;
    obj[2] = outer1_3.getMentionCount(user.id);
    obj[3] = outer1_3.getIsMentionLowImportance(user.id);
    return obj;
  });
};