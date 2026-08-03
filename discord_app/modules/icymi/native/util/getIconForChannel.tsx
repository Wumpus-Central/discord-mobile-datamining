import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4774) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return require(4781) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return require(4777) /* StageIcon */.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return require(4761) /* TextIcon */.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return require(4768) /* ForumIcon */.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return require(4767) /* ImageIcon */.ImageIcon;
  } else {
    return require(4761) /* TextIcon */.TextIcon;
  }
};