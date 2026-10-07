// discord_app/modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx
import Constants from "../../../../Constants.tsx";
import openUserSettings from "../../core/native/openUserSettings.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};
