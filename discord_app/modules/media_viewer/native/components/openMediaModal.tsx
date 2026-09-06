// discord_app/modules/media_viewer/native/components/openMediaModal.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";

const require = fn;
let closure_7 = async function _openMediaModal() {
  const items = [
    closure_130_0(closure_130_2[6])(closure_130_2[5], closure_130_2.paths),
    closure_130_0(closure_130_2[6])(closure_130_2[7], closure_130_2.paths),
    closure_130_0(closure_130_2[6])(closure_130_2[8], closure_130_2.paths),
  ];
  closure_129_8 = await Promise.all(items);
  closure_129_9 = closure_130_3(closure_129_8, 3);
  closure_129_10 = closure_129_9[0].setMediaViewerSources;
  const MediaViewerAnalytics = closure_129_9[1].MediaViewerAnalytics;
  const initVideoStateStore = closure_129_9[2].initVideoStateStore;
  !(function getMeasureInWindowFunction(measureInWindow) {
    closure_0 = measureInWindow;
    if (null != measureInWindow) {
      if ("measureInWindow" in measureInWindow) {
        measureInWindow = measureInWindow.measureInWindow;
        let fn = measureInWindow.bind(measureInWindow);
      }
      return fn;
    }
    fn = (fn) => {
      let size = closure_0;
      if (closure_0 == null) {
        size = { x: 0, y: 0, width: closure_2_0(sources[4]).getWindowDimensions().width, height: null };
        const obj2 = closure_2_0(sources[4]);
        size.height = closure_2_0(sources[4]).getWindowDimensions().height;
        const obj3 = closure_2_0(sources[4]);
      }
      fn(size.x, size.y, size.width, size.height, size.resizeMode);
    };
  })(closure_129_0)((x, y, width, height, resizeMode) => {
    if ("action-sheet" === closure_1_6) {
      initialIndex(sources[9])(
        open.isOpen(),
        "An action sheet must be open to open the media modal as an action sheet",
      );
      initialIndex(sources[10]);
      const tmp12 = closure_0(sources[6])(sources[11], sources.paths);
      let obj = {};
      const merged = Object.assign(closure_1_7);
      obj.initialIndex = initialIndex;
      const size = { x, y, width, height, resizeMode };
      obj.originLayout = size;
      obj.onCloseCallback = onCloseCallback;
      obj.disableHapticOnOpen = true;
      obj.openLazy(tmp12, closure_2_6, obj, "stack");
      let tmp24 = initialIndex;
      const tmp3 = initialIndex(sources[9]);
    } else {
      const obj6 = initialIndex(sources[12]);
      const tmp34 = closure_0(sources[6])(sources[13], sources.paths);
      obj = {};
      const merged1 = Object.assign(closure_1_7);
      tmp24 = initialIndex;
      obj.initialIndex = initialIndex;
      const size1 = { x, y, width, height, resizeMode };
      obj.originLayout = size1;
      obj.onCloseCallback = onCloseCallback;
      obj6.pushLazy(tmp34, obj, closure_2_6, { animation: "none" });
    }
    closure_1_10({ sources, initialIndex: tmp24 });
    closure_1_11.markSessionStarted({ channelId, numMediaItems: sources.length, source });
    closure_1_12();
  });
  await "HermesInternal";
  initialIndex = tmp2;
  ({ originViewOrOriginLayout: closure_129_0, initialIndex } = closure_0);
  if (initialIndex === undefined) {
    initialIndex = 0;
  }
  closure_129_1 = initialIndex;
  ({
    initialSources: closure_129_2,
    analyticsSource: closure_129_3,
    channelId: closure_129_4,
    onClose: closure_129_5,
    openAs,
  } = closure_0);
  if (openAs === undefined) {
    openAs = "modal";
  }
  closure_129_6 = openAs;
  closure_129_7 = Object.assign(
    tmp26,
    Object.assign({
      originViewOrOriginLayout: 0,
      initialIndex: 0,
      initialSources: 0,
      analyticsSource: 0,
      channelId: 0,
      onClose: 0,
      openAs: 0,
    }),
  );
  return "PX_16";
};
const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/openMediaModal.tsx");

export const openMediaModal = function openMediaModal() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
