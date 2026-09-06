// discord_app/modules/chat_input/native/EmojiSuggestionBarUtils.tsx
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const UpsellTypes = fn(1074).UpsellTypes;
const jsx = fn(21).jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: fn(1178).STANDARD_EASING };
let closure_10 = { duration: 200, dampingRatio: 0.7 };
const __initData = {
  code: "function EmojiSuggestionBarUtilsTsx1(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}",
};
let closure_12 = {
  code: "function EmojiSuggestionBarUtilsTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export { SUGGESTION_BAR_HEIGHT_TIMING };
export const sortEmojisForDisplay = function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length) {
  length = unlockedEmojis.length;
  let length2 = lockedEmojis.length;
  if (length + length2 > length) {
    const _Math2 = Math;
    const _Math3 = Math;
    const bound = Math.min(Math.ceil(length / 2), unlockedEmojis.length);
    const _Math4 = Math;
    const diff = length - bound;
    const bound1 = Math.min(length - bound, lockedEmojis.length);
    const diff1 = diff - bound1;
    length2 = bound1;
    length = bound;
    if (diff1 > 0) {
      const _Math = Math;
      length = Math.min(bound + diff1, unlockedEmojis.length);
      length2 = bound1;
    }
  }
  const substr = unlockedEmojis.slice(0, length);
  const items = [...substr.map((emoji) => ({ emoji, locked: false }))];
  const substr1 = lockedEmojis.slice(0, length2);
  HermesBuiltin.arraySpread(
    substr1.map((emoji) => ({ emoji, locked: true })),
    tmp,
  );
  return items;
};
export const getEmojiEntranceKey = function getEmojiEntranceKey(displayEmojis, index) {
  const mapped = displayEmojis.map((emoji) => {
    emoji = emoji.emoji;
    let surrogates = emoji.id;
    if (surrogates == null) {
      surrogates = emoji.surrogates;
    }
    return surrogates;
  });
  const joined = mapped.join(",");
  let emoji = displayEmojis[index].emoji;
  let surrogates = emoji.id;
  if (surrogates == null) {
    surrogates = emoji.surrogates;
  }
  return "" + joined + ":" + surrogates + ":" + index;
};
export const EmojiEntranceAnimation = function EmojiEntranceAnimation(children) {
  const index = children.index;
  const reducedMotion = children.reducedMotion;
  let sharedValue;
  sharedValue = index(sharedValue[6]).useSharedValue(0);
  let items = [sharedValue, index, reducedMotion];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * index;
    }
    obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withDelay(num, spring.withSpring(1, closure_10)));
  }, items);
  obj = index(sharedValue[6]);
  const fn = function c() {
    obj = { opacity: sharedValue.get(), transform: null };
    obj = { scale: sharedValue.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 4132686130287;
  fn.__initData = __initData;
  const style = index(sharedValue[6]).useAnimatedStyle(fn);
  return jsx(reducedMotion(sharedValue[6]).View, { style, children: children.children });
};
export const useSuggestionBarHeight = function useSuggestionBarHeight(
  transitionState,
  cleanUp,
  arg2,
  onOccupiedHeightChange,
) {
  _require = transitionState;
  dependencyMap = arg2;
  closure_3 = onOccupiedHeightChange;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const items = [transitionState, sharedValue, cleanUp, arg2, onOccupiedHeightChange];
  const effect = sharedValue.useEffect(() => {
    if (closure_0 === native.TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      let tmpResult = tmp(4561);
      const fn = function n(arg0) {
        if (arg0) {
          closure_0(dependencyMap[6]).runOnJS(cleanUp)();
          obj = closure_0(dependencyMap[6]);
        }
      };
      const __closure = { runOnJS: tmp(4296).runOnJS, cleanUp };
      fn.__closure = __closure;
      fn.__workletHash = 15923583203906;
      fn.__initData = __initData;
      const result = sharedValue.set(tmpResult.withTiming(0, __closure, "respect-motion-settings", fn));
    } else {
      if (closure_3 != null) {
        tmp3(dependencyMap);
      }
      tmpResult = tmp(4561);
      const result1 = sharedValue.set(tmpResult.withTiming(dependencyMap, __closure));
    }
  }, items);
  return sharedValue;
};
export const useEmojiSuggestionBarState = function useEmojiSuggestionBarState(merged, MAX_SUGGESTIONS_LARGE, ref) {
  const chatInputRef = merged.chatInputRef;
  const chatInputStateRef = merged.chatInputStateRef;
  let setData;
  let setDataImmediate;
  let queryStart;
  let queryEnd;
  let clear;
  ({ channel, suppressed } = merged);
  const tmp = setDataImmediate(queryStart.useState(closure_8), 2);
  const first = tmp[0];
  let focused = first.focused;
  ({ text, selectionStart, selectionEnd } = first);
  const items = [queryEnd];
  const stateFromStores = chatInputRef(setData[10]).useStateFromStores(items, () => queryEnd.useReducedMotion);
  const tmp4 = chatInputStateRef(setData[11])(tmp[1], 16);
  setData = tmp4.setData;
  setDataImmediate = tmp4.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = queryStart.useImperativeHandle(ref, () => ({ setData }), items1);
  obj = { channel, text, selectionStart, selectionEnd, enabled: null, maxCount: null };
  const obj2 = chatInputRef(setData[10]);
  if (focused) {
    focused = !suppressed;
  }
  obj.enabled = focused;
  obj.maxCount = MAX_SUGGESTIONS_LARGE;
  const tmp6Result = chatInputStateRef(setData[12])(obj);
  queryStart = tmp6Result.queryStart;
  queryEnd = tmp6Result.queryEnd;
  clear = tmp6Result.clear;
  obj = {
    unlockedEmojis: tmp6Result.unlockedEmojis,
    lockedEmojis: tmp6Result.lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: null,
    handlePressEmojiUnavailable: obj.useCallback((animated) => {
      chatInputStateRef(setData[14]);
      obj = { initialUpsellKey: animated.animated ? tmp.ANIMATED_EMOJI : tmp.GLOBAL_EMOJI };
      const result = obj.handleShowUpsellAlert(obj);
    }, []),
  };
  const items2 = [chatInputRef, chatInputStateRef, queryStart, queryEnd, clear, setDataImmediate];
  obj.handlePress = obj.useCallback((arg0) => {
    const combined = "" + chatInputStateRef(setData[13])(arg0) + " ";
    const current = combined.current;
    obj = { location: queryStart, length: queryEnd - queryStart, text: combined, editId: null };
    const editId = ref.current.editId;
    obj.editId = editId;
    current.replaceRange(obj);
    setDataImmediate((text) => {
      obj = {};
      const merged = Object.assign(text);
      text = text.text;
      const text1 = text.text;
      const sum = text.slice(0, queryStart) + combined;
      obj.text = sum + text1.slice(queryEnd);
      obj.selectionStart = selectionEnd;
      obj.selectionEnd = selectionEnd;
      return obj;
    });
    clear();
  }, items2);
  return obj;
};
