// === Module 15851: useGuildsBarGuildMediaState ===

// Module 15851 (useGuildsBarGuildMediaState)
import closure_3 from "noop" /* 19 */;
import closure_4 from "markAllStale" /* 13292 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guilds_bar/useGuildsBarGuildMediaState.tsx");

export default function useGuildsBarGuildMediaState(arg0) {
  const current = React.useRef(_require(stateFromStores[5]).useGuildMediaStateSource("GuildsBarGuild")).current;
  if (_require(stateFromStores[5]).GuildMediaStateSource.STORE === current) {
    _require = arg0;
    let tmpResult = tmp(tmp2[2]);
    const items = [closure_4];
    const items1 = [arg0];
    return tmpResult.useStateFromStores(items, () => closure_1_4.getGuildMediaState(closure_0), items1);
  } else if (tmp(tmp2[5]).GuildMediaStateSource.SHADOW === current) {
    _require = arg0;
    const tmp5 = importDefault(tmp2[3])(arg0);
    importDefault = tmp5;
    _require = arg0;
    tmpResult = tmp(tmp2[2]);
    const items2 = [closure_4];
    const items3 = [arg0];
    stateFromStores = tmpResult.useStateFromStores(items2, () => closure_1_4.getGuildMediaState(closure_0), items3);
    const items4 = [arg0, tmp5, stateFromStores];
    const effect = obj2.useEffect(() => {
      const result = callback(stateFromStores[4]).compareGuildMediaState(callback, closure_1, stateFromStores);
    }, items4);
    return tmp5;
  } else if (tmp(tmp2[5]).GuildMediaStateSource.HOOK === current) {
    return importDefault(tmp2[3])(arg0);
  }
  const obj = _require(stateFromStores[5]);
  obj2 = React;
};