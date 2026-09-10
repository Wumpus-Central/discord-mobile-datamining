// === Module 12597: GuildBoostingMarketingUtils ===

// Module 12597 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4499 */;
import StageIcon from "StageIcon" /* 5147 */;
import ReactionIcon from "ReactionIcon" /* 8827 */;
import UploadIcon from "UploadIcon" /* 9441 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9822 */;
import StickerIcon from "StickerIcon" /* 10184 */;
import StarIcon from "StarIcon" /* 10305 */;
import GifIcon from "GifIcon" /* 10451 */;
import ImagesIcon from "ImagesIcon" /* 11770 */;
import SoundboardIcon from "SoundboardIcon" /* 12598 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12600 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12602 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return ReactionIcon.ReactionIcon;
  } else if (GuildBoostingUtils.PerkIcons.SOUNDBOARD === perkIcon) {
    return SoundboardIcon.SoundboardIcon;
  } else if (GuildBoostingUtils.PerkIcons.ANIMATED === perkIcon) {
    return GifIcon.GifIcon;
  } else if (GuildBoostingUtils.PerkIcons.AUDIO === perkIcon) {
    return HeadphonesIcon.HeadphonesIcon;
  } else if (GuildBoostingUtils.PerkIcons.STREAM === perkIcon) {
    return ScreenArrowIcon.ScreenArrowIcon;
  } else if (GuildBoostingUtils.PerkIcons.UPLOAD === perkIcon) {
    return UploadIcon.UploadIcon;
  } else if (GuildBoostingUtils.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return ShieldUserIcon.ShieldUserIcon;
  } else if (GuildBoostingUtils.PerkIcons.CUSTOMIZATION === perkIcon) {
    return ImagesIcon.ImagesIcon;
  } else if (GuildBoostingUtils.PerkIcons.VANITY === perkIcon) {
    return StarIcon.StarIcon;
  } else if (GuildBoostingUtils.PerkIcons.STAGE_VIDEO === perkIcon) {
    return StageIcon.StageIcon;
  } else if (GuildBoostingUtils.PerkIcons.STICKER === perkIcon) {
    return StickerIcon.StickerIcon;
  } else {
    return ReactionIcon.ReactionIcon;
  }
};