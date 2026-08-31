// === Module 8518: map ===

// Module 8518 (map)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const require = arg1;
({ Image: c4, PixelRatio: c5 } = get_ActivityIndicator);
const map = new Map();
let result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default function useProfileFrameLayerAsset(width) {
  width = width.width;
  let collectiblesItemAssetUrl;
  dependencyMap = undefined;
  ({ skuId, layer } = width);
  let obj = collectiblesItemAssetUrl(1900);
  obj = { skuId, assetFormat: collectiblesItemAssetUrl(1900).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj);
  dependencyMap = callback(React.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const items = [collectiblesItemAssetUrl];
  const effect = React.useEffect(() => {
    let hasItem = null == collectiblesItemAssetUrl;
    if (!hasItem) {
      hasItem = "" === tmp;
    }
    if (!hasItem) {
      hasItem = closure_1_6.has(tmp);
    }
    if (!hasItem) {
      const size = closure_1_4.getSize(tmp, (arg0, arg1) => {
        if (arg0 > 0) {
          const result = closure_1_6.set(closure_0, arg1 / arg0);
          callback();
        }
      }, () => {

      });
    }
  }, items);
  let value;
  if (null != collectiblesItemAssetUrl) {
    value = map.get(collectiblesItemAssetUrl);
  }
  let imageHeight = 0;
  if (null != value) {
    imageHeight = value * width;
  }
  let assetUrl = null;
  if (null != collectiblesItemAssetUrl) {
    assetUrl = null;
    if (null != value) {
      const _Math = Math;
      const rounded = Math.round(width * closure_5.get());
      const _Math2 = Math;
      const _HermesInternal = HermesInternal;
      assetUrl = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * value);
    }
  }
  return { assetUrl, imageHeight };
};