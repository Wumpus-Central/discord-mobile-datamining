// === Module 17146: FramePool ===

// Module 17146 (FramePool)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import v1 from "v1" /* 1266 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8986 */;
import WebViewContext from "WebViewContext" /* 9139 */;
import FramePoolManagerDefault from "FramePoolManager" /* 16596 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8703 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ FrameLayoutModes: metroImportDefault, isLaunched: metroImportAll } = FramesConstants);
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ pool: { position: "absolute", opacity: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let allFrames;
  let height;
  let require;
  let tmp10;
  let tmp20;
  let tmp6;
  let tmp7;
  let width;
  let obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function c() {
      return allFrames.getAllFrames();
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7);
  [tmp10, require] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(_nativeTag) {
        let num = 0;
        if (null != _nativeTag) {
          let num2 = _nativeTag._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _require(num);
        const obj = FramePoolManagerDefault;
        obj.setPoolNodeTag(num);
      }
    }
    cResult[2] = E;
  } else {
    class E {
      constructor(_nativeTag) {
        let num = 0;
        if (null != _nativeTag) {
          let num2 = _nativeTag._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _require(num);
        const obj = FramePoolManagerDefault;
        obj.setPoolNodeTag(num);
      }
    }
  }
  if (cResult[3] === height) {
    class E {
      constructor(_nativeTag) {
        let num = 0;
        if (null != _nativeTag) {
          let num2 = _nativeTag._nativeTag;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _require(num);
        const obj = FramePoolManagerDefault;
        obj.setPoolNodeTag(num);
      }
    }
    if (cResult[6] === tmp4.pool) {
      class E {
        constructor(_nativeTag) {
          let num = 0;
          if (null != _nativeTag) {
            let num2 = _nativeTag._nativeTag;
            if (num2 == null) {
              num2 = 0;
            }
            num = num2;
          }
          _require(num);
          const obj = FramePoolManagerDefault;
          obj.setPoolNodeTag(num);
        }
      }
      if (cResult[9] !== stateFromStoresArray) {
        class E {
          constructor(_nativeTag) {
            let num = 0;
            if (null != _nativeTag) {
              let num2 = _nativeTag._nativeTag;
              if (num2 == null) {
                num2 = 0;
              }
              num = num2;
            }
            _require(num);
            const obj = FramePoolManagerDefault;
            obj.setPoolNodeTag(num);
          }
        }
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(frame) {
              let tmp = null;
              if (closure_1_8(frame)) {
                tmp = <closure_1_11 key={frame.id} frame={frame} />;
              }
              return tmp;
            }
          }
          cResult[11] = M;
        } else {
          class M {
            constructor(frame) {
              let tmp = null;
              if (closure_1_8(frame)) {
                tmp = <closure_1_11 key={frame.id} frame={frame} />;
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
          constructor(frame) {
            let tmp = null;
            if (closure_1_8(frame)) {
              tmp = <closure_1_11 key={frame.id} frame={frame} />;
            }
            return tmp;
          }
        }
      }
      if (cResult[12] === tmp10) {
        class M {
          constructor(frame) {
            let tmp = null;
            if (closure_1_8(frame)) {
              tmp = <closure_1_11 key={frame.id} frame={frame} />;
            }
            return tmp;
          }
        }
        if (cResult[15] === tmp13) {
          class M {
            constructor(frame) {
              let tmp = null;
              if (closure_1_8(frame)) {
                tmp = <closure_1_11 key={frame.id} frame={frame} />;
              }
              return tmp;
            }
          }
          return tmp20;
        }
        const tmp23 = <View ref={E} style={tmp13} pointerEvents="none">{tmp17}</View>;
        cResult[15] = tmp13;
        cResult[16] = tmp17;
        cResult[17] = tmp23;
        tmp20 = tmp23;
      }
      cResult[12] = tmp10;
      cResult[13] = tmp14;
      cResult[14] = jsx(WebViewContext.WebViewContext.Provider, { value: tmp10, children: tmp14 });
      const tmp19 = jsx(WebViewContext.WebViewContext.Provider, { value: tmp10, children: tmp14 });
    }
    const items1 = [tmp4.pool, tmp12];
    cResult[6] = tmp4.pool;
    cResult[7] = tmp12;
    cResult[8] = items1;
  }
  size = { width, height };
  cResult[3] = height;
  cResult[4] = width;
  cResult[5] = size;
}) : (() => {
  let allFrames;
  let height;
  let require;
  let tmp4;
  let width;
  let tmp = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  let obj = get_initialized;
  const items = [FramesStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => allFrames.getAllFrames());
  [tmp4, require] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const items1 = [tmp.pool, { width, height }];
  ({
    value: tmp4,
    children: stateFromStoresArray.map((frame) => {
      let tmp = null;
      if (closure_1_8(frame)) {
        tmp = <closure_1_11 key={frame.id} frame={frame} />;
      }
      return tmp;
    })
  });
  const Provider = WebViewContext.WebViewContext.Provider;
  return <View ref={react.useCallback((_nativeTag) => {
    let num = 0;
    if (null != _nativeTag) {
      let num2 = _nativeTag._nativeTag;
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    _require(num);
    const obj = FramePoolManagerDefault;
    obj.setPoolNodeTag(num);
  }, [])} style={items1} pointerEvents="none">{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  let closure_2;
  let first;
  let first1;
  let id;
  let obj = id(576);
  const cResult = obj.c(17);
  frame = frame.frame;
  id = frame.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = id(closure_2[13]);
      return obj.v4();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [first1, dependencyMap] = react.useState(first);
  if (cResult[1] === id) {
    let tmp6;
    let tmp7;
    let tmp10;
    if (cResult[2] === first1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const effect = react.useEffect(tmp6, tmp7);
    if (cResult[5] !== id) {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      const items = [id];
      cResult[5] = id;
      cResult[6] = S;
      cResult[7] = items;
      tmp10 = items;
    } else {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      tmp10 = cResult[7];
    }
    const effect1 = react.useEffect(S, tmp10);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      cResult[8] = tmp13;
    } else {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
    }
    if (cResult[9] !== id) {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      cResult[9] = id;
      cResult[10] = tmp15;
    } else {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
    }
    const syncExternalStore = react.useSyncExternalStore(first1(16596).subscribe, tmp15);
    const tmp16 = first1;
    if (cResult[11] !== syncExternalStore) {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
      let tmp19 = syncExternalStore;
      if (syncExternalStore == null) {
        class S {
          constructor() {
            return () => {
              const obj = first1(closure_2[11]);
              obj.removeFrameEntry(id);
            };
          }
        }
        tmp20[0] = constants.FOCUSED;
        tmp19 = tmp20;
      }
      cResult[11] = syncExternalStore;
      cResult[12] = tmp19;
    } else {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
    }
    if (cResult[13] === frame) {
      class S {
        constructor() {
          return () => {
            const obj = first1(closure_2[11]);
            obj.removeFrameEntry(id);
          };
        }
      }
    }
    cResult[13] = frame;
    cResult[14] = first1;
    cResult[15] = tmp18;
    cResult[16] = jsx(tmp16(17147), { frame, iframeId: first1, onActivityCrash: tmp13, presentation: tmp18 }, first1);
    const tmp24 = jsx(tmp16(17147), { frame, iframeId: first1, onActivityCrash: tmp13, presentation: tmp18 }, first1);
  }
  const fn2 = function h() {
    let obj = FramePoolManagerDefault;
    obj.registerFrameEntry(id, first1);
    const obj2 = FramesActionCreatorsDefault;
    obj2.attachFrameIframe(id, first1);
    return () => {
      const obj = first1(closure_2[14]);
      obj.detachFrameIframe(id, closure_1_1);
    };
  };
  const items1 = [id, first1];
  cResult[1] = id;
  cResult[2] = first1;
  cResult[3] = fn2;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn2;
}) : ((frame) => {
  let closure_2;
  let iframeId;
  frame = frame.frame;
  iframeId = undefined;
  dependencyMap = undefined;
  const id = frame.id;
  [iframeId, dependencyMap] = react.useState(() => {
    const obj = id(closure_2[13]);
    return obj.v4();
  });
  const items = [id, iframeId];
  const effect = react.useEffect(() => {
    let obj = FramePoolManagerDefault;
    obj.registerFrameEntry(id, first);
    const obj2 = FramesActionCreatorsDefault;
    obj2.attachFrameIframe(id, first);
    return () => {
      const obj = first(closure_2[14]);
      obj.detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = react.useEffect(() => () => {
    const obj = first(closure_2[11]);
    obj.removeFrameEntry(id);
  }, items1);
  const callback = react.useCallback(() => {
    const obj = v1;
    closure_2(obj.v4());
  }, []);
  let syncExternalStore = react.useSyncExternalStore(iframeId(16596).subscribe, () => {
    const obj = FramePoolManagerDefault;
    return obj.getWinningTargetState(id);
  });
  iframeId(17147);
  if (syncExternalStore == null) {
    let obj2 = { layoutMode: constants.FOCUSED };
    syncExternalStore = obj2;
  }
  return <tmp8 key={iframeId} frame={frame} iframeId={iframeId} onActivityCrash={callback} presentation={syncExternalStore} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/frames/native/FramePool.tsx");

export default tmp3;