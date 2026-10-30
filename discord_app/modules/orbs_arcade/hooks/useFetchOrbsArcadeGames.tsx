// === Module 16958: useFetchOrbsArcadeGames ===

// Module 16958 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16960 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default function useFetchOrbsArcadeGames(location) {
  const OrbsArcadeExperiment = enabled(16959).OrbsArcadeExperiment;
  enabled = OrbsArcadeExperiment.useConfig({ location }).enabled;
  const items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const orbsArcadeGamesIfStale = OrbsArcadeActionCreators.fetchOrbsArcadeGamesIfStale();
    }
  }, items);
  return enabled;
};