// === Module 16820: ForYouMentionPlaceholder ===

// Module 16820 (ForYouMentionPlaceholder)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = { placeholder: { flexDirection: "row", marginBottom: 16, marginHorizontal: 24 }, placeholderImage: null, placeholderText: null, placeholderTextContainer: null, placeholderBody: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 52, width: 52, borderRadius: 26, marginEnd: 12 };
obj2.placeholderImage = size;
obj2.placeholderText = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: nativeDefault.radii.sm, marginRight: 12, marginBottom: 4 };
obj2.placeholderTextContainer = { flexDirection: "row", flexWrap: "wrap" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: nativeDefault.radii.sm, marginRight: 12, marginBottom: 4 };
obj2.placeholderBody = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: nativeDefault.radii.sm, marginTop: 4 };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = [70, 50];
const __initData = { code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = function ForYouMentionPlaceholder() {
  const tmp = closure_7();
  _require = tmp;
  let items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  sharedValue = require("ReanimatedRexport").useSharedValue(0.3);
  const obj2 = require("ReanimatedRexport");
  const obj4 = require("ReanimatedRexport");
  const obj3 = { duration: 1000, easing: null };
  const Easing = require("ReanimatedRexport").Easing;
  obj3.easing = Easing.inOut(require("ReanimatedRexport").Easing.ease);
  const result = sharedValue.set(obj4.withRepeat(require("timing").withTiming(0.7, obj3), -1, true));
  const obj5 = require("timing");
  const fn = function y() {
    let opacity = 0.7;
    if (!stateFromStores) {
      opacity = sharedValue.get();
    }
    return { opacity };
  };
  fn.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  fn.__workletHash = 8828208724188;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj6 = { style: null, children: null };
  const items1 = [tmp.placeholder, animatedStyle];
  obj6.style = items1;
  const items2 = [closure_5(View, { style: tmp.placeholderImage }), ];
  const obj9 = { children: null };
  const obj7 = require("ReanimatedRexport");
  const obj8 = { style: tmp.placeholderImage };
  const items3 = [
    closure_5(View, {
      style: tmp.placeholderTextContainer,
      children: closure_8.map((item, index) => {
        const obj = { style: null };
        const items = [placeholderText.placeholderText, { width: "" + item + "%" }];
        obj.style = items;
        return hasOwnProperty(View, obj, index);
      })
    }),

  ];
  const obj11 = { style: null };
  const items4 = [tmp.placeholderBody, { width: "85%" }];
  obj11.style = items4;
  items3[1] = closure_5(View, obj11);
  obj9.children = items3;
  items2[1] = closure_6(View, obj9);
  obj6.children = items2;
  return closure_6(stateFromStores(sharedValue[7]).View, obj6);
};