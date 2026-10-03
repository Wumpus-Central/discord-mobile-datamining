// === Module 17960: GuildRoleSubscriptionTierTemplateUtils ===

// Module 17960 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1106 */;
import TextLockIcon from "TextLockIcon" /* 5862 */;
import ImageLockIcon from "ImageLockIcon" /* 5869 */;
import ForumLockIcon from "ForumLockIcon" /* 5870 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 5877 */;
import StageLockIcon from "StageLockIcon" /* 5880 */;
import VoiceLockIcon from "VoiceLockIcon" /* 5882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return TextLockIcon.TextLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_VOICE === type) {
    return VoiceLockIcon.VoiceLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE === type) {
    return StageLockIcon.StageLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_FORUM === type) {
    return ForumLockIcon.ForumLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_MEDIA === type) {
    return ImageLockIcon.ImageLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsLockIcon.AnnouncementsLockIcon;
  } else {
    return TextLockIcon.TextLockIcon;
  }
};