// === Module 12527: GuildBoostingMarketingUtils ===

// Module 12527 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4454 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8757).ReactionIcon;
  } else if (tmp(4454).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12528).SoundboardIcon;
  } else if (tmp(4454).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10381).GifIcon;
  } else if (tmp(4454).PerkIcons.AUDIO === perkIcon) {
    return tmp(12530).HeadphonesIcon;
  } else if (tmp(4454).PerkIcons.STREAM === perkIcon) {
    return tmp(12532).ScreenArrowIcon;
  } else if (tmp(4454).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9371).UploadIcon;
  } else if (tmp(4454).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9752).ShieldUserIcon;
  } else if (tmp(4454).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11699).ImagesIcon;
  } else if (tmp(4454).PerkIcons.VANITY === perkIcon) {
    return tmp(10235).StarIcon;
  } else if (tmp(4454).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5097).StageIcon;
  } else if (tmp(4454).PerkIcons.STICKER === perkIcon) {
    return tmp(10114).StickerIcon;
  } else {
    return tmp(8757).ReactionIcon;
  }
};