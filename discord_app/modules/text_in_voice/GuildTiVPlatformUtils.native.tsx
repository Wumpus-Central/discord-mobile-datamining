// === Module 8066: getSystemLocale ===

// Module 8066 (getSystemLocale)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

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