// discord_app/modules/conjure/glow/native/ConjureShellGlow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import LinearGradientDefault from "../../../../../_runtime/05745_LinearGradient.js";
import ConjureDitherDefault from "ConjureDither.android.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";

get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
const PlatformUtils = fn(1377);
let closure_12 = PlatformUtils.isAndroid();
let c13 = 500;
let items = [
  {
    code: "(function pulseAt_ConjureShellGlowTsx1(progress){let[PULSE_KEYFRAMES]=this.__closure;for(let i=1;i<PULSE_KEYFRAMES.length;i++){const[t1,v1]=PULSE_KEYFRAMES[i];if(progress<=t1){const[t0,v0]=PULSE_KEYFRAMES[i-1];const span=t1-t0;const local=span>0?(progress-t0)/span:1;return v0+(v1-v0)*local;}}return 1;})",
  },
];
let items1 = [
  [0, 1],
  [0.09, 0.95],
  [0.17, 0.98],
  [0.29, 0.86],
  [0.37, 0.94],
  [0.48, 1],
  [0.56, 0.92],
  [0.64, 0.96],
  [0.76, 0.89],
  [0.84, 0.99],
  [1, 1],
];
items[1] = items1;
let c0;
[tmp4, tmp5] = items;
function pulseAt(arg0) {
  let num = 1;
  let num2 = 1;
  if (1 < _undefined.length) {
    const tmp2 = _slicedToArray(_undefined[num2], 2);
    const first = tmp2[0];
    while (arg0 > first) {
      num2 = num2 + num;
    }
    [tmp6, tmp7] = _undefined[num2 - num];
    const diff = first - tmp6;
    const diff1 = tmp2[1] - tmp7;
    if (diff > 0) {
      num = (arg0 - tmp6) / diff;
    }
    return tmp7 + diff1 * num;
  }
  return num;
}
let items2 = [tmp5];
pulseAt.__closure = items2;
pulseAt.__workletHash = 3950886674746;
pulseAt.__initData = tmp4;
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"];
const locations = [0, 0.45, 1];
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const start2 = { x: 0, y: 0.5 };
const end2 = { x: 1, y: 0.5 };
const createStyles = fn(5170);
let closure_21 = createStyles.createStyles({
  root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 },
  band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 },
  sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" },
  fill: { flex: 1 },
  ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" },
  ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 },
});
let closure_22 = {
  code: "(function ConjureShellGlowTsx2(){let[lift,pulseAt,pulse,BAND_HEIGHT]=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};})",
};
let closure_23 = {
  code: "(function ConjureShellGlowTsx3(){let[chromaMix,layerAlpha,driftBase,width]=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};})",
};
let closure_24 = {
  code: "(function ConjureShellGlowTsx4(){let[chromaMix,layerAlpha,driftChroma,width]=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};})",
};
let closure_25 = {
  code: "(function ConjureShellGlowTsx5(){let[ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight]=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureShellGlow.tsx");

