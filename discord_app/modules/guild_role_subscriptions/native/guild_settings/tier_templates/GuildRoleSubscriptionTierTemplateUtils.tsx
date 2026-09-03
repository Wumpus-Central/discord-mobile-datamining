// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx
import set from "../../../../../../_runtime/00002_set.js";
import set2 from "../../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";

const result = set.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx",
);

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (set2.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5032).TextLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5052).VoiceLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5050).StageLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5040).ForumLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5039).ImageLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5047).AnnouncementsLockIcon;
  } else {
    return tmp(5032).TextLockIcon;
  }
};
