// === Module 13658: MarkupReactGameMentionRule ===

// Module 13658 (MarkupReactGameMentionRule)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useGame from "useGame" /* 6812 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8325 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let size;
({ jsxs: c3, jsx: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { icon: size, chip: obj2, chipText: obj3 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, marginRight: 2 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 2 };
obj3 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
let closure_5 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let first;
  let items;
  let items1;
  let obj = state(576);
  const cResult = obj.c(28);
  state = state.state;
  const node = state.node;
  const tmp4 = closure_5();
  const gameId = node.gameId;
  let obj2 = state(5891);
  const gameMentionData = obj2.useGameMentionData(gameId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(state(1126).t["11pdXZ"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  let gameName;
  if (gameMentionData != null) {
    gameName = gameMentionData.gameName;
  }
  if (gameName == null) {
    gameName = first;
  }
  let gameIcon;
  if (gameMentionData != null) {
    gameIcon = gameMentionData.gameIcon;
  }
  if (cResult[1] === gameId) {
    let tmp10;
    if (cResult[2] === gameIcon) {
      tmp10 = cResult[3];
    }
    if (null == gameMentionData) {
      let textColor1;
      if (state != null) {
        textColor1 = state.textColor;
      }
      if (cResult[4] === state.key) {
        let tmp30;
        if (cResult[5] === textColor1) {
          tmp30 = cResult[6];
        }
        return tmp30;
      }
      const obj3 = { color: textColor1, children: items };
      items = ["@", first];
      const tmp32 = closure_3(state(4878).MarkupText, obj3, state.key);
      cResult[4] = state.key;
      cResult[5] = textColor1;
      cResult[6] = tmp32;
      tmp30 = tmp32;
    } else {
      if (cResult[7] === gameId) {
        let tmp13;
        let textColor;
        if (cResult[10] !== tmp4.icon) {
          const obj4 = { size: "sm", style: tmp4.icon };
          const tmp15 = closure_4(state(8248).UnknownGameIcon, obj4);
          cResult[10] = tmp4.icon;
          cResult[11] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[11];
        }
        const tmp16 = null != tmp10 && "" !== tmp10;
        if (tmp16) {
          let tmp17;
          if (cResult[12] !== tmp10) {
            const obj5 = { uri: tmp10 };
            cResult[12] = tmp10;
            cResult[13] = obj5;
            tmp17 = obj5;
          } else {
            tmp17 = cResult[13];
          }
          if (cResult[14] === tmp4.icon) {
            let tmp18;
            if (cResult[15] === tmp17) {
              tmp18 = cResult[16];
            }
            tmp13 = tmp18;
          }
          const obj6 = { style: tmp4.icon, source: tmp17 };
          const tmp21 = closure_4(gameId(5974), obj6);
          cResult[14] = tmp4.icon;
          cResult[15] = tmp17;
          cResult[16] = tmp21;
          tmp18 = tmp21;
        }
        let str2 = "button";
        if (state.noStyleAndInteraction) {
          str2 = "text";
        }
        if (state != null) {
          textColor = state.textColor;
        }
        if (cResult[17] === gameName) {
          let tmp23;
          if (cResult[18] === tmp4.chipText) {
            tmp23 = cResult[19];
          }
          if (cResult[20] === tmp13) {
            if (cResult[21] === state.key) {
              if (cResult[22] === tmp4.chip) {
                if (cResult[23] === str2) {
                  if (cResult[24] === textColor) {
                    if (cResult[25] === tmp22) {
                      let tmp26;
                      if (cResult[26] === tmp23) {
                        tmp26 = cResult[27];
                      }
                      return tmp26;
                    }
                  }
                }
              }
            }
          }
          const obj7 = { accessibilityRole: str2, style: tmp4.chip, color: textColor, onPress: tmp22, children: items1 };
          items1 = [tmp13, tmp23];
          const tmp28 = closure_3(state(4878).MarkupText, obj7, state.key);
          cResult[20] = tmp13;
          cResult[21] = state.key;
          cResult[22] = tmp4.chip;
          cResult[23] = str2;
          cResult[24] = textColor;
          cResult[25] = tmp22;
          cResult[26] = tmp23;
          cResult[27] = tmp28;
          tmp26 = tmp28;
        }
        const obj8 = { variant: "text-sm/medium", style: tmp4.chipText, children: gameName };
        const tmp25 = closure_4(state(4886).Text, obj8);
        cResult[17] = gameName;
        cResult[18] = tmp4.chipText;
        cResult[19] = tmp25;
        tmp23 = tmp25;
      }
      const fn = function v() {
        const obj = GameProfileActionCreatorsDefault;
        const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId };
        obj.openGameProfileModal(obj2);
      };
      cResult[7] = gameId;
      cResult[8] = state.authorId;
      cResult[9] = fn;
    }
  }
  const tmp11 = gameId(2017)(gameId, gameIcon, { size: 32 });
  cResult[1] = gameId;
  cResult[2] = gameIcon;
  cResult[3] = tmp11;
  tmp10 = tmp11;
}) : ((state) => {
  let fn;
  let items;
  let items1;
  let obj5;
  let textColor1;
  state = state.state;
  const node = state.node;
  const tmp = closure_5();
  const gameId = node.gameId;
  let obj = state(5891);
  const gameMentionData = obj.useGameMentionData(gameId);
  const intl = state(1126).intl;
  const stringResult = intl.string(state(1126).t["11pdXZ"]);
  let gameName;
  if (gameMentionData != null) {
    gameName = gameMentionData.gameName;
  }
  if (gameName == null) {
    gameName = stringResult;
  }
  let gameIcon;
  const tmp7 = gameId;
  const tmp8 = gameId(2017);
  if (gameMentionData != null) {
    gameIcon = gameMentionData.gameIcon;
  }
  const tmp8Result = tmp8(gameId, gameIcon, { size: 32 });
  if (null == gameMentionData) {
    let textColor;
    const MarkupText2 = tmp2(4878).MarkupText;
    if (state != null) {
      textColor = state.textColor;
    }
    let obj2 = { color: textColor, children: items };
    items = ["@", stringResult];
    return closure_3(MarkupText2, obj2, state.key);
  } else {
    let tmp11 = null != tmp8Result;
    const obj3 = { size: "sm", style: tmp.icon };
    const tmp18 = closure_4(state(8248).UnknownGameIcon, obj3);
    if (tmp11) {
      tmp11 = "" !== tmp8Result;
    }
    let tmp17Result = tmp18;
    if (tmp11) {
      const obj4 = { style: tmp.icon, source: obj5 };
      obj5 = { uri: tmp8Result };
      tmp17Result = closure_4(tmp7(5974), obj4);
    }
    let str2 = "button";
    const MarkupText = tmp2(4878).MarkupText;
    if (state.noStyleAndInteraction) {
      str2 = "text";
    }
    const obj6 = { accessibilityRole: str2, style: tmp.chip, color: textColor1, onPress: fn, children: items1 };
    textColor1 = undefined;
    if (state != null) {
      textColor1 = state.textColor;
    }
    fn = undefined;
    if (!state.noStyleAndInteraction) {
      fn = () => {
        const obj = GameProfileActionCreatorsDefault;
        const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId };
        obj.openGameProfileModal(obj2);
      };
    }
    items1 = [tmp17Result, ];
    const obj7 = { variant: "text-sm/medium", style: tmp.chipText, children: gameName };
    items1[1] = closure_4(state(4886).Text, obj7);
    return closure_3(MarkupText, obj6, state.key);
  }
});
let closure_6 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let node;
  let state;
  const obj = react2;
  const cResult = obj.c(3);
  ({ node, state } = arg0);
  const obj2 = useGame;
  const game = obj2.useGame(node.gameId);
  if (cResult[0] === node) {
    let tmp3;
    if (cResult[1] === state) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = React3(closure_6, { node, state });
  cResult[0] = node;
  cResult[1] = state;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((node) => {
  node = node.node;
  const state = node.state;
  const obj = useGame;
  const game = obj.useGame(node.gameId);
  return React3(closure_6, { node, state });
});
size = size_mod;
const result = size.fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default tmp5;
export function createFetchingGameMentionRule() {
  let obj = {
    gameMention: {
      react(node, arg1, state) {
        const obj = { node, state };
        return closure_1_4(closure_1_7, obj, state.key);
      }
    }
  };
  return obj;
}