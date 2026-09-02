// === Module 17607: getPrivateChannelIconComponent ===

// Module 17607 (getPrivateChannelIconComponent)
import set from "set" /* 2 */;
import set2 from "set" /* 689 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (set2.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5031).TextLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5051).VoiceLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5049).StageLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5039).ForumLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5038).ImageLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5046).AnnouncementsLockIcon;
  } else {
    return tmp(5031).TextLockIcon;
  }
};