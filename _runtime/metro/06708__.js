// === Module 6708: ? ===

// Module 6708
import _mod19 from "module_19" /* 19 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6686 */;
import MountRegistry2 from "MountRegistry" /* 6689 */;

function shouldUpdateDetector(arg0, handlerTag) {
  if (undefined === arg0) {
    return false;
  } else {
    const result = transformIntoHandlerTags.transformIntoHandlerTags(arg0);
    for (const item10012 of result) {
      if (item10012 === arg1.handlerTag) {
        obj2.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const useEffect = _mod19.useEffect;

export const useMountReactions = function useMountReactions(detectorUpdater, current2) {
  closure_0 = detectorUpdater;
  closure_1 = current2;
  const items = [detectorUpdater, current2];
  useEffect(() => {
    const MountRegistry = MountRegistry2.MountRegistry;
    return MountRegistry.addMountListener((arg0) => {
      if (current2.isMounted) {
        const attachedGestures = current2.attachedGestures;
        const iter = attachedGestures[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let requireToFail = nextResult.config.requireToFail;
          let simultaneousWith = nextResult.config.simultaneousWith;
          let tmp5 = shouldUpdateDetector;
          if (!shouldUpdateDetector(nextResult.config.blocksHandlers, arg0)) {
          }
          let tmp9 = detectorUpdater();
          iter.return();
        }
      }
    });
  }, items);
};