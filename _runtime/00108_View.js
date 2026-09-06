// === Module 108: View ===

// Module 108 (View)
import _modAll27 from "module_27" /* 27 */;
import _modDef111 from "module_111" /* 111 */;
import CommandsDefault from "Commands" /* 112 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

let closure_3 = ["accessibilityState", "accessibilityValue", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-selected", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "id", "tabIndex"];
const use = fn(19).use;
const jsx = fn(21).jsx;
const forwardRefResult = noop.forwardRef(function View_withRef(arg0, ref) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const tmp44 = use(_modDef111);
    let tmp24 = merged;
    if (!obj6.enableNativeViewPropTransformations()) {
      ({ accessibilityState, accessibilityValue, aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-hidden: tmp5, aria-label: tmp6, aria-labelledby: str, aria-live: tmp7, aria-selected: tmp8, aria-valuemax: tmp9, aria-valuemin: tmp10, aria-valuenow: tmp11, aria-valuetext: tmp12, id, tabIndex } = merged);
      const tmp15 = _objectWithoutProperties(merged, closure_3);
      let parts;
      if (str != null) {
        parts = str.split(/\s*,\s*/g);
      }
      if (undefined !== parts) {
        tmp15.accessibilityLabelledBy = parts;
      }
      if (undefined !== tmp6) {
        tmp15.accessibilityLabel = tmp6;
      }
      if (undefined !== tmp7) {
        let str2 = "none";
        if ("off" !== tmp7) {
          str2 = tmp7;
        }
        tmp15.accessibilityLiveRegion = str2;
      }
      if (undefined !== tmp5) {
        tmp15.accessibilityElementsHidden = tmp5;
        if (true === tmp5) {
          tmp15.importantForAccessibility = "no-hide-descendants";
        }
      }
      if (undefined !== id) {
        tmp15.nativeID = id;
      }
      if (undefined !== tabIndex) {
        tmp15.focusable = !tabIndex;
      }
      if (!tmp17) {
        if (tmp == null) {
          let busy;
          if (accessibilityState != null) {
            busy = accessibilityState.busy;
          }
        }
        let obj = { busy: tmp, checked: null, disabled: null, expanded: null, selected: null };
        if (tmp2 == null) {
          let checked;
          if (accessibilityState != null) {
            checked = accessibilityState.checked;
          }
        }
        obj.checked = tmp2;
        if (tmp3 == null) {
          let disabled;
          if (accessibilityState != null) {
            disabled = accessibilityState.disabled;
          }
        }
        obj.disabled = tmp3;
        if (tmp4 == null) {
          let expanded;
          if (accessibilityState != null) {
            expanded = accessibilityState.expanded;
          }
        }
        obj.expanded = tmp4;
        if (tmp8 == null) {
          let selected;
          if (accessibilityState != null) {
            selected = accessibilityState.selected;
          }
        }
        obj.selected = tmp8;
        tmp15.accessibilityState = obj;
      }
      tmp24 = tmp15;
      if (!tmp23) {
        if (tmp9 == null) {
          let max;
          if (accessibilityValue != null) {
            max = accessibilityValue.max;
          }
        }
        const range = { max: tmp9, min: null, now: null, text: null };
        if (tmp10 == null) {
          let min;
          if (accessibilityValue != null) {
            min = accessibilityValue.min;
          }
        }
        range.min = tmp10;
        if (tmp11 == null) {
          let now;
          if (accessibilityValue != null) {
            now = accessibilityValue.now;
          }
        }
        range.now = tmp11;
        if (tmp12 == null) {
          let text;
          if (accessibilityValue != null) {
            text = accessibilityValue.text;
          }
        }
        range.text = tmp12;
        tmp15.accessibilityValue = range;
        tmp24 = tmp15;
      }
      tmp17 = null == accessibilityState && null == tmp && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp8;
      tmp23 = null == accessibilityValue && null == tmp9 && null == tmp10 && null == tmp11 && null == tmp12;
    }
    obj6 = _modAll27;
    if (null == ref) {
      obj = {};
      const merged1 = Object.assign(tmp24);
    } else {
      obj = {};
      const merged2 = Object.assign(tmp24);
      obj.ref = ref;
    }
    const tmp30Result = jsx(CommandsDefault, obj);
    if (tmp44) {
      const obj1 = { value: false, children: tmp30Result };
      return tmp30(tmp42(111), obj1);
    } else {
      return tmp30Result;
    }
    const tmp42Result = CommandsDefault;
  }
});
forwardRefResult.displayName = "View";

export default forwardRefResult;