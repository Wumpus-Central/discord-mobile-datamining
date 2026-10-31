// discord_app/modules/chat_input/native/EmojiSuggestionBarUtils.tsx
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const UpsellTypes = fn(1072).UpsellTypes;
const jsx = fn(21).jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: fn(1187).STANDARD_EASING };
let obj2 = { duration: 200, dampingRatio: 0.7 };
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
export function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length) {
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
}
export function getEmojiIdentity(id) {
  let surrogates = id.id;
  if (surrogates == null) {
    surrogates = id.surrogates;
  }
  return surrogates;
}
export function getEmojiEntranceKey(displayEmojis, index) {
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
}
export const ITEM_ENTRANCE_SPRING_CONFIG = obj2;
export function EmojiEntranceAnimation(children) {
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
    obj2 = spring;
    const result = sharedValue.set(ReanimatedRexport.withDelay(num, obj2.withSpring(1, obj2)));
  }, items);
  obj = index(sharedValue[6]);
  const fn = function u() {
    obj = { opacity: sharedValue.get(), transform: null };
    const items = [{ scale: sharedValue.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 4132686130287;
  fn.__initData = __initData;
  const style = index(sharedValue[6]).useAnimatedStyle(fn);
  return jsx(reducedMotion(sharedValue[6]).View, { style, children: children.children });
}
export function useSuggestionBarHeight(
  transitionState,
  cleanUp,
  CONTAINER_SMALL_WRAPPER_HEIGHT,
  onOccupiedHeightChange,
) {
  _require = transitionState;
  dependencyMap = CONTAINER_SMALL_WRAPPER_HEIGHT;
  closure_3 = onOccupiedHeightChange;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const items = [transitionState, sharedValue, cleanUp, CONTAINER_SMALL_WRAPPER_HEIGHT, onOccupiedHeightChange];
  const effect = sharedValue.useEffect(() => {
    if (closure_0 === native.TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      const tmpResult = timing;
      const fn = function n(arg0) {
        if (arg0) {
          closure_0(dependencyMap[6]).runOnJS(cleanUp)();
          obj = closure_0(dependencyMap[6]);
        }
      };
      const __closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = __closure;
      fn.__workletHash = 15923583203906;
      fn.__initData = __initData;
      const result = sharedValue.set(tmpResult.withTiming(0, __closure, "respect-motion-settings", fn));
    } else {
      if (closure_3 != null) {
        tmp3(dependencyMap);
      }
      const result1 = sharedValue.set(timing.withTiming(dependencyMap, __closure));
      const tmpResult2 = timing;
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
  const items = [setDataImmediate];
  const stateFromStores = chatInputRef(504).useStateFromStores(items, () => setDataImmediate.useReducedMotion);
  obj2 = chatInputRef(504);
  analyticsLocations = chatInputStateRef(7326)(chatInputStateRef(7351).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp5 = chatInputStateRef(13940)(tmp[1], 16);
  setData = tmp5.setData;
  setDataImmediate = tmp5.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = setData.useImperativeHandle(ref, () => ({ setData }), items1);
  let obj3 = { channel, text, selectionStart, selectionEnd, enabled: null, maxCount: null, minUnlockedEmojis: null };
  const tmp4 = chatInputStateRef(7326);
  if (focused) {
    focused = !suppressed;
  }
  obj3.enabled = focused;
  obj3.maxCount = MAX_SUGGESTIONS_LARGE;
  obj3.minUnlockedEmojis = minUnlockedEmojis;
  const tmp7Result = chatInputStateRef(13976)(obj3);
  unlockedEmojis = tmp7Result.unlockedEmojis;
  queryEnd = tmp7Result.queryEnd;
  clear = tmp7Result.clear;
  const items2 = [chatInputRef, chatInputStateRef, text, queryEnd, clear, setDataImmediate, unlockedEmojis];
  const items3 = [analyticsLocations];
  const callback = obj.useCallback((emoji) => {
    let str2 = " ";
    let str3 = " ";
    if (obj.test(_undefined.charAt(queryEnd - 1))) {
      str3 = "";
    }
    if (obj2.test(_undefined.charAt(queryEnd))) {
      str2 = "";
    }
    const combined = "" + str3 + chatInputStateRef(_undefined[15])(emoji) + str2;
    const current = combined.current;
    const obj3 = { location: queryEnd, length: 0, text: combined, editId: null };
    const editId = ref.current.editId;
    obj3.editId = editId;
    current.replaceRange(obj3);
    setDataImmediate((text) => {
      obj = {};
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
    chatInputStateRef(_undefined[16])({ emoji, displayedSuggestions: unlockedEmojis });
    obj = /\s/;
    obj2 = /\s/;
    const obj4 = { emoji, displayedSuggestions: unlockedEmojis };
    ref = queryEnd + combined.length;
  }, items2);
  const tmp7 = chatInputStateRef(13976);
  return {
    unlockedEmojis,
    lockedEmojis: tmp7Result.lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: callback,
    handlePressEmojiUnavailable: setData.useCallback((animated) => {
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert({
        initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI,
        analyticsLocations,
      });
      obj2 = {
        initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI,
        analyticsLocations,
      };
    }, items3),
  };
}
