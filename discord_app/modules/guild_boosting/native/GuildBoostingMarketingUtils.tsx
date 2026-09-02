// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import getGuildTierFromGuild from "../../../utils/GuildBoostingUtils.tsx";

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8237).ReactionIcon;
  } else if (tmp(4369).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12316).SoundboardIcon;
  } else if (tmp(4369).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10395).GifIcon;
  } else if (tmp(4369).PerkIcons.AUDIO === perkIcon) {
    return tmp(12318).HeadphonesIcon;
  } else if (tmp(4369).PerkIcons.STREAM === perkIcon) {
    return tmp(12320).ScreenArrowIcon;
  } else if (tmp(4369).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8235).UploadIcon;
  } else if (tmp(4369).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9735).ShieldUserIcon;
  } else if (tmp(4369).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11505).ImagesIcon;
  } else if (tmp(4369).PerkIcons.VANITY === perkIcon) {
    return tmp(9195).StarIcon;
  } else if (tmp(4369).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5050).StageIcon;
  } else if (tmp(4369).PerkIcons.STICKER === perkIcon) {
    return tmp(10219).StickerIcon;
  } else {
    return tmp(8237).ReactionIcon;
  }
};
