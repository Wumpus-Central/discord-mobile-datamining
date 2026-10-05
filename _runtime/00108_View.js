// _runtime/00108_View.js
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import reactDefault from "00111_react.js";
import CommandsDefault from "00112_Commands.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";

const react = react2;

let closure_3 = [
  "accessibilityState",
  "accessibilityValue",
  "aria-busy",
  "aria-checked",
  "aria-disabled",
  "aria-expanded",
  "aria-hidden",
  "aria-label",
  "aria-labelledby",
  "aria-live",
  "aria-selected",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "id",
  "tabIndex",
];
const use = react2.use;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef(function View_withRef(arg0, ref) {
  let accessibilityState;
  let accessibilityValue;
  let id;
  let str;
  let tabIndex;
  let tmp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let obj3;
    const merged = Object.assign(arg0, undefined);
    let tmp24 = merged;
    const tmp44 = use(reactDefault);
    const obj6 = javaScriptFlagGetterAll;
    if (!obj6.enableNativeViewPropTransformations()) {
      ({
        accessibilityState,
        accessibilityValue,
        "aria-busy": tmp,
        "aria-checked": tmp2,
        "aria-disabled": tmp3,
        "aria-expanded": tmp4,
        "aria-hidden": tmp5,
        "aria-label": tmp6,
        "aria-labelledby": str,
        "aria-live": tmp7,
        "aria-selected": tmp8,
        "aria-valuemax": tmp9,
        "aria-valuemin": tmp10,
        "aria-valuenow": tmp11,
        "aria-valuetext": tmp12,
        id,
        tabIndex,
      } = merged);
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
      const tmp17 =
        null == accessibilityState && null == tmp && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp8;
      if (!tmp17) {
        if (tmp == null) {
          let busy;
          if (accessibilityState != null) {
            busy = accessibilityState.busy;
          }
        }
        const obj = { busy: tmp, checked: tmp2, disabled: tmp3, expanded: tmp4, selected: tmp8 };
        if (tmp2 == null) {
          let checked;
          if (accessibilityState != null) {
            checked = accessibilityState.checked;
          }
        }
        if (tmp3 == null) {
          let disabled;
          if (accessibilityState != null) {
            disabled = accessibilityState.disabled;
          }
        }
        if (tmp4 == null) {
          let expanded;
          if (accessibilityState != null) {
            expanded = accessibilityState.expanded;
          }
        }
        if (tmp8 == null) {
          let selected;
          if (accessibilityState != null) {
            selected = accessibilityState.selected;
          }
        }
        tmp15.accessibilityState = obj;
      }
      tmp24 = tmp15;
      const tmp23 = null == accessibilityValue && null == tmp9 && null == tmp10 && null == tmp11 && null == tmp12;
      if (!tmp23) {
        if (tmp9 == null) {
          let max;
          if (accessibilityValue != null) {
            max = accessibilityValue.max;
          }
        }
        const range = { max: tmp9, min: tmp10, now: tmp11, text: tmp12 };
        if (tmp10 == null) {
          let min;
          if (accessibilityValue != null) {
            min = accessibilityValue.min;
          }
        }
        if (tmp11 == null) {
          let now;
          if (accessibilityValue != null) {
            now = accessibilityValue.now;
          }
        }
        if (tmp12 == null) {
          let text;
          if (accessibilityValue != null) {
            text = accessibilityValue.text;
          }
        }
        tmp15.accessibilityValue = range;
        tmp24 = tmp15;
      }
    }
    CommandsDefault;
    if (null == ref) {
      const obj2 = {};
      const merged1 = Object.assign(tmp24);
      obj3 = obj2;
    } else {
      obj3 = { ref };
      const merged2 = Object.assign(tmp24);
    }
    const tmp30Result = <tmp42Result {...obj3} />;
    if (tmp44) {
      return jsx(reactDefault, { value: false, children: tmp30Result });
    } else {
      return tmp30Result;
    }
  }
});
forwardRefResult.displayName = "View";

export default forwardRefResult;
