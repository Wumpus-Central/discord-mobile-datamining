// _runtime/05652_shouldUpdateDetector.js
import noop from "00019_noop.js";
import transformIntoHandlerTags from "05630_transformIntoHandlerTags.js";

function shouldUpdateDetector(arg0, handlerTag) {
  if (undefined === arg0) {
    return false;
  } else {
    const result = transformIntoHandlerTags.transformIntoHandlerTags(arg0);
    for (const item10012 of result) {
      if (item10012 === arg1.handlerTag) {
        let tmp6 = obj2;
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
          let tmp5 = closure_1_3;
          if (!closure_1_3(nextResult.config.blocksHandlers, arg0)) {
            let tmp6 = requireToFail;
            if (!tmp5(requireToFail, arg0)) {
              let tmp7 = simultaneousWith;
            }
          }
          let tmp8 = callback;
          let tmp9 = callback();
          let tmp10 = iter;
          iter.return();
        }
      }
    });
  }, items);
};