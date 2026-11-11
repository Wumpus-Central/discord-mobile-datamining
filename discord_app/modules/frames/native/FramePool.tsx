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
  let iframeId;
  const id = frame.id;
  const proxyTicket = frame.data.proxyTicket;
  [tmp2, tmp3] = iframeId(
    noop.useState(() => ({ iframeId: makeIframeIdDefault(), proxyTicket })),
    2,
  );
  dependencyMap = tmp3;
  if (tmp2.proxyTicket !== proxyTicket) {
    const obj2 = { iframeId: proxyTicket(12763)(), proxyTicket };
    tmp3(obj2);
  }
  iframeId = tmp2.iframeId;
  items = [id, iframeId];
  const effect = noop.useEffect(() => {
    FramePoolManagerDefault.registerFrameEntry(id, iframeId);
    FramesActionCreatorsDefault.attachFrameIframe(id, iframeId);
    return () => {
      proxyTicket(c2[12]).detachFrameIframe(id, iframeId);
    };
  }, items);
  const items1 = [id];
  const effect1 = noop.useEffect(
    () => () => {
      proxyTicket(c2[9]).removeFrameEntry(id);
    },
    items1,
  );
  const callback = noop.useCallback(() => {
    _undefined((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.iframeId = proxyTicket(_undefined[11])();
      return obj;
    });
  }, []);
  let syncExternalStore = noop.useSyncExternalStore(proxyTicket(13258).subscribe, () =>
    FramePoolManagerDefault.getWinningTargetState(id),
  );
  const obj3 = { frame, iframeId, onActivityCrash: callback, presentation: null };
  const tmp = iframeId(
    noop.useState(() => ({ iframeId: makeIframeIdDefault(), proxyTicket })),
    2,
  );
  if (syncExternalStore == null) {
    const obj4 = { layoutMode: constants.FOCUSED };
    syncExternalStore = obj4;
  }
  obj3.presentation = syncExternalStore;
  return jsx(proxyTicket(19688), { frame, iframeId, onActivityCrash: callback, presentation: null }, iframeId);
}
const View = fn(17).View;
const FramesConstants = fn(6957);
({ FrameLayoutModes: metroImportDefault, isLaunched: closure_8 } = FramesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let closure_10 = createStyles.createStyles({ pool: { position: "absolute", opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FramePool.tsx");

export default function FramePool() {
  let tmp = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  const tmp2 = useWindowDimensionsDefault();
  items = [FramesStore];
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
