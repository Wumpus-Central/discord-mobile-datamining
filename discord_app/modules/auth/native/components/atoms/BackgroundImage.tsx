// === Module 6656: BackgroundImage ===

// Module 6656 (BackgroundImage)
import c from "c" /* 576 */;
import shared from "shared" /* 4969 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef6657 from "module_6657" /* 6657 */;
import _modDef6658 from "module_6658" /* 6658 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BackgroundImage(arg0) {
  const cResult = c.c(7);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  if (cResult[0] !== (undefined !== backgroundImageCover && backgroundImageCover)) {
    const items = [hasOwnProperty.absoluteFill, tmp4 ? { width: "100%", height: "100%" } : { width: "100%" }];
    cResult[0] = tmp4;
    cResult[1] = items;
  } else if (null != backgroundImageSource) {
    if (cResult[2] === tmp7) {
      if (cResult[3] === backgroundImageSource) {
        let tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp13) {
        const obj2 = { style: hasOwnProperty.absoluteFill, children: null };
        const obj3 = {};
        const merged = Object.assign(tmp13);
        obj2.children = jsx(FastImageDefault, {});
        const tmp22 = <React4 style={hasOwnProperty.absoluteFill}>{null}</React4>;
        cResult[5] = tmp13;
        cResult[6] = tmp22;
        let tmp14 = tmp22;
        const tmp5Result = FastImageDefault;
      } else {
        tmp14 = cResult[6];
      }
      return tmp14;
    }
    const obj4 = { style: tmp7, source: backgroundImageSource };
    cResult[2] = tmp7;
    cResult[3] = backgroundImageSource;
    cResult[4] = obj4;
    tmp13 = obj4;
  } else {
    if (tmpResult.isThemeDark(tmp6)) {
      let tmp5Result2 = _modDef6657;
    } else {
      tmp5Result2 = _modDef6658;
    }
    tmpResult = shared;
  }
}) : (function BackgroundImage(backgroundImageSource) {
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = flag(5031)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj = { style: absoluteFill.absoluteFill, children: null };
  const memo = noop.useMemo(() => {
    const items = [hasOwnProperty.absoluteFill, ];
    const obj = { style: items, source: null };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    if (null != backgroundImageSource) {
      obj.source = backgroundImageSource;
      return obj;
    } else {
      let tmp2 = dependencyMap;
      if (obj2.isThemeDark(closure_2)) {
        tmp2 = 6657;
        let tmp4Result = importDefault(tmp2);
      } else {
        tmp4Result = _modDef6658;
      }
      obj2 = shared;
    }
  }, items);
  const merged = Object.assign(memo);
  obj.children = jsx(flag(6156), {});
  return <closure_4 style={absoluteFill.absoluteFill}>{null}</closure_4>;
});