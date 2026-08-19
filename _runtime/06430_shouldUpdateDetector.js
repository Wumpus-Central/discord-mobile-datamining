// _runtime/06430_shouldUpdateDetector.js
import noop from "00019_noop.js";
import transformIntoHandlerTags from "06408_transformIntoHandlerTags.js";

function shouldUpdateDetector(config, handlerTag) {
  if (undefined === config) {
    return false;
  } else {
    const result = transformIntoHandlerTags.transformIntoHandlerTags(config);
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
const useEffect = noop.useEffect;

export const useMountReactions = function useMountReactions(detectorUpdater, current2) {
  closure_0 = detectorUpdater;
  closure_1 = current2;
  const items = [detectorUpdater, current2];
  useEffect(() => {
    const MountRegistry = detectorUpdater(table[2]).MountRegistry;
    return MountRegistry.addMountListener((arg0) => {
      if (closure_1.isMounted) {
        const attachedGestures = closure_1.attachedGestures;
        const iter = attachedGestures[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let requireToFail = nextResult.config.requireToFail;
          let simultaneousWith = nextResult.config.simultaneousWith;
          if (!closure_1_3(nextResult.config.blocksHandlers, arg0)) {
          }
          let tmp9 = callback();
          iter.return();
        }
      }
    });
  }, items);
};