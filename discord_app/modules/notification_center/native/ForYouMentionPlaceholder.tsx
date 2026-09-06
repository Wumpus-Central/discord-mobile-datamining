// === Module 16417: ForYouMentionPlaceholder ===

// Module 16417 (ForYouMentionPlaceholder)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { placeholder: { flexDirection: "row", marginBottom: 16, marginHorizontal: 24 }, placeholderImage: null, placeholderText: null, placeholderTextContainer: null, placeholderBody: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, height: 52, width: 52, borderRadius: 26, marginEnd: 12 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: ThemesDefault.radii.sm, marginRight: 12, marginBottom: 4 };
createCacheKey[3] = { flexDirection: "row", flexWrap: "wrap" };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: ThemesDefault.radii.sm, marginRight: 12, marginBottom: 4 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: ThemesDefault.radii.sm, marginTop: 4 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = [70, 50];
let closure_9 = { code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: ThemesDefault.radii.sm, marginTop: 4 };
let result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = function ForYouMentionPlaceholder() {
  const tmp = callback3();
  const _require = tmp;
  let obj = _require(sharedValue[6]);
  let items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = _require(sharedValue[7]);
  sharedValue = obj1.useSharedValue(0.3);
  let obj3 = _require(sharedValue[7]);
  obj = { duration: 1000, easing: null };
  const Easing = _require(sharedValue[7]).Easing;
  obj[1] = Easing.inOut(_require(sharedValue[7]).Easing.ease);
  const result = sharedValue.set(obj3.withRepeat(_require(sharedValue[8]).withTiming(0.7, obj), -1, true));
  const obj5 = _require(sharedValue[8]);
  const fn = function y() {
    let opacity = 0.7;
    if (!stateFromStores) {
      opacity = sharedValue.get();
    }
    return { opacity };
  };
  fn.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  fn.__workletHash = 8828208724188;
  fn.__initData = closure_9;
  const animatedStyle = _require(sharedValue[7]).useAnimatedStyle(fn);
  obj = { style: items1, children: null };
  items1 = [tmp.placeholder, animatedStyle];
  obj1 = { style: tmp.placeholderImage };
  const items2 = [callback(View, obj1), ];
  const obj2 = { children: null };
  obj3 = {
    style: tmp.placeholderTextContainer,
    children: closure_8.map((arg0, arg1) => {
      let obj = { style: null };
      const items = [placeholderText.placeholderText, ];
      obj = { width: "" + arg0 + "%" };
      items[1] = obj;
      obj[0] = items;
      return closure_1_5(closure_1_3, obj, arg1);
    })
  };
  const items3 = [callback(View, obj3), ];
  const items4 = [tmp.placeholderBody, { width: "85%" }];
  items3[1] = callback(View, { style: items4 });
  obj2[0] = items3;
  items2[1] = callback2(View, obj2);
  obj[1] = items2;
  return callback2(stateFromStores(sharedValue[7]).View, obj);
};