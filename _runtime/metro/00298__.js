// === Module 298: ? ===

// Module 298
import _modAll27 from "module_27" /* 27 */;
import processColorDefault from "processColor" /* 50 */;
import _modDef111 from "module_111" /* 111 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import NativeText2 from "NativeText" /* 299 */;
import _modDef301 from "module_301" /* 301 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

require = fn;
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
  const first = _slicedToArray(React5(false), 2)[0];
  let items = [pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut, textPressabilityProps.suppressHighlighting];
  const tmp = _slicedToArray(React5(false), 2);
  const tmp4 = _modDef301(timestampProducer(() => ({ disabled: false, pressRectOffset: pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut }), items));
  closure_12 = tmp4;
  const items1 = [tmp4, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder];
  const tmp5 = timestampProducer(() => {
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
        onClick: tmp.onClick,
        onResponderTerminationRequest: null,
        onStartShouldSetResponder: null
      };
      if (null == onResponderTerminationRequest) {
        onResponderTerminationRequest = tmp.onResponderTerminationRequest;
      }
      obj.onResponderTerminationRequest = onResponderTerminationRequest;
      if (null == onStartShouldSetResponder) {
        onStartShouldSetResponder = tmp.onStartShouldSetResponder;
      }
      obj.onStartShouldSetResponder = onStartShouldSetResponder;
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  closure_13 = tmp5;
  const items2 = [first, tmp5];
  return timestampProducer(() => {
    const items = [first, closure_13];
    return items;
  }, items2);
}
const noop = fn(19);
({ useContext: hasOwnProperty, useMemo: metroRequire, useState: closure_7 } = noop);
const jsx = fn(21).jsx;
class TextImpl {
  constructor(arg0) {
    ({ ref, accessible, accessibilityRole, accessibilityState, aria-busy: busy, aria-checked: checked, aria-disabled: disabled, aria-expanded: expanded, aria-hidden: tmp, aria-label: tmp2, aria-selected: selected, children, ellipsizeMode, disabled: disabled2, id, numberOfLines, onLongPress, onPress, onStartShouldSetResponder, role, selectable, selectionColor, style } = global);
    ({ accessibilityLabel, allowFontScaling, nativeID, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, pressRetentionOffset, suppressHighlighting } = global);
    merged = Object.assign(global, Object.assign({ ref: 0, accessible: 0, accessibilityLabel: 0, accessibilityRole: 0, accessibilityState: 0, allowFontScaling: 0, "aria-busy": 0, "aria-checked": 0, "aria-disabled": 0, "aria-expanded": 0, "aria-hidden": 0, "aria-label": 0, "aria-selected": 0, children: 0, ellipsizeMode: 0, disabled: 0, id: 0, nativeID: 0, numberOfLines: 0, onLongPress: 0, onPress: 0, onPressIn: 0, onPressOut: 0, onResponderGrant: 0, onResponderMove: 0, onResponderRelease: 0, onResponderTerminate: 0, onResponderTerminationRequest: 0, onStartShouldSetResponder: 0, pressRetentionOffset: 0, role: 0, selectable: 0, selectionColor: 0, suppressHighlighting: 0, style: 0 }));
    if (tmp2 == null) {
      tmp2 = accessibilityLabel;
    }
    tmp4 = null == busy && null == checked && null == disabled && null == expanded && null == selected;
    tmp5 = accessibilityState;
    if (tmp4) {
      disabled = undefined;
      if (tmp5 != null) {
        disabled = tmp5.disabled;
      }
      tmp8 = disabled2;
      if (disabled2 == null) {
        tmp8 = disabled;
      }
      tmp9 = tmp8 !== disabled;
      if (tmp9) {
        tmp10 = null != tmp8;
        if (tmp10) {
          flag = false;
          tmp10 = false !== tmp8;
        }
        if (!tmp10) {
          tmp11 = null != disabled;
          if (tmp11) {
            flag2 = false;
            tmp11 = false !== disabled;
          }
          tmp10 = tmp11;
        }
        tmp9 = tmp10;
      }
      tmp12 = tmp5;
      if (!tmp9) {
        if (undefined !== tmp) {
          merged.accessibilityElementsHidden = tmp;
          flag3 = true;
          if (true === tmp) {
            str = "no-hide-descendants";
            merged.importantForAccessibility = "no-hide-descendants";
          }
        }
        if (null == accessible) {
          tmp14 = null != onPress || null != onLongPress;
          accessible = tmp14;
        }
        tmp15 = null != onPress || null != onLongPress || null != onStartShouldSetResponder;
        if (tmp15) {
          flag4 = true;
          tmp15 = true !== tmp8;
        }
        tmp16 = tmp15;
        if (tmp15) {
          tmp16 = null == accessibilityRole;
        }
        if (tmp16) {
          tmp16 = null == role;
        }
        if (accessibilityRole == null) {
          str2 = undefined;
          if (tmp16) {
            str2 = "link";
          }
          accessibilityRole = str2;
        }
        tmp17 = undefined;
        if (!tmp16) {
          tmp17 = role;
        }
        tmp18 = undefined;
        if (null != selectionColor) {
          tmp19 = closure_1;
          tmp20 = closure_3;
          tmp18 = closure_1(closure_3[3])(selectionColor);
        }
        tmp21 = null == numberOfLines;
        if (!tmp21) {
          num = 0;
          tmp21 = numberOfLines >= 0;
        }
        if (!tmp21) {
          numberOfLines = 0;
        }
        tmp23 = closure_3;
        tmp22 = closure_1;
        tmp24 = closure_1(closure_3[4])(style);
        tmp25 = selectable;
        tmp26 = style;
        if (null != tmp24) {
          tmp58 = null;
          if (typeof tmp24.fontWeight === "number") {
            obj = {};
            tmp59 = globalThis;
            _String = String;
            obj.fontWeight = String(tmp24.fontWeight);
            tmp58 = obj;
          }
          tmp27 = tmp58;
          if (null != tmp24.userSelect) {
            tmp28 = closure_12;
            obj1 = tmp58;
            if (!tmp58) {
              obj1 = {};
            }
            obj1.userSelect = undefined;
            tmp27 = obj1;
            selectable = closure_12[tmp24.userSelect];
          }
          tmp29 = tmp27;
          if (null != tmp24.verticalAlign) {
            obj2 = tmp27;
            if (!tmp27) {
              obj2 = {};
            }
            tmp30 = closure_13;
            obj2.textAlignVertical = closure_13[tmp24.verticalAlign];
            obj2.verticalAlign = undefined;
            tmp29 = obj2;
          }
          tmp25 = selectable;
          tmp26 = style;
          if (null != tmp29) {
            items = [, ];
            items[0] = style;
            items[1] = tmp29;
            tmp25 = selectable;
            tmp26 = items;
          }
        }
        tmp31 = closure_2;
        obj6 = closure_2(tmp23[5]);
        tmp32 = tmp26;
        if (obj6.defaultTextToOverflowHidden()) {
          tmp33 = closure_14;
          items1 = [, ];
          items1[0] = closure_14.default;
          items1[1] = tmp26;
          tmp32 = items1;
        }
        if (id == null) {
          id = nativeID;
        }
        if (undefined !== tmp2) {
          merged.accessibilityLabel = tmp2;
        }
        if (undefined !== accessibilityRole) {
          merged.accessibilityRole = accessibilityRole;
        }
        if (undefined !== tmp5) {
          merged.accessibilityState = tmp5;
        }
        if (undefined !== id) {
          merged.nativeID = id;
        }
        if (undefined !== numberOfLines) {
          merged.numberOfLines = numberOfLines;
        }
        if (undefined !== tmp25) {
          merged.selectable = tmp25;
        }
        if (undefined !== tmp32) {
          merged.style = tmp32;
        }
        if (undefined !== tmp18) {
          merged.selectionColor = tmp18;
        }
        if (undefined !== tmp17) {
          merged.role = tmp17;
        }
        if (tmp15) {
          obj3 = { onLongPress: null, onPress: null, onPressIn: null, onPressOut: null, onResponderGrant: null, onResponderMove: null, onResponderRelease: null, onResponderTerminate: null, onResponderTerminationRequest: null, onStartShouldSetResponder: null, pressRetentionOffset: null, suppressHighlighting: null };
          obj3.onLongPress = onLongPress;
          obj3.onPress = onPress;
          obj3.onPressIn = onPressIn;
          obj3.onPressOut = onPressOut;
          obj3.onResponderGrant = onResponderGrant;
          obj3.onResponderMove = onResponderMove;
          obj3.onResponderRelease = onResponderRelease;
          obj3.onResponderTerminate = onResponderTerminate;
          obj3.onResponderTerminationRequest = onResponderTerminationRequest;
          obj3.onStartShouldSetResponder = onStartShouldSetResponder;
          obj3.pressRetentionOffset = pressRetentionOffset;
          obj3.suppressHighlighting = suppressHighlighting;
          obj5 = obj3;
        }
        tmp34 = useContext;
        if (useContext(tmp22(tmp23[6]))) {
          merged.disabled = disabled2;
          merged.children = children;
          tmp51 = jsx;
          if (tmp15) {
            obj4 = { ref: null, textProps: null, textPressabilityProps: null };
            obj4.ref = ref;
            obj4.textProps = merged;
            tmp57 = closure_10;
            if (obj5 == null) {
              obj5 = {};
            }
            obj4.textPressabilityProps = obj5;
            tmp51Result = tmp51(tmp57, obj4);
          } else {
            tmp52 = closure_0;
            obj6 = {};
            tmp53 = obj6;
            tmp54 = merged;
            merged1 = Object.assign(merged);
            obj6.ref = ref;
            tmp51Result = tmp51(closure_0(tmp23[7]).NativeVirtualText, obj6);
          }
          return tmp51Result;
        } else {
          merged.accessible = accessible;
          flag5 = false;
          merged.allowFontScaling = false !== allowFontScaling;
          merged.disabled = tmp8;
          if (ellipsizeMode == null) {
            ellipsizeMode = "tail";
          }
          merged.ellipsizeMode = ellipsizeMode;
          merged.children = children;
          tmp35 = jsx;
          if (tmp15) {
            obj7 = { ref: null, selectable: null, textProps: null, textPressabilityProps: null };
            obj7.ref = ref;
            obj7.selectable = tmp25;
            obj7.textProps = merged;
            obj8 = obj5;
            tmp42 = closure_11;
            if (obj5 == null) {
              obj8 = {};
            }
            obj7.textPressabilityProps = obj8;
            tmp35Result = tmp35(tmp42, obj7);
          } else {
            flag6 = true;
            if (true === tmp25) {
              tmp37 = closure_0;
              NativeText = closure_0(tmp23[7]).NativeSelectableText;
            } else {
              tmp36 = closure_0;
              NativeText = closure_0(tmp23[7]).NativeText;
            }
            obj9 = {};
            tmp38 = obj9;
            tmp39 = merged;
            merged2 = Object.assign(merged);
            obj9.ref = ref;
            tmp35Result = tmp35(NativeText, obj9);
          }
          if (null == children) {
            return tmp35Result;
          } else {
            tmp60 = globalThis;
            _Array = Array;
            if (Array.isArray(children)) {
              num2 = 3;
              if (children.length <= 3) {
                flag7 = false;
                tmp43 = children;
                tmp44 = children;
                for (const item10136 of children) {
                  if (null == item10136) {
                  } else {
                    tmp46 = item10136;
                    if (typeof tmp45 === "object") {
                      flag7 = true;
                      tmp47 = obj12;
                      obj12.return();
                      break;
                    }
                    if (flag7) {
                    } else {
                      return tmp35Result;
                    }
                  }
                  continue;
                }
              }
              tmp48 = jsx;
              tmp49 = closure_1;
              tmp50 = closure_3;
              obj10 = { value: true, children: null };
              obj10.children = tmp35Result;
              return jsx(closure_1(closure_3[6]), obj10);
            }
            if (typeof children !== "object") {
              return tmp35Result;
            }
          }
        }
      } else {
        if (null == tmp5) {
          obj11 = { disabled: null };
          obj11.disabled = disabled2;
          tmp5 = obj11;
        } else {
          tmp5.disabled = tmp8;
        }
        tmp13 = tmp5;
      }
    } else {
      if (null != accessibilityState) {
        if (busy == null) {
          busy = accessibilityState.busy;
        }
        obj12 = { busy: null, checked: null, disabled: null, expanded: null, selected: null };
        obj12.busy = busy;
        if (checked == null) {
          checked = accessibilityState.checked;
        }
        obj12.checked = checked;
        if (disabled == null) {
          disabled = accessibilityState.disabled;
        }
        obj12.disabled = disabled;
        if (expanded == null) {
          expanded = accessibilityState.expanded;
        }
        obj12.expanded = expanded;
        if (selected == null) {
          selected = accessibilityState.selected;
        }
        obj12.selected = selected;
        obj = obj12;
      } else {
        obj = { busy: null, checked: null, disabled: null, expanded: null, selected: null };
        obj.busy = busy;
        obj.checked = checked;
        obj.disabled = disabled;
        obj.expanded = expanded;
        obj.selected = selected;
      }
      tmp6 = obj;
    }
    return;
  }
}
TextImpl.displayName = "Text";
let closure_10 = noop.forwardRef(function PressableVirtualText_withRef(textPressabilityProps, ref) {
  const tmp = _slicedToArray(useTextPressability(textPressabilityProps.textPressabilityProps), 2);
  const obj = {};
  const merged = Object.assign(textPressabilityProps.textProps);
  const merged1 = Object.assign(tmp[1]);
  obj.isHighlighted = tmp[0];
  obj.isPressable = true;
  obj.ref = ref;
  return jsx(NativeText2.NativeVirtualText, {});
});
let closure_11 = noop.forwardRef(function PressableText_withRef(textPressabilityProps, ref) {
  const tmp = _slicedToArray(useTextPressability(textPressabilityProps.textPressabilityProps), 2);
  if (true === textPressabilityProps.selectable) {
    let NativeText = NativeText2.NativeSelectableText;
  } else {
    NativeText = NativeText2.NativeText;
  }
  const obj = {};
  const merged = Object.assign(textPressabilityProps.textProps);
  const merged1 = Object.assign(tmp[1]);
  obj.isHighlighted = tmp[0];
  obj.isPressable = true;
  obj.ref = ref;
  return <NativeText />;
});
let closure_12 = { auto: true, text: true, none: false, contain: true, all: true };
const value = get_hairlineWidth.create({ default: { overflow: "hidden" } });

export default TextImpl;