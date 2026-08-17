// discord_app/design/components/ContextMenu/native/ContextMenuContainer.native.tsx
import ContextMenuDivider from "ContextMenuDivider" /* 13532 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
function EMPTY_CALLBACK() {

}
function renderItem(arg0, menu, transitionState, cleanUp) {
  return jsx(ContextMenuDivider.ContextMenuPopout, { menu, transitionState, cleanUp }, arg0);
}
const result = require("set").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

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
    lib = KeyboardEvents.addListener("keyboardDidHide", lib(callback[5]).hideContextMenu);
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
    let obj = { style: lib.overlayView, children: null };
    let str = "auto";
    if (0 === arg1.length) {
      str = "none";
    }
    obj = { pointerEvents: str, style: lib.wrapperView, children: tmp(lib(callback[8]).Dialog, obj) };
    obj = { onDismiss: callback, children };
    obj[1] = closure_1_5(closure_1_4, obj);
    return closure_1_5(requestClose(callback[7]), obj);
  }, items2);
  obj = { wrapChildren: callback1, items: tmp5, renderItem, getItemKey };
  return jsx(_require(callback[9]).TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
};