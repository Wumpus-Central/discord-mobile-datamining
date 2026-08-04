// _runtime/00290_Button.js
import "noop";
import { jsx } from "jsxProd";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

class Button {
  constructor(arg0) {
    merged = Object.assign(global, Object.create(null));
    ({ accessibilityState, aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: tmp6, aria-selected: tmp7, importantForAccessibility, color, title } = merged);
    tmp8 = closure_4;
    items = [];
    items[0] = closure_4.button;
    items1 = [];
    items1[0] = closure_4.text;
    ({ accessibilityLabel, onPress, touchSoundDisabled, hasTVPreferredFocus, nextFocusDown, nextFocusForward, nextFocusLeft, nextFocusRight, nextFocusUp, testID, accessible, accessibilityActions, accessibilityHint, accessibilityLanguage, onAccessibilityAction } = merged);
    if (color) {
      obj = { backgroundColor: null };
      obj[0] = color;
      arr = items.push(obj);
    }
    if (tmp2 == null) {
      busy = undefined;
      if (accessibilityState != null) {
        busy = accessibilityState.busy;
      }
      tmp2 = busy;
    }
    obj = { busy: tmp2, checked: null, disabled: null, expanded: null, selected: null };
    if (tmp3 == null) {
      checked = undefined;
      if (accessibilityState != null) {
        checked = accessibilityState.checked;
      }
      tmp3 = checked;
    }
    obj[1] = tmp3;
    if (tmp4 == null) {
      disabled = undefined;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
      tmp4 = disabled;
    }
    obj[2] = tmp4;
    if (tmp5 == null) {
      expanded = undefined;
      if (accessibilityState != null) {
        expanded = accessibilityState.expanded;
      }
      tmp5 = expanded;
    }
    obj[3] = tmp5;
    if (tmp7 == null) {
      selected = undefined;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
      tmp7 = selected;
    }
    obj[4] = tmp7;
    tmp15 = null != merged.disabled ? merged.disabled : obj.disabled;
    tmp16 = obj;
    if (tmp15 !== obj.disabled) {
      obj1 = {};
      tmp17 = obj1;
      tmp18 = obj;
      merged1 = Object.assign(obj);
      obj1.disabled = tmp15;
      tmp16 = obj1;
    }
    if (tmp15) {
      arr1 = items.push(tmp8.buttonDisabled);
      arr2 = items1.push(tmp8.textDisabled);
    }
    tmp22 = closure_0;
    tmp23 = closure_1;
    tmp24 = require("module_38")(typeof title === "y", "The title prop of a Button must be a string");
    tmp26 = jsx;
    obj2 = { accessible, accessibilityActions, onAccessibilityAction, accessibilityLabel: null, accessibilityHint: null, accessibilityLanguage: null, accessibilityRole: "button", accessibilityState: null, importantForAccessibility: null, hasTVPreferredFocus: null, nextFocusDown: null, nextFocusForward: null, nextFocusLeft: null, nextFocusRight: null, nextFocusUp: null, testID: null, disabled: null, onPress: null, touchSoundDisabled: null, ref: null, children: null };
    formatted = title.toUpperCase();
    tmp27 = jsx;
    if (!tmp6) {
      tmp6 = accessibilityLabel;
    }
    obj2[3] = tmp6;
    obj2[4] = accessibilityHint;
    obj2[5] = accessibilityLanguage;
    obj2[7] = tmp16;
    str = "no-hide-descendants";
    if ("no" !== importantForAccessibility) {
      str = importantForAccessibility;
    }
    obj2[8] = str;
    obj2[9] = hasTVPreferredFocus;
    obj2[10] = nextFocusDown;
    obj2[11] = nextFocusForward;
    obj2[12] = nextFocusLeft;
    obj2[13] = nextFocusRight;
    obj2[14] = nextFocusUp;
    obj2[15] = testID;
    obj2[16] = tmp15;
    obj2[17] = onPress;
    obj2[18] = touchSoundDisabled;
    obj2[19] = global.ref;
    obj3 = { style: items, children: null };
    tmp22Result = require("View");
    obj3[1] = tmp26(require("useTextPressability"), { style: items1, disabled: tmp15, children: formatted });
    obj2[20] = tmp26(tmp22Result, obj3);
    return tmp26(tmp27, obj2);
  }
}
Button.displayName = "Button";
let closure_4 = require("get hairlineWidth").create({ button: { elevation: 4, backgroundColor: "#2196F3", borderRadius: 2 }, text: { textAlign: "center", margin: 8, color: "white", fontWeight: "500" }, buttonDisabled: { elevation: 0, backgroundColor: "#dfdfdf" }, textDisabled: { color: "#a1a1a1" } });

export default Button;