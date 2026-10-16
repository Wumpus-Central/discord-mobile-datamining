// === Module 13135: GuildBoostingMarketingUtils ===

// Module 13135 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import StageIcon from "StageIcon" /* 8450 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8848 */;
import ReactionIcon from "ReactionIcon" /* 9191 */;
import UploadIcon from "UploadIcon" /* 9642 */;
import StarIcon from "StarIcon" /* 9788 */;
import GifIcon from "GifIcon" /* 9986 */;
import ImagesIcon from "ImagesIcon" /* 12245 */;
import SoundboardIcon from "SoundboardIcon" /* 13136 */;
import HeadphonesIcon from "HeadphonesIcon" /* 13138 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13140 */;
import StickerIcon from "StickerIcon" /* 13141 */;
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