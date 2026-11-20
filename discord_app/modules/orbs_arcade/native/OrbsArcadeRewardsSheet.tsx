// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain.tsx";
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4794);
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
  const stateFromStores1 = gameId(504).useStateFromStores(
    items2,
    () => OrbsArcadeStore.getGameStateForGame(gameId),
    items3,
  );
  const obj2 = gameId(504);
  const items4 = [OrbsArcadeStore];
  const items5 = [gameId];
  const stateFromStores2 = gameId(504).useStateFromStores(
    items4,
    () => OrbsArcadeStore.getAllTimeHighScore(gameId),
    items5,
  );
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1112).intl;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj4 = { title: null, subtitle: null };
    const obj5 = { gameName: str };
    obj4.title = intl.formatToPlainString(tmp(1112).t["3CJfUa"], obj5);
    let formatToPlainStringResult;
    if (0 !== stateFromStores2) {
      const intl2 = tmp(1112).intl;
      const obj6 = { score: stateFromStores2 };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1112).t.bzMn46, obj6);
    }
    const obj7 = { header: null, children: null };
    obj4.subtitle = formatToPlainStringResult;
    obj7.header = closure_4(tmp(7395).BottomSheetTitleHeader, obj4);
    const obj8 = { game: stateFromStores, gameState: stateFromStores1 };
    const items6 = [closure_4(OrbsArcadeRewardChainDefault, obj8)];
    let obj9 = {
      game: stateFromStores,
      sheetKey: "OrbsArcadeRewardsSheet",
      location: tmp(16310).OrbsArcadeCtaLocation.REWARDS_SHEET,
      surface: gameId.surface,
      primaryAction: null,
      secondaryAction: null,
      style: null,
    };
    const tmp10 = OrbsArcadeSheetActionsDefault;
    const result = tmp(16301).hasOrbsArcadeUnclaimedRewards(stateFromStores1);
    const OrbsArcadeSheetPrimaryAction = tmp(16320).OrbsArcadeSheetPrimaryAction;
    obj9.primaryAction = result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY;
    const tmpResult = tmp(16301);
    const result1 = tmp(16301).hasOrbsArcadeUnlockedRewards(stateFromStores1);
    let OrbsArcadeSheetSecondaryAction = tmp(16320).OrbsArcadeSheetSecondaryAction;
    const obj10 = { spacing: 0, children: null };
    obj9.secondaryAction = result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
    actionsContainer = actionsContainer.actionsContainer;
    obj9.style = actionsContainer;
    obj9 = closure_4(tmp10, obj9);
    items6[1] = obj9;
    obj10.children = items6;
    OrbsArcadeSheetSecondaryAction = closure_5(tmp(5810).Stack, obj10);
    obj7.children = OrbsArcadeSheetSecondaryAction;
    closure_4(tmp(7433).ActionSheet, obj7);
    const tmpResult2 = tmp(16301);
  }
  const obj3 = gameId(504);
}
