// discord_app/modules/display_name_styles/native/effects/GummyStripesFromHue.tsx
import ColorPickerUtils from "../../../color_picker/native/ColorPickerUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function AnimatedStripe(hue) {
  hue = hue.hue;
  const shift = hue.shift;
  const saturation = hue.saturation;
  const lightness = hue.lightness;
  let stripeOverlap = hue.overlap;
  const tmp = closure_6();
  hue(saturation[5]);
  const fn = function c() {
    const result = (hue.get() + shift) % 360;
    let obj = { h: (result + 360) % 360, s: saturation, l: lightness };
    const tmp2 = _slicedToArray(obj.hslToRgbWorklet(obj), 3);
    obj = { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
    return obj;
  };
  let obj = { hue, shift, hslToRgbWorklet: hue(saturation[6]).hslToRgbWorklet, saturation, lightness };
  fn.__closure = obj;
  fn.__workletHash = 8497009401863;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [tmp.stripe, ,];
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  style[1] = stripeOverlap;
  style[2] = animatedStyle;
  return closure_4(shift(saturation[5]).View, { style });
}
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const __initData = {
  code: 'function GummyStripesFromHueTsx1(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:"rgb("+r+", "+g+", "+b+")"};}',
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default function GummyStripesFromHue(hue) {
  hue = hue.hue;
  const obj = { children: null };
  const GUMMY_STRIPES = hue(1388).GUMMY_STRIPES;
  obj.children = GUMMY_STRIPES.map((hueShift, index) =>
    React4(
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
  return closure_4(closure_5, obj);
}
