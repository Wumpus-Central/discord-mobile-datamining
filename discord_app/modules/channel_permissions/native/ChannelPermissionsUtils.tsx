// === Module 11838: channel_permissions/ChannelPermissionsUtils ===

// Module 11838 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
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
  obj2.openLazy(asyncRequireImpl(9202, dependencyMap.paths), "channel-add-members-" + stateFromStores.id, { channel: stateFromStores, canSkip: flag });
}
export function openChannelMembersActionSheet(id, guild_id) {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(11839, dependencyMap.paths), "channel-members-" + id, { channelId: id, guildId: guild_id });
}