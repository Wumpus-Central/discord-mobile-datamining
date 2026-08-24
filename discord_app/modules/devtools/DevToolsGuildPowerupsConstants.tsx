// === Module 15220: items ===

// Module 15220 (items)
import set from "set" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;

const items = [DismissibleContent.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK, DismissibleContent.DismissibleContent.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, DismissibleContent.DismissibleContent.GUILD_POWERUP_NOTIFICATION, DismissibleContent.DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK, DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE];
const items1 = [DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_LEVEL_1_COACHMARK, DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_LEVEL_2_COACHMARK, DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_LEVEL_3_COACHMARK, DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK];
const items2 = [DismissibleContent.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE];
const items3 = [DismissibleContent.DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, DismissibleContent.DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_MODAL, DismissibleContent.DismissibleContent.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER];
const result = set.fileFinishedImporting("modules/devtools/DevToolsGuildPowerupsConstants.tsx");

export const USER_DCS = items;
export const GUILD_DCS = items1;
export const SERVER_TAG_GUILD_DCS = items2;
export const VANITY_URL_POWERUP_DCS = items3;
export const getGuildDCString = function getGuildDCString(arg0) {
  if (DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_LEVEL_1_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_1_COACHMARK";
  } else if (tmp(1377).DismissibleGuildContent.GUILD_POWERUP_LEVEL_2_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_2_COACHMARK";
  } else if (tmp(1377).DismissibleGuildContent.GUILD_POWERUP_LEVEL_3_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_3_COACHMARK";
  } else if (tmp(1377).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK === arg0) {
    return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
  } else if (tmp(1377).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK === arg0) {
    return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
  } else if (tmp(1377).DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE === arg0) {
    return "ADOPT_CLAN_IDENTITY_NOTICE";
  } else {
    const _String = String;
    return String(arg0);
  }
};
export const getUserDCString = function getUserDCString(arg0) {
  let StringResult = DismissibleContent.DismissibleContent[arg0];
  if (StringResult == null) {
    const _String = String;
    StringResult = String(arg0);
  }
  return StringResult;
};