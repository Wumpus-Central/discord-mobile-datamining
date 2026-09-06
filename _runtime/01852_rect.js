// === Module 1852: rect ===

// Module 1852 (rect)
import nativeEventEmitter from "nativeEventEmitter" /* 1626 */;
import TEST_ID_KEYBOARD_TOOLBAR from "TEST_ID_KEYBOARD_TOOLBAR" /* 1854 */;
import Background from "Background" /* 1857 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["children", "content", "theme", "doneText", "button", "icon", "showArrows", "onNextCallback", "onPrevCallback", "onDoneCallback", "blur", "opacity", "offset", "enabled", "insets"];
let noop = fn(19);
({ useEffect: metroRequire, useMemo: closure_7, useState: closure_8 } = noop);
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c10 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_11, jsx: closure_12 } = jsxProd);
class KeyboardToolbar {
  constructor(arg0) {
    ({ children, theme } = global);
    if (undefined === theme) {
      tmp = colors;
      tmp2 = closed;
      theme = colors(closed[5]).colors;
    }
    colors = theme;
    doneText = global.doneText;
    str = "Done";
    if (undefined !== doneText) {
      str = doneText;
    }
    ({ button, icon, showArrows } = global);
    tmp3 = undefined === showArrows || showArrows;
    blur = global.blur;
    tmp4 = null;
    ({ onNextCallback, onPrevCallback, onDoneCallback } = global);
    if (undefined !== blur) {
      tmp4 = blur;
    }
    DEFAULT_OPACITY = global.opacity;
    if (undefined === DEFAULT_OPACITY) {
      tmp5 = colors;
      tmp6 = closed;
      DEFAULT_OPACITY = colors(closed[6]).DEFAULT_OPACITY;
    }
    offset = global.offset;
    if (undefined === offset) {
      offset = {};
    }
    closed = offset.closed;
    num = 0;
    if (undefined !== closed) {
      num = closed;
    }
    closed = num;
    opened = offset.opened;
    num2 = 0;
    if (undefined !== opened) {
      num2 = opened;
    }
    opened = num2;
    enabled = global.enabled;
    tmp7 = undefined === enabled || enabled;
    insets = global.insets;
    tmp8 = closure_5(global, opened);
    tmp9 = colors;
    tmp10 = closed;
    obj2 = colors(closed[7]);
    keyboardState = obj2.useKeyboardState((appearance) => appearance.appearance);
    closure_5 = keyboardState;
    tmp12 = insets(closure_8({ current: 0, count: 0 }), 2);
    [tmp13, closure_6] = tmp12;
    tmp14 = 0 === tmp13.current;
    closure_7 = tmp14;
    tmp15 = tmp13.current === tmp13.count - 1;
    closure_8 = tmp15;
    if (button == null) {
      tmp16 = DEFAULT_OPACITY;
      button = DEFAULT_OPACITY(tmp10[8]);
    }
    if (icon == null) {
      tmp17 = DEFAULT_OPACITY;
      icon = DEFAULT_OPACITY(tmp10[9]);
    }
    tmp18 = closure_6(() => {
      const FocusedInputEvents = nativeEventEmitter.FocusedInputEvents;
      return FocusedInputEvents.addListener("focusDidSet", (arg0) => {
        closure_1_6(arg0);
      }).remove;
    }, []);
    items = [, , , ];
    items[0] = keyboardState;
    items[1] = DEFAULT_OPACITY;
    items[2] = theme;
    items[3] = insets;
    tmp19 = closure_7;
    items1 = [];
    items1[0] = insets;
    tmp20 = closure_7(() => {
      const items = [doneText.toolbar, , , ];
      let obj = { backgroundColor: "" + theme[keyboardState].background + DEFAULT_OPACITY };
      items[1] = obj;
      let tmp4 = null;
      if (!TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_HAS_ROUNDED_CORNERS) {
        const rect = insets;
        let left;
        if (insets != null) {
          left = rect.left;
        }
        obj = { paddingLeft: left, paddingRight: null };
        let right;
        if (rect != null) {
          right = rect.right;
        }
        obj.paddingRight = right;
        tmp4 = obj;
      }
      items[2] = tmp4;
      let floating = null;
      if (TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_HAS_ROUNDED_CORNERS) {
        floating = doneText.floating;
      }
      items[3] = floating;
      return items;
    }, items);
    items2 = [, ];
    items2[0] = num;
    items2[1] = num2;
    tmp21 = closure_7(() => {
      const items = [doneText.sticky, ];
      let tmp = null;
      if (TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_HAS_ROUNDED_CORNERS) {
        let rect = insets;
        num = undefined;
        if (insets != null) {
          num = rect.left;
        }
        if (num == null) {
          num = 0;
        }
        rect = { left: num + 16, right: null };
        let num3;
        if (rect != null) {
          num3 = rect.right;
        }
        if (num3 == null) {
          num3 = 0;
        }
        rect.right = num3 + 16;
        tmp = rect;
      }
      items[1] = tmp;
      return items;
    }, items1);
    tmp22 = closure_7(() => ({ closed: num + TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_TOOLBAR_HEIGHT, opened: num2 + TEST_ID_KEYBOARD_TOOLBAR.OPENED_OFFSET }), items2);
    if (children) {
      closure_9 = null;
      closure_10 = null;
      closure_11 = null;
      closure_12 = null;
      closure_13 = null;
      tmp32 = closure_9;
      Children = closure_9.Children;
      item = Children.forEach(children, (type) => {
        if (noop.isValidElement(type)) {
          type = type.type;
          if (type === Background.Background) {
            closure_13 = type;
          } else if (type === tmp(1857).Content) {
            closure_11 = type;
          } else if (type === tmp(1857).Prev) {
            closure_9 = type;
          } else if (type === tmp(1857).Next) {
            closure_10 = type;
          } else if (type === tmp(1857).Done) {
            closure_12 = type;
          }
        }
      });
      tmp36 = closure_9;
      tmp34 = closure_13;
      tmp35 = closure_12;
      if (closure_9) {
        tmp39 = closure_11;
        tmp40 = closure_10;
        obj = { style: null, children: null };
        tmp41 = closure_13;
        obj.style = closure_13.arrows;
        tmp42 = closure_9;
        items3 = [, ];
        items3[0] = closure_9;
        tmp43 = closure_10;
        items3[1] = closure_10;
        obj.children = items3;
        tmp38 = closure_11(closure_10, obj);
      } else {
        tmp37 = closure_10;
        tmp38 = null;
      }
      tmp44 = closure_11;
      if (closure_11 == null) {
        tmp45 = closure_12;
        obj1 = { children: null };
        tmp46 = closure_11;
        obj1.children = closure_11;
        tmp44 = closure_12(tmp9(tmp10[11]).Content, obj1);
      }
      tmp31 = tmp44;
      tmp28Result = tmp35;
      tmp23 = tmp38;
      tmp4 = tmp34;
    } else {
      tmp23 = null;
      if (tmp3) {
        tmp24 = closure_11;
        tmp25 = closure_10;
        obj2 = { style: null, children: null };
        tmp26 = closure_13;
        obj2.style = closure_13.arrows;
        tmp27 = closure_12;
        obj3 = { button: null, icon: null, onPress: null };
        obj3.button = button;
        obj3.icon = icon;
        obj3.onPress = onPrevCallback;
        items4 = [, ];
        items4[0] = closure_12(tmp9(tmp10[11]).Prev, obj3);
        obj4 = { button: null, icon: null, onPress: null };
        obj4.button = button;
        obj4.icon = icon;
        obj4.onPress = onNextCallback;
        items4[1] = closure_12(tmp9(tmp10[11]).Next, obj4);
        obj2.children = items4;
        tmp23 = closure_11(closure_10, obj2);
      }
      tmp28 = closure_12;
      obj5 = { children: null };
      obj5.children = global.content;
      tmp28Result = null;
      tmp29 = closure_12(tmp9(tmp10[11]).Content, obj5);
      if (str) {
        obj6 = { button: null, text: null, onPress: null };
        obj6.button = button;
        obj6.text = str;
        obj6.onPress = onDoneCallback;
        tmp28Result = tmp28(tmp9(tmp10[11]).Done, obj6);
      }
      tmp31 = tmp29;
    }
    items5 = [, , ];
    items5[0] = theme;
    items5[1] = tmp14;
    items5[2] = tmp15;
    tmp19Result = tmp19(() => ({ theme, isPrevDisabled, isNextDisabled }), items5);
    obj7 = { value: tmp19Result, children: null };
    obj8 = { enabled: tmp7, offset: tmp22, style: tmp21, children: null };
    obj9 = {};
    tmp48 = DEFAULT_OPACITY(tmp10[13]);
    merged = Object.assign(tmp8);
    obj9.style = tmp20;
    obj9.testID = tmp9(tmp10[6]).TEST_ID_KEYBOARD_TOOLBAR;
    items6 = [, , , ];
    items6[0] = tmp4;
    items6[1] = tmp23;
    items6[2] = tmp31;
    items6[3] = tmp28Result;
    obj9.children = items6;
    obj8.children = closure_11(closure_10, obj9);
    obj7.children = closure_12(tmp48, obj8);
    return closure_12(tmp9(tmp10[12]).ToolbarContext.Provider, obj7);
  }
}
let obj = { sticky: null, toolbar: null, arrows: null, floating: null };
let rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: fn(1854).KEYBOARD_TOOLBAR_HEIGHT };
obj.sticky = rect;
const size = { position: "absolute", bottom: 0, alignItems: "center", width: "100%", flexDirection: "row", height: fn(1854).KEYBOARD_TOOLBAR_HEIGHT };
obj.toolbar = size;
obj.arrows = { flexDirection: "row", paddingLeft: 8 };
obj.floating = { alignSelf: "center", borderRadius: 20, overflow: "hidden" };
StyleSheet.create(obj);
KeyboardToolbar.Background = fn(1857).Background;
KeyboardToolbar.Content = fn(1857).Content;
KeyboardToolbar.Prev = fn(1857).Prev;
KeyboardToolbar.Next = fn(1857).Next;
KeyboardToolbar.Done = fn(1857).Done;
KeyboardToolbar.Group = fn(1626).RCTKeyboardToolbarGroupView;

export default KeyboardToolbar;
export const DefaultKeyboardToolbarTheme = fn(1853).colors;