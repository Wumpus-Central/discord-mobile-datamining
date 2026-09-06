// discord_app/modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, PixelRatio: hasOwnProperty } = get_ActivityIndicator);
const map = new Map();
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default function useProfileFrameLayerAsset(width) {
  width = width.width;
  let collectiblesItemAssetUrl;
  ({ skuId, layer } = width);
  collectiblesItemAssetUrl(1883);
  const obj = {
    skuId,
    assetFormat: collectiblesItemAssetUrl(1883).CollectiblesItemAssetFormat.STATIC,
    assetId: layer.id,
  };
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj);
  dependencyMap = _slicedToArray(
    noop.useReducer((arg0) => arg0 + 1, 0),
    2,
  )[1];
  const items = [collectiblesItemAssetUrl];
  const effect = noop.useEffect(() => {
    let hasItem = null == collectiblesItemAssetUrl;
    if (!hasItem) {
      hasItem = "" === collectiblesItemAssetUrl;
    }
    if (!hasItem) {
      hasItem = map.has(collectiblesItemAssetUrl);
    }
    if (!hasItem) {
      size = size.getSize(
        collectiblesItemAssetUrl,
        (arg0, arg1) => {
          if (arg0 > 0) {
            const result = map.set(collectiblesItemAssetUrl, arg1 / arg0);
            closure_1_1();
          }
        },
        () => {},
      );
    }
  }, items);
  value = undefined;
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
}
