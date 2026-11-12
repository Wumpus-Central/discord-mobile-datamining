// === Module 20321: useGuildBotApplications ===

// Module 20321 (useGuildBotApplications)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GuildSettingsFetchActionCreators from "GuildSettingsFetchActionCreators" /* 8347 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8339 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/useGuildBotApplications.tsx");

export function useGuildBotApplications(guildId) {
  _require = guildId;
  items = [GuildSettingsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => props.getProps().integrations);
  const items1 = [guildId, stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const guildIntegrationsApplications = GuildSettingsFetchActionCreators.fetchGuildIntegrationsApplications(closure_0);
    }
  }, items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => {
    let found1 = null;
    if (null != stateFromStores) {
      const found = stateFromStores.filter((type) => type.type === guildId(stateFromStores[4]).IntegrationTypes.DISCORD);
      const mapped = found.map((application) => application.application);
      found1 = mapped.filter(GlobalUtils.isNotNullish);
    }
    return found1;
  }, items2);
}