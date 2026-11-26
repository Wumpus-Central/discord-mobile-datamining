// === Module 16633: useFetchOrbsArcadeGames ===

// Module 16633 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16635 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default function useFetchOrbsArcadeGames(location) {
  const OrbsArcadeExperiment = enabled(16634).OrbsArcadeExperiment;
  enabled = OrbsArcadeExperiment.useConfig({ location }).enabled;
  items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const orbsArcadeGamesIfStale = OrbsArcadeActionCreators.fetchOrbsArcadeGamesIfStale();
    }
  }, items);
  return enabled;
};