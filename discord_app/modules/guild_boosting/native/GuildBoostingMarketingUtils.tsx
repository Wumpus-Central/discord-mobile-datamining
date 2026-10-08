// === Module 12278: GuildBoostingMarketingUtils ===

// Module 12278 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import StageIcon from "StageIcon" /* 8200 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8597 */;
import ReactionIcon from "ReactionIcon" /* 8930 */;
import UploadIcon from "UploadIcon" /* 9340 */;
import StarIcon from "StarIcon" /* 9483 */;
import GifIcon from "GifIcon" /* 9703 */;
import ImagesIcon from "ImagesIcon" /* 11604 */;
import SoundboardIcon from "SoundboardIcon" /* 12279 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12281 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12283 */;
import StickerIcon from "StickerIcon" /* 12284 */;
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