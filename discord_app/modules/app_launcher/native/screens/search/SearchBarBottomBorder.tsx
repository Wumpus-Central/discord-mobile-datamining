// === Module 12651: SearchBarBottomBorder ===

// Module 12651 (SearchBarBottomBorder)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5773 */;
import springPresets from "springPresets" /* 5774 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
const obj2 = { border: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 } };
let closure_5 = createStyles.createStyles(obj2);
let closure_6 = { code: "(function SearchBarBottomBorderTsx1(){let[withSpring,scrollPosition,triggerScrollHeight,springStandard]=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export function usePinnedSearchBarBottomBorder(arg0) {
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  const tmp = closure_5();
  const sharedValue = _mod1652.useSharedValue(0);
  items = [key, sharedValue];
  const effect = noop.useEffect(() => {
    const result = _undefined.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = noop.useCallback((offset) => {
    const result = _undefined.set(offset.offset);
  }, items1);
  const items2 = [closure_6, spring_spring.withSpring, sharedValue, triggerScrollHeight, springPresets.springStandard];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10] = items2;
  class SearchBarBottomBorderTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() > closure_2) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items3 = [tmp7, tmp8, tmp9, tmp10];
  SearchBarBottomBorderTsx1.__closure = items3;
  SearchBarBottomBorderTsx1.__workletHash = 6638827003107;
  SearchBarBottomBorderTsx1.__initData = tmp6;
  const obj3 = { scrollHandler: callback, bottomBorderComponent: null };
  const animatedStyle = _mod1652.useAnimatedStyle(SearchBarBottomBorderTsx1);
  const obj4 = { style: null };
  const items4 = [tmp.border, animatedStyle];
  obj4.style = items4;
  obj3.bottomBorderComponent = jsx(_modDef1652.View, { style: null }, key);
  return obj3;
}