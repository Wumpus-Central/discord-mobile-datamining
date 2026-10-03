// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import StageIcon from "../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import UploadIcon from "../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import ShieldUserIcon from "../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import GifIcon from "../../../design/components/Icon/native/redesign/generated/GifIcon.tsx";
import ImagesIcon from "../../../design/components/Icon/native/redesign/generated/ImagesIcon.tsx";
import SoundboardIcon from "../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import HeadphonesIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesIcon.tsx";
import ScreenArrowIcon from "../../../design/components/Icon/native/redesign/generated/ScreenArrowIcon.tsx";
import StickerIcon from "../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
