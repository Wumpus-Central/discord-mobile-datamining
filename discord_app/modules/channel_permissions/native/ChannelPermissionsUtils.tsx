// discord_app/modules/channel_permissions/native/ChannelPermissionsUtils.tsx
import { AnalyticEvents } from "ME";

const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { channel: closure_0, canSkip: flag };
  obj2.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8926, dependencyMap.paths), "channel-add-members-" + closure_0.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10987, dependencyMap.paths), "channel-members-" + id, obj);
};