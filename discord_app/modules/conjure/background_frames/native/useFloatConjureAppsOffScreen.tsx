// discord_app/modules/conjure/background_frames/native/useFloatConjureAppsOffScreen.tsx
import getChannelIdForEmbeddedSurfaceDefault from "../../../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import VisibleChannelScreenStore from "../../../main_tabs_v2/native/panels/VisibleChannelScreenStore.tsx";

const require = globalThis.__r;

require = fn;
function getFloatableFrameIds() {
  const floatableFrames = conjureAppPictureInPictureFrames.getFloatableFrames();
  return floatableFrames.map((id) => id.id);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/useFloatConjureAppsOffScreen.tsx");

export default function useFloatConjureAppsOffScreen() {
  const tmp = VisibleChannelScreenStore((channelId) => channelId.channelId);
  _require = tmp;
  const items = [
    require("initialize").useStateFromStoresArray(
      require("conjureAppPictureInPictureFrames").FLOATING_APP_STORES,
      getFloatableFrameIds,
    ),
    tmp,
  ];
  const effect = noop.useEffect(() => {
    const floatableFrames = conjureAppPictureInPictureFrames.getFloatableFrames();
    for (const item10012 of floatableFrames) {
      if (getChannelIdForEmbeddedSurfaceDefault(item10012.surface) === closure_0) {
        let obj3 = conjureAppPictureInPictureFrames;
        let result = obj3.exitConjureAppPictureInPicture(item10012.id);
      } else {
        let obj2 = conjureAppPictureInPictureFrames;
        let result1 = obj2.enterConjureAppPictureInPicture(item10012.id);
      }
      continue;
    }
    const strandedFloatingFrames = conjureAppPictureInPictureFrames.getStrandedFloatingFrames();
    for (const item10050 of strandedFloatingFrames) {
      let obj5 = conjureAppPictureInPictureFrames;
      let result2 = obj5.exitConjureAppPictureInPicture(item10050.id);
      continue;
    }
  }, items);
}
