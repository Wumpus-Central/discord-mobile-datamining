// === Module 12006: getIconForPerk ===

// Module 12006 (getIconForPerk)
import set from "set" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4336 */;

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8160).ReactionIcon;
  } else if (tmp(4336).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12007).SoundboardIcon;
  } else if (tmp(4336).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10292).GifIcon;
  } else if (tmp(4336).PerkIcons.AUDIO === perkIcon) {
    return tmp(12009).HeadphonesIcon;
  } else if (tmp(4336).PerkIcons.STREAM === perkIcon) {
    return tmp(12011).ScreenArrowIcon;
  } else if (tmp(4336).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8158).UploadIcon;
  } else if (tmp(4336).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9634).ShieldUserIcon;
  } else if (tmp(4336).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11198).ImagesIcon;
  } else if (tmp(4336).PerkIcons.VANITY === perkIcon) {
    return tmp(9101).StarIcon;
  } else if (tmp(4336).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4998).StageIcon;
  } else if (tmp(4336).PerkIcons.STICKER === perkIcon) {
    return tmp(10117).StickerIcon;
  } else {
    return tmp(8160).ReactionIcon;
  }
};