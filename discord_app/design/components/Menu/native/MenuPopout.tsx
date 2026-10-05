// discord_app/design/components/Menu/native/MenuPopout.tsx
import NativeMenuActionCreatorsDefault from "../../../../modules/native_menu/native/NativeMenuActionCreators.tsx";
import Menu2 from "Menu.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, Fragment: metroRequire } = Fragment);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuPopout.tsx");

export const MenuPopout = function MenuPopout(children) {
  let first;
  let key;
  let menuItems;
  let obj3;
  ({ key, menuItems } = children);
  children = children.children;
  if (menuItems === undefined) {
    menuItems = [];
  }
  const onRequestOpen = children.onRequestOpen;
  const onRequestClose = children.onRequestClose;
  const position = children.position;
  const align = children.align;
  const offset = children.offset;
  const offsetAnimated = children.offsetAnimated;
  key = undefined;
  let animatedRef;
  let isShown;
  let closure_10;
  let onClose;
  let memo;
  let callback1;
  let obj = menuItems(onRequestClose[3]);
  const tmp = menuItems;
  const tmp2 = onRequestClose;
  if (key == null) {
    key = obj.useUID();
  }
  const tmpResult = tmp(tmp2[4]);
  animatedRef = tmpResult.useAnimatedRef();
  const tmp4 = position(align.useState(false), 2);
  isShown = tmp4[0];
  closure_10 = tmp4[1];
  const items = [key, onRequestClose];
  const mapped = menuItems.map((label) => ({ name: label.label, label: label.label }));
  onClose = align.useCallback(() => {
    closure_10(false);
    if (onRequestClose != null) {
      onRequestClose();
    }
    const obj = NativeMenuActionCreatorsDefault;
    obj.hideNativeMenu(key);
  }, items);
  const items1 = [animatedRef, onClose, menuItems, position, align, offset, offsetAnimated];
  memo = align.useMemo(() => {
    let obj = {
      toggleButtonRef: animatedRef,
      onClose,
      position,
      align,
      offset,
      offsetAnimated,
      children: menuItems.map((item, index) => {
        let MenuItem;
        let obj2;
        const obj = { children: offset(MenuItem, obj2) };
        const MenuGroup = menuItems(onRequestClose[7]).MenuGroup;
        obj2 = { showIconFirst: true };
        MenuItem = menuItems(onRequestClose[8]).MenuItem;
        const merged = Object.assign(item);
        return offset(MenuGroup, obj, "chat-context-menu-group-" + index);
      }),
    };
    const Menu = Menu2.Menu;
    return hasOwnProperty(Menu, obj);
  }, items1);
  const items2 = [memo, key, onRequestOpen];
  callback1 = align.useCallback(() => {
    closure_10(true);
    if (onRequestOpen != null) {
      onRequestOpen();
    }
    const obj = NativeMenuActionCreatorsDefault;
    obj.showNativeMenu(key, memo);
  }, items2);
  const items3 = [isShown, onClose, callback1];
  let obj2 = { children: children(obj3, { isShown }) };
  obj3 = {
    ref: animatedRef,
    onPress: align.useCallback(() => {
      if (first) {
        callback();
      } else {
        callback1();
      }
    }, items3),
    accessibilityState: { expanded: isShown },
    accessibilityActions: mapped,
    onAccessibilityAction(arg0) {
      let closure_0 = arg0;
      const found = menuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
      if (found != null) {
        const action = found.action;
        if (action != null) {
          action();
        }
      }
    },
  };
  return offset(offsetAnimated, obj2);
};
