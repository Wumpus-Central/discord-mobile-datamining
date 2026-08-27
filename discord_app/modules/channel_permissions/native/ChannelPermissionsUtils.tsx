// discord_app/modules/channel_permissions/native/ChannelPermissionsUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel: closure_0, canSkip: flag };
  obj2.openLazy(asyncRequireImpl(9632, dependencyMap.paths), "channel-add-members-" + closure_0.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(asyncRequireImpl(11113, dependencyMap.paths), "channel-members-" + id, obj);
};