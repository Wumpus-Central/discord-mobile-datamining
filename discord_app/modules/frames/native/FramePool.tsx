// discord_app/modules/frames/native/FramePool.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import FramesActionCreatorsDefault from "../FramesActionCreators.native.tsx";
import makeIframeIdDefault from "../../embedded_apps/utils/makeIframeId.tsx";
import WebViewContext from "../../embedded_apps/native/WebViewContext.tsx";
import FramePoolManagerDefault from "FramePoolManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../FramesStore.tsx";

const require = globalThis.__r;

require = fn;
function PooledFrame(frame) {
  frame = frame.frame;
  iframeId = undefined;
  dependencyMap = undefined;
  const id = frame.id;
  [iframeId, dependencyMap] = noop.useState(() => first(11798)());
  const items = [id, iframeId];
  const effect = noop.useEffect(() => {
    FramePoolManagerDefault.registerFrameEntry(id, first);
    FramesActionCreatorsDefault.attachFrameIframe(id, first);
    return () => {
      first(closure_2[12]).detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = noop.useEffect(
    () => () => {
      first(closure_2[9]).removeFrameEntry(id);
    },
    items1,
  );
  const callback = noop.useCallback(() => {
    dependencyMap(makeIframeIdDefault());
  }, []);
  let syncExternalStore = noop.useSyncExternalStore(iframeId(12108).subscribe, () =>
    FramePoolManagerDefault.getWinningTargetState(id),
  );
  let obj = { frame, iframeId, onActivityCrash: callback, presentation: null };
  if (syncExternalStore == null) {
    const obj2 = { layoutMode: constants.FOCUSED };
    syncExternalStore = obj2;
  }
  obj.presentation = syncExternalStore;
  return jsx(iframeId(19092), { frame, iframeId, onActivityCrash: callback, presentation: null }, iframeId);
}
const View = fn(17).View;
const FramesConstants = fn(6847);
({ FrameLayoutModes: closure_7, isLaunched: closure_8 } = FramesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5014);
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
    children: null,
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
    }),
  });
  return (
    <View
      ref={noop.useCallback((_nativeTag) => {
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
      }, [])}
      style={null}
      pointerEvents="none"
    >
      {null}
    </View>
  );
}
