// discord_app/modules/guilds_bar/useGuildsBarGuildMediaState.tsx
import GuildMediaStateStore from "GuildMediaStateStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/useGuildsBarGuildMediaState.tsx");

export default function useGuildsBarGuildMediaState(arg0) {
  _require = arg0;
  const items = [GuildMediaStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => GuildMediaStateStore.getGuildMediaState(closure_0),
    items1,
  );
}
