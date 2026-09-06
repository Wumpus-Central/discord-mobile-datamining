// discord_app/design/components/ContextMenu/native/ContextMenuContainer.native.tsx
import ContextMenuDivider from "ContextMenuPopout.native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = arg1;
function getItemKey(key) {
  return key.key;
}
({ StyleSheet, View: c4 } = get_ActivityIndicator);
createCacheKey = { overlayView: null, wrapperView: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.zIndex = 99999;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = StyleSheet.absoluteFillObject;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_7 = [];
function EMPTY_CALLBACK() {}
function renderItem(arg0, menu, transitionState, cleanUp) {
  return jsx(ContextMenuDivider.ContextMenuPopout, { menu, transitionState, cleanUp }, arg0);
}
const result = require("set").fileFinishedImporting(
  "design/components/ContextMenu/native/ContextMenuContainer.native.tsx",
);

export const ContextMenuContainer = function ContextMenuContainer() {
  const tmp = callback();
  const _require = tmp;
  let obj = _require(callback[5]);
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
  const effect = React.useEffect(() => {
    const KeyboardEvents = lib(callback[6]).KeyboardEvents;
    lib = KeyboardEvents.addListener("keyboardDidHide", () => {
      const ContextMenuStore = lib(table[5]).ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      let ignoreKeyboardHide;
      if (menu != null) {
        ignoreKeyboardHide = menu.ignoreKeyboardHide;
      }
      if (true !== ignoreKeyboardHide) {
        lib(table[5]).hideContextMenu();
        const tmpResult = lib(table[5]);
      }
    });
    return () => {
      lib.remove();
    };
  }, []);
  const items1 = [requestClose];
  callback = React.useCallback(() => {
    requestClose(true);
  }, items1);
  let ignoreKeyboardHide;
  if (activeContextMenu != null) {
    ignoreKeyboardHide = activeContextMenu.ignoreKeyboardHide;
  }
  requestClose(callback[7])(() => {
    callback();
    return true;
  }, true === ignoreKeyboardHide);
  const items2 = [callback, ,];
  ({ overlayView: arr3[1], wrapperView: arr3[2] } = tmp);
  const callback1 = React.useCallback((children) => {
    let obj = { style: lib.overlayView, children: null };
    let str = "auto";
    if (0 === arg1.length) {
      str = "none";
    }
    obj = { pointerEvents: str, style: lib.wrapperView, children: tmp(lib(callback[9]).Dialog, obj) };
    obj = { onDismiss: callback, children };
    obj[1] = closure_1_5(closure_1_4, obj);
    return closure_1_5(requestClose(callback[8]), obj);
  }, items2);
  obj = { wrapChildren: callback1, items: tmp5, renderItem, getItemKey };
  return jsx(_require(callback[10]).TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
};
