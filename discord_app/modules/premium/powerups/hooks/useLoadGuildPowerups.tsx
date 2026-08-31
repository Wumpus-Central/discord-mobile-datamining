// === Module 12012: useLoadGuildPowerups ===

// Module 12012 (useLoadGuildPowerups)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useLoadGuildPowerups.tsx");

export default function useLoadGuildPowerups(guildId) {
  const _require = guildId;
  gameServerEnabled = _require(gameServerEnabled[1]).useGameServerEnabled(guildId, "useLoadGuildPowerups");
  const items = [guildId, gameServerEnabled];
  const effect = React.useEffect(() => {
    if (gameServerEnabled) {
      const gameServerCatalog = guildId(gameServerEnabled[2]).fetchGameServerCatalog(guildId);
      const obj = guildId(gameServerEnabled[2]);
    }
  }, items);
  const items1 = [guildId];
  const effect1 = React.useEffect(() => {
    const powerupCatalogForGuild = guildId(gameServerEnabled[3]).fetchPowerupCatalogForGuild(guildId);
    const obj = guildId(gameServerEnabled[3]);
    const guildBoostEntitlements = guildId(gameServerEnabled[3]).fetchGuildBoostEntitlements(guildId);
  }, items1);
};