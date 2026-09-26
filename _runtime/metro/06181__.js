// _runtime/metro/06181__.js
const require = arg1;
const dependencyMap = arg6;

export const useComposedGesture = function useComposedGesture(type) {
  const substr = [...arguments].slice();
  const flatMapResult = substr.flatMap((handlerTags) => {
    if (obj.isComposedGesture(handlerTags)) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [];
      handlerTags[0] = handlerTags.handlerTag;
    }
    return handlerTags;
  });
  if (obj.containsDuplicates(flatMapResult)) {
    const _Error2 = Error;
    const error = new Error(tmp2(6078).tagMessage("Each gesture can be used only once in the gesture composition."));
    throw error;
  } else {
    const obj2 = {
      shouldUseReanimatedDetector: substr.some((config) => config.config.shouldUseReanimatedDetector),
      dispatchesAnimatedEvents: substr.some((config) => config.config.dispatchesAnimatedEvents),
    };
    if (obj2.shouldUseReanimatedDetector) {
      if (obj2.dispatchesAnimatedEvents) {
        const _Error = Error;
        const error1 = new Error(
          tmp2(6078).tagMessage("Composed gestures cannot use both Reanimated and Animated events at the same time."),
        );
        throw error1;
      }
    }
    const Reanimated = tmp2(6116).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(
        substr.map((detectorCallbacks) => detectorCallbacks.detectorCallbacks.reanimatedEventHandler || null),
      );
    }
    const found = substr.filter(
      (detectorCallbacks) => undefined !== detectorCallbacks.detectorCallbacks.animatedEventHandler,
    );
    let animatedEventHandler;
    if (found.length > 0) {
      animatedEventHandler = found[0].detectorCallbacks.animatedEventHandler;
    }
    const obj3 = {
      handlerTags: flatMapResult,
      type,
      config: obj2,
      detectorCallbacks: null,
      externalSimultaneousHandlers: null,
      gestures: null,
    };
    const obj4 = {
      jsEventHandler(arg0) {
        for (const item10007 of substr) {
          if (item10007.detectorCallbacks.jsEventHandler) {
            let detectorCallbacks = tmp.detectorCallbacks;
            let jsEventHandlerResult = detectorCallbacks.jsEventHandler(arg0);
          }
          continue;
        }
      },
      reanimatedEventHandler: composedEventHandler,
      animatedEventHandler,
    };
    obj3.detectorCallbacks = obj4;
    obj3.externalSimultaneousHandlers = [];
    obj3.gestures = substr;
    return obj3;
  }
  obj = substr(6141);
};
