// discord_app/design/components/ContextMenu/native/ContextMenuContainer.native.tsx
import OverlayViewDefault from "../../../void/OverlayView/native/OverlayView.tsx";
import Dialog from "../../Dialog/native/Dialog.native.tsx";
import ContextMenuPopout from "ContextMenuPopout.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function getItemKey(key) {
  return key.key;
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { overlayView: null, wrapperView: null };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 99999;
obj2.overlayView = obj3;
obj2.wrapperView = StyleSheet.absoluteFillObject;
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = [];
function EMPTY_CALLBACK() {}
function renderItem(key, menu, transitionState, cleanUp) {
  return jsx(ContextMenuPopout.ContextMenuPopout, { menu, transitionState, cleanUp }, key);
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(13);
      const tmp2 = closure_6();
      _require = tmp2;
      let obj = require("c");
      const activeContextMenu = require("ContextMenuState").useActiveContextMenu();
      if (cResult[0] !== activeContextMenu) {
        if (null != activeContextMenu) {
          const items = [activeContextMenu];
          let tmp6 = items;
        } else {
          tmp6 = closure_7;
        }
        cResult[0] = activeContextMenu;
        cResult[1] = tmp6;
      } else {
        let requestClose;
        if (activeContextMenu != null) {
          requestClose = activeContextMenu.requestClose;
        }
        if (requestClose == null) {
          requestClose = EMPTY_CALLBACK;
        }
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p() {
            const KeyboardEvents = closure_0(onDismiss[8]).KeyboardEvents;
            closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
              const ContextMenuStore = closure_0(onDismiss[7]).ContextMenuStore;
              const menu = ContextMenuStore.getState().menu;
              let ignoreKeyboardHide;
              if (menu != null) {
                ignoreKeyboardHide = menu.ignoreKeyboardHide;
              }
              if (true !== ignoreKeyboardHide) {
                closure_0(onDismiss[7]).hideContextMenu();
                const tmpResult = closure_0(onDismiss[7]);
              }
            });
            return () => {
              closure_0.remove();
            };
          };
          const items1 = [];
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp12 = items1;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[2];
          tmp12 = cResult[3];
        }
        const effect = noop.useEffect(tmp11, tmp12);
        if (cResult[4] !== requestClose) {
          class C {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
          cResult[4] = requestClose;
          cResult[5] = C;
        } else {
          class C {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        dependencyMap = C;
        if (cResult[6] === C) {
          class C {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        const fn2 = function x(children, arg1) {
          const obj = { style: closure_0.overlayView, children: null };
          let str = "auto";
          if (0 === arg1.length) {
            str = "none";
          }
          const obj2 = {
            pointerEvents: str,
            style: closure_0.wrapperView,
            children: jsx(Dialog.Dialog, { onDismiss, children }),
          };
          obj.children = (
            <React4 pointerEvents={str} style={closure_0.wrapperView}>
              {jsx(Dialog.Dialog, { onDismiss, children })}
            </React4>
          );
          return jsx(OverlayViewDefault, { style: closure_0.overlayView, children: null });
        };
        cResult[6] = C;
        cResult[7] = tmp2.overlayView;
        cResult[8] = tmp2.wrapperView;
        cResult[9] = fn2;
      }
      let obj2 = require("ContextMenuState");
    }
  : () => {
      const tmp = closure_6();
      _require = tmp;
      const activeContextMenu = require("ContextMenuState").useActiveContextMenu();
      if (null != activeContextMenu) {
        const items = [activeContextMenu];
        let tmp5 = items;
      } else {
        tmp5 = closure_7;
      }
      let requestClose;
      if (activeContextMenu != null) {
        requestClose = activeContextMenu.requestClose;
      }
      if (requestClose == null) {
        requestClose = EMPTY_CALLBACK;
      }
      const effect = noop.useEffect(() => {
        const KeyboardEvents = closure_0(callback[8]).KeyboardEvents;
        closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
          const ContextMenuStore = closure_0(onDismiss[7]).ContextMenuStore;
          const menu = ContextMenuStore.getState().menu;
          let ignoreKeyboardHide;
          if (menu != null) {
            ignoreKeyboardHide = menu.ignoreKeyboardHide;
          }
          if (true !== ignoreKeyboardHide) {
            closure_0(onDismiss[7]).hideContextMenu();
            const tmpResult = closure_0(onDismiss[7]);
          }
        });
        return () => {
          closure_0.remove();
        };
      }, []);
      const items1 = [requestClose];
      onDismiss = noop.useCallback(() => {
        requestClose(true);
      }, items1);
      const items2 = [onDismiss, ,];
      ({ overlayView: arr3[1], wrapperView: arr3[2] } = tmp);
      const callback1 = noop.useCallback((children, arg1) => {
        const obj = { style: closure_0.overlayView, children: null };
        let str = "auto";
        if (0 === arg1.length) {
          str = "none";
        }
        const obj2 = {
          pointerEvents: str,
          style: closure_0.wrapperView,
          children: jsx(Dialog.Dialog, { onDismiss, children }),
        };
        obj.children = (
          <React4 pointerEvents={str} style={closure_0.wrapperView}>
            {jsx(Dialog.Dialog, { onDismiss, children })}
          </React4>
        );
        return jsx(OverlayViewDefault, { style: closure_0.overlayView, children: null });
      }, items2);
      return jsx(require("native").TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
    };
