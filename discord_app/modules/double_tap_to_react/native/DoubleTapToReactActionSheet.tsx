// discord_app/modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import DoubleTapToReactUtils from "DoubleTapToReactUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";

const require = globalThis.__r;

require = fn;
function randomizeAnimationValues(leading) {
  ({ positionValue, rotationValue, sizeValue, opacityValue } = leading);
  let num = 0;
  if (!leading.leading) {
    const _Math = Math;
    num = 50 + 150 * Math.random();
  }
  const obj = ReanimatedRexport;
  const withTimingResult = timing.withTiming(0, { duration: num });
  const obj4 = { duration: 600, easing: null };
  const result = 10 * Math.random();
  const Easing = ReanimatedRexport.Easing;
  obj4.easing = Easing.out(ReanimatedRexport.Easing.ease);
  const result1 = positionValue.set(obj.withSequence(withTimingResult, timing.withTiming(result + 35, obj4)));
  const obj5 = ReanimatedRexport;
  const withTimingResult1 = timing.withTiming(0, { duration: num });
  const obj8 = { duration: 600, easing: null };
  const result2 = 40 * Math.random();
  obj8.easing = ReanimatedRexport.Easing.ease;
  const result3 = rotationValue.set(obj5.withSequence(withTimingResult1, timing.withTiming(result2 + 20, obj8)));
  const obj9 = ReanimatedRexport;
  const withTimingResult2 = timing.withTiming(0, { duration: num });
  const withTimingResult3 = timing.withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
  const result4 = sizeValue.set(
    obj9.withSequence(withTimingResult2, withTimingResult3, timing.withTiming(0.5, { duration: 360 })),
  );
  const obj13 = ReanimatedRexport;
  const withTimingResult4 = timing.withTiming(0, { duration: num });
  const withTimingResult5 = timing.withTiming(1, { duration: 360 });
  const result5 = opacityValue.set(
    obj13.withSequence(withTimingResult4, withTimingResult5, timing.withTiming(0, { duration: 240 })),
  );
}
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const EMOJI_URL_BASE_SIZE = fn(1380).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  emoji: { width: 48, height: 48, zIndex: 2 },
  selectedCustomEmoji: { width: 48, height: 48 },
  selectedTextEmoji: null,
  selectedEmojiText: null,
  content: null,
  emojiContainer: null,
  alignCenter: null,
  emojiSelectRow: null,
  header: null,
  emojiName: null,
  burstContainer: null,
};
let PlatformUtils = fn(1369);
let num = 36;
if (PlatformUtils.isIOS()) {
  num = 48;
}
let obj4 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1369);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 56;
}
obj4.lineHeight = num2;
obj4.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.selectedTextEmoji = obj4;
let obj6 = { marginLeft: nativeDefault.space.PX_16, fontSize: 40, lineHeight: null };
PlatformUtils = fn(1369);
let num3;
if (PlatformUtils.isIOS()) {
  num3 = 56;
}
obj6.lineHeight = num3;
obj2.selectedEmojiText = obj6;
obj2.content = {
  flexDirection: "column",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingTop: nativeDefault.space.PX_32,
  paddingBottom: nativeDefault.space.PX_12,
};
let obj8 = {
  flexDirection: "column",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingTop: nativeDefault.space.PX_32,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.emojiContainer = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 4,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.xl,
  justifyContent: "center",
  alignItems: "center",
};
obj2.alignCenter = { textAlign: "center" };
let obj9 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 4,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.xl,
  justifyContent: "center",
  alignItems: "center",
};
obj2.emojiSelectRow = { marginVertical: nativeDefault.space.PX_24 };
let obj10 = { marginVertical: nativeDefault.space.PX_24 };
obj2.header = {
  marginBottom: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let obj11 = {
  marginBottom: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj2.emojiName = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj2.burstContainer = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:"absolute",transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+"deg"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}',
};
const __initData2 = {
  code: "function DoubleTapToReactActionSheetTsx2(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (left) => {
      const cResult = top(leading[15]).c(9);
      ({ emojiComponent, top } = left);
      left = left.left;
      leading = left.leading;
      let obj = top(leading[15]);
      const sharedValue = top(leading[12]).useSharedValue(0);
      const obj2 = top(leading[12]);
      const sharedValue1 = top(leading[12]).useSharedValue(0);
      const obj3 = top(leading[12]);
      const sharedValue2 = top(leading[12]).useSharedValue(0.2);
      let obj4 = top(leading[12]);
      const sharedValue3 = top(leading[12]).useSharedValue(0);
      if (cResult[0] === leading) {
        if (cResult[1] === sharedValue3) {
          if (cResult[2] === sharedValue) {
            if (cResult[3] === sharedValue1) {
              if (cResult[4] === sharedValue2) {
                let tmp8 = cResult[5];
              }
              const mountLayoutEffect = top(tmp2[16]).useMountLayoutEffect(tmp8);
              const tmpResult = top(tmp2[16]);
              const fn2 = function j() {
                const items = [{ scale: sharedValue2.get() }];
                let num = 1;
                if (true === left) {
                  num = -1;
                }
                const rect = { position: "absolute", transform: null, top: null, left: null, opacity: null };
                const obj = { scale: sharedValue2.get() };
                items[1] = { rotate: `${num * sharedValue1.get()}deg` };
                rect.transform = items;
                if (true === top) {
                  value = -sharedValue.get();
                  let obj4 = sharedValue;
                } else {
                  obj4 = sharedValue;
                  value = sharedValue.get();
                }
                rect.top = value;
                value2 = obj4.get();
                if (true === left) {
                  let result = 1.5 * -value2;
                } else {
                  result = 1.5 * value2;
                }
                rect.left = result;
                rect.opacity = sharedValue3.get();
                return rect;
              };
              let rect = {
                sizeValue: sharedValue2,
                left,
                rotationValue: sharedValue1,
                top,
                positionValue: sharedValue,
                opacityValue: sharedValue3,
              };
              fn2.__closure = rect;
              fn2.__workletHash = 4841097522623;
              fn2.__initData = __initData;
              const animatedStyle = top(tmp2[12]).useAnimatedStyle(fn2);
              if (cResult[6] === animatedStyle) {
                if (cResult[7] === emojiComponent) {
                  let tmp12 = cResult[8];
                }
                return tmp12;
              }
              const obj6 = { style: animatedStyle, children: emojiComponent };
              const tmp15 = closure_11(left(tmp2[12]).View, obj6);
              cResult[6] = animatedStyle;
              cResult[7] = emojiComponent;
              cResult[8] = tmp15;
              tmp12 = tmp15;
              const tmpResult2 = top(tmp2[12]);
            }
          }
        }
      }
      const fn = function n() {
        randomizeAnimationValues({
          positionValue: sharedValue,
          rotationValue: sharedValue1,
          sizeValue: sharedValue2,
          opacityValue: sharedValue3,
          leading,
        });
      };
      cResult[0] = leading;
      cResult[1] = sharedValue3;
      cResult[2] = sharedValue;
      cResult[3] = sharedValue1;
      cResult[4] = sharedValue2;
      cResult[5] = fn;
      tmp8 = fn;
      const obj5 = top(leading[12]);
    }
  : (children) => {
      const top = children.top;
      ({ bottom, left } = children);
      ({ right, leading: dependencyMap } = children);
      const sharedValue = top(4612).useSharedValue(0);
      let obj = top(4612);
      const sharedValue1 = top(4612).useSharedValue(0);
      const obj2 = top(4612);
      const sharedValue2 = top(4612).useSharedValue(0.2);
      const obj3 = top(4612);
      const sharedValue3 = top(4612).useSharedValue(0);
      let obj4 = top(4612);
      const mountLayoutEffect = top(5590).useMountLayoutEffect(() => {
        randomizeAnimationValues({
          positionValue: sharedValue,
          rotationValue: sharedValue1,
          sizeValue: sharedValue2,
          opacityValue: sharedValue3,
          leading,
        });
      });
      const obj5 = top(5590);
      class S {
        constructor() {
          obj = { scale: closure_5.get() };
          items = [,];
          items[0] = obj;
          tmp = true === left;
          num = 1;
          if (tmp) {
            num = -1;
          }
          rect = { position: "absolute", transform: null, top: null, left: null, opacity: null };
          obj1 = { rotate: `${num * closure_4.get()}deg` };
          items[1] = obj1;
          rect.transform = items;
          if (true === top) {
            tmp3 = closure_3;
            value = -closure_3.get();
            obj4 = closure_3;
          } else {
            obj4 = closure_3;
            value = closure_3.get();
          }
          rect.top = value;
          value1 = obj4.get();
          if (tmp) {
            result = 1.5 * -value1;
          } else {
            result = 1.5 * value1;
          }
          rect.left = result;
          rect.opacity = closure_6.get();
          return rect;
        }
      }
      S.__closure = {
        sizeValue: sharedValue2,
        left,
        rotationValue: sharedValue1,
        top,
        positionValue: sharedValue,
        opacityValue: sharedValue3,
      };
      S.__workletHash = 17194622427708;
      S.__initData = __initData2;
      const style = top(4612).useAnimatedStyle(S);
      return closure_11(left(4612).View, { style, children: children.emojiComponent });
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiComponent) => {
      const cResult = c.c(11);
      emojiComponent = emojiComponent.emojiComponent;
      const tmp2 = closure_13();
      if (cResult[0] !== emojiComponent) {
        const rect = { emojiComponent, top: true, left: true, leading: true };
        const tmp9 = closure_1_11(closure_17, rect);
        const rect1 = { emojiComponent, top: true, right: true };
        const tmp10 = closure_1_11(closure_17, rect1);
        const rect2 = { emojiComponent, bottom: true, left: true };
        const tmp11 = closure_1_11(closure_17, rect2);
        const rect3 = { emojiComponent, bottom: true, right: true };
        const tmp12 = closure_1_11(closure_17, rect3);
        cResult[0] = emojiComponent;
        cResult[1] = tmp9;
        cResult[2] = tmp10;
        cResult[3] = tmp11;
        cResult[4] = tmp12;
        let tmp6 = tmp12;
        let tmp5 = tmp11;
        let tmp4 = tmp10;
        let tmp3 = tmp9;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      if (cResult[5] === tmp2.burstContainer) {
        if (cResult[6] === tmp3) {
          if (cResult[7] === tmp4) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp6) {
                let tmp13 = cResult[10];
              }
              return tmp13;
            }
          }
        }
      }
      const obj2 = { style: tmp2.burstContainer, children: null };
      const items = [tmp3, tmp4, tmp5, tmp6];
      obj2.children = items;
      const tmp14 = __initData(View, obj2);
      cResult[5] = tmp2.burstContainer;
      cResult[6] = tmp3;
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = tmp14;
      tmp13 = tmp14;
    }
  : (emojiComponent) => {
      emojiComponent = emojiComponent.emojiComponent;
      const obj = { style: closure_13().burstContainer, children: null };
      const items = [
        closure_1_11(closure_17, { emojiComponent, top: true, left: true, leading: true }),
        closure_1_11(closure_17, { emojiComponent, top: true, right: true }),
        closure_1_11(closure_17, { emojiComponent, bottom: true, left: true }),
        closure_1_11(closure_17, { emojiComponent, bottom: true, right: true }),
      ];
      obj.children = items;
      return __initData(View, obj);
    };
