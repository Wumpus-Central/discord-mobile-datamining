const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4177) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(7576).ReactionIcon;
  } else if (tmp(4177).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7630).SoundboardIcon;
  } else if (tmp(4177).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9866).GifIcon;
  } else if (tmp(4177).PerkIcons.AUDIO === perkIcon) {
    return tmp(11801).HeadphonesIcon;
  } else if (tmp(4177).PerkIcons.STREAM === perkIcon) {
    return tmp(11803).ScreenArrowIcon;
  } else if (tmp(4177).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7579).UploadIcon;
  } else if (tmp(4177).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8928).ShieldUserIcon;
  } else if (tmp(4177).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10177).ImagesIcon;
  } else if (tmp(4177).PerkIcons.VANITY === perkIcon) {
    return tmp(8666).StarIcon;
  } else if (tmp(4177).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4806).StageIcon;
  } else if (tmp(4177).PerkIcons.STICKER === perkIcon) {
    return tmp(7627).StickerIcon;
  } else {
    return tmp(7576).ReactionIcon;
  }
};