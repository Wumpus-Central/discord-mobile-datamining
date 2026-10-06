// === Module 6200: ? ===

// Module 6200
import react from "react" /* 19 */;
import selectProperties from "selectProperties" /* 6178 */;
import MountRegistry2 from "MountRegistry" /* 6181 */;

function shouldUpdateDetector(blocksHandlers, handlerTag) {
  if (undefined === blocksHandlers) {
    return false;
  } else {
    const obj = selectProperties;
    const result = obj.transformIntoHandlerTags(blocksHandlers);
    for (const item10012 of result) {
      if (item10012 === handlerTag.handlerTag) {
        obj2.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const useEffect = react.useEffect;

export const useMountReactions = function useMountReactions(detectorUpdater, current2) {
  let closure_0 = detectorUpdater;
  let closure_1 = current2;
  const items = [detectorUpdater, current2];
  useEffect(() => {
    const MountRegistry = MountRegistry2.MountRegistry;
    return MountRegistry.addMountListener((handlerTag) => {
      if (current2.isMounted) {
        const attachedGestures = current2.attachedGestures;
        const iter = attachedGestures[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let requireToFail = nextResult.config.requireToFail;
          let simultaneousWith = nextResult.config.simultaneousWith;
          if (!shouldUpdateDetector(nextResult.config.blocksHandlers, handlerTag)) {
          }
          let tmp9 = detectorUpdater();
          iter.return();
        }
      }
    });
  }, items);
};