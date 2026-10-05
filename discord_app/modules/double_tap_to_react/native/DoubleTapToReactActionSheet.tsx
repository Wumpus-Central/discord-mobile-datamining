// === Module 12019: DoubleTapToReactActionSheet ===

// Module 12019 (DoubleTapToReactActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserSettings from "UserSettings" /* 2028 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7627 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, emoji, set, set2, set3, set4;

let closure_12;
let num2;
let num3;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
function randomizeAnimationValues(leading) {
  let Easing;
  let opacityValue;
  let positionValue;
  let rotationValue;
  let sizeValue;
  ({ positionValue, rotationValue, sizeValue, opacityValue } = leading);
  let num = 0;
  if (!leading.leading) {
    const _Math = Math;
    num = 50 + 150 * Math.random();
  }
  set = positionValue.set;
  const withSequence = ReanimatedRexport.withSequence;
  ReanimatedRexport;
  const obj = timing;
  const withTimingResult = obj.withTiming(0, { duration: num });
  const withTiming = timing.withTiming;
  const obj2 = { duration: 600, easing: Easing.out(ReanimatedRexport.Easing.ease) };
  timing;
  const result = 10 * Math.random();
  Easing = ReanimatedRexport.Easing;
  const result1 = set(withSequence(withTimingResult, withTiming(result + 35, obj2)));
  set2 = rotationValue.set;
  const withSequence2 = ReanimatedRexport.withSequence;
  ReanimatedRexport;
  const obj3 = timing;
  const withTimingResult1 = obj3.withTiming(0, { duration: num });
  const withTiming2 = timing.withTiming;
  const obj4 = { duration: 600, easing: ReanimatedRexport.Easing.ease };
  timing;
  const result2 = 40 * Math.random();
  set2(withSequence2(withTimingResult1, withTiming2(result2 + 20, obj4)));
  set3 = sizeValue.set;
  const withSequence3 = ReanimatedRexport.withSequence;
  ReanimatedRexport;
  const obj5 = timing;
  const withTimingResult2 = obj5.withTiming(0, { duration: num });
  const obj6 = timing;
  const withTimingResult3 = obj6.withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
  const obj7 = timing;
  set3(withSequence3(withTimingResult2, withTimingResult3, obj7.withTiming(0.5, { duration: 360 })));
  set4 = opacityValue.set;
  const withSequence4 = ReanimatedRexport.withSequence;
  ReanimatedRexport;
  const obj8 = timing;
  const withTimingResult4 = obj8.withTiming(0, { duration: num });
  const obj9 = timing;
  const withTimingResult5 = obj9.withTiming(1, { duration: 360 });
  const obj10 = timing;
  set4(withSequence4(withTimingResult4, withTimingResult5, obj10.withTiming(0, { duration: 240 })));
}
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { emoji: { width: 48, height: 48, zIndex: 2 }, selectedCustomEmoji: { width: 48, height: 48 }, selectedTextEmoji: obj2, selectedEmojiText: obj3, content: obj4, emojiContainer: obj5, alignCenter: { textAlign: "center" }, emojiSelectRow: obj6, header: obj7, emojiName: obj8, burstContainer: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 } };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 36;
if (PlatformUtils.isIOS()) {
  num = 48;
}
obj2 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 56;
}
obj3 = { marginLeft: nativeDefault.space.PX_16, fontSize: 40, lineHeight: num3 };
PlatformUtils = PlatformUtils_mod;
num3 = undefined;
if (PlatformUtils.isIOS()) {
  num3 = 56;
}
obj4 = { flexDirection: "column", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 4, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, justifyContent: "center", alignItems: "center" };
obj6 = { marginVertical: nativeDefault.space.PX_24 };
obj7 = { marginBottom: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
const __initData = { code: "function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:\"absolute\",transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}" };
const __initData2 = { code: "function DoubleTapToReactActionSheetTsx2(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((left) => {
  let emojiComponent;
  let leading;
  let top;
  let obj = top(leading[15]);
  const cResult = obj.c(9);
  ({ emojiComponent, top } = left);
  left = left.left;
  leading = left.leading;
  const obj2 = top(leading[12]);
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = top(leading[12]);
  const sharedValue1 = obj3.useSharedValue(0);
  let obj4 = top(leading[12]);
  const sharedValue2 = obj4.useSharedValue(0.2);
  const obj5 = top(leading[12]);
  const sharedValue3 = obj5.useSharedValue(0);
  if (cResult[0] === leading) {
    if (cResult[1] === sharedValue3) {
      if (cResult[2] === sharedValue) {
        if (cResult[3] === sharedValue1) {
          let tmp8;
          if (cResult[4] === sharedValue2) {
            tmp8 = cResult[5];
          }
          const tmpResult = top(leading[16]);
          const mountLayoutEffect = tmpResult.useMountLayoutEffect(tmp8);
          const fn2 = function j() {
            let obj4;
            let result;
            let value;
            const items = [{ scale: sharedValue2.get() }, ];
            let num = 1;
            ({ scale: sharedValue2.get() });
            if (true === left) {
              num = -1;
            }
            const rect = { position: "absolute", transform: items, top: value, left: result, opacity: sharedValue3.get() };
            items[1] = { rotate: `${num * sharedValue1.get()}deg` };
            ({ rotate: `${num * sharedValue1.get()}deg` });
            if (true === top) {
              value = -sharedValue.get();
              obj4 = sharedValue;
            } else {
              obj4 = sharedValue;
              value = sharedValue.get();
            }
            const value2 = obj4.get();
            if (true === left) {
              result = 1.5 * -value2;
            } else {
              result = 1.5 * value2;
            }
            return rect;
          };
          let rect = { sizeValue: sharedValue2, left, rotationValue: sharedValue1, top, positionValue: sharedValue, opacityValue: sharedValue3 };
          fn2.__closure = rect;
          let num = 4841097522623;
          fn2.__workletHash = 4841097522623;
          fn2.__initData = __initData;
          const tmpResult2 = top(leading[12]);
          const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
          if (cResult[6] === animatedStyle) {
            let tmp12;
            if (cResult[7] === emojiComponent) {
              tmp12 = cResult[8];
            }
            return tmp12;
          }
          const obj6 = { style: animatedStyle, children: emojiComponent };
          const tmp15 = closure_11(left(leading[12]).View, obj6);
          cResult[6] = animatedStyle;
          cResult[7] = emojiComponent;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
      }
    }
  }
  const fn = function n() {
    const obj = { positionValue: sharedValue, rotationValue: sharedValue1, sizeValue: sharedValue2, opacityValue: sharedValue3, leading };
    randomizeAnimationValues(obj);
  };
  cResult[0] = leading;
  cResult[1] = sharedValue3;
  cResult[2] = sharedValue;
  cResult[3] = sharedValue1;
  cResult[4] = sharedValue2;
  cResult[5] = fn;
  tmp8 = fn;
}) : ((top) => {
  let bottom;
  let leading;
  let left;
  let right;
  top = top.top;
  ({ bottom, left } = top);
  ({ right, leading: dependencyMap } = top);
  const children = top.emojiComponent;
  let obj = top(4612);
  const sharedValue = obj.useSharedValue(0);
  const obj2 = top(4612);
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = top(4612);
  const sharedValue2 = obj3.useSharedValue(0.2);
  let obj4 = top(4612);
  const sharedValue3 = obj4.useSharedValue(0);
  const obj5 = top(5590);
  const mountLayoutEffect = obj5.useMountLayoutEffect(() => {
    const obj = { positionValue: sharedValue, rotationValue: sharedValue1, sizeValue: sharedValue2, opacityValue: sharedValue3, leading: dependencyMap };
    randomizeAnimationValues(obj);
  });
  const obj6 = top(4612);
  class S {
    constructor() {
      let obj4;
      let result;
      let value;
      const items = [{ scale: sharedValue2.get() }, ];
      let num = 1;
      ({ scale: sharedValue2.get() });
      if (true === left) {
        num = -1;
      }
      const rect = { position: "absolute", transform: items, top: value, left: result, opacity: sharedValue3.get() };
      items[1] = { rotate: `${num * sharedValue1.get()}deg` };
      ({ rotate: `${num * sharedValue1.get()}deg` });
      if (true === top) {
        value = -sharedValue.get();
        obj4 = sharedValue;
      } else {
        obj4 = sharedValue;
        value = sharedValue.get();
      }
      const value2 = obj4.get();
      if (true === left) {
        result = 1.5 * -value2;
      } else {
        result = 1.5 * value2;
      }
      return rect;
    }
  }
  S.__closure = { sizeValue: sharedValue2, left, rotationValue: sharedValue1, top, positionValue: sharedValue, opacityValue: sharedValue3 };
  S.__workletHash = 17194622427708;
  S.__initData = __initData2;
  const style = obj6.useAnimatedStyle(S);
  return closure_11(left(4612).View, { style, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiComponent) => {
  let items;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(11);
  emojiComponent = emojiComponent.emojiComponent;
  const tmp2 = closure_13();
  if (cResult[0] !== emojiComponent) {
    const rect = { emojiComponent, top: true, left: true, leading: true };
    const tmp9 = unpackModuleId(closure_17, rect);
    const rect1 = { emojiComponent, top: true, right: true };
    const tmp10 = unpackModuleId(closure_17, rect1);
    const rect2 = { emojiComponent, bottom: true, left: true };
    const tmp11 = unpackModuleId(closure_17, rect2);
    const rect3 = { emojiComponent, bottom: true, right: true };
    const tmp12 = unpackModuleId(closure_17, rect3);
    cResult[0] = emojiComponent;
    cResult[1] = tmp9;
    cResult[2] = tmp10;
    cResult[3] = tmp11;
    cResult[4] = tmp12;
    tmp6 = tmp12;
    tmp5 = tmp11;
    tmp4 = tmp10;
    tmp3 = tmp9;
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
          let tmp13;
          if (cResult[9] === tmp6) {
            tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
    }
  }
  const obj2 = { style: tmp2.burstContainer, children: items };
  items = [tmp3, tmp4, tmp5, tmp6];
  const tmp14 = closure_12(View, obj2);
  cResult[5] = tmp2.burstContainer;
  cResult[6] = tmp3;
  cResult[7] = tmp4;
  cResult[8] = tmp5;
  cResult[9] = tmp6;
  cResult[10] = tmp14;
  tmp13 = tmp14;
}) : ((emojiComponent) => {
  let items;
  emojiComponent = emojiComponent.emojiComponent;
  const obj = { style: closure_13().burstContainer, children: items };
  items = [unpackModuleId(closure_17, { emojiComponent, top: true, left: true, leading: true }), unpackModuleId(closure_17, { emojiComponent, top: true, right: true }), unpackModuleId(closure_17, { emojiComponent, bottom: true, left: true }), unpackModuleId(closure_17, { emojiComponent, bottom: true, right: true })];
  return closure_12(View, obj);
});
const __initData3 = { code: "function DoubleTapToReactActionSheetTsx3(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}" };
const __initData4 = { code: "function DoubleTapToReactActionSheetTsx4(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}" };
let closure_21 = { code: "function DoubleTapToReactActionSheetTsx5(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}" };
const __initData5 = { code: "function DoubleTapToReactActionSheetTsx6(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}" };
const __initData6 = { code: "function DoubleTapToReactActionSheetTsx7(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}" };
let closure_24 = { code: "function DoubleTapToReactActionSheetTsx8(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let alignCenter;
  let animated;
  let closure_4;
  let emojiId;
  let emojiName;
  let first1;
  let header;
  let items1;
  let items2;
  let items3;
  let items4;
  let ref;
  let require;
  let selectedEmoji;
  let setAnimateConfetti;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp2 = selectedEmoji;
  let obj = require("react");
  const cResult = obj.c(81);
  emoji = emoji.emoji;
  const tmp4 = closure_13();
  let obj2 = first1;
  let tmp6 = _slicedToArray(first1.useState(false), 2);
  [tmp7, require] = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = ref;
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
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const tmp5Result = _slicedToArray(obj2.useState(emoji), 2);
  selectedEmoji = tmp5Result[0];
  let closure_3 = tmp5Result[1];
  _slicedToArray = obj2.useRef(true);
  const tmp5Result2 = _slicedToArray(obj2.useState(false), 2);
  first1 = tmp5Result2[0];
  let closure_6 = tmp5Result2[1];
  ref = obj2.useRef(null);
  const tmpResult8 = require("ReanimatedRexport");
  const sharedValue = tmpResult8.useSharedValue(0);
  const tmpResult9 = require("ReanimatedRexport");
  class O {
    constructor() {
      let items;
      let obj3;
      let obj5;
      const obj = { transform: items };
      const obj2 = { scale: obj3.interpolate(sharedValue.get(), [0, 1], [1, 1.3]) };
      items = [obj2, ];
      obj3 = ReanimatedRexport;
      const obj4 = { translateY: obj5.interpolate(sharedValue.get(), [0, 1], [0, -20]) };
      items[1] = obj4;
      obj5 = ReanimatedRexport;
      return obj;
    }
  }
  let obj3 = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
  O.__closure = obj3;
  O.__workletHash = 2643600194543;
  O.__initData = __initData3;
  const animatedStyle = tmpResult9.useAnimatedStyle(O);
  const tmpResult10 = require("ReanimatedRexport");
  const sharedValue1 = tmpResult10.useSharedValue(1);
  const tmpResult11 = require("ReanimatedRexport");
  const sharedValue2 = tmpResult11.useSharedValue(1);
  const tmpResult12 = require("ReanimatedRexport");
  class I {
    constructor() {
      let items;
      const obj = { transform: items, opacity: sharedValue2.get() };
      items = [{ scale: sharedValue1.get() }];
      ({ scale: sharedValue1.get() });
      return obj;
    }
  }
  I.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
  I.__workletHash = 11620488487534;
  I.__initData = __initData4;
  const animatedStyle1 = tmpResult12.useAnimatedStyle(I);
  if (cResult[2] === sharedValue2) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === sharedValue1) {
        let tmp21;
        let tmp22;
        let url;
        if (cResult[5] === first1) {
          tmp21 = cResult[6];
        }
        if (cResult[7] !== selectedEmoji) {
          let customEmojiById;
          let DoubleTapReactionEmoji = require("UserSettings").DoubleTapReactionEmoji;
          const setting = DoubleTapReactionEmoji.getSetting();
          ({ emojiId, emojiName } = setting);
          if (null != emojiId) {
            customEmojiById = sharedValue.getCustomEmojiById(emojiId);
          } else {
            customEmojiById = null;
            if (null != emojiName) {
              const obj10 = stateFromStores(tmp2[20]);
              customEmojiById = obj10.getByName(emojiName);
            }
          }
          let flag = true;
          if (null != customEmojiById) {
            const tmpResult13 = require("DoubleTapToReactUtils");
            flag = !tmpResult13.areEmojisEqual(customEmojiById, selectedEmoji);
          }
          cResult[7] = selectedEmoji;
          cResult[8] = flag;
          tmp22 = flag;
        } else {
          tmp22 = cResult[8];
        }
        let closure_11 = tmp22;
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === selectedEmoji.animated) {
            if (cResult[11] === selectedEmoji.id) {
              let tmp27;
              if (cResult[12] === selectedEmoji.url) {
                tmp27 = cResult[13];
              }
              let str = "";
              if (null == selectedEmoji.id) {
                str = selectedEmoji.surrogates;
              }
              if (cResult[14] === tmp27) {
                if (cResult[15] === tmp4.emoji) {
                  if (cResult[16] === tmp4.selectedCustomEmoji) {
                    if (cResult[17] === tmp4.selectedTextEmoji) {
                      let tmp31;
                      if (cResult[18] === str) {
                        tmp31 = cResult[19];
                      }
                      if (cResult[20] === tmp22) {
                        let tmp35;
                        if (cResult[21] === selectedEmoji) {
                          tmp35 = cResult[22];
                        }
                        closure_12 = tmp35;
                        if (cResult[23] === stateFromStores) {
                          if (cResult[24] === sharedValue) {
                            let tmp37;
                            let tmp38;
                            if (cResult[25] === tmp35) {
                              tmp37 = cResult[26];
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
                              tmp38 = de;
                            } else {
                              tmp38 = cResult[28];
                            }
                            if (cResult[29] === animatedStyle1) {
                              let tmp40;
                              if (cResult[30] === animatedStyle) {
                                tmp40 = cResult[31];
                              }
                              if (cResult[32] === tmp7) {
                                if (cResult[33] === tmp31) {
                                  let tmp41;
                                  if (cResult[34] === stateFromStores) {
                                    tmp41 = cResult[35];
                                  }
                                  if (cResult[36] === tmp31) {
                                    if (cResult[37] === tmp40) {
                                      let tmp45;
                                      let tmp49;
                                      if (cResult[38] === tmp41) {
                                        tmp45 = cResult[39];
                                      }
                                      if (cResult[40] !== tmp4.selectedEmojiText) {
                                        let obj4 = { variant: "text-lg/semibold", style: tmp4.selectedEmojiText, color: "interactive-text-default", children: "1" };
                                        const tmp51 = closure_11(require("Text/Text").Text, obj4);
                                        cResult[40] = tmp4.selectedEmojiText;
                                        cResult[41] = tmp51;
                                        tmp49 = tmp51;
                                      } else {
                                        tmp49 = cResult[41];
                                      }
                                      if (cResult[42] === tmp4.emojiContainer) {
                                        if (cResult[43] === tmp45) {
                                          let tmp52;
                                          if (cResult[44] === tmp49) {
                                            tmp52 = cResult[45];
                                          }
                                          const _HermesInternal = HermesInternal;
                                          const combined = ":" + selectedEmoji.name + ":";
                                          if (cResult[46] === tmp4.emojiName) {
                                            let tmp57;
                                            let tmp60;
                                            let tmp62;
                                            let tmp65;
                                            if (cResult[47] === combined) {
                                              tmp57 = cResult[48];
                                            }
                                            const _Symbol = Symbol;
                                            ({ header, alignCenter } = tmp4);
                                            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl = require("intl").intl;
                                              const stringResult = intl.string(require("intl").t.F6lRAI);
                                              cResult[49] = stringResult;
                                              tmp60 = stringResult;
                                            } else {
                                              tmp60 = cResult[49];
                                            }
                                            if (cResult[50] !== tmp4.alignCenter) {
                                              let obj5 = { style: alignCenter, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: tmp60 };
                                              const tmp64 = closure_11(require("Text/Text").Text, obj5);
                                              cResult[50] = tmp4.alignCenter;
                                              cResult[51] = tmp64;
                                              tmp62 = tmp64;
                                            } else {
                                              tmp62 = cResult[51];
                                            }
                                            const _Symbol2 = Symbol;
                                            if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                              const tmp67 = closure_11(require("module_11919").NewBadge, {});
                                              cResult[52] = tmp67;
                                              tmp65 = tmp67;
                                            } else {
                                              tmp65 = cResult[52];
                                            }
                                            if (cResult[53] === tmp4.header) {
                                              let tmp68;
                                              let tmp72;
                                              let tmp74;
                                              if (cResult[54] === tmp62) {
                                                tmp68 = cResult[55];
                                              }
                                              const _Symbol3 = Symbol;
                                              const alignCenter2 = tmp4.alignCenter;
                                              if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                                const intl2 = require("intl").intl;
                                                const stringResult1 = intl2.string(require("intl").t.yIax8g);
                                                cResult[56] = stringResult1;
                                                tmp72 = stringResult1;
                                              } else {
                                                tmp72 = cResult[56];
                                              }
                                              if (cResult[57] !== tmp4.alignCenter) {
                                                let obj6 = { style: alignCenter2, variant: "text-md/medium", color: "text-default", children: tmp72 };
                                                const tmp76 = closure_11(require("Text/Text").Text, obj6);
                                                cResult[57] = tmp4.alignCenter;
                                                cResult[58] = tmp76;
                                                tmp74 = tmp76;
                                              } else {
                                                tmp74 = cResult[58];
                                              }
                                              if (cResult[59] === tmp21) {
                                                if (cResult[60] === selectedEmoji) {
                                                  let tmp77;
                                                  let stringResult2;
                                                  if (cResult[61] === tmp4.emojiSelectRow) {
                                                    tmp77 = cResult[62];
                                                  }
                                                  if (cResult[63] === emoji) {
                                                    let tmp81;
                                                    if (cResult[64] === selectedEmoji) {
                                                      tmp81 = cResult[65];
                                                    }
                                                    if (cResult[66] === tmp37) {
                                                      if (cResult[67] === first1) {
                                                        let tmp84;
                                                        if (cResult[68] === tmp81) {
                                                          tmp84 = cResult[69];
                                                        }
                                                        if (cResult[70] === tmp4.content) {
                                                          if (cResult[71] === tmp52) {
                                                            if (cResult[72] === tmp57) {
                                                              if (cResult[73] === tmp68) {
                                                                if (cResult[74] === tmp74) {
                                                                  if (cResult[75] === tmp77) {
                                                                    let tmp87;
                                                                    if (cResult[76] === tmp84) {
                                                                      tmp87 = cResult[77];
                                                                    }
                                                                    if (cResult[78] === tmp38) {
                                                                      let tmp91;
                                                                      if (cResult[79] === tmp87) {
                                                                        tmp91 = cResult[80];
                                                                      }
                                                                      return tmp91;
                                                                    }
                                                                    const obj7 = { onDismiss: tmp38, children: tmp87 };
                                                                    const tmp93 = closure_11(require("ActionSheet").ActionSheet, obj7);
                                                                    cResult[78] = tmp38;
                                                                    cResult[79] = tmp87;
                                                                    cResult[80] = tmp93;
                                                                    tmp91 = tmp93;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj8 = { style: tmp39, children: items1 };
                                                        items1 = [tmp52, tmp57, tmp68, tmp74, tmp77, tmp84];
                                                        const tmp90 = closure_12(closure_6, obj8);
                                                        cResult[70] = tmp4.content;
                                                        cResult[71] = tmp52;
                                                        cResult[72] = tmp57;
                                                        cResult[73] = tmp68;
                                                        cResult[74] = tmp74;
                                                        cResult[75] = tmp77;
                                                        cResult[76] = tmp84;
                                                        cResult[77] = tmp90;
                                                        tmp87 = tmp90;
                                                      }
                                                    }
                                                    const obj9 = { grow: true, size: "lg", text: tmp81, variant: "primary", onPress: tmp37, disabled: first1 };
                                                    const tmp86 = closure_11(require("components/Button/Button").Button, obj9);
                                                    cResult[66] = tmp37;
                                                    cResult[67] = first1;
                                                    cResult[68] = tmp81;
                                                    cResult[69] = tmp86;
                                                    tmp84 = tmp86;
                                                  }
                                                  const tmpResult14 = require("DoubleTapToReactUtils");
                                                  const areEmojisEqualResult = tmpResult14.areEmojisEqual(selectedEmoji, emoji);
                                                  const intl3 = require("intl").intl;
                                                  const string = intl3.string;
                                                  const t = require("intl").t;
                                                  if (areEmojisEqualResult) {
                                                    stringResult2 = string(t["NX+WJN"]);
                                                  } else {
                                                    stringResult2 = string(t.tdsiO9);
                                                  }
                                                  cResult[63] = emoji;
                                                  cResult[64] = selectedEmoji;
                                                  cResult[65] = stringResult2;
                                                  tmp81 = stringResult2;
                                                }
                                              }
                                              const obj11 = { style: tmp4.emojiSelectRow, selectedEmoji, onPressEmoji: tmp21 };
                                              const tmp80 = closure_11(stateFromStores(tmp2[31]), obj11);
                                              cResult[59] = tmp21;
                                              cResult[60] = selectedEmoji;
                                              cResult[61] = tmp4.emojiSelectRow;
                                              cResult[62] = tmp80;
                                              tmp77 = tmp80;
                                            }
                                            const obj12 = { style: header, children: items2 };
                                            items2 = [tmp62, tmp65];
                                            const tmp71 = closure_12(closure_6, obj12);
                                            cResult[53] = tmp4.header;
                                            cResult[54] = tmp62;
                                            cResult[55] = tmp71;
                                            tmp68 = tmp71;
                                          }
                                          const obj14 = { variant: "text-sm/normal", color: "text-subtle", style: tmp4.emojiName, children: combined };
                                          const tmp59 = closure_11(require("Text/Text").Text, obj14);
                                          cResult[46] = tmp4.emojiName;
                                          cResult[47] = combined;
                                          cResult[48] = tmp59;
                                          tmp57 = tmp59;
                                        }
                                      }
                                      const obj15 = { style: tmp4.emojiContainer, children: items3 };
                                      items3 = [tmp45, tmp49];
                                      const tmp55 = closure_12(closure_6, obj15);
                                      cResult[42] = tmp4.emojiContainer;
                                      cResult[43] = tmp45;
                                      cResult[44] = tmp49;
                                      cResult[45] = tmp55;
                                      tmp52 = tmp55;
                                    }
                                  }
                                  const obj16 = { style: tmp40, children: items4 };
                                  items4 = [tmp31, tmp41];
                                  const tmp48 = closure_12(stateFromStores(tmp2[12]).View, obj16);
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
                                  const obj17 = { emojiComponent: tmp31 };
                                  tmp42 = closure_11(closure_18, obj17);
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
                          let Easing;
                          closure_6(true);
                          if (stateFromStores) {
                            const result = set(0);
                          } else {
                            const withSequence = ReanimatedRexport.withSequence;
                            let obj = timing;
                            const withTimingResult = obj.withTiming(0, { duration: 0 });
                            const obj2 = { duration: 100, easing: Easing.out(ReanimatedRexport.Easing.quad) };
                            const withTiming = timing.withTiming;
                            timing;
                            Easing = ReanimatedRexport.Easing;
                            const withTimingResult1 = withTiming(1, obj2);
                            const fn = function t() {
                              const obj = require("ReanimatedRexport");
                              return obj.runOnJS(setAnimateConfetti)(true);
                            };
                            const tmp10 = timing;
                            const withTiming2 = tmp10.withTiming;
                            fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti: require };
                            fn.__workletHash = 9353152433668;
                            fn.__initData = __initData;
                            const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti: require };
                            const withTiming2Result = withTiming2(1, { duration: 100 }, undefined, fn);
                            const obj4 = spring;
                            const result1 = set(withSequence(withTimingResult, withTimingResult1, withTiming2Result, obj4.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 })));
                          }
                          if (null != ref.current) {
                            const _clearTimeout = clearTimeout;
                            clearTimeout(ref.current);
                          }
                          let num6 = 900;
                          const _setTimeout = setTimeout;
                          if (stateFromStores) {
                            num6 = 0;
                          }
                          ref.current = _setTimeout(() => {
                            ref.current = null;
                            closure_1_12();
                            const obj = stateFromStores(first[27]);
                            obj.hideActionSheet();
                          }, num6);
                        }
                        cResult[23] = stateFromStores;
                        cResult[24] = sharedValue;
                        cResult[25] = tmp35;
                        cResult[26] = ce;
                        tmp37 = ce;
                      }
                      _require = closure_3(function*() {
                        let user;
                        if (c3 === 2) {
                          c3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            let obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "IconComponent", done: null };
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
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                let closure_1 = tmp3;
                                closure_0 = tmp3;
                                if (closure_1_11) {
                                  const DoubleTapReactionEmoji = closure_0(selectedEmoji[19]).DoubleTapReactionEmoji;
                                  const obj4 = { emojiId: user.id, emojiName: user.name, animated: user.animated, disableDoubleTap: false };
                                  user = 1;
                                  c3 = 1;
                                  const obj5 = { value: DoubleTapReactionEmoji.updateSetting(obj4), done: false };
                                  return obj5;
                                }
                              }
                            } else if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c3 = 3;
                              let obj = { value, done: true };
                              return obj;
                            }
                            const obj6 = { emoji_id: user.id, emoji_name: user.name, emoji_animated: user.animated, recommended: ref.current, location: stateFromStores(selectedEmoji[25]).DOUBLE_TAP_TO_REACT_ACTION_SHEET };
                            const track = stateFromStores(selectedEmoji[24]).track;
                            const DOUBLE_TAP_REACT_EMOJI_UPDATED = constants.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                            const tmp8 = stateFromStores(selectedEmoji[24]);
                            track(DOUBLE_TAP_REACT_EMOJI_UPDATED, obj6);
                            const _setTimeout = setTimeout;
                            const timerId = setTimeout(() => {
                              const obj = closure_0(emoji[26]);
                              const obj2 = { emoji };
                              return obj.showDoubleTapEmojiUpdatedToast(obj2);
                            }, 500);
                            c3 = 3;
                            return { value: "IconComponent", done: null };
                          } catch (tmp23) {
                            c3 = 3;
                            throw tmp23;
                          }
                        }
                      });
                      const fn3 = function() {
                        return closure_0(...arguments);
                      };
                      cResult[20] = tmp22;
                      cResult[21] = selectedEmoji;
                      cResult[22] = fn3;
                      tmp35 = fn3;
                    }
                  }
                }
              }
              const obj18 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: str, src: tmp27 };
              ({ emoji: obj13.style, selectedCustomEmoji: obj13.fastImageStyle, selectedTextEmoji: obj13.textEmojiStyle } = tmp4);
              const tmp34 = closure_11(stateFromStores(tmp2[23]), obj18);
              cResult[14] = tmp27;
              cResult[15] = tmp4.emoji;
              cResult[16] = tmp4.selectedCustomEmoji;
              cResult[17] = tmp4.selectedTextEmoji;
              cResult[18] = str;
              cResult[19] = tmp34;
              tmp31 = tmp34;
            }
          }
        }
        if (null != selectedEmoji.id) {
          const obj19 = { id: selectedEmoji.id, animated, size: sharedValue2 };
          animated = !stateFromStores;
          const getEmojiURL = stateFromStores(tmp2[22]).getEmojiURL;
          stateFromStores(tmp2[22]);
          if (!stateFromStores) {
            animated = selectedEmoji.animated;
          }
          url = getEmojiURL(obj19);
        } else {
          url = selectedEmoji.url;
        }
        cResult[9] = stateFromStores;
        let num6 = 10;
        cResult[10] = selectedEmoji.animated;
        cResult[11] = selectedEmoji.id;
        cResult[12] = selectedEmoji.url;
        cResult[13] = url;
        tmp27 = url;
      }
    }
  }
  const fn2 = function z(arg0, current) {
    let closure_0 = arg0;
    if (!first1) {
      if (current) {
        const result = set(1);
        const result1 = sharedValue2.set(1);
      } else {
        const withSequence = require("ReanimatedRexport").withSequence;
        require("ReanimatedRexport");
        const obj = require("timing");
        const withTimingResult = obj.withTiming(0.7, { duration: 0 });
        const obj2 = require("spring");
        const result2 = set(withSequence(withTimingResult, obj2.withSpring(1, { stiffness: 1500, damping: 60, mass: 3 })));
        set2 = sharedValue2.set;
        const withSequence2 = require("ReanimatedRexport").withSequence;
        require("ReanimatedRexport");
        const obj3 = require("timing");
        const withTimingResult1 = obj3.withTiming(0.6, { duration: 0 });
        const obj4 = require("spring");
        set2(withSequence2(withTimingResult1, obj4.withSpring(1, { duration: 200, dampingRatio: 0.45, mass: 10, overshootClamping: true })));
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
}) : ((emoji) => {
  let closure_3;
  let closure_4;
  let closure_6;
  let first;
  let first1;
  let first2;
  let intl;
  let intl2;
  let items10;
  let items11;
  let items7;
  let items8;
  let items9;
  let obj11;
  let str;
  let stringResult;
  emoji = emoji.emoji;
  _require = undefined;
  first1 = undefined;
  closure_3 = undefined;
  first2 = undefined;
  closure_6 = undefined;
  let ref;
  let callback1;
  const tmp = closure_13();
  let obj = first2;
  [first, _require] = first2.useState(false);
  const tmp4 = _require;
  let obj2 = require("get initialized");
  let items = [ref];
  const stateFromStores = obj2.useStateFromStores(items, () => ref.useReducedMotion);
  [first1, closure_3] = first2.useState(emoji);
  _slicedToArray = first2.useRef(true);
  [first2, closure_6] = first2.useState(false);
  ref = first2.useRef(null);
  let obj3 = require("ReanimatedRexport");
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = require("ReanimatedRexport");
  let fn = function f() {
    let items;
    let obj3;
    let obj5;
    const obj = { transform: items };
    const obj2 = { scale: obj3.interpolate(sharedValue.get(), [0, 1], [1, 1.3]) };
    items = [obj2, ];
    obj3 = ReanimatedRexport;
    const obj4 = { translateY: obj5.interpolate(sharedValue.get(), [0, 1], [0, -20]) };
    items[1] = obj4;
    obj5 = ReanimatedRexport;
    return obj;
  };
  let obj5 = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
  fn.__closure = obj5;
  fn.__workletHash = 15740130833098;
  fn.__initData = __initData5;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = require("ReanimatedRexport");
  const sharedValue1 = obj6.useSharedValue(1);
  const obj7 = require("ReanimatedRexport");
  const sharedValue2 = obj7.useSharedValue(1);
  const fn2 = function j() {
    let items;
    const obj = { transform: items, opacity: sharedValue2.get() };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn2.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
  fn2.__workletHash = 15653504592077;
  fn2.__initData = __initData6;
  const items1 = [sharedValue1, sharedValue2, stateFromStores, first2];
  const obj8 = require("ReanimatedRexport");
  const animatedStyle1 = obj8.useAnimatedStyle(fn2);
  const items2 = [first1];
  const callback = first2.useCallback((arg0, current) => {
    let closure_0;
    setAnimateConfetti = arg0;
    if (!first2) {
      if (current) {
        const result = set(1);
        const result1 = sharedValue2.set(1);
      } else {
        const withSequence = setAnimateConfetti(first1[12]).withSequence;
        setAnimateConfetti(first1[12]);
        const obj = setAnimateConfetti(first1[13]);
        const withTimingResult = obj.withTiming(0.7, { duration: 0 });
        const obj2 = setAnimateConfetti(first1[18]);
        const result2 = set(withSequence(withTimingResult, obj2.withSpring(1, { stiffness: 1500, damping: 60, mass: 3 })));
        set2 = sharedValue2.set;
        const withSequence2 = setAnimateConfetti(first1[12]).withSequence;
        setAnimateConfetti(first1[12]);
        const obj3 = setAnimateConfetti(first1[13]);
        const withTimingResult1 = obj3.withTiming(0.6, { duration: 0 });
        const obj4 = setAnimateConfetti(first1[18]);
        set2(withSequence2(withTimingResult1, obj4.withSpring(1, { duration: 200, dampingRatio: 0.45, mass: 10, overshootClamping: true })));
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_3(closure_0);
        closure_4.current = current;
      }, 0);
    }
  }, items1);
  const memo = first2.useMemo(() => {
    let customEmojiById;
    let emojiId;
    let emojiName;
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    ({ emojiId, emojiName } = setting);
    if (null != emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(emojiId);
    } else {
      customEmojiById = null;
      if (null != emojiName) {
        const obj = UnicodeEmojisDefault;
        customEmojiById = obj.getByName(emojiName);
      }
    }
    let tmp7 = null == customEmojiById;
    if (!tmp7) {
      const tmpResult = DoubleTapToReactUtils;
      tmp7 = !tmpResult.areEmojisEqual(customEmojiById, first1);
    }
    return tmp7;
  }, items2);
  const items3 = [first1, stateFromStores];
  const memo1 = first2.useMemo(() => {
    let animated;
    let url;
    if (null != first1.id) {
      const obj = { id: first1.id, animated, size: EMOJI_URL_BASE_SIZE };
      animated = !stateFromStores;
      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
      AvatarUtilsDefault;
      if (!stateFromStores) {
        animated = first1.animated;
      }
      url = getEmojiURL(obj);
    } else {
      url = first1.url;
    }
    return url;
  }, items3);
  const obj9 = { style: tmp.emoji, fastImageStyle: tmp.selectedCustomEmoji, textEmojiStyle: tmp.selectedTextEmoji, name: str, src: memo1 };
  str = "";
  const tmp21 = stateFromStores(first1[23]);
  if (null == first1.id) {
    str = first1.surrogates;
  }
  const tmp19Result = memo(tmp21, obj9);
  const items4 = [memo, first1];
  callback1 = obj.useCallback(closure_3(function*() {
    let c2;
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === first1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (memo) {
            const DoubleTapReactionEmoji = tmp(first1[19]).DoubleTapReactionEmoji;
            const obj4 = { emojiId: first1.id, emojiName: first1.name, animated: first1.animated, disableDoubleTap: false };
            first1 = 1;
            c3 = 1;
            const obj5 = { value: DoubleTapReactionEmoji.updateSetting(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        const obj6 = { emoji_id: closure_129_2.id, emoji_name: closure_129_2.name, emoji_animated: closure_129_2.animated, recommended: closure_129_4.current, location: tmp(first1[25]).DOUBLE_TAP_TO_REACT_ACTION_SHEET };
        const track = tmp(first1[24]).track;
        const DOUBLE_TAP_REACT_EMOJI_UPDATED = constants.DOUBLE_TAP_REACT_EMOJI_UPDATED;
        const tmp9 = tmp(first1[24]);
        track(DOUBLE_TAP_REACT_EMOJI_UPDATED, obj6);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const obj = setAnimateConfetti(emoji[26]);
          const obj2 = { emoji };
          return obj.showDoubleTapEmojiUpdatedToast(obj2);
        }, 500);
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp24) {
        c3 = 3;
        throw tmp24;
      }
    }
  }), items4);
  const items5 = [stateFromStores, sharedValue, callback1];
  const items6 = [callback1];
  const callback2 = obj.useCallback(() => {
    let Easing;
    closure_6(true);
    if (stateFromStores) {
      const result = set(0);
    } else {
      const withSequence = ReanimatedRexport.withSequence;
      let obj = timing;
      const withTimingResult = obj.withTiming(0, { duration: 0 });
      const obj2 = { duration: 100, easing: Easing.out(ReanimatedRexport.Easing.quad) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const withTimingResult1 = withTiming(1, obj2);
      const fn = function t() {
        const obj = closure_0(first1[12]);
        return obj.runOnJS(closure_1_0)(true);
      };
      const tmp10 = timing;
      const withTiming2 = tmp10.withTiming;
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti };
      fn.__workletHash = 9952663524137;
      fn.__initData = __initData;
      const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti };
      const withTiming2Result = withTiming2(1, { duration: 100 }, undefined, fn);
      const obj4 = spring;
      const result1 = set(withSequence(withTimingResult, withTimingResult1, withTiming2Result, obj4.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 })));
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    let num6 = 900;
    const _setTimeout = setTimeout;
    if (stateFromStores) {
      num6 = 0;
    }
    ref.current = _setTimeout(() => {
      ref.current = null;
      callback1();
      const obj = stateFromStores(first1[27]);
      obj.hideActionSheet();
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
  const obj10 = { onDismiss: callback3, children: tmp26(closure_6, obj11) };
  obj11 = { style: tmp.content, children: items10 };
  const obj12 = { style: tmp.emojiContainer, children: items9 };
  const ActionSheet = tmp4(tmp5[33]).ActionSheet;
  const obj13 = { style: items7, children: items8 };
  items7 = [animatedStyle, animatedStyle1];
  items8 = [tmp19Result, ];
  let tmp19Result2 = null;
  View = tmp20(tmp5[12]).View;
  if (!stateFromStores) {
    tmp19Result2 = null;
    if (first) {
      const obj14 = { emojiComponent: tmp19Result };
      tmp19Result2 = tmp19(closure_18, obj14);
    }
  }
  items8[1] = tmp19Result2;
  items9 = [tmp26(View, obj13), ];
  const obj15 = { variant: "text-lg/semibold", style: tmp.selectedEmojiText, color: "interactive-text-default", children: "1" };
  items9[1] = memo(tmp4(first1[28]).Text, obj15);
  items10 = [tmp26(closure_6, obj12), , , , , ];
  const obj16 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.emojiName, children: ":" + first1.name + ":" };
  const Text = tmp4(tmp5[28]).Text;
  items10[1] = memo(Text, obj16);
  const obj17 = { style: tmp.header, children: items11 };
  const obj18 = { style: tmp.alignCenter, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl.string(tmp4(first1[29]).t.F6lRAI) };
  const Text2 = tmp4(tmp5[28]).Text;
  intl = tmp4(tmp5[29]).intl;
  items11 = [memo(Text2, obj18), memo(tmp4(first1[30]).NewBadge, {})];
  items10[2] = callback1(closure_6, obj17);
  const obj19 = { style: tmp.alignCenter, variant: "text-md/medium", color: "text-default", children: intl2.string(tmp4(first1[29]).t.yIax8g) };
  const Text3 = tmp4(tmp5[28]).Text;
  intl2 = tmp4(tmp5[29]).intl;
  items10[3] = memo(Text3, obj19);
  const obj20 = { style: tmp.emojiSelectRow, selectedEmoji: first1, onPressEmoji: callback };
  items10[4] = memo(stateFromStores(first1[31]), obj20);
  const Button = tmp4(tmp5[32]).Button;
  const tmp4Result = tmp4(first1[21]);
  const areEmojisEqualResult = tmp4Result.areEmojisEqual(first1, emoji);
  const intl3 = tmp4(tmp5[29]).intl;
  const string = intl3.string;
  const t = tmp4(tmp5[29]).t;
  if (areEmojisEqualResult) {
    stringResult = string(t["NX+WJN"]);
  } else {
    stringResult = string(t.tdsiO9);
  }
  items10[5] = memo(Button, { grow: true, size: "lg", text: stringResult, variant: "primary", onPress: callback2, disabled: first2 });
  return memo(ActionSheet, obj10);
});
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default tmp4;