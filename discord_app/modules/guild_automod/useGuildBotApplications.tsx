// discord_app/modules/guild_automod/useGuildBotApplications.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import GuildSettingsFetchActionCreators from "../guild_settings/GuildSettingsFetchActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../guild_settings/GuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/useGuildBotApplications.tsx");

export const useGuildBotApplications = function useGuildBotApplications(guildId) {
  _require = guildId;
  const items = [GuildSettingsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => props.getProps().integrations);
  const items1 = [guildId, stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const guildIntegrationsApplications =
        GuildSettingsFetchActionCreators.fetchGuildIntegrationsApplications(closure_0);
    }
  }, items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => {
    let found1 = null;
    if (null != stateFromStores) {
      const found = stateFromStores.filter(
        (type) => type.type === guildId(stateFromStores[4]).IntegrationTypes.DISCORD,
      );
      const mapped = found.map((application) => application.application);
      found1 = mapped.filter(GlobalUtils.isNotNullish);
    }
    return found1;
  }, items2);
};
