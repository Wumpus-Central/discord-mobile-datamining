// === Module 12354: SearchBarBottomBorder ===

// Module 12354 (SearchBarBottomBorder)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5186 */;
import springPresets from "springPresets" /* 5190 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { border: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const __initData = { code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = function usePinnedSearchBarBottomBorder(arg0) {
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  const tmp = closure_5();
  const sharedValue = triggerScrollHeight(4493).useSharedValue(0);
  const items = [key, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = noop.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  let obj = triggerScrollHeight(4493);
  const fn = function u() {
    let num = 0;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, springPresets.springStandard) };
  };
  const obj2 = triggerScrollHeight(4493);
  fn.__closure = { withSpring: triggerScrollHeight(5186).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(5190).springStandard };
  fn.__workletHash = 5466161440826;
  fn.__initData = __initData;
  const obj4 = { scrollHandler: callback, bottomBorderComponent: null };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj5 = { style: null };
  const items2 = [tmp.border, animatedStyle];
  obj5.style = items2;
  obj4.bottomBorderComponent = jsx(sharedValue(4493).View, { style: null }, key);
  return obj4;
};