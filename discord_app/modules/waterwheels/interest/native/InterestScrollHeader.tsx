// === Module 18710: InterestScrollHeader ===

// Module 18710 (InterestScrollHeader)
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5781 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5170);
let closure_5 = createStyles.createStyles({ title: { flex: 1, alignItems: "center", justifyContent: "center", minWidth: 0 }, normal: { maxWidth: "100%" } });
let closure_6 = { code: "(function InterestScrollHeaderTsx1(event){let[scrollY]=this.__closure;return scrollY.set(event.contentOffset.y);})" };
let items = [{ code: "(function interestHeaderElevation_InterestScrollHeaderTsx2(scrollOffset,collapseOffset){return Math.max(0,Math.min(1,(scrollOffset-collapseOffset)/12));})" }];
[tmp3] = items;
function interestHeaderElevation(arg0, arg1) {
  return Math.max(0, Math.min(1, (arg0 - arg1) / 12));
}
interestHeaderElevation.__workletHash = 17152021821049;
interestHeaderElevation.__initData = tmp3;
let closure_7 = { code: "(function InterestScrollHeaderTsx3(){let[scrollY,collapseOffset]=this.__closure;return{opacity:Math.max(0,Math.min(1,(scrollY.get()-Math.max(0,collapseOffset-64))/64))};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestScrollHeader.tsx");

export function useInterestScrollHeader() {
  const sharedValue = _mod1652.useSharedValue(0);
  items = [closure_6, sharedValue];
  c0 = undefined;
  [tmp2, tmp3] = items;
  class InterestScrollHeaderTsx1 {
    constructor(arg0) {
      return closure_0.set(arg0.contentOffset.y);
    }
  }
  const items1 = [tmp3];
  InterestScrollHeaderTsx1.__closure = items1;
  InterestScrollHeaderTsx1.__workletHash = 14965981204412;
  InterestScrollHeaderTsx1.__initData = tmp2;
  return { scrollY: sharedValue, onScroll: _mod1652.useAnimatedScrollHandler(InterestScrollHeaderTsx1) };
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
  const animatedStyle = _mod1652.useAnimatedStyle(InterestScrollHeaderTsx3);
  const obj3 = { pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: null, children: jsx(Text_Text.Text, { variant: "body-md/semibold", lineClamp: 1, children: title }) };
  const items2 = [tmp.normal, animatedStyle];
  obj3.style = items2;
  obj2.children = jsx(_modDef1652.View, { pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: null, children: jsx(Text_Text.Text, { variant: "body-md/semibold", lineClamp: 1, children: title }) });
  return <View style={tmp.title} collapsable={false}>{null}</View>;
}