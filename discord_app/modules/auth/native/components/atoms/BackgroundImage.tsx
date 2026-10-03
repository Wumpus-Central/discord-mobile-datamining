// === Module 6463: BackgroundImage ===

// Module 6463 (BackgroundImage)
import c from "c" /* 576 */;
import shared from "shared" /* 4729 */;
import _modDef6465 from "module_6465" /* 6465 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2 = dependencyMap;
  const cResult = c.c(7);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  if (cResult[0] !== (undefined !== backgroundImageCover && backgroundImageCover)) {
    const items = [timestampProducer.absoluteFill, tmp4 ? { width: "100%", height: "100%" } : { width: "100%" }];
    cResult[0] = tmp4;
    cResult[1] = items;
  } else if (null != backgroundImageSource) {
    if (cResult[2] === tmp7) {
      if (cResult[3] === backgroundImageSource) {
        let tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp13) {
        const obj2 = { style: timestampProducer.absoluteFill, children: null };
        const obj3 = {};
        const merged = Object.assign(tmp13);
        obj2.children = <React4 />;
        const tmp22 = <hasOwnProperty style={timestampProducer.absoluteFill}>{null}</hasOwnProperty>;
        cResult[5] = tmp13;
        cResult[6] = tmp22;
        let tmp14 = tmp22;
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
      tmp2 = 6464;
      let tmp5Result = importDefault(tmp2);
    } else {
      tmp5Result = _modDef6465;
    }
    tmpResult = shared;
  }
}) : ((backgroundImageSource) => {
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = flag(4791)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj = { style: absoluteFill.absoluteFill, children: null };
  const merged = Object.assign(noop.useMemo(() => {
    const items = [timestampProducer.absoluteFill, ];
    const obj = { style: items, source: null };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    if (null != backgroundImageSource) {
      obj.source = backgroundImageSource;
      return obj;
    } else {
      let tmp2 = dependencyMap;
      if (obj2.isThemeDark(closure_2)) {
        tmp2 = 6464;
        let tmp4Result = importDefault(tmp2);
      } else {
        tmp4Result = _modDef6465;
      }
      obj2 = shared;
    }
  }, items));
  obj.children = <closure_4 />;
  return <closure_5 style={absoluteFill.absoluteFill}>{null}</closure_5>;
});