// _runtime/metro/05476__.js
import _mod19 from "00019__.js";
import MountRegistry2 from "../05455_MountRegistry.js";

function shouldUpdateDetector(blocksHandlers, handlerTag) {
  if (undefined === blocksHandlers) {
    return false;
  } else {
    const iter = blocksHandlers[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (nextResult === handlerTag) {
        iter.return();
        let flag2 = true;
        return true;
      } else {
        if (null !== tmp4) {
          if (typeof tmp4 === "object") {
            if ("current" in tmp4) {
              let current = tmp4.current;
              handlerTag = undefined;
              if (current != null) {
                handlerTag = current.handlerTag;
              }
              if (handlerTag === handlerTag.handlerTag) {
                iter.return();
                let flag = true;
                return true;
              }
            }
          }
        }
        continue;
      }
    }
    return false;
  }
}
const useEffect = _mod19.useEffect;

export function useMountReactions(detectorUpdater, current2) {
  closure_0 = detectorUpdater;
  closure_1 = current2;
  items = [detectorUpdater, current2];
  useEffect(() => {
    const MountRegistry = MountRegistry2.MountRegistry;
    return MountRegistry.addMountListener((handlerTag) => {
      if (isMounted.isMounted) {
        if (isMounted.hasExternalRelations) {
          const attachedGestures = isMounted.attachedGestures;
          if (!attachedGestures.includes(handlerTag)) {
            const attachedGestures2 = isMounted.attachedGestures;
            const iter = attachedGestures2[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let requireToFail = nextResult.config.requireToFail;
              let simultaneousWith = nextResult.config.simultaneousWith;
              if (!shouldUpdateDetector(nextResult.config.blocksHandlers, handlerTag)) {
              }
              let tmp11 = detectorUpdater();
              iter.return();
            }
          }
        }
      }
    });
  }, items);
}
