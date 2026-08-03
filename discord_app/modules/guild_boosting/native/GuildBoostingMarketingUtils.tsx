const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4147) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(7564).ReactionIcon;
  } else if (tmp(4147).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7618).SoundboardIcon;
  } else if (tmp(4147).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9773).GifIcon;
  } else if (tmp(4147).PerkIcons.AUDIO === perkIcon) {
    return tmp(11740).HeadphonesIcon;
  } else if (tmp(4147).PerkIcons.STREAM === perkIcon) {
    return tmp(11742).ScreenArrowIcon;
  } else if (tmp(4147).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7567).UploadIcon;
  } else if (tmp(4147).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8597).ShieldUserIcon;
  } else if (tmp(4147).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10080).ImagesIcon;
  } else if (tmp(4147).PerkIcons.VANITY === perkIcon) {
    return tmp(9577).StarIcon;
  } else if (tmp(4147).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4777).StageIcon;
  } else if (tmp(4147).PerkIcons.STICKER === perkIcon) {
    return tmp(7615).StickerIcon;
  } else {
    return tmp(7564).ReactionIcon;
  }
};