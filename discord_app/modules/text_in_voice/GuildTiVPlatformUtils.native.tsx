// discord_app/modules/text_in_voice/GuildTiVPlatformUtils.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";

const result = obj132.fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default {
  getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText(prop1) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cuMfH0);
  }
};