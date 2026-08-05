// discord_app/design/components/ContextMenu/native/ContextMenuContainer.native.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { ContextMenuDivider } from "ContextMenuPopout.native.tsx";

let StyleSheet;
let c4;
let require = arg1;
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
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_7 = [];
function EMPTY_CALLBACK() {

}
function renderItem(arg0, menu, transitionState, cleanUp) {
  return jsx(ContextMenuDivider /* ContextMenuDivider */.ContextMenuPopout, { menu, transitionState, cleanUp }, arg0);
}
const result = require("jsxProd").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = function ContextMenuContainer() {
  let tmp = createCacheKey();
  const require = tmp;
  let obj = require(callback[5]);
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
    const KeyboardEvents = tmp(callback[6]).KeyboardEvents;
    tmp = KeyboardEvents.addListener("keyboardDidHide", tmp(callback[5]).hideContextMenu);
    return () => {
      closure_0.remove();
    };
  }, []);
  const items1 = [requestClose];
  callback = React.useCallback(() => {
    requestClose(true);
  }, items1);
  const items2 = [callback, , ];
  ({ overlayView: arr3[1], wrapperView: arr3[2] } = tmp);
  const callback1 = React.useCallback((children) => {
    let obj = { style: tmp.overlayView, children: null };
    let str = "auto";
    if (0 === arg1.length) {
      str = "none";
    }
    obj = { pointerEvents: str, style: outer1_5.wrapperView, children: tmp(tmp(callback[8]).Dialog, obj) };
    obj = { onDismiss: callback, children };
    obj[1] = outer1_5(outer1_4, obj);
    return outer1_5(requestClose(callback[7]), obj);
  }, items2);
  obj = { wrapChildren: callback1, items: tmp5, renderItem, getItemKey };
  return jsx(require(callback[9]).TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
};