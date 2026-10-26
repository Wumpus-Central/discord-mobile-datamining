// === Module 15861: useTryItOutUpsellScrollTracking ===

// Module 15861 (useTryItOutUpsellScrollTracking)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/useTryItOutUpsellScrollTracking.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTryItOutUpsellScrollTracking(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const cResult = c.c(16);
  const sharedValue = ReanimatedRexport.useSharedValue(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { contentHeight: 0, viewportHeight: 0, tryItOutSectionHeight: 0 };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  noop.useRef(first);
  if (cResult[1] === sharedValue) {
    if (cResult[2] === arg1) {
      if (cResult[3] === arg0) {
        let tmp4 = cResult[4];
      }
      closure_4 = tmp4;
      if (cResult[5] !== tmp4) {
        const fn2 = function v(contentHeight) {
          return closure_4({ contentHeight: contentHeight.contentSize.height, viewportHeight: contentHeight.layoutMeasurement.height });
        };
        class S {
          constructor(arg0, arg1) {
            obj = { contentHeight: arg1 };
            return closure_4(obj);
          }
        }
        const fn3 = function y(nativeEvent) {
          return closure_4({ viewportHeight: nativeEvent.nativeEvent.layout.height });
        };
        class H {
          constructor(arg0) {
            obj = { tryItOutSectionHeight: arg0.nativeEvent.layout.height };
            return closure_4(obj);
          }
        }
        cResult[5] = tmp4;
        cResult[6] = fn2;
        cResult[7] = S;
        cResult[8] = fn3;
        cResult[9] = H;
        let tmp7 = fn3;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[6];
        class S {
          constructor(arg0, arg1) {
            obj = { contentHeight: arg1 };
            return closure_4(obj);
          }
        }
        tmp7 = cResult[8];
        class H {
          constructor(arg0) {
            obj = { tryItOutSectionHeight: arg0.nativeEvent.layout.height };
            return closure_4(obj);
          }
        }
      }
      const obj4 = { isScrolledAboveTryItOutSection: sharedValue, onScroll: tmp5, onContentSizeChange: S, onScrollViewLayout: tmp7, onTryItOutSectionLayout: H };
      cResult[10] = sharedValue;
      cResult[11] = tmp5;
      cResult[12] = S;
      cResult[13] = tmp7;
      cResult[14] = H;
      cResult[15] = obj4;
    }
  }
  const fn = function l(arg0) {
    const merged = Object.assign(ref.current, arg0);
    ({ contentHeight, viewportHeight } = ref.current);
    if (contentHeight > 0) {
      if (viewportHeight > 0) {
        const _Math = Math;
        const diff = contentHeight - viewportHeight;
        const result = sharedValue.set(Math.max(0, diff - closure_0.get()) > tmp2 + closure_1);
      }
    }
  };
  cResult[1] = sharedValue;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  tmp4 = fn;
}) : (function useTryItOutUpsellScrollTracking(arg0, arg1) {
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
});