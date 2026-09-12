// discord_app/modules/quests/native/AppStoreOverlay/openAppStoreOverlayMediaModal.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";

const require = fn;
let closure_7 = async function _openAppStoreOverlayMediaModal() {
  const items = [
    closure_130_0(closure_130_2[6])(closure_130_2[5], closure_130_2.paths),
    closure_130_0(closure_130_2[6])(closure_130_2[7], closure_130_2.paths),
    closure_130_0(closure_130_2[6])(closure_130_2[8], closure_130_2.paths),
  ];
  await Promise.all(items);
  closure_129_8 = value;
  closure_129_9 = closure_130_3(closure_129_8, 3);
  closure_129_10 = closure_129_9[0].setMediaViewerSources;
  const MediaViewerAnalytics = closure_129_9[1].MediaViewerAnalytics;
  const initVideoStateStore = closure_129_9[2].initVideoStateStore;
  const obj4 = { text: null, onPress: null };
  const intl = closure_130_0(closure_130_2[10]).intl;
  obj4.text = intl.string(closure_130_0(closure_130_2[10]).t.lwQdjB);
  obj4.onPress = function onPress() {
    if (closure_2_5.isOpen()) {
      let tmpResult = initialIndex(sources[11]);
      tmpResult.hideActionSheet(closure_2_6);
    } else {
      tmpResult = initialIndex(sources[12]);
      tmpResult.popWithKey(closure_2_6);
    }
    closure_1_5();
  };
  const result = closure_130_0(closure_130_2[9]).setMediaModalFooterAction(obj4);
  (function getMeasureInWindowFunction(measureInWindow) {
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
  })(closure_129_0)((x, y, width, height, arg4) => {
    let str = arg4;
    let obj = {};
    const merged = Object.assign(closure_1_7);
    obj.initialIndex = initialIndex;
    const size = { x, y, width, height, resizeMode: null };
    if (arg4 == null) {
      str = "cover";
    }
    size.resizeMode = str;
    obj.originLayout = size;
    obj.onCloseCallback = onCloseCallback;
    obj.disableHapticOnOpen = true;
    obj.disableMediaOverlayFooter = true;
    obj.disableMediaOverlayButton = true;
    obj.shareable = false;
    if (closure_2_5.isOpen()) {
      let tmp3Result = initialIndex(sources[11]);
      tmp3Result.openLazy(closure_0(sources[6])(sources[13], sources.paths), closure_2_6, obj, "stack");
    } else {
      tmp3Result = initialIndex(sources[12]);
      tmp3Result.pushLazy(closure_0(sources[6])(sources[13], sources.paths), obj, closure_2_6, { animation: "none" });
    }
    obj = { sources, initialIndex };
    closure_1_10(obj);
    obj = { channelId, numMediaItems: sources.length, source };
    closure_1_11.markSessionStarted(obj);
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
    onGetGamePress: closure_129_5,
    onClose: closure_129_6,
  } = closure_0);
  closure_129_7 = Object.assign(
    closure_0,
    Object.assign({
      originViewOrOriginLayout: 0,
      initialIndex: 0,
      initialSources: 0,
      analyticsSource: 0,
      channelId: 0,
      onGetGamePress: 0,
      onClose: 0,
    }),
  );
  return "PX_16";
};
const MEDIA_MODAL_KEY = fn(1074).MEDIA_MODAL_KEY;
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayMediaModal.tsx");

export const openAppStoreOverlayMediaModal = function openAppStoreOverlayMediaModal() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
