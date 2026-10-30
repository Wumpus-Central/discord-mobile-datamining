// discord_app/modules/conjure/background_frames/native/useBackgroundConjureAppChannelIds.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getChannelIdForEmbeddedSurfaceDefault from "../../../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function getChannelIds() {
  const floatableFrames = conjureAppPictureInPictureFrames.getFloatableFrames();
  const mapped = floatableFrames.map((surface) => getChannelIdForEmbeddedSurfaceDefault(surface.surface));
  const found = mapped.filter((item) => null != item);
  return found.sort();
}
const result = size.fileFinishedImporting(
  "modules/conjure/background_frames/native/useBackgroundConjureAppChannelIds.tsx",
);

export default function useBackgroundConjureAppChannelIds() {
  return initialize.useStateFromStoresArray(conjureAppPictureInPictureFrames.FLOATING_APP_STORES, getChannelIds);
}
