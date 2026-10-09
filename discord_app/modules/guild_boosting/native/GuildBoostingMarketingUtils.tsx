// === Module 12217: GuildBoostingMarketingUtils ===

// Module 12217 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import StageIcon from "StageIcon" /* 8208 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8605 */;
import ReactionIcon from "ReactionIcon" /* 8941 */;
import UploadIcon from "UploadIcon" /* 9378 */;
import StarIcon from "StarIcon" /* 9523 */;
import GifIcon from "GifIcon" /* 9722 */;
import ImagesIcon from "ImagesIcon" /* 11537 */;
import SoundboardIcon from "SoundboardIcon" /* 12218 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12220 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12222 */;
import StickerIcon from "StickerIcon" /* 12223 */;
import size from "module_2" /* 2 */;

const PerkIcons = PremiumConstants.PerkIcons;
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (PerkIcons.EMOJI === perkIcon) {
    return ReactionIcon.ReactionIcon;
  } else if (PerkIcons.SOUNDBOARD === perkIcon) {
    return SoundboardIcon.SoundboardIcon;
  } else if (PerkIcons.ANIMATED === perkIcon) {
    return GifIcon.GifIcon;
  } else if (PerkIcons.AUDIO === perkIcon) {
    return HeadphonesIcon.HeadphonesIcon;
  } else if (PerkIcons.STREAM === perkIcon) {
    return ScreenArrowIcon.ScreenArrowIcon;
  } else if (PerkIcons.UPLOAD === perkIcon) {
    return UploadIcon.UploadIcon;
  } else if (PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return ShieldUserIcon.ShieldUserIcon;
  } else if (PerkIcons.CUSTOMIZATION === perkIcon) {
    return ImagesIcon.ImagesIcon;
  } else if (PerkIcons.VANITY === perkIcon) {
    return StarIcon.StarIcon;
  } else if (PerkIcons.STAGE_VIDEO === perkIcon) {
    return StageIcon.StageIcon;
  } else if (PerkIcons.STICKER === perkIcon) {
    return StickerIcon.StickerIcon;
  } else {
    return ReactionIcon.ReactionIcon;
  }
};