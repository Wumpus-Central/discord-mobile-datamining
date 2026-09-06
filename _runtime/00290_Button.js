// _runtime/00290_Button.js
import _modDef38 from "metro/00038__.js";
import ViewDefault from "00108_View.js";
import _modDef298 from "metro/00298__.js";
import noop from "metro/00019__.js";
import _isNativeReflectConstruct from "metro/00291__.js";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

const jsx = fn(21).jsx;
class Button {
  constructor(arg0) {
    merged = Object.assign(global, Object.assign({ ref: 0 }));
    ({ accessibilityState, aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: tmp6, aria-selected: tmp7, importantForAccessibility, color, title } = merged);
    tmp8 = closure_4;
    items = [];
    items[0] = closure_4.button;
    items1 = [];
    items1[0] = closure_4.text;
    ({ accessibilityLabel, onPress, touchSoundDisabled, hasTVPreferredFocus, nextFocusDown, nextFocusForward, nextFocusLeft, nextFocusRight, nextFocusUp, testID, accessible, accessibilityActions, accessibilityHint, accessibilityLanguage, onAccessibilityAction } = merged);
    if (color) {
      obj = { backgroundColor: null };
      obj.backgroundColor = color;
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
    obj.checked = tmp3;
    if (tmp4 == null) {
      disabled = undefined;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
      tmp4 = disabled;
    }
    obj.disabled = tmp4;
    if (tmp5 == null) {
      expanded = undefined;
      if (accessibilityState != null) {
        expanded = accessibilityState.expanded;
      }
      tmp5 = expanded;
    }
    obj.expanded = tmp5;
    if (tmp7 == null) {
      selected = undefined;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
      tmp7 = selected;
    }
    obj.selected = tmp7;
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
    tmp24 = closure_0(closure_1[3])(typeof title === "string", "The title prop of a Button must be a string");
    tmp26 = jsx;
    obj2 = { accessible, accessibilityActions, onAccessibilityAction, accessibilityLabel: null, accessibilityHint: null, accessibilityLanguage: null, accessibilityRole: "button", accessibilityState: null, importantForAccessibility: null, hasTVPreferredFocus: null, nextFocusDown: null, nextFocusForward: null, nextFocusLeft: null, nextFocusRight: null, nextFocusUp: null, testID: null, disabled: null, onPress: null, touchSoundDisabled: null, ref: null, children: null };
    formatted = title.toUpperCase();
    tmp27 = closure_3;
    if (!tmp6) {
      tmp6 = accessibilityLabel;
    }
    obj2.accessibilityLabel = tmp6;
    obj2.accessibilityHint = accessibilityHint;
    obj2.accessibilityLanguage = accessibilityLanguage;
    obj2.accessibilityState = tmp16;
    str = "no-hide-descendants";
    if ("no" !== importantForAccessibility) {
      str = importantForAccessibility;
    }
    obj2.importantForAccessibility = str;
    obj2.hasTVPreferredFocus = hasTVPreferredFocus;
    obj2.nextFocusDown = nextFocusDown;
    obj2.nextFocusForward = nextFocusForward;
    obj2.nextFocusLeft = nextFocusLeft;
    obj2.nextFocusRight = nextFocusRight;
    obj2.nextFocusUp = nextFocusUp;
    obj2.testID = testID;
    obj2.disabled = tmp15;
    obj2.onPress = onPress;
    obj2.touchSoundDisabled = touchSoundDisabled;
    obj2.ref = global.ref;
    obj3 = { style: items, children: null };
    tmp22Result = tmp22(tmp23[4]);
    obj3.children = tmp26(tmp22(tmp23[5]), { style: items1, disabled: tmp15, children: formatted });
    obj2.children = tmp26(tmp22Result, obj3);
    return tmp26(tmp27, obj2);
  }
}
Button.displayName = "Button";
const React4 = get_hairlineWidth.create({ button: { elevation: 4, backgroundColor: "#2196F3", borderRadius: 2 }, text: { textAlign: "center", margin: 8, color: "white", fontWeight: "500" }, buttonDisabled: { elevation: 0, backgroundColor: "#dfdfdf" }, textDisabled: { color: "#a1a1a1" } });

export default Button;