// === Module 18741: useFloatConjureAppsOffScreen ===

// Module 18741 (useFloatConjureAppsOffScreen)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6813 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18332 */;
import noop from "module_19" /* 19 */;
import VisibleChannelScreenStore from "VisibleChannelScreenStore" /* 18255 */;

const require = globalThis.__r;

require = fn;
function getFloatableFrameIds() {
  const floatableFrames = conjureAppPictureInPictureFrames.getFloatableFrames();
  return floatableFrames.map((id) => id.id);
}
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/useFloatConjureAppsOffScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFloatConjureAppsOffScreen() {
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(channelId) {
      return channelId.channelId;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = VisibleChannelScreenStore(first);
  _require = tmp5;
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp(18332).FLOATING_APP_STORES, getFloatableFrameIds);
  if (cResult[1] !== tmp5) {
    const fn2 = function c() {
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
    };
    cResult[1] = tmp5;
    cResult[2] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === stateFromStoresArray) {
    if (cResult[4] === tmp5) {
      let tmp8 = cResult[5];
    }
    const effect = noop.useEffect(tmp7, tmp8);
  }
  const items = [stateFromStoresArray, tmp5];
  cResult[3] = stateFromStoresArray;
  cResult[4] = tmp5;
  cResult[5] = items;
  tmp8 = items;
  const tmpResult = require("initialize");
}) : (function useFloatConjureAppsOffScreen() {
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
});