// === Module 13418: GuildBoostingMarketingUtils ===

// Module 13418 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import StageIcon from "StageIcon" /* 7620 */;
import ShieldUserIcon from "ShieldUserIcon" /* 7776 */;
import UploadIcon from "UploadIcon" /* 9487 */;
import ReactionIcon from "ReactionIcon" /* 9489 */;
import StarIcon from "StarIcon" /* 10011 */;
import ImagesIcon from "ImagesIcon" /* 10107 */;
import GifIcon from "GifIcon" /* 10159 */;
import StickerIcon from "StickerIcon" /* 11128 */;
import SoundboardIcon from "SoundboardIcon" /* 13419 */;
import HeadphonesIcon from "HeadphonesIcon" /* 13421 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13423 */;
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