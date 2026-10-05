// _runtime/00290_Button.js
import Fragment from "react/00021_Fragment.js";
import _modDef38 from "metro/00038__.js";
import ViewDefault from "00108_View.js";
import react from "00019_react.js";
import TouchableNativeFeedback from "00291_TouchableNativeFeedback.js";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

const jsx = Fragment.jsx;
class Button {
  constructor(ref) {
    let accessibilityActions;
    let accessibilityHint;
    let accessibilityLabel;
    let accessibilityLanguage;
    let accessibilityState;
    let accessible;
    let color;
    let hasTVPreferredFocus;
    let importantForAccessibility;
    let nextFocusDown;
    let nextFocusForward;
    let nextFocusLeft;
    let nextFocusRight;
    let nextFocusUp;
    let onAccessibilityAction;
    let onPress;
    let testID;
    let title;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let touchSoundDisabled;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    ({
      accessibilityState,
      "aria-busy": tmp2,
      "aria-checked": tmp3,
      "aria-disabled": tmp4,
      "aria-expanded": tmp5,
      "aria-label": tmp6,
      "aria-selected": tmp7,
      importantForAccessibility,
      color,
      title,
    } = merged);
    const items = [closure_4.button];
    const items1 = [closure_4.text];
    ({
      accessibilityLabel,
      onPress,
      touchSoundDisabled,
      hasTVPreferredFocus,
      nextFocusDown,
      nextFocusForward,
      nextFocusLeft,
      nextFocusRight,
      nextFocusUp,
      testID,
      accessible,
      accessibilityActions,
      accessibilityHint,
      accessibilityLanguage,
      onAccessibilityAction,
    } = merged);
    if (color) {
      const obj = { backgroundColor: color };
      items.push(obj);
    }
    if (tmp2 == null) {
      let busy;
      if (accessibilityState != null) {
        busy = accessibilityState.busy;
      }
    }
    const obj2 = { busy: tmp2, checked: tmp3, disabled: tmp4, expanded: tmp5, selected: tmp7 };
    if (tmp3 == null) {
      let checked;
      if (accessibilityState != null) {
        checked = accessibilityState.checked;
      }
    }
    if (tmp4 == null) {
      let disabled;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
    }
    if (tmp5 == null) {
      let expanded;
      if (accessibilityState != null) {
        expanded = accessibilityState.expanded;
      }
    }
    if (tmp7 == null) {
      let selected;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
    }
    const tmp15 = null != merged.disabled ? merged.disabled : obj2.disabled;
    let tmp16 = obj2;
    if (tmp15 !== obj2.disabled) {
      const obj3 = { disabled: tmp15 };
      const merged1 = Object.assign(obj2);
      tmp16 = obj3;
    }
    if (tmp15) {
      items.push(closure_4.buttonDisabled);
      items1.push(closure_4.textDisabled);
    }
    _modDef38(typeof title === "string", "The title prop of a Button must be a string");
    const formatted = title.toUpperCase();
    let str = "no-hide-descendants";
    if ("no" !== importantForAccessibility) {
      str = importantForAccessibility;
    }
    ViewDefault;
    return (
      <TouchableNativeFeedback
        accessible={accessible}
        accessibilityActions={accessibilityActions}
        onAccessibilityAction={onAccessibilityAction}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityLanguage={accessibilityLanguage}
        accessibilityRole="button"
        accessibilityState={tmp16}
        importantForAccessibility={str}
        hasTVPreferredFocus={hasTVPreferredFocus}
        nextFocusDown={nextFocusDown}
        nextFocusForward={nextFocusForward}
        nextFocusLeft={nextFocusLeft}
        nextFocusRight={nextFocusRight}
        nextFocusUp={nextFocusUp}
        testID={testID}
        disabled={tmp15}
        onPress={onPress}
        touchSoundDisabled={touchSoundDisabled}
        ref={ref.ref}
      >
        {null}
      </TouchableNativeFeedback>
    );
  }
}
Button.displayName = "Button";
const React3 = get_hairlineWidth.create({
  button: { elevation: 4, backgroundColor: "#2196F3", borderRadius: 2 },
  text: { textAlign: "center", margin: 8, color: "white", fontWeight: "500" },
  buttonDisabled: { elevation: 0, backgroundColor: "#dfdfdf" },
  textDisabled: { color: "#a1a1a1" },
});

export default Button;
