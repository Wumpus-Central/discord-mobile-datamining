// === Module 14114: MarkupReactGameMentionRule ===

// Module 14114 (MarkupReactGameMentionRule)
import nativeDefault from "native" /* 576 */;
import useGame from "useGame" /* 7551 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8951 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8957 */;
import noop from "module_19" /* 19 */;

require = fn;
class MarkupGameMention {
  constructor(arg0) {
    state = global.state;
    gameId = undefined;
    tmp = closure_5();
    gameId = global.node.gameId;
    tmp2 = state;
    tmp3 = closure_2;
    obj = state(closure_2[4]);
    gameMentionData = obj.useGameMentionData(gameId);
    intl = state(closure_2[5]).intl;
    stringResult = intl.string(state(closure_2[5]).t["11pdXZ"]);
    gameName = undefined;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      gameName = stringResult;
    }
    tmp7 = gameId;
    gameIcon = undefined;
    tmp8 = gameId(tmp3[6]);
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    tmp8Result = tmp8(gameId, gameIcon, { size: 32 });
    if (null == gameMentionData) {
      tmp15 = jsxs;
      textColor = undefined;
      if (state != null) {
        textColor = state.textColor;
      }
      obj1 = { color: null, children: null };
      obj1.color = textColor;
      items = ["@"];
      items[1] = stringResult;
      obj1.children = items;
      return tmp15(tmp2(tmp3[7]).MarkupText, obj1, state.key);
    } else {
      tmp17 = jsx;
      obj8 = { size: "sm", style: null };
      obj8.style = tmp.icon;
      tmp11 = null != tmp8Result;
      tmp18 = jsx(tmp2(tmp3[8]).UnknownGameIcon, obj8);
      if (tmp11) {
        str = "";
        tmp11 = "" !== tmp8Result;
      }
      tmp17Result = tmp18;
      if (tmp11) {
        obj9 = { style: null, source: null };
        obj9.style = tmp.icon;
        obj10 = { uri: null };
        obj10.uri = tmp8Result;
        obj9.source = obj10;
        tmp17Result = tmp17(tmp7(tmp3[9]), obj9);
      }
      tmp13 = jsxs;
      str2 = "button";
      if (state.noStyleAndInteraction) {
        str2 = "text";
      }
      obj11 = { accessibilityRole: null, style: null, color: null, onPress: null, children: null };
      obj11.accessibilityRole = str2;
      obj11.style = tmp.chip;
      textColor1 = undefined;
      if (state != null) {
        textColor1 = state.textColor;
      }
      obj11.color = textColor1;
      fn = undefined;
      if (!state.noStyleAndInteraction) {
        fn = () => {
          const obj = GameProfileActionCreatorsDefault;
          obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId });
        };
      }
      obj11.onPress = fn;
      items1 = [, ];
      items1[0] = tmp17Result;
      obj12 = { variant: "text-sm/medium", style: null, children: null };
      obj12.style = tmp.chipText;
      obj12.children = gameName;
      items1[1] = tmp17(tmp2(tmp3[12]).Text, obj12);
      obj11.children = items1;
      return tmp13(tmp2(tmp3[7]).MarkupText, obj11, state.key);
    }
  }
}
function FetchingGameMention(state) {
  const node = state.node;
  const game = useGame.useGame(node.gameId);
  return React4(MarkupGameMention, { node, state: state.state });
}
const jsxProd = fn(21);
({ jsxs: c3, jsx: closure_4 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { icon: null, chip: null, chipText: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, marginRight: 2 };
obj2.icon = size;
obj2.chip = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 2 };
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 2 };
obj2.chipText = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
const hasOwnProperty = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default MarkupGameMention;
export function createFetchingGameMentionRule() {
  return {
    gameMention: {
      react(node, arg1, state) {
        return closure_1_4(FetchingGameMention, { node, state }, state.key);
      }
    }
  };
}