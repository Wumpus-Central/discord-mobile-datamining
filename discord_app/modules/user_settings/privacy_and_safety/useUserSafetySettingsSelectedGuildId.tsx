// discord_app/modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx
import GuildStore from "../../../stores/GuildStore.tsx";

const require = fn;
const UserSettingsSafetySelectedGuildStore = fn(16074);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: closure_4 } =
  UserSettingsSafetySelectedGuildStore);
const GuildFeatures = fn(1085).GuildFeatures;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useUserSafetySettingsSelectedGuildId() {
  return React4().selectedGuildId;
}
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useAllServersOptionSelected() {
  return React4().selectedGuildId === React3;
}
const size = fn(2);
const result2 = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx",
);

export { useUserSafetySettingsSelectedGuildId };
export { useAllServersOptionSelected };
export const useIsSelectedGuildAHub = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsSelectedGuildAHub() {
      const cResult = selectedGuildId(576).c(5);
      if (typeof useUserSafetySettingsSelectedGuildId === "function") {
        selectedGuildId = closure_4().selectedGuildId;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== selectedGuildId) {
          const fn = function u() {
            return GuildStore.getGuild(selectedGuildId);
          };
          cResult[1] = selectedGuildId;
          cResult[2] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp8);
        let features1;
        if (stateFromStores != null) {
          features1 = stateFromStores.features;
        }
        if (cResult[3] !== features1) {
          let flag;
          if (stateFromStores != null) {
            const features = stateFromStores.features;
            flag = features.has(GuildFeatures.HUB);
          }
          if (flag == null) {
            flag = false;
          }
          let features2;
          if (stateFromStores != null) {
            features2 = stateFromStores.features;
          }
          cResult[3] = features2;
          cResult[4] = flag;
          let tmp12 = flag;
        } else {
          tmp12 = cResult[4];
        }
        return tmp12;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const obj = selectedGuildId(576);
      tmp = selectedGuildId;
    }
  : function useIsSelectedGuildAHub() {
      if (typeof useUserSafetySettingsSelectedGuildId === "function") {
        const selectedGuildId = closure_4().selectedGuildId;
        const items = [GuildStore];
        const stateFromStores = selectedGuildId(504).useStateFromStores(items, () =>
          GuildStore.getGuild(selectedGuildId),
        );
        let flag;
        if (stateFromStores != null) {
          const features = stateFromStores.features;
          flag = features.has(GuildFeatures.HUB);
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
