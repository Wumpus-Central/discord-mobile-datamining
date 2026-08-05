// discord_app/modules/user_profile/hooks/useShouldConvertBioEmoji.tsx
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};