// === Module 5566: ? ===

// Module 5566
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5521 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;

export function useComposedGesture(type) {
  _require = type;
  const substr = [...arguments].slice();
  const flatMapResult = substr.flatMap((type) => {
    if (obj.isComposedGesture(type)) {
      if (type.type === closure_0) {
        let gestures = type.gestures;
      }
      return gestures;
    }
    gestures = [type];
    obj = resolveInternalConfigProps;
  });
  dependencyMap = flatMapResult;
  const flatMapResult1 = flatMapResult.flatMap((handlerTags) => {
    if (obj.isComposedGesture(handlerTags)) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [];
      handlerTags[0] = handlerTags.handlerTag;
    }
    return handlerTags;
  });
  if (obj2.containsDuplicates(flatMapResult1)) {
    const _Error2 = Error;
    const error = new Error(tmp2(5454).tagMessage("Each gesture can be used only once in the gesture composition."));
    throw error;
  } else {
    let obj = { shouldUseReanimatedDetector: flatMapResult.some((config) => config.config.shouldUseReanimatedDetector), dispatchesAnimatedEvents: flatMapResult.some((config) => config.config.dispatchesAnimatedEvents) };
    if (obj.shouldUseReanimatedDetector) {
      if (obj.dispatchesAnimatedEvents) {
        const _Error = Error;
        const error1 = new Error(tmp2(5454).tagMessage("Composed gestures cannot use both Reanimated and Animated events at the same time."));
        throw error1;
      }
    }
    const Reanimated = tmp2(5494).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(flatMapResult.map((detectorCallbacks) => detectorCallbacks.detectorCallbacks.reanimatedEventHandler || null));
    }
    const found = flatMapResult.filter((detectorCallbacks) => undefined !== detectorCallbacks.detectorCallbacks.animatedEventHandler);
    let animatedEventHandler;
    if (found.length > 0) {
      animatedEventHandler = found[0].detectorCallbacks.animatedEventHandler;
    }
    const obj3 = { handlerTags: flatMapResult1, type, config: obj, detectorCallbacks: null, externalSimultaneousHandlers: null, gestures: null };
    const obj4 = {
      jsEventHandler(arg0) {
          for (const item10007 of c1) {
            if (item10007.detectorCallbacks.jsEventHandler) {
              let detectorCallbacks = tmp.detectorCallbacks;
              let jsEventHandlerResult = detectorCallbacks.jsEventHandler(arg0);
            }
            continue;
          }
        },
      reanimatedEventHandler: composedEventHandler,
      animatedEventHandler
    };
    obj3.detectorCallbacks = obj4;
    obj3.externalSimultaneousHandlers = [];
    obj3.gestures = flatMapResult;
    return obj3;
  }
  obj2 = require("resolveInternalConfigProps");
}