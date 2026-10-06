// === Module 10943: openAppStoreOverlayMediaModal ===

// Module 10943 (openAppStoreOverlayMediaModal)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;
import size_mod from "module_2" /* 2 */;

let obj = function _openAppStoreOverlayMediaModal() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let closure_1;
    let closure_2;
    let initialIndex;
    let intl;
    function getMeasureInWindowFunction(c0) {
      closure_0 = c0;
      if (null != c0) {
        let fn;
        if ("measureInWindow" in c0) {
          const measureInWindow = c0.measureInWindow;
          fn = measureInWindow.bind(c0);
        }
        return fn;
      }
      fn = (fn) => {
        let obj2;
        let obj3;
        size = closure_0;
        if (closure_0 == null) {
          const size1 = { x: 0, y: 0, width: obj2.getWindowDimensions().width, height: obj3.getWindowDimensions().height };
          obj2 = closure_2_0(sources[4]);
          size = size1;
          obj3 = closure_2_0(sources[4]);
        }
        fn(size.x, size.y, size.width, size.height, size.resizeMode);
      };
    }
    let closure_0 = arg0;
    const items = [closure_130_0(closure_130_2[6])(closure_130_2[5], closure_130_2.paths), closure_130_0(closure_130_2[6])(closure_130_2[7], closure_130_2.paths), closure_130_0(closure_130_2[6])(closure_130_2[8], closure_130_2.paths)];
    await all(items);
    let closure_8 = value;
    let closure_9 = closure_130_3(closure_8, 3);
    const setMediaViewerSources = closure_9[0].setMediaViewerSources;
    const MediaViewerAnalytics = closure_9[1].MediaViewerAnalytics;
    const initVideoStateStore = closure_9[2].initVideoStateStore;
    const obj7 = {
      text: intl.string(closure_130_0(closure_130_2[10]).t.lwQdjB),
      onPress() {
        if (closure_2_5.isOpen()) {
          const tmpResult = initialIndex(sources[11]);
          tmpResult.hideActionSheet(closure_2_6);
        } else {
          const tmpResult2 = initialIndex(sources[12]);
          tmpResult2.popWithKey(closure_2_6);
        }
        closure_1_5();
      }
    };
    const setMediaModalFooterAction = closure_130_0(closure_130_2[9]).setMediaModalFooterAction;
    const tmp20 = closure_130_0(closure_130_2[9]);
    intl = closure_130_0(closure_130_2[10]).intl;
    const result = setMediaModalFooterAction(obj7);
    getMeasureInWindowFunction(c0)((x, y, width, height, arg4) => {
      let str = arg4;
      obj = { initialIndex, originLayout: size, onCloseCallback, disableHapticOnOpen: true, disableMediaOverlayFooter: true, disableMediaOverlayButton: true, shareable: false };
      const merged = Object.assign(closure_1_7);
      size = { x, y, width, height, resizeMode: str };
      if (arg4 == null) {
        str = "cover";
      }
      if (closure_2_5.isOpen()) {
        const tmp3Result = initialIndex(sources[11]);
        tmp3Result.openLazy(closure_0(sources[6])(sources[13], sources.paths), closure_2_6, obj, "stack");
      } else {
        const tmp3Result2 = initialIndex(sources[12]);
        tmp3Result2.pushLazy(closure_0(sources[6])(sources[13], sources.paths), obj, closure_2_6, { animation: "none" });
      }
      const obj2 = { sources, initialIndex };
      closure_1_10(obj2);
      const obj3 = { channelId, numMediaItems: sources.length, source };
      closure_1_11.markSessionStarted(obj3);
      closure_1_12();
    });
    await "IconComponent";
    initialIndex = tmp;
    ({ originViewOrOriginLayout: c0, initialIndex } = closure_0);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    ({ initialSources: c2, analyticsSource: c3, channelId: c4, onGetGamePress: c5, onClose: c6 } = closure_0);
    let closure_7 = Object.assign(closure_0, Object.assign({ originViewOrOriginLayout: 0, initialIndex: 0, initialSources: 0, analyticsSource: 0, channelId: 0, onGetGamePress: 0, onClose: 0 }));
    return "Reflect";
  });
  return obj(...arguments);
};
const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayMediaModal.tsx");

export const openAppStoreOverlayMediaModal = function openAppStoreOverlayMediaModal() {
  return obj(...arguments);
};