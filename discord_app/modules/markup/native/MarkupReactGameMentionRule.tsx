// === Module 11237: MarkupReactGameMentionRule ===

// Module 11237 (MarkupReactGameMentionRule)
import nativeDefault from "native" /* 575 */;
import useGame from "useGame" /* 7620 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9466 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9486 */;
import noop from "module_19" /* 19 */;

require = fn;
class MarkupGameMention {
  constructor(arg0) {
    ({ node, state } = global);
    fallbackVariant = global.fallbackVariant;
    if (fallbackVariant === undefined) {
      fallbackVariant = c9;
    }
    gameId = undefined;
    gameId = node.gameId;
    tmp = state;
    tmp2 = closure_2;
    obj = state(closure_2[8]);
    gameMentionData = obj.useGameMentionData(gameId);
    obj2 = state(closure_2[9]);
    previewMentionLayout = obj2.usePreviewMentionLayout();
    obj3 = state(closure_2[10]);
    variant = undefined;
    fontScale = obj3.useFontScale();
    if (previewMentionLayout != null) {
      variant = previewMentionLayout.variant;
    }
    if (variant == null) {
      variant = fallbackVariant;
    }
    prop = undefined;
    if (previewMentionLayout != null) {
      prop = previewMentionLayout.maxFontSizeMultiplier;
    }
    fontSize = tmp(tmp2[6]).TextStyleSheet[variant].fontSize;
    num = Infinity;
    if (null != prop) {
      num2 = 1;
      num = Infinity;
      if (prop >= 1) {
        num = prop;
      }
    }
    tmpResult = tmp(tmp2[7]);
    bound = Math.min(tmpResult.scaleLineHeight(fontSize, fontScale), fontSize * num);
    value = undefined;
    if (previewMentionLayout != null) {
      widths = previewMentionLayout.widths;
      value = widths.get(node);
    }
    tmp10 = true === state.muted;
    tmp11 = closure_10(bound, tmp10);
    tmp12 = gameId;
    gameIcon = undefined;
    tmp13 = gameId(tmp2[11]);
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    tmp13Result = tmp13(gameId, gameIcon, { size: bound });
    gameName = undefined;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      intl = tmp(tmp2[12]).intl;
      gameName = intl.string(tmp(tmp2[12]).t["11pdXZ"]);
    }
    str = "mention-foreground";
    if (tmp10) {
      str = "text-muted";
    }
    mentionPillOffsetY = state.mentionPillOffsetY;
    if (mentionPillOffsetY == null) {
      prop1 = undefined;
      if (true === state.noStyleAndInteraction) {
        prop1 = tmp(tmp2[13]).MENTION_PILL_OFFSET_Y;
      }
      mentionPillOffsetY = prop1;
    }
    result1 = undefined;
    if (null != mentionPillOffsetY) {
      result = mentionPillOffsetY * bound;
      result1 = result / tmp(tmp2[6]).TextStyleSheet[variant].fontSize;
    }
    if (null != result1) {
      items = [, ];
      items[0] = tmp11.inlineRoot;
      obj1 = { transform: null };
      obj16 = { translateY: null };
      obj16.translateY = result1;
      items1 = [];
      items1[0] = obj16;
      obj1.transform = items1;
      items[1] = obj1;
      inlineRoot = items;
    } else {
      inlineRoot = tmp11.inlineRoot;
    }
    tmp20 = jsxs;
    if (null != value) {
      items2 = [, ];
      items2[0] = tmp11.pill;
      obj17 = { maxWidth: null };
      obj17.maxWidth = value;
      items2[1] = obj17;
      pill = items2;
    } else {
      pill = tmp11.pill;
    }
    obj18 = { direction: "horizontal", align: "center", style: pill, children: null };
    tmpResult1 = tmp(tmp2[15]);
    tmp21 = jsx;
    if (tmpResult1.isNullOrEmpty(tmp13Result)) {
      obj19 = { size: "custom", color: null, style: null, accessible: false };
      obj19.color = str;
      obj19.style = tmp11.icon;
      tmp21Result = tmp21(tmp(tmp2[16]).UnknownGameIcon, obj19);
      tmp23 = tmp21;
    } else {
      obj20 = { source: null, resizeMode: "contain", style: null, accessible: false };
      obj21 = { uri: null };
      obj21.uri = tmp13Result;
      obj20.source = obj21;
      obj20.style = tmp11.icon;
      tmp21Result = tmp21(tmp12(tmp2[17]), obj20);
      tmp23 = tmp21;
    }
    items3 = [, ];
    items3[0] = tmp21Result;
    obj22 = { variant, color: str, lineClamp: 1, ellipsizeMode: null, maxFontSizeMultiplier: null, style: null, children: null };
    str2 = "tail";
    if (null != value) {
      str2 = "clip";
    }
    obj22.ellipsizeMode = str2;
    obj22.maxFontSizeMultiplier = prop;
    obj22.style = tmp11.name;
    obj22.children = gameName;
    items3[1] = tmp23(tmp(tmp2[6]).Text, obj22);
    obj18.children = items3;
    tmp20Result = tmp20(tmp(tmp2[14]).Stack, obj18);
    if (true === state.noStyleAndInteraction) {
      tmp27 = View;
      obj23 = { style: null, children: null };
      obj23.style = inlineRoot;
      obj23.children = tmp20Result;
      tmp23Result = tmp23(View, obj23);
    } else {
      tmp25 = Pressable;
      obj24 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj24.style = inlineRoot;
      obj24.accessibilityLabel = gameName;
      obj24.onPress = function handlePress() {
        const obj = GameProfileActionCreatorsDefault;
        obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId });
      };
      obj24.children = tmp20Result;
      tmp23Result = tmp23(Pressable, obj24);
    }
    return tmp23Result;
  }
}
function FetchingGameMention(node) {
  const game = useGame.useGame(node.node.gameId);
  const merged = Object.assign(node);
  return timestampProducer(MarkupGameMention, {});
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MUTED_OPACITY_CONTENT = fn(11236).MUTED_OPACITY_CONTENT;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = nativeDefault.space.PX_4 / 2;
let c9 = "body-sm/semibold";
const createStyles = fn(5141);
let closure_10 = createStyles.createStyles((width, arg1) => {
  const obj = { inlineRoot: { flexDirection: "row" }, pill: { width: "auto", minWidth: 0, flexShrink: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: nativeDefault.radii.xs, paddingHorizontal: gap, gap }, name: { minWidth: 0, flexShrink: 1 }, icon: null };
  const size = { width, height: width, borderRadius: nativeDefault.radii.xs, opacity: null };
  let num = 1;
  if (arg1) {
    num = MUTED_OPACITY_CONTENT;
  }
  size.opacity = num;
  obj.icon = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default MarkupGameMention;
export function createFetchingGameMentionRule() {
  let tmp = variant;
  if (variant === undefined) {
    tmp = c9;
  }
  const fallbackVariant = tmp;
  return {
    gameMention: {
      react(gameId, arg1, insideSpoiler) {
        if (true === insideSpoiler.insideSpoiler) {
          const _HermesInternal = HermesInternal;
          let combined = "<@$" + gameId.gameId + ">";
        } else {
          const obj = { node: gameId, state: insideSpoiler, fallbackVariant };
          combined = timestampProducer(FetchingGameMention, obj, insideSpoiler.key);
        }
        return combined;
      }
    }
  };
}