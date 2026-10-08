// === Module 15231: QuestGameLogotype ===

// Module 15231 (QuestGameLogotype)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5374 */;
import FastImageDefault from "FastImage" /* 6164 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let SPRING_CONFIG = {};
const merged = Object.assign(fn(5378).springSlow);
SPRING_CONFIG.overshootClamping = true;
const createStyles = fn(5090);
const obj2 = { logo: { marginBottom: nativeDefault.space.PX_4 } };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,\"animate-always\")};}" };
const __initData2 = { code: "function QuestGameLogotypeTsx2(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}" };
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_4 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestGameLogotype(assetUrl) {
  let SvgUri = assetUrl;
  SPRING_CONFIG = assetUrl(576);
  const cResult = SPRING_CONFIG.c(23);
  assetUrl = assetUrl.assetUrl;
  ({ width, height, maxWidth, maxHeight, style, onError } = assetUrl);
  let num = 120;
  if (undefined !== width) {
    num = width;
  }
  let logo = closure_9();
  let num2 = 2;
  [tmp4, importDefault] = noop.useState(null);
  if (null == tmp4) {
    dependencyMap = undefined;
    if (cResult[6] !== assetUrl) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
      const items = [assetUrl];
      class H {
        constructor() {
          obj = closure_0(closure_2[10]);
          num = 1;
          if (null == c2) {
            num = 0;
          }
          obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
          return obj1;
        }
      }
      cResult[7] = R;
      cResult[8] = items;
      let tmp10 = items;
    } else {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
      tmp10 = cResult[8];
    }
    const effect = noop.useEffect(R, tmp10);
    class H {
      constructor() {
        obj = closure_0(closure_2[10]);
        num = 1;
        if (null == c2) {
          num = 0;
        }
        obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
        return obj1;
      }
    }
    const obj3 = { withSpring: SvgUri(5374).withSpring, logoDimensionStyles: undefined, SPRING_CONFIG };
    H.__closure = obj3;
    H.__workletHash = 13667917221894;
    H.__initData = __initData;
    const animatedStyle = SvgUri(4810).useAnimatedStyle(H);
    if (cResult[9] !== assetUrl) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
      const endsWithResult = assetUrl.endsWith(".svg");
      cResult[9] = assetUrl;
      class H {
        constructor() {
          obj = closure_0(closure_2[10]);
          num = 1;
          if (null == c2) {
            num = 0;
          }
          obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
          return obj1;
        }
      }
      cResult[10] = endsWithResult;
    } else {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
    }
    if (cResult[11] === animatedStyle) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
      if (cResult[14] === assetUrl) {
        class R {
          constructor() {
            size = Image.getSize(assetUrl, () => { ... });
            return;
          }
        }
      }
      if (tmp15) {
        class R {
          constructor() {
            size = Image.getSize(assetUrl, () => { ... });
            return;
          }
        }
        const obj4 = { style: null, children: null };
        const items1 = [undefined, ];
        class H {
          constructor() {
            obj = closure_0(closure_2[10]);
            num = 1;
            if (null == c2) {
              num = 0;
            }
            obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
            return obj1;
          }
        }
        obj4.style = items1;
        SvgUri = SvgUri(7550).SvgUri;
        let size = { height: "100%", width: "100%", uri: assetUrl, onError };
        obj4.children = <SvgUri height="100%" width="100%" uri={assetUrl} onError={onError} />;
        let tmp18Result = <closure_5 style={null}>{null}</closure_5>;
      } else {
        class R {
          constructor() {
            size = Image.getSize(assetUrl, () => { ... });
            return;
          }
        }
        const obj5 = { source: null, style: null, onError: null };
        { uri: null }.uri = assetUrl;
        class H {
          constructor() {
            obj = closure_0(closure_2[10]);
            num = 1;
            if (null == c2) {
              num = 0;
            }
            obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
            return obj1;
          }
        }
        const items2 = [undefined, logo.logo];
        obj5.style = items2;
        obj5.onError = onError;
        tmp18Result = jsx(FastImageDefault, { source: null, style: null, onError: null });
        const obj6 = { uri: null };
      }
      class H {
        constructor() {
          obj = closure_0(closure_2[10]);
          num = 1;
          if (null == c2) {
            num = 0;
          }
          obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
          return obj1;
        }
      }
      cResult[14] = assetUrl;
      cResult[15] = tmp15;
      cResult[16] = undefined;
      cResult[17] = onError;
      logo = logo.logo;
      cResult[18] = logo;
      cResult[19] = tmp18Result;
    }
    const items3 = [animatedStyle, style];
    cResult[11] = animatedStyle;
    cResult[12] = style;
    cResult[13] = items3;
    const SvgUriResult = SvgUri(4810);
  } else {
    class R {
      constructor() {
        size = Image.getSize(assetUrl, () => { ... });
        return;
      }
    }
    if (cResult[0] === tmp5) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
    }
    if (null != height) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
      tmp8[0] = height;
      tmp8[1] = height * tmp5;
    } else {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
      tmp8[0] = num / tmp5;
      tmp8[1] = num;
    }
    if (null != maxWidth) {
      class R {
        constructor() {
          size = Image.getSize(assetUrl, () => { ... });
          return;
        }
      }
      const _Math = Math;
      tmp8.width = Math.min(maxWidth, tmp8.width);
      tmp8.height = tmp8.width / tmp5;
    }
    class H {
      constructor() {
        obj = closure_0(closure_2[10]);
        num = 1;
        if (null == c2) {
          num = 0;
        }
        obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
        return obj1;
      }
    }
    cResult[0] = tmp5;
    cResult[1] = height;
    cResult[num2] = maxHeight;
    cResult[3] = maxWidth;
    cResult[4] = num;
    num2 = 5;
    cResult[5] = tmp8;
  }
  const tmp3 = _slicedToArray(noop.useState(null), 2);
}) : (function QuestGameLogotype(assetUrl) {
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
    const size = first;
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
    let size = timestampProducer.getSize(assetUrl, (width, height) => {
      if (tmp) {
        const size = { width, height };
        closure_1_6(size);
      }
      tmp = width > 0 && height > 0;
    });
  }, items1);
  SPRING_CONFIG = assetUrl(height[9]);
  class D {
    constructor() {
      obj = closure_0(closure_2[10]);
      num = 1;
      if (null == closure_7) {
        num = 0;
      }
      obj1 = { opacity: obj.withSpring(num, closure_8, "animate-always") };
      return obj1;
    }
  }
  D.__closure = { withSpring: assetUrl(height[10]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG };
  D.__workletHash = 13440780505285;
  D.__initData = __initData2;
  const items2 = [assetUrl];
  const animatedStyle = SPRING_CONFIG.useAnimatedStyle(D);
  const memo1 = maxHeight.useMemo(() => assetUrl.endsWith(".svg"), items2);
  const obj3 = { style: null, children: null };
  const items3 = [animatedStyle, assetUrl.style];
  obj3.style = items3;
  if (memo1) {
    const obj4 = { style: null, children: null };
    const items4 = [memo, tmp.logo];
    obj4.style = items4;
    let size = { height: "100%", width: "100%", uri: assetUrl, onError };
    obj4.children = tmp10(assetUrl(tmp7[11]).SvgUri, size);
    let tmp10Result = tmp10(first, obj4);
  } else {
    const obj5 = { source: null, style: null, onError: null };
    const obj6 = { uri: assetUrl };
    obj5.source = obj6;
    const items5 = [memo, tmp.logo];
    obj5.style = items5;
    obj5.onError = onError;
    tmp10Result = tmp10(num(tmp7[12]), obj5);
  }
  obj3.children = tmp10Result;
  return memo(num(height[9]).View, obj3);
}));