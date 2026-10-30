// discord_app/modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const OrbsArcadeSheetPrimaryAction = { PLAY: "PLAY", CLAIM: "CLAIM" };
let obj2 = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default function OrbsArcadeSheetActions(secondaryAction) {
  ({ game, primaryAction } = secondaryAction);
  if (primaryAction === undefined) {
    primaryAction = obj.PLAY;
  }
  secondaryAction = secondaryAction.secondaryAction;
  const sheetKey = secondaryAction.sheetKey;
  ({ direction, style } = secondaryAction);
  if (obj2.CLOSE === secondaryAction) {
    obj2 = { text: null, onPress: null };
    const intl2 = game(1114).intl;
    obj2.text = intl2.string(game(1114).t.cpT0Cq);
    obj2.onPress = function onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
    };
    let tmp6 = obj2;
  } else if (tmp2.HOW_TO_PLAY === secondaryAction) {
    let tmp3 = null;
    if (null != game.instructions) {
      tmp3 = null;
      if ("" !== game.instructions) {
        obj = { text: null, onPress: null };
        const intl = game(1114).intl;
        obj.text = intl.string(game(1114).t["uz4M/z"]);
        obj.onPress = function onPress() {
          return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
        };
        tmp3 = obj;
      }
    }
    tmp6 = tmp3;
  }
  const obj3 = { direction, size: "lg", style, children: null };
  if (primaryAction === obj.CLAIM) {
    const obj4 = { game, size: "lg" };
    let tmp13 = closure_3(sheetKey(16975), obj4);
  } else {
    tmp13 = null;
    if (primaryAction === tmp12.PLAY) {
      const obj5 = { game, size: "lg" };
      tmp13 = closure_3(sheetKey(16978), obj5);
    }
  }
  const items = [tmp13];
  let tmp18 = null;
  if (null != tmp6) {
    ({ text: obj6.text, onPress: obj6.onPress } = tmp6);
    tmp18 = closure_3(game(5629).Button, { grow: true, size: "lg", variant: "secondary", text: null, onPress: null });
    const obj11 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
  }
  items[1] = tmp18;
  obj3.children = items;
  return closure_4(game(6761).ButtonGroup, obj3);
}
export { OrbsArcadeSheetPrimaryAction };
export const OrbsArcadeSheetSecondaryAction = obj2;
