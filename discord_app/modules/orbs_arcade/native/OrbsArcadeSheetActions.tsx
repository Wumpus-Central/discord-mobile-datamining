// === Module 16409: OrbsArcadeSheetActions ===

// Module 16409 (OrbsArcadeSheetActions)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16406 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const OrbsArcadeSheetPrimaryAction = { PLAY: "PLAY", CLAIM: "CLAIM" };
let obj2 = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeSheetActions(arg0) {
  const obj = game(576);
  const cResult = obj.c(14);
  ({ game, sheetKey, primaryAction, secondaryAction, direction, style } = arg0);
  if (undefined === primaryAction) {
    primaryAction = obj.PLAY;
  }
  if (cResult[0] === game) {
    if (cResult[1] === secondaryAction) {
      if (cResult[2] === sheetKey) {
        if (cResult[4] === game) {
          if (cResult[5] === primaryAction) {
            if (cResult[7] !== tmp5) {
              let tmp18 = null;
              if (null != tmp5) {
                obj2 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
                ({ text: obj6.text, onPress: obj6.onPress } = tmp5);
                tmp18 = closure_3(game(5244).Button, obj2);
              }
              cResult[7] = tmp5;
              cResult[8] = tmp18;
              let tmp17 = tmp18;
            } else {
              tmp17 = cResult[8];
            }
            if (cResult[9] === direction) {
              if (cResult[10] === style) {
                if (cResult[11] === tmp9) {
                  if (cResult[12] === tmp17) {
                    let tmp20 = cResult[13];
                  }
                  return tmp20;
                }
              }
            }
            const obj3 = { direction, size: "lg", style, children: null };
            const items = [cResult[6], tmp17];
            obj3.children = items;
            const tmp22 = closure_4(game(6696).ButtonGroup, obj3);
            cResult[9] = direction;
            cResult[10] = style;
            cResult[11] = cResult[6];
            cResult[12] = tmp17;
            cResult[13] = tmp22;
            tmp20 = tmp22;
          }
        }
        if (primaryAction === obj.CLAIM) {
          const obj4 = { game, size: "lg" };
          let tmp11 = closure_3(sheetKey(16410), obj4);
        } else {
          tmp11 = null;
          if (primaryAction === tmp10.PLAY) {
            const obj5 = { game, size: "lg" };
            tmp11 = closure_3(sheetKey(16413), obj5);
          }
        }
        cResult[4] = game;
        cResult[5] = primaryAction;
        cResult[6] = tmp11;
      }
    }
  }
  if (obj2.CLOSE === secondaryAction) {
    const obj7 = { text: null, onPress: null };
    const intl2 = game(1128).intl;
    obj7.text = intl2.string(game(1128).t.cpT0Cq);
    obj7.onPress = function onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
    };
    let tmp8 = obj7;
  } else if (tmp6.HOW_TO_PLAY === secondaryAction) {
    let tmp7 = null;
    if (null != game.instructions) {
      tmp7 = null;
      if ("" !== game.instructions) {
        const obj13 = { text: null, onPress: null };
        const intl = game(1128).intl;
        obj13.text = intl.string(game(1128).t["uz4M/z"]);
        obj13.onPress = function onPress() {
          return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
        };
        tmp7 = obj13;
      }
    }
    tmp8 = tmp7;
  }
  cResult[0] = game;
  cResult[1] = secondaryAction;
  cResult[2] = sheetKey;
  cResult[3] = tmp8;
}) : (function OrbsArcadeSheetActions(secondaryAction) {
  ({ game, primaryAction } = secondaryAction);
  if (primaryAction === undefined) {
    primaryAction = obj.PLAY;
  }
  secondaryAction = secondaryAction.secondaryAction;
  const sheetKey = secondaryAction.sheetKey;
  ({ direction, style } = secondaryAction);
  if (obj2.CLOSE === secondaryAction) {
    obj2 = { text: null, onPress: null };
    const intl2 = game(1128).intl;
    obj2.text = intl2.string(game(1128).t.cpT0Cq);
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
        const intl = game(1128).intl;
        obj.text = intl.string(game(1128).t["uz4M/z"]);
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
    let tmp13 = closure_3(sheetKey(16410), obj4);
  } else {
    tmp13 = null;
    if (primaryAction === tmp12.PLAY) {
      const obj5 = { game, size: "lg" };
      tmp13 = closure_3(sheetKey(16413), obj5);
    }
  }
  const items = [tmp13, ];
  let tmp18 = null;
  if (null != tmp6) {
    ({ text: obj6.text, onPress: obj6.onPress } = tmp6);
    tmp18 = closure_3(game(5244).Button, { grow: true, size: "lg", variant: "secondary", text: null, onPress: null });
    const obj11 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
  }
  items[1] = tmp18;
  obj3.children = items;
  return closure_4(game(6696).ButtonGroup, obj3);
});
export { OrbsArcadeSheetPrimaryAction };
export const OrbsArcadeSheetSecondaryAction = obj2;