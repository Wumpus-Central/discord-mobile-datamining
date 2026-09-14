// === Module 290: Button ===

// Module 290 (Button)
import _modDef38 from "module_38" /* 38 */;
import ViewDefault from "View" /* 108 */;
import _modDef298 from "module_298" /* 298 */;
import noop from "module_19" /* 19 */;
import _isNativeReflectConstruct from "module_291" /* 291 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

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
      arr1 = items.push(obj);
    }
    if (tmp2 == null) {
      busy = undefined;
      if (accessibilityState != null) {
        busy = accessibilityState.busy;
      }
      tmp2 = busy;
    }
    obj1 = { busy: tmp2, checked: null, disabled: null, expanded: null, selected: null };
    if (tmp3 == null) {
      checked = undefined;
      if (accessibilityState != null) {
        checked = accessibilityState.checked;
      }
      tmp3 = checked;
    }
    obj1.checked = tmp3;
    if (tmp4 == null) {
      disabled = undefined;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
      tmp4 = disabled;
    }
    obj1.disabled = tmp4;
    if (tmp5 == null) {
      expanded = undefined;
      if (accessibilityState != null) {
        expanded = accessibilityState.expanded;
      }
      tmp5 = expanded;
    }
    obj1.expanded = tmp5;
    if (tmp7 == null) {
      selected = undefined;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
      tmp7 = selected;
    }
    obj1.selected = tmp7;
    tmp15 = null != merged.disabled ? merged.disabled : obj1.disabled;
    tmp16 = obj1;
    if (tmp15 !== obj1.disabled) {
      obj6 = {};
      tmp17 = obj6;
      tmp18 = obj1;
      merged1 = Object.assign(obj1);
      obj6.disabled = tmp15;
      tmp16 = obj6;
    }
    if (tmp15) {
      arr3 = items.push(tmp8.buttonDisabled);
      arr4 = items1.push(tmp8.textDisabled);
    }
    tmp22 = closure_0;
    tmp23 = closure_1;
    tmp24 = closure_0(closure_1[3])(typeof title === "string", "The title prop of a Button must be a string");
    tmp26 = jsx;
    obj7 = { accessible, accessibilityActions, onAccessibilityAction, accessibilityLabel: null, accessibilityHint: null, accessibilityLanguage: null, accessibilityRole: "button", accessibilityState: null, importantForAccessibility: null, hasTVPreferredFocus: null, nextFocusDown: null, nextFocusForward: null, nextFocusLeft: null, nextFocusRight: null, nextFocusUp: null, testID: null, disabled: null, onPress: null, touchSoundDisabled: null, ref: null, children: null };
    formatted = title.toUpperCase();
    tmp27 = closure_3;
    if (!tmp6) {
      tmp6 = accessibilityLabel;
    }
    obj7.accessibilityLabel = tmp6;
    obj7.accessibilityHint = accessibilityHint;
    obj7.accessibilityLanguage = accessibilityLanguage;
    obj7.accessibilityState = tmp16;
    str = "no-hide-descendants";
    if ("no" !== importantForAccessibility) {
      str = importantForAccessibility;
    }
    obj7.importantForAccessibility = str;
    obj7.hasTVPreferredFocus = hasTVPreferredFocus;
    obj7.nextFocusDown = nextFocusDown;
    obj7.nextFocusForward = nextFocusForward;
    obj7.nextFocusLeft = nextFocusLeft;
    obj7.nextFocusRight = nextFocusRight;
    obj7.nextFocusUp = nextFocusUp;
    obj7.testID = testID;
    obj7.disabled = tmp15;
    obj7.onPress = onPress;
    obj7.touchSoundDisabled = touchSoundDisabled;
    obj7.ref = global.ref;
    obj8 = { style: items, children: null };
    tmp22Result = tmp22(tmp23[4]);
    obj8.children = tmp26(tmp22(tmp23[5]), { style: items1, disabled: tmp15, children: formatted });
    obj7.children = tmp26(tmp22Result, obj8);
    return tmp26(tmp27, obj7);
  }
}
Button.displayName = "Button";
const React4 = get_hairlineWidth.create({ button: { elevation: 4, backgroundColor: "#2196F3", borderRadius: 2 }, text: { textAlign: "center", margin: 8, color: "white", fontWeight: "500" }, buttonDisabled: { elevation: 0, backgroundColor: "#dfdfdf" }, textDisabled: { color: "#a1a1a1" } });

export default Button;