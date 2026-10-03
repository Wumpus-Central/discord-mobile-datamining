// === Module 13656: MarkupReactGameMentionRule ===

// Module 13656 (MarkupReactGameMentionRule)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useGame from "useGame" /* 6812 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8325 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsxs: c3, jsx: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { icon: null, chip: null, chipText: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, marginRight: 2 };
obj2.icon = size;
obj2.chip = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 2 };
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 2 };
obj2.chipText = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
let closure_5 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  const cResult = state(576).c(28);
  state = state.state;
  const tmp4 = closure_5();
  const gameId = state.node.gameId;
  let obj = state(576);
  const gameMentionData = state(5891).useGameMentionData(gameId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["11pdXZ"]);
    cResult[0] = stringResult;
    let first = stringResult;
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
    if (cResult[2] === gameIcon) {
      let tmp10 = cResult[3];
    }
    if (null == gameMentionData) {
      let textColor1;
      if (state != null) {
        textColor1 = state.textColor;
      }
      if (cResult[4] === state.key) {
        if (cResult[5] === textColor1) {
          let tmp31 = cResult[6];
        }
        return tmp31;
      }
      const obj3 = { color: textColor1, children: null };
      const items = ["@", first];
      obj3.children = items;
      const tmp33 = closure_3(tmp(4878).MarkupText, obj3, state.key);
      cResult[4] = state.key;
      cResult[5] = textColor1;
      cResult[6] = tmp33;
      tmp31 = tmp33;
    } else {
      if (cResult[7] === gameId) {
        if (cResult[10] !== tmp4.icon) {
          const obj4 = { size: "sm", style: tmp4.icon };
          const tmp15 = closure_4(tmp(8248).UnknownGameIcon, obj4);
          cResult[10] = tmp4.icon;
          cResult[11] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[11];
        }
        let tmp16 = null != tmp10;
        if (tmp16) {
          tmp16 = "" !== tmp10;
        }
        if (!tmp16) {
          let str2 = "button";
          if (state.noStyleAndInteraction) {
            str2 = "text";
          }
          if (state != null) {
            const textColor = state.textColor;
          }
          if (cResult[17] === gameName) {
            if (cResult[18] === tmp4.chipText) {
              let tmp24 = cResult[19];
            }
            if (cResult[20] === tmp13) {
              if (cResult[21] === state.key) {
                if (cResult[22] === tmp4.chip) {
                  if (cResult[23] === str2) {
                    if (cResult[24] === textColor) {
                      if (cResult[25] === tmp23) {
                        if (cResult[26] === tmp24) {
                          let tmp27 = cResult[27];
                        }
                        return tmp27;
                      }
                    }
                  }
                }
              }
            }
            const obj5 = { accessibilityRole: str2, style: tmp4.chip, color: textColor, onPress: tmp23, children: null };
            const items1 = [tmp13, tmp24];
            obj5.children = items1;
            const tmp29 = closure_3(tmp(4878).MarkupText, obj5, state.key);
            cResult[20] = tmp13;
            cResult[21] = state.key;
            cResult[22] = tmp4.chip;
            cResult[23] = str2;
            cResult[24] = textColor;
            cResult[25] = tmp23;
            cResult[26] = tmp24;
            cResult[27] = tmp29;
            tmp27 = tmp29;
          }
          const obj6 = { variant: "text-sm/medium", style: tmp4.chipText, children: gameName };
          const tmp26 = closure_4(tmp(4886).Text, obj6);
          cResult[17] = gameName;
          cResult[18] = tmp4.chipText;
          cResult[19] = tmp26;
          tmp24 = tmp26;
        } else {
          if (cResult[12] !== tmp10) {
            const obj7 = { uri: tmp10 };
            cResult[12] = tmp10;
            cResult[13] = obj7;
            let tmp17 = obj7;
          } else {
            tmp17 = cResult[13];
          }
          if (cResult[14] === tmp4.icon) {
          }
          const obj8 = { style: tmp4.icon, source: tmp17 };
          const tmp21 = closure_4(gameId(5974), obj8);
          cResult[14] = tmp4.icon;
          cResult[15] = tmp17;
          cResult[16] = tmp21;
        }
      }
      const fn = function v() {
        const obj = GameProfileActionCreatorsDefault;
        obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId });
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
  const obj2 = state(5891);
}) : ((state) => {
  state = state.state;
  const tmp = closure_5();
  const gameId = state.node.gameId;
  const gameMentionData = state(5891).useGameMentionData(gameId);
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
  let obj = state(5891);
  const tmp7 = gameId;
  if (gameMentionData != null) {
    gameIcon = gameMentionData.gameIcon;
  }
  const tmp8Result = gameId(2017)(gameId, gameIcon, { size: 32 });
  if (null == gameMentionData) {
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    const obj2 = { color: textColor, children: null };
    const items = ["@", stringResult];
    obj2.children = items;
    return closure_3(tmp2(4878).MarkupText, obj2, state.key);
  } else {
    const obj3 = { size: "sm", style: tmp.icon };
    let tmp11 = null != tmp8Result;
    if (tmp11) {
      tmp11 = "" !== tmp8Result;
    }
    let tmp17Result = closure_4(tmp2(8248).UnknownGameIcon, obj3);
    if (tmp11) {
      const obj4 = { style: tmp.icon, source: null };
      const obj5 = { uri: tmp8Result };
      obj4.source = obj5;
      tmp17Result = closure_4(tmp7(5974), obj4);
    }
    let str2 = "button";
    if (state.noStyleAndInteraction) {
      str2 = "text";
    }
    const obj6 = { accessibilityRole: str2, style: tmp.chip, color: null, onPress: null, children: null };
    let textColor1;
    if (state != null) {
      textColor1 = state.textColor;
    }
    obj6.color = textColor1;
    let fn;
    if (!state.noStyleAndInteraction) {
      fn = () => {
        const obj = GameProfileActionCreatorsDefault;
        obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId });
      };
    }
    obj6.onPress = fn;
    const items1 = [tmp17Result, ];
    const obj7 = { variant: "text-sm/medium", style: tmp.chipText, children: gameName };
    items1[1] = closure_4(tmp2(4886).Text, obj7);
    obj6.children = items1;
    return closure_3(tmp2(4878).MarkupText, obj6, state.key);
  }
  const tmp8 = gameId(2017);
});
let closure_6 = tmp4;
ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ node, state } = arg0);
  const game = useGame.useGame(node.gameId);
  if (cResult[0] === node) {
    if (cResult[1] === state) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = React4(closure_6, { node, state });
  cResult[0] = node;
  cResult[1] = state;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((state) => {
  const node = state.node;
  const game = useGame.useGame(node.gameId);
  return React4(closure_6, { node, state: state.state });
});
size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default tmp4;
export function createFetchingGameMentionRule() {
  return {
    gameMention: {
      react(node, arg1, state) {
        return closure_1_4(closure_1_7, { node, state }, state.key);
      }
    }
  };
}