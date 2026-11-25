// === Module 20209: GuildRoleSubscriptionTierTemplateUtils ===

// Module 20209 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1092 */;
import TextLockIcon from "TextLockIcon" /* 7113 */;
import ImageLockIcon from "ImageLockIcon" /* 7120 */;
import ForumLockIcon from "ForumLockIcon" /* 7121 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 7128 */;
import StageLockIcon from "StageLockIcon" /* 7131 */;
import VoiceLockIcon from "VoiceLockIcon" /* 7133 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export function getPrivateChannelIconComponent(type) {
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
}