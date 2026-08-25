// === Module 15851: getIconForChannel ===

// Module 15851 (getIconForChannel)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import TextIcon from "TextIcon" /* 4911 */;
import ImageIcon from "ImageIcon" /* 4917 */;
import ForumIcon from "ForumIcon" /* 4918 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 4924 */;
import StageIcon from "StageIcon" /* 4927 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 4931 */;

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