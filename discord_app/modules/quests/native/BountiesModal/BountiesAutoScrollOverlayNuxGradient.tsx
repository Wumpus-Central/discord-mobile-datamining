// discord_app/modules/quests/native/BountiesModal/BountiesAutoScrollOverlayNuxGradient.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const BRAND_500 = ThemesDefault.unsafe_rawColors.BRAND_500;
let closure_8 = { code: "function BountiesAutoScrollOverlayNuxGradientTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollOverlayNuxGradient.tsx");

export default function BountiesAutoScrollOverlayNuxGradient(active) {
  active = active.active;
  let sharedValue;
  let obj = active(4187);
  sharedValue = obj.useSharedValue(0);
  const items = [active, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (active) {
      num = 1;
    }
    const result = sharedValue.set(active(closure_1_2[5]).withTiming(num, active(closure_1_2[6]).timingSlow));
  }, items);
  obj1 = active(4187);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17406907036861;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj = { style: StyleSheet.absoluteFillObject, colors: null, locations: null, start: null, end: null };
  const items2 = ["" + BRAND_500 + "80", "" + BRAND_500 + "00"];
  obj[1] = items2;
  obj[2] = [0, 1];
  obj[3] = { x: 0.5, y: 1 };
  obj[4] = { x: 0.5, y: 0 };
  const items3 = [callback(sharedValue(4908), obj), ];
  obj1 = { style: StyleSheet.absoluteFillObject, colors: ["rgba(0,0,0,0.4)", "rgba(0,0,0,0)"], locations: [0, 0.5], start: { x: 0.5, y: 1 }, end: { x: 0.5, y: 0 } };
  items3[1] = callback(sharedValue(4908), obj1);
  obj[2] = items3;
  return callback2(sharedValue(4187).View, obj);
};