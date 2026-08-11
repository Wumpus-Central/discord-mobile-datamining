// discord_app/modules/collectibles/profile_frames/tooling/computeProfileFrameDimensions.tsx
const result = require("ProfileFrameLayerAnchor").fileFinishedImporting("modules/collectibles/profile_frames/tooling/computeProfileFrameDimensions.tsx");

export const computeProfileFrameDimensions = function computeProfileFrameDimensions(closure_4) {
  innerWidth = innerWidth(8813).DefaultProfileFrameDimensions.INNER_WIDTH;
  const mapped = closure_4.map((dims) => Math.round(Math.max(0, (dims.dims.width - innerWidth) / 2)));
  let overflowHorizontal = 0;
  if (mapped.length > 0) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(mapped, 0);
    const _Math2 = Math;
    overflowHorizontal = HermesBuiltin.apply(items, Math);
  }
  const found = closure_4.filter((layer) => {
    layer = layer.layer;
    let tmp3 = layer.type === innerWidth(8810).ProfileFrameLayerType.STAPLE;
    if (tmp3) {
      tmp3 = layer.anchor === innerWidth(8811).ProfileFrameLayerAnchor.TOP;
    }
    return tmp3;
  });
  const mapped1 = found.map((dims) => Math.max(0, dims.dims.height - (716 - innerWidth(8813).DefaultProfileFrameDimensions.OVERFLOW_TOP)));
  let overflowTop = 0;
  if (mapped1.length > 0) {
    const _Math3 = Math;
    const items1 = [];
    HermesBuiltin.arraySpread(mapped1, 0);
    const _Math4 = Math;
    overflowTop = HermesBuiltin.apply(items1, Math);
  }
  const found1 = closure_4.filter((layer) => {
    layer = layer.layer;
    let tmp3 = layer.type === innerWidth(8810).ProfileFrameLayerType.STAPLE;
    if (tmp3) {
      tmp3 = layer.anchor === innerWidth(8811).ProfileFrameLayerAnchor.BOTTOM;
    }
    return tmp3;
  });
  const mapped2 = found1.map((dims) => Math.max(0, dims.dims.height - (424 - innerWidth(8813).DefaultProfileFrameDimensions.OVERFLOW_BOTTOM)));
  let overflowBottom = 0;
  if (mapped2.length > 0) {
    const _Math5 = Math;
    const items2 = [];
    HermesBuiltin.arraySpread(mapped2, 0);
    const _Math6 = Math;
    overflowBottom = HermesBuiltin.apply(items2, Math);
  }
  return { innerWidth, overflowTop, overflowBottom, overflowHorizontal };
};