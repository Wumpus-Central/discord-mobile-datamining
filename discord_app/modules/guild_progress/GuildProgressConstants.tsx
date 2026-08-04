// discord_app/modules/guild_progress/GuildProgressConstants.tsx
const result = require("set").fileFinishedImporting("modules/guild_progress/GuildProgressConstants.tsx");

export const Steps = { INVITE: "member_joined", CHANNEL: "create_channel", AVATAR: "avatar", MESSAGE: "send_message", COMPLETED: "completed", DISMISSED: "dismissed" };
export const AnalyticsActions = { PERSONALIZE_SERVER: "Personalize Server", INVITE: "Invite Friends", CREATE_CHANNEL: "Create Channel", SEND_MESSAGE: "Send Message", DOWNLOAD: "Download", ADD_APP: "Add App", BOOST: "Boost Server", DISMISS_GUILD_PROGRESS: "Dismiss Guild Progress", DISCORD_OVERVIEW_VIDEO: "Discord Overview Video", JOIN_GUILD: "Join Guild", CONTACT_SYNC: "Sync Contacts", DISMISS: "Dismiss" };
export const AnalyticsSetupTypes = { CHANNEL_WELCOME: "Channel Welcome CTA", GUILD_PROGRESS: "Guild Progress", HUB_PROGRESS: "Hub Progress" };