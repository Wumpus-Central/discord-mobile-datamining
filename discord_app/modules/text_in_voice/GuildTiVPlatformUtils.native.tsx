// discord_app/modules/text_in_voice/GuildTiVPlatformUtils.native.tsx
const result = require("set").fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default {
  getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled) {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText(prop) {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.cuMfH0);
  }
};