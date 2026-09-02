// === Module 1868: KeyboardToolbar ===

// Module 1868 (KeyboardToolbar)
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import noop from "noop" /* 19 */;
import closure_9 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let closure_3 = ["children", "content", "theme", "doneText", "button", "icon", "showArrows", "onNextCallback", "onPrevCallback", "onDoneCallback", "blur", "opacity", "offset", "enabled", "insets"];
({ useEffect: closure_6, useMemo: error, useState: closure_8 } = noop);
({ StyleSheet, View: c10 } = get_ActivityIndicator);
({ jsxs: unpackModuleId, jsx: closure_12 } = jsxProd);
class KeyboardToolbar {
  constructor(arg0) {
    ({ children, theme } = global);
    if (undefined === theme) {
      tmp = colors;
      tmp2 = closed;
      theme = require("colors").colors;
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
      DEFAULT_OPACITY = require("TEST_ID_KEYBOARD_TOOLBAR").DEFAULT_OPACITY;
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
    obj2 = require("useResizeMode");
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
      button = require("disabled");
    }
    if (icon == null) {
      tmp17 = DEFAULT_OPACITY;
      icon = require("items");
    }
    tmp18 = closure_6(() => {
      const FocusedInputEvents = theme(num[10]).FocusedInputEvents;
      return FocusedInputEvents.addListener("focusDidSet", (arg0) => {
        callback(arg0);
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
      const items = [_null2.toolbar, , , ];
      let obj = { backgroundColor: "" + theme[keyboardState].background + DEFAULT_OPACITY };
      items[1] = obj;
      let tmp4 = null;
      if (!theme(num[6]).KEYBOARD_HAS_ROUNDED_CORNERS) {
        const rect = insets;
        let left;
        if (insets != null) {
          left = rect.left;
        }
        obj = { paddingLeft: null, paddingRight: null };
        obj[0] = left;
        let right;
        if (rect != null) {
          right = rect.right;
        }
        obj[1] = right;
        tmp4 = obj;
      }
      items[2] = tmp4;
      let floating = null;
      if (theme(num[6]).KEYBOARD_HAS_ROUNDED_CORNERS) {
        floating = _null2.floating;
      }
      items[3] = floating;
      return items;
    }, items);
    items2 = [, ];
    items2[0] = num;
    items2[1] = num2;
    tmp21 = closure_7(() => {
      const items = [_null2.sticky, ];
      let tmp = null;
      if (theme(num[6]).KEYBOARD_HAS_ROUNDED_CORNERS) {
        const rect = insets;
        num = undefined;
        if (insets != null) {
          num = rect.left;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { left: null, right: null };
        obj[0] = num + 16;
        let num3;
        if (rect != null) {
          num3 = rect.right;
        }
        if (num3 == null) {
          num3 = 0;
        }
        obj[1] = num3 + 16;
        tmp = obj;
      }
      items[1] = tmp;
      return items;
    }, items1);
    tmp22 = closure_7(() => ({ closed: num + theme(num[6]).KEYBOARD_TOOLBAR_HEIGHT, opened: num2 + theme(num[6]).OPENED_OFFSET }), items2);
    if (children) {
      c9 = null;
      c10 = null;
      c11 = null;
      c12 = null;
      c13 = null;
      tmp32 = c9;
      Children = c9.Children;
      item = Children.forEach(children, (type) => {
        if (_null.isValidElement(type)) {
          type = type.type;
          if (type === theme(num[11]).Background) {
            closure_13 = type;
          } else if (type === tmp(tmp2[11]).Content) {
            closure_11 = type;
          } else if (type === tmp(tmp2[11]).Prev) {
            closure_9 = type;
          } else if (type === tmp(tmp2[11]).Next) {
            closure_10 = type;
          } else if (type === tmp(tmp2[11]).Done) {
            closure_12 = type;
          }
        }
      });
      tmp36 = c9;
      tmp34 = c13;
      tmp35 = c12;
      if (c9) {
        tmp39 = c11;
        tmp40 = c10;
        obj = { style: null, children: null };
        tmp41 = c13;
        obj[0] = c13.arrows;
        tmp42 = c9;
        items3 = [, ];
        items3[0] = c9;
        tmp43 = c10;
        items3[1] = c10;
        obj[1] = items3;
        tmp38 = c11(c10, obj);
      } else {
        tmp37 = c10;
        tmp38 = null;
      }
      tmp44 = c11;
      if (c11 == null) {
        tmp45 = c12;
        obj1 = { children: null };
        tmp46 = c11;
        obj1[0] = c11;
        tmp44 = c12(require("Background").Content, obj1);
      }
      tmp31 = tmp44;
      tmp28Result = tmp35;
      tmp23 = tmp38;
      tmp4 = tmp34;
    } else {
      tmp23 = null;
      if (tmp3) {
        tmp24 = c11;
        tmp25 = c10;
        obj2 = { style: null, children: null };
        tmp26 = c13;
        obj2[0] = c13.arrows;
        tmp27 = c12;
        obj3 = { button: null, icon: null, onPress: null };
        obj3[0] = button;
        obj3[1] = icon;
        obj3[2] = onPrevCallback;
        items4 = [, ];
        items4[0] = c12(require("Background").Prev, obj3);
        obj4 = { button: null, icon: null, onPress: null };
        obj4[0] = button;
        obj4[1] = icon;
        obj4[2] = onNextCallback;
        items4[1] = c12(require("Background").Next, obj4);
        obj2[1] = items4;
        tmp23 = c11(c10, obj2);
      }
      tmp28 = c12;
      obj5 = { children: null };
      obj5[0] = global.content;
      tmp28Result = null;
      tmp29 = c12(require("Background").Content, obj5);
      if (str) {
        obj6 = { button: null, text: null, onPress: null };
        obj6[0] = button;
        obj6[1] = str;
        obj6[2] = onDoneCallback;
        tmp28Result = tmp28(require("Background").Done, obj6);
      }
      tmp31 = tmp29;
    }
    items5 = [, , ];
    items5[0] = theme;
    items5[1] = tmp14;
    items5[2] = tmp15;
    tmp19Result = tmp19(() => ({ theme, isPrevDisabled: closure_7, isNextDisabled: closure_8 }), items5);
    obj7 = { value: tmp19Result, children: null };
    obj8 = { enabled: tmp7, offset: tmp22, style: tmp21, children: null };
    obj9 = {};
    tmp48 = require("forwardRef");
    merged = Object.assign(tmp8);
    obj9.style = tmp20;
    obj9.testID = require("TEST_ID_KEYBOARD_TOOLBAR").TEST_ID_KEYBOARD_TOOLBAR;
    items6 = [, , , ];
    items6[0] = tmp4;
    items6[1] = tmp23;
    items6[2] = tmp31;
    items6[3] = tmp28Result;
    obj9.children = items6;
    obj8[3] = c11(c10, obj9);
    obj7[1] = c12(tmp48, obj8);
    return c12(require("context").ToolbarContext.Provider, obj7);
  }
}
let obj = { sticky: null, toolbar: null, arrows: null, floating: null };
obj = { position: "absolute", left: 0, right: 0, bottom: 0, height: require("TEST_ID_KEYBOARD_TOOLBAR").KEYBOARD_TOOLBAR_HEIGHT };
obj[0] = obj;
obj = { position: "absolute", bottom: 0, alignItems: "center", width: "100%", flexDirection: "row", height: require("TEST_ID_KEYBOARD_TOOLBAR").KEYBOARD_TOOLBAR_HEIGHT };
obj[1] = obj;
obj[2] = { flexDirection: "row", paddingLeft: 8 };
obj[3] = { alignSelf: "center", borderRadius: 20, overflow: "hidden" };
const styles = StyleSheet.create(obj);
KeyboardToolbar.Background = require("Background").Background;
KeyboardToolbar.Content = require("Background").Content;
KeyboardToolbar.Prev = require("Background").Prev;
KeyboardToolbar.Next = require("Background").Next;
KeyboardToolbar.Done = require("Background").Done;
KeyboardToolbar.Group = require("nativeEventEmitter").RCTKeyboardToolbarGroupView;

export default KeyboardToolbar;
export const DefaultKeyboardToolbarTheme = require("colors").colors;