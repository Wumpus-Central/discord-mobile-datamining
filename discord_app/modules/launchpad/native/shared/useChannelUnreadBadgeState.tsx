// discord_app/modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx
import guildHasCommunity from "../../../recent_channels/NewChannelsStore.tsx";
import generateOldThreadCutoff from "../../../../stores/ReadStateStore.tsx";
import updateUserGuildSettingsInternal from "../../../../stores/UserGuildSettingsStore.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useOptInEnabledForGuild } from "../../../opt_in_channels/isOptInEnabled.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = function useChannelUnreadBadgeState(channel, flag) {
  const _require = channel;
  dependencyMap = flag;
  let obj = initialize;
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: closure_1_3.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = closure_1_3.hasUnread(user.id);
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
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => closure_1_2.shouldIndicateNewChannel(user.guild_id, user.id), items2);
  const obj2 = initialize;
  obj = { unread, resolvedUnreadSetting: null, newChannel: null, optInEnabled: null, mentionCount: null, isMentionLowImportance: null };
  const optInEnabledForGuild = require("../../../opt_in_channels/isOptInEnabled.tsx").useOptInEnabledForGuild(channel.guild_id);
  const obj3 = useOptInEnabledForGuild;
  const items3 = [closure_4];
  obj[1] = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items3, () => closure_1_4.resolveUnreadSetting(closure_0));
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
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: closure_1_3.ackMessageId(user.id), unread: null, mentionCount: null, isMentionLowImportance: null };
    let hasUnreadResult = !closure_1;
    if (!closure_1) {
      hasUnreadResult = closure_1_3.hasUnread(user.id);
    }
    obj[1] = hasUnreadResult;
    obj[2] = closure_1_3.getMentionCount(user.id);
    obj[3] = closure_1_3.getIsMentionLowImportance(user.id);
    return obj;
  });
};