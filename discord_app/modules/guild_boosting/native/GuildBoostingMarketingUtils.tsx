// === Module 13684: GuildBoostingMarketingUtils ===

// Module 13684 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import StageIcon from "StageIcon" /* 8605 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9024 */;
import ReactionIcon from "ReactionIcon" /* 9381 */;
import UploadIcon from "UploadIcon" /* 9838 */;
import StarIcon from "StarIcon" /* 9983 */;
import GifIcon from "GifIcon" /* 10182 */;
import ImagesIcon from "ImagesIcon" /* 12559 */;
import SoundboardIcon from "SoundboardIcon" /* 13685 */;
import HeadphonesIcon from "HeadphonesIcon" /* 13687 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13689 */;
import StickerIcon from "StickerIcon" /* 13690 */;
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