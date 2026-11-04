// === Module 19093: useBackgroundConjureAppChannelIds ===

// Module 19093 (useBackgroundConjureAppChannelIds)
import initialize from "initialize" /* 504 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6984 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11062 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16618 */;
import size from "module_2" /* 2 */;

function getChannelIds() {
  const floatableFrames = conjureAppPictureInPictureFrames.getFloatableFrames();
  const found = floatableFrames.filter((surface) => !conjurePreviewSurface.isConjurePreviewSurface(surface.surface));
  const mapped = found.map((surface) => getChannelIdForEmbeddedSurfaceDefault(surface.surface));
  const found1 = mapped.filter((item) => null != item);
  return found1.sort();
}
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/useBackgroundConjureAppChannelIds.tsx");

export default function useBackgroundConjureAppChannelIds() {
  return initialize.useStateFromStoresArray(conjureAppPictureInPictureFrames.FLOATING_APP_STORES, getChannelIds);
};