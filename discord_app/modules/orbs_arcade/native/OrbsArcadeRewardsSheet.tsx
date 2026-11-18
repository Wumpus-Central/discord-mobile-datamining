// === Module 16499: OrbsArcadeRewardsSheet ===

// Module 16499 (OrbsArcadeRewardsSheet)
import nativeDefault from "native" /* 575 */;
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain" /* 16500 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16507 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16487 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4823);
let obj2 = { actionsContainer: { paddingTop: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx");

export default function OrbsArcadeRewardsSheet(gameId) {
  gameId = gameId.gameId;
  let actionsContainer = closure_6();
  items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = gameId(504).useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const obj = gameId(504);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const stateFromStores1 = gameId(504).useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1113).intl;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj3 = { title: null, subtitle: null };
    const obj4 = { gameName: str };
    obj3.title = intl.formatToPlainString(tmp(1113).t["3CJfUa"], obj4);
    let allTimeHighScore;
    if (stateFromStores1 != null) {
      allTimeHighScore = stateFromStores1.allTimeHighScore;
    }
    let formatToPlainStringResult;
    if (null != allTimeHighScore) {
      let allTimeHighScore1;
      if (stateFromStores1 != null) {
        allTimeHighScore1 = stateFromStores1.allTimeHighScore;
      }
      if (0 !== allTimeHighScore1) {
        const intl2 = tmp(1113).intl;
        const obj5 = { score: stateFromStores1.allTimeHighScore };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t.bzMn46, obj5);
      }
    }
    const obj6 = { header: null, children: null };
    obj3.subtitle = formatToPlainStringResult;
    obj6.header = closure_4(tmp(7426).BottomSheetTitleHeader, obj3);
    const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
    const items4 = [closure_4(OrbsArcadeRewardChainDefault, obj7), ];
    let obj8 = { game: stateFromStores, sheetKey: "OrbsArcadeRewardsSheet", location: tmp(16497).OrbsArcadeCtaLocation.REWARDS_SHEET, surface: gameId.surface, primaryAction: null, secondaryAction: null, style: null };
    const tmp11 = OrbsArcadeSheetActionsDefault;
    const result = tmp(16494).hasOrbsArcadeUnclaimedRewards(stateFromStores1);
    const OrbsArcadeSheetPrimaryAction = tmp(16507).OrbsArcadeSheetPrimaryAction;
    obj8.primaryAction = result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY;
    const tmpResult = tmp(16494);
    const result1 = tmp(16494).hasOrbsArcadeUnlockedRewards(stateFromStores1);
    let OrbsArcadeSheetSecondaryAction = tmp(16507).OrbsArcadeSheetSecondaryAction;
    const obj9 = { spacing: 0, children: null };
    obj8.secondaryAction = result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
    actionsContainer = actionsContainer.actionsContainer;
    obj8.style = actionsContainer;
    obj8 = closure_4(tmp11, obj8);
    items4[1] = obj8;
    obj9.children = items4;
    OrbsArcadeSheetSecondaryAction = closure_5(tmp(5837).Stack, obj9);
    obj6.children = OrbsArcadeSheetSecondaryAction;
    closure_4(tmp(7464).ActionSheet, obj6);
    const tmpResult2 = tmp(16494);
  }
  const obj2 = gameId(504);
};