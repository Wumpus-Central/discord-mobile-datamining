// discord_app/modules/guilds_bar/useGuildsBarGuildMediaState.tsx
import GuildMediaStateShadowCompare from "GuildMediaStateShadowCompare.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildMediaStateStore from "GuildMediaStateStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/useGuildsBarGuildMediaState.tsx");

export default function useGuildsBarGuildMediaState(arg0) {
  const current = noop.useRef(
    require("GuildMediaStateStoreExperiment").useGuildMediaStateSource("GuildsBarGuild"),
  ).current;
  if (require("GuildMediaStateStoreExperiment").GuildMediaStateSource.STORE === current) {
    closure_130_0 = arg0;
    let tmpResult = tmp(tmp2[2]);
    const items = [GuildMediaStateStore];
    const items1 = [arg0];
    return tmpResult.useStateFromStores(items, () => GuildMediaStateStore.getGuildMediaState(closure_0), items1);
  } else if (tmp(tmp2[5]).GuildMediaStateSource.SHADOW === current) {
    _require = arg0;
    const tmp5 = require("useGuildMediaState")(arg0);
    importDefault = tmp5;
    closure_129_0 = arg0;
    tmpResult = tmp(tmp2[2]);
    const items2 = [GuildMediaStateStore];
    const items3 = [arg0];
    stateFromStores = tmpResult.useStateFromStores(
      items2,
      () => GuildMediaStateStore.getGuildMediaState(closure_0),
      items3,
    );
    const items4 = [arg0, tmp5, stateFromStores];
    const effect = noop.useEffect(() => {
      const result = GuildMediaStateShadowCompare.compareGuildMediaState(closure_0, closure_1, stateFromStores);
    }, items4);
    return tmp5;
  } else if (tmp(tmp2[5]).GuildMediaStateSource.HOOK === current) {
    return require("useGuildMediaState")(arg0);
  }
  const obj = require("GuildMediaStateStoreExperiment");
}
