// === Module 16310: useGuildsBarGuildMediaState ===

// Module 16310 (useGuildsBarGuildMediaState)
import GuildMediaStateShadowCompare from "GuildMediaStateShadowCompare" /* 16312 */;
import react from "react" /* 19 */;
import GuildMediaStateStore from "GuildMediaStateStore" /* 13536 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let result = size.fileFinishedImporting("modules/guilds_bar/useGuildsBarGuildMediaState.tsx");

export default function useGuildsBarGuildMediaState(arg0) {
  let closure_0;
  let closure_1;
  let guildMediaState;
  let stateFromStores;
  const f123932 = () => guildMediaState.getGuildMediaState(closure_0);
  let obj = require("GuildMediaStateStoreExperiment");
  const current = react.useRef(obj.useGuildMediaStateSource("GuildsBarGuild")).current;
  if (require("GuildMediaStateStoreExperiment").GuildMediaStateSource.STORE === current) {
    _require = arg0;
    const items = [GuildMediaStateStore];
    const items1 = [arg0];
    const tmpResult = require("get initialized");
    return tmpResult.useStateFromStores(items, f123932, items1);
  } else if (require("GuildMediaStateStoreExperiment").GuildMediaStateSource.SHADOW === current) {
    const tmp5 = require("useGuildMediaState")(arg0);
    importDefault = tmp5;
    _require = arg0;
    const items2 = [GuildMediaStateStore];
    const items3 = [arg0];
    const tmpResult2 = require("get initialized");
    stateFromStores = tmpResult2.useStateFromStores(items2, f123932, items3);
    const items4 = [arg0, tmp5, stateFromStores];
    const effect = react.useEffect(() => {
      const obj = GuildMediaStateShadowCompare;
      const result = obj.compareGuildMediaState(closure_0, closure_1, stateFromStores);
    }, items4);
    return tmp5;
  } else if (require("GuildMediaStateStoreExperiment").GuildMediaStateSource.HOOK === current) {
    return require("useGuildMediaState")(arg0);
  }
};