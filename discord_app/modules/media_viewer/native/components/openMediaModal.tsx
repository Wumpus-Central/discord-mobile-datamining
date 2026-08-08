// discord_app/modules/media_viewer/native/components/openMediaModal.tsx
import _slicedToArray from "_slicedToArray";
import zustandStore from "zustandStore";
import setContent from "setContent";
import { MEDIA_MODAL_KEY } from "ME";

const require = arg1;
function _openMediaModal() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c2;
      let c3;
      let c4;
      let c5;
      let initialIndex;
      let openAs;
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
          return { value: "HermesInternal", done: null };
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
              openAs = undefined;
              let closure_7;
              ({ originViewOrOriginLayout: c0, initialIndex } = callback);
              if (initialIndex === undefined) {
                initialIndex = 0;
              }
              ({ initialSources: c2, analyticsSource: c3, channelId: c4, onClose: c5, openAs } = callback);
              if (openAs === undefined) {
                openAs = "modal";
              }
              closure_7 = Object.assign(tmp27, Object.create(null));
              let closure_8;
              let dependencyMap;
              let setMediaViewerSources;
              let MediaViewerAnalytics;
              let initVideoStateStore;
              v0 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
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
            initVideoStateStore = 3994.initVideoStateStore;
            !(function getMeasureInWindowFunction(c0) {
              let closure_0 = c0;
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
                  obj[2] = c0(outer1_2[4]).getWindowDimensions().width;
                  const obj2 = c0(outer1_2[4]);
                  obj[3] = c0(outer1_2[4]).getWindowDimensions().height;
                  size = obj;
                  const obj3 = c0(outer1_2[4]);
                }
                arg0(size.x, size.y, size.width, size.height, size.resizeMode);
              };
            })(callback)((arg0, arg1, arg2, arg3, arg4) => {
              if ("action-sheet" === openAs) {
                initialIndex(_undefined2[9])(_undefined3.isOpen(), "An action sheet must be open to open the media modal as an action sheet");
                let obj = initialIndex(_undefined2[10]);
                const tmp12 = _undefined(_undefined2[6])(_undefined2[11], _undefined2.paths);
                obj = {};
                const merged = Object.assign(closure_7);
                obj.initialIndex = initialIndex;
                obj = { x: null, y: null, width: null, height: null, resizeMode: null };
                obj[0] = arg0;
                obj[1] = arg1;
                obj[2] = arg2;
                obj[3] = arg3;
                obj[4] = arg4;
                obj.originLayout = obj;
                obj.onCloseCallback = _undefined3;
                obj.disableHapticOnOpen = true;
                obj.openLazy(tmp12, openAs, obj, "stack");
                let tmp24 = initialIndex;
                const tmp3 = initialIndex(_undefined2[9]);
              } else {
                const obj6 = initialIndex(_undefined2[12]);
                const tmp34 = _undefined(_undefined2[6])(_undefined2[13], _undefined2.paths);
                const obj1 = {};
                const merged1 = Object.assign(closure_7);
                tmp24 = initialIndex;
                obj1.initialIndex = initialIndex;
                const obj2 = { x: null, y: null, width: null, height: null, resizeMode: null };
                obj2[0] = arg0;
                obj2[1] = arg1;
                obj2[2] = arg2;
                obj2[3] = arg3;
                obj2[4] = arg4;
                obj1.originLayout = obj2;
                obj1.onCloseCallback = _undefined3;
                obj6.pushLazy(tmp34, obj1, openAs, { animation: "none" });
              }
              setMediaViewerSources({ sources: _undefined2, initialIndex: tmp24 });
              MediaViewerAnalytics.markSessionStarted({ channelId: c4, numMediaItems: _undefined2.length, source: c3 });
              initVideoStateStore();
            });
            c4 = 3;
            return { value: "HermesInternal", done: null };
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
  const _openMediaModal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("setContent").fileFinishedImporting("modules/media_viewer/native/components/openMediaModal.tsx");

export const openMediaModal = function openMediaModal(arg0) {
  const self = this;
  const apply = _openMediaModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};