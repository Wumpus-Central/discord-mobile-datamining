// discord_app/modules/premium/powerups/hooks/useLoadGuildPowerups.tsx
import GameServerActionCreators from "../../../game_server/GameServerActionCreators.tsx";
import GuildPowerupsActionCreators from "../GuildPowerupsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useLoadGuildPowerups.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(7);
      let obj = require("c");
      gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "useLoadGuildPowerups");
      if (cResult[0] === gameServerEnabled) {
        if (cResult[1] === arg0) {
          let tmp3 = cResult[2];
          let tmp4 = cResult[3];
        }
        const effect = noop.useEffect(tmp3, tmp4);
        if (cResult[4] !== arg0) {
          const fn2 = function l() {
            const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(closure_0);
            const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(closure_0);
          };
          const items = [arg0];
          cResult[4] = arg0;
          cResult[5] = fn2;
          cResult[6] = items;
          let tmp7 = items;
          let tmp6 = fn2;
        } else {
          tmp6 = cResult[5];
          tmp7 = cResult[6];
        }
        const effect1 = noop.useEffect(tmp6, tmp7);
      }
      const fn = function o() {
        if (gameServerEnabled) {
          const gameServerCatalog = GameServerActionCreators.fetchGameServerCatalog(closure_0);
        }
      };
      const items1 = [arg0, gameServerEnabled];
      cResult[0] = gameServerEnabled;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp4 = items1;
      tmp3 = fn;
      const obj2 = require("GameServerExperiment");
    }
  : (arg0) => {
      _require = arg0;
      gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "useLoadGuildPowerups");
      const items = [arg0, gameServerEnabled];
      const effect = noop.useEffect(() => {
        if (gameServerEnabled) {
          const gameServerCatalog = GameServerActionCreators.fetchGameServerCatalog(closure_0);
        }
      }, items);
      const items1 = [arg0];
      const effect1 = noop.useEffect(() => {
        const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(closure_0);
        const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(closure_0);
      }, items1);
    };
