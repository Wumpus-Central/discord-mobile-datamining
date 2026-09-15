// === Module 14265: ContextMenuContainer ===

// Module 14265 (ContextMenuContainer)
import OverlayViewDefault from "OverlayView" /* 4990 */;
import Dialog from "Dialog" /* 5042 */;
import ContextMenuPopout from "ContextMenuPopout" /* 14266 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getItemKey(key) {
  return key.key;
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = { overlayView: null, wrapperView: null };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 99999;
obj2.overlayView = obj3;
obj2.wrapperView = StyleSheet.absoluteFillObject;
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = [];
function EMPTY_CALLBACK() {

}
function renderItem(key, menu, transitionState, cleanUp) {
  return jsx(ContextMenuPopout.ContextMenuPopout, { menu, transitionState, cleanUp }, key);
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = function ContextMenuContainer() {
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
  let obj = require("ContextMenuState");
  const tmp2 = _require;
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
    const obj = { style: closure_0.overlayView, children: null };
    let str = "auto";
    if (0 === arg1.length) {
      str = "none";
    }
    const obj2 = { pointerEvents: str, style: closure_0.wrapperView, children: jsx(Dialog.Dialog, { onDismiss, children }) };
    obj.children = <React4 pointerEvents={str} style={closure_0.wrapperView}>{jsx(Dialog.Dialog, { onDismiss, children })}</React4>;
    return jsx(OverlayViewDefault, { style: closure_0.overlayView, children: null });
  }, items2);
  return jsx(tmp2(onDismiss[10]).TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
};