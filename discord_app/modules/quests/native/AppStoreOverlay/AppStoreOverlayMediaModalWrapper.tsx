// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import MediaModalSheetWrapperDefault from "../../../media_viewer/native/components/MediaModalSheetWrapper.tsx";
import MediaModalDefault from "../../../media_viewer/native/components/MediaModal.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["onCloseCallback"];
const MEDIA_MODAL_KEY = fn(1085).MEDIA_MODAL_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onCloseCallback) => {
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
        const fn = function f() {
          return () => {
            const result = closure_1_0(closure_1_2[7]).clearMediaModalFooterAction();
          };
        };
        const items = [];
        cResult[3] = fn;
        cResult[4] = items;
        let tmp9 = items;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[5] !== tmp3) {
        const fn2 = function v() {
          if (closure_0 != null) {
            tmp();
          }
          ModalActionCreatorsDefault.popWithKey(MEDIA_MODAL_KEY);
        };
        cResult[5] = tmp3;
        cResult[6] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[6];
      }
      if (ActionSheetStore.isOpen()) {
        if (cResult[7] === tmp3) {
        }
        const obj2 = {};
        const merged = Object.assign(tmp4);
        obj2.onCloseCallback = tmp3;
        tmp = jsx(MediaModalSheetWrapperDefault, {});
        cResult[7] = tmp3;
        cResult[8] = tmp4;
        cResult[9] = tmp;
      } else {
        if (cResult[10] === tmp11) {
          if (cResult[11] === tmp4) {
            let tmp12 = cResult[12];
          }
          return tmp12;
        }
        const obj3 = {};
        const merged1 = Object.assign(tmp4);
        obj3.onClose = tmp11;
        const tmp19 = jsx(MediaModalDefault, {});
        cResult[10] = tmp11;
        cResult[11] = tmp4;
        cResult[12] = tmp19;
        tmp12 = tmp19;
      }
      const obj = require("c");
    }
  : (onCloseCallback) => {
      const merged = Object.assign(onCloseCallback, Object.assign({ onCloseCallback: 0 }));
      const effect = noop.useEffect(
        () => () => {
          const result = onCloseCallback(closure_1_2[7]).clearMediaModalFooterAction();
        },
        [],
      );
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
    };
