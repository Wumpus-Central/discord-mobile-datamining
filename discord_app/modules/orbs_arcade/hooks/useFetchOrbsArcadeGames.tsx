// === Module 16398: useFetchOrbsArcadeGames ===

// Module 16398 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16400 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchOrbsArcadeGames(location) {
  const cResult = enabled(576).c(5);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const OrbsArcadeExperiment = enabled(16399).OrbsArcadeExperiment;
  enabled = OrbsArcadeExperiment.useConfig(tmp4).enabled;
  if (cResult[2] !== enabled) {
    const fn = function o() {
      if (enabled) {
        const orbsArcadeGamesIfStale = OrbsArcadeActionCreators.fetchOrbsArcadeGamesIfStale();
      }
    };
    const items = [enabled];
    cResult[2] = enabled;
    cResult[3] = fn;
    cResult[4] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  return enabled;
}) : (function useFetchOrbsArcadeGames(location) {
  const OrbsArcadeExperiment = enabled(16399).OrbsArcadeExperiment;
  enabled = OrbsArcadeExperiment.useConfig({ location }).enabled;
  const items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const orbsArcadeGamesIfStale = OrbsArcadeActionCreators.fetchOrbsArcadeGamesIfStale();
    }
  }, items);
  return enabled;
});