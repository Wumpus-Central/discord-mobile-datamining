// discord_app/modules/app_database/managers/MobileAppDatabaseManager.tsx
import set from "set" /* 2 */;
import set2 from "set" /* 5391 */;
import { handleBackgroundSync } from "../modules/Channels.tsx";
import { hasBasicChannelChanged } from "../modules/GuildBasicChannels.tsx";
import { getAsync } from "../modules/GuildEmojis.tsx";
import { getAsync } from "../modules/Guilds.tsx";
import { getAll } from "../modules/GuildsRequiringChannelSync.tsx";
import { getAll } from "../modules/GuildsRequiringDeletedIdsSync.tsx";
import { getAsync } from "../modules/GuildStickers.tsx";
import { getCommittedVersions } from "../modules/GuildVersions.tsx";
import { okAsync } from "../modules/KvCacheVersion.tsx";
import { handlePostConnectionOpen } from "../modules/LowDiskTrim.tsx";
import { computeUsersAndMembers } from "../modules/Messages.tsx";
import { getCommittedVersions } from "../modules/NonGuildVersions.tsx";
import { getAll } from "../modules/ReadStates.tsx";
import { getAll } from "../modules/UserGuildSettings.tsx";
import { getAll } from "../modules/UserSearchItems.tsx";
import { getAll } from "../modules/UserSettingsProto.tsx";

const items = [
  {
    name: "Channels",
    actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "GUILD_CREATE", "GUILD_DELETE"],
    require() {
      return handleBackgroundSync.default;
    }
  },
  {
    name: "GuildBasicChannels",
    actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE", "POST_CONNECTION_OPEN", "WRITE_CACHES"],
    require() {
      return hasBasicChannelChanged.default;
    }
  },
  {
    name: "GuildEmojis",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_UPDATE"],
    require() {
      return getAsync.default;
    }
  },
  {
    name: "Guilds",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE"],
    require() {
      return getAsync.default;
    }
  },
  {
    name: "GuildsRequiringDeletedIdsSync",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "DELETED_ENTITY_IDS"],
    require() {
      return getAll.default;
    }
  },
  {
    name: "GuildsRequiringChannelSync",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "CHANNEL_SYNC", "UNMARK_RESYNC_GUILDS"],
    require() {
      return getAll.default;
    }
  },
  {
    name: "GuildStickers",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
    require() {
      return getAsync.default;
    }
  },
  {
    name: "GuildVersions",
    actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
    require() {
      return getCommittedVersions.default;
    }
  },
  {
    name: "KvCacheVersion",
    actions: ["CONNECTION_OPEN", "WRITE_CACHES", "BACKGROUND_SYNC"],
    require() {
      return okAsync.default;
    }
  },
  {
    name: "Messages",
    actions: ["CHANNEL_DELETE", "GUILD_DELETE", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_DELETE_BULK", "MESSAGE_DELETE", "MESSAGE_PREVIEWS_LOADED", "MESSAGE_UPDATE"],
    require() {
      return computeUsersAndMembers.default;
    }
  },
  {
    name: "LowDiskTrim",
    actions: ["POST_CONNECTION_OPEN"],
    require() {
      return handlePostConnectionOpen.default;
    }
  },
  {
    name: "NonGuildVersions",
    actions: ["CONNECTION_OPEN", "BACKGROUND_SYNC"],
    require() {
      return getCommittedVersions.default;
    }
  },
  {
    name: "ReadStates",
    actions: ["CONNECTION_OPEN", "CHANNEL_PINS_ACK", "MESSAGE_ACK", "BACKGROUND_SYNC_FINISHED", "WRITE_CACHES"],
    require() {
      return getAll.default;
    }
  },
  {
    name: "UserSettingsProto",
    actions: ["CONNECTION_OPEN", "USER_SETTINGS_PROTO_UPDATE", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO"],
    require() {
      return getAll.default;
    }
  },
  {
    name: "UserGuildSettings",
    actions: ["CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
    require() {
      return getAll.default;
    }
  },
  {
    name: "UserSearchItems",
    actions: ["POST_CONNECTION_OPEN", "WRITE_CACHES"],
    require() {
      return getAll.default;
    }
  }
];
const appDatabaseManager = new set2.AppDatabaseManager("MobileAppDatabaseManager", [], items);
const result = set.fileFinishedImporting("modules/app_database/managers/MobileAppDatabaseManager.tsx");

export default appDatabaseManager;