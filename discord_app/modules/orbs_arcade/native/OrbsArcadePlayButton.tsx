// discord_app/modules/orbs_arcade/native/OrbsArcadePlayButton.tsx
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadePlayButton(game) {
      const cResult = game(576).c(23);
      game = game.game;
      const size = game.size;
      analyticsLocations = analyticsLocations(7313)().analyticsLocations;
      const obj = game(576);
      ({ text, isPaidPlay } = analyticsLocations(16925)(game));
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [OrbsArcadeStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== game.id) {
        const fn = function l() {
          return OrbsArcadeStore.getGameStateForGame(game.id);
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
      const tmp5 = analyticsLocations(16925)(game);
      const stateFromStores = game(504).useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [OrbsArcadeStore];
        cResult[4] = items2;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== game.id) {
        class T {
          constructor() {
            return closure_4.isLaunchingGame(game.id);
          }
        }
        const items3 = [game.id];
        cResult[5] = game.id;
        cResult[6] = T;
        cResult[7] = items3;
        let tmp14 = items3;
      } else {
        class T {
          constructor() {
            return closure_4.isLaunchingGame(game.id);
          }
        }
        tmp14 = cResult[7];
      }
      const tmpResult = game(504);
      const stateFromStores1 = game(504).useStateFromStores(tmp11, T, tmp14);
      if (cResult[8] === analyticsLocations) {
        class T {
          constructor() {
            return closure_4.isLaunchingGame(game.id);
          }
        }
        if (null != stateFromStores) {
          class T {
            constructor() {
              return closure_4.isLaunchingGame(game.id);
            }
          }
          if (obj4.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
            class T {
              constructor() {
                return closure_4.isLaunchingGame(game.id);
              }
            }
            const obj2 = { game, size };
            const tmp26 = jsx(tmp4(16921), { game, size });
            cResult[11] = game;
            cResult[12] = size;
            cResult[13] = tmp26;
          }
        }
        if (cResult[14] !== isPaidPlay) {
          class T {
            constructor() {
              return closure_4.isLaunchingGame(game.id);
            }
          }
          if (isPaidPlay) {
            class T {
              constructor() {
                return closure_4.isLaunchingGame(game.id);
              }
            }
            const obj3 = { size: "sm", color: tmp4(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
            const tmp19 = jsx(tmp(9491).OrbsIcon, { size: "sm", color: tmp4(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT });
          }
          cResult[14] = isPaidPlay;
          cResult[15] = tmp19;
        } else {
          class T {
            constructor() {
              return closure_4.isLaunchingGame(game.id);
            }
          }
        }
        if (cResult[16] === A) {
          class T {
            constructor() {
              return closure_4.isLaunchingGame(game.id);
            }
          }
        }
        const obj5 = {
          grow: true,
          size,
          variant: "primary",
          text,
          icon: tmp18,
          disabled: null == game.applicationId,
          loading: stateFromStores1,
          onPress: A,
        };
        const tmp23 = jsx(tmp(5281).Button, {
          grow: true,
          size,
          variant: "primary",
          text,
          icon: tmp18,
          disabled: null == game.applicationId,
          loading: stateFromStores1,
          onPress: A,
        });
        cResult[16] = A;
        cResult[17] = stateFromStores1;
        cResult[18] = size;
        cResult[19] = tmp18;
        cResult[20] = null == game.applicationId;
        cResult[21] = text;
        cResult[22] = tmp23;
      }
      class A {
        constructor() {
          return closure_1(closure_2[8])(game, analyticsLocations);
        }
      }
      cResult[8] = analyticsLocations;
      cResult[9] = game;
      cResult[10] = A;
      const tmpResult2 = game(504);
    }
  : function OrbsArcadePlayButton(game) {
      game = game.game;
      const size = game.size;
      let analyticsLocations;
      analyticsLocations = analyticsLocations(7313)().analyticsLocations;
      ({ text, isPaidPlay } = analyticsLocations(16925)(game));
      const tmp3 = analyticsLocations(16925)(game);
      const items = [OrbsArcadeStore];
      const items1 = [game.id];
      const stateFromStores = game(504).useStateFromStores(
        items,
        () => OrbsArcadeStore.getGameStateForGame(game.id),
        items1,
      );
      const obj = game(504);
      const items2 = [OrbsArcadeStore];
      const items3 = [game.id];
      const items4 = [game, analyticsLocations];
      const stateFromStores1 = game(504).useStateFromStores(
        items2,
        () => OrbsArcadeStore.isLaunchingGame(game.id),
        items3,
      );
      const callback = noop.useCallback(() => launchOrbsArcadeGameDefault(game, analyticsLocations), items4);
      if (null != stateFromStores) {
        if (tmp4Result.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
          const obj3 = { game, size };
          let tmp8Result2 = jsx(tmp(16921), { game, size });
        }
        return tmp8Result2;
      }
      const obj4 = {
        grow: true,
        size,
        variant: "primary",
        text,
        icon: null,
        disabled: null,
        loading: null,
        onPress: null,
      };
      let tmp8Result;
      if (isPaidPlay) {
        const obj5 = { size: "sm", color: tmp(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
        tmp8Result = jsx(tmp4(9491).OrbsIcon, { size: "sm", color: tmp(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT });
      }
      obj4.icon = tmp8Result;
      obj4.disabled = null == game.applicationId;
      obj4.loading = stateFromStores1;
      obj4.onPress = callback;
      tmp8Result2 = jsx(tmp4(5281).Button, {
        grow: true,
        size,
        variant: "primary",
        text,
        icon: null,
        disabled: null,
        loading: null,
        onPress: null,
      });
      const obj2 = game(504);
    };
