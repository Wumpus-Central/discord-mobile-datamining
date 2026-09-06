// discord_app/modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { border: null };
createCacheKey = { borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let closure_6 = {
  code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}",
};
let result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx",
);

export const usePinnedSearchBarBottomBorder = function usePinnedSearchBarBottomBorder(arg0) {
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  let sharedValue;
  let obj = triggerScrollHeight(4296);
  sharedValue = obj.useSharedValue(0);
  const items = [key, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = React.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  const tmp = callback();
  const fn = function u() {
    let obj = triggerScrollHeight(closure_1_2[5]);
    let num = 0;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, triggerScrollHeight(closure_1_2[6]).springStandard) };
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
  fn.__initData = closure_6;
  obj = { scrollHandler: callback, bottomBorderComponent: null };
  const animatedStyle = triggerScrollHeight(4296).useAnimatedStyle(fn);
  const items2 = [tmp.border, animatedStyle];
  obj[1] = jsx(sharedValue(4296).View, { style: items2 }, key);
  return obj;
};
