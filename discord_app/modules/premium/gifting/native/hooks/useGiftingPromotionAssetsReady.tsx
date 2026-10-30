// discord_app/modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default function useGiftingPromotionAssetsReady(asset, asset2) {
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  themeAndReducedMotionAwareAssetUrl =
    themeAndReducedMotionAwareAssetUrl(10603).useThemeAndReducedMotionAwareAssetUrl(asset);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp6[1];
  const items = [themeAndReducedMotionAwareAssetUrl];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      c0 = true;
      const obj2 = { uri: tmp };
      const obj = closure_1(dependencyMap[3]);
      closure_1(dependencyMap[3])
        .preload(obj2)
        .then((result) => {
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
  const obj3 = {
    isGiftCoachmarkAssetReady:
      null == themeAndReducedMotionAwareAssetUrl || tmp6[0] === themeAndReducedMotionAwareAssetUrl,
    isGiftReminderAssetReady: null,
  };
  let asset1;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  let obj = themeAndReducedMotionAwareAssetUrl(10603);
  const tmp8 = null == themeAndReducedMotionAwareAssetUrl || tmp6[0] === themeAndReducedMotionAwareAssetUrl;
  const themeAndReducedMotionAwareAssetUrl1 =
    themeAndReducedMotionAwareAssetUrl(10603).useThemeAndReducedMotionAwareAssetUrl(asset1);
  closure_129_0 = themeAndReducedMotionAwareAssetUrl1;
  const tmp5Result = _slicedToArray(noop.useState(null), 2);
  closure_129_1 = tmp5Result[1];
  const items1 = [themeAndReducedMotionAwareAssetUrl1];
  const effect1 = noop.useEffect(() => {
    if (null != c0) {
      c0 = true;
      const obj2 = { uri: tmp };
      const obj = closure_1(dependencyMap[3]);
      closure_1(dependencyMap[3])
        .preload(obj2)
        .then((result) => {
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
  }, items1);
  obj3.isGiftReminderAssetReady =
    null == themeAndReducedMotionAwareAssetUrl1 || tmp5Result[0] === themeAndReducedMotionAwareAssetUrl1;
  return obj3;
}
