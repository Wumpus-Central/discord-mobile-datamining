// === Module 14382: AnimatedStripe ===

// Module 14382 (AnimatedStripe)
import _slicedToArray from "_slicedToArray";
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function AnimatedStripe(hue) {
  hue = hue.hue;
  const shift = hue.shift;
  const saturation = hue.saturation;
  const lightness = hue.lightness;
  let stripeOverlap = hue.overlap;
  const tmp = callback2();
  let obj = hue(saturation[5]);
  const fn = function c() {
    const result = (hue.get() + shift) % 360;
    let obj = hue(saturation[6]);
    obj = { h: (result + 360) % 360, s: saturation, l: lightness };
    const tmp2 = lightness(obj.hslToRgbWorklet(obj), 3);
    obj = { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
    return obj;
  };
  obj = { hue, shift, hslToRgbWorklet: hue(saturation[6]).hslToRgbWorklet, saturation, lightness };
  fn.__closure = obj;
  fn.__workletHash = 8497009401863;
  fn.__initData = closure_7;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [tmp.stripe, , ];
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  style[1] = stripeOverlap;
  style[2] = animatedStyle;
  return closure_4(shift(saturation[5]).View, { style });
}
({ jsx: c4, Fragment: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
let closure_7 = { code: "function GummyStripesFromHueTsx1(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
let result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default function GummyStripesFromHue(hue) {
  hue = hue.hue;
  const obj = { children: null };
  const GUMMY_STRIPES = hue(1885).GUMMY_STRIPES;
  obj[0] = GUMMY_STRIPES.map((hueShift) => outer1_4(outer1_8, { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: arg1 > 0 }, arg1));
  return callback(closure_5, obj);
};