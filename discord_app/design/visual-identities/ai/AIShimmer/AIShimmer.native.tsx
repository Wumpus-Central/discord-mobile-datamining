// discord_app/design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import Text_Text from "../../../components/Text/native/Text.tsx";
import AIGlyphText from "../AIGlyphText.native.tsx";
import AIShimmerTypes from "AIShimmerTypes.tsx";
import waveTransition2 from "waveTransition.tsx";
import createWaveTransition from "createWaveTransition.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function AIShimmerInner(arg0) {
  ({ variant, color, glyphColor, trailingWidth } = arg0);
  let sharedValue;
  pass = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  fontScale = undefined;
  let bound;
  closure_7 = undefined;
  ({ text, delay, initialDelay, duration, onComplete, onStart, style, ref } = arg0);
  fontScale = fontScale.getFontScale();
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
  fontScale = noop.useRef(null);
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
  items = [bound];
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
  _require = pass;
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
  const obj2 = { animationProgress, slot: "A" };
  const obj3 = { animationProgress, slot: "B" };
  const tmp2 = useAnimatedSlotStyles({ animationProgress, slot: "A" });
  const merged2 = Object.assign(obj);
  const clippingWindowWidth2 = obj4.clippingWindowWidth;
  ({
    animationProgress: animationProgress2,
    crossFadeOpacity: crossFadeOpacity2,
    animationWidth: animationWidth2,
    overshoot: overshoot2,
  } = obj4);
  const tmp4 = useAnimatedSlotStyles({ animationProgress, slot: "B" });
  items = [
    closure_24,
    animationProgress2,
    require("waveTransition").bandEdgesAt,
    animationWidth2,
    overshoot2,
    require("waveTransition").glyphLayerOpacityAt,
    require("waveTransition").easeTail,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class AIShimmerNativeTsx9 {
    constructor() {
      value = closure_0.get();
      diff = value - Math.floor(value);
      tmp3 = closure_1(diff, closure_2, closure_3);
      obj = { bandStart: tmp3.bandStart, bandEnd: tmp3.bandEnd, opacity: closure_4(closure_5(diff)) };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  AIShimmerNativeTsx9.__closure = items1;
  AIShimmerNativeTsx9.__workletHash = 5793871475453;
  AIShimmerNativeTsx9.__initData = tmp8;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(AIShimmerNativeTsx9);
  const obj5 = require("../../../../../_runtime/metro/01652__.js");
  const items2 = [closure_25, crossFadeOpacity2];
  _require = undefined;
  [tmp16, tmp17] = items2;
  class AIShimmerNativeTsx10 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp17];
  AIShimmerNativeTsx10.__closure = items3;
  AIShimmerNativeTsx10.__workletHash = 4137951391928;
  AIShimmerNativeTsx10.__initData = tmp16;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(AIShimmerNativeTsx10);
  const tmp6Result = require("../../../../../_runtime/metro/01652__.js");
  const items4 = [closure_26, derivedValue];
  _require = undefined;
  [tmp19, tmp20] = items4;
  class AIShimmerNativeTsx11 {
    constructor() {
      value = closure_0.get();
      obj = { opacity: value.opacity, transform: null };
      obj1 = { translateX: value.bandStart };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp20];
  AIShimmerNativeTsx11.__closure = items5;
  AIShimmerNativeTsx11.__workletHash = 14375697888926;
  AIShimmerNativeTsx11.__initData = tmp19;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(AIShimmerNativeTsx11);
  const tmp6Result4 = require("../../../../../_runtime/metro/01652__.js");
  const items6 = [closure_27, derivedValue, clippingWindowWidth2];
  _require = undefined;
  importDefault = undefined;
  [tmp22, tmp23, tmp24] = items6;
  class AIShimmerNativeTsx12 {
    constructor() {
      value = closure_0.get();
      obj = { transform: null };
      obj1 = { translateX: value.bandEnd - value.bandStart - closure_1 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp23, tmp24];
  AIShimmerNativeTsx12.__closure = items7;
  AIShimmerNativeTsx12.__workletHash = 1324009353313;
  AIShimmerNativeTsx12.__initData = tmp22;
  const animatedStyle2 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(AIShimmerNativeTsx12);
  const tmp6Result5 = require("../../../../../_runtime/metro/01652__.js");
  const items8 = [closure_28, derivedValue, clippingWindowWidth2];
  _require = undefined;
  importDefault = undefined;
  [tmp26, tmp27, tmp28] = items8;
  class AIShimmerNativeTsx13 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: closure_1 - closure_0.get().bandEnd };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items9 = [tmp27, tmp28];
  AIShimmerNativeTsx13.__closure = items9;
  AIShimmerNativeTsx13.__workletHash = 1661222839154;
  AIShimmerNativeTsx13.__initData = tmp26;
  const items10 = [pass.slotA];
  const animatedStyle3 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(AIShimmerNativeTsx13);
  const items11 = [pass.slotB];
  const memo = noop.useMemo(() => waveTransition2.shiftedLineFor(_undefined.slotA), items10);
  const memo1 = noop.useMemo(() => waveTransition2.shiftedLineFor(_undefined.slotB), items11);
  const obj6 = {
    style: null,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items12 = [styles.layer, { width: animationWidth }, animatedStyle];
  obj6.style = items12;
  const items13 = [
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
  const obj9 = { style: null, children: null };
  const items14 = [styles.window, { width: clippingWindowWidth }, animatedStyle1];
  obj9.style = items14;
  const obj10 = { style: null, children: null };
  const items15 = [styles.window, { width: clippingWindowWidth }, animatedStyle2];
  obj10.style = items15;
  const obj11 = {
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
  const items16 = [styles.layer, { width: glyphCount * glyphFontSize }, animatedStyle3];
  obj11.style = items16;
  obj10.children = closure_7(_modDef1652.View, obj11);
  obj9.children = closure_7(_modDef1652.View, obj10);
  items13[2] = closure_7(_modDef1652.View, obj9);
  obj6.children = items13;
  return closure_8(_modDef1652.View, obj6);
}
function ShimmerTextSlot(arg0) {
  ({ variant, color, animationWidth, clippingWindowWidth, animatedStyles, styles } = arg0);
  const obj = { children: null };
  ({ text, shiftedText } = arg0);
  const obj2 = { style: null, children: null };
  items = [styles.window, { width: clippingWindowWidth }, animatedStyles.plainWindow];
  obj2.style = items;
  const obj3 = {
    style: null,
    children: metroImportDefault(Text_Text.Text, {
      variant,
      color,
      lineClamp: 1,
      ellipsizeMode: "clip",
      children: text,
    }),
  };
  const items1 = [styles.layer, { width: animationWidth }, animatedStyles.plainText];
  obj3.style = items1;
  obj2.children = metroImportDefault(_modDef1652.View, obj3);
  const items2 = [metroImportDefault(_modDef1652.View, obj2)];
  const obj4 = { style: null, children: null };
  const items3 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedOuterWindow];
  obj4.style = items3;
  const obj5 = { style: null, children: null };
  const items4 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedInnerWindow];
  obj5.style = items4;
  const obj6 = {
    style: null,
    children: metroImportDefault(Text_Text.Text, {
      variant,
      color,
      lineClamp: 1,
      ellipsizeMode: "clip",
      children: shiftedText,
    }),
  };
  const items5 = [styles.layer, { width: animationWidth }, animatedStyles.shiftedText];
  obj6.style = items5;
  obj5.children = metroImportDefault(_modDef1652.View, obj6);
  obj4.children = metroImportDefault(_modDef1652.View, obj5);
  items2[1] = metroImportDefault(_modDef1652.View, obj4);
  obj.children = items2;
  return React5(React6, obj);
}
function useAnimatedSlotStyles(clippingWindowWidth) {
  clippingWindowWidth = clippingWindowWidth.clippingWindowWidth;
  ({ animationProgress, slot, animationWidth, overshoot } = clippingWindowWidth);
  items = [
    closure_17,
    animationProgress,
    waveTransition2.bandEdgesAt,
    animationWidth,
    overshoot,
    createWaveTransition.incomingSlotForPass,
    slot,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class AIShimmerNativeTsx3 {
    constructor() {
      value = closure_0.get();
      rounded = Math.floor(value);
      obj = {};
      merged = Object.assign(closure_1(value - rounded, closure_2, closure_3));
      obj.isIncoming = closure_4(rounded) === closure_5;
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  AIShimmerNativeTsx3.__closure = items1;
  AIShimmerNativeTsx3.__workletHash = 1280666156005;
  AIShimmerNativeTsx3.__initData = tmp3;
  const derivedValue = _mod1652.useDerivedValue(AIShimmerNativeTsx3);
  const items2 = [closure_18, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items2;
  class AIShimmerNativeTsx4 {
    constructor() {
      value = closure_0.get();
      outgoingTextStart = value.outgoingTextStart;
      if (value.isIncoming) {
        tmp3 = closure_1;
        outgoingTextStart = tmp2 - closure_1;
      }
      obj = { transform: null };
      items = [];
      items[0] = { translateX: outgoingTextStart };
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp12, tmp13];
  AIShimmerNativeTsx4.__closure = items3;
  AIShimmerNativeTsx4.__workletHash = 9334787013812;
  AIShimmerNativeTsx4.__initData = tmp11;
  const animatedStyle = _mod1652.useAnimatedStyle(AIShimmerNativeTsx4);
  const tmpResult = _mod1652;
  const items4 = [closure_19, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp15, tmp16, tmp17] = items4;
  class AIShimmerNativeTsx5 {
    constructor() {
      value = closure_0.get();
      if (value.isIncoming) {
        tmp5 = closure_1;
        diff = closure_1 - tmp2;
      } else {
        diff = -tmp3;
      }
      obj = { transform: null };
      items = [];
      items[0] = { translateX: diff };
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp16, tmp17];
  AIShimmerNativeTsx5.__closure = items5;
  AIShimmerNativeTsx5.__workletHash = 10286408218584;
  AIShimmerNativeTsx5.__initData = tmp15;
  const animatedStyle1 = _mod1652.useAnimatedStyle(AIShimmerNativeTsx5);
  const tmpResult5 = _mod1652;
  const items6 = [closure_20, derivedValue, waveTransition2.SHIFTED_OPACITY];
  c0 = undefined;
  c1 = undefined;
  [tmp19, tmp20, tmp21] = items6;
  class AIShimmerNativeTsx6 {
    constructor() {
      value = closure_0.get();
      bandStart = value.bandEnd;
      obj = { opacity: closure_1, transform: null };
      if (value.isIncoming) {
        bandStart = value.bandStart;
      }
      items = [];
      items[0] = { translateX: bandStart };
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp20, tmp21];
  AIShimmerNativeTsx6.__closure = items7;
  AIShimmerNativeTsx6.__workletHash = 9677475424724;
  AIShimmerNativeTsx6.__initData = tmp19;
  const animatedStyle2 = _mod1652.useAnimatedStyle(AIShimmerNativeTsx6);
  const tmpResult6 = _mod1652;
  const items8 = [closure_21, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp23, tmp24, tmp25] = items8;
  class AIShimmerNativeTsx7 {
    constructor() {
      value = closure_0.get();
      obj = { transform: null };
      obj1 = {
        translateX:
          (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) -
          closure_1,
      };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items9 = [tmp24, tmp25];
  AIShimmerNativeTsx7.__closure = items9;
  AIShimmerNativeTsx7.__workletHash = 15141224175259;
  AIShimmerNativeTsx7.__initData = tmp23;
  const animatedStyle3 = _mod1652.useAnimatedStyle(AIShimmerNativeTsx7);
  const tmpResult7 = _mod1652;
  const items10 = [closure_22, derivedValue, clippingWindowWidth];
  c0 = undefined;
  c1 = undefined;
  [tmp27, tmp28, tmp29] = items10;
  class AIShimmerNativeTsx8 {
    constructor() {
      value = closure_0.get();
      incomingTextEnd = value.outgoingTextStart;
      tmp2 = closure_1;
      if (value.isIncoming) {
        incomingTextEnd = value.incomingTextEnd;
      }
      obj = { transform: null };
      obj1 = { translateX: tmp2 - incomingTextEnd };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items11 = [tmp28, tmp29];
  AIShimmerNativeTsx8.__closure = items11;
  AIShimmerNativeTsx8.__workletHash = 11355419187929;
  AIShimmerNativeTsx8.__initData = tmp27;
  const tmpResult8 = _mod1652;
  return {
    plainWindow: animatedStyle,
    plainText: animatedStyle1,
    shiftedOuterWindow: animatedStyle2,
    shiftedInnerWindow: animatedStyle3,
    shiftedText: _mod1652.useAnimatedStyle(AIShimmerNativeTsx8),
  };
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5170);
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
let closure_14 = {
  code: "(function AIShimmerNativeTsx1(){let[animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots]=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);})",
};
let closure_15 = {
  code: "(function AIShimmerNativeTsx2(next,previous){let[scheduleOnRN,setGlyphs]=this.__closure;if(next===previous)return;scheduleOnRN(setGlyphs,next);})",
};
let closure_16 = noop.memo(function GlyphBand(glyphChoices) {
  glyphChoices = glyphChoices.glyphChoices;
  ({ animationProgress, slotCount, overshootInSlots, fontSize, color, style } = glyphChoices);
  [tmp2, tmp3] = noop.useState(glyphChoices);
  const tmp = _slicedToArray(noop.useState(glyphChoices), 2);
  items = [closure_14, animationProgress, 30, waveTransition2.bandGlyphsAt, slotCount, glyphChoices, overshootInSlots];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class AIShimmerNativeTsx1 {
    constructor() {
      value = closure_0.get();
      return closure_2(
        Math.floor((value - Math.floor(value)) * closure_1) / closure_1,
        closure_3,
        closure_4,
        closure_5,
      );
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  AIShimmerNativeTsx1.__closure = items1;
  AIShimmerNativeTsx1.__workletHash = 11538958195002;
  AIShimmerNativeTsx1.__initData = tmp6;
  const items2 = [closure_15, _mod1705.scheduleOnRN, tmp3];
  c0 = undefined;
  c1 = undefined;
  [tmp13, tmp14, tmp15] = items2;
  class AIShimmerNativeTsx2 {
    constructor(arg0, arg1) {
      if (glyphChoices !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, glyphChoices);
      }
      return;
    }
  }
  const items3 = [tmp14, tmp15];
  AIShimmerNativeTsx2.__closure = items3;
  AIShimmerNativeTsx2.__workletHash = 3832507172693;
  AIShimmerNativeTsx2.__initData = tmp13;
  const animatedReaction = _mod1652.useAnimatedReaction(AIShimmerNativeTsx1, AIShimmerNativeTsx2);
  return metroImportDefault(AIGlyphText.AIGlyphText, {
    size,
    color,
    allowFontScaling: false,
    numberOfLines: 1,
    ellipsizeMode: "clip",
    style,
    children,
  });
});
let closure_17 = {
  code: "(function AIShimmerNativeTsx3(){let[animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot]=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};})",
};
let closure_18 = {
  code: "(function AIShimmerNativeTsx4(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};})",
};
let closure_19 = {
  code: "(function AIShimmerNativeTsx5(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?clippingWindowWidth-incomingTextEnd:-outgoingTextStart}]};})",
};
let closure_20 = {
  code: "(function AIShimmerNativeTsx6(){let[slotState,SHIFTED_OPACITY]=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming?bandStart:bandEnd}]};})",
};
let closure_21 = {
  code: "(function AIShimmerNativeTsx7(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,bandStart:bandStart,bandEnd:bandEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();const shiftedWidth=isIncoming?incomingTextEnd-bandStart:outgoingTextStart-bandEnd;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};})",
};
let closure_22 = {
  code: "(function AIShimmerNativeTsx8(){let[slotState,clippingWindowWidth]=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming?incomingTextEnd:outgoingTextStart)}]};})",
};
let closure_24 = {
  code: "(function AIShimmerNativeTsx9(){let[animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail]=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};})",
};
let closure_25 = {
  code: "(function AIShimmerNativeTsx10(){let[crossFadeOpacity]=this.__closure;return{opacity:crossFadeOpacity.get()};})",
};
let closure_26 = {
  code: "(function AIShimmerNativeTsx11(){let[bandState]=this.__closure;const{bandStart:bandStart,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart}]};})",
};
let closure_27 = {
  code: "(function AIShimmerNativeTsx12(){let[bandState,clippingWindowWidth]=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:bandEnd-bandStart-clippingWindowWidth}]};})",
};
let closure_28 = {
  code: "(function AIShimmerNativeTsx13(){let[bandState,clippingWindowWidth]=this.__closure;const{bandEnd:bandEnd}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx");

export const AIShimmer = noop.memo(function AIShimmer(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "body-md/normal";
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
  return metroImportDefault(
    AIShimmerInner,
    { variant: str, delay: AI_TEXT_EFFECT_DEFAULT_DELAY, initialDelay: num, duration: AI_TEXT_EFFECT_DEFAULT_DURATION },
    str,
  );
});
