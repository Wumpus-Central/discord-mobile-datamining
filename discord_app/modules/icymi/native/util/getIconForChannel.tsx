import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4803) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return require(4810) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return require(4806) /* StageIcon */.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return require(4790) /* TextIcon */.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return require(4797) /* ForumIcon */.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return require(4796) /* ImageIcon */.ImageIcon;
  } else {
    return require(4790) /* TextIcon */.TextIcon;
  }
};