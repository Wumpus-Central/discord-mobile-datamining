// === Module 8793: CREATE_GUILD_EVENT_MODAL_KEY ===

// Module 8793 (CREATE_GUILD_EVENT_MODAL_KEY)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/guild_scheduled_events/native/GuildEventModalConstants.tsx");

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