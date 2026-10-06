// === Module 17166: useGiftingPromotionAssetsReady ===

// Module 17166 (useGiftingPromotionAssetsReady)
import react2 from "react" /* 576 */;
import react_nativeDefault from "react-native" /* 1886 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let asset, c0;

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let themeAndReducedMotionAwareAssetUrl;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = themeAndReducedMotionAwareAssetUrl(576);
  const cResult = obj.c(3);
  let obj2 = themeAndReducedMotionAwareAssetUrl(10498);
  themeAndReducedMotionAwareAssetUrl = obj2.useThemeAndReducedMotionAwareAssetUrl(arg0);
  [tmp4, importDefault] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] !== themeAndReducedMotionAwareAssetUrl) {
    const fn = function u() {
      if (null != c0) {
        c0 = true;
        const obj2 = { uri: tmp };
        const obj = react_nativeDefault;
        const preloadResult = obj.preload(obj2);
        preloadResult.then((result) => {
          if (c0) {
            let tmp4 = null;
            if (result) {
              tmp4 = themeAndReducedMotionAwareAssetUrl;
            }
            importDefault(tmp4);
          }
        });
        return () => {
          c0 = false;
        };
      }
    };
    const items = [themeAndReducedMotionAwareAssetUrl];
    cResult[0] = themeAndReducedMotionAwareAssetUrl;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  return null == themeAndReducedMotionAwareAssetUrl || tmp4 === themeAndReducedMotionAwareAssetUrl;
}) : ((arg0) => {
  let closure_1;
  let first;
  let themeAndReducedMotionAwareAssetUrl;
  let obj = themeAndReducedMotionAwareAssetUrl(10498);
  themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(arg0);
  [first, closure_1] = react.useState(null);
  const items = [themeAndReducedMotionAwareAssetUrl];
  const effect = react.useEffect(() => {
    if (null != c0) {
      c0 = true;
      const obj2 = { uri: tmp };
      const obj = closure_1(dependencyMap[5]);
      const preloadResult = obj.preload(obj2);
      preloadResult.then((result) => {
        if (c0) {
          let tmp4 = null;
          if (result) {
            tmp4 = themeAndReducedMotionAwareAssetUrl;
          }
          closure_1(tmp4);
        }
      });
      return () => {
        c0 = false;
      };
    }
  }, items);
  return null == themeAndReducedMotionAwareAssetUrl || first === themeAndReducedMotionAwareAssetUrl;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((asset, asset2) => {
  const obj = react2;
  const cResult = obj.c(3);
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const tmp2Result = closure_5(asset);
  let asset1;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const tmp2Result2 = closure_5(asset1);
  if (cResult[0] === tmp2Result) {
    let tmp7;
    if (cResult[1] === tmp2Result2) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj2 = { isGiftCoachmarkAssetReady: tmp2Result, isGiftReminderAssetReady: tmp2Result2 };
  cResult[0] = tmp2Result;
  cResult[1] = tmp2Result2;
  cResult[2] = obj2;
  tmp7 = obj2;
}) : ((asset, asset2) => {
  let asset1;
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const obj = { isGiftCoachmarkAssetReady: closure_5(asset), isGiftReminderAssetReady: closure_5(asset1) };
  asset1 = undefined;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default tmp2;