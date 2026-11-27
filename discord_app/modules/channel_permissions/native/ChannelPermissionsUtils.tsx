// === Module 12124: channel_permissions/ChannelPermissionsUtils ===

// Module 12124 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export function openAddMembersActionSheet(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(8555, dependencyMap.paths), "channel-add-members-" + stateFromStores.id, { channel: stateFromStores, canSkip: flag });
}
export function openChannelMembersActionSheet(id, guild_id) {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(12125, dependencyMap.paths), "channel-members-" + id, { channelId: id, guildId: guild_id });
}