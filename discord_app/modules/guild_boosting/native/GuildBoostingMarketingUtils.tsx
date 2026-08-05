// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7548).ReactionIcon;
  } else if (tmp(4147).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7602).SoundboardIcon;
  } else if (tmp(4147).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9837).GifIcon;
  } else if (tmp(4147).PerkIcons.AUDIO === perkIcon) {
    return tmp(11773).HeadphonesIcon;
  } else if (tmp(4147).PerkIcons.STREAM === perkIcon) {
    return tmp(11775).ScreenArrowIcon;
  } else if (tmp(4147).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7551).UploadIcon;
  } else if (tmp(4147).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8900).ShieldUserIcon;
  } else if (tmp(4147).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10148).ImagesIcon;
  } else if (tmp(4147).PerkIcons.VANITY === perkIcon) {
    return tmp(8638).StarIcon;
  } else if (tmp(4147).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4776).StageIcon;
  } else if (tmp(4147).PerkIcons.STICKER === perkIcon) {
    return tmp(7599).StickerIcon;
  } else {
    return tmp(7548).ReactionIcon;
  }
};