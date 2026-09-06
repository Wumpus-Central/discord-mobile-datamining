// === Module 14167: ContextMenuContainer ===

// Module 14167 (ContextMenuContainer)
import OverlayViewDefault from "OverlayView" /* 4911 */;
import Dialog from "Dialog" /* 4958 */;
import ContextMenuPopout from "ContextMenuPopout" /* 14168 */;
import noop from "module_19" /* 19 */;

require = fn;
function getItemKey(key) {
  return key.key;
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { overlayView: null, wrapperView: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.zIndex = 99999;
createStyles.overlayView = createStyles;
createStyles.wrapperView = StyleSheet.absoluteFillObject;
let closure_6 = createStyles.createStyles(createStyles);
let closure_7 = [];
function EMPTY_CALLBACK() {

}
function renderItem(arg0, menu, transitionState, cleanUp) {
  return jsx(ContextMenuPopout.ContextMenuPopout, { menu, transitionState, cleanUp }, arg0);
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = function ContextMenuContainer() {
  const tmp = closure_6();
  _require = tmp;
  let obj = require("ContextMenuState");
  const activeContextMenu = obj.useActiveContextMenu();
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
    const KeyboardEvents = closure_0(callback[6]).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
      const ContextMenuStore = closure_0(onDismiss[5]).ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      let ignoreKeyboardHide;
      if (menu != null) {
        ignoreKeyboardHide = menu.ignoreKeyboardHide;
      }
      if (true !== ignoreKeyboardHide) {
        closure_0(onDismiss[5]).hideContextMenu();
        const tmpResult = closure_0(onDismiss[5]);
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
  let ignoreKeyboardHide;
  if (activeContextMenu != null) {
    ignoreKeyboardHide = activeContextMenu.ignoreKeyboardHide;
  }
  requestClose(onDismiss[7])(() => {
    callback();
    return true;
  }, true === ignoreKeyboardHide);
  const items2 = [onDismiss, , ];
  ({ overlayView: arr3[1], wrapperView: arr3[2] } = tmp);
  const callback1 = noop.useCallback((children, arg1) => {
    let obj = { style: closure_0.overlayView, children: null };
    let str = "auto";
    if (0 === arg1.length) {
      str = "none";
    }
    obj = { pointerEvents: str, style: closure_0.wrapperView, children: tmp(React4, obj) };
    obj = { onDismiss, children };
    obj.children = jsx(Dialog.Dialog, { onDismiss, children });
    return jsx(OverlayViewDefault, { onDismiss, children });
  }, items2);
  obj = { wrapChildren: callback1, items: tmp5, renderItem, getItemKey };
  return jsx(require("native").TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
};