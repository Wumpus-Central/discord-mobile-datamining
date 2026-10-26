// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import OrbsArcadeRewardUtils from "../utils/OrbsArcadeRewardUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const OrbsArcadeRewardUnlockedSheet = "OrbsArcadeRewardUnlockedSheet";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeRewardUnlockedSheet(gameId) {
      const cResult = gameId(576).c(35);
      gameId = gameId.gameId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [OrbsArcadeStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== gameId) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
        const items1 = [gameId];
        cResult[1] = gameId;
        cResult[2] = S;
        cResult[3] = items1;
        let tmp7 = items1;
      } else {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
        tmp7 = cResult[3];
      }
      const obj = gameId(576);
      const stateFromStores = gameId(504).useStateFromStores(first, S, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
        const items2 = [OrbsArcadeStore];
        cResult[4] = items2;
        const tmp9 = items2;
      } else {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
      }
      if (cResult[5] !== gameId) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
        const items3 = [gameId];
        cResult[5] = gameId;
        cResult[6] = tmp12;
        cResult[7] = items3;
        let tmp11 = items3;
      } else {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
        tmp11 = cResult[7];
      }
      const tmpResult = gameId(504);
      const stateFromStores1 = gameId(504).useStateFromStores(tmp9, tmp12, tmp11);
      if (stateFromStores != null) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
      }
      if (cResult[8] === undefined) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
        if (null == stateFromStores) {
          class S {
            constructor() {
              return closure_4.getGame(gameId);
            }
          }
        } else {
          class S {
            constructor() {
              return closure_4.getGame(gameId);
            }
          }
          const orbsArcadeClaimableRewards = tmp(16400).getOrbsArcadeClaimableRewards(
            stateFromStores.rewards,
            stateFromStores1,
          );
          cResult[11] = stateFromStores.rewards;
          cResult[12] = stateFromStores1;
          cResult[13] = orbsArcadeClaimableRewards;
          const tmpResult4 = tmp(16400);
        }
      }
      let everyResult;
      if (stateFromStores != null) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
        everyResult = obj4.every((id) => {
          const orbsArcadeRewardStatus = OrbsArcadeRewardUtils.getOrbsArcadeRewardStatus(id.id, stateFromStores1);
          return orbsArcadeRewardStatus !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
        });
      }
      if (everyResult == null) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
      }
      if (stateFromStores != null) {
        class S {
          constructor() {
            return closure_4.getGame(gameId);
          }
        }
      }
      cResult[8] = undefined;
      cResult[9] = stateFromStores1;
      cResult[10] = everyResult;
      const tmpResult3 = gameId(504);
    }
  : function OrbsArcadeRewardUnlockedSheet(gameId) {
      gameId = gameId.gameId;
      let stateFromStores1;
      const items = [OrbsArcadeStore];
      const items1 = [gameId];
      const stateFromStores = gameId(stateFromStores1[5]).useStateFromStores(
        items,
        () => OrbsArcadeStore.getGame(gameId),
        items1,
      );
      const obj = gameId(stateFromStores1[5]);
      const items2 = [OrbsArcadeStore];
      const items3 = [gameId];
      stateFromStores1 = gameId(stateFromStores1[5]).useStateFromStores(
        items2,
        () => OrbsArcadeStore.getGameStateForGame(gameId),
        items3,
      );
      let rewards;
      if (stateFromStores != null) {
        rewards = stateFromStores.rewards;
      }
      const items4 = [rewards, stateFromStores1];
      const memo = noop.useMemo(() => {
        let flag;
        if (stateFromStores != null) {
          const rewards = stateFromStores.rewards;
          flag = rewards.every((id) => {
            const orbsArcadeRewardStatus = gameId(stateFromStores1[6]).getOrbsArcadeRewardStatus(id.id, closure_1_2);
            return orbsArcadeRewardStatus !== gameId(stateFromStores1[7]).OrbsArcadeRewardStatus.LOCKED;
          });
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }, items4);
      if (null == stateFromStores) {
        return null;
      } else {
        const length = tmp(tmp2[6]).getOrbsArcadeClaimableRewards(stateFromStores.rewards, stateFromStores1).length;
        let str = stateFromStores.name;
        if (str == null) {
          str = "";
        }
        const obj3 = {
          gradientColor: "blue",
          illustration: closure_5(tmp(tmp2[8]).GameTrophySpotIllustration, { scale: 0.5 }),
          title: null,
          description: null,
          actions: null,
        };
        const intl = tmp(tmp2[9]).intl;
        if (memo) {
          let v2ld2SU = tmp(tmp2[9]).t["2ld2SU"];
        } else if (length > 1) {
          v2ld2SU = tmp(tmp2[9]).t.NmSe9v;
        } else {
          v2ld2SU = tmp(tmp2[9]).t["/xryus"];
        }
        obj3.title = intl.string(v2ld2SU);
        const intl2 = tmp(tmp2[9]).intl;
        const t = tmp(tmp2[9]).t;
        const obj4 = { gameName: str };
        obj3.description = intl2.formatToPlainString(memo ? t["x+5mCs"] : t.xUeO0j, obj4);
        const obj5 = { spacing: stateFromStores(tmp2[13]).space.PX_24, children: null };
        const obj6 = {
          game: stateFromStores,
          gameState: stateFromStores1,
          grantAnimatedOnOpenRewardIds: gameId.unlockedRewardIds,
        };
        const items5 = [closure_5(stateFromStores(tmp2[10]), obj6)];
        const obj7 = {
          game: stateFromStores,
          sheetKey: OrbsArcadeRewardUnlockedSheet,
          primaryAction: null,
          secondaryAction: null,
        };
        let CLAIM = null;
        const tmpResult = tmp(tmp2[6]);
        if (length > 0) {
          CLAIM = tmp(tmp2[11]).OrbsArcadeSheetPrimaryAction.CLAIM;
        }
        obj7.primaryAction = CLAIM;
        obj7.secondaryAction = tmp(tmp2[11]).OrbsArcadeSheetSecondaryAction.CLOSE;
        items5[1] = closure_5(stateFromStores(tmp2[11]), obj7);
        obj5.children = items5;
        obj3.actions = closure_6(tmp(tmp2[12]).Stack, obj5);
        return closure_5(tmp(tmp2[14]).PromoSheet, obj3);
      }
      const obj2 = gameId(stateFromStores1[5]);
    };
