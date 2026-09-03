// === Module 12226: MAX_SUGGESTIONS_LARGE ===

// Module 12226 (MAX_SUGGESTIONS_LARGE)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { UpsellTypes } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
let obj = { duration: 250, easing: require("Button").STANDARD_EASING };
let closure_10 = { duration: 200, dampingRatio: 0.7 };
let closure_11 = { code: "function EmojiSuggestionBarUtilsTsx1(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}" };
let closure_12 = { code: "function EmojiSuggestionBarUtilsTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
let result = require("set").fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export const SUGGESTION_BAR_HEIGHT_TIMING = obj;
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
  HermesBuiltin.arraySpread(substr1.map((emoji) => ({ emoji, locked: true })), tmp);
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
  const effect = React.useEffect(() => {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * index;
    }
    obj = index(sharedValue[6]);
    const result = sharedValue.set(obj.withDelay(num, index(sharedValue[7]).withSpring(1, closure_1_10)));
  }, items);
  obj = index(sharedValue[6]);
  const fn = function c() {
    obj = { opacity: sharedValue.get(), transform: null };
    obj = { scale: sharedValue.get() };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 4132686130287;
  fn.__initData = closure_11;
  const style = index(sharedValue[6]).useAnimatedStyle(fn);
  return jsx(reducedMotion(sharedValue[6]).View, { style, children: children.children });
};
export const useSuggestionBarHeight = function useSuggestionBarHeight(transitionState, cleanUp, closure_6, onOccupiedHeightChange) {
  const _require = transitionState;
  closure_1 = cleanUp;
  dependencyMap = closure_6;
  closure_3 = onOccupiedHeightChange;
  const sharedValue = _require(4217).useSharedValue(0);
  const items = [transitionState, sharedValue, cleanUp, closure_6, onOccupiedHeightChange];
  const effect = sharedValue.useEffect(() => {
    if (transitionState === transitionState(table[8]).TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      let tmpResult = tmp(tmp2[9]);
      const fn = function n(arg0) {
        if (arg0) {
          closure_1_0(closure_1_2[6]).runOnJS(closure_1)();
          obj = closure_1_0(closure_1_2[6]);
        }
      };
      obj = { runOnJS: null, cleanUp: null };
      obj[0] = tmp(tmp2[6]).runOnJS;
      obj[1] = closure_1;
      fn.__closure = obj;
      fn.__workletHash = 15923583203906;
      fn.__initData = closure_1_12;
      const result = sharedValue.set(tmpResult.withTiming(0, closure_1_9, "respect-motion-settings", fn));
    } else {
      if (closure_3 != null) {
        tmp3(table);
      }
      tmpResult = tmp(tmp2[9]);
      const result1 = sharedValue.set(tmpResult.withTiming(table, closure_1_9));
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
  obj = queryStart;
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
  obj[4] = focused;
  obj[5] = MAX_SUGGESTIONS_LARGE;
  const tmp6Result = chatInputStateRef(setData[12])(obj);
  queryStart = tmp6Result.queryStart;
  queryEnd = tmp6Result.queryEnd;
  clear = tmp6Result.clear;
  obj = {
    unlockedEmojis: tmp6Result.unlockedEmojis,
    lockedEmojis: tmp6Result.lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: obj.useCallback((arg0) => {
      const combined = "" + chatInputStateRef(setData[13])(arg0) + " ";
      const current = combined.current;
      obj = { location: queryStart, length: queryEnd - queryStart, text: combined, editId };
      editId = ref.current.editId;
      current.replaceRange(obj);
      setDataImmediate((text) => {
        obj = {};
        const merged = Object.assign(text);
        text = text.text;
        const text1 = text.text;
        const sum = text.slice(0, closure_1_4) + combined;
        obj.text = sum + text1.slice(closure_1_5);
        obj.selectionStart = closure_1;
        obj.selectionEnd = closure_1;
        return obj;
      });
      clear();
    }, items2),
    handlePressEmojiUnavailable: obj.useCallback((animated) => {
      obj = chatInputStateRef(setData[14]);
      obj = { initialUpsellKey: animated.animated ? tmp.ANIMATED_EMOJI : tmp.GLOBAL_EMOJI };
      const result = obj.handleShowUpsellAlert(obj);
    }, [])
  };
  items2 = [chatInputRef, chatInputStateRef, queryStart, queryEnd, clear, setDataImmediate];
  return obj;
};