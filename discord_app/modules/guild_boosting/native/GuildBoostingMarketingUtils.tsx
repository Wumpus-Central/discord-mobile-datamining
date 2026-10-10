// === Module 12261: GuildBoostingMarketingUtils ===

// Module 12261 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import StageIcon from "StageIcon" /* 8224 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8621 */;
import ReactionIcon from "ReactionIcon" /* 8960 */;
import UploadIcon from "UploadIcon" /* 9405 */;
import StarIcon from "StarIcon" /* 9552 */;
import GifIcon from "GifIcon" /* 9751 */;
import ImagesIcon from "ImagesIcon" /* 11583 */;
import SoundboardIcon from "SoundboardIcon" /* 12262 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12264 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12266 */;
import StickerIcon from "StickerIcon" /* 12267 */;
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