const __initData3 = {
  code: "function DoubleTapToReactActionSheetTsx3(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}",
};
const __initData4 = {
  code: "function DoubleTapToReactActionSheetTsx4(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}",
};
let closure_21 = {
  code: "function DoubleTapToReactActionSheetTsx5(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}",
};
const __initData5 = {
  code: "function DoubleTapToReactActionSheetTsx6(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}",
};
const __initData6 = {
  code: "function DoubleTapToReactActionSheetTsx7(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}",
};
let closure_24 = {
  code: "function DoubleTapToReactActionSheetTsx8(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}",
};
ReactCompilerGating = fn(558);
let obj12 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (emoji) => {
      const cResult = require("c").c(81);
      emoji = emoji.emoji;
      const tmp4 = closure_13();
      let obj = require("c");
      [tmp7, closure_0] = first1.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ref];
        let fn = function j() {
          return ref.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp8 = items;
        tmp9 = fn;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const tmp6 = _slicedToArray(first1.useState(false), 2);
      const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
      [selectedEmoji, asyncGeneratorStep] = first1.useState(emoji);
      _slicedToArray = obj2.useRef(true);
      [first1, closure_6] = first1.useState(false);
      ref = first1.useRef(null);
      const tmpResult = require("initialize");
      const sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const tmpResult8 = require("ReanimatedRexport");
      class O {
        constructor() {
          obj = { transform: null };
          obj1 = { scale: null };
          obj3 = closure_0(closure_2[12]);
          obj1.scale = obj3.interpolate(closure_8.get(), [0, 1], [1, 1.3]);
          items = [,];
          items[0] = obj1;
          obj6 = { translateY: null };
          obj5 = closure_0(closure_2[12]);
          obj6.translateY = obj5.interpolate(closure_8.get(), [0, 1], [0, -20]);
          items[1] = obj6;
          obj.transform = items;
          return obj;
        }
      }
      const tmpResult9 = require("ReanimatedRexport");
      O.__closure = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
      O.__workletHash = 2643600194543;
      O.__initData = __initData3;
      const animatedStyle = tmpResult9.useAnimatedStyle(O);
      let obj3 = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(1);
      const tmpResult10 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(1);
      const tmpResult11 = require("ReanimatedRexport");
      class I {
        constructor() {
          obj = { transform: null, opacity: null };
          obj1 = { scale: closure_9.get() };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          obj.opacity = closure_10.get();
          return obj;
        }
      }
      I.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
      I.__workletHash = 11620488487534;
      I.__initData = __initData4;
      const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(I);
      if (cResult[2] === sharedValue2) {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === sharedValue1) {
            if (cResult[5] === first1) {
              let tmp21 = cResult[6];
            }
            if (cResult[7] !== selectedEmoji) {
              let DoubleTapReactionEmoji = tmp(tmp2[19]).DoubleTapReactionEmoji;
              const setting = DoubleTapReactionEmoji.getSetting();
              ({ emojiId, emojiName } = setting);
              if (null != emojiId) {
                let customEmojiById = sharedValue.getCustomEmojiById(emojiId);
              } else {
                customEmojiById = null;
                if (null != emojiName) {
                  customEmojiById = stateFromStores(tmp2[20]).getByName(emojiName);
                  const obj10 = stateFromStores(tmp2[20]);
                }
              }
              let flag = true;
              if (null != customEmojiById) {
                flag = !tmp(tmp2[21]).areEmojisEqual(customEmojiById, selectedEmoji);
                const tmpResult13 = tmp(tmp2[21]);
              }
              cResult[7] = selectedEmoji;
              cResult[8] = flag;
              let tmp22 = flag;
            } else {
              tmp22 = cResult[8];
            }
            closure_11 = tmp22;
            if (cResult[9] === stateFromStores) {
              if (cResult[10] === selectedEmoji.animated) {
                if (cResult[11] === selectedEmoji.id) {
                  if (cResult[12] === selectedEmoji.url) {
                    let str = "";
                    if (null == selectedEmoji.id) {
                      str = selectedEmoji.surrogates;
                    }
                    if (cResult[14] === cResult[13]) {
                      if (cResult[15] === tmp4.emoji) {
                        if (cResult[16] === tmp4.selectedCustomEmoji) {
                          if (cResult[17] === tmp4.selectedTextEmoji) {
                            if (cResult[18] === str) {
                              let tmp31 = cResult[19];
                            }
                            if (cResult[20] === tmp22) {
                              if (cResult[21] === selectedEmoji) {
                                let tmp35 = cResult[22];
                              }
                              closure_12 = tmp35;
                              if (cResult[23] === stateFromStores) {
                                if (cResult[24] === sharedValue) {
                                  if (cResult[25] === tmp35) {
                                    let tmp37 = cResult[26];
                                  }
                                  if (cResult[27] !== tmp35) {
                                    function de() {
                                      if (null != ref.current) {
                                        const _clearTimeout = clearTimeout;
                                        clearTimeout(ref.current);
                                        ref.current = null;
                                      }
                                      closure_12();
                                    }
                                    cResult[27] = tmp35;
                                    cResult[28] = de;
                                    let tmp38 = de;
                                  } else {
                                    tmp38 = cResult[28];
                                  }
                                  if (cResult[29] === animatedStyle1) {
                                    if (cResult[30] === animatedStyle) {
                                      let tmp40 = cResult[31];
                                    }
                                    if (cResult[32] === tmp7) {
                                      if (cResult[33] === tmp31) {
                                        if (cResult[34] === stateFromStores) {
                                          let tmp41 = cResult[35];
                                        }
                                        if (cResult[36] === tmp31) {
                                          if (cResult[37] === tmp40) {
                                            if (cResult[38] === tmp41) {
                                              let tmp45 = cResult[39];
                                            }
                                            if (cResult[40] !== tmp4.selectedEmojiText) {
                                              let obj4 = {
                                                variant: "text-lg/semibold",
                                                style: tmp4.selectedEmojiText,
                                                color: "interactive-text-default",
                                                children: "1",
                                              };
                                              const tmp51 = closure_11(tmp(tmp2[28]).Text, obj4);
                                              cResult[40] = tmp4.selectedEmojiText;
                                              cResult[41] = tmp51;
                                              let tmp49 = tmp51;
                                            } else {
                                              tmp49 = cResult[41];
                                            }
                                            if (cResult[42] === tmp4.emojiContainer) {
                                              if (cResult[43] === tmp45) {
                                                if (cResult[44] === tmp49) {
                                                  let tmp52 = cResult[45];
                                                }
                                                const _HermesInternal = HermesInternal;
                                                const combined = ":" + selectedEmoji.name + ":";
                                                if (cResult[46] === tmp4.emojiName) {
                                                  if (cResult[47] === combined) {
                                                    let tmp57 = cResult[48];
                                                  }
                                                  const _Symbol = Symbol;
                                                  ({ header, alignCenter } = tmp4);
                                                  if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const intl = tmp(tmp2[29]).intl;
                                                    const stringResult = intl.string(tmp(tmp2[29]).t.F6lRAI);
                                                    cResult[49] = stringResult;
                                                    let tmp60 = stringResult;
                                                  } else {
                                                    tmp60 = cResult[49];
                                                  }
                                                  if (cResult[50] !== tmp4.alignCenter) {
                                                    let obj5 = {
                                                      style: alignCenter,
                                                      variant: "text-lg/bold",
                                                      color: "mobile-text-heading-primary",
                                                      children: tmp60,
                                                    };
                                                    const tmp64 = closure_11(tmp(tmp2[28]).Text, obj5);
                                                    cResult[50] = tmp4.alignCenter;
                                                    cResult[51] = tmp64;
                                                    let tmp62 = tmp64;
                                                  } else {
                                                    tmp62 = cResult[51];
                                                  }
                                                  const _Symbol2 = Symbol;
                                                  if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const tmp67 = closure_11(tmp(tmp2[30]).NewBadge, {});
                                                    cResult[52] = tmp67;
                                                    let tmp65 = tmp67;
                                                  } else {
                                                    tmp65 = cResult[52];
                                                  }
                                                  if (cResult[53] === tmp4.header) {
                                                    if (cResult[54] === tmp62) {
                                                      let tmp68 = cResult[55];
                                                    }
                                                    const _Symbol3 = Symbol;
                                                    if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                                      const intl2 = tmp(tmp2[29]).intl;
                                                      const stringResult1 = intl2.string(tmp(tmp2[29]).t.yIax8g);
                                                      cResult[56] = stringResult1;
                                                      let tmp72 = stringResult1;
                                                    } else {
                                                      tmp72 = cResult[56];
                                                    }
                                                    if (cResult[57] !== tmp4.alignCenter) {
                                                      let obj6 = {
                                                        style: tmp4.alignCenter,
                                                        variant: "text-md/medium",
                                                        color: "text-default",
                                                        children: tmp72,
                                                      };
                                                      const tmp76 = closure_11(tmp(tmp2[28]).Text, obj6);
                                                      cResult[57] = tmp4.alignCenter;
                                                      cResult[58] = tmp76;
                                                      let tmp74 = tmp76;
                                                    } else {
                                                      tmp74 = cResult[58];
                                                    }
                                                    if (cResult[59] === tmp21) {
                                                      if (cResult[60] === selectedEmoji) {
                                                        if (cResult[61] === tmp4.emojiSelectRow) {
                                                          let tmp77 = cResult[62];
                                                        }
                                                        if (cResult[63] === emoji) {
                                                          if (cResult[64] === selectedEmoji) {
                                                            if (cResult[66] === tmp37) {
                                                              if (cResult[67] === first1) {
                                                                if (cResult[68] === tmp81) {
                                                                  let tmp86 = cResult[69];
                                                                }
                                                                if (cResult[70] === tmp4.content) {
                                                                  if (cResult[71] === tmp52) {
                                                                    if (cResult[72] === tmp57) {
                                                                      if (cResult[73] === tmp68) {
                                                                        if (cResult[74] === tmp74) {
                                                                          if (cResult[75] === tmp77) {
                                                                            if (cResult[76] === tmp86) {
                                                                              let tmp89 = cResult[77];
                                                                            }
                                                                            if (cResult[78] === tmp38) {
                                                                              if (cResult[79] === tmp89) {
                                                                                let tmp93 = cResult[80];
                                                                              }
                                                                              return tmp93;
                                                                            }
                                                                            let obj7 = {
                                                                              onDismiss: tmp38,
                                                                              children: tmp89,
                                                                            };
                                                                            const tmp95 = closure_11(
                                                                              tmp(tmp2[33]).ActionSheet,
                                                                              obj7,
                                                                            );
                                                                            cResult[78] = tmp38;
                                                                            cResult[79] = tmp89;
                                                                            cResult[80] = tmp95;
                                                                            tmp93 = tmp95;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                const obj8 = { style: tmp39, children: null };
                                                                const items1 = [
                                                                  tmp52,
                                                                  tmp57,
                                                                  tmp68,
                                                                  tmp74,
                                                                  tmp77,
                                                                  tmp86,
                                                                ];
                                                                obj8.children = items1;
                                                                const tmp92 = closure_12(closure_6, obj8);
                                                                cResult[70] = tmp4.content;
                                                                cResult[71] = tmp52;
                                                                cResult[72] = tmp57;
                                                                cResult[73] = tmp68;
                                                                cResult[74] = tmp74;
                                                                cResult[75] = tmp77;
                                                                cResult[76] = tmp86;
                                                                cResult[77] = tmp92;
                                                                tmp89 = tmp92;
                                                              }
                                                            }
                                                            const obj9 = {
                                                              grow: true,
                                                              size: "lg",
                                                              text: cResult[65],
                                                              variant: "primary",
                                                              onPress: tmp37,
                                                              disabled: first1,
                                                            };
                                                            const tmp88 = closure_11(tmp(tmp2[32]).Button, obj9);
                                                            cResult[66] = tmp37;
                                                            cResult[67] = first1;
                                                            cResult[68] = cResult[65];
                                                            cResult[69] = tmp88;
                                                            tmp86 = tmp88;
                                                          }
                                                        }
                                                        const tmpResult14 = tmp(tmp2[21]);
                                                        const intl3 = tmp(tmp2[29]).intl;
                                                        const string = intl3.string;
                                                        let t = tmp(tmp2[29]).t;
                                                        if (areEmojisEqualResult) {
                                                          t = t["NX+WJN"];
                                                          let stringResult2 = string(t);
                                                        } else {
                                                          stringResult2 = string(t.tdsiO9);
                                                        }
                                                        cResult[63] = emoji;
                                                        cResult[64] = selectedEmoji;
                                                        cResult[65] = stringResult2;
                                                        areEmojisEqualResult = tmp(tmp2[21]).areEmojisEqual(
                                                          selectedEmoji,
                                                          emoji,
                                                        );
                                                      }
                                                    }
                                                    const obj11 = {
                                                      style: tmp4.emojiSelectRow,
                                                      selectedEmoji,
                                                      onPressEmoji: tmp21,
                                                    };
                                                    const tmp80 = closure_11(stateFromStores(tmp2[31]), obj11);
                                                    cResult[59] = tmp21;
                                                    cResult[60] = selectedEmoji;
                                                    cResult[61] = tmp4.emojiSelectRow;
                                                    cResult[62] = tmp80;
                                                    tmp77 = tmp80;
                                                  }
                                                  const obj13 = { style: header, children: null };
                                                  const items2 = [tmp62, tmp65];
                                                  obj13.children = items2;
                                                  const tmp71 = closure_12(closure_6, obj13);
                                                  cResult[53] = tmp4.header;
                                                  cResult[54] = tmp62;
                                                  cResult[55] = tmp71;
                                                  tmp68 = tmp71;
                                                }
                                                const obj15 = {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  style: tmp4.emojiName,
                                                  children: combined,
                                                };
                                                const tmp59 = closure_11(tmp(tmp2[28]).Text, obj15);
                                                cResult[46] = tmp4.emojiName;
                                                cResult[47] = combined;
                                                cResult[48] = tmp59;
                                                tmp57 = tmp59;
                                              }
                                            }
                                            const obj16 = { style: tmp4.emojiContainer, children: null };
                                            const items3 = [tmp45, tmp49];
                                            obj16.children = items3;
                                            const tmp55 = closure_12(closure_6, obj16);
                                            cResult[42] = tmp4.emojiContainer;
                                            cResult[43] = tmp45;
                                            cResult[44] = tmp49;
                                            cResult[45] = tmp55;
                                            tmp52 = tmp55;
                                          }
                                        }
                                        const obj17 = { style: tmp40, children: null };
                                        const items4 = [tmp31, tmp41];
                                        obj17.children = items4;
                                        const tmp48 = closure_12(stateFromStores(tmp2[12]).View, obj17);
                                        cResult[36] = tmp31;
                                        cResult[37] = tmp40;
                                        cResult[38] = tmp41;
                                        cResult[39] = tmp48;
                                        tmp45 = tmp48;
                                      }
                                    }
                                    let tmp42 = null;
                                    if (!stateFromStores) {
                                      tmp42 = null;
                                      if (tmp7) {
                                        const obj18 = { emojiComponent: tmp31 };
                                        tmp42 = closure_11(closure_18, obj18);
                                      }
                                    }
                                    cResult[32] = tmp7;
                                    cResult[33] = tmp31;
                                    cResult[34] = stateFromStores;
                                    cResult[35] = tmp42;
                                    tmp41 = tmp42;
                                  }
                                  const items5 = [animatedStyle, animatedStyle1];
                                  cResult[29] = animatedStyle1;
                                  cResult[30] = animatedStyle;
                                  cResult[31] = items5;
                                  tmp40 = items5;
                                }
                              }
                              function ce() {
                                closure_6(true);
                                if (stateFromStores) {
                                  const result = set(0);
                                } else {
                                  const obj = ReanimatedRexport;
                                  const withTimingResult = timing.withTiming(0, { duration: 0 });
                                  const obj4 = { duration: 100, easing: null };
                                  const Easing = ReanimatedRexport.Easing;
                                  obj4.easing = Easing.out(ReanimatedRexport.Easing.quad);
                                  const withTimingResult1 = timing.withTiming(1, obj4);
                                  const obj5 = timing;
                                  const fn = function t() {
                                    return closure_0(first[12]).runOnJS(setAnimateConfetti)(true);
                                  };
                                  const obj6 = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti };
                                  fn.__closure = obj6;
                                  fn.__workletHash = 9353152433668;
                                  fn.__initData = __initData;
                                  const withTimingResult2 = obj5.withTiming(1, { duration: 100 }, undefined, fn);
                                  const result1 = set(
                                    obj.withSequence(
                                      withTimingResult,
                                      withTimingResult1,
                                      withTimingResult2,
                                      spring.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 }),
                                    ),
                                  );
                                }
                                if (null != ref.current) {
                                  const _clearTimeout = clearTimeout;
                                  clearTimeout(ref.current);
                                }
                                let num6 = 900;
                                if (stateFromStores) {
                                  num6 = 0;
                                }
                                ref.current = setTimeout(() => {
                                  ref.current = null;
                                  closure_1_12();
                                  stateFromStores(first[27]).hideActionSheet();
                                }, num6);
                              }
                              cResult[23] = stateFromStores;
                              cResult[24] = sharedValue;
                              cResult[25] = tmp35;
                              cResult[26] = ce;
                              tmp37 = ce;
                            }
                            _require = asyncGeneratorStep(async () => {
                              if (c3 === 2) {
                                c3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj3 = { value, done: true };
                                  return obj3;
                                } else {
                                  return { value: "IconComponent", done: "IconComponent" };
                                }
                              } else {
                                try {
                                  c3 = 2;
                                  if (0 === user) {
                                    if (arg0 === 1) {
                                      c3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c3 = 3;
                                      const obj4 = { value, done: true };
                                      return obj4;
                                    } else {
                                      closure_1 = tmp4;
                                      setAnimateConfetti = tmp4;
                                      if (closure_1_11) {
                                        const DoubleTapReactionEmoji = setAnimateConfetti(
                                          first[19],
                                        ).DoubleTapReactionEmoji;
                                        const obj5 = {
                                          emojiId: user.id,
                                          emojiName: user.name,
                                          animated: user.animated,
                                          disableDoubleTap: false,
                                        };
                                        user = 1;
                                        c3 = 1;
                                        const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                                        return obj6;
                                      }
                                    }
                                  } else if (arg0 === 1) {
                                    c3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c3 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  }
                                  const obj7 = {
                                    emoji_id: user.id,
                                    emoji_name: user.name,
                                    emoji_animated: user.animated,
                                    recommended: ref.current,
                                    location: stateFromStores(first[25]).DOUBLE_TAP_TO_REACT_ACTION_SHEET,
                                  };
                                  stateFromStores(first[24]).track(sharedValue1.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj7);
                                  const _setTimeout = setTimeout;
                                  const timerId = setTimeout(
                                    () => closure_0(emoji[26]).showDoubleTapEmojiUpdatedToast({ emoji }),
                                    500,
                                  );
                                  c3 = 3;
                                  return { value: "IconComponent", done: "IconComponent" };
                                } catch (tmp23) {
                                  c3 = tmp;
                                  throw tmp23;
                                }
                              }
                            });
                            const fn3 = function () {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            };
                            cResult[20] = tmp22;
                            cResult[21] = selectedEmoji;
                            cResult[22] = fn3;
                            tmp35 = fn3;
                          }
                        }
                      }
                    }
                    const obj19 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
                    ({
                      emoji: obj14.style,
                      selectedCustomEmoji: obj14.fastImageStyle,
                      selectedTextEmoji: obj14.textEmojiStyle,
                    } = tmp4);
                    obj19.name = str;
                    obj19.src = cResult[13];
                    const tmp34 = closure_11(stateFromStores(tmp2[23]), obj19);
                    cResult[14] = cResult[13];
                    cResult[15] = tmp4.emoji;
                    cResult[16] = tmp4.selectedCustomEmoji;
                    cResult[17] = tmp4.selectedTextEmoji;
                    cResult[18] = str;
                    cResult[19] = tmp34;
                    tmp31 = tmp34;
                  }
                }
              }
            }
            if (null != selectedEmoji.id) {
              const obj20 = { id: selectedEmoji.id, animated: null, size: null };
              let animated = !stateFromStores;
              if (!stateFromStores) {
                animated = selectedEmoji.animated;
              }
              obj20.animated = animated;
              obj20.size = sharedValue2;
              let url = stateFromStores(tmp2[22]).getEmojiURL(obj20);
              const obj12 = stateFromStores(tmp2[22]);
            } else {
              url = selectedEmoji.url;
            }
            cResult[9] = stateFromStores;
            cResult[10] = selectedEmoji.animated;
            cResult[11] = selectedEmoji.id;
            cResult[12] = selectedEmoji.url;
            cResult[13] = url;
          }
        }
      }
      const fn2 = function z(arg0, current) {
        setAnimateConfetti = arg0;
        if (!first1) {
          let set = sharedValue1.set;
          if (current) {
            const result = set(1);
            set = sharedValue2;
            const result1 = sharedValue2.set(1);
          } else {
            const obj = setAnimateConfetti(first[12]);
            const obj2 = setAnimateConfetti(first[13]);
            const withTimingResult = setAnimateConfetti(first[13]).withTiming(0.7, { duration: 0 });
            const result2 = set(
              obj.withSequence(
                withTimingResult,
                setAnimateConfetti(first[18]).withSpring(1, { stiffness: 1500, damping: 60, mass: 3 }),
              ),
            );
            const obj3 = setAnimateConfetti(first[18]);
            const obj4 = setAnimateConfetti(first[12]);
            const obj5 = setAnimateConfetti(first[13]);
            const withTimingResult1 = setAnimateConfetti(first[13]).withTiming(0.6, { duration: 0 });
            const result3 = sharedValue2.set(
              obj4.withSequence(
                withTimingResult1,
                setAnimateConfetti(first[18]).withSpring(1, {
                  duration: 200,
                  dampingRatio: 0.45,
                  mass: 10,
                  overshootClamping: true,
                }),
              ),
            );
            const obj6 = setAnimateConfetti(first[18]);
          }
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            closure_3(closure_0);
            closure_4.current = current;
          }, 0);
        }
      };
      cResult[2] = sharedValue2;
      cResult[3] = stateFromStores;
      cResult[4] = sharedValue1;
      cResult[5] = first1;
      cResult[6] = fn2;
      tmp21 = fn2;
      const tmpResult12 = require("ReanimatedRexport");
    }
  : (emoji) => {
      emoji = emoji.emoji;
      selectedEmoji = undefined;
      asyncGeneratorStep = undefined;
      _slicedToArray = undefined;
      first1 = undefined;
      closure_6 = undefined;
      let ref;
      let callback1;
      const tmp = closure_13();
      const tmp2 = _slicedToArray(first1.useState(false), 2);
      _require = tmp2[1];
      let items = [ref];
      const stateFromStores = require("initialize").useStateFromStores(items, () => ref.useReducedMotion);
      [selectedEmoji, asyncGeneratorStep] = first1.useState(emoji);
      _slicedToArray = first1.useRef(true);
      [first1, closure_6] = first1.useState(false);
      ref = first1.useRef(null);
      let obj2 = require("initialize");
      const sharedValue = require("ReanimatedRexport").useSharedValue(0);
      let obj3 = require("ReanimatedRexport");
      let fn = function f() {
        const obj = { transform: null };
        const obj2 = { scale: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [1, 1.3]) };
        const items = [obj2];
        const obj4 = { translateY: null };
        obj4.translateY = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, -20]);
        items[1] = obj4;
        obj.transform = items;
        return obj;
      };
      let obj4 = require("ReanimatedRexport");
      fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
      fn.__workletHash = 15740130833098;
      fn.__initData = __initData5;
      const animatedStyle = obj4.useAnimatedStyle(fn);
      let obj5 = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(1);
      let obj6 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(1);
      let obj7 = require("ReanimatedRexport");
      const fn2 = function j() {
        const obj = { transform: null, opacity: null };
        const items = [{ scale: sharedValue1.get() }];
        obj.transform = items;
        obj.opacity = sharedValue2.get();
        return obj;
      };
      fn2.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
      fn2.__workletHash = 15653504592077;
      fn2.__initData = __initData6;
      const items1 = [sharedValue1, sharedValue2, stateFromStores, first1];
      const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(fn2);
      const items2 = [selectedEmoji];
      const callback = first1.useCallback((arg0, current) => {
        setAnimateConfetti = arg0;
        if (!first1) {
          let set = sharedValue1.set;
          if (current) {
            const result = set(1);
            set = sharedValue2;
            const result1 = sharedValue2.set(1);
          } else {
            const obj = setAnimateConfetti(first[12]);
            const obj2 = setAnimateConfetti(first[13]);
            const withTimingResult = setAnimateConfetti(first[13]).withTiming(0.7, { duration: 0 });
            const result2 = set(
              obj.withSequence(
                withTimingResult,
                setAnimateConfetti(first[18]).withSpring(1, { stiffness: 1500, damping: 60, mass: 3 }),
              ),
            );
            const obj3 = setAnimateConfetti(first[18]);
            const obj4 = setAnimateConfetti(first[12]);
            const obj5 = setAnimateConfetti(first[13]);
            const withTimingResult1 = setAnimateConfetti(first[13]).withTiming(0.6, { duration: 0 });
            const result3 = sharedValue2.set(
              obj4.withSequence(
                withTimingResult1,
                setAnimateConfetti(first[18]).withSpring(1, {
                  duration: 200,
                  dampingRatio: 0.45,
                  mass: 10,
                  overshootClamping: true,
                }),
              ),
            );
            const obj6 = setAnimateConfetti(first[18]);
          }
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            closure_3(closure_0);
            closure_4.current = current;
          }, 0);
        }
      }, items1);
      const memo = first1.useMemo(() => {
        const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
        const setting = DoubleTapReactionEmoji.getSetting();
        ({ emojiId, emojiName } = setting);
        if (null != emojiId) {
          let customEmojiById = EmojiStore.getCustomEmojiById(emojiId);
        } else {
          customEmojiById = null;
          if (null != emojiName) {
            customEmojiById = UnicodeEmojisDefault.getByName(emojiName);
          }
        }
        let tmp7 = null == customEmojiById;
        if (!tmp7) {
          tmp7 = !DoubleTapToReactUtils.areEmojisEqual(customEmojiById, first);
          const tmpResult = DoubleTapToReactUtils;
        }
        return tmp7;
      }, items2);
      const items3 = [selectedEmoji, stateFromStores];
      const memo1 = first1.useMemo(() => {
        if (null != first.id) {
          const obj2 = { id: first.id, animated: null, size: null };
          let animated = !stateFromStores;
          if (!stateFromStores) {
            animated = first.animated;
          }
          obj2.animated = animated;
          obj2.size = EMOJI_URL_BASE_SIZE;
          let url = AvatarUtilsDefault.getEmojiURL(obj2);
        } else {
          url = first.url;
        }
        return url;
      }, items3);
      const obj9 = {
        style: tmp.emoji,
        fastImageStyle: tmp.selectedCustomEmoji,
        textEmojiStyle: tmp.selectedTextEmoji,
        name: null,
        src: null,
      };
      let str = "";
      const obj8 = require("ReanimatedRexport");
      if (null == selectedEmoji.id) {
        str = selectedEmoji.surrogates;
      }
      obj9.name = str;
      obj9.src = memo1;
      const tmp18Result = memo(stateFromStores(selectedEmoji[23]), obj9);
      const items4 = [memo, selectedEmoji];
      callback1 = obj.useCallback(
        asyncGeneratorStep(async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === dependencyMap) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let tmp22 = tmp2;
                  if (memo) {
                    const DoubleTapReactionEmoji = tmp2(2028).DoubleTapReactionEmoji;
                    const obj5 = { emojiId: first.id, emojiName: null, animated: null, disableDoubleTap: false };
                    tmp22 = first;
                    obj5.emojiName = first.name;
                    obj5.animated = first.animated;
                    dependencyMap = 1;
                    c3 = 1;
                    const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                    return obj6;
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              }
              const obj7 = {
                emoji_id: closure_129_2.id,
                emoji_name: closure_129_2.name,
                emoji_animated: closure_129_2.animated,
                recommended: closure_129_4.current,
                location: tmp22(6681).DOUBLE_TAP_TO_REACT_ACTION_SHEET,
              };
              tmp22(1252).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj7);
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => closure_0(emoji[26]).showDoubleTapEmojiUpdatedToast({ emoji }), 500);
              c3 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            } catch (tmp24) {
              c3 = tmp;
              throw tmp24;
            }
          }
        }),
        items4,
      );
      const items5 = [stateFromStores, sharedValue, callback1];
      const items6 = [callback1];
      const callback2 = obj.useCallback(() => {
        closure_6(true);
        if (stateFromStores) {
          const result = set(0);
        } else {
          const obj = ReanimatedRexport;
          const withTimingResult = timing.withTiming(0, { duration: 0 });
          const obj4 = { duration: 100, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj4.easing = Easing.out(ReanimatedRexport.Easing.quad);
          const withTimingResult1 = timing.withTiming(1, obj4);
          const obj5 = timing;
          const fn = function t() {
            return closure_0(first[12]).runOnJS(setAnimateConfetti)(true);
          };
          const obj6 = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti };
          fn.__closure = obj6;
          fn.__workletHash = 9952663524137;
          fn.__initData = __initData;
          const withTimingResult2 = obj5.withTiming(1, { duration: 100 }, undefined, fn);
          const result1 = set(
            obj.withSequence(
              withTimingResult,
              withTimingResult1,
              withTimingResult2,
              spring.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 }),
            ),
          );
        }
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        let num6 = 900;
        if (stateFromStores) {
          num6 = 0;
        }
        ref.current = setTimeout(() => {
          ref.current = null;
          callback1();
          stateFromStores(first[27]).hideActionSheet();
        }, num6);
      }, items5);
      const callback3 = obj.useCallback(() => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = null;
        }
        callback1();
      }, items6);
      const obj10 = { onDismiss: callback3, children: null };
      const obj11 = { style: tmp.content, children: null };
      const obj12 = { style: tmp.emojiContainer, children: null };
      const obj13 = { style: null, children: null };
      const items7 = [animatedStyle, animatedStyle1];
      obj13.style = items7;
      const items8 = [tmp18Result];
      let tmp18Result2 = null;
      if (!stateFromStores) {
        tmp18Result2 = null;
        if (tmp2[0]) {
          const obj14 = { emojiComponent: tmp18Result };
          tmp18Result2 = tmp18(closure_18, obj14);
        }
      }
      items8[1] = tmp18Result2;
      obj13.children = items8;
      const items9 = [
        callback1(stateFromStores(selectedEmoji[12]).View, obj13),
        memo(require("Text/Text").Text, {
          variant: "text-lg/semibold",
          style: tmp.selectedEmojiText,
          color: "interactive-text-default",
          children: "1",
        }),
      ];
      obj12.children = items9;
      const items10 = [callback1(closure_6, obj12), , , , ,];
      const obj15 = {
        variant: "text-lg/semibold",
        style: tmp.selectedEmojiText,
        color: "interactive-text-default",
        children: "1",
      };
      const tmp20 = stateFromStores(selectedEmoji[23]);
      items10[1] = memo(require("Text/Text").Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        style: tmp.emojiName,
        children: ":" + selectedEmoji.name + ":",
      });
      const obj17 = { style: tmp.header, children: null };
      const obj18 = {
        style: tmp.alignCenter,
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = tmp3(tmp4[29]).intl;
      obj18.children = intl.string(require("util").t.F6lRAI);
      const items11 = [memo(require("Text/Text").Text, obj18), memo(require("renderChannelBadge").NewBadge, {})];
      obj17.children = items11;
      items10[2] = callback1(closure_6, obj17);
      const obj19 = { style: tmp.alignCenter, variant: "text-md/medium", color: "text-default", children: null };
      const intl2 = tmp3(tmp4[29]).intl;
      obj19.children = intl2.string(require("util").t.yIax8g);
      items10[3] = memo(require("Text/Text").Text, obj19);
      items10[4] = memo(stateFromStores(selectedEmoji[31]), {
        style: tmp.emojiSelectRow,
        selectedEmoji,
        onPressEmoji: callback,
      });
      const obj16 = {
        variant: "text-sm/normal",
        color: "text-subtle",
        style: tmp.emojiName,
        children: ":" + selectedEmoji.name + ":",
      };
      const obj20 = { style: tmp.emojiSelectRow, selectedEmoji, onPressEmoji: callback };
      const tmp3Result = require("DoubleTapToReactUtils");
      const intl3 = tmp3(tmp4[29]).intl;
      const string = intl3.string;
      const t = tmp3(tmp4[29]).t;
      if (areEmojisEqualResult) {
        let stringResult = string(t["NX+WJN"]);
      } else {
        stringResult = string(t.tdsiO9);
      }
      items10[5] = memo(require("components/Button/Button").Button, {
        grow: true,
        size: "lg",
        text: stringResult,
        variant: "primary",
        onPress: callback2,
        disabled: first1,
      });
      obj11.children = items10;
      obj10.children = callback1(closure_6, obj11);
      return memo(require("ActionSheet").ActionSheet, obj10);
    };
