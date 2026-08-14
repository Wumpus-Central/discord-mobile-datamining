// discord_app/modules/channel_permissions/native/ChannelPermissionsUtils.tsx
import { AnalyticEvents } from "ME";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = expandEventProperties;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALF;
  obj = { channel: closure_0, canSkip: flag };
  obj2.openLazy(asyncRequireImpl(9067, dependencyMap.paths), "channel-add-members-" + closure_0.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = expandEventProperties;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALF;
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(asyncRequireImpl(11063, dependencyMap.paths), "channel-members-" + id, obj);
};