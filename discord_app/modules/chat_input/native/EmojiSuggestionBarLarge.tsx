// discord_app/modules/chat_input/native/EmojiSuggestionBarLarge.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4296 from "../../reanimated/ReanimatedRexport.tsx";
import MAX_SUGGESTIONS_LARGE from "EmojiSuggestionBarUtils.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { IMAGE_SIZE } from "../../emoji_picker/native/components/EmojiPickerListConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function EmojiSuggestionBarLargeAnimated(arg0) {
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap } = arg0);
  let callback;
  importAllResult = undefined;
  c5 = undefined;
  let suggestionBarHeight;
  ({ unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  [tmp4, c3] = callback(importAllResult.useState(0), 2);
  callback = importAllResult.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const truncResult = Math.trunc(tmp4 / (suggestionBarHeight + ThemesDefault.space.PX_6));
  let length = Math.min(truncResult, 11);
  const tmp8 = callback2(truncResult > 11);
  importAllResult = tmp8;
  let obj = MAX_SUGGESTIONS_LARGE;
  const sortEmojisForDisplayResult = obj.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length);
  c5 = sortEmojisForDisplayResult;
  if (truncResult > 11) {
    length = sortEmojisForDisplayResult.length;
  }
  let tmp9Result = tmp9(12426);
  suggestionBarHeight = tmp9Result.useSuggestionBarHeight(transitionState, cleanUp, 52);
  tmp9Result = tmp9(4296);
  const fn = function f() {
    return { height: suggestionBarHeight.get() };
  };
  fn.__closure = { heightSv: suggestionBarHeight };
  fn.__workletHash = 5553872738815;
  fn.__initData = closure_9;
  const animatedStyle = tmp9Result.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp8.containerLargeWrapper, animatedStyle];
  obj = {
    style: tmp8.containerLarge,
    onLayout: callback,
    children: Array.from({ length }, (arg0, index) => {
      if (null == _undefined2[index]) {
        let obj = { style: null };
        obj[0] = emptySlot.emptySlot;
        const _HermesInternal = HermesInternal;
        return closure_1_7(_undefined2, obj, "none:" + index);
      } else {
        const locked = tmp2.locked;
        obj = { index: null, reducedMotion: null, children: null };
        obj[0] = index;
        obj[1] = closure_0;
        obj1 = {
          emoji: null,
          disabled: null,
          onPressEmoji: null,
          onLongPressEmoji: null,
          animateEmoji: null,
          isSectionNitroLocked: false,
        };
        obj1[0] = tmp2.emoji;
        obj1[1] = locked;
        obj1[2] = locked ? closure_2 : closure_1;
        if (locked) {
          let openEmojiActionSheet = closure_2;
        } else {
          openEmojiActionSheet = tmp8(tmp9[10]).openEmojiActionSheet;
        }
        obj1[3] = openEmojiActionSheet;
        obj1[4] = !closure_0;
        obj[2] = closure_1_7(closure_1_0(closure_1_2[9]).EmojiItem, obj1);
        return closure_1_7(
          closure_1_0(closure_1_2[7]).EmojiEntranceAnimation,
          obj,
          closure_1_0(closure_1_2[7]).getEmojiEntranceKey(tmp, index),
        );
      }
    }),
  };
  obj[1] = (
    <c5 style={tmp8.containerLarge} onLayout={callback}>
      {Array.from({ length }, (arg0, index) => {
        if (null == _undefined2[index]) {
          let obj = { style: null };
          obj[0] = emptySlot.emptySlot;
          const _HermesInternal = HermesInternal;
          return closure_1_7(_undefined2, obj, "none:" + index);
        } else {
          const locked = tmp2.locked;
          obj = { index: null, reducedMotion: null, children: null };
          obj[0] = index;
          obj[1] = closure_0;
          obj1 = {
            emoji: null,
            disabled: null,
            onPressEmoji: null,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          };
          obj1[0] = tmp2.emoji;
          obj1[1] = locked;
          obj1[2] = locked ? closure_2 : closure_1;
          if (locked) {
            let openEmojiActionSheet = closure_2;
          } else {
            openEmojiActionSheet = tmp8(tmp9[10]).openEmojiActionSheet;
          }
          obj1[3] = openEmojiActionSheet;
          obj1[4] = !closure_0;
          obj[2] = closure_1_7(closure_1_0(closure_1_2[9]).EmojiItem, obj1);
          return closure_1_7(
            closure_1_0(closure_1_2[7]).EmojiEntranceAnimation,
            obj,
            closure_1_0(closure_1_2[7]).getEmojiEntranceKey(tmp, index),
          );
        }
      })}
    </c5>
  );
  return jsx(_modDef4296.View, {
    style: tmp8.containerLarge,
    onLayout: callback,
    children: Array.from({ length }, (arg0, index) => {
      if (null == _undefined2[index]) {
        let obj = { style: null };
        obj[0] = emptySlot.emptySlot;
        const _HermesInternal = HermesInternal;
        return closure_1_7(_undefined2, obj, "none:" + index);
      } else {
        const locked = tmp2.locked;
        obj = { index: null, reducedMotion: null, children: null };
        obj[0] = index;
        obj[1] = closure_0;
        obj1 = {
          emoji: null,
          disabled: null,
          onPressEmoji: null,
          onLongPressEmoji: null,
          animateEmoji: null,
          isSectionNitroLocked: false,
        };
        obj1[0] = tmp2.emoji;
        obj1[1] = locked;
        obj1[2] = locked ? closure_2 : closure_1;
        if (locked) {
          let openEmojiActionSheet = closure_2;
        } else {
          openEmojiActionSheet = tmp8(tmp9[10]).openEmojiActionSheet;
        }
        obj1[3] = openEmojiActionSheet;
        obj1[4] = !closure_0;
        obj[2] = closure_1_7(closure_1_0(closure_1_2[9]).EmojiItem, obj1);
        return closure_1_7(
          closure_1_0(closure_1_2[7]).EmojiEntranceAnimation,
          obj,
          closure_1_0(closure_1_2[7]).getEmojiEntranceKey(tmp, index),
        );
      }
    }),
  });
}
function renderEmojiSuggestionBarLargeItem(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return <EmojiSuggestionBarLargeAnimated key={arg0} />;
}
let c4 = importAllResult;
let closure_8 = createCacheKey.createStyles((arg0) => {
  let obj = { containerLargeWrapper: { overflow: "hidden" }, containerLarge: null, emptySlot: null };
  let str = "space-between";
  if (arg0) {
    str = "flex-start";
  }
  obj = {
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
    PX_6 = ThemesDefault.space.PX_6;
  }
  obj[4] = PX_6;
  obj[5] = ThemesDefault.space.PX_8;
  obj[7] = ThemesDefault.colors.BORDER_MUTED;
  obj[1] = obj;
  obj = { width: IMAGE_SIZE, height: IMAGE_SIZE };
  obj[2] = obj;
  return obj;
});
let closure_9 = {
  code: "function EmojiSuggestionBarLargeTsx1(){const{heightSv}=this.__closure;return{height:heightSv.get()};}",
};
const forwardRefResult = importAllResult.forwardRef((merged, ref) => {
  let obj = unlockedEmojis(reducedMotion[7]);
  const emojiSuggestionBarState = obj.useEmojiSuggestionBarState(
    merged,
    unlockedEmojis(reducedMotion[7]).MAX_SUGGESTIONS_LARGE,
    ref,
  );
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const memo = handlePressEmojiUnavailable.useMemo(
    () => ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable }),
    items,
  );
  obj = { item: memo, renderItem: renderEmojiSuggestionBarLargeItem };
  return jsx(unlockedEmojis(reducedMotion[11]).TransitionItem, {
    item: memo,
    renderItem: renderEmojiSuggestionBarLargeItem,
  });
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export const EmojiSuggestionBarLarge = forwardRefResult;
