// === Module 13084: EmojiSuggestionBarUtils ===

// Module 13084 (EmojiSuggestionBarUtils)
import native from "native" /* 4922 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4945 */;
import timing from "timing" /* 5192 */;
import spring from "spring" /* 5478 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9571 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5181 */;

require = fn;
const UpsellTypes = fn(1087).UpsellTypes;
const jsx = fn(21).jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: fn(1202).STANDARD_EASING };
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
  let fn = function l() {
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
  const cResult = chatInputRef(576).c(29);
  ({ channel, chatInputRef } = chatInputStateRef);
  chatInputStateRef = chatInputStateRef.chatInputStateRef;
  const tmp4 = analyticsLocations(setData.useState(clear), 2);
  const first = tmp4[0];
  ({ focused, text } = first);
  dependencyMap = text;
  ({ selectionStart, selectionEnd } = first);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [setDataImmediate];
    const fn = function _() {
      return setDataImmediate.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  obj = chatInputRef(576);
  obj2 = setData;
  const stateFromStores = chatInputRef(504).useStateFromStores(tmp6, tmp7);
  const tmp10 = chatInputStateRef;
  const tmpResult = chatInputRef(504);
  analyticsLocations = chatInputStateRef(7130)(chatInputStateRef(7155).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp12 = chatInputStateRef(13049)(tmp4[1], 16);
  setData = tmp12.setData;
  setDataImmediate = tmp12.setDataImmediate;
  if (cResult[2] !== setData) {
    const fn2 = function k() {
      return { setData };
    };
    const items1 = [setData];
    cResult[2] = setData;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp14 = items1;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
    tmp14 = cResult[4];
  }
  const imperativeHandle = obj2.useImperativeHandle(arg3, tmp13, tmp14);
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
                let tmp16 = cResult[12];
              }
              const tmp17 = tmp10(13085)(tmp16);
              const unlockedEmojis = tmp17.unlockedEmojis;
              ({ lockedEmojis, queryEnd } = tmp17);
              clear = tmp17.clear;
              if (cResult[13] === chatInputRef) {
                if (cResult[14] === chatInputStateRef) {
                  if (cResult[15] === clear) {
                    if (cResult[16] === queryEnd) {
                      if (cResult[17] === setDataImmediate) {
                        if (cResult[18] === text) {
                          if (cResult[19] === unlockedEmojis) {
                            let tmp18 = cResult[20];
                          }
                          if (cResult[21] !== analyticsLocations) {
                            class K {
                              constructor(arg0) {
                                obj = closure_1(closure_2[19]);
                                tmp = UpsellTypes;
                                obj1 = { initialUpsellKey: chatInputStateRef.animated ? tmp.ANIMATED_EMOJI : tmp.GLOBAL_EMOJI, analyticsLocations };
                                result = obj.handleShowUpsellAlert(obj1);
                                return;
                              }
                            }
                            cResult[21] = analyticsLocations;
                            cResult[22] = K;
                          } else {
                            class K {
                              constructor(arg0) {
                                obj = closure_1(closure_2[19]);
                                tmp = UpsellTypes;
                                obj1 = { initialUpsellKey: chatInputStateRef.animated ? tmp.ANIMATED_EMOJI : tmp.GLOBAL_EMOJI, analyticsLocations };
                                result = obj.handleShowUpsellAlert(obj1);
                                return;
                              }
                            }
                          }
                          if (cResult[23] === tmp18) {
                            class K {
                              constructor(arg0) {
                                obj = closure_1(closure_2[19]);
                                tmp = UpsellTypes;
                                obj1 = { initialUpsellKey: chatInputStateRef.animated ? tmp.ANIMATED_EMOJI : tmp.GLOBAL_EMOJI, analyticsLocations };
                                result = obj.handleShowUpsellAlert(obj1);
                                return;
                              }
                            }
                          }
                          let obj3 = { unlockedEmojis, lockedEmojis, reducedMotion: stateFromStores, handlePress: tmp18, handlePressEmojiUnavailable: K };
                          class C {
                            constructor(arg0) {
                              obj = /\s/;
                              str = closure_2;
                              tmp = queryEnd;
                              str2 = " ";
                              str3 = " ";
                              if (obj.test(closure_2.charAt(queryEnd - 1))) {
                                str3 = "";
                              }
                              obj2 = /\s/;
                              if (obj2.test(str.charAt(tmp))) {
                                str2 = "";
                              }
                              tmp2 = chatInputStateRef;
                              tmp3 = text;
                              combined = "" + str3 + chatInputStateRef(text[17])(chatInputStateRef) + str2;
                              closure_0 = combined;
                              current = closure_0.current;
                              obj1 = { location: tmp, length: 0, text: combined, editId: null };
                              editId = closure_1.current.editId;
                              obj1.editId = editId;
                              replaceRangeResult = current.replaceRange(obj1);
                              closure_1 = tmp + combined.length;
                              tmp5 = setDataImmediate((text) => {
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
                              tmp6 = clear();
                              obj5 = { emoji: chatInputStateRef, displayedSuggestions: unlockedEmojis };
                              tmp7 = tmp2(tmp3[18])(obj5);
                              return;
                            }
                          }
                          cResult[24] = K;
                          cResult[25] = lockedEmojis;
                          cResult[26] = stateFromStores;
                          cResult[27] = unlockedEmojis;
                          cResult[28] = obj3;
                        }
                      }
                    }
                  }
                }
              }
              class C {
                constructor(arg0) {
                  obj = /\s/;
                  str = closure_2;
                  tmp = queryEnd;
                  str2 = " ";
                  str3 = " ";
                  if (obj.test(closure_2.charAt(queryEnd - 1))) {
                    str3 = "";
                  }
                  obj2 = /\s/;
                  if (obj2.test(str.charAt(tmp))) {
                    str2 = "";
                  }
                  tmp2 = chatInputStateRef;
                  tmp3 = text;
                  combined = "" + str3 + chatInputStateRef(text[17])(chatInputStateRef) + str2;
                  closure_0 = combined;
                  current = closure_0.current;
                  obj1 = { location: tmp, length: 0, text: combined, editId: null };
                  editId = closure_1.current.editId;
                  obj1.editId = editId;
                  replaceRangeResult = current.replaceRange(obj1);
                  closure_1 = tmp + combined.length;
                  tmp5 = setDataImmediate((text) => {
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
                  tmp6 = clear();
                  obj5 = { emoji: chatInputStateRef, displayedSuggestions: unlockedEmojis };
                  tmp7 = tmp2(tmp3[18])(obj5);
                  return;
                }
              }
              cResult[13] = chatInputRef;
              cResult[14] = chatInputStateRef;
              cResult[15] = clear;
              cResult[16] = queryEnd;
              cResult[17] = setDataImmediate;
              cResult[18] = text;
              cResult[19] = unlockedEmojis;
              cResult[20] = C;
              tmp18 = C;
            }
          }
        }
      }
    }
  }
  let obj4 = { channel, text, selectionStart, selectionEnd, enabled: focused, maxCount, minUnlockedEmojis };
  cResult[5] = channel;
  cResult[6] = maxCount;
  cResult[7] = minUnlockedEmojis;
  cResult[8] = selectionEnd;
  cResult[9] = selectionStart;
  cResult[10] = focused;
  cResult[11] = text;
  cResult[12] = obj4;
  tmp16 = obj4;
  const tmp11 = chatInputStateRef(7130);
}) : (function useEmojiSuggestionBarState(chatInputRef, maxCount, minUnlockedEmojis, arg3) {
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  let analyticsLocations;
  let setData;
  let setDataImmediate;
  let unlockedEmojis;
  let queryEnd;
  let clear;
  ({ channel, suppressed } = chatInputRef);
  const tmp = analyticsLocations(setData.useState(clear), 2);
  const first = tmp[0];
  ({ focused, text } = first);
  dependencyMap = text;
  ({ selectionStart, selectionEnd } = first);
  const items = [setDataImmediate];
  const stateFromStores = chatInputRef(504).useStateFromStores(items, () => setDataImmediate.useReducedMotion);
  obj2 = chatInputRef(504);
  analyticsLocations = chatInputStateRef(7130)(chatInputStateRef(7155).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp5 = chatInputStateRef(13049)(tmp[1], 16);
  setData = tmp5.setData;
  setDataImmediate = tmp5.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = setData.useImperativeHandle(arg3, () => ({ setData }), items1);
  let obj3 = { channel, text, selectionStart, selectionEnd, enabled: null, maxCount: null, minUnlockedEmojis: null };
  const tmp4 = chatInputStateRef(7130);
  if (focused) {
    focused = !suppressed;
  }
  obj3.enabled = focused;
  obj3.maxCount = maxCount;
  obj3.minUnlockedEmojis = minUnlockedEmojis;
  const tmp7Result = chatInputStateRef(13085)(obj3);
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
    const combined = "" + str3 + chatInputStateRef(_undefined[17])(emoji) + str2;
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
    chatInputStateRef(_undefined[18])({ emoji, displayedSuggestions: unlockedEmojis });
    obj = /\s/;
    obj2 = /\s/;
    const obj4 = { emoji, displayedSuggestions: unlockedEmojis };
    ref = queryEnd + combined.length;
  }, items2);
  const tmp7 = chatInputStateRef(13085);
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
});