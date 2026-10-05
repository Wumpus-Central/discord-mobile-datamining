// === Module 423: TextInput ===

// Module 423 (TextInput)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import reactDefault from "react" /* 111 */;
import _modDef144 from "module_144" /* 144 */;
import _mod145 from "module_145" /* 145 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import get_VersionDefault from "get Version" /* 273 */;
import usePressabilityDefault from "usePressability" /* 301 */;
import useMergeRefsDefault from "useMergeRefs" /* 334 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

const require = globalThis.__r;
let closure_5, dependencyMap, importDefault, setTextAndSelection;

let c10;
let c9;
let closure_12;
let map1;
let unpackModuleId;
function InternalTextInput(value) {
  let accessibilityState;
  let accessible;
  let caretHidden;
  let closure_1;
  let closure_6;
  let cursorColor;
  let defaultValue;
  let editable;
  let focusable;
  let id;
  let onBlur;
  let onFocus;
  let onPress;
  let onPressIn;
  let selection;
  let selectionColor;
  let selectionHandleColor;
  let str;
  let str7;
  let tabIndex;
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  importDefault = value;
  ({ "aria-busy": tmp, "aria-checked": tmp2, "aria-disabled": tmp3, "aria-expanded": tmp4, "aria-selected": tmp5, accessibilityState, id, tabIndex, selection, selectionColor, selectionHandleColor, cursorColor } = value);
  const tmp6 = _objectWithoutProperties;
  const tmp7 = _objectWithoutProperties(value, closure_2);
  const tmp8 = closure_12(null);
  dependencyMap = tmp8;
  let tmp9 = null;
  if (null != selection) {
    let start = selection.end;
    if (start == null) {
      start = selection.start;
    }
    let obj = { end: start, start: selection.start };
    tmp9 = obj;
  }
  if (typeof value.value === "string") {
    defaultValue = value.value;
  } else if (typeof value.defaultValue === "string") {
    defaultValue = value.defaultValue;
  }
  let tmp10 = closure_5;
  if (!tmp10) {
    const multiline = value.multiline;
  }
  closure_2 = tmp10;
  const tmp11 = editable(closure_13(0), 2);
  closure_4 = tmp11[1];
  importDefault = value;
  obj = tmp9;
  const mostRecentEventCount = tmp8;
  const tmp13 = editable(closure_13(value.value), 2);
  const first1 = tmp13[0];
  let closure_7 = tmp15;
  const tmp16 = editable(closure_13({ mostRecentEventCount, selection: { end: -1, start: -1 } }), 2);
  let closure_8 = tmp17;
  const selection2 = tmp16[0].selection;
  const items = [mostRecentEventCount, tmp8, , , , , , , ];
  ({ value: arr[2], defaultValue: arr[3] } = value);
  items[4] = first1;
  items[5] = tmp9;
  items[6] = selection2;
  items[7] = defaultValue;
  items[8] = tmp10;
  onPressIn(() => {
    selection = {};
    const tmp = first1 !== value.value && typeof value.value === "string";
    if (tmp) {
      selection.text = value.value;
      closure_7(value.value);
    }
    let tmp5 = selection && selection2;
    if (tmp5) {
      tmp5 = selection2.start !== selection.start || selection2.end !== selection.end;
    }
    if (tmp5) {
      selection.selection = selection;
      const obj2 = { mostRecentEventCount, selection };
      closure_8(obj2);
    }
    const tmp10 = 0 !== Object.keys(selection).length && null != ref.current;
    if (tmp10) {
      const current = ref.current;
      let num;
      setTextAndSelection = setTextAndSelection.setTextAndSelection;
      if (selection != null) {
        num = tmp4.start;
      }
      if (num == null) {
        num = -1;
      }
      let num2;
      if (selection != null) {
        num2 = tmp4.end;
      }
      if (num2 == null) {
        num2 = -1;
      }
      setTextAndSelection(current, mostRecentEventCount, defaultValue, num, num2);
    }
  }, items);
  closure_5 = tmp15;
  _objectWithoutProperties = tmp17;
  onPressIn(() => {
    const current = closure_1.current;
    if (null != current) {
      let obj = _modDef144;
      obj.registerInput(current);
      return () => {
        const obj = closure_2_0(closure_2_1[5]);
        obj.unregisterInput(current);
        const obj2 = closure_2_0(closure_2_1[5]);
        if (obj2.currentlyFocusedInput() === current) {
          const obj3 = closure_2_0(closure_2_1[6])(current);
          obj3.blur();
        }
      };
    }
  }, []);
  const items1 = [mostRecentEventCount, tmp10];
  let flag = value.multiline;
  const tmp20 = onPress((current) => {
    closure_1.current = current;
    if (null != current) {
      let obj = _modDef144;
      obj.registerInput(current);
      const _Object = Object;
      const obj2 = {
        clear() {
            if (null != closure_1_1.current) {
              closure_1_2.setTextAndSelection(tmp.current, mostRecentEventCount, "", 0, 0);
            }
          },
        getNativeRef() {
            return closure_1_1.current;
          },
        isFocused() {
            const obj = require("module_144");
            const result = obj.currentlyFocusedInput();
            return null != result && result === closure_1_1.current;
          },
        setSelection(arg0, arg1) {
            if (null != closure_1_1.current) {
              closure_1_2.setTextAndSelection(tmp.current, mostRecentEventCount, null, arg0, arg1);
            }
          }
      };
      const merged = Object.assign(current, obj2);
    }
  }, items1);
  const tmp23 = useMergeRefsDefault(tmp20, value.forwardedRef);
  if (flag == null) {
    flag = false;
  }
  if (null != value.submitBehavior) {
    let str3;
    if (flag) {
      str3 = value.submitBehavior;
    } else {
      str3 = "blurAndSubmit";
    }
    str = str3;
  } else {
    const blurOnSubmit = value.blurOnSubmit;
    if (flag) {
      let str2 = "newline";
      if (true === blurOnSubmit) {
        str2 = "blurAndSubmit";
      }
      str = str2;
    } else {
      str = "submit";
      if (false !== blurOnSubmit) {
        str = "blurAndSubmit";
      }
    }
  }
  editable = value.editable;
  const hitSlop = value.hitSlop;
  onPress = value.onPress;
  onPressIn = value.onPressIn;
  const onPressOut = value.onPressOut;
  const items2 = [editable, hitSlop, onPress, onPressIn, onPressOut, ];
  ({ rejectResponderTermination: arr3[5], accessible, focusable, caretHidden } = value);
  const tmp24 = onPressOut(() => {
    let ref;
    return {
      cancelable: null,
      hitSlop,
      onPress(arg0) {
        if (onPress != null) {
          tmp(arg0);
        }
        const tmp4 = false !== editable && null != ref.current;
        if (tmp4) {
          const current = ref.current;
          current.focus();
        }
      },
      onPressIn,
      onPressOut
    };
  }, items2);
  if (get_VersionDefault.isTesting) {
    caretHidden = true;
  }
  const tmp25 = usePressabilityDefault(tmp24);
  ({ onBlur, onFocus } = tmp25);
  let prop;
  const tmp6Result = tmp6(tmp25, mostRecentEventCount);
  if (value != null) {
    prop = value["aria-label"];
  }
  if (prop == null) {
    let accessibilityLabel;
    if (value != null) {
      accessibilityLabel = value.accessibilityLabel;
    }
    prop = accessibilityLabel;
  }
  let tmp30;
  const tmp29 = null == accessibilityState && null == tmp && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp5;
  if (!tmp29) {
    if (tmp == null) {
      let busy;
      if (accessibilityState != null) {
        busy = accessibilityState.busy;
      }
      tmp = busy;
    }
    let obj2 = { busy: tmp, checked: tmp2, disabled: tmp3, expanded: tmp4, selected: tmp5 };
    if (tmp2 == null) {
      let checked;
      if (accessibilityState != null) {
        checked = accessibilityState.checked;
      }
      tmp2 = checked;
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
      tmp4 = expanded;
    }
    if (tmp5 == null) {
      let selected;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
      tmp5 = selected;
    }
    tmp30 = obj2;
  }
  const style = value.style;
  const tmp36 = flattenStyleDefault(value.style);
  let tmp37 = style;
  if (null != tmp36) {
    let fontWeight;
    if (tmp36 != null) {
      fontWeight = tmp36.fontWeight;
    }
    let tmp39 = null;
    if (typeof fontWeight === "number") {
      let obj3 = { fontWeight: str7.toString() };
      tmp39 = obj3;
      str7 = tmp36.fontWeight;
    }
    let tmp40 = tmp39;
    if (null != tmp36.verticalAlign) {
      const tmp41 = tmp39 || {};
      tmp41.textAlignVertical = closure_19[tmp36.verticalAlign];
      tmp41.verticalAlign = undefined;
      tmp40 = tmp41;
    }
    tmp37 = style;
    if (null != tmp40) {
      const items3 = [style, tmp40];
      tmp37 = items3;
    }
  }
  let prop1;
  const tmp43 = value.autoCapitalize || "sentences";
  if (value != null) {
    prop1 = value["aria-labelledby"];
  }
  if (prop1 == null) {
    let prop2;
    if (value != null) {
      prop2 = value.accessibilityLabelledBy;
    }
    prop1 = prop2;
  }
  let str5;
  if (true === value["aria-hidden"]) {
    str5 = "no-hide-descendants";
  }
  let str6 = value.placeholder;
  if (str6 == null) {
    str6 = "";
  }
  const children = value.children;
  const Children = hitSlop.Children;
  const countResult = Children.count(children);
  let tmp48 = null != value.value;
  const tmp21Result = _modDef38;
  if (tmp48) {
    tmp48 = countResult;
  }
  tmp21Result(!tmp48, "Cannot specify both value and children.");
  let tmp50 = children;
  if (countResult > 1) {
    tmp50 = jsx(tmp21(298), { children });
  }
  let merged = Object.assign(tmp7);
  if (undefined === cursorColor) {
    cursorColor = selectionColor;
  }
  const obj6 = { cursorColor, selectionColor, selectionHandleColor };
  if (undefined === selectionHandleColor) {
    selectionHandleColor = selectionColor;
  }
  let tmp56 = false !== focusable;
  const tmp55 = false !== accessible;
  const merged1 = Object.assign(obj6);
  const merged2 = Object.assign(tmp6Result);
  if (undefined !== tabIndex) {
    tmp56 = !tabIndex;
  }
  if (id == null) {
    id = value.nativeID;
  }
  let numberOfLines = value.rows;
  if (numberOfLines == null) {
    numberOfLines = value.numberOfLines;
  }
  const children1 = <tmp53 ref={tmp23} accessibilityLabel={prop} accessibilityLabelledBy={prop1} accessibilityState={tmp30} accessible={tmp55} acceptDragAndDropTypes={value.experimental_acceptDragAndDropTypes} autoCapitalize={tmp43} submitBehavior={str} caretHidden={caretHidden} disableFullscreenUI={value.disableFullscreenUI} focusable={tmp56} importantForAccessibility={str5} mostRecentEventCount={mostRecentEventCount} nativeID={id} numberOfLines={numberOfLines} onBlur={function onBlur(arg0) {
    const obj = _modDef144;
    obj.blurInput(closure_1.current);
    if (value.onBlur) {
      value.onBlur(arg0);
    }
  }} onChange={function onChange(nativeEvent) {
    const text = nativeEvent.nativeEvent.text;
    if (value.onChange) {
      value.onChange(nativeEvent);
    }
    if (value.onChangeText) {
      value.onChangeText(text);
    }
    if (null != closure_1.current) {
      closure_5(text);
      closure_4(nativeEvent.nativeEvent.eventCount);
    }
  }} onFocus={function onFocus(arg0) {
    const obj = _modDef144;
    obj.focusInput(closure_1.current);
    if (value.onFocus) {
      value.onFocus(arg0);
    }
  }} onScroll={function onScroll(arg0) {
    if (value.onScroll) {
      value.onScroll(arg0);
    }
  }} onSelectionChange={function onSelectionChange(nativeEvent) {
    if (value.onSelectionChange) {
      value.onSelectionChange(nativeEvent);
    }
    if (null != closure_1.current) {
      const obj2 = { mostRecentEventCount, selection: nativeEvent.nativeEvent.selection };
      closure_6(obj2);
    }
  }} placeholder={str6} style={tmp37} text={defaultValue} textBreakStrategy={value.textBreakStrategy}>{tmp50}</tmp53>;
  return jsx(reactDefault, { value: true, children: children1 });
}
let closure_2 = ["aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-selected", "accessibilityState", "id", "tabIndex", "selection", "selectionColor", "selectionHandleColor", "cursorColor"];
let closure_3 = ["onBlur", "onFocus"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ useCallback: c9, useLayoutEffect: c10, useMemo: unpackModuleId, useRef: closure_12, useState: map1 } = react);
const jsx = Fragment.jsx;
let closure_4 = _mod145.default;
const Commands = _mod145.Commands;
const authStore3 = { done: "done", enter: "default", go: "go", next: "next", previous: "previous", search: "search", send: "send" };
let closure_17 = { decimal: "decimal-pad", email: "email-address", none: "default", numeric: "number-pad", search: "default", tel: "phone-pad", text: "default", url: "url" };
const authStore4 = { "additional-name": "name-middle", "address-line1": "postal-address-region", "address-line2": "postal-address-locality", bday: "birthdate-full", "bday-day": "birthdate-day", "bday-month": "birthdate-month", "bday-year": "birthdate-year", "cc-csc": "cc-csc", "cc-exp": "cc-exp", "cc-exp-month": "cc-exp-month", "cc-exp-year": "cc-exp-year", "cc-number": "cc-number", country: "postal-address-country", "current-password": "password", email: "email", "family-name": "name-family", "given-name": "name-given", "honorific-prefix": "name-prefix", "honorific-suffix": "name-suffix", name: "name", "new-password": "password-new", off: "off", "one-time-code": "sms-otp", "postal-code": "postal-code", sex: "gender", "street-address": "street-address", tel: "tel", "tel-country-code": "tel-country-code", "tel-national": "tel-national", username: "username" };
class TextInput {
  constructor(allowFontScaling) {
    let autoComplete;
    let editable;
    let enterKeyHint;
    let inputMode;
    let keyboardType;
    let readOnly;
    let returnKeyType;
    let showSoftInputOnFocus;
    let flag = allowFontScaling.allowFontScaling;
    const ref = allowFontScaling.ref;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = allowFontScaling.rejectResponderTermination;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let str = allowFontScaling.underlineColorAndroid;
    if (str === undefined) {
      str = "transparent";
    }
    ({ autoComplete, readOnly, editable, enterKeyHint, returnKeyType, inputMode, showSoftInputOnFocus, keyboardType } = allowFontScaling);
    const textContentType = allowFontScaling.textContentType;
    const merged = Object.assign(allowFontScaling, Object.assign({ ref: 0, allowFontScaling: 0, rejectResponderTermination: 0, underlineColorAndroid: 0, autoComplete: 0, textContentType: 0, readOnly: 0, editable: 0, enterKeyHint: 0, returnKeyType: 0, inputMode: 0, showSoftInputOnFocus: 0, keyboardType: 0 }));
    if (undefined !== readOnly) {
      editable = !readOnly;
    }
    if (enterKeyHint) {
      returnKeyType = closure_16[enterKeyHint];
    }
    if (inputMode) {
      keyboardType = closure_17[inputMode];
    }
    if (null != inputMode) {
      showSoftInputOnFocus = "none" !== inputMode;
    }
    let tmp6 = closure_18[autoComplete];
    if (tmp6 == null) {
      tmp6 = autoComplete;
    }
    const merged1 = Object.assign(merged);
    return <InternalTextInput allowFontScaling={flag} rejectResponderTermination={flag2} underlineColorAndroid={str} editable={editable} returnKeyType={returnKeyType} keyboardType={keyboardType} showSoftInputOnFocus={showSoftInputOnFocus} autoComplete={tmp6} textContentType={textContentType} forwardedRef={ref} />;
  }
}
TextInput.displayName = "TextInput";
let obj = { blurTextInput: _modDef144.blurTextInput, currentlyFocusedField: _modDef144.currentlyFocusedField, currentlyFocusedInput: _modDef144.currentlyFocusedInput, focusTextInput: _modDef144.focusTextInput };
TextInput.State = obj;
let obj2 = get_hairlineWidth.create({ multilineDefault: { paddingTop: 5 } });
let closure_19 = { auto: "auto", bottom: "bottom", middle: "center", top: "top" };

export default TextInput;