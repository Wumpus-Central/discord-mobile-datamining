// === Module 18226: getIconForChannel ===

// Module 18226 (getIconForChannel)
import Constants from "Constants" /* 1084 */;
import TextIcon from "TextIcon" /* 8588 */;
import ImageIcon from "ImageIcon" /* 8595 */;
import ForumIcon from "ForumIcon" /* 8596 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8602 */;
import StageIcon from "StageIcon" /* 8605 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8609 */;
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