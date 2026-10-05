// === Module 298: TextImpl ===

// Module 298 (TextImpl)
import Fragment from "Fragment" /* 21 */;
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import processColorDefault from "processColor" /* 50 */;
import reactDefault from "react" /* 111 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import NativeText2 from "NativeText" /* 299 */;
import usePressabilityDefault from "usePressability" /* 301 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

let closure_13;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function useTextPressability(textPressabilityProps) {
  const onLongPress = textPressabilityProps.onLongPress;
  const onPress = textPressabilityProps.onPress;
  const onPressIn = textPressabilityProps.onPressIn;
  const onPressOut = textPressabilityProps.onPressOut;
  const onResponderGrant = textPressabilityProps.onResponderGrant;
  const onResponderMove = textPressabilityProps.onResponderMove;
  const onResponderRelease = textPressabilityProps.onResponderRelease;
  const onResponderTerminate = textPressabilityProps.onResponderTerminate;
  let onResponderTerminationRequest = textPressabilityProps.onResponderTerminationRequest;
  let onStartShouldSetResponder = textPressabilityProps.onStartShouldSetResponder;
  const pressRetentionOffset = textPressabilityProps.pressRetentionOffset;
  const suppressHighlighting = textPressabilityProps.suppressHighlighting;
  const first = _slicedToArray(metroImportDefault(false), 2)[0];
  let items = [pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut, suppressHighlighting];
  _slicedToArray(metroImportDefault(false), 2);
  const tmp3 = metroRequire(() => ({ disabled: false, pressRectOffset: pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut }), items);
  const tmp4 = usePressabilityDefault(tmp3);
  closure_12 = tmp4;
  const items1 = [tmp4, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder];
  const tmp5 = metroRequire(() => {
    let tmp2 = null;
    if (null != closure_12) {
      const obj = {
        onResponderGrant(arg0) {
            closure_1_12.onResponderGrant(arg0);
            if (null != onResponderGrant) {
              tmp2(arg0);
            }
          },
        onResponderMove(arg0) {
            closure_1_12.onResponderMove(arg0);
            if (null != onResponderMove) {
              tmp2(arg0);
            }
          },
        onResponderRelease(arg0) {
            closure_1_12.onResponderRelease(arg0);
            if (null != onResponderRelease) {
              tmp2(arg0);
            }
          },
        onResponderTerminate(arg0) {
            closure_1_12.onResponderTerminate(arg0);
            if (null != onResponderTerminate) {
              tmp2(arg0);
            }
          },
        onClick: closure_12.onClick,
        onResponderTerminationRequest,
        onStartShouldSetResponder
      };
      if (null == onResponderTerminationRequest) {
        onResponderTerminationRequest = closure_12.onResponderTerminationRequest;
      }
      if (null == onStartShouldSetResponder) {
        onStartShouldSetResponder = closure_12.onStartShouldSetResponder;
      }
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  closure_13 = tmp5;
  const items2 = [first, tmp5];
  return metroRequire(() => {
    const items = [first, closure_13];
    return items;
  }, items2);
}
({ useContext: hasOwnProperty, useMemo: metroRequire, useState: metroImportDefault } = react);
const jsx = Fragment.jsx;
class TextImpl {
  constructor(arg0) {
    let accessibilityLabel;
    let accessibilityRole;
    let accessibilityState;
    let accessible;
    let allowFontScaling;
    let busy;
    let checked;
    let children;
    let disabled;
    let disabled2;
    let ellipsizeMode;
    let expanded;
    let id;
    let nativeID;
    let numberOfLines;
    let obj9;
    let onLongPress;
    let onPress;
    let onPressIn;
    let onPressOut;
    let onResponderGrant;
    let onResponderMove;
    let onResponderRelease;
    let onResponderTerminate;
    let onResponderTerminationRequest;
    let onStartShouldSetResponder;
    let pressRetentionOffset;
    let ref;
    let role;
    let selectable;
    let selected;
    let selectionColor;
    let style;
    let suppressHighlighting;
    let tmp;
    let tmp2;
    ({ ref, accessible, accessibilityRole, accessibilityState, "aria-busy": busy, "aria-checked": checked, "aria-disabled": disabled, "aria-expanded": expanded, "aria-hidden": tmp, "aria-label": tmp2, "aria-selected": selected, children, ellipsizeMode, disabled: disabled2, id, numberOfLines, onLongPress, onPress, onStartShouldSetResponder, role, selectable, selectionColor, style } = arg0);
    ({ accessibilityLabel, allowFontScaling, nativeID, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, pressRetentionOffset, suppressHighlighting } = arg0);
    const merged = Object.assign(arg0, Object.assign({ ref: 0, accessible: 0, accessibilityLabel: 0, accessibilityRole: 0, accessibilityState: 0, allowFontScaling: 0, "aria-busy": 0, "aria-checked": 0, "aria-disabled": 0, "aria-expanded": 0, "aria-hidden": 0, "aria-label": 0, "aria-selected": 0, children: 0, ellipsizeMode: 0, disabled: 0, id: 0, nativeID: 0, numberOfLines: 0, onLongPress: 0, onPress: 0, onPressIn: 0, onPressOut: 0, onResponderGrant: 0, onResponderMove: 0, onResponderRelease: 0, onResponderTerminate: 0, onResponderTerminationRequest: 0, onStartShouldSetResponder: 0, pressRetentionOffset: 0, role: 0, selectable: 0, selectionColor: 0, suppressHighlighting: 0, style: 0 }));
    let tmp5 = accessibilityState;
    const tmp4 = null == busy && null == checked && null == disabled && null == expanded && null == selected;
    if (!tmp4) {
      let obj;
      if (null != accessibilityState) {
        if (busy == null) {
          busy = accessibilityState.busy;
        }
        const obj2 = { busy, checked, disabled, expanded, selected };
        if (checked == null) {
          checked = accessibilityState.checked;
        }
        if (disabled == null) {
          disabled = accessibilityState.disabled;
        }
        if (expanded == null) {
          expanded = accessibilityState.expanded;
        }
        if (selected == null) {
          selected = accessibilityState.selected;
        }
        obj = obj2;
      } else {
        obj = { busy, checked, disabled, expanded, selected };
      }
      tmp5 = obj;
    }
    let disabled1;
    if (tmp5 != null) {
      disabled1 = tmp5.disabled;
    }
    let tmp7 = disabled2;
    if (disabled2 == null) {
      tmp7 = disabled1;
    }
    let tmp8 = tmp7 !== disabled1;
    if (tmp8) {
      let tmp9 = null != tmp7 && false !== tmp7;
      if (!tmp9) {
        tmp9 = null != disabled1 && false !== disabled1;
        const tmp10 = null != disabled1 && false !== disabled1;
      }
      tmp8 = tmp9;
    }
    let tmp11 = tmp5;
    if (tmp8) {
      if (null == tmp5) {
        tmp5 = { disabled: disabled2 };
        const obj3 = { disabled: disabled2 };
      } else {
        tmp5.disabled = tmp7;
      }
      tmp11 = tmp5;
    }
    if (undefined !== tmp) {
      merged.accessibilityElementsHidden = tmp;
      if (true === tmp) {
        merged.importantForAccessibility = "no-hide-descendants";
      }
    }
    if (null == accessible) {
      accessible = null != onPress || null != onLongPress;
    }
    if (accessibilityRole == null) {
      let str2;
      if ((null != onPress || null != onLongPress || null != onStartShouldSetResponder) && true !== tmp7 && null == accessibilityRole && null == role) {
        str2 = "link";
      }
      accessibilityRole = str2;
    }
    let tmp15;
    if (!((null != onPress || null != onLongPress || null != onStartShouldSetResponder) && true !== tmp7 && null == accessibilityRole && null == role)) {
      tmp15 = role;
    }
    let tmp16;
    if (null != selectionColor) {
      tmp16 = processColorDefault(selectionColor);
    }
    const tmp19 = null == numberOfLines || numberOfLines >= 0;
    if (!tmp19) {
      numberOfLines = 0;
    }
    const tmp22 = flattenStyleDefault(style);
    let tmp23 = selectable;
    let tmp24 = style;
    if (null != tmp22) {
      let tmp56 = null;
      if (typeof tmp22.fontWeight === "number") {
        const _String = String;
        tmp56 = { fontWeight: String(tmp22.fontWeight) };
        const obj4 = { fontWeight: String(tmp22.fontWeight) };
      }
      let tmp25 = tmp56;
      if (null != tmp22.userSelect) {
        let obj6 = tmp56;
        const tmp27 = closure_12[tmp22.userSelect];
        if (!tmp56) {
          obj6 = {};
        }
        obj6.userSelect = undefined;
        tmp25 = obj6;
        selectable = tmp27;
      }
      let tmp28 = tmp25;
      if (null != tmp22.verticalAlign) {
        const tmp29 = tmp25 || {};
        tmp29.textAlignVertical = closure_13[tmp22.verticalAlign];
        tmp29.verticalAlign = undefined;
        tmp28 = tmp29;
      }
      tmp23 = selectable;
      tmp24 = style;
      if (null != tmp28) {
        const items = [style, tmp28];
        tmp23 = selectable;
        tmp24 = items;
      }
    }
    let tmp31 = tmp24;
    const obj5 = javaScriptFlagGetterAll;
    if (obj5.defaultTextToOverflowHidden()) {
      const items1 = [closure_14.default, tmp24];
      tmp31 = items1;
    }
    if (id == null) {
      id = nativeID;
    }
    if (undefined !== accessibilityLabel) {
      merged.accessibilityLabel = accessibilityLabel;
    }
    if (undefined !== accessibilityRole) {
      merged.accessibilityRole = accessibilityRole;
    }
    if (undefined !== tmp11) {
      merged.accessibilityState = tmp11;
    }
    if (undefined !== id) {
      merged.nativeID = id;
    }
    if (undefined !== numberOfLines) {
      merged.numberOfLines = numberOfLines;
    }
    if (undefined !== tmp23) {
      merged.selectable = tmp23;
    }
    if (undefined !== tmp31) {
      merged.style = tmp31;
    }
    if (undefined !== tmp16) {
      merged.selectionColor = tmp16;
    }
    if (undefined !== tmp15) {
      merged.role = tmp15;
    }
    if ((null != onPress || null != onLongPress || null != onStartShouldSetResponder) && true !== tmp7) {
      obj9 = { onLongPress, onPress, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder, pressRetentionOffset, suppressHighlighting };
      const obj7 = { onLongPress, onPress, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder, pressRetentionOffset, suppressHighlighting };
    }
    if (hasOwnProperty(reactDefault)) {
      let tmp49Result;
      merged.disabled = disabled2;
      merged.children = children;
      if ((null != onPress || null != onLongPress || null != onStartShouldSetResponder) && true !== tmp7) {
        if (obj9 == null) {
          obj9 = {};
        }
        tmp49Result = <closure_10 ref={ref} textProps={merged} textPressabilityProps={obj9} />;
      } else {
        const NativeVirtualText = NativeText2.NativeVirtualText;
        const merged1 = Object.assign(merged);
        tmp49Result = <NativeVirtualText ref={ref} />;
      }
      return tmp49Result;
    } else {
      let tmp33Result;
      merged.accessible = accessible;
      merged.allowFontScaling = false !== allowFontScaling;
      merged.disabled = tmp7;
      if (ellipsizeMode == null) {
        ellipsizeMode = "tail";
      }
      merged.ellipsizeMode = ellipsizeMode;
      merged.children = children;
      if ((null != onPress || null != onLongPress || null != onStartShouldSetResponder) && true !== tmp7) {
        let obj13 = obj9;
        if (obj9 == null) {
          obj13 = {};
        }
        tmp33Result = <closure_11 ref={ref} selectable={tmp23} textProps={merged} textPressabilityProps={obj13} />;
      } else {
        if (true === tmp23) {
          let NativeText = NativeText2.NativeSelectableText;
        } else {
          NativeText = NativeText2.NativeText;
        }
        const merged2 = Object.assign(merged);
        tmp33Result = <NativeText ref={ref} />;
      }
      if (null == children) {
        return tmp33Result;
      } else {
        const _Array = Array;
        if (Array.isArray(children)) {
          if (children.length <= 3) {
            let flag7 = false;
            for (const item10134 of children) {
              if (null != item10134) {
                if (typeof tmp43 === "object") {
                  flag7 = true;
                  obj11.return();
                  break;
                }
                if (!flag7) {
                  return tmp33Result;
                }
              }
              continue;
            }
          }
          return jsx(reactDefault, { value: true, children: tmp33Result });
        }
        if (typeof children !== "object") {
          return tmp33Result;
        }
      }
    }
  }
}
TextImpl.displayName = "Text";
let closure_10 = react.forwardRef(function PressableVirtualText_withRef(textProps, ref) {
  let first;
  let tmp3;
  textProps = textProps.textProps;
  [first, tmp3] = useTextPressability(textProps.textPressabilityProps);
  const NativeVirtualText = NativeText2.NativeVirtualText;
  const merged = Object.assign(textProps);
  const merged1 = Object.assign(tmp3);
  return <NativeVirtualText isHighlighted={first} isPressable ref={ref} />;
});
let closure_11 = react.forwardRef(function PressableText_withRef(textProps, ref) {
  let first;
  let tmp3;
  textProps = textProps.textProps;
  const selectable = textProps.selectable;
  [first, tmp3] = useTextPressability(textProps.textPressabilityProps);
  if (true === selectable) {
    let NativeText = NativeText2.NativeSelectableText;
  } else {
    NativeText = NativeText2.NativeText;
  }
  const merged = Object.assign(textProps);
  const merged1 = Object.assign(tmp3);
  return <NativeText isHighlighted={first} isPressable ref={ref} />;
});
let closure_12 = { auto: true, text: true, none: false, contain: true, all: true };
const authStore2 = get_hairlineWidth.create({ default: { overflow: "hidden" } });

export default TextImpl;