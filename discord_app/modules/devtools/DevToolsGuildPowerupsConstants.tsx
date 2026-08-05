import { DismissibleContent } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
// discord_app/modules/devtools/DevToolsGuildPowerupsConstants.tsx
const items = [require("DismissibleContent").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK, require("DismissibleContent").DismissibleContent.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, require("DismissibleContent").DismissibleContent.GUILD_POWERUP_NOTIFICATION, require("DismissibleContent").DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK, require("DismissibleContent").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, require("DismissibleContent").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE];
const items1 = [require("DismissibleContent").DismissibleGuildContent.GUILD_POWERUP_LEVEL_1_COACHMARK, require("DismissibleContent").DismissibleGuildContent.GUILD_POWERUP_LEVEL_2_COACHMARK, require("DismissibleContent").DismissibleGuildContent.GUILD_POWERUP_LEVEL_3_COACHMARK, require("DismissibleContent").DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, require("DismissibleContent").DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK];
const items2 = [require("DismissibleContent").DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE];
const items3 = [require("DismissibleContent").DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, require("DismissibleContent").DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_MODAL, require("DismissibleContent").DismissibleContent.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER];
const result = require("set").fileFinishedImporting("modules/devtools/DevToolsGuildPowerupsConstants.tsx");

export const USER_DCS = items;
export const GUILD_DCS = items1;
export const SERVER_TAG_GUILD_DCS = items2;
export const VANITY_URL_POWERUP_DCS = items3;
export const getGuildDCString = function getGuildDCString(arg0) {
  if (DismissibleContent /* DismissibleContent */.DismissibleGuildContent.GUILD_POWERUP_LEVEL_1_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_1_COACHMARK";
  } else if (tmp(1358).DismissibleGuildContent.GUILD_POWERUP_LEVEL_2_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_2_COACHMARK";
  } else if (tmp(1358).DismissibleGuildContent.GUILD_POWERUP_LEVEL_3_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_3_COACHMARK";
  } else if (tmp(1358).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK === arg0) {
    return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
  } else if (tmp(1358).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK === arg0) {
    return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
  } else if (tmp(1358).DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE === arg0) {
    return "ADOPT_CLAN_IDENTITY_NOTICE";
  } else {
    const _String = String;
    return String(arg0);
  }
};
export const getUserDCString = function getUserDCString(arg0) {
  let StringResult = DismissibleContent /* DismissibleContent */.DismissibleContent[arg0];
  if (StringResult == null) {
    const _String = String;
    StringResult = String(arg0);
  }
  return StringResult;
};