// === Module 16343: useChannelUnreadBadgeState ===

// Module 16343 (useChannelUnreadBadgeState)
import closure_2 from "guildHasCommunity" /* 7532 */;
import closure_3 from "generateOldThreadCutoff" /* 4575 */;
import closure_4 from "updateUserGuildSettingsInternal" /* 4741 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = function useChannelUnreadBadgeState(channel, flag) {
  const _require = channel;
  dependencyMap = flag;
  let obj = _require(504);
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: closure_1_3.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = obj2.hasUnread(tmp.id);
    }
    obj[1] = hasUnreadResult;
    obj[2] = closure_1_3.getMentionCount(user.id);
    obj[3] = closure_1_3.getIsMentionLowImportance(user.id);
    return obj;
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  const items1 = [closure_2];
  const items2 = [, ];
  ({ guild_id: arr3[0], id: arr3[1] } = channel);
  const stateFromStores = _require(504).useStateFromStores(items1, () => closure_1_2.shouldIndicateNewChannel(user.guild_id, user.id), items2);
  const obj2 = _require(504);
  obj = { unread, resolvedUnreadSetting: null, newChannel: null, optInEnabled: null, mentionCount: null, isMentionLowImportance: null };
  const optInEnabledForGuild = _require(7535).useOptInEnabledForGuild(channel.guild_id);
  const obj3 = _require(7535);
  const items3 = [closure_4];
  obj[1] = _require(504).useStateFromStores(items3, () => closure_1_4.resolveUnreadSetting(closure_0));
  obj[2] = stateFromStores;
  obj[3] = optInEnabledForGuild;
  obj[4] = mentionCount;
  obj[5] = isMentionLowImportance;
  return obj;
};
export const useBaseChannelUnreadBadgeState = function useBaseChannelUnreadBadgeState(channel, muted) {
  const _require = channel;
  dependencyMap = muted;
  const items = [closure_3];
  return _require(504).useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: closure_1_3.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = obj2.hasUnread(tmp.id);
    }
    obj[1] = hasUnreadResult;
    obj[2] = closure_1_3.getMentionCount(user.id);
    obj[3] = closure_1_3.getIsMentionLowImportance(user.id);
    return obj;
  });
};