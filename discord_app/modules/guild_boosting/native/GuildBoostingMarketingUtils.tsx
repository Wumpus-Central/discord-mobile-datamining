// discord_app/modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getGuildTierFromGuild from "../../../utils/GuildBoostingUtils.tsx";
import StageIcon from "../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import UploadIcon from "../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import StickerIcon from "../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import SoundboardIcon from "../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import ShieldUserIcon from "../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import GifIcon from "../../../design/components/Icon/native/redesign/generated/GifIcon.tsx";
import HeadphonesIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesIcon.tsx";
import ScreenArrowIcon from "../../../design/components/Icon/native/redesign/generated/ScreenArrowIcon.tsx";
import ImagesIcon from "../../../design/components/Icon/native/redesign/generated/ImagesIcon.tsx";

const result = obj132.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return ReactionIcon.ReactionIcon;
  } else if (getGuildTierFromGuild.PerkIcons.SOUNDBOARD === perkIcon) {
    return SoundboardIcon.SoundboardIcon;
  } else if (getGuildTierFromGuild.PerkIcons.ANIMATED === perkIcon) {
    return GifIcon.GifIcon;
  } else if (getGuildTierFromGuild.PerkIcons.AUDIO === perkIcon) {
    return HeadphonesIcon.HeadphonesIcon;
  } else if (getGuildTierFromGuild.PerkIcons.STREAM === perkIcon) {
    return ScreenArrowIcon.ScreenArrowIcon;
  } else if (getGuildTierFromGuild.PerkIcons.UPLOAD === perkIcon) {
    return UploadIcon.UploadIcon;
  } else if (getGuildTierFromGuild.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return ShieldUserIcon.ShieldUserIcon;
  } else if (getGuildTierFromGuild.PerkIcons.CUSTOMIZATION === perkIcon) {
    return ImagesIcon.ImagesIcon;
  } else if (getGuildTierFromGuild.PerkIcons.VANITY === perkIcon) {
    return StarIcon.StarIcon;
  } else if (getGuildTierFromGuild.PerkIcons.STAGE_VIDEO === perkIcon) {
    return StageIcon.StageIcon;
  } else if (getGuildTierFromGuild.PerkIcons.STICKER === perkIcon) {
    return StickerIcon.StickerIcon;
  } else {
    return ReactionIcon.ReactionIcon;
  }
};