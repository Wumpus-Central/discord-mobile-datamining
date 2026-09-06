// discord_app/modules/media_viewer/native/useMediaViewerClosePosition.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import getMediaViewerStateForScreenDefault from "getMediaViewerStateForScreen.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const NOOP = fn(1074).NOOP;
let closure_6 = { code: "function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}" };
const __initData = {
  code: "function useMediaViewerClosePositionTsx2(index){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index);}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default function useMediaViewerClosePosition(index) {
  index = index.index;
  const sources = index.sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const windowWidth = index.windowWidth;
  const tmp = sources(windowHeight[4])(onClose);
  noop = tmp;
  const tmp2 = windowWidth(
    noop.useState(() => {
      const tmp3 = sources[index.get(index)];
      if (null != tmp3) {
        let obj = getMediaViewerStateForScreenDefault(windowWidth, windowHeight, tmp3);
      } else {
        obj = { height: windowHeight };
      }
      return (windowHeight + obj.height) / 2;
    }),
    2,
  );
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
  index(windowHeight[5]);
  const fn = function h() {
    return index.get();
  };
  fn.__closure = { index };
  fn.__workletHash = 5031282724746;
  fn.__initData = setClosePosition;
  const fn2 = function f(arg0) {
    ReanimatedRexport.runOnJS(callback)(arg0);
  };
  let obj = { runOnJS: index(windowHeight[5]).runOnJS, setClosePosition };
  fn2.__closure = obj;
  fn2.__workletHash = 2709880768438;
  fn2.__initData = __initData;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items1 = [setClosePosition, index];
  const effect = noop.useEffect(() => {
    callback(index.get());
  }, items1);
  return tmp2[0];
}
