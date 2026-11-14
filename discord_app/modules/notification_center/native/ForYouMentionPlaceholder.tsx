// discord_app/modules/notification_center/native/ForYouMentionPlaceholder.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1655 from "../../../../_runtime/metro/01655__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
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
obj2.placeholderImage = size;
obj2.placeholderText = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  height: 15,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 12,
  marginBottom: 4,
};
obj2.placeholderTextContainer = { flexDirection: "row", flexWrap: "wrap" };
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  height: 15,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 12,
  marginBottom: 4,
};
obj2.placeholderBody = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 4,
};
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = [70, 50];
let closure_9 = {
  code: "(function ForYouMentionPlaceholderTsx1(){let[reducedMotion,opacity]=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export function ForYouMentionPlaceholder() {
  const tmp = closure_7();
  _require = tmp;
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const sharedValue = require("../../../../_runtime/metro/01655__.js").useSharedValue(0.3);
  const obj2 = require("../../../../_runtime/metro/01655__.js");
  const obj4 = require("../../../../_runtime/metro/01655__.js");
  const obj3 = { duration: 1000, easing: null };
  const Easing = require("../../../../_runtime/metro/01655__.js").Easing;
  obj3.easing = Easing.inOut(require("../../../../_runtime/metro/01655__.js").Easing.ease);
  const result = sharedValue.set(obj4.withRepeat(require("timing/timing").withTiming(0.7, obj3), -1, true));
  const obj5 = require("timing/timing");
  const items1 = [closure_9, stateFromStores, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp5, tmp6, tmp7] = items1;
  class ForYouMentionPlaceholderTsx1 {
    constructor() {
      opacity = 0.7;
      if (!closure_0) {
        tmp = closure_1;
        opacity = closure_1.get();
      }
      return { opacity };
    }
  }
  const items2 = [tmp6, tmp7];
  ForYouMentionPlaceholderTsx1.__closure = items2;
  ForYouMentionPlaceholderTsx1.__workletHash = 12937076119429;
  ForYouMentionPlaceholderTsx1.__initData = tmp5;
  const animatedStyle = require("../../../../_runtime/metro/01655__.js").useAnimatedStyle(ForYouMentionPlaceholderTsx1);
  const obj6 = { style: null, children: null };
  const items3 = [tmp.placeholder, animatedStyle];
  obj6.style = items3;
  const items4 = [closure_5(View, { style: tmp.placeholderImage })];
  const obj9 = { children: null };
  const obj7 = require("../../../../_runtime/metro/01655__.js");
  const obj8 = { style: tmp.placeholderImage };
  const items5 = [
    closure_5(View, {
      style: tmp.placeholderTextContainer,
      children: closure_8.map((item, index) => {
        const obj = { style: null };
        items = [_undefined.placeholderText, { width: "" + item + "%" }];
        obj.style = items;
        return hasOwnProperty(View, obj, index);
      }),
    }),
  ];
  const obj11 = { style: null };
  const items6 = [tmp.placeholderBody, { width: "85%" }];
  obj11.style = items6;
  items5[1] = closure_5(View, obj11);
  obj9.children = items5;
  items4[1] = closure_6(View, obj9);
  obj6.children = items4;
  return closure_6(_modDef1655.View, obj6);
}
