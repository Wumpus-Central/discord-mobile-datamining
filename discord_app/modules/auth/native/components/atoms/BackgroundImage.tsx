// === Module 6463: BackgroundImage ===

// Module 6463 (BackgroundImage)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import AssetRegistryDefault from "AssetRegistry" /* 6464 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6465 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: closure_4, View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundImageCover;
  let backgroundImageSource;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  const tmp6 = useThemeDefault();
  if (cResult[0] !== (undefined !== backgroundImageCover && backgroundImageCover)) {
    const items = [metroRequire.absoluteFill, undefined !== backgroundImageCover && backgroundImageCover ? { width: "100%", height: "100%" } : { width: "100%" }];
    cResult[0] = undefined !== backgroundImageCover && backgroundImageCover;
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (null == backgroundImageSource) {
    let tmp5Result;
    const tmpResult = shared;
    if (tmpResult.isThemeDark(tmp6)) {
      tmp5Result = AssetRegistryDefault;
    } else {
      tmp5Result = AssetRegistryDefault2;
    }
    backgroundImageSource = tmp5Result;
  }
  if (cResult[2] === tmp7) {
    let tmp10;
    let tmp11;
    if (cResult[3] === backgroundImageSource) {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp10) {
      const merged = Object.assign(tmp10);
      const tmp19 = <hasOwnProperty style={metroRequire.absoluteFill}>{null}</hasOwnProperty>;
      cResult[5] = tmp10;
      cResult[6] = tmp19;
      tmp11 = tmp19;
    } else {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const obj4 = { style: tmp7, source: backgroundImageSource };
  cResult[2] = tmp7;
  cResult[3] = backgroundImageSource;
  cResult[4] = obj4;
  tmp10 = obj4;
}) : ((backgroundImageSource) => {
  let closure_2;
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = flag(4791)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj2 = {};
  const merged = Object.assign(react.useMemo(() => {
    let tmp;
    const items = [metroRequire.absoluteFill, ];
    const obj = { style: items, source: tmp };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    tmp = backgroundImageSource;
    if (null == backgroundImageSource) {
      let tmp5Result;
      const obj2 = shared;
      if (obj2.isThemeDark(closure_2)) {
        tmp5Result = AssetRegistryDefault;
      } else {
        tmp5Result = AssetRegistryDefault2;
      }
      tmp = tmp5Result;
    }
    return obj;
  }, items));
  return <closure_5 style={absoluteFill.absoluteFill}>{null}</closure_5>;
});
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default tmp3;