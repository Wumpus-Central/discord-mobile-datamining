// === Module 12084: useMediaViewerClosePosition ===

// Module 12084 (useMediaViewerClosePosition)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { NOOP } from "ME" /* 676 */;

const require = arg1;
let closure_6 = { code: "function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}" };
let closure_7 = { code: "function useMediaViewerClosePositionTsx2(index){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index);}" };
const result = require("set").fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default function useMediaViewerClosePosition(index) {
  index = index.index;
  const sources = index.sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const windowWidth = index.windowWidth;
  let React;
  closure_5 = undefined;
  let callback;
  const tmp = sources(windowHeight[4])(onClose);
  React = tmp;
  const tmp2 = windowWidth(React.useState(() => {
    const tmp3 = sources[index.get(index)];
    if (null != tmp3) {
      let obj = sources(windowHeight[3])(windowWidth, tmp2, tmp3);
    } else {
      obj = { height: null };
      obj[0] = tmp2;
    }
    return (windowHeight + obj.height) / 2;
  }), 2);
  closure_5 = tmp2[1];
  const items = [tmp, sources, windowHeight, windowWidth];
  callback = React.useCallback((arg0) => {
    if (null == sources[arg0]) {
      callback();
    }
    if (null != sources[arg0]) {
      let obj = sources(windowHeight[3])(tmp5, tmp6, tmp);
    } else {
      obj = { height: null };
      obj[0] = tmp6;
    }
    closure_5((windowHeight + obj.height) / 2);
  }, items);
  let obj = index(windowHeight[5]);
  const fn = function h() {
    return index.get();
  };
  fn.__closure = { index };
  fn.__workletHash = 5031282724746;
  fn.__initData = callback;
  const fn2 = function f(arg0) {
    index(windowHeight[5]).runOnJS(callback)(arg0);
  };
  obj = { runOnJS: index(windowHeight[5]).runOnJS, setClosePosition: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 2709880768438;
  fn2.__initData = closure_7;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items1 = [callback, index];
  const effect = React.useEffect(() => {
    callback(index.get());
  }, items1);
  return tmp2[0];
};