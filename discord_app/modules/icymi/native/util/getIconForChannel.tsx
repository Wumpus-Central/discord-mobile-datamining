// discord_app/modules/icymi/native/util/getIconForChannel.tsx
import { ChannelTypes } from "ME";
import { AnnouncementsIcon } from "../../../../design/components/Icon/native/redesign/generated/AnnouncementsIcon.tsx";
import { ForumIcon } from "../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import { ImageIcon } from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import { StageIcon } from "../../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import { TextIcon } from "../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import { VoiceNormalIcon } from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

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