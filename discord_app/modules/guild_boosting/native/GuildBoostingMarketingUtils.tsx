// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import getGuildTierFromGuild from "../../../utils/GuildBoostingUtils.tsx";

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8174).ReactionIcon;
  } else if (tmp(4337).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12026).SoundboardIcon;
  } else if (tmp(4337).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10310).GifIcon;
  } else if (tmp(4337).PerkIcons.AUDIO === perkIcon) {
    return tmp(12028).HeadphonesIcon;
  } else if (tmp(4337).PerkIcons.STREAM === perkIcon) {
    return tmp(12030).ScreenArrowIcon;
  } else if (tmp(4337).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8172).UploadIcon;
  } else if (tmp(4337).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9652).ShieldUserIcon;
  } else if (tmp(4337).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11216).ImagesIcon;
  } else if (tmp(4337).PerkIcons.VANITY === perkIcon) {
    return tmp(9119).StarIcon;
  } else if (tmp(4337).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5011).StageIcon;
  } else if (tmp(4337).PerkIcons.STICKER === perkIcon) {
    return tmp(10135).StickerIcon;
  } else {
    return tmp(8174).ReactionIcon;
  }
};