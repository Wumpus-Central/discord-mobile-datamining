// === Module 11696: getIconForPerk ===

// Module 11696 (getIconForPerk)
import obj132 from "obj132" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4266 */;
import StageIcon from "StageIcon" /* 6892 */;
import ReactionIcon from "ReactionIcon" /* 7939 */;
import UploadIcon from "UploadIcon" /* 7942 */;
import StickerIcon from "StickerIcon" /* 7990 */;
import SoundboardIcon from "SoundboardIcon" /* 7993 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8859 */;
import StarIcon from "StarIcon" /* 9410 */;
import GifIcon from "GifIcon" /* 10211 */;
import HeadphonesIcon from "HeadphonesIcon" /* 11697 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 11699 */;
import ImagesIcon from "ImagesIcon" /* 11700 */;

const result = obj132.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return ReactionIcon.ReactionIcon;
  } else if (getGuildTierFromGuild.PerkIcons.SOUNDBOARD === perkIcon) {
    return SoundboardIcon.SoundboardIcon;
  } else if (getGuildTierFromGuild.PerkIcons.ANIMATED === perkIcon) {
    return GifIcon.GifIcon;
  } else if (getGuildTierFromGuild.PerkIcons.AUDIO === perkIcon) {
    return HeadphonesIcon.HeadphonesIcon;
  } else if (getGuildTierFromGuild.PerkIcons.STREAM === perkIcon) {
    return ScreenArrowIcon.ScreenArrowIcon;
  } else if (getGuildTierFromGuild.PerkIcons.UPLOAD === perkIcon) {
    return UploadIcon.UploadIcon;
  } else if (getGuildTierFromGuild.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return ShieldUserIcon.ShieldUserIcon;
  } else if (getGuildTierFromGuild.PerkIcons.CUSTOMIZATION === perkIcon) {
    return ImagesIcon.ImagesIcon;
  } else if (getGuildTierFromGuild.PerkIcons.VANITY === perkIcon) {
    return StarIcon.StarIcon;
  } else if (getGuildTierFromGuild.PerkIcons.STAGE_VIDEO === perkIcon) {
    return StageIcon.StageIcon;
  } else if (getGuildTierFromGuild.PerkIcons.STICKER === perkIcon) {
    return StickerIcon.StickerIcon;
  } else {
    return ReactionIcon.ReactionIcon;
  }
};