// discord_app/modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { border: null };
createCacheKey = { borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_6 = { code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
let result = require("createCacheKey").fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = function usePinnedSearchBarBottomBorder(arg0) {
  let key;
  let triggerScrollHeight;
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  let sharedValue;
  let obj = triggerScrollHeight(4083);
  sharedValue = obj.useSharedValue(0);
  const items = [key, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = React.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  const tmp = createCacheKey();
  const fn = function u() {
    let obj = triggerScrollHeight(outer1_2[5]);
    let num = 0;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, triggerScrollHeight(outer1_2[6]).springStandard) };
    return obj;
  };
  obj = { withSpring: triggerScrollHeight(4776).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(4780).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 5466161440826;
  fn.__initData = closure_6;
  obj = { scrollHandler: callback, bottomBorderComponent: null };
  const animatedStyle = triggerScrollHeight(4083).useAnimatedStyle(fn);
  const items2 = [tmp.border, animatedStyle];
  obj[1] = jsx(sharedValue(4083).View, { style: items2 }, key);
  return obj;
};