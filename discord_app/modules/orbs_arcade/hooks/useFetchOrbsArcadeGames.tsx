// === Module 17170: useFetchOrbsArcadeGames ===

// Module 17170 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 17172 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default function useFetchOrbsArcadeGames(location) {
  const OrbsArcadeExperiment = enabled(17171).OrbsArcadeExperiment;
  enabled = OrbsArcadeExperiment.useConfig({ location }).enabled;
  items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const orbsArcadeGamesIfStale = OrbsArcadeActionCreators.fetchOrbsArcadeGamesIfStale();
    }
  }, items);
  return enabled;
};