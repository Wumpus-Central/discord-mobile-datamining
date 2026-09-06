// discord_app/modules/quests/native/QuestGameLogotype.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(fn(4978).springSlow);
obj.overshootClamping = true;
const createStyles = fn(4560);
obj = { logo: { marginBottom: nativeDefault.space.PX_4 } };
let closure_9 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}",
};
let obj1 = { marginBottom: nativeDefault.space.PX_4 };
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
  const tmp = closure_9();
  const tmp2 = maxWidth(maxHeight.useState(null), 2);
  const first = tmp2[0];
  closure_6 = tmp2[1];
  const items = [first, num, height, maxWidth, maxHeight];
  const memo = maxHeight.useMemo(() => {
    size = first;
    if (null != first) {
      const result = size.width / size.height;
      if (null != height) {
        size = { height: tmp2, width: tmp2 * result };
        let size2 = size;
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
    });
  }, items1);
  let __closure = assetUrl(height[7]);
  class C {
    constructor() {
      obj = closure_0(closure_2[8]);
      num = 1;
      if (null == closure_7) {
        num = 0;
      }
      obj = { opacity: obj.withSpring(num, closure_8, "animate-always") };
      return obj;
    }
  }
  __closure = { withSpring: assetUrl(height[8]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG: __closure };
  C.__closure = __closure;
  C.__workletHash = 11242802634598;
  C.__initData = __initData;
  const items2 = [assetUrl];
  const animatedStyle = __closure.useAnimatedStyle(C);
  const memo1 = maxHeight.useMemo(() => assetUrl.endsWith(".svg"), items2);
  __closure = { style: null, children: null };
  const items3 = [animatedStyle, assetUrl.style];
  __closure.style = items3;
  if (memo1) {
    const obj1 = { style: null, children: null };
    const items4 = [memo, tmp.logo];
    obj1.style = items4;
    size = { height: "100%", width: "100%", uri: assetUrl, onError };
    obj1.children = tmp10(assetUrl(tmp7[9]).SvgUri, size);
    let tmp10Result = tmp10(first, obj1);
  } else {
    const obj2 = { source: null, style: null, onError: null };
    const obj3 = { uri: assetUrl };
    obj2.source = obj3;
    const items5 = [memo, tmp.logo];
    obj2.style = items5;
    obj2.onError = onError;
    tmp10Result = tmp10(num(tmp7[10]), obj2);
  }
  __closure.children = tmp10Result;
  return memo(num(height[7]).View, __closure);
});
