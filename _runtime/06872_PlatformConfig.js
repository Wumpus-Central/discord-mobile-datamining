// === Module 6872: PlatformConfig ===

// Module 6872 (PlatformConfig)
import reactNativeVersion from "reactNativeVersion" /* 6873 */;

let obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true, isRN083OrAbove: null, invertedTransformStyle: null, invertedTransformStyleHorizontal: null };
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