// === Module 13080: useMediaViewerClosePosition ===

// Module 13080 (useMediaViewerClosePosition)
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import getMediaViewerStateForScreenDefault from "getMediaViewerStateForScreen" /* 13077 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const NOOP = fn(1085).NOOP;
let __initData = { code: "function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}" };
const __initData2 = { code: "function useMediaViewerClosePositionTsx2(index_1){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index_1);}" };
const __initData3 = { code: "function useMediaViewerClosePositionTsx3(){const{index}=this.__closure;return index.get();}" };
const __initData4 = { code: "function useMediaViewerClosePositionTsx4(index_1){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index_1);}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaViewerClosePosition(index) {
  const cResult = index(windowHeight[5]).c(14);
  index = index.index;
  const sources = index.sources;
  ({ onClose, windowHeight } = index);
  const windowWidth = index.windowWidth;
  if (undefined === onClose) {
    onClose = closure_5;
  }
  const tmp4 = sources(windowHeight[6])(onClose);
  noop = tmp4;
  if (cResult[0] === index) {
    if (cResult[1] === sources) {
      if (cResult[2] === windowHeight) {
        if (cResult[3] === windowWidth) {
          let tmp5 = cResult[4];
        }
        closure_5 = windowWidth(noop.useState(tmp5), 2)[1];
        if (cResult[5] === tmp4) {
          if (cResult[6] === sources) {
            if (cResult[7] === windowHeight) {
              if (cResult[8] === windowWidth) {
                let tmp9 = cResult[9];
              }
              __initData = tmp9;
              class H {
                constructor() {
                  return index.get();
                }
              }
              const obj3 = { index };
              H.__closure = obj3;
              H.__workletHash = 5031282724746;
              H.__initData = __initData;
              class V {
                constructor(arg0) {
                  obj = closure_0(closure_2[7]);
                  tmp = obj.runOnJS(closure_6)(index);
                  return;
                }
              }
              const obj4 = { runOnJS: tmp(windowHeight[7]).runOnJS, setClosePosition: tmp9 };
              V.__closure = obj4;
              V.__workletHash = 10222005330358;
              V.__initData = __initData2;
              const animatedReaction = tmp(windowHeight[7]).useAnimatedReaction(H, V);
              if (cResult[10] === index) {
                if (cResult[11] === tmp9) {
                  let tmp13 = cResult[12];
                  let tmp14 = cResult[13];
                }
                const effect = obj2.useEffect(tmp13, tmp14);
                return tmp8;
              }
              const fn3 = function b() {
                closure_6(index.get());
              };
              const items = [tmp9, index];
              cResult[10] = index;
              cResult[11] = tmp9;
              cResult[12] = fn3;
              cResult[13] = items;
              tmp14 = items;
              tmp13 = fn3;
              const tmpResult = tmp(windowHeight[7]);
            }
          }
        }
        const fn2 = function v(arg0) {
          if (null == sources[arg0]) {
            closure_4();
          }
          if (null != sources[arg0]) {
            let obj = getMediaViewerStateForScreenDefault(tmp5, windowHeight, tmp);
          } else {
            obj = { height: windowHeight };
          }
          closure_5((windowHeight + obj.height) / 2);
        };
        cResult[5] = tmp4;
        cResult[7] = windowHeight;
        cResult[8] = windowWidth;
        cResult[9] = fn2;
        tmp9 = fn2;
        obj2 = noop;
        const tmp7 = windowWidth(noop.useState(tmp5), 2);
      }
    }
  }
  const fn = function c() {
    const tmp3 = sources[index.get(index)];
    if (null != tmp3) {
      let obj = getMediaViewerStateForScreenDefault(windowWidth, windowHeight, tmp3);
    } else {
      obj = { height: windowHeight };
    }
    return (windowHeight + obj.height) / 2;
  };
  cResult[0] = index;
  cResult[1] = sources;
  cResult[2] = windowHeight;
  cResult[3] = windowWidth;
  cResult[4] = fn;
  tmp5 = fn;
  let obj = index(windowHeight[5]);
}) : (function useMediaViewerClosePosition(index) {
  index = index.index;
  const sources = index.sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const windowWidth = index.windowWidth;
  const tmp = sources(windowHeight[6])(onClose);
  noop = tmp;
  const tmp2 = windowWidth(noop.useState(() => {
    const tmp3 = sources[index.get(index)];
    if (null != tmp3) {
      let obj = getMediaViewerStateForScreenDefault(windowWidth, windowHeight, tmp3);
    } else {
      obj = { height: windowHeight };
    }
    return (windowHeight + obj.height) / 2;
  }), 2);
  closure_5 = tmp2[1];
  const items = [tmp, sources, windowHeight, windowWidth];
  const setClosePosition = noop.useCallback((arg0) => {
    if (null == sources[arg0]) {
      closure_4();
    }
    if (null != sources[arg0]) {
      let obj = getMediaViewerStateForScreenDefault(tmp5, windowHeight, tmp);
    } else {
      obj = { height: windowHeight };
    }
    closure_5((windowHeight + obj.height) / 2);
  }, items);
  class P {
    constructor() {
      return index.get();
    }
  }
  P.__closure = { index };
  P.__workletHash = 3888496641736;
  P.__initData = __initData3;
  const fn = function w(arg0) {
    ReanimatedRexport.runOnJS(callback)(arg0);
  };
  let obj = index(windowHeight[7]);
  fn.__closure = { runOnJS: index(windowHeight[7]).runOnJS, setClosePosition };
  fn.__workletHash = 9607289589872;
  fn.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(P, fn);
  const items1 = [setClosePosition, index];
  const effect = noop.useEffect(() => {
    callback(index.get());
  }, items1);
  return tmp2[0];
});