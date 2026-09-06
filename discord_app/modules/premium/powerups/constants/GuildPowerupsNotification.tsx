// discord_app/modules/premium/powerups/constants/GuildPowerupsNotification.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/powerups/constants/GuildPowerupsNotification.tsx");

export const GUILD_POWERUP_NOTIFICATION_COOLDOWN = 21600000;
export const BOOST_TO_UNLOCK_COACHMARK_COOLDOWN = 2592000000;
export const BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR = 5;
export const EXPIRING_POWERUP_COACHMARK_COOLDOWN = 259200000;
export const GuildPowerupNotificationIndicatorType = { WARNING: "warning", UNREAD: "unread" };
export const GuildPowerupNotificationPopoutType = {
  LEVEL_REACHED: 0,
  [0]: "LEVEL_REACHED",
  PERKS_PURCHASABLE: 1,
  [1]: "PERKS_PURCHASABLE",
  PERKS_AVAILABLE: 2,
  [2]: "PERKS_AVAILABLE",
  NEW_PERK_AVAILABLE: 3,
  [3]: "NEW_PERK_AVAILABLE",
  BOOST_TO_UNLOCK: 4,
  [4]: "BOOST_TO_UNLOCK",
  EXPIRING_PERK: 5,
  [5]: "EXPIRING_PERK",
  GAME_SERVER_HOSTING_AVAILABLE: 6,
  [6]: "GAME_SERVER_HOSTING_AVAILABLE",
  GAME_SERVER_HOSTING_GUILD_ELIGIBLE: 7,
  [7]: "GAME_SERVER_HOSTING_GUILD_ELIGIBLE",
  GAME_SERVER_HOSTING_ENABLED: 8,
  [8]: "GAME_SERVER_HOSTING_ENABLED",
  GAME_SERVER_NEW_GAMES: 9,
  [9]: "GAME_SERVER_NEW_GAMES",
  GAME_SERVER_PRICING_CHANGE: 10,
  [10]: "GAME_SERVER_PRICING_CHANGE",
};
