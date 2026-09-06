// discord_app/design/components/Menu/native/MenuPopout.tsx
import NativeMenuActionCreatorsDefault from "../../../../modules/native_menu/native/NativeMenuActionCreators.tsx";
import Menu from "Menu.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuPopout.tsx");

export const MenuPopout = function MenuPopout(onRequestOpen) {
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
  let isShown;
  closure_10 = undefined;
  let onClose;
  let memo;
  let callback1;
  let obj = menuItems(onRequestClose[3]);
  if (key == null) {
    key = obj.useUID();
  }
  animatedRef = menuItems(onRequestClose[4]).useAnimatedRef();
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
    NativeMenuActionCreatorsDefault.hideNativeMenu(key);
  }, items);
  const items1 = [animatedRef, onClose, menuItems, position, align, offset, offsetAnimated];
  memo = align.useMemo(
    () =>
      hasOwnProperty(Menu.Menu, {
        toggleButtonRef: animatedRef,
        onClose,
        position,
        align,
        offset,
        offsetAnimated,
        children: menuItems.map((item, index) => {
          let obj = { children: null };
          obj = { showIconFirst: true };
          const merged = Object.assign(item);
          obj.children = offset(menuItems(14132).MenuItem, obj);
          return offset(menuItems(14131).MenuGroup, obj, "chat-context-menu-group-" + index);
        }),
      }),
    items1,
  );
  const items2 = [memo, key, onRequestOpen];
  callback1 = align.useCallback(() => {
    closure_10(true);
    if (onRequestOpen != null) {
      onRequestOpen();
    }
    NativeMenuActionCreatorsDefault.showNativeMenu(key, memo);
  }, items2);
  const items3 = [isShown, onClose, callback1];
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
    accessibilityState: { expanded: isShown },
    accessibilityActions: mapped,
    onAccessibilityAction(arg0) {
      const nativeEvent = arg0;
      const found = menuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
      if (found != null) {
        const action = found.action;
        if (action != null) {
          action();
        }
      }
    },
  };
  obj.children = onRequestOpen.children(obj, { isShown });
  return offset(offsetAnimated, obj);
};
