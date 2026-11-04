// === Module 14207: EmojiSuggestionBarUtils ===

// Module 14207 (EmojiSuggestionBarUtils)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5207 */;
import timing_timing from "timing/timing" /* 5378 */;
import spring_spring from "spring/spring" /* 5771 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9935 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const require = globalThis.__r;

require = fn;
const UpsellTypes = fn(1072).UpsellTypes;
const jsx = fn(21).jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: fn(1187).STANDARD_EASING };
let obj2 = { duration: 133, dampingRatio: 0.7 };
let closure_11 = { code: "(function EmojiSuggestionBarUtilsTsx1(){let[progress]=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};})" };
let closure_12 = { code: "(function EmojiSuggestionBarUtilsTsx2(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished){scheduleOnRN(cleanUp);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export { SUGGESTION_BAR_HEIGHT_TIMING };
export function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound) {
  let length = unlockedEmojis.length;
  let length2 = lockedEmojis.length;
  if (length + length2 > bound) {
    const _Math2 = Math;
    const _Math3 = Math;
    bound = Math.min(Math.ceil(bound / 2), unlockedEmojis.length);
    const _Math4 = Math;
    const diff = bound - bound;
    const bound1 = Math.min(bound - bound, lockedEmojis.length);
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
  items = [...substr.map((emoji) => ({ emoji, locked: false }))];
  const substr1 = lockedEmojis.slice(0, length2);
  HermesBuiltin.arraySpread(substr1.map((emoji) => ({ emoji, locked: true })), tmp);
  return items;
}
export function getEmojiIdentity(id) {
  let surrogates = id.id;
  if (surrogates == null) {
    surrogates = id.surrogates;
  }
  return surrogates;
}
export function getEmojiEntranceKey(c0, index) {
  const mapped = c0.map((emoji) => {
    emoji = emoji.emoji;
    let surrogates = emoji.id;
    if (surrogates == null) {
      surrogates = emoji.surrogates;
    }
    return surrogates;
  });
  const joined = mapped.join(",");
  let emoji = c0[index].emoji;
  let surrogates = emoji.id;
  if (surrogates == null) {
    surrogates = emoji.surrogates;
  }
  return "" + joined + ":" + surrogates + ":" + index;
}
export const ITEM_ENTRANCE_SPRING_CONFIG = obj2;
export function EmojiEntranceAnimation(children) {
  const index = children.index;
  _require = index;
  const reducedMotion = children.reducedMotion;
  let sharedValue;
  sharedValue = require("module_1652").useSharedValue(0);
  items = [sharedValue, index, reducedMotion];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * c0;
    }
    obj2 = spring_spring;
    const result = sharedValue.set(_mod1652.withDelay(num, obj2.withSpring(1, obj2)));
  }, items);
  let obj = require("module_1652");
  const tmp = sharedValue;
  const items1 = [closure_11, sharedValue];
  _require = undefined;
  [tmp4, tmp5] = items1;
  class EmojiSuggestionBarUtilsTsx1 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp5];
  EmojiSuggestionBarUtilsTsx1.__closure = items2;
  EmojiSuggestionBarUtilsTsx1.__workletHash = 4604680595350;
  EmojiSuggestionBarUtilsTsx1.__initData = tmp4;
  const style = require("module_1652").useAnimatedStyle(EmojiSuggestionBarUtilsTsx1);
  return jsx(reducedMotion(tmp[6]).View, { style, children: children.children });
}
export function useSuggestionBarHeight(transitionState, cleanUp, arg2, onOccupiedHeightChange) {
  _require = transitionState;
  closure_1 = cleanUp;
  dependencyMap = arg2;
  closure_3 = onOccupiedHeightChange;
  const sharedValue = require("module_1652").useSharedValue(0);
  items = [transitionState, sharedValue, cleanUp, arg2, onOccupiedHeightChange];
  const effect = sharedValue.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      const tmpResult = timing_timing;
      items = [closure_12, _mod1705.scheduleOnRN, closure_1];
      c0 = undefined;
      c1 = undefined;
      [tmp19, tmp20, tmp21] = items;
      class EmojiSuggestionBarUtilsTsx2 {
        constructor(arg0) {
          if (arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp20, tmp21];
      EmojiSuggestionBarUtilsTsx2.__closure = items1;
      EmojiSuggestionBarUtilsTsx2.__workletHash = 10457533943450;
      EmojiSuggestionBarUtilsTsx2.__initData = tmp19;
      const result = sharedValue.set(tmpResult.withTiming(0, obj, "respect-motion-settings", EmojiSuggestionBarUtilsTsx2));
    } else {
      if (closure_3 != null) {
        tmp3(closure_2);
      }
      const result1 = sharedValue.set(timing_timing.withTiming(closure_2, obj));
      const tmpResult2 = timing_timing;
    }
  }, items);
  return sharedValue;
}
export function useEmojiSuggestionBarState(merged, MAX_SUGGESTIONS_LARGE, minUnlockedEmojis, ref) {
  const chatInputRef = merged.chatInputRef;
  const chatInputStateRef = merged.chatInputStateRef;
  let analyticsLocations;
  let setData;
  let setDataImmediate;
  let unlockedEmojis;
  let queryEnd;
  let clear;
  ({ channel, suppressed } = merged);
  const tmp = analyticsLocations(setData.useState(clear), 2);
  const first = tmp[0];
  ({ focused, text } = first);
  dependencyMap = text;
  ({ selectionStart, selectionEnd } = first);
  items = [setDataImmediate];
  const stateFromStores = chatInputRef(504).useStateFromStores(items, () => setDataImmediate.useReducedMotion);
  obj2 = chatInputRef(504);
  analyticsLocations = chatInputStateRef(7462)(chatInputStateRef(7487).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp5 = chatInputStateRef(14172)(tmp[1], 16);
  setData = tmp5.setData;
  setDataImmediate = tmp5.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = setData.useImperativeHandle(ref, () => ({ setData }), items1);
  let obj3 = { channel, text, selectionStart, selectionEnd, enabled: null, maxCount: null, minUnlockedEmojis: null };
  const tmp4 = chatInputStateRef(7462);
  if (focused) {
    focused = !suppressed;
  }
  obj3.enabled = focused;
  obj3.maxCount = MAX_SUGGESTIONS_LARGE;
  obj3.minUnlockedEmojis = minUnlockedEmojis;
  const tmp7Result = chatInputStateRef(14208)(obj3);
  unlockedEmojis = tmp7Result.unlockedEmojis;
  queryEnd = tmp7Result.queryEnd;
  clear = tmp7Result.clear;
  const items2 = [chatInputRef, chatInputStateRef, text, queryEnd, clear, setDataImmediate, unlockedEmojis];
  const items3 = [analyticsLocations];
  const callback = obj.useCallback((emoji) => {
    if (queryEnd > ref.current.text.length) {
      clear();
    } else {
      let str2 = " ";
      let str = " ";
      if (obj4.test(_undefined.charAt(queryEnd - 1))) {
        str = "";
      }
      if (obj.test(_undefined.charAt(queryEnd))) {
        str2 = "";
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + str + chatInputStateRef(_undefined[16])(emoji) + str2;
      const current = combined.current;
      obj2 = { location: queryEnd, length: 0, text: combined, editId: null };
      const editId = tmp2.current.editId;
      obj2.editId = editId;
      current.replaceRange(obj2);
      setDataImmediate((text) => {
        const obj = {};
        const merged = Object.assign(text);
        text = text.text;
        const text1 = text.text;
        const sum = text.slice(0, queryEnd) + combined;
        obj.text = sum + text1.slice(queryEnd);
        obj.selectionStart = selectionEnd;
        obj.selectionEnd = selectionEnd;
        return obj;
      });
      clear();
      const obj3 = { emoji, displayedSuggestions: unlockedEmojis };
      chatInputStateRef(_undefined[17])(obj3);
      obj = /\s/;
      obj4 = /\s/;
      ref = queryEnd + combined.length;
    }
  }, items2);
  const tmp7 = chatInputStateRef(14208);
  return {
    unlockedEmojis,
    lockedEmojis: tmp7Result.lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: callback,
    handlePressEmojiUnavailable: setData.useCallback((animated) => {
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert({ initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI, analyticsLocations });
      obj2 = { initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI, analyticsLocations };
    }, items3)
  };
}