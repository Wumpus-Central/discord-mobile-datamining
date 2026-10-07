// === Module 17166: useGiftingPromotionAssetsReady ===

// Module 17166 (useGiftingPromotionAssetsReady)
import c from "c" /* 576 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1886 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = themeAndReducedMotionAwareAssetUrl(576).c(3);
  let obj = themeAndReducedMotionAwareAssetUrl(576);
  themeAndReducedMotionAwareAssetUrl = themeAndReducedMotionAwareAssetUrl(10498).useThemeAndReducedMotionAwareAssetUrl(arg0);
  let obj2 = themeAndReducedMotionAwareAssetUrl(10498);
  [tmp4, importDefault] = noop.useState(null);
  if (cResult[0] !== themeAndReducedMotionAwareAssetUrl) {
    const fn = function u() {
      if (null != c0) {
        c0 = true;
        const obj2 = { uri: tmp };
        NativeImageManagerModuleDefault.preload(obj2).then((result) => {
          if (c0) {
            let tmp3 = null;
            if (result) {
              tmp3 = themeAndReducedMotionAwareAssetUrl;
            }
            importDefault(tmp3);
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
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  return null == themeAndReducedMotionAwareAssetUrl || tmp4 === themeAndReducedMotionAwareAssetUrl;
}) : ((arg0) => {
  themeAndReducedMotionAwareAssetUrl = themeAndReducedMotionAwareAssetUrl(10498).useThemeAndReducedMotionAwareAssetUrl(arg0);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  const items = [themeAndReducedMotionAwareAssetUrl];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      c0 = true;
      const obj2 = { uri: tmp };
      const obj = closure_1(dependencyMap[5]);
      closure_1(dependencyMap[5]).preload(obj2).then((result) => {
        if (c0) {
          let tmp3 = null;
          if (result) {
            tmp3 = themeAndReducedMotionAwareAssetUrl;
          }
          closure_1(tmp3);
        }
      });
      return () => {
        c0 = false;
      };
    }
  }, items);
  return null == themeAndReducedMotionAwareAssetUrl || tmp2[0] === themeAndReducedMotionAwareAssetUrl;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((asset, asset2) => {
  const cResult = c.c(3);
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
    if (cResult[1] === tmp2Result2) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj2 = { isGiftCoachmarkAssetReady: tmp2Result, isGiftReminderAssetReady: tmp2Result2 };
  cResult[0] = tmp2Result;
  cResult[1] = tmp2Result2;
  cResult[2] = obj2;
  tmp7 = obj2;
}) : ((asset, asset2) => {
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const obj = { isGiftCoachmarkAssetReady: closure_5(asset), isGiftReminderAssetReady: null };
  let asset1;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  obj.isGiftReminderAssetReady = closure_5(asset1);
  return obj;
});