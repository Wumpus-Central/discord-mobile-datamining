// === Module 14051: GuildBoostingMarketingUtils ===

// Module 14051 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import StageIcon from "StageIcon" /* 8661 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9040 */;
import ReactionIcon from "ReactionIcon" /* 9430 */;
import UploadIcon from "UploadIcon" /* 9895 */;
import StarIcon from "StarIcon" /* 10042 */;
import GifIcon from "GifIcon" /* 10240 */;
import StickerIcon from "StickerIcon" /* 11023 */;
import ImagesIcon from "ImagesIcon" /* 12765 */;
import SoundboardIcon from "SoundboardIcon" /* 14052 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14054 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14056 */;
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