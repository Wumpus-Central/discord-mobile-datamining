// === Module 11230: channel_permissions/ChannelPermissionsUtils ===

// Module 11230 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(9230, dependencyMap.paths), "channel-add-members-" + stateFromStores.id, { channel: stateFromStores, canSkip: flag });
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(11231, dependencyMap.paths), "channel-members-" + id, { channelId: id, guildId: guild_id });
};