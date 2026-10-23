// === Module 16386: OrbsArcadePlayButton ===

// Module 16386 (OrbsArcadePlayButton)
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame" /* 16388 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16366 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadePlayButton(game) {
  const cResult = game(576).c(16);
  game = game.game;
  const size = game.size;
  analyticsLocations = analyticsLocations(7251)().analyticsLocations;
  const obj = game(576);
  const tmp4 = analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16387)(game));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function l() {
      return OrbsArcadeStore.isLaunchingGame(game.id);
    };
    const items1 = [game.id];
    cResult[1] = game.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmp5 = analyticsLocations(16387)(game);
  const stateFromStores = game(504).useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === game) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] !== isPaidPlay) {
      let tmp13;
      if (isPaidPlay) {
        const obj2 = { size: "sm", color: tmp4(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
        tmp13 = jsx(tmp(9428).OrbsIcon, { size: "sm", color: tmp4(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT });
      }
      cResult[7] = isPaidPlay;
      cResult[8] = tmp13;
      let tmp12 = tmp13;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === size) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp16) {
              if (cResult[14] === text) {
                let tmp17 = cResult[15];
              }
              return tmp17;
            }
          }
        }
      }
    }
    const obj3 = { grow: true, size, variant: "primary", text, icon: tmp12, disabled: null == game.applicationId, loading: stateFromStores, onPress: tmp11 };
    const tmp19 = jsx(tmp(5242).Button, { grow: true, size, variant: "primary", text, icon: tmp12, disabled: null == game.applicationId, loading: stateFromStores, onPress: tmp11 });
    cResult[9] = tmp11;
    cResult[10] = stateFromStores;
    cResult[11] = size;
    cResult[12] = tmp12;
    cResult[13] = null == game.applicationId;
    cResult[14] = text;
    cResult[15] = tmp19;
    tmp17 = tmp19;
  }
  const fn2 = function p() {
    return launchOrbsArcadeGameDefault(game, analyticsLocations);
  };
  cResult[4] = analyticsLocations;
  cResult[5] = game;
  cResult[6] = fn2;
  tmp11 = fn2;
  const tmpResult = game(504);
}) : (function OrbsArcadePlayButton(game) {
  game = game.game;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7251)().analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16387)(game));
  const tmp = analyticsLocations;
  const tmp3 = analyticsLocations(16387)(game);
  const tmp4 = game;
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const items2 = [game, analyticsLocations];
  const stateFromStores = game(504).useStateFromStores(items, () => OrbsArcadeStore.isLaunchingGame(game.id), items1);
  const callback = noop.useCallback(() => launchOrbsArcadeGameDefault(game, analyticsLocations), items2);
  const obj2 = { grow: true, size: game.size, variant: "primary", text, icon: null, disabled: null, loading: null, onPress: null };
  let tmp7Result;
  if (isPaidPlay) {
    const obj3 = { size: "sm", color: tmp(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    tmp7Result = jsx(tmp4(9428).OrbsIcon, { size: "sm", color: tmp(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  }
  obj2.icon = tmp7Result;
  obj2.disabled = null == game.applicationId;
  obj2.loading = stateFromStores;
  obj2.onPress = callback;
  return jsx(game(5242).Button, { grow: true, size: game.size, variant: "primary", text, icon: null, disabled: null, loading: null, onPress: null });
});