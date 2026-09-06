// _runtime/06872_PlatformConfig.js
import reactNativeVersion from "06873_reactNativeVersion.js";

let obj = {
  defaultDrawDistance: 250,
  supportsOffsetCorrection: true,
  trackAverageRenderTimeForOffsetProjection: true,
  isRN083OrAbove: null,
  invertedTransformStyle: null,
  invertedTransformStyleHorizontal: null,
};
obj.isRN083OrAbove = reactNativeVersion.isRN083OrAbove();
obj = { transform: null };
const items = [{ rotate: "180deg" }];
obj.transform = items;
obj.invertedTransformStyle = obj;
obj = { transform: null };
const items1 = [{ rotate: "180deg" }];
obj.transform = items1;
obj.invertedTransformStyleHorizontal = obj;

export const PlatformConfig = obj;
