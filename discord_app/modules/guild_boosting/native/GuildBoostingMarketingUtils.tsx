// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7700).ReactionIcon;
  } else if (tmp(4234).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7754).SoundboardIcon;
  } else if (tmp(4234).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9995).GifIcon;
  } else if (tmp(4234).PerkIcons.AUDIO === perkIcon) {
    return tmp(11951).HeadphonesIcon;
  } else if (tmp(4234).PerkIcons.STREAM === perkIcon) {
    return tmp(11953).ScreenArrowIcon;
  } else if (tmp(4234).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7703).UploadIcon;
  } else if (tmp(4234).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9055).ShieldUserIcon;
  } else if (tmp(4234).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11145).ImagesIcon;
  } else if (tmp(4234).PerkIcons.VANITY === perkIcon) {
    return tmp(8793).StarIcon;
  } else if (tmp(4234).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4866).StageIcon;
  } else if (tmp(4234).PerkIcons.STICKER === perkIcon) {
    return tmp(7751).StickerIcon;
  } else {
    return tmp(7700).ReactionIcon;
  }
};