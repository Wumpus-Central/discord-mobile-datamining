// === Module 17284: getPrivateChannelIconComponent ===

// Module 17284 (getPrivateChannelIconComponent)
import set from "set" /* 2 */;
import set2 from "set" /* 692 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (set2.ChannelTypes.GUILD_TEXT === type) {
    return tmp(4979).TextLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_VOICE === type) {
    return tmp(4999).VoiceLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(4997).StageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_FORUM === type) {
    return tmp(4987).ForumLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(4986).ImageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(4994).AnnouncementsLockIcon;
  } else {
    return tmp(4979).TextLockIcon;
  }
};