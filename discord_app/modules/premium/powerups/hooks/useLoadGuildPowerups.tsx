// === Module 12155: useLoadGuildPowerups ===

// Module 12155 (useLoadGuildPowerups)
import GameServerActionCreators from "GameServerActionCreators" /* 12156 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12162 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let gameServerEnabled;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  let obj2 = require("GameServerExperiment");
  gameServerEnabled = obj2.useGameServerEnabled(arg0, "useLoadGuildPowerups");
  if (cResult[0] === gameServerEnabled) {
    let tmp3;
    let tmp4;
    let tmp7;
    let tmp6;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
    if (cResult[4] !== arg0) {
      const fn2 = function l() {
        const obj = GuildPowerupsActionCreators;
        const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(closure_0);
        const obj2 = GuildPowerupsActionCreators;
        const guildBoostEntitlements = obj2.fetchGuildBoostEntitlements(closure_0);
      };
      const items = [arg0];
      cResult[4] = arg0;
      cResult[5] = fn2;
      cResult[6] = items;
      tmp7 = items;
      tmp6 = fn2;
    } else {
      tmp6 = cResult[5];
      tmp7 = cResult[6];
    }
    const effect1 = react.useEffect(tmp6, tmp7);
  }
  const fn = function o() {
    if (gameServerEnabled) {
      const obj = GameServerActionCreators;
      const gameServerCatalog = obj.fetchGameServerCatalog(closure_0);
    }
  };
  const items1 = [arg0, gameServerEnabled];
  cResult[0] = gameServerEnabled;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp4 = items1;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0;
  let gameServerEnabled;
  _require = arg0;
  let obj = require("GameServerExperiment");
  gameServerEnabled = obj.useGameServerEnabled(arg0, "useLoadGuildPowerups");
  const items = [arg0, gameServerEnabled];
  const effect = react.useEffect(() => {
    if (gameServerEnabled) {
      const obj = GameServerActionCreators;
      const gameServerCatalog = obj.fetchGameServerCatalog(closure_0);
    }
  }, items);
  const items1 = [arg0];
  const effect1 = react.useEffect(() => {
    const obj = GuildPowerupsActionCreators;
    const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(closure_0);
    const obj2 = GuildPowerupsActionCreators;
    const guildBoostEntitlements = obj2.fetchGuildBoostEntitlements(closure_0);
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useLoadGuildPowerups.tsx");

export default tmp2;