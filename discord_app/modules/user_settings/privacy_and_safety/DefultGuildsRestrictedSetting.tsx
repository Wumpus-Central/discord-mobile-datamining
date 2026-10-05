// discord_app/modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx
import UserSettings from "../UserSettings.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const DefaultGuildsRestricted = UserSettings.DefaultGuildsRestricted;
      const setting = DefaultGuildsRestricted.useSetting();
      const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
      let setting1 = DefaultGuildsRestrictedV2.useSetting();
      if (null == setting1) {
        setting1 = setting || setting;
      }
      return setting1;
    }
  : () => {
      const DefaultGuildsRestricted = UserSettings.DefaultGuildsRestricted;
      const setting = DefaultGuildsRestricted.useSetting();
      const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
      let setting1 = DefaultGuildsRestrictedV2.useSetting();
      if (null == setting1) {
        setting1 = setting || setting;
      }
      return setting1;
    };
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = tmp2;
