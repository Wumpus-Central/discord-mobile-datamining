// discord_app/design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import AIShimmerTypes from "AIShimmerTypes.tsx";
import waveTransition2 from "waveTransition.tsx";
import createWaveTransition from "createWaveTransition.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function AIShimmerInner(arg0) {
  ({ variant, color, glyphColor, trailingWidth } = arg0);
  let sharedValue;
  pass = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  ref = undefined;
  let bound;
  closure_7 = undefined;
  ({ text, delay, initialDelay, duration, onComplete, onStart, style, ref } = arg0);
  const fontScale = ref.getFontScale();
  const tmp4 = sharedValue(pass[7]).TextStyleSheet[variant];
  const result = tmp4.fontSize * fontScale;
  const result1 = result * sharedValue(pass[8]).GLYPH_FONT_SCALE;
  const tmp7 = closure_10(tmp4.lineHeight * fontScale, result1);
  sharedValue = sharedValue(pass[9]).useSharedValue(0);
  let obj2 = sharedValue(pass[9]);
  const sharedValue1 = sharedValue(pass[9]).useSharedValue(1);
  [pass, _slicedToArray] = noop.useState(null);
  const obj3 = sharedValue(pass[9]);
  [tmp13, c4] = noop.useState(0);
  ref = noop.useRef(null);
  let num = trailingWidth;
  if (trailingWidth == null) {
    num = 0;
  }
  const sum = tmp13 + num;
  bound = Math.max(1, Math.ceil(sum / result1));
  closure_7 = obj.useRef(bound);
  const tmp12 = _slicedToArray(noop.useState(0), 2);
  const tmpResult = sharedValue(pass[10]);
  let current = tmpResult.useAIShimmerCycle({
    text,
    delay,
    initialDelay,
    duration,
    reducedMotion: noop.useContext(sharedValue(pass[6]).AccessibilityPreferencesContext).reducedMotion.enabled,
    trailingWidth,
    onComplete,
    onStart,
    ref,
    createController(arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.animationProgress = sharedValue;
      obj2.crossFadeOpacity = sharedValue1;
      obj2.glyphCount = function glyphCount() {
        return ref.current;
      };
      obj2.onPass = onPass;
      const waveTransition = createWaveTransition.createWaveTransition(obj2);
      closure_5.current = waveTransition;
      return waveTransition;
    },
  }).current;
  const items = [bound];
  const effect = obj.useEffect(() => {
    closure_7.current = bound;
    const current = ref.current;
    if (current != null) {
      current.refreshBand();
    }
  }, items);
  const items1 = [pass];
  const effect1 = obj.useEffect(() => {
    if (null != first) {
      const current = ref.current;
      if (current != null) {
        current.startQueuedPass(tmp.id);
      }
    }
  }, items1);
  if (null == pass) {
    const obj5 = {
      style: null,
      onLayout: null,
      accessible: true,
      accessibilityRole: "text",
      accessibilityLabel: null,
      children: null,
    };
    const items2 = [tmp7.container, style];
    obj5.style = items2;
    obj5.onLayout = tmp18;
    obj5.accessibilityLabel = current;
    const obj6 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.sizer, children: current };
    const items3 = [closure_7(tmp(tmp2[7]).Text, obj6)];
    if (null != pass) {
      if (sum > 0) {
        const obj7 = {
          pass,
          animationProgress: sharedValue,
          crossFadeOpacity: sharedValue1,
          glyphCount: bound,
          glyphFontSize: result1,
          variant,
          color,
          glyphColor: null,
          styles: null,
          animationWidth: null,
          clippingWindowWidth: null,
          overshoot: null,
        };
        if (glyphColor == null) {
          glyphColor = color;
        }
        obj7.glyphColor = glyphColor;
        obj7.styles = tmp7;
        obj7.animationWidth = sum;
        obj7.clippingWindowWidth = 2 * sum;
        obj7.overshoot = 0.5 * result1;
        let tmp22Result = tmp22(ShimmerLayers, obj7);
      }
      items3[1] = tmp22Result;
      obj5.children = items3;
      return closure_8(tmp21, obj5);
    }
    const obj8 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.layer, children: current };
    tmp22Result = tmp22(tmp(tmp2[7]).Text, obj8);
    tmp21 = bound;
  }
  const obj4 = {
    text,
    delay,
    initialDelay,
    duration,
    reducedMotion: noop.useContext(sharedValue(pass[6]).AccessibilityPreferencesContext).reducedMotion.enabled,
    trailingWidth,
    onComplete,
    onStart,
    ref,
    createController(arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.animationProgress = sharedValue;
      obj2.crossFadeOpacity = sharedValue1;
      obj2.glyphCount = function glyphCount() {
        return ref.current;
      };
      obj2.onPass = onPass;
      const waveTransition = createWaveTransition.createWaveTransition(obj2);
      closure_5.current = waveTransition;
      return waveTransition;
    },
  };
}
function ShimmerLayers(pass) {
  pass = pass.pass;
  ({
    animationProgress,
    glyphCount,
    glyphFontSize,
    variant,
    color,
    styles,
    animationWidth,
    clippingWindowWidth,
    overshoot,
  } = pass);
  let obj = { animationWidth, clippingWindowWidth, overshoot };
  ({ crossFadeOpacity, glyphColor } = pass);
  const merged = Object.assign(obj);
  const merged1 = Object.assign(obj);
  const obj4 = { animationProgress, crossFadeOpacity };
  let obj2 = { animationProgress, slot: "A" };
  let obj3 = { animationProgress, slot: "B" };
  const tmp2 = useAnimatedSlotStyles({ animationProgress, slot: "A" });
  const merged2 = Object.assign(obj);
  const animationProgress2 = obj4.animationProgress;
  closure_129_0 = animationProgress2;
  const crossFadeOpacity2 = obj4.crossFadeOpacity;
  closure_129_1 = crossFadeOpacity2;
  const animationWidth2 = obj4.animationWidth;
  closure_129_2 = animationWidth2;
  const clippingWindowWidth2 = obj4.clippingWindowWidth;
  closure_129_3 = clippingWindowWidth2;
  const overshoot2 = obj4.overshoot;
  closure_129_4 = overshoot2;
  const tmp4 = useAnimatedSlotStyles({ animationProgress, slot: "B" });
  const fn = function b() {
    value = pass.get();
    const diff = value - Math.floor(value);
    const bandEdgesAtResult = waveTransition2.bandEdgesAt(diff, dependencyMap, noop);
    const obj2 = { bandStart: bandEdgesAtResult.bandStart, bandEnd: bandEdgesAtResult.bandEnd, opacity: null };
    const obj3 = waveTransition2;
    obj2.opacity = obj3.glyphLayerOpacityAt(waveTransition2.easeTail(diff));
    return obj2;
  };
  const obj5 = pass(4561);
  fn.__closure = {
    animationProgress: animationProgress2,
    bandEdgesAt: pass(14504).bandEdgesAt,
    animationWidth: animationWidth2,
    overshoot: overshoot2,
    glyphLayerOpacityAt: pass(14504).glyphLayerOpacityAt,
    easeTail: pass(14504).easeTail,
  };
  fn.__workletHash = 5565898978148;
  fn.__initData = __initData9;
  const derivedValue = obj5.useDerivedValue(fn);
  closure_129_5 = derivedValue;
  const obj6 = {
    animationProgress: animationProgress2,
    bandEdgesAt: pass(14504).bandEdgesAt,
    animationWidth: animationWidth2,
    overshoot: overshoot2,
    glyphLayerOpacityAt: pass(14504).glyphLayerOpacityAt,
    easeTail: pass(14504).easeTail,
  };
  class T {
    constructor() {
      obj = { opacity: closure_1_1.get() };
      return obj;
    }
  }
  T.__closure = { crossFadeOpacity: crossFadeOpacity2 };
  T.__workletHash = 1960911197633;
  T.__initData = __initData10;
  const animatedStyle = pass(4561).useAnimatedStyle(T);
  const obj7 = pass(4561);
  const fn2 = function f() {
    value = closure_1_5.get();
    const obj = { opacity: value.opacity, transform: null };
    const items = [{ translateX: value.bandStart }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { bandState: derivedValue };
  fn2.__workletHash = 1697100745255;
  fn2.__initData = __initData11;
  const animatedStyle1 = pass(4561).useAnimatedStyle(fn2);
  const obj8 = pass(4561);
  const fn3 = function y() {
    value = closure_1_5.get();
    const obj = { transform: null };
    const items = [{ translateX: value.bandEnd - value.bandStart - _slicedToArray }];
    obj.transform = items;
    return obj;
  };
  fn3.__closure = { bandState: derivedValue, clippingWindowWidth: clippingWindowWidth2 };
  fn3.__workletHash = 14480924886008;
  fn3.__initData = __initData12;
  const animatedStyle2 = pass(4561).useAnimatedStyle(fn3);
  const obj9 = pass(4561);
  const fn4 = function _() {
    const obj = { transform: null };
    const items = [{ translateX: _slicedToArray - closure_1_5.get().bandEnd }];
    obj.transform = items;
    return obj;
  };
  fn4.__closure = { bandState: derivedValue, clippingWindowWidth: clippingWindowWidth2 };
  fn4.__workletHash = 9956205645387;
  fn4.__initData = __initData13;
  let items = [pass.slotA];
  const animatedStyle3 = pass(4561).useAnimatedStyle(fn4);
  const items1 = [pass.slotB];
  const memo = noop.useMemo(() => waveTransition2.shiftedLineFor(pass.slotA), items);
  const memo1 = noop.useMemo(() => waveTransition2.shiftedLineFor(pass.slotB), items1);
  const obj11 = {
    style: null,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items2 = [styles.layer, { width: animationWidth }, animatedStyle];
  obj11.style = items2;
  const items3 = [
    closure_7(ShimmerTextSlot, {
      text: pass.slotA,
      shiftedText: memo,
      variant,
      color,
      animationWidth,
      clippingWindowWidth,
      animatedStyles: tmp2,
      styles,
    }),
    closure_7(ShimmerTextSlot, {
      text: pass.slotB,
      shiftedText: memo1,
      variant,
      color,
      animationWidth,
      clippingWindowWidth,
      animatedStyles: tmp4,
      styles,
    }),
  ];
  const obj14 = { style: null, children: null };
  const items4 = [styles.window, { width: clippingWindowWidth }, animatedStyle1];
  obj14.style = items4;
  const obj15 = { style: null, children: null };
  const items5 = [styles.window, { width: clippingWindowWidth }, animatedStyle2];
  obj15.style = items5;
  const obj16 = {
    style: null,
    children: closure_7(closure_16, {
      animationProgress,
      slotCount: glyphCount,
      overshootInSlots: overshoot / glyphFontSize,
      glyphChoices: pass.band,
      fontSize: glyphFontSize,
      color: glyphColor,
      style: styles.glyphLayer,
    }),
  };
  const items6 = [styles.layer, { width: glyphCount * glyphFontSize }, animatedStyle3];
  obj16.style = items6;
  obj15.children = closure_7(ReanimatedRexportDefault.View, obj16);
  obj14.children = closure_7(ReanimatedRexportDefault.View, obj15);
  items3[2] = closure_7(ReanimatedRexportDefault.View, obj14);
  obj11.children = items3;
  return closure_8(ReanimatedRexportDefault.View, obj11);
}
function ShimmerTextSlot(arg0) {
  ({ variant, color, animationWidth, clippingWindowWidth, animatedStyles, styles } = arg0);
  const obj = { children: null };
  ({ text, shiftedText } = arg0);
  const obj2 = { style: null, children: null };
  const items = [styles.window, { width: clippingWindowWidth }, animatedStyles.plainWindow];
  obj2.style = items;
  const obj3 = {
    style: null,
    children: React5(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: text }),
  };
  const items1 = [styles.layer, { width: animationWidth }, animatedStyles.plainText];
  obj3.style = items1;
  obj2.children = React5(ReanimatedRexportDefault.View, obj3);
  const items2 = [React5(ReanimatedRexportDefault.View, obj2)];
  const obj4 = { style: null, children: null };
  const items3 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedOuterWindow];
  obj4.style = items3;
  const obj5 = { style: null, children: null };
  const items4 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedInnerWindow];
  obj5.style = items4;
  const obj6 = {
    style: null,
    children: React5(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: shiftedText }),
  };
  const items5 = [styles.layer, { width: animationWidth }, animatedStyles.shiftedText];
  obj6.style = items5;
  obj5.children = React5(ReanimatedRexportDefault.View, obj6);
  obj4.children = React5(ReanimatedRexportDefault.View, obj5);
  items2[1] = React5(ReanimatedRexportDefault.View, obj4);
  obj.children = items2;
  return React6(React7, obj);
}
function useAnimatedSlotStyles(animationProgress) {
  animationProgress = animationProgress.animationProgress;
  const slot = animationProgress.slot;
  const animationWidth = animationProgress.animationWidth;
  const clippingWindowWidth = animationProgress.clippingWindowWidth;
  const overshoot = animationProgress.overshoot;
  const fn = function c() {
    value = animationProgress.get();
    const rounded = Math.floor(value);
    const obj = {};
    const merged = Object.assign(waveTransition2.bandEdgesAt(value - rounded, animationWidth, overshoot));
    obj.isIncoming = createWaveTransition.incomingSlotForPass(rounded) === slot;
    return obj;
  };
  let obj = animationProgress(animationWidth[9]);
  fn.__closure = {
    animationProgress,
    bandEdgesAt: animationProgress(animationWidth[8]).bandEdgesAt,
    animationWidth,
    overshoot,
    incomingSlotForPass: animationProgress(animationWidth[11]).incomingSlotForPass,
    slot,
  };
  fn.__workletHash = 13081262734940;
  fn.__initData = __initData3;
  const derivedValue = obj.useDerivedValue(fn);
  const obj3 = {
    plainWindow: null,
    plainText: null,
    shiftedOuterWindow: null,
    shiftedInnerWindow: null,
    shiftedText: null,
  };
  let obj2 = {
    animationProgress,
    bandEdgesAt: animationProgress(animationWidth[8]).bandEdgesAt,
    animationWidth,
    overshoot,
    incomingSlotForPass: animationProgress(animationWidth[11]).incomingSlotForPass,
    slot,
  };
  const fn2 = function h() {
    value = derivedValue.get();
    let outgoingTextStart = value.outgoingTextStart;
    if (value.isIncoming) {
      outgoingTextStart = tmp2 - clippingWindowWidth;
    }
    const obj = { transform: null };
    const items = [{ translateX: outgoingTextStart }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn2.__workletHash = 9591569129869;
  fn2.__initData = __initData4;
  obj3.plainWindow = animationProgress(animationWidth[9]).useAnimatedStyle(fn2);
  const obj4 = animationProgress(animationWidth[9]);
  const fn3 = function u() {
    value = derivedValue.get();
    if (value.isIncoming) {
      let diff = clippingWindowWidth - tmp2;
    } else {
      diff = -tmp3;
    }
    const obj = { transform: null };
    const items = [{ translateX: diff }];
    obj.transform = items;
    return obj;
  };
  fn3.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn3.__workletHash = 13527163592001;
  fn3.__initData = __initData5;
  obj3.plainText = animationProgress(animationWidth[9]).useAnimatedStyle(fn3);
  const obj5 = animationProgress(animationWidth[9]);
  class S {
    constructor() {
      value = closure_5.get();
      bandEnd = value.bandEnd;
      obj = { opacity: closure_0(closure_2[8]).SHIFTED_OPACITY, transform: null };
      ({ bandStart, isIncoming } = value);
      if (isIncoming) {
        bandEnd = bandStart;
      }
      items = [];
      items[0] = { translateX: bandEnd };
      obj.transform = items;
      return obj;
    }
  }
  const obj6 = animationProgress(animationWidth[9]);
  S.__closure = { slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[8]).SHIFTED_OPACITY };
  S.__workletHash = 9376178759405;
  S.__initData = __initData6;
  obj3.shiftedOuterWindow = obj6.useAnimatedStyle(S);
  const obj7 = { slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[8]).SHIFTED_OPACITY };
  const fn4 = function p() {
    value = derivedValue.get();
    const obj = { transform: null };
    const items = [
      {
        translateX:
          (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) -
          clippingWindowWidth,
      },
    ];
    obj.transform = items;
    return obj;
  };
  fn4.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn4.__workletHash = 5550998645378;
  fn4.__initData = __initData7;
  obj3.shiftedInnerWindow = animationProgress(animationWidth[9]).useAnimatedStyle(fn4);
  const obj8 = animationProgress(animationWidth[9]);
  const fn5 = function _() {
    value = derivedValue.get();
    let incomingTextEnd = value.outgoingTextStart;
    if (value.isIncoming) {
      incomingTextEnd = value.incomingTextEnd;
    }
    const obj = { transform: null };
    const items = [{ translateX: clippingWindowWidth - incomingTextEnd }];
    obj.transform = items;
    return obj;
  };
  fn5.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn5.__workletHash = 5116410661440;
  fn5.__initData = __initData8;
  obj3.shiftedText = animationProgress(animationWidth[9]).useAnimatedStyle(fn5);
  return obj3;
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4829);
let closure_10 = createStyles.createStyles((height, height2) => {
  const obj = {
    container: { alignSelf: "flex-start", height },
    sizer: { opacity: 0 },
    layer: { position: "absolute", top: 0, left: 0, height },
    glyphLayer: null,
    window: { position: "absolute", top: 0, left: 0, height, overflow: "hidden" },
  };
  const rect = { position: "absolute", top: (height - height2) / 2, left: 0, height: height2 };
  obj.glyphLayer = rect;
  return obj;
});
const __initData = {
  code: "function AIShimmerNativeTsx1(){const{animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);}",
};
const __initData2 = {
  code: "function AIShimmerNativeTsx2(next,previous){const{runOnJS,setGlyphs}=this.__closure;if(next===previous)return;runOnJS(setGlyphs)(next);}",
};
let closure_16 = noop.memo((animationProgress) => {
  animationProgress = animationProgress.animationProgress;
  const slotCount = animationProgress.slotCount;
  const overshootInSlots = animationProgress.overshootInSlots;
  const glyphChoices = animationProgress.glyphChoices;
  noop = undefined;
  ({ fontSize, color, style } = animationProgress);
  const children = glyphChoices(noop.useState(glyphChoices), 2);
  noop = tmp2;
  class T {
    constructor() {
      value = animationProgress.get();
      result = Math.floor(30 * (value - Math.floor(value))) / 30;
      obj = closure_0(closure_2[8]);
      return obj.bandGlyphsAt(result, slotCount, glyphChoices, overshootInSlots);
    }
  }
  let obj = animationProgress(overshootInSlots[9]);
  T.__closure = {
    animationProgress,
    BAND_UPDATES_PER_PASS: 30,
    bandGlyphsAt: animationProgress(overshootInSlots[8]).bandGlyphsAt,
    slotCount,
    glyphChoices,
    overshootInSlots,
  };
  T.__workletHash = 7805477121955;
  T.__initData = __initData;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_4)(arg0);
    }
  };
  const obj2 = {
    animationProgress,
    BAND_UPDATES_PER_PASS: 30,
    bandGlyphsAt: animationProgress(overshootInSlots[8]).bandGlyphsAt,
    slotCount,
    glyphChoices,
    overshootInSlots,
  };
  fn.__closure = { runOnJS: animationProgress(overshootInSlots[9]).runOnJS, setGlyphs: children[1] };
  fn.__workletHash = 1613883007105;
  fn.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(T, fn);
  return closure_7(animationProgress(overshootInSlots[12]).AIGlyphText, {
    size,
    color,
    allowFontScaling: false,
    numberOfLines: 1,
    ellipsizeMode: "clip",
    style,
    children: children[0],
  });
});
const __initData3 = {
  code: "function AIShimmerNativeTsx3(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot}=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};}",
};
const __initData4 = {
  code: "function AIShimmerNativeTsx4(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};}",
};
const __initData5 = {
  code: "function AIShimmerNativeTsx5(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?clippingWindowWidth-incomingTextEnd:-outgoingTextStart}]};}",
};
const __initData6 = {
  code: "function AIShimmerNativeTsx6(){const{slotState,SHIFTED_OPACITY}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming?bandStart:bandEnd}]};}",
};
const __initData7 = {
  code: "function AIShimmerNativeTsx7(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,bandStart:bandStart,bandEnd:bandEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();const shiftedWidth=isIncoming?incomingTextEnd-bandStart:outgoingTextStart-bandEnd;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};}",
};
const __initData8 = {
  code: "function AIShimmerNativeTsx8(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming?incomingTextEnd:outgoingTextStart)}]};}",
};
const __initData9 = {
  code: "function AIShimmerNativeTsx9(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};}",
};
const __initData10 = {
  code: "function AIShimmerNativeTsx10(){const{crossFadeOpacity}=this.__closure;return{opacity:crossFadeOpacity.get()};}",
};
const __initData11 = {
  code: "function AIShimmerNativeTsx11(){const{bandState}=this.__closure;const{bandStart:bandStart,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart}]};}",
};
const __initData12 = {
  code: "function AIShimmerNativeTsx12(){const{bandState,clippingWindowWidth}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:bandEnd-bandStart-clippingWindowWidth}]};}",
};
const __initData13 = {
  code: "function AIShimmerNativeTsx13(){const{bandState,clippingWindowWidth}=this.__closure;const{bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx");

export const AIShimmer = noop.memo((variant) => {
  let str = variant.variant;
  if (str === undefined) {
    str = "text-md/normal";
  }
  let AI_TEXT_EFFECT_DEFAULT_DELAY = variant.delay;
  if (AI_TEXT_EFFECT_DEFAULT_DELAY === undefined) {
    AI_TEXT_EFFECT_DEFAULT_DELAY = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DELAY;
  }
  let num = variant.initialDelay;
  if (num === undefined) {
    num = 0;
  }
  let AI_TEXT_EFFECT_DEFAULT_DURATION = variant.duration;
  if (AI_TEXT_EFFECT_DEFAULT_DURATION === undefined) {
    AI_TEXT_EFFECT_DEFAULT_DURATION = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DURATION;
  }
  const merged = Object.assign(
    Object.assign(variant, Object.assign({ variant: 0, delay: 0, initialDelay: 0, duration: 0 })),
  );
  return React5(
    AIShimmerInner,
    { variant: str, delay: AI_TEXT_EFFECT_DEFAULT_DELAY, initialDelay: num, duration: AI_TEXT_EFFECT_DEFAULT_DURATION },
    str,
  );
});
