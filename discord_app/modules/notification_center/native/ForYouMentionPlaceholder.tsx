// discord_app/modules/notification_center/native/ForYouMentionPlaceholder.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  placeholder: { flexDirection: "row", marginBottom: 16, marginHorizontal: 24 },
  placeholderImage: null,
  placeholderText: null,
  placeholderTextContainer: null,
  placeholderBody: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  height: 52,
  width: 52,
  borderRadius: 26,
  marginEnd: 12,
};
createStyles.placeholderImage = size;
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  height: 15,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 12,
  marginBottom: 4,
};
createStyles.placeholderText = createStyles;
createStyles.placeholderTextContainer = { flexDirection: "row", flexWrap: "wrap" };
createStyles.placeholderBody = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 4,
};
let closure_7 = createStyles.createStyles(createStyles);
let closure_8 = [70, 50];
const __initData = {
  code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = function ForYouMentionPlaceholder() {
  const tmp = closure_7();
  _require = tmp;
  let obj = require("initialize");
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = require("ReanimatedRexport");
  sharedValue = obj1.useSharedValue(0.3);
  let obj3 = require("ReanimatedRexport");
  let obj4 = require("timing");
  obj = { duration: 1000, easing: null };
  const Easing = require("ReanimatedRexport").Easing;
  obj.easing = Easing.inOut(require("ReanimatedRexport").Easing.ease);
  const result = sharedValue.set(obj3.withRepeat(obj4.withTiming(0.7, obj), -1, true));
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
  obj = { style: null, children: null };
  const items1 = [tmp.placeholder, animatedStyle];
  obj.style = items1;
  obj1 = { style: tmp.placeholderImage };
  const items2 = [closure_5(View, obj1)];
  const obj2 = { children: null };
  obj3 = {
    style: tmp.placeholderTextContainer,
    children: closure_8.map((item, index) => {
      let obj = { style: null };
      const items = [placeholderText.placeholderText];
      obj = { width: "" + item + "%" };
      items[1] = obj;
      obj.style = items;
      return hasOwnProperty(View, obj, index);
    }),
  };
  const items3 = [closure_5(View, obj3)];
  obj4 = { style: null };
  const items4 = [tmp.placeholderBody, { width: "85%" }];
  obj4.style = items4;
  items3[1] = closure_5(View, obj4);
  obj2.children = items3;
  items2[1] = closure_6(View, obj2);
  obj.children = items2;
  return closure_6(stateFromStores(sharedValue[7]).View, obj);
};
