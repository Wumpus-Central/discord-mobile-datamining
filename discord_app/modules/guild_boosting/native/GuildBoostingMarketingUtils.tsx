// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7657).ReactionIcon;
  } else if (tmp(4195).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7711).SoundboardIcon;
  } else if (tmp(4195).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9956).GifIcon;
  } else if (tmp(4195).PerkIcons.AUDIO === perkIcon) {
    return tmp(11892).HeadphonesIcon;
  } else if (tmp(4195).PerkIcons.STREAM === perkIcon) {
    return tmp(11894).ScreenArrowIcon;
  } else if (tmp(4195).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7660).UploadIcon;
  } else if (tmp(4195).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9012).ShieldUserIcon;
  } else if (tmp(4195).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10267).ImagesIcon;
  } else if (tmp(4195).PerkIcons.VANITY === perkIcon) {
    return tmp(8750).StarIcon;
  } else if (tmp(4195).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4825).StageIcon;
  } else if (tmp(4195).PerkIcons.STICKER === perkIcon) {
    return tmp(7708).StickerIcon;
  } else {
    return tmp(7657).ReactionIcon;
  }
};