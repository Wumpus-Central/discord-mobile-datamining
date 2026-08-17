// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import set from "set" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4266 */;

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7939).ReactionIcon;
  } else if (tmp(4266).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7993).SoundboardIcon;
  } else if (tmp(4266).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10211).GifIcon;
  } else if (tmp(4266).PerkIcons.AUDIO === perkIcon) {
    return tmp(11697).HeadphonesIcon;
  } else if (tmp(4266).PerkIcons.STREAM === perkIcon) {
    return tmp(11699).ScreenArrowIcon;
  } else if (tmp(4266).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7942).UploadIcon;
  } else if (tmp(4266).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8859).ShieldUserIcon;
  } else if (tmp(4266).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11700).ImagesIcon;
  } else if (tmp(4266).PerkIcons.VANITY === perkIcon) {
    return tmp(9410).StarIcon;
  } else if (tmp(4266).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(6892).StageIcon;
  } else if (tmp(4266).PerkIcons.STICKER === perkIcon) {
    return tmp(7990).StickerIcon;
  } else {
    return tmp(7939).ReactionIcon;
  }
};