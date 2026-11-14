// === Module 10725: GuildBoostingMarketingUtils ===

// Module 10725 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import StageIcon from "StageIcon" /* 8017 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8173 */;
import StarIcon from "StarIcon" /* 10183 */;
import ReactionIcon from "ReactionIcon" /* 10409 */;
import SoundboardIcon from "SoundboardIcon" /* 10726 */;
import GifIcon from "GifIcon" /* 10728 */;
import HeadphonesIcon from "HeadphonesIcon" /* 10729 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 10731 */;
import UploadIcon from "UploadIcon" /* 10733 */;
import ImagesIcon from "ImagesIcon" /* 10735 */;
import StickerIcon from "StickerIcon" /* 10737 */;
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