// === Module 14954: QuestGameLogotype ===

// Module 14954 (QuestGameLogotype)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj3;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const jsx = Fragment.jsx;
let SPRING_CONFIG = { overshootClamping: true };
const merged = Object.assign(springPresets.springSlow);
const obj2 = { logo: obj3 };
obj3 = { marginBottom: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,\"animate-always\")};}" };
const __initData2 = { code: "function QuestGameLogotypeTsx2(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}" };
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((assetUrl) => {
  let closure_2;
  let height;
  let maxHeight;
  let maxWidth;
  let onError;
  let style;
  let tmp12;
  let width;
  let tmp = assetUrl;
  SPRING_CONFIG = assetUrl(576);
  const cResult = SPRING_CONFIG.c(23);
  assetUrl = assetUrl.assetUrl;
  ({ width, height, maxWidth, maxHeight, style, onError } = assetUrl);
  let num = 120;
  if (undefined !== width) {
    num = width;
  }
  const tmp4 = closure_9();
  [size, importDefault] = react.useState(null);
  let tmp6;
  _slicedToArray(react.useState(null), 2);
  if (null != size) {
    let size2;
    const result = size.width / size.height;
    if (cResult[0] === result) {
      if (cResult[1] === height) {
        if (cResult[2] === maxHeight) {
          if (cResult[3] === maxWidth) {
            let tmp8;
            if (cResult[4] === num) {
              tmp8 = cResult[5];
            }
            tmp6 = tmp8;
          }
        }
      }
    }
    if (null != height) {
      const size1 = { height, width: height * result };
      size2 = size1;
    } else {
      size2 = { height: num / result, width: num };
    }
    if (null != maxWidth) {
      const _Math = Math;
      size2.width = Math.min(maxWidth, size2.width);
      size2.height = size2.width / result;
    }
    if (null != maxHeight) {
      const _Math2 = Math;
      size2.height = Math.min(maxHeight, size2.height);
      size2.width = size2.height * result;
    }
    cResult[0] = result;
    cResult[1] = height;
    cResult[2] = maxHeight;
    cResult[3] = maxWidth;
    cResult[4] = num;
    cResult[5] = size2;
    tmp8 = size2;
  }
  dependencyMap = tmp6;
  if (cResult[6] !== assetUrl) {
    class R {
      constructor() {
        size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
        return;
      }
    }
    const items = [assetUrl];
    cResult[6] = assetUrl;
    cResult[7] = R;
    cResult[8] = items;
    tmp12 = items;
  } else {
    class R {
      constructor() {
        size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
        return;
      }
    }
    tmp12 = cResult[8];
  }
  const effect = react.useEffect(R, tmp12);
  const tmpResult = tmp(4612);
  class W {
    constructor() {
      tmp = closure_0(closure_2[10]);
      num = 1;
      withSpring = tmp.withSpring;
      if (null == closure_2) {
        num = 0;
      }
      obj = { opacity: withSpring(num, closure_8, "animate-always") };
      return obj;
    }
  }
  W.__closure = { withSpring: tmp(5597).withSpring, logoDimensionStyles: tmp6, SPRING_CONFIG };
  W.__workletHash = 13667917221894;
  W.__initData = __initData;
  ({ withSpring: tmp(5597).withSpring, logoDimensionStyles: tmp6, SPRING_CONFIG });
  const animatedStyle = tmpResult.useAnimatedStyle(W);
  if (cResult[9] !== assetUrl) {
    class R {
      constructor() {
        size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
        return;
      }
    }
    cResult[9] = assetUrl;
    cResult[10] = assetUrl.endsWith(".svg");
    const endsWithResult = assetUrl.endsWith(".svg");
  } else {
    class R {
      constructor() {
        size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
        return;
      }
    }
  }
  if (cResult[11] === animatedStyle) {
    let tmp18Result;
    class R {
      constructor() {
        size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
        return;
      }
    }
    if (cResult[14] === assetUrl) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
          return;
        }
      }
    }
    if (tmp15) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
          return;
        }
      }
      const items1 = [tmp6, tmp4.logo];
      const size3 = { height: "100%", width: "100%", uri: assetUrl, onError };
      tmp18Result = <closure_5 style={items1}>{null}</closure_5>;
    } else {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { /* body not rendered: F144423 */ });
          return;
        }
      }
      const items2 = [tmp6, tmp4.logo];
      const obj6 = { uri: assetUrl };
      tmp18Result = jsx(FastImageDefault, { source: obj6, style: items2, onError });
    }
    cResult[14] = assetUrl;
    cResult[15] = tmp15;
    cResult[16] = tmp6;
    cResult[17] = onError;
    cResult[18] = tmp4.logo;
    cResult[19] = tmp18Result;
  }
  const items3 = [animatedStyle, style];
  cResult[11] = animatedStyle;
  cResult[12] = style;
  cResult[13] = items3;
}) : ((assetUrl) => {
  let items3;
  let items4;
  let items5;
  let obj6;
  let tmp10Result;
  assetUrl = assetUrl.assetUrl;
  let num = assetUrl.width;
  if (num === undefined) {
    num = 120;
  }
  const height = assetUrl.height;
  const maxWidth = assetUrl.maxWidth;
  const maxHeight = assetUrl.maxHeight;
  const onError = assetUrl.onError;
  const style = assetUrl.style;
  let tmp = closure_9();
  const tmp2 = maxWidth(maxHeight.useState(null), 2);
  const first = tmp2[0];
  let closure_6 = tmp2[1];
  const items = [first, num, height, maxWidth, maxHeight];
  const memo = maxHeight.useMemo(() => {
    size = first;
    if (null != first) {
      let size2;
      const result = size.width / size.height;
      if (null != height) {
        const size1 = { height, width: height * result };
        size2 = size1;
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
    size = metroRequire.getSize(assetUrl, (width, height) => {
      const tmp = width > 0 && height > 0;
      if (tmp) {
        size = { width, height };
        closure_1_6(size);
      }
    });
  }, items1);
  const tmp6 = assetUrl;
  SPRING_CONFIG = assetUrl(height[9]);
  class D {
    constructor() {
      let obj;
      num = 1;
      const withSpring = spring.withSpring;
      spring;
      if (null == memo) {
        num = 0;
      }
      obj = { opacity: withSpring(num, obj, "animate-always") };
      return obj;
    }
  }
  D.__closure = { withSpring: assetUrl(height[10]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG };
  D.__workletHash = 13440780505285;
  D.__initData = __initData2;
  const items2 = [assetUrl];
  ({ withSpring: assetUrl(height[10]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG });
  const animatedStyle = SPRING_CONFIG.useAnimatedStyle(D);
  const memo1 = maxHeight.useMemo(() => assetUrl.endsWith(".svg"), items2);
  const obj3 = { style: items3, children: tmp10Result };
  items3 = [animatedStyle, style];
  const View = num(height[9]).View;
  const tmp11 = num;
  if (memo1) {
    const obj4 = { style: items4, children: memo(tmp6(height[11]).SvgUri, size) };
    items4 = [memo, tmp.logo];
    size = { height: "100%", width: "100%", uri: assetUrl, onError };
    tmp10Result = tmp10(first, obj4);
  } else {
    const obj5 = { source: obj6, style: items5, onError };
    items5 = [memo, tmp.logo];
    obj6 = { uri: assetUrl };
    tmp10Result = tmp10(tmp11(tmp7[12]), obj5);
  }
  return memo(View, obj3);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default memoResult;