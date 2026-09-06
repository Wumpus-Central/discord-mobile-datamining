// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import GuildBoostingUtils from "../../../utils/GuildBoostingUtils.tsx";
import StageIcon from "../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import UploadIcon from "../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import ShieldUserIcon from "../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import StickerIcon from "../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import GifIcon from "../../../design/components/Icon/native/redesign/generated/GifIcon.tsx";
import ImagesIcon from "../../../design/components/Icon/native/redesign/generated/ImagesIcon.tsx";
import SoundboardIcon from "../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import HeadphonesIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesIcon.tsx";
import ScreenArrowIcon from "../../../design/components/Icon/native/redesign/generated/ScreenArrowIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
