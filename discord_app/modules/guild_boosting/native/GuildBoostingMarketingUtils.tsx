// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import getGuildTierFromGuild from "../../../utils/GuildBoostingUtils.tsx";

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8196).ReactionIcon;
  } else if (tmp(4339).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12059).SoundboardIcon;
  } else if (tmp(4339).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10334).GifIcon;
  } else if (tmp(4339).PerkIcons.AUDIO === perkIcon) {
    return tmp(12061).HeadphonesIcon;
  } else if (tmp(4339).PerkIcons.STREAM === perkIcon) {
    return tmp(12063).ScreenArrowIcon;
  } else if (tmp(4339).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8194).UploadIcon;
  } else if (tmp(4339).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9674).ShieldUserIcon;
  } else if (tmp(4339).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11245).ImagesIcon;
  } else if (tmp(4339).PerkIcons.VANITY === perkIcon) {
    return tmp(9142).StarIcon;
  } else if (tmp(4339).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5014).StageIcon;
  } else if (tmp(4339).PerkIcons.STICKER === perkIcon) {
    return tmp(10158).StickerIcon;
  } else {
    return tmp(8196).ReactionIcon;
  }
};