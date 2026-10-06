// === Module 7944: openMediaModal ===

// Module 7944 (openMediaModal)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;
import size_mod from "module_2" /* 2 */;

let obj = function _openMediaModal() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c2;
    let c3;
    let c4;
    let c5;
    let closure_1;
    let closure_2;
    let initialIndex;
    let open;
    let openAs;
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
    const tmp21 = globalThis;
    const items = [closure_130_0(closure_130_2[6])(closure_130_2[5], closure_130_2.paths), closure_130_0(closure_130_2[6])(closure_130_2[7], closure_130_2.paths), closure_130_0(closure_130_2[6])(closure_130_2[8], closure_130_2.paths)];
    await all(items);
    let closure_8 = value;
    let closure_9 = closure_130_3(closure_8, 3);
    const setMediaViewerSources = closure_9[0].setMediaViewerSources;
    const MediaViewerAnalytics = closure_9[1].MediaViewerAnalytics;
    const initVideoStateStore = closure_9[2].initVideoStateStore;
    !getMeasureInWindowFunction(c0)((x, y, width, height, resizeMode) => {
      let size1;
      let tmp25;
      if ("action-sheet" === closure_1_6) {
        const tmp3 = initialIndex(sources[9]);
        tmp3(open.isOpen(), "An action sheet must be open to open the media modal as an action sheet");
        const openLazy = initialIndex(sources[10]).openLazy;
        const tmp8 = initialIndex(sources[10]);
        obj = { initialIndex, originLayout: size, onCloseCallback, disableHapticOnOpen: true };
        const tmp13 = closure_0(sources[6])(sources[11], sources.paths);
        const merged = Object.assign(closure_1_7);
        size = { x, y, width, height, resizeMode };
        openLazy(tmp13, closure_2_6, obj, "stack");
        tmp25 = initialIndex;
      } else {
        const pushLazy = initialIndex(sources[12]).pushLazy;
        const tmp31 = initialIndex(sources[12]);
        const obj2 = { initialIndex, originLayout: size1, onCloseCallback };
        const tmp36 = closure_0(sources[6])(sources[13], sources.paths);
        const merged1 = Object.assign(closure_1_7);
        tmp25 = initialIndex;
        size1 = { x, y, width, height, resizeMode };
        pushLazy(tmp36, obj2, closure_2_6, { animation: "none" });
      }
      const obj3 = { sources, initialIndex: tmp25 };
      closure_1_10(obj3);
      const obj4 = { channelId, numMediaItems: sources.length, source };
      closure_1_11.markSessionStarted(obj4);
      closure_1_12();
    });
    await "IconComponent";
    initialIndex = tmp;
    ({ originViewOrOriginLayout: c0, initialIndex } = closure_0);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    ({ initialSources: c2, analyticsSource: c3, channelId: c4, onClose: c5, openAs } = closure_0);
    if (openAs === undefined) {
      openAs = "modal";
    }
    let obj4 = {};
    let closure_7 = Object.assign(closure_0, Object.assign({ originViewOrOriginLayout: 0, initialIndex: 0, initialSources: 0, analyticsSource: 0, channelId: 0, onClose: 0, openAs: 0 }));
    return "Reflect";
  });
  return obj(...arguments);
};
const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/openMediaModal.tsx");

export const openMediaModal = function openMediaModal() {
  return obj(...arguments);
};