// _runtime/05584_PlatformConfig.js
import reactNativeVersion from "reactNativeVersion";

const obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true, isRN083OrAbove: null, invertedTransformStyle: null, invertedTransformStyleHorizontal: null };
obj[3] = reactNativeVersion.isRN083OrAbove();
const items = [{ rotate: "180deg" }];
obj[4] = { transform: items };
const items1 = [{ rotate: "180deg" }];
obj[5] = { transform: items1 };

export const PlatformConfig = obj;