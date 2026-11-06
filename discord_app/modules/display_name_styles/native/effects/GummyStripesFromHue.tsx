// discord_app/modules/display_name_styles/native/effects/GummyStripesFromHue.tsx
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
function AnimatedStripe(overlap) {
  let stripeOverlap = overlap.overlap;
  ({ hue, shift, saturation, lightness } = overlap);
  let tmp = closure_6();
  items = [closure_7, hue, shift, require("ColorPickerUtils").hslToRgbWorklet, saturation, lightness];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  let l;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class GummyStripesFromHueTsx1 {
    constructor() {
      obj = { h: (((closure_0.get() + closure_1) % 360) + 360) % 360, s: closure_3, l: closure_4 };
      tmp = closure_3(closure_2(obj), 3);
      obj1 = { backgroundColor: "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")" };
      return obj1;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8];
  GummyStripesFromHueTsx1.__closure = items1;
  GummyStripesFromHueTsx1.__workletHash = 15518574329470;
  GummyStripesFromHueTsx1.__initData = tmp3;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(GummyStripesFromHueTsx1);
  const style = [tmp.stripe, ,];
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  style[1] = stripeOverlap;
  style[2] = animatedStyle;
  return l(_modDef1652.View, { style });
}
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty } = jsxProd);
const createStyles = fn(5170);
let closure_6 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
let closure_7 = {
  code: '(function GummyStripesFromHueTsx1(){let[hue,shift,hslToRgbWorklet,saturation,lightness]=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:"rgb("+r+", "+g+", "+b+")"};})',
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default function GummyStripesFromHue(hue) {
  hue = hue.hue;
  const obj = { children: null };
  const GUMMY_STRIPES = hue(1393).GUMMY_STRIPES;
  obj.children = GUMMY_STRIPES.map((hueShift, index) =>
    l(
      AnimatedStripe,
      {
        hue,
        shift: hueShift.hueShift,
        saturation: hueShift.saturation,
        lightness: hueShift.lightness,
        overlap: index > 0,
      },
      index,
    ),
  );
  return l(closure_5, obj);
}
