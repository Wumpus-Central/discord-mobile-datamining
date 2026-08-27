// === Module 15995: getIconForChannel ===

// Module 15995 (getIconForChannel)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import TextIcon from "TextIcon" /* 4981 */;
import ImageIcon from "ImageIcon" /* 4988 */;
import ForumIcon from "ForumIcon" /* 4989 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 4995 */;
import StageIcon from "StageIcon" /* 4998 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5002 */;

const ChannelTypes = ME.ChannelTypes;
const result = set.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsIcon.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return VoiceNormalIcon.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return StageIcon.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return TextIcon.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return ForumIcon.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return ImageIcon.ImageIcon;
  } else {
    return TextIcon.TextIcon;
  }
};