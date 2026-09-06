// discord_app/modules/markup/native/MarkupReactGameMentionRule.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useGame from "../../games/hooks/useGame.tsx";
import GameProfileActionCreatorsDefault from "../../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
      obj = { color: null, children: null };
      obj.color = textColor;
      items = ["@"];
      items[1] = stringResult;
      obj.children = items;
      return tmp15(tmp2(tmp3[7]).MarkupText, obj, state.key);
    } else {
      tmp17 = jsx;
      obj1 = { size: "sm", style: null };
      obj1.style = tmp.icon;
      tmp11 = null != tmp8Result;
      tmp18 = jsx(tmp2(tmp3[8]).UnknownGameIcon, obj1);
      if (tmp11) {
        str = "";
        tmp11 = "" !== tmp8Result;
      }
      tmp17Result = tmp18;
      if (tmp11) {
        obj2 = { style: null, source: null };
        obj2.style = tmp.icon;
        obj3 = { uri: null };
        obj3.uri = tmp8Result;
        obj2.source = obj3;
        tmp17Result = tmp17(tmp7(tmp3[9]), obj2);
      }
      tmp13 = jsxs;
      str2 = "button";
      if (state.noStyleAndInteraction) {
        str2 = "text";
      }
      obj4 = { accessibilityRole: null, style: null, color: null, onPress: null, children: null };
      obj4.accessibilityRole = str2;
      obj4.style = tmp.chip;
      textColor1 = undefined;
      if (state != null) {
        textColor1 = state.textColor;
      }
      obj4.color = textColor1;
      fn = undefined;
      if (!state.noStyleAndInteraction) {
        fn = () => {
          const obj = {
            gameId,
            gameProfileModalChecks: { shouldOpenGameProfile: true, gameId },
            source: GameProfileAnalyticUtils.GameProfileSources.GameMention,
            sourceUserId: state.authorId,
          };
          obj.openGameProfileModal(obj);
        };
      }
      obj4.onPress = fn;
      items1 = [,];
      items1[0] = tmp17Result;
      obj5 = { variant: "text-sm/medium", style: null, children: null };
      obj5.style = tmp.chipText;
      obj5.children = gameName;
      items1[1] = tmp17(tmp2(tmp3[12]).Text, obj5);
      obj4.children = items1;
      return tmp13(tmp2(tmp3[7]).MarkupText, obj4, state.key);
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
fn(4560);
let createStyles = { icon: null, chip: null, chipText: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, marginRight: 2 };
createStyles.icon = size;
createStyles = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 2,
};
createStyles.chip = createStyles;
createStyles.chipText = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
const hasOwnProperty = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default MarkupGameMention;
export function createFetchingGameMentionRule() {
  return {
    gameMention: {
      react(node, arg1, state) {
        return closure_1_4(FetchingGameMention, { node, state }, state.key);
      },
    },
  };
}
