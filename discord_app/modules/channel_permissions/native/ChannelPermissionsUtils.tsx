// === Module 11608: channel_permissions/ChannelPermissionsUtils ===

// Module 11608 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj = { channel: stateFromStores, canSkip: flag };
  obj2.openLazy(asyncRequireImpl(9750, dependencyMap.paths), "channel-add-members-" + stateFromStores.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(asyncRequireImpl(11609, dependencyMap.paths), "channel-members-" + id, obj);
};