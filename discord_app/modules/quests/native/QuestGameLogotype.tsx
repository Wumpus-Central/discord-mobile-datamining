// === Module 14674: ? ===

// Module 14674
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
let obj = {};
const merged = Object.assign(require("SUBTLE_SPRING").springSlow);
obj.overshootClamping = true;
obj = { logo: { marginBottom: ThemesDefault.space.PX_4 } };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}" };
let obj1 = { marginBottom: ThemesDefault.space.PX_4 };
const memoResult = importAllResult.memo((assetUrl) => {
  assetUrl = assetUrl.assetUrl;
  let num = assetUrl.width;
  if (num === undefined) {
    num = 120;
  }
  const height = assetUrl.height;
  const maxWidth = assetUrl.maxWidth;
  const maxHeight = assetUrl.maxHeight;
  const onError = assetUrl.onError;
  let first;
  closure_6 = undefined;
  let memo;
  const tmp = callback();
  const tmp2 = maxWidth(maxHeight.useState(null), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  const items = [first, num, height, maxWidth, maxHeight];
  memo = maxHeight.useMemo(() => {
    const size = first;
    if (null != first) {
      const result = size.width / size.height;
      if (null != height) {
        obj = { height: null, width: null };
        obj[0] = tmp2;
        obj[1] = tmp2 * result;
        let size2 = obj;
      } else {
        size2 = { height: null, width: null };
        size2[0] = num / result;
        size2[1] = num;
      }
      if (null != maxWidth) {
        const _Math = Math;
        size2.width = Math.min(tmp4, size2.width);
        size2.height = size2.width / result;
      }
      if (null != maxHeight) {
        const _Math2 = Math;
        size2.height = Math.min(tmp6, size2.height);
        size2.width = size2.height * result;
      }
      return size2;
    }
  }, items);
  const items1 = [assetUrl];
  const effect = maxHeight.useEffect(() => {
    size = size.getSize(assetUrl, (arg0, arg1) => {
      if (tmp) {
        obj = { width: null, height: null };
        obj[0] = arg0;
        obj[1] = arg1;
        callback(obj);
      }
    });
  }, items1);
  obj = assetUrl(height[7]);
  class C {
    constructor() {
      obj = assetUrl(height[8]);
      num = 1;
      if (null == closure_7) {
        num = 0;
      }
      obj = { opacity: obj.withSpring(num, closure_1_8, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: assetUrl(height[8]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG: obj };
  C.__closure = obj;
  C.__workletHash = 11242802634598;
  C.__initData = closure_10;
  const items2 = [assetUrl];
  const animatedStyle = obj.useAnimatedStyle(C);
  const memo1 = maxHeight.useMemo(() => assetUrl.endsWith(".svg"), items2);
  obj = { style: items3, children: null };
  items3 = [animatedStyle, assetUrl.style];
  if (memo1) {
    obj1 = { style: null, children: null };
    const items4 = [memo, tmp.logo];
    obj1[0] = items4;
    const obj2 = { height: "100%", width: "100%", uri: null, onError: null };
    obj2[2] = assetUrl;
    obj2[3] = onError;
    obj1[1] = tmp10(assetUrl(tmp7[9]).SvgUri, obj2);
    let tmp10Result = tmp10(first, obj1);
  } else {
    const obj3 = { source: null, style: null, onError: null };
    const obj4 = { uri: null };
    obj4[0] = assetUrl;
    obj3[0] = obj4;
    const items5 = [memo, tmp.logo];
    obj3[1] = items5;
    obj3[2] = onError;
    tmp10Result = tmp10(num(tmp7[10]), obj3);
  }
  obj[1] = tmp10Result;
  return memo(num(height[7]).View, obj);
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default memoResult;