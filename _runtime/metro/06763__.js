// _runtime/metro/06763__.js
const require = arg1;
const dependencyMap = arg6;

export const useComposedGesture = function useComposedGesture(type) {
  const substr = [...arguments].slice();
  const flatMapResult = substr.flatMap((handlerTags) => {
    if (obj.isComposedGesture(handlerTags)) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [handlerTags.handlerTag];
    }
    return handlerTags;
  });
  let obj = substr(6723);
  if (obj.containsDuplicates(flatMapResult)) {
    const _Error2 = Error;
    let tmp2Result = tmp2(6660);
    const error = new Error(tmp2Result.tagMessage("Each gesture can be used only once in the gesture composition."));
    throw error;
  } else {
    obj = {
      shouldUseReanimatedDetector: substr.some((config) => config.config.shouldUseReanimatedDetector),
      dispatchesAnimatedEvents: substr.some((config) => config.config.dispatchesAnimatedEvents),
    };
    if (obj.shouldUseReanimatedDetector) {
      if (obj.dispatchesAnimatedEvents) {
        const _Error = Error;
        tmp2Result = tmp2(6660);
        const error1 = new Error(
          tmp2Result.tagMessage("Composed gestures cannot use both Reanimated and Animated events at the same time."),
        );
        throw error1;
      }
    }
    const Reanimated = tmp2(6698).Reanimated;
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
    obj = {
      handlerTags: flatMapResult,
      type,
      config: null,
      detectorCallbacks: null,
      externalSimultaneousHandlers: null,
      gestures: null,
    };
    obj.config = obj;
    const obj1 = {
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
    obj.detectorCallbacks = obj1;
    obj.externalSimultaneousHandlers = [];
    obj.gestures = substr;
    return obj;
  }
};
