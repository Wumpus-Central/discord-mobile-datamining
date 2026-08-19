// discord_app/modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import explicitContentFromProto from "../UserSettings.tsx";

const result = obj132.fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = explicitContentFromProto.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = explicitContentFromProto.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
  }
  return setting1;
};