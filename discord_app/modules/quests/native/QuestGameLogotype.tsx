// === Module 17477: QuestGameLogotype ===

// Module 17477 (QuestGameLogotype)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: closure_6 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const obj = {};
const merged = Object.assign(fn(5764).springSlow);
obj.overshootClamping = true;
const createStyles = fn(5142);
const obj2 = { logo: { marginBottom: nativeDefault.space.PX_4 } };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function QuestGameLogotypeTsx1(){let[withSpring,logoDimensionStyles,SPRING_CONFIG]=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};})" };
let obj4 = { marginBottom: nativeDefault.space.PX_4 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default noop.memo(function QuestGameLogotype(assetUrl) {
  assetUrl = assetUrl.assetUrl;
  _require = assetUrl;
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
  items = [first, num, height, maxWidth, maxHeight];
  const memo = maxHeight.useMemo(() => {
    size = first;
    if (null != first) {
      const result = size.width / size.height;
      if (null != height) {
        const size1 = { height, width: height * result };
        let size2 = size1;
      } else {
        size2 = { height: width / result, width };
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
    size = size.getSize(c0, (width, height) => {
      if (tmp) {
        size = { width, height };
        closure_1_6(size);
      }
      tmp = width > 0 && height > 0;
    });
  }, items1);
  const items2 = [closure_10, require("spring/spring").withSpring, memo, maxHeight];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items2;
  class QuestGameLogotypeTsx1 {
    constructor() {
      num = 1;
      tmp = closure_0;
      if (null == closure_1) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_2, "animate-always") };
      return obj;
    }
  }
  const items3 = [tmp9, tmp10, tmp11];
  QuestGameLogotypeTsx1.__closure = items3;
  QuestGameLogotypeTsx1.__workletHash = 2309549072991;
  QuestGameLogotypeTsx1.__initData = tmp8;
  const items4 = [assetUrl];
  const animatedStyle = require("module_1652").useAnimatedStyle(QuestGameLogotypeTsx1);
  const memo1 = obj.useMemo(() => _undefined.endsWith(".svg"), items4);
  const obj3 = { style: null, children: null };
  const items5 = [animatedStyle, assetUrl.style];
  obj3.style = items5;
  if (memo1) {
    const obj4 = { style: null, children: null };
    const items6 = [memo, tmp.logo];
    obj4.style = items6;
    size = { height: "100%", width: "100%", uri: assetUrl, onError };
    obj4.children = jsx(require("inlineStyles").SvgUri, { height: "100%", width: "100%", uri: assetUrl, onError });
    let tmp14Result = <first style={null}>{null}</first>;
  } else {
    const obj5 = { source: null, style: null, onError: null };
    const obj6 = { uri: assetUrl };
    obj5.source = obj6;
    const items7 = [memo, tmp.logo];
    obj5.style = items7;
    obj5.onError = onError;
    tmp14Result = jsx(FastImageDefault, { source: null, style: null, onError: null });
  }
  obj3.children = tmp14Result;
  return jsx(_modDef1652.View, { style: null, children: null });
});