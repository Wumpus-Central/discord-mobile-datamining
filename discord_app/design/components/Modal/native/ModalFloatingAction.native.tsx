// discord_app/design/components/Modal/native/ModalFloatingAction.native.tsx
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import LinearGradientDefault from "../../../../../_runtime/05725_LinearGradient.js";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5143);
let closure_8 = createStyles.createStyles({
  floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 },
  spacer: { height: 96 },
});
let closure_9 = {
  code: "(function ModalFloatingActionNativeTsx1(){let[interpolate,sharedValue,floatingBackgroundColor,useReducedMotion]=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export function ModalFloatingAction(isVisible) {
  isVisible = isVisible.isVisible;
  _require = isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.assign({ isVisible: 0, floatingBackgroundColor: 0 }));
  importDefault = undefined;
  const tmp2 = closure_8();
  let num = 0;
  if (isVisible) {
    num = 1;
  }
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  items = [isVisible, sharedValue];
  let obj = require("../../../../../_runtime/metro/01652__.js");
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined2.set(spring_spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp7 = useSafeAreaInsetsDefault();
  let items1 = [
    closure_9,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    sharedValue,
    floatingBackgroundColor,
    noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion.enabled,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class ModalFloatingActionNativeTsx1 {
    constructor() {
      obj = {
        opacity: closure_0(closure_1.get(), [0, 1], [0, 1]),
        borderBottomColor: closure_2,
        borderBottomWidth: 16,
        transform: null,
      };
      tmp = closure_0;
      num = 0;
      value = closure_1.get();
      if (closure_3) {
        num = 0.999999;
      }
      obj1 = { translateY: null };
      items = [,];
      items[0] = num;
      items[1] = 1;
      obj1.translateY = tmp(value, items, [32, 0]);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13];
  ModalFloatingActionNativeTsx1.__closure = items2;
  ModalFloatingActionNativeTsx1.__workletHash = 5863322493848;
  ModalFloatingActionNativeTsx1.__initData = tmp9;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ModalFloatingActionNativeTsx1,
  );
  let obj2 = { style: null, pointerEvents: null, children: null };
  const items3 = [animatedStyle, tmp2.floating, { paddingBottom: tmp7.bottom }];
  obj2.style = items3;
  let str = "none";
  if (isVisible) {
    str = "auto";
  }
  obj2.pointerEvents = str;
  const obj3 = { colors: null, locations: null, style: null };
  const tmp3Result = require("../../../../../_runtime/metro/01652__.js");
  const tmp6Result = LinearGradientDefault;
  const obj5 = _modDef671(floatingBackgroundColor);
  const items4 = [_modDef671(floatingBackgroundColor).alpha(0).hex(), floatingBackgroundColor];
  obj3.colors = items4;
  obj3.locations = [0, 0.5];
  obj3.style = absoluteFill.absoluteFill;
  const items5 = [closure_6(tmp6Result, obj3)];
  const obj4 = {};
  const merged1 = Object.assign(merged);
  obj4.variant = "primary";
  items5[1] = closure_6(require("ModalActionButton").ModalActionButton, obj4);
  obj2.children = items5;
  return closure_7(_modDef1652.View, obj2);
}
export function ModalFloatingActionSpacer() {
  return timestampProducer(hasOwnProperty, { style: closure_8().spacer });
}
