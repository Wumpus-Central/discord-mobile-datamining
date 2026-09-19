// === Module 17042: VibegrationsConjureShellGlow ===

// Module 17042 (VibegrationsConjureShellGlow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import timing from "timing" /* 4757 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const PlatformUtils = fn(1364);
let closure_12 = PlatformUtils.isAndroid();
let c13 = 500;
let items = [[0, 1], [0.09, 0.95], [0.17, 0.98], [0.29, 0.86], [0.37, 0.94], [0.48, 1], [0.56, 0.92], [0.64, 0.96], [0.76, 0.89], [0.84, 0.99], [1, 1]];
function pulseAt(arg0) {
  let num = 1;
  let num2 = 1;
  if (1 < items.length) {
    const tmp2 = _slicedToArray(items[num2], 2);
    const first = tmp2[0];
    while (arg0 > first) {
      num2 = num2 + num;
    }
    [tmp6, tmp7] = items[num2 - num];
    const diff = first - tmp6;
    const diff1 = tmp2[1] - tmp7;
    if (diff > 0) {
      num = (arg0 - tmp6) / diff;
    }
    return tmp7 + diff1 * num;
  }
  return num;
}
pulseAt.__closure = { PULSE_KEYFRAMES: items };
pulseAt.__workletHash = 13066223944096;
pulseAt.__initData = { code: "function pulseAt_VibegrationsConjureShellGlowTsx1(progress){const{PULSE_KEYFRAMES}=this.__closure;for(let i=1;i<PULSE_KEYFRAMES.length;i++){const[t1,v1]=PULSE_KEYFRAMES[i];if(progress<=t1){const[t0,v0]=PULSE_KEYFRAMES[i-1];const span=t1-t0;const local=span>0?(progress-t0)/span:1;return v0+(v1-v0)*local;}}return 1;}" };
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"];
const locations = [0, 0.45, 1];
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const start2 = { x: 0, y: 0.5 };
const end2 = { x: 1, y: 0.5 };
const createStyles = fn(4756);
let closure_22 = createStyles.createStyles({ root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 }, band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 }, sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" }, fill: { flex: 1 }, ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" }, ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 } });
const __initData = { code: "function VibegrationsConjureShellGlowTsx2(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData2 = { code: "function VibegrationsConjureShellGlowTsx3(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData3 = { code: "function VibegrationsConjureShellGlowTsx4(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData4 = { code: "function VibegrationsConjureShellGlowTsx5(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureShellGlow.tsx");

export default function VibegrationsConjureShellGlow(thinking) {
  thinking = thinking.thinking;
  let num = thinking.bleedBottom;
  if (num === undefined) {
    num = 0;
  }
  let stateFromStores1;
  let num2;
  width = undefined;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let tmp = closure_22();
  items = [sharedValue];
  const stateFromStores = thinking(stateFromStores1[10]).useStateFromStores(items, () => sharedValue.useReducedMotion);
  let obj = thinking(stateFromStores1[10]);
  let items1 = [sharedValue1];
  stateFromStores1 = thinking(stateFromStores1[10]).useStateFromStores(items1, () => sharedValue1.theme);
  let obj2 = thinking(stateFromStores1[10]);
  const isThemeDarkResult = thinking(stateFromStores1[11]).isThemeDark(stateFromStores1);
  _slicedToArray = isThemeDarkResult;
  let items2 = [stateFromStores1];
  let items3 = [isThemeDarkResult];
  const memo = num2.useMemo(() => {
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_BASE_LOW);
    items = [semanticColor, semanticColor, ];
    const obj = _modDef672(semanticColor);
    items[2] = _modDef672(semanticColor).alpha(0).css();
    return items;
  }, items2);
  const memo1 = num2.useMemo(() => {
    const unsafe_rawColors = nativeDefault.unsafe_rawColors;
    if (c3) {
      ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
      const obj = { base: null, chroma: null };
      items = [BG_GRADIENT_MIDNIGHT_BLURPLE_1, unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2, BG_GRADIENT_MIDNIGHT_BLURPLE_1];
      obj.base = items;
      const items1 = [BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2, unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3, BG_GRADIENT_CHROMA_GLOW_2, BG_GRADIENT_CHROMA_GLOW_1];
      obj.chroma = items1;
      let obj2 = obj;
    } else {
      ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
      const tmpResult = _modDef672;
      const hexResult = _modDef672.hsl(184, 0.8, 0.6).hex();
      const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
      obj2 = { base: null, chroma: null };
      const items2 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
      obj2.base = items2;
      const items3 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
      obj2.chroma = items3;
      const hslResult = _modDef672.hsl(184, 0.8, 0.6);
    }
    return obj2;
  }, items3);
  num2 = 0.2;
  if (isThemeDarkResult) {
    num2 = 0.3;
  }
  [width, closure_6] = num2.useState(0);
  const callback = obj4.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
    closure_6((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  let obj3 = thinking(stateFromStores1[11]);
  let num3 = 0.504;
  if (thinking) {
    num3 = 1;
  }
  sharedValue = thinking(stateFromStores1[12]).useSharedValue(num3);
  const tmp2Result = thinking(stateFromStores1[12]);
  let num4 = 0;
  if (thinking) {
    num4 = 1;
  }
  sharedValue1 = thinking(stateFromStores1[12]).useSharedValue(num4);
  const tmp2Result10 = thinking(stateFromStores1[12]);
  let num5 = 204;
  if (thinking) {
    num5 = v500;
  }
  sharedValue2 = thinking(stateFromStores1[12]).useSharedValue(num5);
  const tmp2Result11 = thinking(stateFromStores1[12]);
  sharedValue3 = thinking(stateFromStores1[12]).useSharedValue(0);
  const tmp2Result12 = thinking(stateFromStores1[12]);
  sharedValue4 = thinking(stateFromStores1[12]).useSharedValue(0);
  const tmp2Result13 = thinking(stateFromStores1[12]);
  sharedValue5 = thinking(stateFromStores1[12]).useSharedValue(0);
  const items4 = [sharedValue1, sharedValue2, sharedValue, thinking];
  const effect = obj4.useEffect(() => {
    const Easing = ReanimatedRexport.Easing;
    const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
    let num = 0.504;
    if (thinking) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: 700, easing: bezierResult }, "animate-always"));
    num2 = 0;
    if (thinking) {
      num2 = 1;
    }
    const result1 = sharedValue1.set(timing.withTiming(num2, { duration: 700, easing: bezierResult }, "animate-always"));
    const tmpResult = timing;
    let num3 = 204;
    if (thinking) {
      num3 = c13;
    }
    const result2 = sharedValue2.set(timing.withTiming(num3, { duration: 400, easing: bezierResult }, "animate-always"));
    const tmpResult2 = timing;
  }, items4);
  const items5 = [sharedValue4, sharedValue5, stateFromStores];
  const effect1 = obj4.useEffect(() => {
    if (stateFromStores) {
      ReanimatedRexport.cancelAnimation(sharedValue4);
      ReanimatedRexport.cancelAnimation(sharedValue5);
      const result = sharedValue4.set(0);
      const result1 = sharedValue5.set(0);
    } else {
      let obj = ReanimatedRexport;
      const obj3 = { duration: 24000, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
      const result2 = sharedValue4.set(obj.withRepeat(timing.withTiming(1, obj3), -1, true));
      const obj4 = ReanimatedRexport;
      const obj6 = { duration: 12000, easing: null };
      const Easing2 = ReanimatedRexport.Easing;
      obj6.easing = Easing2.inOut(ReanimatedRexport.Easing.ease);
      const result3 = sharedValue5.set(obj4.withRepeat(timing.withTiming(1, obj6), -1, true));
      const fn = () => {
        thinking(stateFromStores1[12]).cancelAnimation(sharedValue4);
        const obj = thinking(stateFromStores1[12]);
        thinking(stateFromStores1[12]).cancelAnimation(sharedValue5);
      };
    }
    return fn;
  }, items5);
  const items6 = [sharedValue3, stateFromStores, thinking];
  const effect2 = obj4.useEffect(() => {
    if (!stateFromStores) {
      if (thinking) {
        const result = sharedValue3.set(0);
        const obj = ReanimatedRexport;
        const obj3 = { duration: 5500, easing: ReanimatedRexport.Easing.ease };
        const result1 = sharedValue3.set(obj.withRepeat(timing.withTiming(1, obj3), -1, false));
        const fn = () => thinking(stateFromStores1[12]).cancelAnimation(sharedValue3);
      }
      return fn;
    }
    ReanimatedRexport.cancelAnimation(sharedValue3);
    const result2 = sharedValue3.set(timing.withTiming(0, { duration: 700 }));
  }, items6);
  const tmp2Result14 = thinking(stateFromStores1[12]);
  let fn = function q() {
    value = sharedValue.get();
    value2 = sharedValue3.get();
    if (typeof pulseAt === "function") {
      let num3 = 1;
      let num4 = 1;
      if (1 < items.length) {
        const tmp5 = _slicedToArray(items[num3], 2);
        const first = tmp5[0];
        while (value2 > first) {
          let sum = num3 + 1;
          num3 = sum;
          num4 = 1;
        }
        [tmp10, tmp11] = items[num3 - 1];
        const diff = first - tmp10;
        let num6 = 1;
        const diff1 = tmp5[1] - tmp11;
        if (diff > 0) {
          num6 = (value2 - tmp10) / diff;
        }
        num4 = tmp11 + diff1 * num6;
        const tmp4Result = _slicedToArray(items[num3 - 1], 2);
      }
      const result = value * num4;
      const obj = { transform: null };
      const obj2 = { translateY: c13 * (1 - result) / 2 };
      items = [obj2, ];
      const obj3 = { scaleY: result };
      items[1] = obj3;
      obj.transform = items;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn.__closure = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
  fn.__workletHash = 16853895273556;
  fn.__initData = __initData;
  const animatedStyle = thinking(stateFromStores1[12]).useAnimatedStyle(fn);
  let obj5 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
  const tmp2Result15 = thinking(stateFromStores1[12]);
  class J {
    constructor() {
      obj = { opacity: (1 - closure_8.get()) * c4, transform: null };
      obj1 = { translateX: -closure_11.get() * closure_5 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  J.__closure = { chromaMix: sharedValue1, layerAlpha: num2, driftBase: sharedValue4, width };
  J.__workletHash = 2962971489312;
  J.__initData = __initData2;
  const animatedStyle1 = thinking(stateFromStores1[12]).useAnimatedStyle(J);
  const tmp2Result16 = thinking(stateFromStores1[12]);
  class Q {
    constructor() {
      obj = { opacity: closure_8.get() * c4, transform: null };
      obj1 = { translateX: -closure_12.get() * closure_5 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  Q.__closure = { chromaMix: sharedValue1, layerAlpha: num2, driftChroma: sharedValue5, width };
  Q.__workletHash = 8403192846330;
  Q.__initData = __initData3;
  const animatedStyle2 = thinking(stateFromStores1[12]).useAnimatedStyle(Q);
  const tmp2Result17 = thinking(stateFromStores1[12]);
  class Z {
    constructor() {
      if (closure_12) {
        tmp2 = c13;
        tmp3 = closure_7;
        tmp5 = pulseAt;
        arr = closure_10;
        get = closure_10.get;
        result = c13 * closure_7.get();
        value = get();
        if (typeof pulseAt === "function") {
          tmp7 = closure_14;
          num = 1;
          num2 = 2;
          num3 = 1;
          num4 = 1;
          if (1 >= closure_14.length) {
            result1 = result * num4;
          } else {
            diff3 = closure_3;
            arr = closure_14;
            tmp9 = closure_3(closure_14[num3], num2);
            [tmp10, get] = tmp9;
            diff = num3;
            while (value > diff1) {
              sum = diff + num;
              num3 = sum;
              num4 = num;
            }
          }
          diff = diff - num;
          tmp8Result = diff3(arr[diff], num2);
          [tmp8, arr] = tmp8Result;
          diff1 = diff1 - diff3;
          num2 = 0;
          diff2 = get - arr;
          if (diff1 > 0) {
            diff3 = value - diff3;
            num = diff3 / diff1;
          }
          get = diff2 * num;
          num4 = arr + get;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        tmp = closure_9;
        obj = { height: null };
        obj.height = closure_9.get();
        return obj;
      }
      return;
    }
  }
  Z.__closure = { ANDROID: sharedValue5, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue3, ditherHeight: sharedValue2 };
  Z.__workletHash = 6204121722515;
  Z.__initData = __initData4;
  const animatedStyle3 = thinking(stateFromStores1[12]).useAnimatedStyle(Z);
  const tmp31 = sharedValue2(stateFromStores(stateFromStores1[14]), { style: tmp.fill, colors, locations, start, end });
  let obj8 = { children: null };
  const obj9 = { style: null, children: sharedValue2(stateFromStores(stateFromStores1[14]), { style: tmp.fill, colors: memo1.base, start: start2, end: end2 }) };
  const items7 = [tmp.sweep, animatedStyle1];
  obj9.style = items7;
  const items8 = [sharedValue2(stateFromStores(stateFromStores1[12]).View, obj9), ];
  const obj11 = { style: null, children: sharedValue2(stateFromStores(stateFromStores1[14]), { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 }) };
  const items9 = [tmp.sweep, animatedStyle2];
  obj11.style = items9;
  items8[1] = sharedValue2(stateFromStores(stateFromStores1[12]).View, obj11);
  obj8.children = items8;
  const tmp33 = sharedValue4(sharedValue3, obj8);
  const obj13 = { style: tmp.ditherField, children: null };
  const size = { width, height: v500, thinking, fill: null, fillOpacity: null };
  let str = "rgb(120, 60, 200)";
  const obj10 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
  const obj12 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
  let obj6 = { ANDROID: sharedValue5, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue3, ditherHeight: sharedValue2 };
  let obj7 = { style: tmp.fill, colors, locations, start, end };
  const tmp2Result18 = thinking(stateFromStores1[12]);
  const tmp32 = sharedValue4;
  if (isThemeDarkResult) {
    str = "rgb(225, 240, 255)";
  }
  size.fill = str;
  let num6 = 0.16;
  if (isThemeDarkResult) {
    num6 = 0.18;
  }
  size.fillOpacity = num6;
  obj13.children = sharedValue2(stateFromStores(stateFromStores1[15]), size);
  const tmp26Result = sharedValue2(closure_6, obj13);
  const items10 = [tmp.root, ];
  let tmp37 = num > 0;
  if (tmp37) {
    const obj14 = { bottom: -num };
    tmp37 = obj14;
  }
  const obj15 = { style: items10, pointerEvents: "none", onLayout: callback, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items10[1] = tmp37;
  const obj16 = { style: null, children: null };
  const items11 = [tmp.band, animatedStyle];
  obj16.style = items11;
  if (sharedValue5) {
    const obj17 = { style: width.absoluteFill, children: tmp33 };
    let tmp26Result5 = tmp26(tmp34, obj17);
    let tmp38 = width;
  } else {
    const obj18 = { style: null, maskElement: null, children: null };
    tmp38 = width;
    obj18.style = width.absoluteFill;
    obj18.maskElement = tmp31;
    obj18.children = tmp33;
    tmp26Result5 = tmp26(tmp27(tmp3[16]), obj18);
  }
  obj16.children = tmp26Result5;
  const items12 = [sharedValue2(stateFromStores(stateFromStores1[12]).View, obj16), , ];
  let tmp26Result7 = null;
  if (!stateFromStores) {
    const obj19 = { style: null, children: null };
    const items13 = [tmp.ditherClip, animatedStyle3];
    obj19.style = items13;
    let tmp26Result6 = tmp26Result;
    if (!tmp24) {
      const obj20 = { style: tmp38.absoluteFill, maskElement: tmp31, children: tmp26Result };
      tmp26Result6 = tmp26(tmp27(tmp3[16]), obj20);
    }
    obj19.children = tmp26Result6;
    tmp26Result7 = tmp26(tmp27(tmp3[12]).View, obj19);
  }
  items12[1] = tmp26Result7;
  let tmp26Result8 = null;
  if (sharedValue5) {
    const obj21 = { style: null, children: null };
    const items14 = [tmp.band, animatedStyle];
    obj21.style = items14;
    const obj22 = { style: tmp.fill, colors: memo, locations, start, end };
    obj21.children = tmp26(tmp27(tmp3[14]), obj22);
    tmp26Result8 = tmp26(tmp27(tmp3[12]).View, obj21);
  }
  items12[2] = tmp26Result8;
  obj15.children = items12;
  return tmp32(closure_6, obj15);
};