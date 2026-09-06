// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx
import ChannelTypes from "../../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import TextLockIcon from "../../../../../design/components/Icon/native/redesign/generated/TextLockIcon.tsx";
import ImageLockIcon from "../../../../../design/components/Icon/native/redesign/generated/ImageLockIcon.tsx";
import ForumLockIcon from "../../../../../design/components/Icon/native/redesign/generated/ForumLockIcon.tsx";
import AnnouncementsLockIcon from "../../../../../design/components/Icon/native/redesign/generated/AnnouncementsLockIcon.tsx";
import StageLockIcon from "../../../../../design/components/Icon/native/redesign/generated/StageLockIcon.tsx";
import VoiceLockIcon from "../../../../../design/components/Icon/native/redesign/generated/VoiceLockIcon.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx",
);

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
