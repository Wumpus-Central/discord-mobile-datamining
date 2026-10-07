// discord_app/modules/chat_input/native/EmojiSuggestionBarLarge.tsx
import c from "../../../../_runtime/00576_c.js";
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
function renderEmojiSuggestionBarLargeItem(key, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return <closure_11 key={key} />;
}
let View = fn(17).View;
const IMAGE_SIZE = fn(9882).IMAGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
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
const __initData2 = {
  code: "function EmojiSuggestionBarLargeTsx2(){const{heightSv}=this.__closure;return{height:heightSv.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({
        reducedMotion: require,
        handlePress: importDefault,
        handlePressEmojiUnavailable: dependencyMap,
        unlockedEmojis,
        lockedEmojis,
        transitionState,
        cleanUp,
      } = arg0);
      const tmp5 = _slicedToArray(noop.useState(0), 2);
      _slicedToArray = tmp5[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(nativeEvent) {
          closure_3(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const truncResult = Math.trunc(tmp5[0] / (suggestionBarHeight + nativeDefault.space.PX_6));
      const bound = Math.min(truncResult, 11);
      const tmp10 = closure_8(truncResult > 11);
      noop = tmp10;
      const sortEmojisForDisplayResult = EmojiSuggestionBarUtils.sortEmojisForDisplay(
        unlockedEmojis,
        lockedEmojis,
        bound,
      );
      View = sortEmojisForDisplayResult;
      let length = bound;
      if (truncResult > 11) {
        length = sortEmojisForDisplayResult.length;
      }
      const tmpResult = EmojiSuggestionBarUtils;
      suggestionBarHeight = EmojiSuggestionBarUtils.useSuggestionBarHeight(transitionState, cleanUp, 52);
      const tmpResult3 = EmojiSuggestionBarUtils;
      class M {
        constructor() {
          obj = { height: closure_6.get() };
          return obj;
        }
      }
      M.__closure = { heightSv: suggestionBarHeight };
      M.__workletHash = 5553872738815;
      M.__initData = __initData;
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(M);
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
        const tmp19 = (
          <View style={tmp10.containerLarge} onLayout={first}>
            {arr}
          </View>
        );
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
    }
  : (arg0) => {
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
      const sortEmojisForDisplayResult = EmojiSuggestionBarUtils.sortEmojisForDisplay(
        unlockedEmojis,
        lockedEmojis,
        length,
      );
      c5 = sortEmojisForDisplayResult;
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
    };
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export const EmojiSuggestionBarLarge = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, arg1) => {
        const cResult = c.c(8);
        let num = 3;
        const emojiSuggestionBarState = EmojiSuggestionBarUtils.useEmojiSuggestionBarState(
          arg0,
          EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE,
          3,
          arg1,
        );
        ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable } =
          emojiSuggestionBarState);
        let num2 = 0;
        if (0 === unlockedEmojis.length) {
          if (num2 === lockedEmojis.length) {
            if (cResult[6] !== undefined) {
              const obj3 = { item: undefined, renderItem: renderEmojiSuggestionBarLargeItem };
              const tmp10 = jsx(native.TransitionItem, {
                item: undefined,
                renderItem: renderEmojiSuggestionBarLargeItem,
              });
              cResult[6] = undefined;
              cResult[7] = tmp10;
              let tmp7 = tmp10;
            } else {
              tmp7 = cResult[7];
            }
            return tmp7;
          }
        }
        if (cResult[0] === handlePress) {
          if (cResult[1] === handlePressEmojiUnavailable) {
            if (cResult[2] === lockedEmojis) {
              if (cResult[3] === reducedMotion) {
              }
            }
          }
        }
        const obj4 = { unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable };
        cResult[num2] = handlePress;
        cResult[1] = handlePressEmojiUnavailable;
        num2 = 2;
        cResult[2] = lockedEmojis;
        cResult[num] = reducedMotion;
        cResult[4] = unlockedEmojis;
        num = 5;
        cResult[5] = obj4;
      }
    : (arg0, arg1) => {
        const emojiSuggestionBarState = EmojiSuggestionBarUtils.useEmojiSuggestionBarState(
          arg0,
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
      },
);
