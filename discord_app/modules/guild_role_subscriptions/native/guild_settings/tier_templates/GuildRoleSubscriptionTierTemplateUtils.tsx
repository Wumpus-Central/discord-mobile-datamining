// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx
import { set } from "../../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
const result = require("VoiceLockIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (set.ChannelTypes.GUILD_TEXT === type) {
    return tmp(4847).TextLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_VOICE === type) {
    return tmp(4866).VoiceLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(4864).StageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_FORUM === type) {
    return tmp(4854).ForumLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(4853).ImageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(4861).AnnouncementsLockIcon;
  } else {
    return tmp(4847).TextLockIcon;
  }
};