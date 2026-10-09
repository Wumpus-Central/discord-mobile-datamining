// === Module 17608: FramePool ===

// Module 17608 (FramePool)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10769 */;
import makeIframeIdDefault from "makeIframeId" /* 10889 */;
import WebViewContext from "WebViewContext" /* 10913 */;
import FramePoolManagerDefault from "FramePoolManager" /* 17024 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 10772 */;

require = fn;
const View = fn(17).View;
const FramesConstants = fn(10767);
({ FrameLayoutModes: closure_7, isLaunched: closure_8 } = FramesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({ pool: { position: "absolute", opacity: 0 } });
fn(558);
const ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PooledFrame(frame) {
  const cResult = id(576).c(17);
  frame = frame.frame;
  id = frame.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return first1(10889)();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  [first1, dependencyMap] = noop.useState(first);
  if (cResult[1] === id) {
    if (cResult[2] === first1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (cResult[5] !== id) {
      class S {
        constructor() {
          return () => {
            first1(closure_2[11]).removeFrameEntry(id);
          };
        }
      }
      const items = [id];
      cResult[5] = id;
      cResult[6] = S;
      cResult[7] = items;
      let tmp10 = items;
    } else {
      class S {
        constructor() {
          return () => {
            first1(closure_2[11]).removeFrameEntry(id);
          };
        }
      }
      tmp10 = cResult[7];
    }
    const effect1 = noop.useEffect(S, tmp10);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return () => {
            first1(closure_2[11]).removeFrameEntry(id);
          };
        }
      }
      cResult[8] = tmp13;
    } else {
      class S {
        constructor() {
          return () => {
            first1(closure_2[11]).removeFrameEntry(id);
          };
        }
      }
    }
    if (cResult[9] !== id) {
      class P {
        constructor() {
          obj = closure_1(closure_2[11]);
          return obj.getWinningTargetState(id);
        }
      }
      cResult[9] = id;
      cResult[10] = P;
    } else {
      class P {
        constructor() {
          obj = closure_1(closure_2[11]);
          return obj.getWinningTargetState(id);
        }
      }
    }
    const syncExternalStore = noop.useSyncExternalStore(first1(17024).subscribe, P);
    if (cResult[11] !== syncExternalStore) {
      class P {
        constructor() {
          obj = closure_1(closure_2[11]);
          return obj.getWinningTargetState(id);
        }
      }
      let tmp18 = syncExternalStore;
      if (syncExternalStore == null) {
        class P {
          constructor() {
            obj = closure_1(closure_2[11]);
            return obj.getWinningTargetState(id);
          }
        }
        tmp19[0] = constants.FOCUSED;
        tmp18 = tmp19;
      }
      cResult[11] = syncExternalStore;
      cResult[12] = tmp18;
    } else {
      class P {
        constructor() {
          obj = closure_1(closure_2[11]);
          return obj.getWinningTargetState(id);
        }
      }
    }
    if (cResult[13] === frame) {
      class P {
        constructor() {
          obj = closure_1(closure_2[11]);
          return obj.getWinningTargetState(id);
        }
      }
    }
    const obj3 = { frame, iframeId: first1, onActivityCrash: tmp13, presentation: tmp17 };
    const tmp23 = jsx(first1(17609), { frame, iframeId: first1, onActivityCrash: tmp13, presentation: tmp17 }, first1);
    cResult[13] = frame;
    cResult[14] = first1;
    cResult[15] = tmp17;
    cResult[16] = tmp23;
  }
  const fn2 = function v() {
    FramePoolManagerDefault.registerFrameEntry(id, first1);
    FramesActionCreatorsDefault.attachFrameIframe(id, first1);
    return () => {
      first1(closure_2[14]).detachFrameIframe(id, closure_1_1);
    };
  };
  const items1 = [id, first1];
  cResult[1] = id;
  cResult[2] = first1;
  cResult[3] = fn2;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn2;
  let obj = id(576);
}) : (function PooledFrame(frame) {
  frame = frame.frame;
  iframeId = undefined;
  dependencyMap = undefined;
  const id = frame.id;
  [iframeId, dependencyMap] = noop.useState(() => first(10889)());
  const items = [id, iframeId];
  const effect = noop.useEffect(() => {
    FramePoolManagerDefault.registerFrameEntry(id, first);
    FramesActionCreatorsDefault.attachFrameIframe(id, first);
    return () => {
      first(closure_2[14]).detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = noop.useEffect(() => () => {
    first(closure_2[11]).removeFrameEntry(id);
  }, items1);
  const callback = noop.useCallback(() => {
    dependencyMap(makeIframeIdDefault());
  }, []);
  let syncExternalStore = noop.useSyncExternalStore(iframeId(17024).subscribe, () => FramePoolManagerDefault.getWinningTargetState(id));
  let obj = { frame, iframeId, onActivityCrash: callback, presentation: null };
  if (syncExternalStore == null) {
    const obj2 = { layoutMode: constants.FOCUSED };
    syncExternalStore = obj2;
  }
  obj.presentation = syncExternalStore;
  return jsx(iframeId(17609), { frame, iframeId, onActivityCrash: callback, presentation: null }, iframeId);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FramePool.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FramePool() {
  const cResult = c.c(18);
  const tmp4 = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function c() {
      return allFrames.getAllFrames();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmp5 = useWindowDimensionsDefault();
  const stateFromStoresArray = initialize.useStateFromStoresArray(tmp6, tmp7);
  const tmpResult = initialize;
  [tmp10, require] = noop.useState(0);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(arg0) {
        num = 0;
        if (null != arg0) {
          num2 = arg0._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        tmp = closure_0(num);
        obj = closure_1(closure_2[11]);
        setPoolNodeTagResult = obj.setPoolNodeTag(num);
        return;
      }
    }
    cResult[2] = E;
  } else {
    class E {
      constructor(arg0) {
        num = 0;
        if (null != arg0) {
          num2 = arg0._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        tmp = closure_0(num);
        obj = closure_1(closure_2[11]);
        setPoolNodeTagResult = obj.setPoolNodeTag(num);
        return;
      }
    }
  }
  if (cResult[3] === height) {
    class E {
      constructor(arg0) {
        num = 0;
        if (null != arg0) {
          num2 = arg0._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        tmp = closure_0(num);
        obj = closure_1(closure_2[11]);
        setPoolNodeTagResult = obj.setPoolNodeTag(num);
        return;
      }
    }
    if (cResult[6] === tmp4.pool) {
      class E {
        constructor(arg0) {
          num = 0;
          if (null != arg0) {
            num2 = arg0._nativeTag;
            if (num2 == null) {
              num2 = 0;
            }
            num = num2;
          }
          tmp = closure_0(num);
          obj = closure_1(closure_2[11]);
          setPoolNodeTagResult = obj.setPoolNodeTag(num);
          return;
        }
      }
      if (cResult[9] !== stateFromStoresArray) {
        class E {
          constructor(arg0) {
            num = 0;
            if (null != arg0) {
              num2 = arg0._nativeTag;
              if (num2 == null) {
                num2 = 0;
              }
              num = num2;
            }
            tmp = closure_0(num);
            obj = closure_1(closure_2[11]);
            setPoolNodeTagResult = obj.setPoolNodeTag(num);
            return;
          }
        }
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(arg0) {
              tmp = null;
              if (closure_1_8(arg0)) {
                tmp2 = closure_1_9;
                tmp3 = closure_1_11;
                obj = { frame: null };
                obj.frame = arg0;
                tmp = closure_1_9(closure_1_11, obj, arg0.id);
              }
              return tmp;
            }
          }
          cResult[11] = M;
        } else {
          class M {
            constructor(arg0) {
              tmp = null;
              if (closure_1_8(arg0)) {
                tmp2 = closure_1_9;
                tmp3 = closure_1_11;
                obj = { frame: null };
                obj.frame = arg0;
                tmp = closure_1_9(closure_1_11, obj, arg0.id);
              }
              return tmp;
            }
          }
        }
        const mapped = stateFromStoresArray.map(M);
        cResult[9] = stateFromStoresArray;
        cResult[10] = mapped;
      } else {
        class M {
          constructor(arg0) {
            tmp = null;
            if (closure_1_8(arg0)) {
              tmp2 = closure_1_9;
              tmp3 = closure_1_11;
              obj = { frame: null };
              obj.frame = arg0;
              tmp = closure_1_9(closure_1_11, obj, arg0.id);
            }
            return tmp;
          }
        }
        if (cResult[12] === tmp10) {
          class M {
            constructor(arg0) {
              tmp = null;
              if (closure_1_8(arg0)) {
                tmp2 = closure_1_9;
                tmp3 = closure_1_11;
                obj = { frame: null };
                obj.frame = arg0;
                tmp = closure_1_9(closure_1_11, obj, arg0.id);
              }
              return tmp;
            }
          }
          if (cResult[15] === tmp13) {
            class M {
              constructor(arg0) {
                tmp = null;
                if (closure_1_8(arg0)) {
                  tmp2 = closure_1_9;
                  tmp3 = closure_1_11;
                  obj = { frame: null };
                  obj.frame = arg0;
                  tmp = closure_1_9(closure_1_11, obj, arg0.id);
                }
                return tmp;
              }
            }
            return tmp21;
          }
          const obj2 = { ref: E, style: tmp13, pointerEvents: "none", children: tmp18 };
          const tmp24 = <View ref={E} style={tmp13} pointerEvents="none">{tmp18}</View>;
          cResult[15] = tmp13;
          cResult[16] = tmp18;
          cResult[17] = tmp24;
          tmp21 = tmp24;
        }
        const obj3 = { value: tmp10, children: tmp14 };
        const tmp20 = jsx(WebViewContext.WebViewContext.Provider, { value: tmp10, children: tmp14 });
        cResult[12] = tmp10;
        cResult[13] = tmp14;
        cResult[14] = tmp20;
      }
    }
    const items1 = [tmp4.pool, tmp12];
    cResult[6] = tmp4.pool;
    cResult[7] = tmp12;
    cResult[8] = items1;
  }
  const size = { width, height };
  cResult[3] = height;
  cResult[4] = width;
  cResult[5] = size;
  const tmp9 = _slicedToArray(noop.useState(0), 2);
}) : (function FramePool() {
  let tmp = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  const tmp2 = useWindowDimensionsDefault();
  const items = [FramesStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => allFrames.getAllFrames());
  [tmp4, require] = noop.useState(0);
  const obj2 = {
    ref: noop.useCallback((_nativeTag) => {
      let num = 0;
      if (null != _nativeTag) {
        let num2 = _nativeTag._nativeTag;
        if (num2 == null) {
          num2 = 0;
        }
        num = num2;
      }
      _require(num);
      FramePoolManagerDefault.setPoolNodeTag(num);
    }, []),
    style: null,
    pointerEvents: "none",
    children: null
  };
  const items1 = [tmp.pool, { width, height }];
  obj2.style = items1;
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  obj2.children = jsx(WebViewContext.WebViewContext.Provider, {
    value: tmp4,
    children: stateFromStoresArray.map((frame) => {
      let tmp = null;
      if (closure_1_8(frame)) {
        const obj = { frame };
        tmp = <closure_1_11 key={frame.id} frame={frame} />;
      }
      return tmp;
    })
  });
  return <View ref={noop.useCallback((_nativeTag) => {
    let num = 0;
    if (null != _nativeTag) {
      let num2 = _nativeTag._nativeTag;
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    _require(num);
    FramePoolManagerDefault.setPoolNodeTag(num);
  }, [])} style={null} pointerEvents="none">{null}</View>;
});