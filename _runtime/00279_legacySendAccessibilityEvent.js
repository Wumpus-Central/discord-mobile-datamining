const module = arg2;
const dependencyMap = arg6;
arg5.default = function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if ("focus" === arg1) {
    const tmp3 = module(70);
    const tmp3Result = module(70)(module(68).sendAccessibilityEvent);
    tmp3Result(_nativeTag, module(68).getConstants().AccessibilityEventTypes.typeViewFocused);
    const obj = module(68);
  }
  if ("click" === arg1) {
    const tmp8 = module(70);
    const tmp8Result = module(70)(module(68).sendAccessibilityEvent);
    tmp8Result(_nativeTag, module(68).getConstants().AccessibilityEventTypes.typeViewClicked);
    const obj2 = module(68);
  }
};