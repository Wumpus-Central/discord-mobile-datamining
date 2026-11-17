// === Module 19373: getIconForChannel ===

// Module 19373 (getIconForChannel)
import Constants from "Constants" /* 1072 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 7442 */;
import StageIcon from "StageIcon" /* 8028 */;
import TextIcon from "TextIcon" /* 8089 */;
import ImageIcon from "ImageIcon" /* 8096 */;
import ForumIcon from "ForumIcon" /* 8097 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8102 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export function getIconForChannel(stateFromStores) {
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
}