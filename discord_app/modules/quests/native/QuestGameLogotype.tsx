// discord_app/modules/quests/native/QuestGameLogotype.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let SPRING_CONFIG = {};
const merged = Object.assign(fn(5274).springSlow);
SPRING_CONFIG.overshootClamping = true;
const createStyles = fn(4827);
const obj2 = { logo: { marginBottom: nativeDefault.space.PX_4 } };
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}",
};
let obj4 = { marginBottom: nativeDefault.space.PX_4 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default noop.memo((assetUrl) => {
  assetUrl = assetUrl.assetUrl;
  let num = assetUrl.width;
  if (num === undefined) {
    num = 120;
  }
  const height = assetUrl.height;
  const maxWidth = assetUrl.maxWidth;
  const maxHeight = assetUrl.maxHeight;
  const onError = assetUrl.onError;
  let tmp = closure_9();
  const tmp2 = maxWidth(maxHeight.useState(null), 2);
  const first = tmp2[0];
  closure_6 = tmp2[1];
  const items = [first, num, height, maxWidth, maxHeight];
  const memo = maxHeight.useMemo(() => {
    size = first;
    if (null != first) {
      const result = size.width / size.height;
      if (null != height) {
        const size1 = { height, width: height * result };
        let size2 = size1;
      } else {
        size2 = { height: num / result, width: num };
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
    size = size.getSize(assetUrl, (width, height) => {
      if (tmp) {
        size = { width, height };
        closure_1_6(size);
      }
      tmp = width > 0 && height > 0;
    });
  }, items1);
  SPRING_CONFIG = assetUrl(height[7]);
  class C {
    constructor() {
      obj = closure_0(closure_2[8]);
      num = 1;
      if (null == closure_7) {
        num = 0;
      }
      obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
      return obj1;
    }
  }
  C.__closure = { withSpring: assetUrl(height[8]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG };
  C.__workletHash = 11242802634598;
  C.__initData = __initData;
  const items2 = [assetUrl];
  const animatedStyle = SPRING_CONFIG.useAnimatedStyle(C);
  const memo1 = maxHeight.useMemo(() => assetUrl.endsWith(".svg"), items2);
  const obj3 = { style: null, children: null };
  const items3 = [animatedStyle, assetUrl.style];
  obj3.style = items3;
  if (memo1) {
    const obj4 = { style: null, children: null };
    const items4 = [memo, tmp.logo];
    obj4.style = items4;
    size = { height: "100%", width: "100%", uri: assetUrl, onError };
    obj4.children = tmp10(assetUrl(tmp7[9]).SvgUri, size);
    let tmp10Result = tmp10(first, obj4);
  } else {
    const obj5 = { source: null, style: null, onError: null };
    const obj6 = { uri: assetUrl };
    obj5.source = obj6;
    const items5 = [memo, tmp.logo];
    obj5.style = items5;
    obj5.onError = onError;
    tmp10Result = tmp10(num(tmp7[10]), obj5);
  }
  obj3.children = tmp10Result;
  return memo(num(height[7]).View, obj3);
});
