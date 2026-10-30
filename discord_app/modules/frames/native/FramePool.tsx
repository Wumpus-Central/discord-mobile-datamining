// === Module 19042: FramePool ===

// Module 19042 (FramePool)
import initialize from "initialize" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
import makeIframeIdDefault from "makeIframeId" /* 11761 */;
import WebViewContext from "WebViewContext" /* 11784 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12070 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;

const require = globalThis.__r;

require = fn;
function PooledFrame(frame) {
  frame = frame.frame;
  iframeId = undefined;
  dependencyMap = undefined;
  const id = frame.id;
  [iframeId, dependencyMap] = noop.useState(() => first(11761)());
  const items = [id, iframeId];
  const effect = noop.useEffect(() => {
    FramePoolManagerDefault.registerFrameEntry(id, first);
    FramesActionCreatorsDefault.attachFrameIframe(id, first);
    return () => {
      first(closure_2[12]).detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = noop.useEffect(() => () => {
    first(closure_2[9]).removeFrameEntry(id);
  }, items1);
  const callback = noop.useCallback(() => {
    dependencyMap(makeIframeIdDefault());
  }, []);
  let syncExternalStore = noop.useSyncExternalStore(iframeId(12070).subscribe, () => FramePoolManagerDefault.getWinningTargetState(id));
  let obj = { frame, iframeId, onActivityCrash: callback, presentation: null };
  if (syncExternalStore == null) {
    const obj2 = { layoutMode: constants.FOCUSED };
    syncExternalStore = obj2;
  }
  obj.presentation = syncExternalStore;
  return jsx(iframeId(19043), { frame, iframeId, onActivityCrash: callback, presentation: null }, iframeId);
}
const View = fn(17).View;
const FramesConstants = fn(6841);
({ FrameLayoutModes: closure_7, isLaunched: closure_8 } = FramesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_10 = createStyles.createStyles({ pool: { position: "absolute", opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FramePool.tsx");

export default function FramePool() {
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
      require(num);
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
        tmp = <PooledFrame key={frame.id} frame={frame} />;
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
    require(num);
    FramePoolManagerDefault.setPoolNodeTag(num);
  }, [])} style={null} pointerEvents="none">{null}</View>;
};