// discord_app/modules/chat_input/native/EmojiSuggestionBarLarge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import EmojiPickerListRow from "../../emoji_picker/native/components/EmojiPickerListRow.tsx";
import openEmojiActionSheet2 from "../../emoji_picker/native/components/openEmojiActionSheet.tsx";
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function EmojiSuggestionBarLargeAnimated(arg0) {
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  let suggestionBarHeight;
  ({ unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  [tmp4, c3] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const truncResult = Math.trunc(tmp4 / (suggestionBarHeight + nativeDefault.space.PX_6));
  let length = Math.min(truncResult, 11);
  const tmp8 = closure_8(truncResult > 11);
  noop = tmp8;
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  const sortEmojisForDisplayResult = EmojiSuggestionBarUtils.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length);
  c5 = sortEmojisForDisplayResult;
  if (truncResult > 11) {
    length = sortEmojisForDisplayResult.length;
  }
  suggestionBarHeight = EmojiSuggestionBarUtils.useSuggestionBarHeight(transitionState, cleanUp, 52);
  const tmp9Result = EmojiSuggestionBarUtils;
  const fn = function f() {
    return { height: suggestionBarHeight.get() };
  };
  fn.__closure = { heightSv: suggestionBarHeight };
  fn.__workletHash = 5553872738815;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  let obj2 = { style: null, children: null };
  const items = [tmp8.containerLargeWrapper, animatedStyle];
  obj2.style = items;
  const tmp9Result2 = ReanimatedRexport;
  obj2.children = (
    <c5 style={tmp8.containerLarge} onLayout={callback}>
      {Array.from({ length }, (arg0, index) => {
        if (null == _undefined2[index]) {
          const obj = { style: emptySlot.emptySlot };
          const _HermesInternal = HermesInternal;
          return <View key={"none:" + index} style={emptySlot.emptySlot} />;
        } else {
          const locked = tmp2.locked;
          const obj2 = { index, reducedMotion, children: null };
          const obj3 = {
            emoji: tmp2.emoji,
            disabled: locked,
            onPressEmoji: locked ? dependencyMap : importDefault,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          };
          if (locked) {
            let openEmojiActionSheet = dependencyMap;
          } else {
            openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
          }
          obj3.onLongPressEmoji = openEmojiActionSheet;
          obj3.animateEmoji = !reducedMotion;
          obj2.children = jsx(EmojiPickerListRow.EmojiItem, {
            emoji: tmp2.emoji,
            disabled: locked,
            onPressEmoji: locked ? dependencyMap : importDefault,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          });
          return jsx(
            EmojiSuggestionBarUtils.EmojiEntranceAnimation,
            { index, reducedMotion, children: null },
            EmojiSuggestionBarUtils.getEmojiEntranceKey(tmp, index),
          );
        }
      })}
    </c5>
  );
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
}
function renderEmojiSuggestionBarLargeItem(key, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return <EmojiSuggestionBarLargeAnimated key={key} />;
}
const View = fn(17).View;
const IMAGE_SIZE = fn(10437).IMAGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = { containerLargeWrapper: { overflow: "hidden" }, containerLarge: null, emptySlot: null };
  let str = "space-between";
  if (arg0) {
    str = "flex-start";
  }
  const obj2 = {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: str,
    gap: null,
    padding: null,
    borderBottomWidth: 1,
    borderBottomColor: null,
  };
  let PX_6;
  if (arg0) {
    PX_6 = nativeDefault.space.PX_6;
  }
  obj2.gap = PX_6;
  obj2.padding = nativeDefault.space.PX_8;
  obj2.borderBottomColor = nativeDefault.colors.BORDER_MUTED;
  obj.containerLarge = obj2;
  const size = { width: IMAGE_SIZE, height: IMAGE_SIZE };
  obj.emptySlot = size;
  return obj;
});
const __initData = {
  code: "function EmojiSuggestionBarLargeTsx1(){const{heightSv}=this.__closure;return{height:heightSv.get()};}",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export const EmojiSuggestionBarLarge = noop.forwardRef((merged, arg1) => {
  const emojiSuggestionBarState = EmojiSuggestionBarUtils.useEmojiSuggestionBarState(
    merged,
    EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE,
    3,
    arg1,
  );
  const unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const memo = noop.useMemo(
    () => ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable }),
    items,
  );
  return jsx(native.TransitionItem, { item: memo, renderItem: renderEmojiSuggestionBarLargeItem });
});
