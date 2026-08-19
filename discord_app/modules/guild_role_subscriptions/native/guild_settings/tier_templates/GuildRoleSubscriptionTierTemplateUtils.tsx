// === Module 17008: getPrivateChannelIconComponent ===

// Module 17008 (getPrivateChannelIconComponent)
import obj132 from "obj132" /* 2 */;
import set from "set" /* 692 */;
import TextLockIcon from "TextLockIcon" /* 6874 */;
import ImageLockIcon from "ImageLockIcon" /* 6880 */;
import ForumLockIcon from "ForumLockIcon" /* 6881 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 6888 */;
import StageLockIcon from "StageLockIcon" /* 6891 */;
import VoiceLockIcon from "VoiceLockIcon" /* 6893 */;

const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (set.ChannelTypes.GUILD_TEXT === type) {
    return TextLockIcon.TextLockIcon;
  } else if (set.ChannelTypes.GUILD_VOICE === type) {
    return VoiceLockIcon.VoiceLockIcon;
  } else if (set.ChannelTypes.GUILD_STAGE_VOICE === type) {
    return StageLockIcon.StageLockIcon;
  } else if (set.ChannelTypes.GUILD_FORUM === type) {
    return ForumLockIcon.ForumLockIcon;
  } else if (set.ChannelTypes.GUILD_MEDIA === type) {
    return ImageLockIcon.ImageLockIcon;
  } else if (set.ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsLockIcon.AnnouncementsLockIcon;
  } else {
    return TextLockIcon.TextLockIcon;
  }
};