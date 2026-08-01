// === Module 11632: getIconForPerk ===

// Module 11632 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4085) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(6579).ReactionIcon;
  } else if (tmp(4085).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(6635).SoundboardIcon;
  } else if (tmp(4085).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9625).GifIcon;
  } else if (tmp(4085).PerkIcons.AUDIO === perkIcon) {
    return tmp(11633).HeadphonesIcon;
  } else if (tmp(4085).PerkIcons.STREAM === perkIcon) {
    return tmp(11635).ScreenArrowIcon;
  } else if (tmp(4085).PerkIcons.UPLOAD === perkIcon) {
    return tmp(6582).UploadIcon;
  } else if (tmp(4085).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8290).ShieldUserIcon;
  } else if (tmp(4085).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(9937).ImagesIcon;
  } else if (tmp(4085).PerkIcons.VANITY === perkIcon) {
    return tmp(9430).StarIcon;
  } else if (tmp(4085).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4715).StageIcon;
  } else if (tmp(4085).PerkIcons.STICKER === perkIcon) {
    return tmp(6632).StickerIcon;
  } else {
    return tmp(6579).ReactionIcon;
  }
};