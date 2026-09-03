// === Module 6138: SidebarType ===

// Module 6138 (SidebarType)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/sidebar/SidebarActionTypes.tsx");

export const SidebarType = { CREATE_THREAD: 0, [0]: "CREATE_THREAD", VIEW_THREAD: 1, [1]: "VIEW_THREAD", VIEW_CHANNEL: 2, [2]: "VIEW_CHANNEL", VIEW_MESSAGE_REQUEST: 3, [3]: "VIEW_MESSAGE_REQUEST", VIEW_MOD_REPORT: 4, [4]: "VIEW_MOD_REPORT" };
export const GuildSidebarType = { GUILD_MEMBER_MOD_VIEW: 4, [4]: "GUILD_MEMBER_MOD_VIEW" };
export const SidebarOpenDetailsType = { THREAD: "thread", MESSAGE_REQUEST: "message-request", HOME: "home", GUILD_MEMBER_MOD_VIEW: "guild-member-mod-view" };