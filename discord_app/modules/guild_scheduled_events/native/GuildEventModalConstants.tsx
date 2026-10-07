// discord_app/modules/guild_scheduled_events/native/GuildEventModalConstants.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/GuildEventModalConstants.tsx");

export const CREATE_GUILD_EVENT_MODAL_KEY = "create-guild-event-modal";
export const START_EVENT_MODAL_KEY = "start-event-modal";
export const GUILD_EVENTS_LIST_ACTION_SHEET_KEY = "guild-scheduled-events-list";
export const GUILD_EVENT_INFO_ACTION_SHEET_KEY = "guild-scheduled-events-info";
export const isGuildEventValid = function isGuildEventValid(arg0, arg1) {
  let tmp = "" !== arg0;
  if (tmp) {
    tmp = null != arg1;
  }
  return tmp;
};
