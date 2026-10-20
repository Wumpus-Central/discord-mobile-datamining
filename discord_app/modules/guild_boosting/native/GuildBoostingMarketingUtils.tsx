// === Module 13266: GuildBoostingMarketingUtils ===

// Module 13266 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import StageIcon from "StageIcon" /* 8517 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8923 */;
import ReactionIcon from "ReactionIcon" /* 9280 */;
import UploadIcon from "UploadIcon" /* 9732 */;
import StarIcon from "StarIcon" /* 9877 */;
import GifIcon from "GifIcon" /* 10076 */;
import ImagesIcon from "ImagesIcon" /* 12370 */;
import SoundboardIcon from "SoundboardIcon" /* 13267 */;
import HeadphonesIcon from "HeadphonesIcon" /* 13269 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13271 */;
import StickerIcon from "StickerIcon" /* 13272 */;
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