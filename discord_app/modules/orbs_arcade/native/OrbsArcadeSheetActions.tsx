// discord_app/modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import OrbsArcadePlayButtonDefault from "OrbsArcadePlayButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const OrbsArcadeSheetSecondaryAction = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeSheetActions(arg0) {
      const obj = game(576);
      const cResult = obj.c(13);
      ({ game, sheetKey, secondaryAction, direction, style } = arg0);
      if (cResult[0] === game) {
        if (cResult[1] === secondaryAction) {
          if (cResult[2] === sheetKey) {
            if (cResult[4] !== game) {
              const obj2 = { game, size: "lg" };
              const tmp11 = closure_3(sheetKey(16336), obj2);
              cResult[4] = game;
              cResult[5] = tmp11;
              let tmp8 = tmp11;
            } else {
              tmp8 = cResult[5];
            }
            if (cResult[6] !== cResult[3]) {
              let tmp13 = null;
              if (null != tmp4) {
                ({ text: obj5.text, onPress: obj5.onPress } = tmp4);
                tmp13 = closure_3(game(5230).Button, {
                  grow: true,
                  size: "lg",
                  variant: "secondary",
                  text: null,
                  onPress: null,
                });
                const obj3 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
              }
              cResult[6] = tmp4;
              cResult[7] = tmp13;
              let tmp12 = tmp13;
            } else {
              tmp12 = cResult[7];
            }
            if (cResult[8] === direction) {
              if (cResult[9] === style) {
                if (cResult[10] === tmp8) {
                  if (cResult[11] === tmp12) {
                    let tmp15 = cResult[12];
                  }
                  return tmp15;
                }
              }
            }
            const obj4 = { direction, size: "lg", style, children: null };
            const items = [tmp8, tmp12];
            obj4.children = items;
            const tmp17 = closure_4(game(6681).ButtonGroup, obj4);
            cResult[8] = direction;
            cResult[9] = style;
            cResult[10] = tmp8;
            cResult[11] = tmp12;
            cResult[12] = tmp17;
            tmp15 = tmp17;
          }
        }
      }
      if (obj.CLOSE === secondaryAction) {
        const obj6 = { text: null, onPress: null };
        const intl2 = game(1128).intl;
        obj6.text = intl2.string(game(1128).t.cpT0Cq);
        obj6.onPress = function onPress() {
          return ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_1);
        };
        let tmp7 = obj6;
      } else if (tmp5.HOW_TO_PLAY === secondaryAction) {
        let tmp6 = null;
        if (null != game.instructions) {
          tmp6 = null;
          if ("" !== game.instructions) {
            const obj11 = { text: null, onPress: null };
            const intl = game(1128).intl;
            obj11.text = intl.string(game(1128).t["uz4M/z"]);
            obj11.onPress = function onPress() {
              return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
            };
            tmp6 = obj11;
          }
        }
        tmp7 = tmp6;
      }
      cResult[0] = game;
      cResult[1] = secondaryAction;
      cResult[2] = sheetKey;
      cResult[3] = tmp7;
    }
  : function OrbsArcadeSheetActions(arg0) {
      ({ game, secondaryAction } = arg0);
      ({ sheetKey: importDefault, direction, style } = arg0);
      if (obj.CLOSE === secondaryAction) {
        const obj2 = { text: null, onPress: null };
        const intl2 = game(1128).intl;
        obj2.text = intl2.string(game(1128).t.cpT0Cq);
        obj2.onPress = function onPress() {
          return ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_1);
        };
        let tmp5 = obj2;
      } else if (tmp.HOW_TO_PLAY === secondaryAction) {
        let tmp2 = null;
        if (null != game.instructions) {
          tmp2 = null;
          if ("" !== game.instructions) {
            obj = { text: null, onPress: null };
            const intl = game(1128).intl;
            obj.text = intl.string(game(1128).t["uz4M/z"]);
            obj.onPress = function onPress() {
              return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
            };
            tmp2 = obj;
          }
        }
        tmp5 = tmp2;
      }
      const obj3 = { direction, size: "lg", style, children: null };
      const items = [closure_3(OrbsArcadePlayButtonDefault, { game, size: "lg" })];
      let tmp11Result = null;
      if (null != tmp5) {
        ({ text: obj4.text, onPress: obj4.onPress } = tmp5);
        tmp11Result = closure_3(game(5230).Button, {
          grow: true,
          size: "lg",
          variant: "secondary",
          text: null,
          onPress: null,
        });
        const obj7 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
      }
      items[1] = tmp11Result;
      obj3.children = items;
      return closure_4(game(6681).ButtonGroup, obj3);
    };
export { OrbsArcadeSheetSecondaryAction };
