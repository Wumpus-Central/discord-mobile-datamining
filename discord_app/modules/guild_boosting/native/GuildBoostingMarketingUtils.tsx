// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7655).ReactionIcon;
  } else if (tmp(4195).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7709).SoundboardIcon;
  } else if (tmp(4195).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9950).GifIcon;
  } else if (tmp(4195).PerkIcons.AUDIO === perkIcon) {
    return tmp(11888).HeadphonesIcon;
  } else if (tmp(4195).PerkIcons.STREAM === perkIcon) {
    return tmp(11890).ScreenArrowIcon;
  } else if (tmp(4195).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7658).UploadIcon;
  } else if (tmp(4195).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9006).ShieldUserIcon;
  } else if (tmp(4195).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10261).ImagesIcon;
  } else if (tmp(4195).PerkIcons.VANITY === perkIcon) {
    return tmp(8744).StarIcon;
  } else if (tmp(4195).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4825).StageIcon;
  } else if (tmp(4195).PerkIcons.STICKER === perkIcon) {
    return tmp(7706).StickerIcon;
  } else {
    return tmp(7655).ReactionIcon;
  }
};