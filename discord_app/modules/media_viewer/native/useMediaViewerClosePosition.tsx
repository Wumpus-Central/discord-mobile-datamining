// === Module 15017: useMediaViewerClosePosition ===

// Module 15017 (useMediaViewerClosePosition)
import getMediaViewerStateForScreenDefault from "getMediaViewerStateForScreen" /* 15013 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const NOOP = fn(1072).NOOP;
let closure_6 = { code: "(function useMediaViewerClosePositionTsx1(){let[index]=this.__closure;return index.get();})" };
let closure_7 = { code: "(function useMediaViewerClosePositionTsx2(index){let[scheduleOnRN,setClosePosition]=this.__closure;scheduleOnRN(setClosePosition,index);})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default function useMediaViewerClosePosition(index) {
  index = index.index;
  _require = index;
  const sources = index.sources;
  importDefault = sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const windowWidth = index.windowWidth;
  const tmp2 = require("useStableCallback")(onClose);
  noop = tmp2;
  let tmp3 = windowWidth(noop.useState(() => {
    const tmp3 = _undefined2[_undefined.get(_undefined)];
    if (null != tmp3) {
      let obj = getMediaViewerStateForScreenDefault(windowWidth, windowHeight, tmp3);
    } else {
      obj = { height: windowHeight };
    }
    return (windowHeight + obj.height) / 2;
  }), 2);
  closure_5 = tmp3[1];
  items = [tmp2, sources, windowHeight, windowWidth];
  const callback = noop.useCallback((arg0) => {
    if (null == _undefined2[arg0]) {
      closure_4();
    }
    if (null != _undefined2[arg0]) {
      let obj = getMediaViewerStateForScreenDefault(tmp5, windowHeight, tmp);
    } else {
      obj = { height: windowHeight };
    }
    closure_5((windowHeight + obj.height) / 2);
  }, items);
  const items1 = [callback, index];
  _require = undefined;
  [tmp6, tmp7] = items1;
  function useMediaViewerClosePositionTsx1() {
    return _undefined.get();
  }
  const items2 = [tmp7];
  useMediaViewerClosePositionTsx1.__closure = items2;
  useMediaViewerClosePositionTsx1.__workletHash = 7521936949267;
  useMediaViewerClosePositionTsx1.__initData = tmp6;
  const items3 = [closure_7, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  [tmp8, tmp9, tmp10] = items3;
  function useMediaViewerClosePositionTsx2(arg0) {
    _undefined(c1, arg0);
  }
  const items4 = [tmp9, tmp10];
  useMediaViewerClosePositionTsx2.__closure = items4;
  useMediaViewerClosePositionTsx2.__workletHash = 6277806213986;
  useMediaViewerClosePositionTsx2.__initData = tmp8;
  const animatedReaction = require("module_1652").useAnimatedReaction(useMediaViewerClosePositionTsx1, useMediaViewerClosePositionTsx2);
  const items5 = [callback, index];
  const effect = noop.useEffect(() => {
    callback(_undefined.get());
  }, items5);
  return tmp3[0];
};