// === Module 16577: getIconForChannel ===

// Module 16577 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5130 */;
import ImageIcon from "ImageIcon" /* 5137 */;
import ForumIcon from "ForumIcon" /* 5138 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5144 */;
import StageIcon from "StageIcon" /* 5147 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5151 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsIcon.AnnouncementsIcon;
  } else if (ChannelTypes.GUILD_VOICE === type) {
    return VoiceNormalIcon.VoiceNormalIcon;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    return StageIcon.StageIcon;
  } else if (ChannelTypes.GUILD_TEXT === type) {
    return TextIcon.TextIcon;
  } else if (ChannelTypes.GUILD_FORUM === type) {
    return ForumIcon.ForumIcon;
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    return ImageIcon.ImageIcon;
  } else {
    return TextIcon.TextIcon;
  }
};