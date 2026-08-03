import _slicedToArray from "_slicedToArray";
import noop from "noop";
import jsxProd from "jsxProd";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, Fragment: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Menu/native/MenuPopout.tsx");

export const MenuPopout = function MenuPopout(onRequestOpen) {
  let key;
  let menuItems;
  ({ key, menuItems } = onRequestOpen);
  if (menuItems === undefined) {
    menuItems = [];
  }
  onRequestOpen = onRequestOpen.onRequestOpen;
  const onRequestClose = onRequestOpen.onRequestClose;
  const position = onRequestOpen.position;
  const align = onRequestOpen.align;
  const offset = onRequestOpen.offset;
  const offsetAnimated = onRequestOpen.offsetAnimated;
  key = undefined;
  let animatedRef;
  let first;
  let closure_10;
  let callback;
  let memo;
  let callback1;
  let obj = menuItems(onRequestClose[3]);
  if (key == null) {
    key = obj.useUID();
  }
  animatedRef = menuItems(onRequestClose[4]).useAnimatedRef();
  const tmp4 = position(align.useState(false), 2);
  first = tmp4[0];
  closure_10 = tmp4[1];
  const items = [key, onRequestClose];
  const mapped = menuItems.map((label) => ({ name: label.label, label: label.label }));
  callback = align.useCallback(() => {
    callback(false);
    if (onRequestClose != null) {
      onRequestClose();
    }
    onRequestOpen(onRequestClose[5]).hideNativeMenu(key);
  }, items);
  const items1 = [animatedRef, callback, menuItems, position, align, offset, offsetAnimated];
  memo = align.useMemo(() => {
    let obj = { toggleButtonRef: animatedRef, onClose: callback, position, align, offset, offsetAnimated, children: null };
    obj[6] = menuItems.map((arg0, arg1) => {
      let obj = { children: null };
      obj = { showIconFirst: true };
      const merged = Object.assign(arg0);
      obj[0] = callback2(callback(13194).MenuItem, obj);
      return callback2(callback(13193).MenuGroup, obj, "chat-context-menu-group-" + arg1);
    });
    return offset(menuItems(onRequestClose[6]).Menu, obj);
  }, items1);
  const items2 = [memo, key, onRequestOpen];
  callback1 = align.useCallback(() => {
    callback(true);
    if (onRequestOpen != null) {
      onRequestOpen();
    }
    onRequestOpen(onRequestClose[5]).showNativeMenu(key, memo);
  }, items2);
  const items3 = [first, callback, callback1];
  obj = { children: null };
  obj = {
    ref: animatedRef,
    onPress: align.useCallback(() => {
      if (first) {
        callback();
      } else {
        callback1();
      }
    }, items3),
    accessibilityState: { expanded: first },
    accessibilityActions: mapped,
    onAccessibilityAction(arg0) {
      const menuItems = arg0;
      const found = menuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
      if (found != null) {
        const action = found.action;
        if (action != null) {
          action();
        }
      }
    }
  };
  obj[0] = onRequestOpen.children(obj, { isShown: first });
  return offset(offsetAnimated, obj);
};