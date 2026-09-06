// === Module 17787: GuildRoleSubscriptionTierTemplateUtils ===

// Module 17787 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5078).TextLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5098).VoiceLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5096).StageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5086).ForumLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5085).ImageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5093).AnnouncementsLockIcon;
  } else {
    return tmp(5078).TextLockIcon;
  }
};