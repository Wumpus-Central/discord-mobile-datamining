// discord_app/modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let c4;
let c5;
const require = arg1;
({ Image: c4, PixelRatio: c5 } = get_ActivityIndicator);
const map = new Map();
let result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default function useProfileFrameLayerAsset(width) {
  let layer;
  let skuId;
  width = width.width;
  let collectiblesItemAssetUrl;
  let dependencyMap;
  ({ skuId, layer } = width);
  let obj = collectiblesItemAssetUrl(1854);
  obj = { skuId, assetFormat: collectiblesItemAssetUrl(1854).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj);
  dependencyMap = callback(React.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const items = [collectiblesItemAssetUrl];
  const effect = React.useEffect(() => {
    let hasItem = null == collectiblesItemAssetUrl;
    if (!hasItem) {
      hasItem = "" === tmp;
    }
    if (!hasItem) {
      hasItem = outer1_6.has(tmp);
    }
    if (!hasItem) {
      const size = outer1_4.getSize(tmp, (arg0, arg1) => {
        if (arg0 > 0) {
          const result = outer1_6.set(closure_0, arg1 / arg0);
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