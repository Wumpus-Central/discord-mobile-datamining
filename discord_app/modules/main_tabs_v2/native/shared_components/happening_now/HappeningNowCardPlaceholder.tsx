// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../../_runtime/metro/01705__.js";
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const HAPPENING_NOW_CONTENT_HEIGHT = fn(17548).HAPPENING_NOW_CONTENT_HEIGHT;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  placeholderContainer: { flexDirection: "row", alignItems: "center" },
  placeholderIcon: null,
  placeholderContent: null,
  placeholderText: null,
  placeholderTextTop: null,
  placeholderTextBottom: null,
};
let size = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.placeholderIcon = size;
obj2.placeholderContent = { flex: 1 };
obj2.placeholderText = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.placeholderTextTop = { width: "75%" };
obj2.placeholderTextBottom = { width: "50%", marginTop: 8 };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = {
  code: "(function HappeningNowCardPlaceholderTsx1(){let[opacity,withRepeat,withTiming,endOpacity,duration,Easing]=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));})",
};
let closure_9 = {
  code: "(function HappeningNowCardPlaceholderTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx",
);

export function HappeningNowCardPlaceholder(panelVariant) {
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  _require = 1000;
  importDefault = 0.6;
  let sharedValue;
  sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(0.3);
  items = [sharedValue, 1000, 0.6];
  const effect = noop.useEffect(() => {
    items = [closure_8, sharedValue, _mod1652.withRepeat, timing_timing.withTiming, c1, c0, _mod1652.Easing];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
    class HappeningNowCardPlaceholderTsx1 {
      constructor() {
        obj = { duration: closure_4, easing: closure_5.ease };
        result = closure_0.set(closure_1(closure_2(closure_3, obj), -1, true));
        return;
      }
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
    HappeningNowCardPlaceholderTsx1.__closure = items1;
    HappeningNowCardPlaceholderTsx1.__workletHash = 2445184542345;
    HappeningNowCardPlaceholderTsx1.__initData = tmp;
    _mod1705.scheduleOnUI(HappeningNowCardPlaceholderTsx1);
  }, items);
  const obj = require("../../../../../../_runtime/metro/01652__.js");
  let items1 = [closure_9, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class HappeningNowCardPlaceholderTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  HappeningNowCardPlaceholderTsx2.__closure = items2;
  HappeningNowCardPlaceholderTsx2.__workletHash = 8479372261668;
  HappeningNowCardPlaceholderTsx2.__initData = tmp5;
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    HappeningNowCardPlaceholderTsx2,
  );
  let str = "medium";
  const obj2 = require("../../../../../../_runtime/metro/01652__.js");
  const tmp9 = importDefault;
  if (panelVariant.fullWidth) {
    str = "full";
  }
  const obj3 = { width: str, panelVariant: flag, children: null };
  const obj4 = { style: null, children: null };
  const items3 = [animatedStyle, tmp.placeholderContainer];
  obj4.style = items3;
  const items4 = [ease(View, { style: tmp.placeholderIcon })];
  const obj6 = { style: tmp.placeholderContent, children: null };
  const obj7 = { style: null };
  const items5 = [,];
  ({ placeholderText: arr6[0], placeholderTextTop: arr6[1] } = tmp);
  obj7.style = items5;
  const items6 = [ease(View, obj7)];
  const obj8 = { style: null };
  const items7 = [,];
  ({ placeholderText: arr8[0], placeholderTextBottom: arr8[1] } = tmp);
  obj8.style = items7;
  items6[1] = ease(View, obj8);
  obj6.children = items6;
  items4[1] = closure_6(View, obj6);
  obj4.children = items4;
  obj3.children = closure_6(tmp9(sharedValue[6]).View, obj4);
  return ease(require("HappeningNowCard"), obj3);
}
