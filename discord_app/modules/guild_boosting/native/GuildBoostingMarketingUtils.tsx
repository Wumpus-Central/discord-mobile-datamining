// === Module 14370: GuildBoostingMarketingUtils ===

// Module 14370 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import StageIcon from "StageIcon" /* 8746 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9145 */;
import ReactionIcon from "ReactionIcon" /* 9539 */;
import UploadIcon from "UploadIcon" /* 10044 */;
import StarIcon from "StarIcon" /* 10190 */;
import GifIcon from "GifIcon" /* 10385 */;
import StickerIcon from "StickerIcon" /* 11183 */;
import ImagesIcon from "ImagesIcon" /* 13031 */;
import SoundboardIcon from "SoundboardIcon" /* 14371 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14373 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14375 */;
import size from "module_2" /* 2 */;

const PerkIcons = PremiumConstants.PerkIcons;
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export function getIconForPerk(perkIcon) {
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
}