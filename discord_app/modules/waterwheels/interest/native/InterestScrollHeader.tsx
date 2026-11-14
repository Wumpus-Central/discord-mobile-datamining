// === Module 19040: InterestScrollHeader ===

// Module 19040 (InterestScrollHeader)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import Text_Text from "Text/Text" /* 5929 */;
import noop from "module_19" /* 19 */;

const _modDef1655 = _mod1655;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_5 = createStyles.createStyles({ title: { flex: 1, alignItems: "center", justifyContent: "center", minWidth: 0 }, normal: { maxWidth: "100%" } });
let closure_6 = { code: "(function InterestScrollHeaderTsx1(event){let[scrollY,onViewportScroll,scheduleOnRN]=this.__closure;scrollY.set(event.contentOffset.y);if(onViewportScroll!=null)scheduleOnRN(onViewportScroll,event.contentOffset.y,event.layoutMeasurement.height);})" };
let items = [{ code: "(function interestHeaderElevation_InterestScrollHeaderTsx2(scrollOffset,collapseOffset){let[tokens]=this.__closure;const progress=Math.max(0,Math.min(1,(scrollOffset-collapseOffset-tokens.space.PX_16)/tokens.space.PX_48));return progress*progress*(3-2*progress);})" }, nativeDefault];
let closure_129_0;
[tmp3, tmp4] = items;
function interestHeaderElevation(arg0, arg1) {
  const bound = Math.max(0, Math.min(1, (arg0 - arg1 - require.space.PX_16) / require.space.PX_48));
  return bound * bound * (3 - 2 * bound);
}
let items1 = [tmp4];
interestHeaderElevation.__closure = items1;
interestHeaderElevation.__workletHash = 4728423726260;
interestHeaderElevation.__initData = tmp3;
let closure_7 = { code: "(function InterestScrollHeaderTsx3(){let[scrollY,collapseOffset]=this.__closure;return{opacity:Math.max(0,Math.min(1,(scrollY.get()-Math.max(0,collapseOffset-64))/64))};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestScrollHeader.tsx");

export function useInterestScrollHeader(onScroll) {
  const sharedValue = _mod1655.useSharedValue(0);
  items = [closure_6, sharedValue, onScroll, _mod1708.scheduleOnRN];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp2, tmp3, tmp4, tmp5] = items;
  class InterestScrollHeaderTsx1 {
    constructor(arg0) {
      result = closure_0.set(onScroll.contentOffset.y);
      if (null != closure_1) {
        tmp3 = closure_2;
        tmp4 = closure_2(tmp2, onScroll.contentOffset.y, onScroll.layoutMeasurement.height);
      }
      return;
    }
  }
  const items1 = [tmp3, tmp4, tmp5];
  InterestScrollHeaderTsx1.__closure = items1;
  InterestScrollHeaderTsx1.__workletHash = 6332981046127;
  InterestScrollHeaderTsx1.__initData = tmp2;
  return { scrollY: sharedValue, onScroll: _mod1655.useAnimatedScrollHandler(InterestScrollHeaderTsx1) };
}
export { interestHeaderElevation };
export function InterestCompactTitle(collapseOffset) {
  let num = collapseOffset.collapseOffset;
  ({ title, scrollY } = collapseOffset);
  if (num === undefined) {
    num = 160;
  }
  const tmp = closure_5();
  items = [closure_7, scrollY, num];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class InterestScrollHeaderTsx3 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      obj.opacity = Math.max(0, Math.min(1, (value - Math.max(0, closure_1 - 64)) / 64));
      return obj;
    }
  }
  const items1 = [tmp5, tmp6];
  InterestScrollHeaderTsx3.__closure = items1;
  InterestScrollHeaderTsx3.__workletHash = 14684811456024;
  InterestScrollHeaderTsx3.__initData = tmp4;
  const obj2 = { style: tmp.title, collapsable: false, children: null };
  const animatedStyle = _mod1655.useAnimatedStyle(InterestScrollHeaderTsx3);
  const obj3 = { pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: null, children: jsx(Text_Text.Text, { variant: "body-md/semibold", lineClamp: 1, children: title }) };
  const items2 = [tmp.normal, animatedStyle];
  obj3.style = items2;
  obj2.children = jsx(_modDef1655.View, { pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: null, children: jsx(Text_Text.Text, { variant: "body-md/semibold", lineClamp: 1, children: title }) });
  return <View style={tmp.title} collapsable={false}>{null}</View>;
}