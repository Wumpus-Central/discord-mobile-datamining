// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import getGuildTierFromGuild from "../../../utils/GuildBoostingUtils.tsx";

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7800).ReactionIcon;
  } else if (tmp(4271).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7854).SoundboardIcon;
  } else if (tmp(4271).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10101).GifIcon;
  } else if (tmp(4271).PerkIcons.AUDIO === perkIcon) {
    return tmp(12088).HeadphonesIcon;
  } else if (tmp(4271).PerkIcons.STREAM === perkIcon) {
    return tmp(12090).ScreenArrowIcon;
  } else if (tmp(4271).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7803).UploadIcon;
  } else if (tmp(4271).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9153).ShieldUserIcon;
  } else if (tmp(4271).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11259).ImagesIcon;
  } else if (tmp(4271).PerkIcons.VANITY === perkIcon) {
    return tmp(8891).StarIcon;
  } else if (tmp(4271).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4927).StageIcon;
  } else if (tmp(4271).PerkIcons.STICKER === perkIcon) {
    return tmp(7851).StickerIcon;
  } else {
    return tmp(7800).ReactionIcon;
  }
};