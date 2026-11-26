// _runtime/metro/01957__.js
import _mod1667 from "01667__.js";
import _mod1707 from "01707__.js";

const items = [
  {
    code: '(function measureNative_Pnpm_measureNativeTs1(animatedRef){let[RuntimeKind,logger]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){return null;}const viewTag=animatedRef.value;if(!viewTag){logger.warn("The view with tag "+viewTag+" is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");return null;}const measured=global._measure(viewTag);if(measured===null){logger.warn("The view has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");return null;}if(isNaN(measured.x)){logger.warn("The view gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.");return null;}return measured;})',
  },
  _mod1707.RuntimeKind,
  _mod1667.logger,
];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
let measureJest = function measureNative(value) {
  if (globalThis.__RUNTIME_KIND === _undefined.ReactNative) {
    return null;
  } else {
    value = value.value;
    if (value) {
      let _measureResult = _undefined._measure(value);
      if (null === _measureResult) {
        _undefined2.warn(
          "The view has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).",
        );
        _measureResult = null;
      } else {
        const _isNaN = isNaN;
        if (isNaN(_measureResult.x)) {
          _undefined2.warn(
            "The view gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.",
          );
          _measureResult = null;
        }
      }
      return _measureResult;
    } else {
      const _HermesInternal = HermesInternal;
      _undefined2.warn(
        "The view with tag " +
          value +
          " is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).",
      );
      return null;
    }
  }
};
const items1 = [tmp3, tmp4];
measureJest.__closure = items1;
measureJest.__workletHash = 4237073728719;
measureJest.__initData = tmp2;
if (_mod1667.IS_JEST) {
  measureJest = function measureJest() {
    const logger = _undefined2(1667).logger;
    logger.warn("measure() cannot be used with Jest.");
    return null;
  };
}

export const measure = measureJest;
