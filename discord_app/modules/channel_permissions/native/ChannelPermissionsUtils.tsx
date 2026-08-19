// === Module 10796: openAddMembersActionSheet ===

// Module 10796 (openAddMembersActionSheet)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel: _require, canSkip: flag };
  obj2.openLazy(asyncRequireImpl(8857, dependencyMap.paths), "channel-add-members-" + _require.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(asyncRequireImpl(10797, dependencyMap.paths), "channel-members-" + id, obj);
};