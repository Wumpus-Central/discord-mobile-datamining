// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7721).ReactionIcon;
  } else if (tmp(4234).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7775).SoundboardIcon;
  } else if (tmp(4234).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10006).GifIcon;
  } else if (tmp(4234).PerkIcons.AUDIO === perkIcon) {
    return tmp(11968).HeadphonesIcon;
  } else if (tmp(4234).PerkIcons.STREAM === perkIcon) {
    return tmp(11970).ScreenArrowIcon;
  } else if (tmp(4234).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7724).UploadIcon;
  } else if (tmp(4234).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9069).ShieldUserIcon;
  } else if (tmp(4234).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11162).ImagesIcon;
  } else if (tmp(4234).PerkIcons.VANITY === perkIcon) {
    return tmp(8807).StarIcon;
  } else if (tmp(4234).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4888).StageIcon;
  } else if (tmp(4234).PerkIcons.STICKER === perkIcon) {
    return tmp(7772).StickerIcon;
  } else {
    return tmp(7721).ReactionIcon;
  }
};