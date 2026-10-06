// === Module 7892: computeProfileFrameDimensions ===

// Module 7892 (computeProfileFrameDimensions)
import size from "module_2" /* 2 */;

let layer;

const result = size.fileFinishedImporting("modules/collectibles/profile_frames/tooling/computeProfileFrameDimensions.tsx");

export const computeProfileFrameDimensions = function computeProfileFrameDimensions(arr) {
  let innerWidth;
  innerWidth = innerWidth(7893).DefaultProfileFrameDimensions.INNER_WIDTH;
  const mapped = arr.map((dims) => Math.round(Math.max(0, (dims.dims.width - innerWidth) / 2)));
  let overflowHorizontal = 0;
  if (mapped.length > 0) {
    const _Math = Math;
    const items = [];
    let tmp3 = items;
    HermesBuiltin.arraySpread(items, mapped, 0);
    const _Math2 = Math;
    overflowHorizontal = HermesBuiltin.apply(max, items, Math);
  }
  const found = arr.filter((layer) => {
    layer = layer.layer;
    const tmp3 = layer.type === innerWidth(dependencyMap[1]).ProfileFrameLayerType.STAPLE && layer.anchor === innerWidth(dependencyMap[2]).ProfileFrameLayerAnchor.TOP;
    return tmp3;
  });
  const mapped1 = found.map((dims) => Math.max(0, dims.dims.height - (716 - innerWidth(dependencyMap[0]).DefaultProfileFrameDimensions.OVERFLOW_TOP)));
  let overflowTop = 0;
  if (mapped1.length > 0) {
    const _Math3 = Math;
    const max2 = Math.max;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, mapped1, 0);
    const _Math4 = Math;
    overflowTop = HermesBuiltin.apply(max2, items1, Math);
  }
  const found1 = arr.filter((layer) => {
    layer = layer.layer;
    const tmp3 = layer.type === innerWidth(dependencyMap[1]).ProfileFrameLayerType.STAPLE && layer.anchor === innerWidth(dependencyMap[2]).ProfileFrameLayerAnchor.BOTTOM;
    return tmp3;
  });
  const mapped2 = found1.map((dims) => Math.max(0, dims.dims.height - (424 - innerWidth(dependencyMap[0]).DefaultProfileFrameDimensions.OVERFLOW_BOTTOM)));
  let overflowBottom = 0;
  if (mapped2.length > 0) {
    const _Math5 = Math;
    const max3 = Math.max;
    const items2 = [];
    HermesBuiltin.arraySpread(items2, mapped2, 0);
    const _Math6 = Math;
    overflowBottom = HermesBuiltin.apply(max3, items2, Math);
  }
  return { innerWidth, overflowTop, overflowBottom, overflowHorizontal };
};