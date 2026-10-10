// === Module 12137: EmojiSuggestionBarLarge ===

// Module 12137 (EmojiSuggestionBarLarge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4827 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9513 */;
import openEmojiActionSheet2 from "openEmojiActionSheet" /* 9539 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 12138 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function renderEmojiSuggestionBarLargeItem(key, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return <closure_13 key={key} />;
}
let closure_3 = ["ref"];
const View = fn(17).View;
const IMAGE_SIZE = fn(9429).IMAGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_10 = createStyles.createStyles((arg0) => {
  const obj = { containerLargeWrapper: { overflow: "hidden" }, containerLarge: null, emptySlot: null };
  let str = "space-between";
  if (arg0) {
    str = "flex-start";
  }
  const obj2 = { height: 52, flexDirection: "row", alignItems: "center", justifyContent: str, gap: null, padding: null, borderBottomWidth: 1, borderBottomColor: null };
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
const __initData = { code: "function EmojiSuggestionBarLargeTsx1(){const{heightSv}=this.__closure;return{height:heightSv.get()};}" };
const __initData2 = { code: "function EmojiSuggestionBarLargeTsx2(){const{heightSv}=this.__closure;return{height:heightSv.get()};}" };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiSuggestionBarLargeAnimated(arg0) {
  const cResult = c.c(12);
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap, unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  const tmp5 = _slicedToArray(suggestionBarHeight.useState(0), 2);
  closure_3 = tmp5[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      closure_3(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const truncResult = Math.trunc(tmp5[0] / (IMAGE_SIZE + nativeDefault.space.PX_6));
  const bound = Math.min(truncResult, 11);
  const tmp10 = closure_10(truncResult > 11);
  const emptySlot = tmp10;
  const sortEmojisForDisplayResult = EmojiSuggestionBarUtils.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound);
  _slicedToArray = sortEmojisForDisplayResult;
  let length = bound;
  if (truncResult > 11) {
    length = sortEmojisForDisplayResult.length;
  }
  const tmpResult = EmojiSuggestionBarUtils;
  suggestionBarHeight = EmojiSuggestionBarUtils.useSuggestionBarHeight(transitionState, cleanUp, 52);
  const tmpResult3 = EmojiSuggestionBarUtils;
  const fn2 = function w() {
    return { height: suggestionBarHeight.get() };
  };
  fn2.__closure = { heightSv: suggestionBarHeight };
  fn2.__workletHash = 5553872738815;
  fn2.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn2);
  const tmp4Result = ReanimatedRexportDefault;
  if (cResult[1] === animatedStyle) {
    if (cResult[2] === tmp10.containerLargeWrapper) {
      let tmp14 = cResult[3];
    }
    const _Array = Array;
    let obj2 = { length };
    const arr = Array.from(obj2, (arg0, index) => {
      if (null == sortEmojisForDisplayResult[index]) {
        const obj = { style: emptySlot.emptySlot };
        const _HermesInternal = HermesInternal;
        return <View key={"none:" + index} style={emptySlot.emptySlot} />;
      } else {
        const locked = tmp2.locked;
        const obj2 = { index, reducedMotion, children: null };
        const obj3 = { emoji: tmp2.emoji, disabled: locked, onPressEmoji: locked ? dependencyMap : importDefault, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false };
        if (locked) {
          let openEmojiActionSheet = dependencyMap;
        } else {
          openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
        }
        obj3.onLongPressEmoji = openEmojiActionSheet;
        obj3.animateEmoji = !reducedMotion;
        obj2.children = jsx(EmojiPickerListRow.EmojiItem, { emoji: tmp2.emoji, disabled: locked, onPressEmoji: locked ? dependencyMap : importDefault, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false });
        return jsx(EmojiSuggestionBarUtils.EmojiEntranceAnimation, { index, reducedMotion, children: null }, EmojiSuggestionBarUtils.getEmojiEntranceKey(tmp, index));
      }
    });
    if (cResult[4] === View) {
      if (cResult[5] === tmp10.containerLarge) {
        if (cResult[6] === arr) {
          let tmp17 = cResult[7];
        }
        if (cResult[8] === tmp4Result.View) {
          if (cResult[9] === tmp14) {
            if (cResult[10] === tmp17) {
              let tmp20 = cResult[11];
            }
            return tmp20;
          }
        }
        let obj3 = { style: tmp14, children: tmp17 };
        const tmp22 = <tmp4Result.View style={tmp14}>{tmp17}</tmp4Result.View>;
        cResult[8] = tmp4Result.View;
        cResult[9] = tmp14;
        cResult[10] = tmp17;
        cResult[11] = tmp22;
        tmp20 = tmp22;
      }
    }
    const obj4 = { style: tmp10.containerLarge, onLayout: first, children: arr };
    const tmp19 = <View style={tmp10.containerLarge} onLayout={first}>{arr}</View>;
    cResult[4] = View;
    cResult[5] = tmp10.containerLarge;
    cResult[6] = arr;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  }
  const items = [tmp10.containerLargeWrapper, animatedStyle];
  cResult[1] = animatedStyle;
  cResult[2] = tmp10.containerLargeWrapper;
  cResult[3] = items;
  tmp14 = items;
  const tmpResult4 = ReanimatedRexport;
}) : (function EmojiSuggestionBarLargeAnimated(arg0) {
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap } = arg0);
  c3 = undefined;
  _slicedToArray = undefined;
  let suggestionBarHeight;
  ({ unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  [tmp4, c3] = suggestionBarHeight.useState(0);
  const callback = suggestionBarHeight.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const truncResult = Math.trunc(tmp4 / (IMAGE_SIZE + nativeDefault.space.PX_6));
  let length = Math.min(truncResult, 11);
  const tmp8 = closure_10(truncResult > 11);
  const emptySlot = tmp8;
  const tmp3 = _slicedToArray(suggestionBarHeight.useState(0), 2);
  const sortEmojisForDisplayResult = EmojiSuggestionBarUtils.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length);
  _slicedToArray = sortEmojisForDisplayResult;
  if (truncResult > 11) {
    length = sortEmojisForDisplayResult.length;
  }
  suggestionBarHeight = EmojiSuggestionBarUtils.useSuggestionBarHeight(transitionState, cleanUp, 52);
  const tmp9Result = EmojiSuggestionBarUtils;
  const fn = function _() {
    return { height: suggestionBarHeight.get() };
  };
  fn.__closure = { heightSv: suggestionBarHeight };
  fn.__workletHash = 16628636134044;
  fn.__initData = __initData2;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  let obj2 = { style: null, children: null };
  const items = [tmp8.containerLargeWrapper, animatedStyle];
  obj2.style = items;
  const tmp9Result2 = ReanimatedRexport;
  obj2.children = <View style={tmp8.containerLarge} onLayout={callback}>{Array.from({ length }, (arg0, index) => {
    if (null == _undefined2[index]) {
      const obj = { style: emptySlot.emptySlot };
      const _HermesInternal = HermesInternal;
      return <View key={"none:" + index} style={emptySlot.emptySlot} />;
    } else {
      const locked = tmp2.locked;
      const obj2 = { index, reducedMotion, children: null };
      const obj3 = { emoji: tmp2.emoji, disabled: locked, onPressEmoji: locked ? dependencyMap : importDefault, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false };
      if (locked) {
        let openEmojiActionSheet = dependencyMap;
      } else {
        openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
      }
      obj3.onLongPressEmoji = openEmojiActionSheet;
      obj3.animateEmoji = !reducedMotion;
      obj2.children = jsx(EmojiPickerListRow.EmojiItem, { emoji: tmp2.emoji, disabled: locked, onPressEmoji: locked ? dependencyMap : importDefault, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false });
      return jsx(EmojiSuggestionBarUtils.EmojiEntranceAnimation, { index, reducedMotion, children: null }, EmojiSuggestionBarUtils.getEmojiEntranceKey(tmp, index));
    }
  })}</View>;
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
});
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export const EmojiSuggestionBarLarge = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiSuggestionBarLarge(ref) {
  const cResult = c.c(11);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_3);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  let num4 = 3;
  const emojiSuggestionBarState = EmojiSuggestionBarUtils.useEmojiSuggestionBarState(tmp4, EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE, 3, tmp5);
  ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable } = emojiSuggestionBarState);
  if (0 === unlockedEmojis.length) {
    if (0 === lockedEmojis.length) {
      if (cResult[9] !== undefined) {
        const obj2 = { item: undefined, renderItem: renderEmojiSuggestionBarLargeItem };
        const tmp15 = jsx(native.TransitionItem, { item: undefined, renderItem: renderEmojiSuggestionBarLargeItem });
        cResult[9] = undefined;
        cResult[10] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[10];
      }
      return tmp12;
    }
  }
  if (cResult[3] === handlePress) {
    if (cResult[4] === handlePressEmojiUnavailable) {
      if (cResult[5] === lockedEmojis) {
        if (cResult[6] === reducedMotion) {
        }
      }
    }
  }
  const obj3 = { unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable };
  cResult[num4] = handlePress;
  cResult[4] = handlePressEmojiUnavailable;
  cResult[5] = lockedEmojis;
  cResult[6] = reducedMotion;
  cResult[7] = unlockedEmojis;
  num4 = 8;
  cResult[8] = obj3;
  const tmpResult = EmojiSuggestionBarUtils;
}) : (function EmojiSuggestionBarLarge(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const emojiSuggestionBarState = EmojiSuggestionBarUtils.useEmojiSuggestionBarState(merged, EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE, 3, ref.ref);
  const unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const memo = noop.useMemo(() => ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable }), items);
  return jsx(native.TransitionItem, { item: memo, renderItem: renderEmojiSuggestionBarLargeItem });
});