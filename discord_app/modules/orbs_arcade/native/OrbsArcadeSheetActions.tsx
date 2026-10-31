// === Module 17031: OrbsArcadeSheetActions ===

// Module 17031 (OrbsArcadeSheetActions)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 17017 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 17028 */;
import OrbsArcadeClaimRewardButtonDefault from "OrbsArcadeClaimRewardButton" /* 17032 */;
import OrbsArcadePlayButtonDefault from "OrbsArcadePlayButton" /* 17035 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({ buttonGroup: { paddingVertical: 0 } });
let obj2 = { PLAY: "PLAY", CLAIM: "CLAIM" };
let obj3 = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default function OrbsArcadeSheetActions(game) {
  game = game.game;
  let PLAY = game.primaryAction;
  if (PLAY === undefined) {
    PLAY = obj2.PLAY;
  }
  const secondaryAction = game.secondaryAction;
  ({ direction, style } = game);
  closure_129_0 = game;
  const sheetKey = game.sheetKey;
  if (obj3.CLOSE === secondaryAction) {
    obj2 = { text: null, onPress: null };
    const intl2 = game(1113).intl;
    obj2.text = intl2.string(game(1113).t.cpT0Cq);
    obj2.onPress = function onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_1);
    };
    let tmp7 = obj2;
  } else if (tmp3.HOW_TO_PLAY === secondaryAction) {
    let tmp4 = null;
    if (null != game.instructions) {
      tmp4 = null;
      if ("" !== game.instructions) {
        let obj = { text: null, onPress: null };
        const intl = game(1113).intl;
        obj.text = intl.string(game(1113).t["uz4M/z"]);
        obj.onPress = function onPress() {
          return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
        };
        tmp4 = obj;
      }
    }
    tmp7 = tmp4;
  }
  obj3 = game(504);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
    let result = null != gameStateForGame;
    if (result) {
      result = OrbsArcadeRewardUtils.mustClaimOrbsArcadeRewardsToPlay(gameStateForGame);
    }
    return result;
  }, items1);
  const obj4 = { direction, size: "lg", style: null, children: null };
  const items2 = [closure_6().buttonGroup, style];
  obj4.style = items2;
  if (PLAY !== obj2.CLAIM) {
    if (PLAY === tmp15.PLAY) {
      const items3 = [tmp16, ];
      let tmp19 = null;
      if (null != tmp7) {
        ({ text: obj6.text, onPress: obj6.onPress } = tmp7);
        tmp19 = closure_4(tmp10(5634).Button, { grow: true, size: "lg", variant: "secondary", text: null, onPress: null });
        const obj5 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
      }
      items3[1] = tmp19;
      obj4.children = items3;
      return closure_5(tmp14, obj4);
    }
    tmp16 = null;
    if (PLAY === tmp15.PLAY) {
      const obj10 = { game, size: "lg" };
      tmp16 = closure_4(OrbsArcadePlayButtonDefault, obj10);
    }
  }
  tmp16 = closure_4(OrbsArcadeClaimRewardButtonDefault, { game, size: "lg" });
  tmp10 = game;
  const tmp2 = closure_6();
};
export const OrbsArcadeSheetPrimaryAction = obj2;
export const OrbsArcadeSheetSecondaryAction = obj3;