// discord_app/modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../design/animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { border: null };
createStyles = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
createStyles.border = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = function usePinnedSearchBarBottomBorder(arg0) {
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  let obj = triggerScrollHeight(4296);
  const sharedValue = obj.useSharedValue(0);
  const items = [key, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = noop.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  let obj1 = triggerScrollHeight(4296);
  const fn = function u() {
    let obj = spring;
    let num = 0;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, springPresets.springStandard) };
    return obj;
  };
  obj = {
    withSpring: triggerScrollHeight(4974).withSpring,
    scrollPosition: sharedValue,
    triggerScrollHeight,
    springStandard: triggerScrollHeight(4978).springStandard,
  };
  fn.__closure = obj;
  fn.__workletHash = 5466161440826;
  fn.__initData = __initData;
  obj = { scrollHandler: callback, bottomBorderComponent: null };
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj1 = { style: null };
  const items2 = [closure_5().border, animatedStyle];
  obj1.style = items2;
  obj.bottomBorderComponent = jsx(sharedValue(4296).View, { style: null }, key);
  return obj;
};
