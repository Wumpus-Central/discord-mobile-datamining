// === Module 14232: GuildBoostingMarketingUtils ===

// Module 14232 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import StageIcon from "StageIcon" /* 8793 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9187 */;
import ReactionIcon from "ReactionIcon" /* 9580 */;
import UploadIcon from "UploadIcon" /* 10047 */;
import StarIcon from "StarIcon" /* 10193 */;
import GifIcon from "GifIcon" /* 10390 */;
import StickerIcon from "StickerIcon" /* 11175 */;
import ImagesIcon from "ImagesIcon" /* 12939 */;
import SoundboardIcon from "SoundboardIcon" /* 14233 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14235 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14237 */;
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