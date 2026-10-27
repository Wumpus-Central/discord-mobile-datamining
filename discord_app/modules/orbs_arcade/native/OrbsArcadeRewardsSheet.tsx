// === Module 16460: OrbsArcadeRewardsSheet ===

// Module 16460 (OrbsArcadeRewardsSheet)
import nativeDefault from "native" /* 587 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16453 */;
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain" /* 16461 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16434 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const OrbsArcadeRewardsSheet = "OrbsArcadeRewardsSheet";
const createStyles = fn(4972);
let obj2 = { actionsContainer: { paddingVertical: 0, paddingTop: nativeDefault.space.PX_24 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: 0, paddingTop: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardsSheet(gameId) {
  const cResult = gameId(576).c(29);
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
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    const items1 = [gameId];
    cResult[1] = gameId;
    cResult[2] = A;
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    tmp8 = cResult[3];
  }
  const obj = gameId(576);
  const stateFromStores = gameId(504).useStateFromStores(first, A, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    const items2 = [OrbsArcadeStore];
    cResult[4] = items2;
    const tmp10 = items2;
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
  }
  if (cResult[5] !== gameId) {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    const items3 = [gameId];
    cResult[5] = gameId;
    cResult[6] = tmp13;
    cResult[7] = items3;
    let tmp12 = items3;
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    tmp12 = cResult[7];
  }
  const tmpResult = gameId(504);
  const stateFromStores1 = gameId(504).useStateFromStores(tmp10, tmp13, tmp12);
  if (null == stateFromStores) {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    if (cResult[10] !== stateFromStores1) {
      class A {
        constructor() {
          return closure_3.getGame(gameId);
        }
      }
      if (stateFromStores1 != null) {
        class A {
          constructor() {
            return closure_3.getGame(gameId);
          }
        }
      }
      let formatToPlainStringResult;
      if (null != tmp17) {
        class A {
          constructor() {
            return closure_3.getGame(gameId);
          }
        }
        const obj2 = { score: stateFromStores1.enrollmentHighScore };
        formatToPlainStringResult = obj4.formatToPlainString(tmp(1125).t.bzMn46, obj2);
      }
      cResult[10] = stateFromStores1;
      cResult[11] = formatToPlainStringResult;
    } else {
      class A {
        constructor() {
          return closure_3.getGame(gameId);
        }
      }
    }
    if (cResult[12] === tmp15) {
      class A {
        constructor() {
          return closure_3.getGame(gameId);
        }
      }
      if (cResult[15] === stateFromStores) {
        class A {
          constructor() {
            return closure_3.getGame(gameId);
          }
        }
        const result = tmp(16440).hasOrbsArcadeUnclaimedRewards(stateFromStores1);
        const OrbsArcadeSheetPrimaryAction = tmp(16453).OrbsArcadeSheetPrimaryAction;
        const tmp27 = result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY;
        const tmpResult5 = tmp(16440);
        const result1 = tmp(16440).hasOrbsArcadeUnlockedRewards(stateFromStores1);
        const OrbsArcadeSheetSecondaryAction = tmp(16453).OrbsArcadeSheetSecondaryAction;
        const tmp29 = result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
        if (cResult[18] === stateFromStores) {
          class A {
            constructor() {
              return closure_3.getGame(gameId);
            }
          }
        }
        const obj3 = { game: stateFromStores, sheetKey: OrbsArcadeRewardsSheet, primaryAction: tmp27, secondaryAction: tmp29, style: tmp4.actionsContainer };
        const tmp34 = closure_4(OrbsArcadeSheetActionsDefault, obj3);
        cResult[18] = stateFromStores;
        cResult[19] = tmp4.actionsContainer;
        cResult[20] = tmp27;
        cResult[21] = tmp29;
        cResult[22] = tmp34;
        const tmpResult6 = tmp(16440);
      }
      const obj5 = { game: stateFromStores, gameState: stateFromStores1 };
      const tmp25 = closure_4(OrbsArcadeRewardChainDefault, obj5);
      cResult[15] = stateFromStores;
      cResult[16] = stateFromStores1;
      cResult[17] = tmp25;
    }
    const obj6 = { title: tmp15, subtitle: tmp16 };
    const tmp21 = closure_4(tmp(7250).BottomSheetTitleHeader, obj6);
    cResult[12] = tmp15;
    cResult[13] = tmp16;
    cResult[14] = tmp21;
  }
  const tmpResult4 = gameId(504);
}) : (function OrbsArcadeRewardsSheet(gameId) {
  gameId = gameId.gameId;
  let actionsContainer = closure_7();
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = gameId(504).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const obj = gameId(504);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const stateFromStores1 = gameId(504).useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1125).intl;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj3 = { title: null, subtitle: null };
    const obj4 = { gameName: str };
    obj3.title = intl.formatToPlainString(tmp(1125).t["3CJfUa"], obj4);
    let currentRun;
    if (stateFromStores1 != null) {
      currentRun = stateFromStores1.currentRun;
    }
    let formatToPlainStringResult;
    if (null != currentRun) {
      const intl2 = tmp(1125).intl;
      const obj5 = { score: stateFromStores1.enrollmentHighScore };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1125).t.bzMn46, obj5);
    }
    const obj6 = { header: null, children: null };
    obj3.subtitle = formatToPlainStringResult;
    obj6.header = closure_4(tmp(7250).BottomSheetTitleHeader, obj3);
    const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
    const items4 = [closure_4(OrbsArcadeRewardChainDefault, obj7), ];
    let obj8 = { game: stateFromStores, sheetKey: OrbsArcadeRewardsSheet, primaryAction: null, secondaryAction: null, style: null };
    const tmp10 = OrbsArcadeSheetActionsDefault;
    const result = tmp(16440).hasOrbsArcadeUnclaimedRewards(stateFromStores1);
    const OrbsArcadeSheetPrimaryAction = tmp(16453).OrbsArcadeSheetPrimaryAction;
    obj8.primaryAction = result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY;
    const tmpResult = tmp(16440);
    const result1 = tmp(16440).hasOrbsArcadeUnlockedRewards(stateFromStores1);
    let OrbsArcadeSheetSecondaryAction = tmp(16453).OrbsArcadeSheetSecondaryAction;
    const obj9 = { spacing: 0, children: null };
    obj8.secondaryAction = result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
    actionsContainer = actionsContainer.actionsContainer;
    obj8.style = actionsContainer;
    obj8 = closure_4(tmp10, obj8);
    items4[1] = obj8;
    obj9.children = items4;
    OrbsArcadeSheetSecondaryAction = closure_5(tmp(5978).Stack, obj9);
    obj6.children = OrbsArcadeSheetSecondaryAction;
    closure_4(tmp(7300).ActionSheet, obj6);
    const tmpResult2 = tmp(16440);
  }
  const obj2 = gameId(504);
});