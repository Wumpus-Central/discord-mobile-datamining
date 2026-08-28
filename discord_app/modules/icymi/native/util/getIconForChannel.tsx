// === Module 16013: getIconForChannel ===

// Module 16013 (getIconForChannel)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import TextIcon from "TextIcon" /* 4994 */;
import ImageIcon from "ImageIcon" /* 5001 */;
import ForumIcon from "ForumIcon" /* 5002 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5008 */;
import StageIcon from "StageIcon" /* 5011 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5015 */;

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