// _runtime/06285_PlatformConfig.js
import reactNativeVersion from "06286_reactNativeVersion.js";

const obj = {
  defaultDrawDistance: 250,
  supportsOffsetCorrection: true,
  trackAverageRenderTimeForOffsetProjection: true,
  isRN083OrAbove: null,
  invertedTransformStyle: null,
  invertedTransformStyleHorizontal: null,
};
obj.isRN083OrAbove = reactNativeVersion.isRN083OrAbove();
const obj2 = { transform: null };
const items = [{ rotate: "180deg" }];
obj2.transform = items;
obj.invertedTransformStyle = obj2;
const obj3 = { transform: null };
const items1 = [{ rotate: "180deg" }];
obj3.transform = items1;
obj.invertedTransformStyleHorizontal = obj3;

export const PlatformConfig = obj;
