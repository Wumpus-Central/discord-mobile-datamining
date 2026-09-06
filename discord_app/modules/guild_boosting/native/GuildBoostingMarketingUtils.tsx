// === Module 12527: GuildBoostingMarketingUtils ===

// Module 12527 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4454 */;
import StageIcon from "StageIcon" /* 5097 */;
import ReactionIcon from "ReactionIcon" /* 8757 */;
import UploadIcon from "UploadIcon" /* 9371 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9752 */;
import StickerIcon from "StickerIcon" /* 10114 */;
import StarIcon from "StarIcon" /* 10235 */;
import GifIcon from "GifIcon" /* 10381 */;
import ImagesIcon from "ImagesIcon" /* 11699 */;
import SoundboardIcon from "SoundboardIcon" /* 12528 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12530 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12532 */;
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