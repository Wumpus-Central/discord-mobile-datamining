// === Module 16457: useTryItOutUpsellScrollTracking ===

// Module 16457 (useTryItOutUpsellScrollTracking)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/useTryItOutUpsellScrollTracking.tsx");

export default function useTryItOutUpsellScrollTracking(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const sharedValue = ReanimatedRexport.useSharedValue(true);
  noop.useRef({ contentHeight: 0, viewportHeight: 0, tryItOutSectionHeight: 0 });
  const items = [arg0, sharedValue, arg1];
  const callback = noop.useCallback((arg0) => {
    const merged = Object.assign(ref.current, arg0);
    ({ contentHeight, viewportHeight } = ref.current);
    if (contentHeight > 0) {
      if (viewportHeight > 0) {
        const _Math = Math;
        const diff = contentHeight - viewportHeight;
        const result = sharedValue.set(Math.max(0, diff - closure_0.get()) > tmp2 + closure_1);
      }
    }
  }, items);
  const items1 = [sharedValue, callback];
  return noop.useMemo(() => ({
    isScrolledAboveTryItOutSection: sharedValue,
    onScroll(contentHeight) {
      return callback({ contentHeight: contentHeight.contentSize.height, viewportHeight: contentHeight.layoutMeasurement.height });
    },
    onContentSizeChange(arg0, contentHeight) {
      return callback({ contentHeight });
    },
    onScrollViewLayout(nativeEvent) {
      return callback({ viewportHeight: nativeEvent.nativeEvent.layout.height });
    },
    onTryItOutSectionLayout(nativeEvent) {
      return callback({ tryItOutSectionHeight: nativeEvent.nativeEvent.layout.height });
    }
  }), items1);
};