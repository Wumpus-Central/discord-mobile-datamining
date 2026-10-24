// === Module 13444: GuildBoostingMarketingUtils ===

// Module 13444 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import StageIcon from "StageIcon" /* 8568 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8990 */;
import ReactionIcon from "ReactionIcon" /* 9350 */;
import UploadIcon from "UploadIcon" /* 9804 */;
import StarIcon from "StarIcon" /* 9949 */;
import GifIcon from "GifIcon" /* 10148 */;
import ImagesIcon from "ImagesIcon" /* 12517 */;
import SoundboardIcon from "SoundboardIcon" /* 13445 */;
import HeadphonesIcon from "HeadphonesIcon" /* 13447 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13449 */;
import StickerIcon from "StickerIcon" /* 13450 */;
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