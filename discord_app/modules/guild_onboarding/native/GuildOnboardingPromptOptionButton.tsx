// discord_app/modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1393).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let obj = { duration: 200, easing: null };
let Easing = fn(4850).Easing;
obj.easing = Easing.out(fn(4850).Easing.ease);
const createStyles = fn(5092);
let obj3 = {
  container: {
    borderRadius: nativeDefault.radii.md,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    marginBottom: 8,
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  optionTextEmoji: { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 },
  optionImageEmoji: { height: 24, width: 24, marginRight: 12 },
  optionText: { flexShrink: 1 },
  checkIcon: null,
  newBadgeWrapper: null,
  newBadge: null,
  roleCount: null,
};
let size = {
  position: "absolute",
  top: -6,
  right: -6,
  width: 20,
  height: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
obj3.checkIcon = size;
obj3.newBadgeWrapper = { position: "absolute", top: -6, right: -6 };
obj3.newBadge = { fontWeight: "bold" };
const rect = {
  position: "absolute",
  top: -6,
  right: 24,
  paddingVertical: 2,
  paddingHorizontal: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
obj3.roleCount = rect;
let closure_12 = createStyles.createStyles(obj3);
const __initData = {
  code: "function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}",
};
const __initData2 = {
  code: "function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity_0=showMemberCount?1:0;const opacity_0=withDelay(showMemberCount?400:0,withTiming(rawOpacity_0,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity_0,transform:[{translateX:translateX}]};}",
};
let closure_15 = {
  code: "function GuildOnboardingPromptOptionButtonTsx3(){const{withTiming,selected,SELECTION_TIMING}=this.__closure;return withTiming(selected?1:0,SELECTION_TIMING);}",
};
let closure_16 = {
  code: "function GuildOnboardingPromptOptionButtonTsx4(){const{withTiming,isNew,SELECTION_TIMING}=this.__closure;return withTiming(isNew?1:0,SELECTION_TIMING);}",
};
let closure_17 = {
  code: 'function GuildOnboardingPromptOptionButtonTsx5(){const{interpolateColor,newProgress,unselectedBorderColor,newBorderColor,selectedProgress,selectedBorderColor,selectedBackgroundColor}=this.__closure;const currentUnselectedBorderColor=interpolateColor(newProgress.get(),[0,1],[unselectedBorderColor,newBorderColor]);return{borderColor:interpolateColor(selectedProgress.get(),[0,1],[currentUnselectedBorderColor,selectedBorderColor]),backgroundColor:interpolateColor(selectedProgress.get(),[0,1],["transparent",selectedBackgroundColor])};}',
};
let closure_18 = {
  code: "function GuildOnboardingPromptOptionButtonTsx6(){const{useReducedMotion,scale_0}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale_0.get()}]};}",
};
let closure_19 = {
  code: "function GuildOnboardingPromptOptionButtonTsx7(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}",
};
const __initData3 = {
  code: "function GuildOnboardingPromptOptionButtonTsx8(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity_0=showMemberCount?1:0;const opacity_0=withDelay(showMemberCount?400:0,withTiming(rawOpacity_0,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity_0,transform:[{translateX:translateX}]};}",
};
const __initData4 = {
  code: "function GuildOnboardingPromptOptionButtonTsx9(){const{withTiming,selected,SELECTION_TIMING}=this.__closure;return withTiming(selected?1:0,SELECTION_TIMING);}",
};
const __initData5 = {
  code: "function GuildOnboardingPromptOptionButtonTsx10(){const{withTiming,isNew,SELECTION_TIMING}=this.__closure;return withTiming(isNew?1:0,SELECTION_TIMING);}",
};
const __initData6 = {
  code: "function GuildOnboardingPromptOptionButtonTsx11(){const{interpolateColor,newProgress,unselectedBorderColor,newBorderColor,selectedProgress,selectedBorderColor,selectedBackgroundColor}=this.__closure;const currentUnselectedBorderColor=interpolateColor(newProgress.get(),[0,1],[unselectedBorderColor,newBorderColor]);return{borderColor:interpolateColor(selectedProgress.get(),[0,1],[currentUnselectedBorderColor,selectedBorderColor]),backgroundColor:interpolateColor(selectedProgress.get(),[0,1],['transparent',selectedBackgroundColor])};}",
};
const __initData7 = {
  code: "function GuildOnboardingPromptOptionButtonTsx12(){const{useReducedMotion,scale_0}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale_0.get()}]};}",
};
const ReactCompilerGating = fn(558);
let obj4 = {
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: 8,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PromptOptionButton(option) {
      const cResult = option(onSelect[11]).c(83);
      option = option.option;
      const selected = option.selected;
      onSelect = option.onSelect;
      const suppressMemberCount = option.suppressMemberCount;
      const canBeNew = option.canBeNew;
      canBeNew();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [first1];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let emoji = option.emoji;
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      if (cResult[1] !== id) {
        let emoji2 = option.emoji;
        let id1;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
        class B {
          constructor() {
            tmp = option;
            id = undefined;
            if (option != null) {
              emoji = tmp.emoji;
              if (emoji != null) {
                id = emoji.id;
              }
            }
            usableCustomEmojiById = null;
            if (null != id) {
              id1 = undefined;
              tmp4 = closure_7;
              if (tmp != null) {
                emoji2 = tmp.emoji;
                if (emoji2 != null) {
                  id1 = emoji2.id;
                }
              }
              usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
            }
            return usableCustomEmojiById;
          }
        }
        cResult[1] = id1;
        cResult[2] = B;
        let tmp8 = B;
      } else {
        tmp8 = cResult[2];
      }
      obj = option(onSelect[11]);
      const stateFromStores = option(onSelect[12]).useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [useReducedMotion];
        class B {
          constructor() {
            tmp = option;
            id = undefined;
            if (option != null) {
              emoji = tmp.emoji;
              if (emoji != null) {
                id = emoji.id;
              }
            }
            usableCustomEmojiById = null;
            if (null != id) {
              id1 = undefined;
              tmp4 = closure_7;
              if (tmp != null) {
                emoji2 = tmp.emoji;
                if (emoji2 != null) {
                  id1 = emoji2.id;
                }
              }
              usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
            }
            return usableCustomEmojiById;
          }
        }
        cResult[3] = items1;
        cResult[4] = tmp14;
        let tmp12 = tmp14;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmpResult = option(onSelect[12]);
      const stateFromStores1 = option(onSelect[12]).useStateFromStores(tmp11, tmp12);
      const tmpResult5 = option(onSelect[12]);
      class A {
        constructor() {
          num = 0;
          tmp = selected;
          if (selected) {
            num = 1;
          }
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { duration: 150, easing: null };
          Easing = closure_0(closure_2[7]).Easing;
          obj1.easing = Easing.out(closure_0(closure_2[7]).Easing.ease);
          num2 = 0.7;
          withTimingResult = obj.withTiming(num, obj1);
          if (tmp) {
            num2 = 1;
          }
          obj7 = { opacity: withTimingResult, transform: null };
          withSequenceResult = num2;
          if (!closure_4) {
            tmp2Result = tmp2(tmp3[7]);
            tmp2Result1 = tmp2(tmp3[14]);
            num3 = 1.2;
            withSpringResult = tmp2Result1.withSpring(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
            tmp2Result2 = tmp2(tmp3[14]);
            withSequenceResult = tmp2Result.withSequence(
              withSpringResult,
              tmp2Result2.withSpring(num2, { stiffness: 80, damping: 6, mass: 0.3 }),
            );
          }
          items = [];
          items[0] = { scale: withSequenceResult };
          obj7.transform = items;
          return obj7;
        }
      }
      const tmpResult6 = option(onSelect[7]);
      A.__closure = {
        selected,
        withTiming: option(onSelect[13]).withTiming,
        Easing: option(onSelect[7]).Easing,
        useReducedMotion: stateFromStores1,
        withSequence: option(onSelect[7]).withSequence,
        withSpring: option(onSelect[14]).withSpring,
      };
      A.__workletHash = 8281627194581;
      A.__initData = __initData;
      const animatedStyle = tmpResult6.useAnimatedStyle(A);
      const tmp17 = selected(onSelect[15])(option.guildId);
      closure_5 = tmp17;
      if (cResult[5] === tmp17) {
        if (cResult[6] === option.roleIds) {
          let tmp18 = cResult[7];
        }
        useReducedMotion = tmp18;
        class B {
          constructor() {
            tmp = option;
            id = undefined;
            if (option != null) {
              emoji = tmp.emoji;
              if (emoji != null) {
                id = emoji.id;
              }
            }
            usableCustomEmojiById = null;
            if (null != id) {
              id1 = undefined;
              tmp4 = closure_7;
              if (tmp != null) {
                emoji2 = tmp.emoji;
                if (emoji2 != null) {
                  id1 = emoji2.id;
                }
              }
              usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
            }
            return usableCustomEmojiById;
          }
        }
        const tmp25 = suppressMemberCount(stateFromStores1.useState(false), 2);
        first1 = tmp25[0];
        closure_8 = tmp25[1];
        closure_9 = stateFromStores1.useRef(null);
        if (cResult[8] === onSelect) {
          if (cResult[9] === selected) {
            if (cResult[12] !== first1) {
              class Z {
                constructor() {
                  if (closure_7) {
                    tmp = closure_9;
                    tmp2 = globalThis;
                    _setTimeout = setTimeout;
                    num = 3000;
                    closure_9.current = setTimeout(() => {
                      closure_1_8(false);
                      ref.current = null;
                    }, 3000);
                    return () => {
                      if (null != ref.current) {
                        const _clearTimeout = clearTimeout;
                        clearTimeout(tmp.current);
                      }
                    };
                  } else {
                    return;
                  }
                }
              }
              let items2 = [first1];
              class B {
                constructor() {
                  tmp = option;
                  id = undefined;
                  if (option != null) {
                    emoji = tmp.emoji;
                    if (emoji != null) {
                      id = emoji.id;
                    }
                  }
                  usableCustomEmojiById = null;
                  if (null != id) {
                    id1 = undefined;
                    tmp4 = closure_7;
                    if (tmp != null) {
                      emoji2 = tmp.emoji;
                      if (emoji2 != null) {
                        id1 = emoji2.id;
                      }
                    }
                    usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
                  }
                  return usableCustomEmojiById;
                }
              }
              cResult[12] = first1;
              class Y {
                constructor() {
                  tmp = closure_7;
                  if (closure_7) {
                    if (!closure_10.current) {
                      num = 0;
                      if (closure_6 > 0) {
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                        intl = closure_0(closure_2[17]).intl;
                        obj = { memberCount: null };
                        obj.memberCount = tmp3;
                        str = "polite";
                        announceResult = AccessibilityAnnouncer.announce(
                          intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                          "polite",
                        );
                        flag = true;
                        tmp2.current = true;
                      }
                      return;
                    }
                  }
                  if (!tmp) {
                    tmp7 = closure_10;
                    flag2 = false;
                    closure_10.current = false;
                  }
                  return;
                }
              }
              cResult[13] = Z;
              cResult[14] = items2;
              let tmp29 = items2;
            } else {
              class Z {
                constructor() {
                  if (closure_7) {
                    tmp = closure_9;
                    tmp2 = globalThis;
                    _setTimeout = setTimeout;
                    num = 3000;
                    closure_9.current = setTimeout(() => {
                      closure_1_8(false);
                      ref.current = null;
                    }, 3000);
                    return () => {
                      if (null != ref.current) {
                        const _clearTimeout = clearTimeout;
                        clearTimeout(tmp.current);
                      }
                    };
                  } else {
                    return;
                  }
                }
              }
              tmp29 = cResult[14];
            }
            const effect = obj6.useEffect(Z, tmp29);
            class B {
              constructor() {
                tmp = option;
                id = undefined;
                if (option != null) {
                  emoji = tmp.emoji;
                  if (emoji != null) {
                    id = emoji.id;
                  }
                }
                usableCustomEmojiById = null;
                if (null != id) {
                  id1 = undefined;
                  tmp4 = closure_7;
                  if (tmp != null) {
                    emoji2 = tmp.emoji;
                    if (emoji2 != null) {
                      id1 = emoji2.id;
                    }
                  }
                  usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
                }
                return usableCustomEmojiById;
              }
            }
            if (cResult[15] === tmp18) {
              class Z {
                constructor() {
                  if (closure_7) {
                    tmp = closure_9;
                    tmp2 = globalThis;
                    _setTimeout = setTimeout;
                    num = 3000;
                    closure_9.current = setTimeout(() => {
                      closure_1_8(false);
                      ref.current = null;
                    }, 3000);
                    return () => {
                      if (null != ref.current) {
                        const _clearTimeout = clearTimeout;
                        clearTimeout(tmp.current);
                      }
                    };
                  } else {
                    return;
                  }
                }
              }
              const effect1 = obj6.useEffect(Y, tmp31);
              class B {
                constructor() {
                  tmp = option;
                  id = undefined;
                  if (option != null) {
                    emoji = tmp.emoji;
                    if (emoji != null) {
                      id = emoji.id;
                    }
                  }
                  usableCustomEmojiById = null;
                  if (null != id) {
                    id1 = undefined;
                    tmp4 = closure_7;
                    if (tmp != null) {
                      emoji2 = tmp.emoji;
                      if (emoji2 != null) {
                        id1 = emoji2.id;
                      }
                    }
                    usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
                  }
                  return usableCustomEmojiById;
                }
              }
              let obj3 = {
                showMemberCount: null,
                withDelay: null,
                withTiming: null,
                Easing: null,
                useReducedMotion: null,
              };
              class Y {
                constructor() {
                  tmp = closure_7;
                  if (closure_7) {
                    if (!closure_10.current) {
                      num = 0;
                      if (closure_6 > 0) {
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                        intl = closure_0(closure_2[17]).intl;
                        obj = { memberCount: null };
                        obj.memberCount = tmp3;
                        str = "polite";
                        announceResult = AccessibilityAnnouncer.announce(
                          intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                          "polite",
                        );
                        flag = true;
                        tmp2.current = true;
                      }
                      return;
                    }
                  }
                  if (!tmp) {
                    tmp7 = closure_10;
                    flag2 = false;
                    closure_10.current = false;
                  }
                  return;
                }
              }
              obj3.withDelay = tmp(tmp2[7]).withDelay;
              obj3.withTiming = tmp(tmp2[13]).withTiming;
              obj3.Easing = tmp(tmp2[7]).Easing;
              obj3.useReducedMotion = stateFromStores1;
              tmp34.__closure = obj3;
              tmp34.__workletHash = 6536351943221;
              tmp34.__initData = __initData2;
              const animatedStyle1 = tmp(tmp2[7]).useAnimatedStyle(tmp34);
              const tmpResult7 = tmp(tmp2[7]);
              const sharedValue = tmp(tmp2[7]).useSharedValue(1);
              if (cResult[19] !== sharedValue) {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
                cResult[19] = sharedValue;
                class B {
                  constructor() {
                    tmp = option;
                    id = undefined;
                    if (option != null) {
                      emoji = tmp.emoji;
                      if (emoji != null) {
                        id = emoji.id;
                      }
                    }
                    usableCustomEmojiById = null;
                    if (null != id) {
                      id1 = undefined;
                      tmp4 = closure_7;
                      if (tmp != null) {
                        emoji2 = tmp.emoji;
                        if (emoji2 != null) {
                          id1 = emoji2.id;
                        }
                      }
                      usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
                    }
                    return usableCustomEmojiById;
                  }
                }
                cResult[20] = tmp38;
                class Y {
                  constructor() {
                    tmp = closure_7;
                    if (closure_7) {
                      if (!closure_10.current) {
                        num = 0;
                        if (closure_6 > 0) {
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                          intl = closure_0(closure_2[17]).intl;
                          obj = { memberCount: null };
                          obj.memberCount = tmp3;
                          str = "polite";
                          announceResult = AccessibilityAnnouncer.announce(
                            intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                            "polite",
                          );
                          flag = true;
                          tmp2.current = true;
                        }
                        return;
                      }
                    }
                    if (!tmp) {
                      tmp7 = closure_10;
                      flag2 = false;
                      closure_10.current = false;
                    }
                    return;
                  }
                }
              } else {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
              }
              if (cResult[21] !== sharedValue) {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
                cResult[21] = sharedValue;
                class B {
                  constructor() {
                    tmp = option;
                    id = undefined;
                    if (option != null) {
                      emoji = tmp.emoji;
                      if (emoji != null) {
                        id = emoji.id;
                      }
                    }
                    usableCustomEmojiById = null;
                    if (null != id) {
                      id1 = undefined;
                      tmp4 = closure_7;
                      if (tmp != null) {
                        emoji2 = tmp.emoji;
                        if (emoji2 != null) {
                          id1 = emoji2.id;
                        }
                      }
                      usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
                    }
                    return usableCustomEmojiById;
                  }
                }
                cResult[22] = tmp39;
                class Y {
                  constructor() {
                    tmp = closure_7;
                    if (closure_7) {
                      if (!closure_10.current) {
                        num = 0;
                        if (closure_6 > 0) {
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                          intl = closure_0(closure_2[17]).intl;
                          obj = { memberCount: null };
                          obj.memberCount = tmp3;
                          str = "polite";
                          announceResult = AccessibilityAnnouncer.announce(
                            intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                            "polite",
                          );
                          flag = true;
                          tmp2.current = true;
                        }
                        return;
                      }
                    }
                    if (!tmp) {
                      tmp7 = closure_10;
                      flag2 = false;
                      closure_10.current = false;
                    }
                    return;
                  }
                }
              } else {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
              }
              if (canBeNew) {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
              }
              if (option != null) {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
                if (tmp42 != null) {
                  class Z {
                    constructor() {
                      if (closure_7) {
                        tmp = closure_9;
                        tmp2 = globalThis;
                        _setTimeout = setTimeout;
                        num = 3000;
                        closure_9.current = setTimeout(() => {
                          closure_1_8(false);
                          ref.current = null;
                        }, 3000);
                        return () => {
                          if (null != ref.current) {
                            const _clearTimeout = clearTimeout;
                            clearTimeout(tmp.current);
                          }
                        };
                      } else {
                        return;
                      }
                    }
                  }
                }
              }
              let tmp43 = null != tmp41;
              if (!tmp43) {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
                if (option != null) {
                  class Z {
                    constructor() {
                      if (closure_7) {
                        tmp = closure_9;
                        tmp2 = globalThis;
                        _setTimeout = setTimeout;
                        num = 3000;
                        closure_9.current = setTimeout(() => {
                          closure_1_8(false);
                          ref.current = null;
                        }, 3000);
                        return () => {
                          if (null != ref.current) {
                            const _clearTimeout = clearTimeout;
                            clearTimeout(tmp.current);
                          }
                        };
                      } else {
                        return;
                      }
                    }
                  }
                  if (tmp45 != null) {
                    class Z {
                      constructor() {
                        if (closure_7) {
                          tmp = closure_9;
                          tmp2 = globalThis;
                          _setTimeout = setTimeout;
                          num = 3000;
                          closure_9.current = setTimeout(() => {
                            closure_1_8(false);
                            ref.current = null;
                          }, 3000);
                          return () => {
                            if (null != ref.current) {
                              const _clearTimeout = clearTimeout;
                              clearTimeout(tmp.current);
                            }
                          };
                        } else {
                          return;
                        }
                      }
                    }
                  }
                }
                tmp43 = null != tmp44;
              }
              const emoji3 = option.emoji;
              if (cResult[23] === tmp43) {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
              }
              if (tmp43) {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
                if (tmp47 != null) {
                  class Z {
                    constructor() {
                      if (closure_7) {
                        tmp = closure_9;
                        tmp2 = globalThis;
                        _setTimeout = setTimeout;
                        num = 3000;
                        closure_9.current = setTimeout(() => {
                          closure_1_8(false);
                          ref.current = null;
                        }, 3000);
                        return () => {
                          if (null != ref.current) {
                            const _clearTimeout = clearTimeout;
                            clearTimeout(tmp.current);
                          }
                        };
                      } else {
                        return;
                      }
                    }
                  }
                }
                class B {
                  constructor() {
                    tmp = option;
                    id = undefined;
                    if (option != null) {
                      emoji = tmp.emoji;
                      if (emoji != null) {
                        id = emoji.id;
                      }
                    }
                    usableCustomEmojiById = null;
                    if (null != id) {
                      id1 = undefined;
                      tmp4 = closure_7;
                      if (tmp != null) {
                        emoji2 = tmp.emoji;
                        if (emoji2 != null) {
                          id1 = emoji2.id;
                        }
                      }
                      usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
                    }
                    return usableCustomEmojiById;
                  }
                }
                class Y {
                  constructor() {
                    tmp = closure_7;
                    if (closure_7) {
                      if (!closure_10.current) {
                        num = 0;
                        if (closure_6 > 0) {
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                          intl = closure_0(closure_2[17]).intl;
                          obj = { memberCount: null };
                          obj.memberCount = tmp3;
                          str = "polite";
                          announceResult = AccessibilityAnnouncer.announce(
                            intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                            "polite",
                          );
                          flag = true;
                          tmp2.current = true;
                        }
                        return;
                      }
                    }
                    if (!tmp) {
                      tmp7 = closure_10;
                      flag2 = false;
                      closure_10.current = false;
                    }
                    return;
                  }
                }
                if (null != option.description) {
                  class Z {
                    constructor() {
                      if (closure_7) {
                        tmp = closure_9;
                        tmp2 = globalThis;
                        _setTimeout = setTimeout;
                        num = 3000;
                        closure_9.current = setTimeout(() => {
                          closure_1_8(false);
                          ref.current = null;
                        }, 3000);
                        return () => {
                          if (null != ref.current) {
                            const _clearTimeout = clearTimeout;
                            clearTimeout(tmp.current);
                          }
                        };
                      } else {
                        return;
                      }
                    }
                  }
                  if (option.description.length > 0) {
                    class Z {
                      constructor() {
                        if (closure_7) {
                          tmp = closure_9;
                          tmp2 = globalThis;
                          _setTimeout = setTimeout;
                          num = 3000;
                          closure_9.current = setTimeout(() => {
                            closure_1_8(false);
                            ref.current = null;
                          }, 3000);
                          return () => {
                            if (null != ref.current) {
                              const _clearTimeout = clearTimeout;
                              clearTimeout(tmp.current);
                            }
                          };
                        } else {
                          return;
                        }
                      }
                    }
                    let obj4 = { emojiName: null, title: null, description: null };
                    class B {
                      constructor() {
                        tmp = option;
                        id = undefined;
                        if (option != null) {
                          emoji = tmp.emoji;
                          if (emoji != null) {
                            id = emoji.id;
                          }
                        }
                        usableCustomEmojiById = null;
                        if (null != id) {
                          id1 = undefined;
                          tmp4 = closure_7;
                          if (tmp != null) {
                            emoji2 = tmp.emoji;
                            if (emoji2 != null) {
                              id1 = emoji2.id;
                            }
                          }
                          usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
                        }
                        return usableCustomEmojiById;
                      }
                    }
                    obj4.title = option.title;
                    class Y {
                      constructor() {
                        tmp = closure_7;
                        if (closure_7) {
                          if (!closure_10.current) {
                            num = 0;
                            if (closure_6 > 0) {
                              tmp4 = closure_0;
                              tmp5 = closure_2;
                              AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                              intl = closure_0(closure_2[17]).intl;
                              obj = { memberCount: null };
                              obj.memberCount = tmp3;
                              str = "polite";
                              announceResult = AccessibilityAnnouncer.announce(
                                intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                                "polite",
                              );
                              flag = true;
                              tmp2.current = true;
                            }
                            return;
                          }
                        }
                        if (!tmp) {
                          tmp7 = closure_10;
                          flag2 = false;
                          closure_10.current = false;
                        }
                        return;
                      }
                    }
                    let title = obj11.formatToPlainString(tmp(tmp2[17]).t.nSzqkg, obj4);
                  }
                }
                let intl = tmp(tmp2[17]).intl;
                const obj5 = { emojiName: tmp48, title: option.title };
                title = intl.formatToPlainString(tmp(tmp2[17]).t.rBPpAN, obj5);
              } else {
                class Z {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_9;
                      tmp2 = globalThis;
                      _setTimeout = setTimeout;
                      num = 3000;
                      closure_9.current = setTimeout(() => {
                        closure_1_8(false);
                        ref.current = null;
                      }, 3000);
                      return () => {
                        if (null != ref.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(tmp.current);
                        }
                      };
                    } else {
                      return;
                    }
                  }
                }
                title = option.title;
              }
              cResult[23] = tmp43;
              ({ description: tmp3[24], emoji: emoji4 } = option);
              class A {
                constructor() {
                  num = 0;
                  tmp = selected;
                  if (selected) {
                    num = 1;
                  }
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[13]);
                  obj1 = { duration: 150, easing: null };
                  Easing = closure_0(closure_2[7]).Easing;
                  obj1.easing = Easing.out(closure_0(closure_2[7]).Easing.ease);
                  num2 = 0.7;
                  withTimingResult = obj.withTiming(num, obj1);
                  if (tmp) {
                    num2 = 1;
                  }
                  obj7 = { opacity: withTimingResult, transform: null };
                  withSequenceResult = num2;
                  if (!closure_4) {
                    tmp2Result = tmp2(tmp3[7]);
                    tmp2Result1 = tmp2(tmp3[14]);
                    num3 = 1.2;
                    withSpringResult = tmp2Result1.withSpring(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
                    tmp2Result2 = tmp2(tmp3[14]);
                    withSequenceResult = tmp2Result.withSequence(
                      withSpringResult,
                      tmp2Result2.withSpring(num2, { stiffness: 80, damping: 6, mass: 0.3 }),
                    );
                  }
                  items = [];
                  items[0] = { scale: withSequenceResult };
                  obj7.transform = items;
                  return obj7;
                }
              }
              cResult[25] = undefined;
              cResult[26] = option.title;
              cResult[27] = title;
              const tmpResult8 = tmp(tmp2[7]);
            }
            class Y {
              constructor() {
                tmp = closure_7;
                if (closure_7) {
                  if (!closure_10.current) {
                    num = 0;
                    if (closure_6 > 0) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                      intl = closure_0(closure_2[17]).intl;
                      obj = { memberCount: null };
                      obj.memberCount = tmp3;
                      str = "polite";
                      announceResult = AccessibilityAnnouncer.announce(
                        intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                        "polite",
                      );
                      flag = true;
                      tmp2.current = true;
                    }
                    return;
                  }
                }
                if (!tmp) {
                  tmp7 = closure_10;
                  flag2 = false;
                  closure_10.current = false;
                }
                return;
              }
            }
            const items3 = [first1, tmp18];
            cResult[15] = tmp18;
            cResult[16] = first1;
            cResult[17] = items3;
            cResult[18] = Y;
            tmp31 = items3;
          }
        }
        function handleOptionSelect() {
          onSelect(!selected);
          if (!suppressMemberCount) {
            closure_8(!selected);
          }
        }
        cResult[8] = onSelect;
        cResult[9] = selected;
        cResult[10] = suppressMemberCount;
        cResult[11] = handleOptionSelect;
      }
      let num6 = 0;
      if (null != tmp17) {
        class Z {
          constructor() {
            if (closure_7) {
              tmp = closure_9;
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 3000;
              closure_9.current = setTimeout(() => {
                closure_1_8(false);
                ref.current = null;
              }, 3000);
              return () => {
                if (null != ref.current) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(tmp.current);
                }
              };
            } else {
              return;
            }
          }
        }
        if (null != option.roleIds) {
          class Z {
            constructor() {
              if (closure_7) {
                tmp = closure_9;
                tmp2 = globalThis;
                _setTimeout = setTimeout;
                num = 3000;
                closure_9.current = setTimeout(() => {
                  closure_1_8(false);
                  ref.current = null;
                }, 3000);
                return () => {
                  if (null != ref.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(tmp.current);
                  }
                };
              } else {
                return;
              }
            }
          }
          const roleIds = option.roleIds;
          class B {
            constructor() {
              tmp = option;
              id = undefined;
              if (option != null) {
                emoji = tmp.emoji;
                if (emoji != null) {
                  id = emoji.id;
                }
              }
              usableCustomEmojiById = null;
              if (null != id) {
                id1 = undefined;
                tmp4 = closure_7;
                if (tmp != null) {
                  emoji2 = tmp.emoji;
                  if (emoji2 != null) {
                    id1 = emoji2.id;
                  }
                }
                usableCustomEmojiById = closure_7.getUsableCustomEmojiById(id1);
              }
              return usableCustomEmojiById;
            }
          }
          class Y {
            constructor() {
              tmp = closure_7;
              if (closure_7) {
                if (!closure_10.current) {
                  num = 0;
                  if (closure_6 > 0) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                    intl = closure_0(closure_2[17]).intl;
                    obj = { memberCount: null };
                    obj.memberCount = tmp3;
                    str = "polite";
                    announceResult = AccessibilityAnnouncer.announce(
                      intl.formatToPlainString(closure_0(closure_2[17]).t.iyXfAn, obj),
                      "polite",
                    );
                    flag = true;
                    tmp2.current = true;
                  }
                  return;
                }
              }
              if (!tmp) {
                tmp7 = closure_10;
                flag2 = false;
                closure_10.current = false;
              }
              return;
            }
          }
          HermesBuiltin.arraySpread(
            roleIds.map((item) => closure_5[item]),
            0,
          );
          const _Math = Math;
          num6 = HermesBuiltin.apply(tmp19, Math);
        }
      }
      cResult[5] = tmp17;
      cResult[6] = option.roleIds;
      cResult[7] = num6;
      tmp18 = num6;
      let obj2 = {
        selected,
        withTiming: option(onSelect[13]).withTiming,
        Easing: option(onSelect[7]).Easing,
        useReducedMotion: stateFromStores1,
        withSequence: option(onSelect[7]).withSequence,
        withSpring: option(onSelect[14]).withSpring,
      };
    }
  : function PromptOptionButton(option) {
      option = option.option;
      const selected = option.selected;
      ({ onSelect: dependencyMap, suppressMemberCount: _slicedToArray, canBeNew } = option);
      closure_5 = undefined;
      let num;
      showMemberCount = undefined;
      size = undefined;
      closure_9 = undefined;
      let ref;
      let sharedValue;
      let isUnseen;
      closure_13 = undefined;
      let token;
      let token1;
      let token2;
      let token3;
      let derivedValue;
      let derivedValue1;
      const tmp = isUnseen();
      let items = [showMemberCount];
      const stateFromStores = option(504).useStateFromStores(items, () => {
        let id;
        if (option != null) {
          const emoji = option.emoji;
          if (emoji != null) {
            id = emoji.id;
          }
        }
        let usableCustomEmojiById = null;
        if (null != id) {
          let id1;
          if (option != null) {
            const emoji2 = option.emoji;
            if (emoji2 != null) {
              id1 = emoji2.id;
            }
          }
          usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
        }
        return usableCustomEmojiById;
      });
      obj = option(504);
      let items1 = [num];
      const stateFromStores1 = option(504).useStateFromStores(items1, () => num.useReducedMotion);
      let obj2 = option(504);
      class S {
        constructor() {
          num = 0;
          tmp = selected;
          if (selected) {
            num = 1;
          }
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { duration: 150, easing: null };
          Easing = closure_0(closure_2[7]).Easing;
          obj1.easing = Easing.out(closure_0(closure_2[7]).Easing.ease);
          num2 = 0.7;
          withTimingResult = obj.withTiming(num, obj1);
          if (tmp) {
            num2 = 1;
          }
          obj7 = { opacity: withTimingResult, transform: null };
          withSequenceResult = num2;
          if (!closure_4) {
            tmp2Result = tmp2(tmp3[7]);
            tmp2Result1 = tmp2(tmp3[14]);
            num3 = 1.2;
            withSpringResult = tmp2Result1.withSpring(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
            tmp2Result2 = tmp2(tmp3[14]);
            withSequenceResult = tmp2Result.withSequence(
              withSpringResult,
              tmp2Result2.withSpring(num2, { stiffness: 80, damping: 6, mass: 0.3 }),
            );
          }
          items = [];
          items[0] = { scale: withSequenceResult };
          obj7.transform = items;
          return obj7;
        }
      }
      let obj3 = option(4850);
      S.__closure = {
        selected,
        withTiming: option(5093).withTiming,
        Easing: option(4850).Easing,
        useReducedMotion: stateFromStores1,
        withSequence: option(4850).withSequence,
        withSpring: option(5378).withSpring,
      };
      S.__workletHash = 8205438722579;
      S.__initData = derivedValue1;
      const animatedStyle = obj3.useAnimatedStyle(S);
      const tmp8 = selected(6816)(option.guildId);
      closure_5 = tmp8;
      num = 0;
      if (null != tmp8) {
        num = 0;
        if (null != option.roleIds) {
          const _Math = Math;
          const roleIds = option.roleIds;
          let items2 = [];
          HermesBuiltin.arraySpread(
            roleIds.map((item) => closure_5[item]),
            0,
          );
          const _Math2 = Math;
          num = HermesBuiltin.apply(items2, Math);
        }
      }
      [showMemberCount, size] = stateFromStores1.useState(false);
      closure_9 = stateFromStores1.useRef(null);
      const items3 = [showMemberCount];
      const effect = stateFromStores1.useEffect(() => {
        if (first) {
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            closure_1_8(false);
            ref.current = null;
          }, 3000);
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp.current);
            }
          };
        }
      }, items3);
      ref = stateFromStores1.useRef(false);
      const items4 = [showMemberCount, num];
      const effect1 = stateFromStores1.useEffect(() => {
        if (first) {
          if (!ref.current) {
            if (0 > 0) {
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              const intl = util.intl;
              obj = { memberCount: tmp3 };
              AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.iyXfAn, obj), "polite");
              tmp2.current = true;
            }
          }
        }
        if (!first) {
          ref.current = false;
        }
      }, items4);
      let obj4 = {
        selected,
        withTiming: option(5093).withTiming,
        Easing: option(4850).Easing,
        useReducedMotion: stateFromStores1,
        withSequence: option(4850).withSequence,
        withSpring: option(5378).withSpring,
      };
      let obj5 = stateFromStores1;
      class V {
        constructor() {
          tmp = closure_7;
          num = 0;
          if (closure_7) {
            num = 1;
          }
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[7]);
          num2 = 0;
          if (tmp) {
            num2 = 400;
          }
          tmp2Result = tmp2(tmp3[13]);
          obj1 = { duration: 150, easing: null };
          Easing = tmp2(tmp3[7]).Easing;
          obj1.easing = Easing.out(tmp2(tmp3[7]).Easing.ease);
          num3 = 16;
          withDelayResult = obj.withDelay(num2, tmp2Result.withTiming(num, obj1));
          if (tmp) {
            num3 = 0;
          }
          obj8 = { opacity: withDelayResult, transform: null };
          withDelayResult1 = num3;
          if (!closure_4) {
            tmp2Result1 = tmp2(tmp3[7]);
            num4 = 0;
            if (tmp) {
              num4 = 400;
            }
            tmp2Result2 = tmp2(tmp3[13]);
            obj9 = { duration: 200, easing: null };
            Easing2 = tmp2(tmp3[7]).Easing;
            obj9.easing = Easing2.out(tmp2(tmp3[7]).Easing.ease);
            withDelayResult1 = tmp2Result1.withDelay(num4, tmp2Result2.withTiming(num3, obj9));
          }
          items = [];
          items[0] = { translateX: withDelayResult1 };
          obj8.transform = items;
          return obj8;
        }
      }
      let tmp2Result = option(4850);
      V.__closure = {
        showMemberCount,
        withDelay: option(4850).withDelay,
        withTiming: option(5093).withTiming,
        Easing: option(4850).Easing,
        useReducedMotion: stateFromStores1,
      };
      V.__workletHash = 10755800239871;
      V.__initData = __initData3;
      const animatedStyle1 = tmp2Result.useAnimatedStyle(V);
      const obj6 = {
        showMemberCount,
        withDelay: option(4850).withDelay,
        withTiming: option(5093).withTiming,
        Easing: option(4850).Easing,
        useReducedMotion: stateFromStores1,
      };
      sharedValue = option(4850).useSharedValue(1);
      isUnseen = canBeNew;
      if (canBeNew) {
        isUnseen = option.isUnseen;
      }
      let id;
      if (option != null) {
        let emoji = option.emoji;
        if (emoji != null) {
          id = emoji.id;
        }
      }
      let tmp21 = null != id;
      if (!tmp21) {
        let name;
        if (option != null) {
          let emoji2 = option.emoji;
          if (emoji2 != null) {
            name = emoji2.name;
          }
        }
        tmp21 = null != name;
      }
      closure_13 = tmp21;
      const items5 = [tmp21, , ,];
      const emoji3 = option.emoji;
      let name1;
      if (emoji3 != null) {
        name1 = emoji3.name;
      }
      items5[1] = name1;
      ({ title: arr7[2], description: arr7[3] } = option);
      const memo = obj5.useMemo(() => {
        if (closure_13) {
          const emoji = option.emoji;
          let str;
          if (emoji != null) {
            str = emoji.name;
          }
          if (str == null) {
            str = "";
          }
          const replaced = str.replace(/^:|:$/g, "");
          if (null != option.description) {
            if (option.description.length > 0) {
              const intl3 = util.intl;
              const obj2 = { emojiName: replaced, title: null, description: null };
              ({ title: obj3.title, description: obj3.description } = option);
              let formatToPlainStringResult = intl3.formatToPlainString(util.t.nSzqkg, obj2);
            }
            return formatToPlainStringResult;
          }
          const intl2 = util.intl;
          const obj5 = { emojiName: replaced, title: option.title };
          formatToPlainStringResult = intl2.formatToPlainString(util.t.rBPpAN, obj5);
        } else {
          if (null != option.description) {
            if (option.description.length > 0) {
              const intl = util.intl;
              obj = { title: null, description: null };
              ({ title: obj.title, description: obj.description } = option);
              let title = intl.formatToPlainString(util.t.U4lDOC, obj);
            }
            return title;
          }
          title = option.title;
        }
      }, items5);
      const tmp2Result11 = option(4850);
      token = option(4818).useToken(tmp7(587).colors.BORDER_SUBTLE);
      const tmp2Result12 = option(4818);
      token1 = option(4818).useToken(tmp7(587).colors.BACKGROUND_BRAND);
      const tmp2Result13 = option(4818);
      token2 = option(4818).useToken(tmp7(587).colors.BORDER_STRONG);
      const tmp2Result14 = option(4818);
      token3 = option(4818).useToken(tmp7(587).colors.BACKGROUND_BASE_LOWEST);
      const tmp2Result15 = option(4818);
      const fn = function q() {
        obj = timing;
        num = 0;
        if (selected) {
          num = 1;
        }
        return obj.withTiming(num, obj);
      };
      const tmp2Result16 = option(4850);
      fn.__closure = { withTiming: option(5093).withTiming, selected, SELECTION_TIMING: sharedValue };
      fn.__workletHash = 12520862943769;
      fn.__initData = __initData4;
      derivedValue = tmp2Result16.useDerivedValue(fn);
      const obj7 = { withTiming: option(5093).withTiming, selected, SELECTION_TIMING: sharedValue };
      class W {
        constructor() {
          obj = closure_0(closure_2[13]);
          num = 0;
          if (isUnseen) {
            num = 1;
          }
          return obj.withTiming(num, closure_11);
        }
      }
      const tmp2Result17 = option(4850);
      W.__closure = { withTiming: option(5093).withTiming, isNew: isUnseen, SELECTION_TIMING: sharedValue };
      W.__workletHash = 6695066984001;
      W.__initData = __initData5;
      derivedValue1 = tmp2Result17.useDerivedValue(W);
      const obj8 = { withTiming: option(5093).withTiming, isNew: isUnseen, SELECTION_TIMING: sharedValue };
      class X {
        constructor() {
          obj = closure_0(closure_2[7]);
          items = [,];
          items[0] = closure_14;
          items[1] = closure_15;
          obj1 = { borderColor: null, backgroundColor: null };
          interpolateColorResult = obj.interpolateColor(closure_19.get(), [0, 1], items);
          obj3 = closure_0(closure_2[7]);
          items1 = [,];
          items1[0] = interpolateColorResult;
          items1[1] = closure_16;
          obj1.borderColor = obj3.interpolateColor(closure_18.get(), [0, 1], items1);
          obj4 = closure_0(closure_2[7]);
          items2 = ["transparent"];
          items2[1] = closure_17;
          obj1.backgroundColor = obj4.interpolateColor(closure_18.get(), [0, 1], items2);
          return obj1;
        }
      }
      const tmp2Result18 = option(4850);
      X.__closure = {
        interpolateColor: option(4850).interpolateColor,
        newProgress: derivedValue1,
        unselectedBorderColor: token,
        newBorderColor: token1,
        selectedProgress: derivedValue,
        selectedBorderColor: token2,
        selectedBackgroundColor: token3,
      };
      X.__workletHash = 11103701630825;
      X.__initData = __initData6;
      const animatedStyle2 = tmp2Result18.useAnimatedStyle(X);
      const obj9 = {
        interpolateColor: option(4850).interpolateColor,
        newProgress: derivedValue1,
        unselectedBorderColor: token,
        newBorderColor: token1,
        selectedProgress: derivedValue,
        selectedBorderColor: token2,
        selectedBackgroundColor: token3,
      };
      const fn2 = function z() {
        if (stateFromStores1) {
          obj = {};
        } else {
          obj = { transform: null };
          const obj2 = { scale: sharedValue.get() };
          const items = [obj2];
          obj.transform = items;
        }
        return obj;
      };
      fn2.__closure = { useReducedMotion: stateFromStores1, scale_0: sharedValue };
      fn2.__workletHash = 15537308682382;
      fn2.__initData = __initData7;
      const animatedStyle3 = option(4850).useAnimatedStyle(fn2);
      const tmp2Result19 = option(4850);
      const checkboxA11yNative = option(4832).useCheckboxA11yNative({ checked: selected });
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      const obj10 = { style: null, children: null };
      const items6 = [tmp.container, animatedStyle3, animatedStyle2];
      obj10.style = items6;
      const obj11 = {
        activeOpacity: 0.6,
        style: tmp.optionButton,
        onPress: function handleOptionSelect() {
          dependencyMap(!selected);
          if (!_slicedToArray) {
            closure_8(!selected);
          }
        },
        onPressIn() {
          obj = ReanimatedRexport;
          const withTimingResult = timing.withTiming(1, { duration: 0 });
          const obj4 = { duration: 200, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj4.easing = Easing.out(ReanimatedRexport.Easing.ease);
          const result = sharedValue.set(obj.withSequence(withTimingResult, timing.withTiming(1.02, obj4)));
        },
        onPressOut() {
          const obj2 = { duration: 100, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj2.easing = Easing.out(ReanimatedRexport.Easing.ease);
          const result = sharedValue.set(timing.withTiming(1, obj2));
        },
        accessibilityRole,
        accessibilityState,
        accessibilityLabel: memo,
        children: null,
      };
      let id1;
      if (option != null) {
        const emoji4 = option.emoji;
        if (emoji4 != null) {
          id1 = emoji4.id;
        }
      }
      let tmp38Result = null != id1;
      if (!tmp38Result) {
        let name2;
        if (option != null) {
          const emoji5 = option.emoji;
          if (emoji5 != null) {
            name2 = emoji5.name;
          }
        }
        tmp38Result = null != name2;
      }
      if (tmp38Result) {
        const obj12 = { style: { display: "flex", alignItems: "center" }, children: null };
        const obj13 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ optionTextEmoji: obj24.textEmojiStyle, optionImageEmoji: obj24.fastImageStyle } = tmp);
        let emojiURL;
        if (null != stateFromStores) {
          const obj14 = { id: null, animated: null, size: null };
          ({ id: obj26.id, animated: obj26.animated } = stateFromStores);
          obj14.size = size;
          emojiURL = tmp7(1415).getEmojiURL(obj14);
          const tmp7Result2 = tmp7(1415);
        }
        obj13.src = emojiURL;
        let str;
        if (option != null) {
          const emoji6 = option.emoji;
          if (emoji6 != null) {
            str = emoji6.name;
          }
        }
        if (str == null) {
          str = "";
        }
        obj13.name = str;
        obj12.children = closure_9(tmp7(6819), obj13);
        tmp38Result = tmp38(closure_5, obj12);
        const tmp7Result = tmp7(6819);
      }
      const items7 = [tmp38Result];
      const obj15 = { style: tmp.optionText, children: null };
      const items8 = [
        closure_9(option(5088).Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: option.title,
        }),
      ];
      let tmp44Result = null != option.description && option.description.length > 0;
      if (tmp44Result) {
        const obj17 = { variant: "text-xs/medium", color: "text-default", children: option.description };
        tmp44Result = tmp44(tmp2(5088).Text, obj17);
      }
      items8[1] = tmp44Result;
      obj15.children = items8;
      items7[1] = ref(closure_5, obj15);
      obj11.children = items7;
      const items9 = [ref(option(6184).PressableOpacity, obj11), , ,];
      let tmp44Result2 = null;
      if (num > 0) {
        const obj18 = {
          accessible: false,
          importantForAccessibility: "no-hide-descendants",
          accessibilityElementsHidden: true,
          style: null,
          children: null,
        };
        const items10 = [tmp.roleCount, animatedStyle1];
        obj18.style = items10;
        const obj19 = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
        let intl = tmp2(1126).intl;
        const obj20 = { memberCount: num };
        obj19.children = intl.format(tmp2(1126).t.EgKsZA, obj20);
        obj18.children = tmp44(tmp2(5088).Text, obj19);
        tmp44Result2 = tmp44(tmp7(4850).View, obj18);
      }
      items9[1] = tmp44Result2;
      const obj21 = { style: null, children: null };
      const items11 = [tmp.checkIcon, animatedStyle];
      obj21.style = items11;
      const obj16 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title };
      const tmp2Result20 = option(4832);
      obj21.children = closure_9(option(6822).CheckmarkSmallIcon, { size: "xs", color: selected(587).colors.WHITE });
      items9[2] = closure_9(selected(4850).View, obj21);
      if (canBeNew) {
        canBeNew = !selected;
      }
      if (canBeNew) {
        canBeNew = option.isUnseen;
      }
      if (canBeNew) {
        const obj23 = { color: tmp2(1200).BadgeColors.BRAND, text: null, style: null, textStyle: null };
        let intl2 = tmp2(1126).intl;
        obj23.text = intl2.string(tmp2(1126).t.y2b7CA);
        ({ newBadgeWrapper: obj35.style, newBadge: obj35.textStyle } = tmp);
        canBeNew = tmp44(tmp2(1200).TextBadge, obj23);
      }
      items9[3] = canBeNew;
      obj10.children = items9;
      return ref(selected(4850).View, obj10);
    };
