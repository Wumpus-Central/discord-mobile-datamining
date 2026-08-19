// === Module 6485: useComposedGesture ===

// Module 6485 (useComposedGesture)
const require = arg1;
const dependencyMap = arg6;
arg5.useComposedGesture = function useComposedGesture(arg0) {
  const substr = [...arguments].slice();
  const flatMapResult = substr.flatMap((handlerTags) => {
    if (obj.isComposedGesture(handlerTags)) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [handlerTags.handlerTag];
    }
    return handlerTags;
  });
  let obj = substr(6445);
  if (obj.containsDuplicates(flatMapResult)) {
    const _Error2 = Error;
    let tmp2Result = tmp2(6382);
    error = new Error(tmp2Result.tagMessage("Each gesture can be used only once in the gesture composition."));
    throw error;
  } else {
    obj = { shouldUseReanimatedDetector: null, dispatchesAnimatedEvents: null };
    obj[0] = substr.some((config) => config.config.shouldUseReanimatedDetector);
    obj[1] = substr.some((config) => config.config.dispatchesAnimatedEvents);
    if (obj.shouldUseReanimatedDetector) {
      if (obj.dispatchesAnimatedEvents) {
        const _Error = Error;
        tmp2Result = tmp2(6382);
        const error1 = new Error(tmp2Result.tagMessage("Composed gestures cannot use both Reanimated and Animated events at the same time."));
        throw error1;
      }
    }
    const Reanimated = tmp2(6420).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(substr.map((detectorCallbacks) => detectorCallbacks.detectorCallbacks.reanimatedEventHandler || null));
    }
    const found = substr.filter((detectorCallbacks) => undefined !== detectorCallbacks.detectorCallbacks.animatedEventHandler);
    let animatedEventHandler;
    if (found.length > 0) {
      animatedEventHandler = found[0].detectorCallbacks.animatedEventHandler;
    }
    obj = { handlerTags: null, type: null, config: null, detectorCallbacks: null, externalSimultaneousHandlers: null, gestures: null };
    obj[0] = flatMapResult;
    obj[1] = arg0;
    obj[2] = obj;
    obj1 = { jsEventHandler: null, reanimatedEventHandler: null, animatedEventHandler: null };
    obj1[0] = function jsEventHandler(arg0, arg1) {
      for (const item10007 of substr) {
        if (item10007.detectorCallbacks.jsEventHandler) {
          let tmp2 = item10007;
          let detectorCallbacks = tmp.detectorCallbacks;
          let jsEventHandlerResult = detectorCallbacks.jsEventHandler(arg0);
        }
        continue;
      }
    };
    obj1[1] = composedEventHandler;
    obj1[2] = animatedEventHandler;
    obj[3] = obj1;
    obj[4] = [];
    obj[5] = substr;
    return obj;
  }
};