// _runtime/00298_useTextPressability.js
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import noop from "noop";
import { jsx } from "jsxProd";

let c5;
let closure_6;
let error;
const require = arg1;
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
  let first;
  let c12;
  let c13;
  first = onResponderGrant(onResponderTerminate(false), 2)[0];
  let items = [pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut, textPressabilityProps.suppressHighlighting];
  const tmp = onResponderGrant(onResponderTerminate(false), 2);
  const tmp4 = onPress(onPressOut[8])(onResponderRelease(() => ({ disabled: false, pressRectOffset: pressRetentionOffset, onLongPress, onPress, onPressIn, onPressOut }), items));
  c12 = tmp4;
  const items1 = [tmp4, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, onStartShouldSetResponder];
  const tmp5 = onResponderRelease(() => {
    let tmp2 = null;
    if (null != c12) {
      const obj = { onResponderGrant: null, onResponderMove: null, onResponderRelease: null, onResponderTerminate: null, onClick: null, onResponderTerminationRequest: null, onStartShouldSetResponder: null };
      obj[0] = function onResponderGrant(arg0) {
        closure_12.onResponderGrant(arg0);
        if (null != _slicedToArray) {
          tmp2(arg0);
        }
      };
      obj[1] = function onResponderMove(arg0) {
        closure_12.onResponderMove(arg0);
        if (null != closure_5) {
          tmp2(arg0);
        }
      };
      obj[2] = function onResponderRelease(arg0) {
        closure_12.onResponderRelease(arg0);
        if (null != closure_6) {
          tmp2(arg0);
        }
      };
      obj[3] = function onResponderTerminate(arg0) {
        closure_12.onResponderTerminate(arg0);
        if (null != closure_7) {
          tmp2(arg0);
        }
      };
      obj[4] = tmp.onClick;
      if (null == onResponderTerminationRequest) {
        onResponderTerminationRequest = tmp.onResponderTerminationRequest;
      }
      obj[5] = onResponderTerminationRequest;
      if (null == onStartShouldSetResponder) {
        onStartShouldSetResponder = tmp.onStartShouldSetResponder;
      }
      obj[6] = onStartShouldSetResponder;
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  c13 = tmp5;
  const items2 = [first, tmp5];
  return onResponderRelease(() => {
    const items = [first, c13];
    return items;
  }, items2);
}
({ useContext: c5, useMemo: closure_6, useState: error } = noop);
class TextImpl {
  constructor(arg0) {
    ({ ref, accessible, accessibilityRole, accessibilityState, aria-busy: busy, aria-checked: checked, aria-disabled: disabled, aria-expanded: expanded, aria-hidden: tmp, aria-label: tmp2, aria-selected: selected, children, ellipsizeMode, disabled: disabled2, id, numberOfLines, onLongPress, onPress, onStartShouldSetResponder, role, selectable, selectionColor, style } = global);
    ({ accessibilityLabel, allowFontScaling, nativeID, onPressIn, onPressOut, onResponderGrant, onResponderMove, onResponderRelease, onResponderTerminate, onResponderTerminationRequest, pressRetentionOffset, suppressHighlighting } = global);
    merged = Object.assign(global, Object.create(null));
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
          tmp18 = require("processColor")(selectionColor);
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
        tmp24 = require("flattenStyle")(style);
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
            tmp28 = PressableText_withRef;
            obj1 = tmp58;
            if (!tmp58) {
              obj1 = {};
            }
            obj1.userSelect = undefined;
            tmp27 = obj1;
            selectable = PressableText_withRef[tmp24.userSelect];
          }
          tmp29 = tmp27;
          if (null != tmp24.verticalAlign) {
            obj2 = tmp27;
            if (!tmp27) {
              obj2 = {};
            }
            tmp30 = PressableText_withRef;
            obj2.textAlignVertical = PressableText_withRef[tmp24.verticalAlign];
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
        obj6 = require("javaScriptFlagGetter");
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
          obj3[0] = onLongPress;
          obj3[1] = onPress;
          obj3[2] = onPressIn;
          obj3[3] = onPressOut;
          obj3[4] = onResponderGrant;
          obj3[5] = onResponderMove;
          obj3[6] = onResponderRelease;
          obj3[7] = onResponderTerminate;
          obj3[8] = onResponderTerminationRequest;
          obj3[9] = onStartShouldSetResponder;
          obj3[10] = pressRetentionOffset;
          obj3[11] = suppressHighlighting;
          obj5 = obj3;
        }
        tmp34 = useContext;
        if (useContext(require("noop"))) {
          merged.disabled = disabled2;
          merged.children = children;
          tmp51 = jsx;
          if (tmp15) {
            obj4 = { ref: null, textProps: null, textPressabilityProps: null };
            obj4[0] = ref;
            obj4[1] = merged;
            tmp57 = PressableVirtualText_withRef;
            if (obj5 == null) {
              obj5 = {};
            }
            obj4[2] = obj5;
            tmp51Result = tmp51(tmp57, obj4);
          } else {
            tmp52 = closure_0;
            obj6 = {};
            tmp53 = obj6;
            tmp54 = merged;
            merged1 = Object.assign(merged);
            obj6.ref = ref;
            tmp51Result = tmp51(require("NativeText").NativeVirtualText, obj6);
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
            obj7[0] = ref;
            obj7[1] = tmp25;
            obj7[2] = merged;
            obj8 = obj5;
            tmp42 = PressableText_withRef;
            if (obj5 == null) {
              obj8 = {};
            }
            obj7[3] = obj8;
            tmp35Result = tmp35(tmp42, obj7);
          } else {
            flag6 = true;
            if (true === tmp25) {
              tmp37 = closure_0;
              NativeText = require("NativeText").NativeSelectableText;
            } else {
              tmp36 = closure_0;
              NativeText = require("NativeText").NativeText;
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
              obj10[1] = tmp35Result;
              return jsx(require("noop"), obj10);
            }
            if (typeof children !== "object") {
              return tmp35Result;
            }
          }
        }
      } else {
        if (null == tmp5) {
          obj11 = { disabled: null };
          obj11[0] = disabled2;
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
        obj12[0] = busy;
        if (checked == null) {
          checked = accessibilityState.checked;
        }
        obj12[1] = checked;
        if (disabled == null) {
          disabled = accessibilityState.disabled;
        }
        obj12[2] = disabled;
        if (expanded == null) {
          expanded = accessibilityState.expanded;
        }
        obj12[3] = expanded;
        if (selected == null) {
          selected = accessibilityState.selected;
        }
        obj12[4] = selected;
        obj = obj12;
      } else {
        obj = { busy: null, checked: null, disabled: null, expanded: null, selected: null };
        obj[0] = busy;
        obj[1] = checked;
        obj[2] = disabled;
        obj[3] = expanded;
        obj[4] = selected;
      }
      tmp6 = obj;
    }
    return;
  }
}
TextImpl.displayName = "Text";
let closure_10 = importAllResult.forwardRef(function PressableVirtualText_withRef(textPressabilityProps, ref) {
  const tmp = callback(useTextPressability(textPressabilityProps.textPressabilityProps), 2);
  const obj = {};
  const merged = Object.assign(textPressabilityProps.textProps);
  const merged1 = Object.assign(tmp[1]);
  obj.isHighlighted = tmp[0];
  obj.isPressable = true;
  obj.ref = ref;
  return jsx(require("00299_NativeText.js") /* NativeText */.NativeVirtualText, {});
});
let closure_11 = importAllResult.forwardRef(function PressableText_withRef(textPressabilityProps, ref) {
  const tmp = callback(useTextPressability(textPressabilityProps.textPressabilityProps), 2);
  if (true === textPressabilityProps.selectable) {
    let NativeText = require("00299_NativeText.js") /* NativeText */.NativeSelectableText;
  } else {
    NativeText = require("00299_NativeText.js") /* NativeText */.NativeText;
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
let closure_13 = { auto: "auto", top: "top", bottom: "bottom", middle: "center" };
let closure_14 = require("get hairlineWidth").create({ default: { overflow: "hidden" } });

export default TextImpl;