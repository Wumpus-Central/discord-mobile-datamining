// discord_app/modules/guild_settings/integrations/useGuildSettingsAppIntegration.tsx
import GuildSettingsStore from "../GuildSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/useGuildSettingsAppIntegration.tsx");

export default function useGuildSettingsAppIntegration(arg0) {
  _require = arg0;
  items = [GuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  const obj = require("initialize");
  const items1 = [GuildSettingsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => GuildSettingsStore.getProps().integrations,
  );
  let found;
  if (stateFromStores1 != null) {
    found = stateFromStores1.find((application) => {
      application = application.application;
      let tmp = "discord" === application.type;
      if (tmp) {
        let id;
        if (application != null) {
          id = application.id;
        }
        tmp = id === closure_0;
      }
      return tmp;
    });
  }
  return { guild: stateFromStores, integration: found, isRemoved: null != stateFromStores1 && null == found };
}
