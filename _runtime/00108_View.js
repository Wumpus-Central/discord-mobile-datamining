// _runtime/00108_View.js
import noopAll from "00019_noop.js";
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import noopDefault from "00111_noop.js";
import CommandsDefault from "00112_Commands.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";
import { use } from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

let closure_3 = ["accessibilityState", "accessibilityValue", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-selected", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "id", "tabIndex"];
const forwardRefResult = noopAll.forwardRef(function View_withRef(arg0, ref) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const merged = Object.assign(arg0, undefined);
    const tmp45 = use(noopDefault);
    let tmp24 = merged;
    if (!obj6.enableNativeViewPropTransformations()) {
      ({ accessibilityState, accessibilityValue, aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-hidden: tmp5, aria-label: tmp6, aria-labelledby: str, aria-live: tmp7, aria-selected: tmp8, aria-valuemax: tmp9, aria-valuemin: tmp10, aria-valuenow: tmp11, aria-valuetext: tmp12, id, tabIndex } = merged);
      const tmp15 = callback(merged, closure_3);
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
        let obj = { busy: null, checked: null, disabled: null, expanded: null, selected: null };
        obj[0] = tmp;
        if (tmp2 == null) {
          let checked;
          if (accessibilityState != null) {
            checked = accessibilityState.checked;
          }
        }
        obj[1] = tmp2;
        if (tmp3 == null) {
          let disabled;
          if (accessibilityState != null) {
            disabled = accessibilityState.disabled;
          }
        }
        obj[2] = tmp3;
        if (tmp4 == null) {
          let expanded;
          if (accessibilityState != null) {
            expanded = accessibilityState.expanded;
          }
        }
        obj[3] = tmp4;
        if (tmp8 == null) {
          let selected;
          if (accessibilityState != null) {
            selected = accessibilityState.selected;
          }
        }
        obj[4] = tmp8;
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
        obj = { max: null, min: null, now: null, text: null };
        obj[0] = tmp9;
        if (tmp10 == null) {
          let min;
          if (accessibilityValue != null) {
            min = accessibilityValue.min;
          }
        }
        obj[1] = tmp10;
        if (tmp11 == null) {
          let now;
          if (accessibilityValue != null) {
            now = accessibilityValue.now;
          }
        }
        obj[2] = tmp11;
        if (tmp12 == null) {
          let text;
          if (accessibilityValue != null) {
            text = accessibilityValue.text;
          }
        }
        obj[3] = tmp12;
        tmp15.accessibilityValue = obj;
        tmp24 = tmp15;
      }
      tmp17 = null == accessibilityState && null == tmp && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp8;
      tmp23 = null == accessibilityValue && null == tmp9 && null == tmp10 && null == tmp11 && null == tmp12;
    }
    obj6 = javaScriptFlagGetterAll;
    if (null == ref) {
      obj = {};
      const merged1 = Object.assign(tmp24);
      obj1 = obj;
    } else {
      obj1 = {};
      const merged2 = Object.assign(tmp24);
      obj1.ref = ref;
    }
    const tmp30Result = jsx(CommandsDefault, obj1);
    if (tmp45) {
      const obj2 = { value: false, children: null };
      obj2[1] = tmp30Result;
      return tmp30(tmp43(111), obj2);
    } else {
      return tmp30Result;
    }
    const tmp43Result = CommandsDefault;
  }
});
forwardRefResult.displayName = "View";

export default forwardRefResult;