// discord_app/modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx
import OrbsArcadeActionCreators from "../OrbsArcadeActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default function useFetchOrbsArcadeGames(location) {
  const OrbsArcadeExperiment = enabled(17015).OrbsArcadeExperiment;
  enabled = OrbsArcadeExperiment.useConfig({ location }).enabled;
  const items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const orbsArcadeGamesIfStale = OrbsArcadeActionCreators.fetchOrbsArcadeGamesIfStale();
    }
  }, items);
  return enabled;
}
