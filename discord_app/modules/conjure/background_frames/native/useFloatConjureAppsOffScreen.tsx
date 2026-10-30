// === Module 19068: useFloatConjureAppsOffScreen ===

// Module 19068 (useFloatConjureAppsOffScreen)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6843 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18625 */;
import noop from "module_19" /* 19 */;
import VisibleChannelScreenStore from "VisibleChannelScreenStore" /* 18548 */;

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
  const items = [require("initialize").useStateFromStoresArray(require("conjureAppPictureInPictureFrames").FLOATING_APP_STORES, getFloatableFrameIds), tmp];
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
};