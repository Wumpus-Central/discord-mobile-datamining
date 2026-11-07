// === Module 18725: useGuildsBarGuildMediaState ===

// Module 18725 (useGuildsBarGuildMediaState)
import GuildMediaStateStore from "GuildMediaStateStore" /* 15900 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/useGuildsBarGuildMediaState.tsx");

export default function useGuildsBarGuildMediaState(arg0) {
  _require = arg0;
  items = [GuildMediaStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => GuildMediaStateStore.getGuildMediaState(closure_0), items1);
};