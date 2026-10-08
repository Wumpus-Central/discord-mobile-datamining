// === Module 18315: GuildRoleSubscriptionTierTemplateUtils ===

// Module 18315 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1106 */;
import TextLockIcon from "TextLockIcon" /* 8181 */;
import ImageLockIcon from "ImageLockIcon" /* 8188 */;
import ForumLockIcon from "ForumLockIcon" /* 8189 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 8196 */;
import StageLockIcon from "StageLockIcon" /* 8199 */;
import VoiceLockIcon from "VoiceLockIcon" /* 8201 */;
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