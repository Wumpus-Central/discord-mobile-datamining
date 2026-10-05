// === Module 15169: GummyStripesFromHue ===

// Module 15169 (GummyStripesFromHue)
import ColorPickerUtils from "ColorPickerUtils" /* 14424 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
fn(558);
const __initData = { code: "function GummyStripesFromHueTsx1(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
const __initData2 = { code: "function GummyStripesFromHueTsx2(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((hue) => {
  const cResult = hue(saturation[5]).c(4);
  hue = hue.hue;
  const shift = hue.shift;
  saturation = hue.saturation;
  const lightness = hue.lightness;
  let stripeOverlap = hue.overlap;
  const tmp3 = closure_6();
  let obj = hue(saturation[5]);
  const tmp = saturation;
  const fn = function o() {
    const result = (hue.get() + shift) % 360;
    const tmp2 = _slicedToArray(ColorPickerUtils.hslToRgbWorklet({ h: (result + 360) % 360, s: saturation, l: lightness }), 3);
    const obj2 = { h: (result + 360) % 360, s: saturation, l: lightness };
    return { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
  };
  let obj2 = hue(saturation[7]);
  fn.__closure = { hue, shift, hslToRgbWorklet: hue(saturation[8]).hslToRgbWorklet, saturation, lightness };
  fn.__workletHash = 8497009401863;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (stripeOverlap) {
    stripeOverlap = tmp3.stripeOverlap;
  }
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.stripe) {
      if (cResult[2] === stripeOverlap) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const obj4 = { style: null };
  const items = [tmp3.stripe, stripeOverlap, animatedStyle];
  obj4.style = items;
  const tmp6 = closure_4(shift(tmp[7]).View, obj4);
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.stripe;
  cResult[2] = stripeOverlap;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((hue) => {
  hue = hue.hue;
  const shift = hue.shift;
  const saturation = hue.saturation;
  const lightness = hue.lightness;
  let stripeOverlap = hue.overlap;
  const tmp = closure_6();
  const fn = function c() {
    const result = (hue.get() + shift) % 360;
    const tmp2 = _slicedToArray(ColorPickerUtils.hslToRgbWorklet({ h: (result + 360) % 360, s: saturation, l: lightness }), 3);
    const obj2 = { h: (result + 360) % 360, s: saturation, l: lightness };
    return { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
  };
  let obj = hue(saturation[7]);
  fn.__closure = { hue, shift, hslToRgbWorklet: hue(saturation[8]).hslToRgbWorklet, saturation, lightness };
  fn.__workletHash = 248703450532;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [tmp.stripe, , ];
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  style[1] = stripeOverlap;
  style[2] = animatedStyle;
  return closure_4(shift(saturation[7]).View, { style });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((hue) => {
  const cResult = hue(576).c(4);
  hue = hue.hue;
  if (cResult[0] !== hue) {
    const GUMMY_STRIPES = hue(1394).GUMMY_STRIPES;
    const mapped = GUMMY_STRIPES.map((hueShift, index) => React4(closure_9, { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: index > 0 }, index));
    cResult[0] = hue;
    cResult[1] = mapped;
    let tmp4 = mapped;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { children: tmp4 };
    const tmp9 = closure_4(closure_5, obj2);
    cResult[2] = tmp4;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : ((hue) => {
  hue = hue.hue;
  const obj = { children: null };
  const GUMMY_STRIPES = hue(1394).GUMMY_STRIPES;
  obj.children = GUMMY_STRIPES.map((hueShift, index) => React4(closure_9, { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: index > 0 }, index));
  return closure_4(closure_5, obj);
});