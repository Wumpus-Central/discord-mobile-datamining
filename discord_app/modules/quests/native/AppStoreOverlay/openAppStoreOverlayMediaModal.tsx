// === Module 10668: _openAppStoreOverlayMediaModal ===

// Module 10668 (_openAppStoreOverlayMediaModal)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "setContent" /* 4090 */;
import { MEDIA_MODAL_KEY } from "ME" /* 676 */;

const require = arg1;
function _openAppStoreOverlayMediaModal() {
  const self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp5;
              initialIndex = tmp2;
              let callback;
              initialIndex = undefined;
              c2 = undefined;
              v0 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              closure_7 = undefined;
              ({ originViewOrOriginLayout: c0, initialIndex } = callback);
              if (initialIndex === undefined) {
                initialIndex = 0;
              }
              ({ initialSources: c2, analyticsSource: c3, channelId: c4, onGetGamePress: c5, onClose: c6 } = callback);
              closure_7 = Object.assign(tmp45, Object.create(null));
              closure_8 = undefined;
              dependencyMap = undefined;
              let setMediaViewerSources;
              let MediaViewerAnalytics;
              let initVideoStateStore;
              v0 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              const items = [callback(c2[6])(c2[5], c2.paths), callback(c2[6])(c2[7], c2.paths), callback(c2[6])(c2[8], c2.paths)];
              v0 = 2;
              c4 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = Promise.all(items);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_8 = arg1;
            dependencyMap = v0(closure_8, 3);
            setMediaViewerSources = 32.setMediaViewerSources;
            MediaViewerAnalytics = 5.MediaViewerAnalytics;
            initVideoStateStore = 4090.initVideoStateStore;
            const obj4 = { text: null, onPress: null };
            const intl = callback(c2[10]).intl;
            obj4[0] = intl.string(callback(c2[10]).t.lwQdjB);
            obj4[1] = c5;
            const result = callback(c2[9]).setMediaModalFooterAction(obj4);
            (function getMeasureInWindowFunction(c0) {
              closure_0 = c0;
              if (null != c0) {
                if ("measureInWindow" in c0) {
                  const measureInWindow = c0.measureInWindow;
                  let fn = measureInWindow.bind(c0);
                }
                return fn;
              }
              fn = (arg0) => {
                let size = c0;
                if (c0 == null) {
                  const obj = { x: 0, y: 0, width: null, height: null };
                  obj[2] = c0(closure_1_2[4]).getWindowDimensions().width;
                  const obj2 = c0(closure_1_2[4]);
                  obj[3] = c0(closure_1_2[4]).getWindowDimensions().height;
                  size = obj;
                  const obj3 = c0(closure_1_2[4]);
                }
                arg0(size.x, size.y, size.width, size.height, size.resizeMode);
              };
            })(callback)((arg0, arg1, width, height, resizeMode) => {
              initialIndex(_undefined2[11])(_undefined3.isOpen(), "An action sheet must be open to open the media modal as an action sheet");
              let obj = initialIndex(_undefined2[12]);
              const tmp = initialIndex(_undefined2[11]);
              obj = {};
              const merged = Object.assign(closure_7);
              obj.initialIndex = initialIndex;
              obj = { x: arg0, y: arg1, width, height, resizeMode };
              obj.originLayout = obj;
              obj.onCloseCallback = c6;
              obj.disableHapticOnOpen = true;
              obj.openLazy(_undefined(_undefined2[6])(_undefined2[13], _undefined2.paths), c6, obj, "stack");
              setMediaViewerSources({ sources: _undefined2, initialIndex });
              MediaViewerAnalytics.markSessionStarted({ channelId: c4, numMediaItems: _undefined2.length, source: c3 });
              initVideoStateStore();
            });
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp8) {
          c4 = tmp;
          throw tmp8;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayMediaModal.tsx");

export const openAppStoreOverlayMediaModal = function openAppStoreOverlayMediaModal(arg0) {
  const self = this;
  const apply = _openAppStoreOverlayMediaModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};