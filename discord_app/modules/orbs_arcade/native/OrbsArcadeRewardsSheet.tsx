// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions.tsx";
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const OrbsArcadeRewardsSheet = "OrbsArcadeRewardsSheet";
const createStyles = fn(4969);
let obj2 = { actionsContainer: { paddingVertical: 0, paddingTop: nativeDefault.space.PX_24 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: 0, paddingTop: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeRewardsSheet(gameId) {
      const cResult = gameId(576).c(28);
      gameId = gameId.gameId;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [OrbsArcadeStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== gameId) {
        const fn = function h() {
          return OrbsArcadeStore.getGame(gameId);
        };
        const items1 = [gameId];
        cResult[1] = gameId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = gameId(576);
      const stateFromStores = gameId(504).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [OrbsArcadeStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== gameId) {
        const fn2 = function y() {
          return OrbsArcadeStore.getGameStateForGame(gameId);
        };
        const items3 = [gameId];
        cResult[5] = gameId;
        cResult[6] = fn2;
        cResult[7] = items3;
        let tmp13 = items3;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult = gameId(504);
      const stateFromStores1 = gameId(504).useStateFromStores(tmp10, tmp12, tmp13);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[8] !== stateFromStores.name) {
          const intl = tmp(1128).intl;
          let str = stateFromStores.name;
          if (str == null) {
            str = "";
          }
          const obj2 = { gameName: str };
          const formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t["3CJfUa"], obj2);
          cResult[8] = stateFromStores.name;
          cResult[9] = formatToPlainStringResult;
          let tmp15 = formatToPlainStringResult;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] !== stateFromStores1) {
          let enrolledAt;
          if (stateFromStores1 != null) {
            enrolledAt = stateFromStores1.enrolledAt;
          }
          let formatToPlainStringResult1;
          if (null != enrolledAt) {
            const intl2 = tmp(1128).intl;
            const obj3 = { score: stateFromStores1.enrollmentHighScore };
            formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1128).t.bzMn46, obj3);
          }
          cResult[10] = stateFromStores1;
          cResult[11] = formatToPlainStringResult1;
          let tmp17 = formatToPlainStringResult1;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] === tmp15) {
          if (cResult[13] === tmp17) {
            let tmp20 = cResult[14];
          }
          if (cResult[15] === stateFromStores) {
            if (cResult[16] === stateFromStores1) {
              let tmp23 = cResult[17];
            }
            const result = tmp(16322).hasOrbsArcadeUnlockedRewards(stateFromStores1);
            const OrbsArcadeSheetSecondaryAction = tmp(16335).OrbsArcadeSheetSecondaryAction;
            const tmp28 = result ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
            if (cResult[18] === stateFromStores) {
              if (cResult[19] === tmp4.actionsContainer) {
                if (cResult[20] === tmp28) {
                  let tmp29 = cResult[21];
                }
                if (cResult[22] === tmp23) {
                  if (cResult[23] === tmp29) {
                    let tmp34 = cResult[24];
                  }
                  if (cResult[25] === tmp34) {
                    if (cResult[26] === tmp20) {
                      let tmp37 = cResult[27];
                    }
                    return tmp37;
                  }
                  const obj4 = { header: tmp20, children: tmp34 };
                  const tmp39 = closure_4(tmp(7283).ActionSheet, obj4);
                  cResult[25] = tmp34;
                  cResult[26] = tmp20;
                  cResult[27] = tmp39;
                  tmp37 = tmp39;
                }
                const obj5 = { spacing: 0, children: null };
                const items4 = [tmp23, tmp29];
                obj5.children = items4;
                const tmp36 = closure_5(tmp(5963).Stack, obj5);
                cResult[22] = tmp23;
                cResult[23] = tmp29;
                cResult[24] = tmp36;
                tmp34 = tmp36;
              }
            }
            const obj6 = {
              game: stateFromStores,
              sheetKey: OrbsArcadeRewardsSheet,
              secondaryAction: tmp28,
              style: tmp4.actionsContainer,
            };
            const tmp33 = closure_4(OrbsArcadeSheetActionsDefault, obj6);
            cResult[18] = stateFromStores;
            cResult[19] = tmp4.actionsContainer;
            cResult[20] = tmp28;
            cResult[21] = tmp33;
            tmp29 = tmp33;
            const tmpResult4 = tmp(16322);
          }
          const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
          const tmp26 = closure_4(OrbsArcadeRewardChainDefault, obj7);
          cResult[15] = stateFromStores;
          cResult[16] = stateFromStores1;
          cResult[17] = tmp26;
          tmp23 = tmp26;
        }
        const obj8 = { title: tmp15, subtitle: tmp17 };
        const tmp22 = closure_4(tmp(7233).BottomSheetTitleHeader, obj8);
        cResult[12] = tmp15;
        cResult[13] = tmp17;
        cResult[14] = tmp22;
        tmp20 = tmp22;
      }
      const tmpResult3 = gameId(504);
    }
  : function OrbsArcadeRewardsSheet(gameId) {
      gameId = gameId.gameId;
      let actionsContainer = closure_7();
      const items = [OrbsArcadeStore];
      const items1 = [gameId];
      const stateFromStores = gameId(504).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
      const obj = gameId(504);
      const items2 = [OrbsArcadeStore];
      const items3 = [gameId];
      const stateFromStores1 = gameId(504).useStateFromStores(
        items2,
        () => OrbsArcadeStore.getGameStateForGame(gameId),
        items3,
      );
      if (null == stateFromStores) {
        return null;
      } else {
        const intl = tmp(1128).intl;
        let str = stateFromStores.name;
        if (str == null) {
          str = "";
        }
        const obj3 = { title: null, subtitle: null };
        const obj4 = { gameName: str };
        obj3.title = intl.formatToPlainString(tmp(1128).t["3CJfUa"], obj4);
        let enrolledAt;
        if (stateFromStores1 != null) {
          enrolledAt = stateFromStores1.enrolledAt;
        }
        let formatToPlainStringResult;
        if (null != enrolledAt) {
          const intl2 = tmp(1128).intl;
          const obj5 = { score: stateFromStores1.enrollmentHighScore };
          formatToPlainStringResult = intl2.formatToPlainString(tmp(1128).t.bzMn46, obj5);
        }
        const obj6 = { header: null, children: null };
        obj3.subtitle = formatToPlainStringResult;
        obj6.header = closure_4(tmp(7233).BottomSheetTitleHeader, obj3);
        const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
        const items4 = [closure_4(OrbsArcadeRewardChainDefault, obj7)];
        let obj8 = { game: stateFromStores, sheetKey: OrbsArcadeRewardsSheet, secondaryAction: null, style: null };
        const tmp10 = OrbsArcadeSheetActionsDefault;
        const result = tmp(16322).hasOrbsArcadeUnlockedRewards(stateFromStores1);
        let OrbsArcadeSheetSecondaryAction = tmp(16335).OrbsArcadeSheetSecondaryAction;
        const obj9 = { spacing: 0, children: null };
        obj8.secondaryAction = result
          ? OrbsArcadeSheetSecondaryAction.CLOSE
          : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
        actionsContainer = actionsContainer.actionsContainer;
        obj8.style = actionsContainer;
        obj8 = closure_4(tmp10, obj8);
        items4[1] = obj8;
        obj9.children = items4;
        OrbsArcadeSheetSecondaryAction = closure_5(tmp(5963).Stack, obj9);
        obj6.children = OrbsArcadeSheetSecondaryAction;
        closure_4(tmp(7283).ActionSheet, obj6);
        const tmpResult = tmp(16322);
      }
      const obj2 = gameId(504);
    };
