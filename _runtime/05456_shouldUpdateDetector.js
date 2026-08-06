// _runtime/05456_shouldUpdateDetector.js
import noop from "noop";
import { transformIntoHandlerTags } from "05430_transformIntoHandlerTags.js";

let c4;
let c5;
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
({ useEffect: c4, useLayoutEffect: c5 } = noop);

export const useMountReactions = function useMountReactions(detectorUpdater, current2) {
  const _global = detectorUpdater;
  let closure_1 = current2;
  if (undefined === closure_3) {
    let prop;
    if (_global != null) {
      prop = _global.__DISCORD_RNGH_USE_LAYOUT_EFFECT__;
    }
    closure_3 = false !== prop;
  }
  function subscribe() {

  }
  const items = [detectorUpdater, current2];
  callback2(() => {
    if (closure_3) {
      if (typeof subscribe !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const MountRegistry = current2(subscribe[2]).MountRegistry;
      return MountRegistry.addMountListener((arg0) => {
        if (closure_1.isMounted) {
          const attachedGestures = closure_1.attachedGestures;
          const iter = attachedGestures[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let requireToFail = nextResult.config.requireToFail;
            let simultaneousWith = nextResult.config.simultaneousWith;
            let tmp7 = outer1_6;
            if (!outer1_6(nextResult.config.blocksHandlers, arg0)) {
              let tmp8 = requireToFail;
              if (!tmp7(requireToFail, arg0)) {
                let tmp9 = simultaneousWith;
              }
            }
            let tmp10 = callback;
            let tmp11 = callback();
            let tmp12 = iter;
            iter.return();
          }
        } else {
          if (outer1_0 != null) {
            const __DISCORD_RNGH_ON_STALE_MOUNT__ = tmp.__DISCORD_RNGH_ON_STALE_MOUNT__;
            if (__DISCORD_RNGH_ON_STALE_MOUNT__ != null) {
              const result = __DISCORD_RNGH_ON_STALE_MOUNT__();
            }
          }
          tmp = outer1_0;
        }
      });
    }
  }, items);
  const items1 = [detectorUpdater, current2];
  callback(() => {
    if (!closure_3) {
      if (typeof subscribe !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const MountRegistry = current2(subscribe[2]).MountRegistry;
      return MountRegistry.addMountListener((arg0) => {
        if (closure_1.isMounted) {
          const attachedGestures = closure_1.attachedGestures;
          const iter = attachedGestures[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let requireToFail = nextResult.config.requireToFail;
            let simultaneousWith = nextResult.config.simultaneousWith;
            let tmp7 = outer1_6;
            if (!outer1_6(nextResult.config.blocksHandlers, arg0)) {
              let tmp8 = requireToFail;
              if (!tmp7(requireToFail, arg0)) {
                let tmp9 = simultaneousWith;
              }
            }
            let tmp10 = callback;
            let tmp11 = callback();
            let tmp12 = iter;
            iter.return();
          }
        } else {
          if (outer1_0 != null) {
            const __DISCORD_RNGH_ON_STALE_MOUNT__ = tmp.__DISCORD_RNGH_ON_STALE_MOUNT__;
            if (__DISCORD_RNGH_ON_STALE_MOUNT__ != null) {
              const result = __DISCORD_RNGH_ON_STALE_MOUNT__();
            }
          }
          tmp = outer1_0;
        }
      });
    }
  }, items1);
};