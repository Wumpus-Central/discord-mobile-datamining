// === Module 14101: GuildBoostingMarketingUtils ===

// Module 14101 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import StageIcon from "StageIcon" /* 8669 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9059 */;
import ReactionIcon from "ReactionIcon" /* 9452 */;
import UploadIcon from "UploadIcon" /* 9916 */;
import StarIcon from "StarIcon" /* 10063 */;
import GifIcon from "GifIcon" /* 10260 */;
import StickerIcon from "StickerIcon" /* 11042 */;
import ImagesIcon from "ImagesIcon" /* 12803 */;
import SoundboardIcon from "SoundboardIcon" /* 14102 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14104 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14106 */;
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