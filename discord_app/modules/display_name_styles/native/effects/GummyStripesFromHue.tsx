// === Module 15169: GummyStripesFromHue ===

// Module 15169 (GummyStripesFromHue)
import ColorPickerUtils from "ColorPickerUtils" /* 14424 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, Fragment: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function GummyStripesFromHueTsx1(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
const __initData2 = { code: "function GummyStripesFromHueTsx2(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((hue) => {
  let tmp4;
  let tmp6;
  let obj = hue(576);
  const cResult = obj.c(4);
  const tmp = hue;
  hue = hue.hue;
  if (cResult[0] !== hue) {
    const GUMMY_STRIPES = tmp(1394).GUMMY_STRIPES;
    const mapped = GUMMY_STRIPES.map((hueShift, index) => {
      const obj = { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: index > 0 };
      return React3(closure_9, obj, index);
    });
    cResult[0] = hue;
    cResult[1] = mapped;
    tmp4 = mapped;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { children: tmp4 };
    const tmp9 = closure_4(closure_5, obj2);
    cResult[2] = tmp4;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : ((hue) => {
  let GUMMY_STRIPES;
  hue = hue.hue;
  let obj = {
    children: GUMMY_STRIPES.map((hueShift, index) => {
      const obj = { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: index > 0 };
      return React3(closure_9, obj, index);
    })
  };
  GUMMY_STRIPES = hue(1394).GUMMY_STRIPES;
  return closure_4(closure_5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((hue) => {
  let items;
  let saturation;
  let obj = hue(saturation[5]);
  const cResult = obj.c(4);
  hue = hue.hue;
  const shift = hue.shift;
  const tmp = saturation;
  saturation = hue.saturation;
  const lightness = hue.lightness;
  let stripeOverlap = hue.overlap;
  const tmp3 = closure_6();
  let obj2 = hue(saturation[7]);
  const fn = function o() {
    const result = (hue.get() + shift) % 360;
    const obj = ColorPickerUtils;
    const obj2 = { h: (result + 360) % 360, s: saturation, l: lightness };
    const tmp2 = _slicedToArray(obj.hslToRgbWorklet(obj2), 3);
    const obj3 = { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
    return obj3;
  };
  let obj3 = { hue, shift, hslToRgbWorklet: hue(saturation[8]).hslToRgbWorklet, saturation, lightness };
  fn.__closure = obj3;
  fn.__workletHash = 8497009401863;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (stripeOverlap) {
    stripeOverlap = tmp3.stripeOverlap;
  }
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.stripe) {
      let tmp5;
      if (cResult[2] === stripeOverlap) {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const obj4 = { style: items };
  items = [tmp3.stripe, stripeOverlap, animatedStyle];
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
  let obj = hue(saturation[7]);
  const fn = function c() {
    const result = (hue.get() + shift) % 360;
    const obj = ColorPickerUtils;
    const obj2 = { h: (result + 360) % 360, s: saturation, l: lightness };
    const tmp2 = _slicedToArray(obj.hslToRgbWorklet(obj2), 3);
    const obj3 = { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
    return obj3;
  };
  let obj2 = { hue, shift, hslToRgbWorklet: hue(saturation[8]).hslToRgbWorklet, saturation, lightness };
  fn.__closure = obj2;
  fn.__workletHash = 248703450532;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [tmp.stripe, , ];
  const View = shift(saturation[7]).View;
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  style[1] = stripeOverlap;
  style[2] = animatedStyle;
  return closure_4(View, { style });
});
let result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default tmp4;