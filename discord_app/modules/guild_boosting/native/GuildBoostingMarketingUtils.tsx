// === Module 14332: GuildBoostingMarketingUtils ===

// Module 14332 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import StageIcon from "StageIcon" /* 8815 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9211 */;
import ReactionIcon from "ReactionIcon" /* 9605 */;
import UploadIcon from "UploadIcon" /* 10103 */;
import StarIcon from "StarIcon" /* 10249 */;
import GifIcon from "GifIcon" /* 10444 */;
import StickerIcon from "StickerIcon" /* 11233 */;
import ImagesIcon from "ImagesIcon" /* 13029 */;
import SoundboardIcon from "SoundboardIcon" /* 14333 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14335 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14337 */;
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