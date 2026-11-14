// discord_app/modules/chat_input/native/EmojiSuggestionBarLarge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1655 from "../../../../_runtime/metro/01655__.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useMeasuredLayoutDefault from "../../screen/native/useMeasuredLayout.tsx";
import EmojiPickerListRow from "../../emoji_picker/native/components/EmojiPickerListRow.tsx";
import openEmojiActionSheet2 from "../../emoji_picker/native/components/openEmojiActionSheet.tsx";
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function EmojiSuggestionBarLargeAnimated(arg0) {
  ({ reducedMotion: c0, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap } = arg0);
  let emptySlot;
  c4 = undefined;
  ({ unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  const tmp3 = useMeasuredLayoutDefault();
  const width = tmp3.width;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  if (undefined !== width) {
    num = width;
  }
  const truncResult = Math.trunc(num / (IMAGE_SIZE + nativeDefault.space.PX_6));
  const bound = Math.min(truncResult, 11);
  const tmp7 = closure_7(truncResult > 11);
  emptySlot = tmp7;
  const sortEmojisForDisplayResult = require("EmojiSuggestionBarUtils").sortEmojisForDisplay(
    unlockedEmojis,
    lockedEmojis,
    bound,
  );
  c4 = sortEmojisForDisplayResult;
  length = bound;
  if (truncResult > 11) {
    length = sortEmojisForDisplayResult.length;
  }
  let obj = require("EmojiSuggestionBarUtils");
  const suggestionBarHeight = require("EmojiSuggestionBarUtils").useSuggestionBarHeight(transitionState, cleanUp, 52);
  const tmp8Result = require("EmojiSuggestionBarUtils");
  items = [closure_8, suggestionBarHeight];
  _require = undefined;
  [tmp10, tmp11] = items;
  class EmojiSuggestionBarLargeTsx1 {
    constructor() {
      obj = { height: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp11];
  EmojiSuggestionBarLargeTsx1.__closure = items1;
  EmojiSuggestionBarLargeTsx1.__workletHash = 10647028871878;
  EmojiSuggestionBarLargeTsx1.__initData = tmp10;
  const animatedStyle = require("../../../../_runtime/metro/01655__.js").useAnimatedStyle(EmojiSuggestionBarLargeTsx1);
  let obj2 = { style: null, children: null };
  const items2 = [tmp7.containerLargeWrapper, animatedStyle];
  obj2.style = items2;
  const tmp8Result2 = require("../../../../_runtime/metro/01655__.js");
  obj2.children = (
    <c4 style={tmp7.containerLarge} ref={ref} onLayout={onLayout}>
      {Array.from({ length }, (arg0, index) => {
        if (null == _undefined[index]) {
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
    </c4>
  );
  return jsx(_modDef1655.View, { style: null, children: null });
}
function renderEmojiSuggestionBarLargeItem(key, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return <EmojiSuggestionBarLargeAnimated key={key} />;
}
const View = fn(17).View;
const IMAGE_SIZE = fn(9546).IMAGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_7 = createStyles.createStyles((arg0) => {
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
let closure_8 = {
  code: "(function EmojiSuggestionBarLargeTsx1(){let[heightSv]=this.__closure;return{height:heightSv.get()};})",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export function EmojiSuggestionBarLarge(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const emojiSuggestionBarState = EmojiSuggestionBarUtils.useEmojiSuggestionBarState(
    merged,
    EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE,
    3,
    ref.ref,
  );
  const unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const memo = noop.useMemo(
    () => ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable }),
    items,
  );
  return jsx(native.TransitionItem, { item: memo, renderItem: renderEmojiSuggestionBarLargeItem });
}
