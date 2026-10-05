// _runtime/01859_KeyboardToolbar.js
import KeyboardControllerNative from "01633_KeyboardControllerNative.js";
import react_native from "01860_react-native.js";
import TEST_ID_KEYBOARD_TOOLBAR from "01861_TEST_ID_KEYBOARD_TOOLBAR.js";
import Background from "01864_Background.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react_mod from "00019_react.js";
import react_native2 from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";

let c11, c9, type;

let StyleSheet;
let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let rect;
let size;
let unpackModuleId;
let closure_3 = [
  "children",
  "content",
  "theme",
  "doneText",
  "button",
  "icon",
  "showArrows",
  "onNextCallback",
  "onPrevCallback",
  "onDoneCallback",
  "blur",
  "opacity",
  "offset",
  "enabled",
  "insets",
];
let react = react_mod;
({ useEffect: metroRequire, useMemo: metroImportDefault, useState: metroImportAll } = react);
react = react_mod;
({ StyleSheet, View: c10 } = react_native2);
({ jsxs: unpackModuleId, jsx: closure_12 } = Fragment);
class KeyboardToolbar {
  constructor(content) {
    let _null;
    let button;
    let c10;
    let c12;
    let c13;
    let closure_6;
    let icon;
    let isNextDisabled;
    let items3;
    let items4;
    let items6;
    let keyboardState;
    let num;
    let obj10;
    let obj11;
    let onDoneCallback;
    let onNextCallback;
    let onPrevCallback;
    let showArrows;
    let theme;
    let tmp13;
    let tmp23;
    let tmp28Result;
    let tmp31;
    let tmp48;
    ({ children, theme } = content);
    content = content.content;
    if (undefined === theme) {
      let tmp = theme;
      theme = theme(num[5]).colors;
    }
    const doneText = content.doneText;
    let str = "Done";
    if (undefined !== doneText) {
      str = doneText;
    }
    ({ button, icon, showArrows } = content);
    const blur = content.blur;
    let tmp4 = null;
    const tmp3 = undefined === showArrows || showArrows;
    ({ onNextCallback, onPrevCallback, onDoneCallback } = content);
    if (undefined !== blur) {
      tmp4 = blur;
    }
    let DEFAULT_OPACITY = content.opacity;
    if (undefined === DEFAULT_OPACITY) {
      DEFAULT_OPACITY = theme(num[6]).DEFAULT_OPACITY;
    }
    let offset = content.offset;
    if (undefined === offset) {
      offset = {};
    }
    const closed = offset.closed;
    num = 0;
    if (undefined !== closed) {
      num = closed;
    }
    const opened = offset.opened;
    let num2 = 0;
    if (undefined !== opened) {
      num2 = opened;
    }
    const enabled = content.enabled;
    const insets = content.insets;
    const tmp7 = undefined === enabled || enabled;
    const tmp8 = keyboardState(content, num2);
    let obj2 = theme(num[7]);
    keyboardState = obj2.useKeyboardState((appearance) => appearance.appearance);
    [tmp13, closure_6] = insets(isNextDisabled({ current: 0, count: 0 }), 2);
    const isPrevDisabled = tmp14;
    insets(isNextDisabled({ current: 0, count: 0 }), 2);
    isNextDisabled = tmp15;
    if (button == null) {
      button = DEFAULT_OPACITY(tmp10[8]);
    }
    if (icon == null) {
      icon = DEFAULT_OPACITY(tmp10[9]);
    }
    closure_6(() => {
      const FocusedInputEvents = KeyboardControllerNative.FocusedInputEvents;
      return FocusedInputEvents.addListener("focusDidSet", (arg0) => {
        closure_1_6(arg0);
      }).remove;
    }, []);
    let items = [keyboardState, DEFAULT_OPACITY, theme, insets];
    const items1 = [insets];
    const items2 = [num, num2];
    const tmp20 = isPrevDisabled(() => {
      let right;
      const items = [_null.toolbar, { backgroundColor: "" + theme[keyboardState].background + DEFAULT_OPACITY }, ,];
      let tmp4 = null;
      ({ backgroundColor: "" + theme[keyboardState].background + DEFAULT_OPACITY });
      if (!TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_HAS_ROUNDED_CORNERS) {
        const rect = insets;
        let left;
        if (insets != null) {
          left = rect.left;
        }
        const obj2 = { paddingLeft: left, paddingRight: right };
        right = undefined;
        if (rect != null) {
          right = rect.right;
        }
        tmp4 = obj2;
      }
      items[2] = tmp4;
      let floating = null;
      if (TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_HAS_ROUNDED_CORNERS) {
        floating = _null.floating;
      }
      items[3] = floating;
      return items;
    }, items);
    const tmp21 = isPrevDisabled(() => {
      let num3;
      const items = [_null.sticky];
      let tmp = null;
      if (TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_HAS_ROUNDED_CORNERS) {
        const rect = insets;
        num = undefined;
        if (insets != null) {
          num = rect.left;
        }
        if (num == null) {
          num = 0;
        }
        const rect1 = { left: num + 16, right: num3 + 16 };
        num3 = undefined;
        if (rect != null) {
          num3 = rect.right;
        }
        if (num3 == null) {
          num3 = 0;
        }
        tmp = rect1;
      }
      items[1] = tmp;
      return items;
    }, items1);
    const tmp19 = isPrevDisabled;
    const tmp22 = isPrevDisabled(() => {
      const obj = {
        closed: num + TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_TOOLBAR_HEIGHT,
        opened: num2 + TEST_ID_KEYBOARD_TOOLBAR.OPENED_OFFSET,
      };
      return obj;
    }, items2);
    if (children) {
      let tmp38;
      react = null;
      c10 = null;
      children = null;
      c12 = null;
      c13 = null;
      const Children = react.Children;
      const item = Children.forEach(children, (type) => {
        if (react.isValidElement(type)) {
          type = type.type;
          if (type === Background.Background) {
            let c13 = type;
          } else if (type === Background.Content) {
            c11 = type;
          } else if (type === Background.Prev) {
            c9 = type;
          } else if (type === Background.Next) {
            c10 = type;
          } else if (type === Background.Done) {
            c12 = type;
          }
        }
      });
      const tmp34 = c13;
      const tmp35 = c12;
      if (react) {
        let obj = { style: c13.arrows, children: items3 };
        items3 = [react, c10];
        tmp38 = children(c10, obj);
      } else {
        tmp38 = null;
      }
      let tmp44 = children;
      if (children == null) {
        const obj3 = { children };
        tmp44 = c12(tmp9(tmp10[11]).Content, obj3);
      }
      tmp31 = tmp44;
      tmp28Result = tmp35;
      tmp23 = tmp38;
      tmp4 = tmp34;
    } else {
      tmp23 = null;
      if (tmp3) {
        const obj4 = { style: c13.arrows, children: items4 };
        const obj5 = { button, icon, onPress: onPrevCallback };
        items4 = [c12(theme(num[11]).Prev, obj5)];
        const obj6 = { button, icon, onPress: onNextCallback };
        items4[1] = c12(theme(num[11]).Next, obj6);
        tmp23 = children(c10, obj4);
      }
      tmp28Result = null;
      const obj7 = { children: content };
      const tmp28 = c12;
      const tmp29 = c12(theme(num[11]).Content, obj7);
      if (str) {
        const obj8 = { button, text: str, onPress: onDoneCallback };
        tmp28Result = tmp28(tmp9(tmp10[11]).Done, obj8);
      }
      tmp31 = tmp29;
    }
    const items5 = [theme, 0 === tmp13.current, tmp13.current === tmp13.count - 1];
    const obj9 = {
      value: tmp19(() => ({ theme, isPrevDisabled, isNextDisabled }), items5),
      children: c12(tmp48, obj10),
    };
    const Provider = tmp9(tmp10[12]).ToolbarContext.Provider;
    obj10 = { enabled: tmp7, offset: tmp22, style: tmp21, children: children(c10, obj11) };
    obj11 = { style: tmp20, testID: theme(num[6]).TEST_ID_KEYBOARD_TOOLBAR, children: items6 };
    tmp48 = DEFAULT_OPACITY(num[13]);
    const merged = Object.assign(tmp8);
    items6 = [tmp4, tmp23, tmp31, tmp28Result];
    return c12(Provider, obj9);
  }
}
let obj = {
  sticky: rect,
  toolbar: size,
  arrows: { flexDirection: "row", paddingLeft: 8 },
  floating: { alignSelf: "center", borderRadius: 20, overflow: "hidden" },
};
rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_TOOLBAR_HEIGHT };
const create = StyleSheet.create;
size = {
  position: "absolute",
  bottom: 0,
  alignItems: "center",
  width: "100%",
  flexDirection: "row",
  height: TEST_ID_KEYBOARD_TOOLBAR.KEYBOARD_TOOLBAR_HEIGHT,
};
let closure_13 = create(obj);
KeyboardToolbar.Background = Background.Background;
KeyboardToolbar.Content = Background.Content;
KeyboardToolbar.Prev = Background.Prev;
KeyboardToolbar.Next = Background.Next;
KeyboardToolbar.Done = Background.Done;
KeyboardToolbar.Group = KeyboardControllerNative.RCTKeyboardToolbarGroupView;

export default KeyboardToolbar;
export const DefaultKeyboardToolbarTheme = react_native.colors;
