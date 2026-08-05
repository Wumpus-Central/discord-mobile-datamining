// discord_app/modules/icymi/native/util/getIconForChannel.tsx
import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require("../../../../design/components/Icon/native/redesign/generated/AnnouncementsIcon.tsx") /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return require("../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx") /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return require("../../../../design/components/Icon/native/redesign/generated/StageIcon.tsx") /* StageIcon */.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return require("../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx") /* TextIcon */.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return require("../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx") /* ForumIcon */.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return require("../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx") /* ImageIcon */.ImageIcon;
  } else {
    return require("../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx") /* TextIcon */.TextIcon;
  }
};