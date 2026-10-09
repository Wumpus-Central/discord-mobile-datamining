// === Module 12908: AppStoreOverlayMediaModalWrapper ===

// Module 12908 (AppStoreOverlayMediaModalWrapper)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import MediaModalSheetWrapperDefault from "MediaModalSheetWrapper" /* 8398 */;
import MediaModalDefault from "MediaModal" /* 8399 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4761 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["onCloseCallback"];
const MEDIA_MODAL_KEY = fn(1085).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  let tmp = dependencyMap;
  const cResult = require("c").c(13);
  if (cResult[0] !== onCloseCallback) {
    _require = onCloseCallback;
    const tmp7 = _objectWithoutProperties(onCloseCallback.onCloseCallback, closure_3);
    cResult[0] = onCloseCallback.onCloseCallback;
    cResult[1] = onCloseCallback.onCloseCallback;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        return () => { ... };
      }
    }
    const items = [];
    cResult[3] = M;
    cResult[4] = items;
    let tmp9 = items;
  } else {
    class M {
      constructor() {
        return () => { ... };
      }
    }
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(M, tmp9);
  if (cResult[5] !== tmp3) {
    class M {
      constructor() {
        return () => { ... };
      }
    }
    cResult[5] = tmp3;
    cResult[6] = tmp12;
  } else {
    class M {
      constructor() {
        return () => { ... };
      }
    }
  }
  if (ActionSheetStore.isOpen()) {
    class M {
      constructor() {
        return () => { ... };
      }
    }
    const obj2 = {};
    const merged = Object.assign(tmp4);
    obj2.onCloseCallback = tmp3;
    tmp = jsx(MediaModalSheetWrapperDefault, {});
    cResult[7] = tmp3;
    cResult[8] = tmp4;
    cResult[9] = tmp;
  } else {
    class M {
      constructor() {
        return () => { ... };
      }
    }
    const obj3 = {};
    const merged1 = Object.assign(tmp4);
    obj3.onClose = tmp12;
    const tmp20 = jsx(MediaModalDefault, {});
    cResult[10] = tmp12;
    cResult[11] = tmp4;
    cResult[12] = tmp20;
  }
  const obj = require("c");
}) : (function AppStoreOverlayMediaModalWrapper(onCloseCallback) {
  const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
  const effect = noop.useEffect(() => () => {
    const result = onCloseCallback(closure_1_2[7]).clearMediaModalFooterAction();
  }, []);
  const items = [onCloseCallback.onCloseCallback];
  const callback = noop.useCallback(() => {
    if (onCloseCallback != null) {
      tmp();
    }
    ModalActionCreatorsDefault.popWithKey(MEDIA_MODAL_KEY);
  }, items);
  if (ActionSheetStore.isOpen()) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.onCloseCallback = onCloseCallback;
    let tmp4Result = jsx(MediaModalSheetWrapperDefault, {});
    const tmp5Result = MediaModalSheetWrapperDefault;
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    obj.onClose = callback;
    tmp4Result = jsx(MediaModalDefault, {});
    const tmp5Result2 = MediaModalDefault;
  }
  return tmp4Result;
});