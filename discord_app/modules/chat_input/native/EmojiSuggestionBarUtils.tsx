// === Module 12138: EmojiSuggestionBarUtils ===

// Module 12138 (EmojiSuggestionBarUtils)
import native from "native" /* 4827 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import spring from "spring" /* 5378 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
const UpsellTypes = fn(1085).UpsellTypes;
const jsx = fn(21).jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: fn(1200).STANDARD_EASING };
let obj2 = { duration: 200, dampingRatio: 0.7 };
const __initData = { code: "function EmojiSuggestionBarUtilsTsx1(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}" };
const __initData2 = { code: "function EmojiSuggestionBarUtilsTsx2(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}" };
fn(558);
let closure_13 = { code: "function EmojiSuggestionBarUtilsTsx3(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
let closure_14 = { code: "function EmojiSuggestionBarUtilsTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiEntranceAnimation(index) {
  const cResult = index(sharedValue[7]).c(8);
  index = index.index;
  const reducedMotion = index.reducedMotion;
  const children = index.children;
  obj = index(sharedValue[7]);
  const tmp = index;
  sharedValue = index(sharedValue[8]).useSharedValue(0);
  if (cResult[0] === index) {
    if (cResult[1] === sharedValue) {
      if (cResult[2] === reducedMotion) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      const fn2 = function f() {
        obj = { opacity: sharedValue.get(), transform: null };
        const items = [{ scale: sharedValue.get() }];
        obj.transform = items;
        return obj;
      };
      const obj3 = { progress: sharedValue };
      fn2.__closure = obj3;
      fn2.__workletHash = 4132686130287;
      fn2.__initData = __initData;
      const animatedStyle = tmp(tmp2[8]).useAnimatedStyle(fn2);
      if (cResult[5] === animatedStyle) {
        if (cResult[6] === children) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
      const obj4 = { style: animatedStyle, children };
      const tmp14 = jsx(reducedMotion(tmp2[8]).View, { style: animatedStyle, children });
      cResult[5] = animatedStyle;
      cResult[6] = children;
      cResult[7] = tmp14;
      tmp11 = tmp14;
      const tmpResult = tmp(tmp2[8]);
    }
  }
  const fn = function s() {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * index;
    }
    obj2 = spring;
    const result = sharedValue.set(ReanimatedRexport.withDelay(num, obj2.withSpring(1, obj2)));
  };
  let items = [sharedValue, index, reducedMotion];
  cResult[0] = index;
  cResult[1] = sharedValue;
  cResult[2] = reducedMotion;
  cResult[3] = fn;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn;
  obj2 = index(sharedValue[8]);
}) : (function EmojiEntranceAnimation(children) {
  const index = children.index;
  const reducedMotion = children.reducedMotion;
  let sharedValue;
  sharedValue = index(sharedValue[8]).useSharedValue(0);
  let items = [sharedValue, index, reducedMotion];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * index;
    }
    obj2 = spring;
    const result = sharedValue.set(ReanimatedRexport.withDelay(num, obj2.withSpring(1, obj2)));
  }, items);
  obj = index(sharedValue[8]);
  const fn = function u() {
    obj = { opacity: sharedValue.get(), transform: null };
    const items = [{ scale: sharedValue.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 13826443864972;
  fn.__initData = __initData2;
  const style = index(sharedValue[8]).useAnimatedStyle(fn);
  return jsx(reducedMotion(sharedValue[8]).View, { style, children: children.children });
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuggestionBarHeight(arg0, cleanUp, arg2, arg3) {
  const _require = arg0;
  dependencyMap = arg2;
  closure_3 = arg3;
  const cResult = require("c").c(7);
  obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  if (cResult[0] === cleanUp) {
    if (cResult[1] === arg2) {
      if (cResult[2] === arg3) {
        if (cResult[3] === arg0) {
          if (cResult[4] === sharedValue) {
            let tmp3 = cResult[5];
            let tmp4 = cResult[6];
          }
          const effect = sharedValue.useEffect(tmp3, tmp4);
          return sharedValue;
        }
      }
    }
  }
  let fn = function c() {
    if (closure_0 === native.TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      const tmpResult = timing;
      const fn = function n(arg0) {
        if (arg0) {
          closure_0(dependencyMap[8]).runOnJS(cleanUp)();
          obj = closure_0(dependencyMap[8]);
        }
      };
      const __closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = __closure;
      fn.__workletHash = 12392976434275;
      fn.__initData = __initData;
      const result = sharedValue.set(tmpResult.withTiming(0, __closure, "respect-motion-settings", fn));
    } else {
      if (closure_3 != null) {
        tmp3(dependencyMap);
      }
      const result1 = sharedValue.set(timing.withTiming(dependencyMap, __closure));
      const tmpResult2 = timing;
    }
  };
  const items = [arg0, sharedValue, cleanUp, arg2, arg3];
  cResult[0] = cleanUp;
  cResult[1] = arg2;
  cResult[2] = arg3;
  cResult[3] = arg0;
  cResult[4] = sharedValue;
  cResult[5] = fn;
  cResult[6] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function useSuggestionBarHeight(arg0, cleanUp, arg2, arg3) {
  const _require = arg0;
  dependencyMap = arg2;
  closure_3 = arg3;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const items = [arg0, sharedValue, cleanUp, arg2, arg3];
  const effect = sharedValue.useEffect(() => {
    if (closure_0 === native.TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      const tmpResult = timing;
      const fn = function n(arg0) {
        if (arg0) {
          closure_0(dependencyMap[8]).runOnJS(cleanUp)();
          obj = closure_0(dependencyMap[8]);
        }
      };
      const __closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = __closure;
      fn.__workletHash = 11444984222980;
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
});
function getEmojiIdentity(id) {
  let surrogates = id.id;
  if (surrogates == null) {
    surrogates = id.surrogates;
  }
  return surrogates;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export { SUGGESTION_BAR_HEIGHT_TIMING };
export const sortEmojisForDisplay = function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound) {
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
  const items = [...substr.map((emoji) => ({ emoji, locked: false }))];
  const substr1 = lockedEmojis.slice(0, length2);
  HermesBuiltin.arraySpread(substr1.map((emoji) => ({ emoji, locked: true })), tmp);
  return items;
};
export { getEmojiIdentity };
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
export const ITEM_ENTRANCE_SPRING_CONFIG = obj2;
export const EmojiEntranceAnimation = tmp2;
export const useSuggestionBarHeight = tmp3;
export const useEmojiSuggestionBarState = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiSuggestionBarState(chatInputStateRef, maxCount, minUnlockedEmojis, arg3) {
  const cResult = chatInputRef(setData[7]).c(26);
  ({ channel, chatInputRef } = chatInputStateRef);
  chatInputStateRef = chatInputStateRef.chatInputStateRef;
  const tmp4 = setDataImmediate(queryStart.useState(closure_8), 2);
  ({ focused, text, selectionStart, selectionEnd } = tmp4[0]);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [queryEnd];
    const fn = function _() {
      return queryEnd.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  obj = chatInputRef(setData[7]);
  obj2 = queryStart;
  const stateFromStores = chatInputRef(setData[12]).useStateFromStores(tmp5, tmp6);
  const tmp10 = chatInputStateRef(setData[13])(tmp4[1], 16);
  setData = tmp10.setData;
  setDataImmediate = tmp10.setDataImmediate;
  if (cResult[2] !== setData) {
    const fn2 = function k() {
      return { setData };
    };
    const items1 = [setData];
    cResult[2] = setData;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const imperativeHandle = obj2.useImperativeHandle(arg3, tmp11, tmp12);
  if (focused) {
    focused = !chatInputStateRef.suppressed;
  }
  if (cResult[5] === channel) {
    if (cResult[6] === maxCount) {
      if (cResult[7] === minUnlockedEmojis) {
        if (cResult[8] === selectionEnd) {
          if (cResult[9] === selectionStart) {
            if (cResult[10] === focused) {
              if (cResult[11] === text) {
                let tmp14 = cResult[12];
              }
              const tmp15 = chatInputStateRef(tmp2[14])(tmp14);
              ({ unlockedEmojis, lockedEmojis, queryStart } = tmp15);
              queryEnd = tmp15.queryEnd;
              const clear = tmp15.clear;
              if (cResult[13] === chatInputRef) {
                if (cResult[14] === chatInputStateRef) {
                  if (cResult[15] === clear) {
                    if (cResult[16] === queryEnd) {
                      if (cResult[17] === queryStart) {
                        if (cResult[18] === setDataImmediate) {
                          let tmp16 = cResult[19];
                        }
                        const _Symbol = Symbol;
                        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                          const fn3 = function q(animated) {
                            const result = chatInputStateRef(setData[16]).handleShowUpsellAlert({ initialUpsellKey: animated.animated ? clear.ANIMATED_EMOJI : clear.GLOBAL_EMOJI });
                            obj = chatInputStateRef(setData[16]);
                            obj2 = { initialUpsellKey: animated.animated ? clear.ANIMATED_EMOJI : clear.GLOBAL_EMOJI };
                          };
                          cResult[20] = fn3;
                          let tmp17 = fn3;
                        } else {
                          tmp17 = cResult[20];
                        }
                        if (cResult[21] === tmp16) {
                          if (cResult[22] === lockedEmojis) {
                            if (cResult[23] === stateFromStores) {
                              if (cResult[24] === unlockedEmojis) {
                                let tmp18 = cResult[25];
                              }
                              return tmp18;
                            }
                          }
                        }
                        const obj3 = { unlockedEmojis, lockedEmojis, reducedMotion: stateFromStores, handlePress: tmp16, handlePressEmojiUnavailable: tmp17 };
                        class H {
                          constructor(arg0) {
                            combined = "" + chatInputStateRef(setData[15])(chatInputStateRef) + " ";
                            closure_0 = combined;
                            current = closure_0.current;
                            obj = { location: queryStart, length: queryEnd - queryStart, text: combined, editId: null };
                            editId = closure_1.current.editId;
                            tmp = queryStart;
                            obj.editId = editId;
                            replaceRangeResult = current.replaceRange(obj);
                            closure_1 = tmp + combined.length;
                            tmp3 = setDataImmediate((text) => {
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
                            tmp4 = clear();
                            return;
                          }
                        }
                        cResult[21] = tmp16;
                        cResult[22] = lockedEmojis;
                        cResult[23] = stateFromStores;
                        cResult[24] = unlockedEmojis;
                        cResult[25] = obj3;
                        tmp18 = obj3;
                      }
                    }
                  }
                }
              }
              class H {
                constructor(arg0) {
                  combined = "" + chatInputStateRef(setData[15])(chatInputStateRef) + " ";
                  closure_0 = combined;
                  current = closure_0.current;
                  obj = { location: queryStart, length: queryEnd - queryStart, text: combined, editId: null };
                  editId = closure_1.current.editId;
                  tmp = queryStart;
                  obj.editId = editId;
                  replaceRangeResult = current.replaceRange(obj);
                  closure_1 = tmp + combined.length;
                  tmp3 = setDataImmediate((text) => {
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
                  tmp4 = clear();
                  return;
                }
              }
              cResult[13] = chatInputRef;
              cResult[14] = chatInputStateRef;
              cResult[15] = clear;
              cResult[16] = queryEnd;
              cResult[17] = queryStart;
              cResult[18] = setDataImmediate;
              cResult[19] = H;
              tmp16 = H;
            }
          }
        }
      }
    }
  }
  const obj4 = { channel, text, selectionStart, selectionEnd, enabled: focused, maxCount, minUnlockedEmojis };
  cResult[5] = channel;
  cResult[6] = maxCount;
  cResult[7] = minUnlockedEmojis;
  cResult[8] = selectionEnd;
  cResult[9] = selectionStart;
  cResult[10] = focused;
  cResult[11] = text;
  cResult[12] = obj4;
  tmp14 = obj4;
}) : (function useEmojiSuggestionBarState(chatInputRef, maxCount, minUnlockedEmojis, arg3) {
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  let setData;
  let setDataImmediate;
  let queryStart;
  let queryEnd;
  let clear;
  ({ channel, suppressed } = chatInputRef);
  const tmp = setDataImmediate(queryStart.useState(closure_8), 2);
  const first = tmp[0];
  let focused = first.focused;
  ({ text, selectionStart, selectionEnd } = first);
  const items = [queryEnd];
  const stateFromStores = chatInputRef(setData[12]).useStateFromStores(items, () => queryEnd.useReducedMotion);
  const tmp4 = chatInputStateRef(setData[13])(tmp[1], 16);
  setData = tmp4.setData;
  setDataImmediate = tmp4.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = queryStart.useImperativeHandle(arg3, () => ({ setData }), items1);
  const obj3 = { channel, text, selectionStart, selectionEnd, enabled: null, maxCount: null, minUnlockedEmojis: null };
  obj2 = chatInputRef(setData[12]);
  if (focused) {
    focused = !suppressed;
  }
  obj3.enabled = focused;
  obj3.maxCount = maxCount;
  obj3.minUnlockedEmojis = minUnlockedEmojis;
  const tmp6Result = chatInputStateRef(setData[14])(obj3);
  queryStart = tmp6Result.queryStart;
  queryEnd = tmp6Result.queryEnd;
  clear = tmp6Result.clear;
  const obj4 = {
    unlockedEmojis: tmp6Result.unlockedEmojis,
    lockedEmojis: tmp6Result.lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: null,
    handlePressEmojiUnavailable: queryStart.useCallback((animated) => {
      const result = chatInputStateRef(setData[16]).handleShowUpsellAlert({ initialUpsellKey: animated.animated ? clear.ANIMATED_EMOJI : clear.GLOBAL_EMOJI });
      obj = chatInputStateRef(setData[16]);
      obj2 = { initialUpsellKey: animated.animated ? clear.ANIMATED_EMOJI : clear.GLOBAL_EMOJI };
    }, [])
  };
  const items2 = [chatInputRef, chatInputStateRef, queryStart, queryEnd, clear, setDataImmediate];
  obj4.handlePress = queryStart.useCallback((arg0) => {
    const combined = "" + chatInputStateRef(setData[15])(arg0) + " ";
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
    ref = queryStart + combined.length;
  }, items2);
  return obj4;
});