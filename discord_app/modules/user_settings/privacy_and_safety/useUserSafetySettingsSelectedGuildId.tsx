// discord_app/modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx
import GuildStore from "../../../stores/GuildStore.tsx";

const require = fn;
const UserSettingsSafetySelectedGuildStore = fn(17898);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: closure_4 } =
  UserSettingsSafetySelectedGuildStore);
const GuildFeatures = fn(1072).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx",
);

export function useUserSafetySettingsSelectedGuildId() {
  return React4().selectedGuildId;
}
export function useAllServersOptionSelected() {
  return React4().selectedGuildId === React3;
}
export function useIsSelectedGuildAHub() {
  const selectedGuildId = closure_4().selectedGuildId;
  const items = [GuildStore];
  const stateFromStores = selectedGuildId(504).useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  let flag;
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    flag = features.has(GuildFeatures.HUB);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
