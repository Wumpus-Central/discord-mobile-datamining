// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import getGuildTierFromGuild from "../../../utils/GuildBoostingUtils.tsx";

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8228).ReactionIcon;
  } else if (tmp(4369).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12092).SoundboardIcon;
  } else if (tmp(4369).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10373).GifIcon;
  } else if (tmp(4369).PerkIcons.AUDIO === perkIcon) {
    return tmp(12094).HeadphonesIcon;
  } else if (tmp(4369).PerkIcons.STREAM === perkIcon) {
    return tmp(12096).ScreenArrowIcon;
  } else if (tmp(4369).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8226).UploadIcon;
  } else if (tmp(4369).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9713).ShieldUserIcon;
  } else if (tmp(4369).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11282).ImagesIcon;
  } else if (tmp(4369).PerkIcons.VANITY === perkIcon) {
    return tmp(9181).StarIcon;
  } else if (tmp(4369).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5046).StageIcon;
  } else if (tmp(4369).PerkIcons.STICKER === perkIcon) {
    return tmp(10197).StickerIcon;
  } else {
    return tmp(8228).ReactionIcon;
  }
};