export default function ConjureShellGlow(thinking) {
  thinking = thinking.thinking;
  _undefined = thinking;
  let num = thinking.bleedBottom;
  if (num === undefined) {
    num = 0;
  }
  noop = undefined;
  c5 = undefined;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let tmp = closure_21();
  items = [sharedValue2];
  const stateFromStores = _undefined(504).useStateFromStores(items, () => sharedValue2.useReducedMotion);
  importDefault = stateFromStores;
  let obj = _undefined(504);
  let items1 = [sharedValue3];
  const stateFromStores1 = _undefined(504).useStateFromStores(items1, () => sharedValue3.theme);
  dependencyMap = stateFromStores1;
  let obj2 = _undefined(504);
  const isThemeDarkResult = _undefined(5178).isThemeDark(stateFromStores1);
  _slicedToArray = isThemeDarkResult;
  let items2 = [stateFromStores1];
  let items3 = [isThemeDarkResult];
  const memo = noop.useMemo(() => {
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(c2, nativeDefault.colors.BACKGROUND_BASE_LOW);
    items = [semanticColor, semanticColor];
    const obj = _modDef671(semanticColor);
    items[2] = _modDef671(semanticColor).alpha(0).css();
    return items;
  }, items2);
  const memo1 = noop.useMemo(() => {
    const unsafe_rawColors = nativeDefault.unsafe_rawColors;
    if (c3) {
      ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
      const obj = { base: null, chroma: null };
      items = [
        BG_GRADIENT_MIDNIGHT_BLURPLE_1,
        unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
        BG_GRADIENT_MIDNIGHT_BLURPLE_1,
      ];
      obj.base = items;
      const items1 = [
        BG_GRADIENT_CHROMA_GLOW_1,
        BG_GRADIENT_CHROMA_GLOW_2,
        unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3,
        BG_GRADIENT_CHROMA_GLOW_2,
        BG_GRADIENT_CHROMA_GLOW_1,
      ];
      obj.chroma = items1;
      let obj2 = obj;
    } else {
      ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
      const tmpResult = _modDef671;
      const hexResult = _modDef671.hsl(184, 0.8, 0.6).hex();
      const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
      obj2 = { base: null, chroma: null };
      const items2 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
      obj2.base = items2;
      const items3 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
      obj2.chroma = items3;
      const hslResult = _modDef671.hsl(184, 0.8, 0.6);
    }
    return obj2;
  }, items3);
  let num2 = 0.2;
  if (isThemeDarkResult) {
    num2 = 0.3;
  }
  let obj3 = _undefined(5178);
  [tmp10, c4] = noop.useState(0);
  const callback = obj4.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
    _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const tmp9 = _slicedToArray(noop.useState(0), 2);
  let num3 = 0;
  if (thinking) {
    num3 = 1;
  }
  const sharedValue = _undefined(1652).useSharedValue(num3);
  c5 = sharedValue;
  const tmp2Result = _undefined(1652);
  let num4 = 0;
  if (thinking) {
    num4 = 1;
  }
  sharedValue1 = _undefined(1652).useSharedValue(num4);
  const tmp2Result10 = _undefined(1652);
  let num5 = 0;
  if (thinking) {
    num5 = height;
  }
  sharedValue2 = _undefined(1652).useSharedValue(num5);
  const tmp2Result11 = _undefined(1652);
  sharedValue3 = _undefined(1652).useSharedValue(0);
  const tmp2Result12 = _undefined(1652);
  sharedValue4 = _undefined(1652).useSharedValue(0);
  const tmp2Result13 = _undefined(1652);
  sharedValue5 = _undefined(1652).useSharedValue(0);
  const items4 = [sharedValue1, sharedValue2, sharedValue, thinking];
  const effect = obj4.useEffect(() => {
    const Easing = _undefined(1652).Easing;
    const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
    let num = 0;
    if (_undefined) {
      num = 1;
    }
    const result = _undefined6.set(
      _undefined(5400).withTiming(num, { duration: 700, easing: bezierResult }, "animate-always"),
    );
    const obj = _undefined(5400);
    let num2 = 0;
    if (_undefined) {
      num2 = 1;
    }
    const result1 = sharedValue1.set(
      _undefined(5400).withTiming(num2, { duration: 700, easing: bezierResult }, "animate-always"),
    );
    const tmpResult = _undefined(5400);
    let num3 = 0;
    if (_undefined) {
      num3 = c13;
    }
    const result2 = sharedValue2.set(
      _undefined(5400).withTiming(num3, { duration: 400, easing: bezierResult }, "animate-always"),
    );
    const tmpResult2 = _undefined(5400);
  }, items4);
  const items5 = [sharedValue4, sharedValue5, stateFromStores, thinking];
  const effect1 = obj4.useEffect(() => {
    if (c1) {
      _undefined(1652).cancelAnimation(sharedValue4);
      const obj7 = _undefined(1652);
      _undefined(1652).cancelAnimation(sharedValue5);
      const result = sharedValue4.set(0);
      const result1 = sharedValue5.set(0);
      const obj8 = _undefined(1652);
    } else if (_undefined) {
      let obj = _undefined(1652);
      const obj3 = { duration: 24000, easing: null };
      const Easing = _undefined(1652).Easing;
      obj3.easing = Easing.inOut(_undefined(1652).Easing.ease);
      const result2 = sharedValue4.set(obj.withRepeat(_undefined(5400).withTiming(1, obj3), -1, true));
      const obj2 = _undefined(5400);
      const obj4 = _undefined(1652);
      const obj6 = { duration: 12000, easing: null };
      const Easing2 = _undefined(1652).Easing;
      obj6.easing = Easing2.inOut(_undefined(1652).Easing.ease);
      const result3 = sharedValue5.set(obj4.withRepeat(_undefined(5400).withTiming(1, obj6), -1, true));
      const fn = () => {
        c0(1652).cancelAnimation(sharedValue4);
        const obj = c0(1652);
        c0(1652).cancelAnimation(sharedValue5);
      };
      const obj5 = _undefined(5400);
    }
    return fn;
  }, items5);
  const items6 = [sharedValue3, stateFromStores, thinking];
  const effect2 = obj4.useEffect(() => {
    if (!c1) {
      if (_undefined) {
        const result = sharedValue3.set(0);
        const obj = _undefined(1652);
        const obj3 = { duration: 5500, easing: _undefined(1652).Easing.ease };
        const result1 = sharedValue3.set(obj.withRepeat(_undefined(5400).withTiming(1, obj3), -1, false));
        const fn = () => c0(c2[12]).cancelAnimation(sharedValue3);
        const obj2 = _undefined(5400);
      }
      return fn;
    }
    _undefined(1652).cancelAnimation(sharedValue3);
    const obj4 = _undefined(1652);
    const result2 = sharedValue3.set(_undefined(5400).withTiming(0, { duration: 700 }));
    const obj5 = _undefined(5400);
  }, items6);
  const tmp2Result14 = _undefined(1652);
  const items7 = [closure_22, sharedValue, pulseAt, sharedValue3, height];
  _undefined = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items7;
  class ConjureShellGlowTsx2 {
    constructor() {
      value = closure_0.get();
      result = value * closure_1(closure_2.get());
      obj = { transform: null };
      obj1 = { translateY: (closure_3 * (1 - result)) / 2 };
      items = [,];
      items[0] = obj1;
      items[1] = { scaleY: result };
      obj.transform = items;
      return obj;
    }
  }
  const items8 = [tmp24, tmp25, tmp26, tmp27];
  ConjureShellGlowTsx2.__closure = items8;
  ConjureShellGlowTsx2.__workletHash = 16357624272846;
  ConjureShellGlowTsx2.__initData = tmp23;
  const animatedStyle = _undefined(1652).useAnimatedStyle(ConjureShellGlowTsx2);
  const tmp2Result15 = _undefined(1652);
  const items9 = [closure_23, sharedValue1, num2, sharedValue4, tmp10];
  _undefined = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33] = items9;
  class ConjureShellGlowTsx3 {
    constructor() {
      obj = { opacity: (1 - closure_0.get()) * closure_1, transform: null };
      obj1 = { translateX: -closure_2.get() * closure_3 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items10 = [tmp30, tmp31, tmp32, tmp33];
  ConjureShellGlowTsx3.__closure = items10;
  ConjureShellGlowTsx3.__workletHash = 17164869251802;
  ConjureShellGlowTsx3.__initData = tmp29;
  const animatedStyle1 = _undefined(1652).useAnimatedStyle(ConjureShellGlowTsx3);
  const tmp2Result16 = _undefined(1652);
  const items11 = [closure_24, sharedValue1, num2, sharedValue5, tmp10];
  _undefined = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp35, tmp36, tmp37, tmp38, tmp39] = items11;
  class ConjureShellGlowTsx4 {
    constructor() {
      obj = { opacity: closure_0.get() * closure_1, transform: null };
      obj1 = { translateX: -closure_2.get() * closure_3 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items12 = [tmp36, tmp37, tmp38, tmp39];
  ConjureShellGlowTsx4.__closure = items12;
  ConjureShellGlowTsx4.__workletHash = 6789154933248;
  ConjureShellGlowTsx4.__initData = tmp35;
  const animatedStyle2 = _undefined(1652).useAnimatedStyle(ConjureShellGlowTsx4);
  const tmp2Result17 = _undefined(1652);
  const items13 = [closure_25, closure_12, height, sharedValue, pulseAt, sharedValue3, sharedValue2];
  _undefined = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48] = items13;
  class ConjureShellGlowTsx5 {
    constructor() {
      if (closure_0) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        tmp6 = closure_3;
        tmp7 = closure_4;
        result = closure_1 * closure_2.get();
        result1 = result * closure_3(closure_4.get());
      } else {
        tmp = closure_5;
        result1 = closure_5.get();
      }
      return { height: result1 };
    }
  }
  const items14 = [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48];
  ConjureShellGlowTsx5.__closure = items14;
  ConjureShellGlowTsx5.__workletHash = 6143578775689;
  ConjureShellGlowTsx5.__initData = tmp42;
  const animatedStyle3 = _undefined(1652).useAnimatedStyle(ConjureShellGlowTsx5);
  const tmp55 = sharedValue4(LinearGradientDefault, { style: tmp.fill, colors, locations, start, end });
  let obj6 = { children: null };
  let obj7 = {
    style: null,
    children: sharedValue4(LinearGradientDefault, { style: tmp.fill, colors: memo1.base, start: start2, end: end2 }),
  };
  const items15 = [tmp.sweep, animatedStyle1];
  obj7.style = items15;
  const items16 = [sharedValue4(_modDef1652.View, obj7)];
  const obj9 = {
    style: null,
    children: sharedValue4(LinearGradientDefault, { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 }),
  };
  const items17 = [tmp.sweep, animatedStyle2];
  obj9.style = items17;
  items16[1] = sharedValue4(_modDef1652.View, obj9);
  obj6.children = items16;
  const tmp57 = closure_11(sharedValue5, obj6);
  const obj11 = { style: tmp.ditherField, children: null };
  const size = { width: tmp10, height, thinking, fill: null, fillOpacity: null };
  let str = "rgb(120, 60, 200)";
  const obj10 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
  let obj5 = { style: tmp.fill, colors, locations, start, end };
  let obj8 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
  const tmp2Result18 = _undefined(1652);
  if (isThemeDarkResult) {
    str = "rgb(225, 240, 255)";
  }
  size.fill = str;
  let num6 = 0.16;
  if (isThemeDarkResult) {
    num6 = 0.18;
  }
  size.fillOpacity = num6;
  obj11.children = sharedValue4(ConjureDitherDefault, size);
  const tmp50Result = sharedValue4(sharedValue1, obj11);
  const items18 = [tmp.root];
  let tmp61 = num > 0;
  if (tmp61) {
    const obj12 = { bottom: -num };
    tmp61 = obj12;
  }
  const obj13 = {
    style: items18,
    pointerEvents: "none",
    onLayout: callback,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items18[1] = tmp61;
  const obj14 = { style: null, children: null };
  const items19 = [tmp.band, animatedStyle];
  obj14.style = items19;
  if (closure_12) {
    const obj15 = { style: c5.absoluteFill, children: tmp57 };
    let tmp50Result5 = tmp50(tmp58, obj15);
    let tmp62 = c5;
  } else {
    const obj16 = { style: null, maskElement: null, children: null };
    tmp62 = c5;
    obj16.style = c5.absoluteFill;
    obj16.maskElement = tmp55;
    obj16.children = tmp57;
    tmp50Result5 = tmp50(tmp51(7129), obj16);
  }
  obj14.children = tmp50Result5;
  const items20 = [sharedValue4(_modDef1652.View, obj14), ,];
  let tmp50Result7 = null;
  if (!stateFromStores) {
    const obj17 = { style: null, children: null };
    const items21 = [tmp.ditherClip, animatedStyle3];
    obj17.style = items21;
    let tmp50Result6 = tmp50Result;
    if (!closure_12) {
      const obj18 = { style: tmp62.absoluteFill, maskElement: tmp55, children: tmp50Result };
      tmp50Result6 = tmp50(tmp51(7129), obj18);
    }
    obj17.children = tmp50Result6;
    tmp50Result7 = tmp50(tmp51(1652).View, obj17);
  }
  items20[1] = tmp50Result7;
  let tmp50Result8 = null;
  if (closure_12) {
    const obj19 = { style: null, children: null };
    const items22 = [tmp.band, animatedStyle];
    obj19.style = items22;
    const obj20 = { style: tmp.fill, colors: memo, locations, start, end };
    obj19.children = tmp50(tmp51(5745), obj20);
    tmp50Result8 = tmp50(tmp51(1652).View, obj19);
  }
  items20[2] = tmp50Result8;
  obj13.children = items20;
  return closure_11(sharedValue1, obj13);
}
