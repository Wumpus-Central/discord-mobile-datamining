// _runtime/metro/06248__.js
let handlerTags;

export const useComposedGesture = function useComposedGesture(type) {
  const substr = [...arguments].slice();
  const flatMapResult = substr.flatMap((handlerTags) => {
    const obj = substr(dependencyMap[0]);
    if (obj.isComposedGesture(handlerTags)) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [];
      handlerTags[0] = handlerTags.handlerTag;
    }
    return handlerTags;
  });
  let obj = substr(6208);
  if (obj.containsDuplicates(flatMapResult)) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const tmp2Result = substr(6145);
    const error = new Error(tmp2Result.tagMessage("Each gesture can be used only once in the gesture composition."));
    throw error;
  } else {
    const obj2 = {
      shouldUseReanimatedDetector: substr.some((config) => config.config.shouldUseReanimatedDetector),
      dispatchesAnimatedEvents: substr.some((config) => config.config.dispatchesAnimatedEvents),
    };
    if (obj2.shouldUseReanimatedDetector) {
      if (obj2.dispatchesAnimatedEvents) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp2Result2 = substr(6145);
        const error1 = new Error(
          tmp2Result2.tagMessage("Composed gestures cannot use both Reanimated and Animated events at the same time."),
        );
        throw error1;
      }
    }
    const Reanimated = tmp2(6183).Reanimated;
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
      detectorCallbacks: obj4,
      externalSimultaneousHandlers: [],
      gestures: substr,
    };
    return obj3;
  }
};
