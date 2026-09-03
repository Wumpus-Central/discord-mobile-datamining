// === Module 12327: getIconForPerk ===

// Module 12327 (getIconForPerk)
import set from "set" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4369 */;

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8241).ReactionIcon;
  } else if (tmp(4369).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12328).SoundboardIcon;
  } else if (tmp(4369).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10399).GifIcon;
  } else if (tmp(4369).PerkIcons.AUDIO === perkIcon) {
    return tmp(12330).HeadphonesIcon;
  } else if (tmp(4369).PerkIcons.STREAM === perkIcon) {
    return tmp(12332).ScreenArrowIcon;
  } else if (tmp(4369).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8239).UploadIcon;
  } else if (tmp(4369).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9739).ShieldUserIcon;
  } else if (tmp(4369).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11510).ImagesIcon;
  } else if (tmp(4369).PerkIcons.VANITY === perkIcon) {
    return tmp(9199).StarIcon;
  } else if (tmp(4369).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5051).StageIcon;
  } else if (tmp(4369).PerkIcons.STICKER === perkIcon) {
    return tmp(10223).StickerIcon;
  } else {
    return tmp(8241).ReactionIcon;
  }
};