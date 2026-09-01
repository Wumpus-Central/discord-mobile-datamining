// discord_app/modules/user_profile/hooks/useShouldConvertBioEmoji.tsx
import set from "../../../../_runtime/00002_set.js";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";

const result = set.fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = explicitContentFromProto.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = explicitContentFromProto.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
}
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = explicitContentFromProto.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = explicitContentFromProto.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
