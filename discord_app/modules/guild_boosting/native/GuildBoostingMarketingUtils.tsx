// === Module 12160: getIconForPerk ===

// Module 12160 (getIconForPerk)
import set from "set" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4335 */;

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7867).ReactionIcon;
  } else if (tmp(4335).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7921).SoundboardIcon;
  } else if (tmp(4335).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10168).GifIcon;
  } else if (tmp(4335).PerkIcons.AUDIO === perkIcon) {
    return tmp(12161).HeadphonesIcon;
  } else if (tmp(4335).PerkIcons.STREAM === perkIcon) {
    return tmp(12163).ScreenArrowIcon;
  } else if (tmp(4335).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7870).UploadIcon;
  } else if (tmp(4335).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9221).ShieldUserIcon;
  } else if (tmp(4335).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11331).ImagesIcon;
  } else if (tmp(4335).PerkIcons.VANITY === perkIcon) {
    return tmp(8959).StarIcon;
  } else if (tmp(4335).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4993).StageIcon;
  } else if (tmp(4335).PerkIcons.STICKER === perkIcon) {
    return tmp(7918).StickerIcon;
  } else {
    return tmp(7867).ReactionIcon;
  }
};