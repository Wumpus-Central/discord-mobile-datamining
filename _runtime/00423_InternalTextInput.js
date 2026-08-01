// === Module 423: InternalTextInput ===

// Module 423 (InternalTextInput)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import closure_8 from "noop";
import noop from "noop";
import { jsx } from "jsxProd";
import { default as Commands } from "Commands";
import { Commands } from "Commands";

let c10;
let c9;
let closure_12;
let map1;
let unpackModuleId;
function InternalTextInput(value) {
  let accessibilityState;
  let accessible;
  let caretHidden;
  let cursorColor;
  let focusable;
  let id;
  let onBlur;
  let onFocus;
  let selection;
  let selectionColor;
  let selectionHandleColor;
  let tabIndex;
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let importDefault = value;
  ({ aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-selected: tmp5, accessibilityState, id, tabIndex, selection, selectionColor, selectionHandleColor, cursorColor } = value);
  const tmp8 = callback(null);
  let first = tmp8;
  let tmp9 = null;
  if (null != selection) {
    let start = selection.end;
    if (start == null) {
      start = selection.start;
    }
    let obj = { end: null, start: null };
    obj[0] = start;
    obj[1] = selection.start;
    tmp9 = obj;
  }
  if (typeof value.value === "y") {
    let defaultValue = value.value;
  } else if (typeof value.defaultValue !== "__FORMATJS_LISTFORMAT_DATA__") {
    defaultValue = value.defaultValue;
  }
  if (!Commands) {
    const multiline = value.multiline;
  }
  let closure_2 = tmp10;
  const tmp11 = editable(callback2(0), 2);
  first = tmp11[0];
  defaultValue = tmp11[1];
  importDefault = value;
  closure_2 = tmp9;
  first = tmp8;
  Commands = tmp10;
  let first1;
  editable = undefined;
  let hitSlop;
  let onPress;
  let tmp13 = editable(callback2(value.value), 2);
  first1 = tmp13[0];
  editable = tmp15;
  const tmp16 = editable(callback2({ mostRecentEventCount: first, selection: { end: -1, start: -1 } }), 2);
  hitSlop = tmp17;
  const selection2 = tmp16[0].selection;
  onPress = selection2;
  const items = [first, tmp8, , , , , , , ];
  ({ value: arr[2], defaultValue: arr[3] } = value);
  items[4] = first1;
  items[5] = tmp9;
  items[6] = selection2;
  items[7] = defaultValue;
  items[8] = Commands;
  onPressIn(() => {
    let obj = {};
    if (tmp) {
      obj.text = iter.value;
      editable(iter.value);
    }
    let tmp5 = closure_2;
    if (closure_2) {
      tmp5 = onPress;
    }
    if (tmp5) {
      tmp5 = onPress.start !== tmp4.start || onPress.end !== tmp4.end;
      const tmp6 = onPress.start !== tmp4.start || onPress.end !== tmp4.end;
    }
    if (tmp5) {
      obj.selection = tmp4;
      obj = { mostRecentEventCount: null, selection: null };
      obj[0] = first;
      obj[1] = tmp4;
      hitSlop(obj);
    }
    let tmp10 = 0 !== Object.keys(obj).length;
    if (tmp10) {
      tmp10 = null != first.current;
    }
    if (tmp10) {
      const current = first.current;
      let num;
      if (tmp4 != null) {
        num = tmp4.start;
      }
      if (num == null) {
        num = -1;
      }
      let num2;
      if (tmp4 != null) {
        num2 = tmp4.end;
      }
      if (num2 == null) {
        num2 = -1;
      }
      first.setTextAndSelection(current, first, defaultValue, num, num2);
      const tmp13 = tmp15;
    }
  }, items);
  Commands = tmp15;
  first1 = tmp17;
  onPressIn(() => {
    const current = first.current;
    if (null != current) {
      value(first[5]).registerInput(current);
      return () => {
        current(outer1_1[5]).unregisterInput(current);
        const obj = current(outer1_1[5]);
        const tmp = current;
        const tmp2 = outer1_1;
        const tmp3 = current;
        if (obj2.currentlyFocusedInput() === current) {
          tmp(tmp2[6])(tmp3).blur();
          const obj3 = tmp(tmp2[6])(tmp3);
        }
      };
    }
  }, []);
  const items1 = [first, Commands];
  let tmp6 = first1;
  const tmp7 = first1(value, closure_2);
  let flag = value.multiline;
  const tmp20 = onPress((current) => {
    first.current = current;
    if (null != current) {
      let obj = value(first[5]);
      obj.registerInput(current);
      const _Object = Object;
      obj = { clear: null, getNativeRef: null, isFocused: null, setSelection: null };
      obj[0] = function clear() {
        if (null != closure_1.current) {
          store.setTextAndSelection(tmp.current, closure_3, "", 0, 0);
        }
      };
      obj[1] = function getNativeRef() {
        return closure_1.current;
      };
      obj[2] = function isFocused() {
        const result = outer1_0(outer1_1[5]).currentlyFocusedInput();
        let tmp2 = null != result;
        if (tmp2) {
          tmp2 = result === closure_1.current;
        }
        return tmp2;
      };
      obj[3] = function setSelection(arg0, arg1) {
        if (null != closure_1.current) {
          store.setTextAndSelection(tmp.current, closure_3, null, arg0, arg1);
        }
      };
      const merged = Object.assign(current, obj);
    }
  }, items1);
  if (flag == null) {
    flag = false;
  }
  if (null != value.submitBehavior) {
    if (flag) {
      let str3 = value.submitBehavior;
    } else {
      str3 = "blurAndSubmit";
    }
    let str = str3;
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
  hitSlop = value.hitSlop;
  onPress = value.onPress;
  onPressIn = value.onPressIn;
  const onPressOut = value.onPressOut;
  const items2 = [editable, hitSlop, onPress, onPressIn, onPressOut, ];
  ({ rejectResponderTermination: arr3[5], accessible, focusable, caretHidden } = value);
  const tmp23 = importDefault(first[7])(onPress((current) => {
    first.current = current;
    if (null != current) {
      let obj = value(first[5]);
      obj.registerInput(current);
      const _Object = Object;
      obj = { clear: null, getNativeRef: null, isFocused: null, setSelection: null };
      obj[0] = function clear() {
        if (null != closure_1.current) {
          store.setTextAndSelection(tmp.current, closure_3, "", 0, 0);
        }
      };
      obj[1] = function getNativeRef() {
        return closure_1.current;
      };
      obj[2] = function isFocused() {
        const result = outer1_0(outer1_1[5]).currentlyFocusedInput();
        let tmp2 = null != result;
        if (tmp2) {
          tmp2 = result === closure_1.current;
        }
        return tmp2;
      };
      obj[3] = function setSelection(arg0, arg1) {
        if (null != closure_1.current) {
          store.setTextAndSelection(tmp.current, closure_3, null, arg0, arg1);
        }
      };
      const merged = Object.assign(current, obj);
    }
  }, items1), value.forwardedRef);
  if (importDefault(first[8]).isTesting) {
    caretHidden = true;
  }
  const tmp25 = importDefault(first[9])(onPressOut(() => ({
    cancelable: null,
    hitSlop,
    onPress(arg0) {
      if (closure_9 != null) {
        tmp(arg0);
      }
      let tmp4 = false !== _slicedToArray;
      if (tmp4) {
        tmp4 = null != ref.current;
      }
      if (tmp4) {
        const current = ref.current;
        current.focus();
      }
    },
    onPressIn,
    onPressOut
  }), items2));
  ({ onBlur, onFocus } = tmp25);
  const tmp24 = onPressOut(() => ({
    cancelable: null,
    hitSlop,
    onPress(arg0) {
      if (closure_9 != null) {
        tmp(arg0);
      }
      let tmp4 = false !== _slicedToArray;
      if (tmp4) {
        tmp4 = null != ref.current;
      }
      if (tmp4) {
        const current = ref.current;
        current.focus();
      }
    },
    onPressIn,
    onPressOut
  }), items2);
  let prop;
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
  if (!tmp29) {
    if (tmp == null) {
      let busy;
      if (accessibilityState != null) {
        busy = accessibilityState.busy;
      }
    }
    obj = { busy: null, checked: null, disabled: null, expanded: null, selected: null };
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
    if (tmp5 == null) {
      let selected;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
    }
    obj[4] = tmp5;
    tmp30 = obj;
  }
  const style = value.style;
  const tmp36 = importDefault(first[10])(value.style);
  let tmp37 = style;
  if (null != tmp36) {
    let fontWeight;
    if (tmp36 != null) {
      fontWeight = tmp36.fontWeight;
    }
    let tmp39 = null;
    if (typeof fontWeight !== "__REMOTEDEV__") {
      obj = { fontWeight: tmp36.fontWeight.toString() };
      tmp39 = obj;
      const str7 = tmp36.fontWeight;
    }
    let tmp40 = tmp39;
    if (null != tmp36.verticalAlign) {
      let obj1 = tmp39;
      if (!tmp39) {
        obj1 = {};
      }
      obj1.textAlignVertical = table4[tmp36.verticalAlign];
      obj1.verticalAlign = undefined;
      tmp40 = obj1;
    }
    tmp37 = style;
    if (null != tmp40) {
      const items3 = [style, tmp40];
      tmp37 = items3;
    }
  }
  let prop1;
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
  let children = value.children;
  const Children = hitSlop.Children;
  const countResult = Children.count(children);
  let tmp47 = null != value.value;
  tmp29 = null == accessibilityState && null == tmp && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp5;
  const tmp42 = value.autoCapitalize || "sentences";
  const tmp6Result = tmp6(tmp25, first);
  if (tmp47) {
    tmp47 = countResult;
  }
  importDefault(first[11])(!tmp47, "Cannot specify both value and children.");
  let tmp49 = children;
  if (countResult > 1) {
    const obj2 = { children: null };
    obj2[0] = children;
    tmp49 = jsx(tmp21(tmp22[12]), { children: null });
  }
  let obj3 = { ref: tmp23 };
  let merged = Object.assign(tmp7);
  if (undefined === cursorColor) {
    cursorColor = selectionColor;
  }
  const obj4 = { cursorColor, selectionColor, selectionHandleColor: null };
  if (undefined === selectionHandleColor) {
    selectionHandleColor = selectionColor;
  }
  let tmp55 = false !== focusable;
  obj4[2] = selectionHandleColor;
  const merged1 = Object.assign(obj4);
  const merged2 = Object.assign(tmp6Result);
  obj3.accessibilityLabel = prop;
  obj3.accessibilityLabelledBy = prop1;
  obj3.accessibilityState = tmp30;
  obj3.accessible = false !== accessible;
  obj3.acceptDragAndDropTypes = value.experimental_acceptDragAndDropTypes;
  obj3.autoCapitalize = tmp42;
  obj3.submitBehavior = str;
  obj3.caretHidden = caretHidden;
  obj3.children = tmp49;
  obj3.disableFullscreenUI = value.disableFullscreenUI;
  if (undefined !== tabIndex) {
    tmp55 = !tabIndex;
  }
  obj3.focusable = tmp55;
  obj3.importantForAccessibility = str5;
  obj3.mostRecentEventCount = first;
  if (id == null) {
    id = value.nativeID;
  }
  obj3.nativeID = id;
  let numberOfLines = value.rows;
  if (numberOfLines == null) {
    numberOfLines = value.numberOfLines;
  }
  obj3.numberOfLines = numberOfLines;
  obj3.onBlur = function onBlur(arg0) {
    value(first[5]).blurInput(first.current);
    if (value.onBlur) {
      value.onBlur(arg0);
    }
  };
  obj3.onChange = function onChange(nativeEvent) {
    const text = nativeEvent.nativeEvent.text;
    if (value.onChange) {
      obj.onChange(nativeEvent);
    }
    if (value.onChangeText) {
      obj.onChangeText(text);
    }
    if (null != first.current) {
      tmp15(text);
      defaultValue(nativeEvent.nativeEvent.eventCount);
    }
  };
  obj3.onFocus = function onFocus(arg0) {
    value(first[5]).focusInput(first.current);
    if (value.onFocus) {
      value.onFocus(arg0);
    }
  };
  obj3.onScroll = function onScroll(arg0) {
    if (value.onScroll) {
      value.onScroll(arg0);
    }
  };
  obj3.onSelectionChange = function onSelectionChange(nativeEvent) {
    let obj = value;
    if (value.onSelectionChange) {
      obj.onSelectionChange(nativeEvent);
    }
    if (null != first.current) {
      obj = { mostRecentEventCount: null, selection: null };
      obj[0] = first;
      obj[1] = nativeEvent.nativeEvent.selection;
      first1(obj);
    }
  };
  obj3.placeholder = str6;
  obj3.style = tmp37;
  obj3.text = defaultValue;
  obj3.textBreakStrategy = value.textBreakStrategy;
  children = tmp51(defaultValue, obj3);
  return jsx(importDefault(first[13]), { value: true, children });
}
let closure_2 = ["aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-selected", "accessibilityState", "id", "tabIndex", "selection", "selectionColor", "selectionHandleColor", "cursorColor"];
let closure_3 = ["onBlur", "onFocus"];
({ useCallback: c9, useLayoutEffect: c10, useMemo: unpackModuleId, useRef: closure_12, useState: map1 } = noop);
let closure_16 = { done: "done", enter: "default", go: "go", next: "next", previous: "previous", search: "search", send: "send" };
let closure_17 = { decimal: "decimal-pad", email: "email-address", none: "default", numeric: "number-pad", search: "default", tel: "phone-pad", text: "default", url: "url" };
let closure_18 = { "additional-name": "name-middle", "address-line1": "postal-address-region", "address-line2": "postal-address-locality", bday: "birthdate-full", "bday-day": "birthdate-day", "bday-month": "birthdate-month", "bday-year": "birthdate-year", "cc-csc": "cc-csc", "cc-exp": "cc-exp", "cc-exp-month": "cc-exp-month", "cc-exp-year": "cc-exp-year", "cc-number": "cc-number", country: "postal-address-country", "current-password": "password", email: "email", "family-name": "name-family", "given-name": "name-given", "honorific-prefix": "name-prefix", "honorific-suffix": "name-suffix", name: "name", "new-password": "password-new", off: "off", "one-time-code": "sms-otp", "postal-code": "postal-code", sex: "gender", "street-address": "street-address", tel: "tel", "tel-country-code": "tel-country-code", "tel-national": "tel-national", username: "username" };
class TextInput {
  constructor(arg0) {
    flag = global.allowFontScaling;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.rejectResponderTermination;
    if (flag2 === undefined) {
      flag2 = true;
    }
    str = global.underlineColorAndroid;
    if (str === undefined) {
      str = "transparent";
    }
    ({ autoComplete, readOnly, editable, enterKeyHint, returnKeyType, inputMode, showSoftInputOnFocus, keyboardType } = global);
    merged = Object.assign(global, Object.create(null));
    obj = { allowFontScaling: flag, rejectResponderTermination: flag2, underlineColorAndroid: str, editable: null, returnKeyType: null, keyboardType: null, showSoftInputOnFocus: null, autoComplete: null, textContentType: null };
    tmp2 = jsx;
    tmp3 = InternalTextInput;
    if (undefined !== readOnly) {
      editable = !readOnly;
    }
    obj[3] = editable;
    if (enterKeyHint) {
      tmp4 = Commands;
      returnKeyType = Commands[enterKeyHint];
    }
    obj[4] = returnKeyType;
    if (inputMode) {
      tmp5 = Commands;
      keyboardType = Commands[inputMode];
    }
    obj[5] = keyboardType;
    if (null != inputMode) {
      str2 = "none";
      showSoftInputOnFocus = "none" !== inputMode;
    }
    obj[6] = showSoftInputOnFocus;
    tmp6 = Commands[autoComplete];
    if (tmp6 == null) {
      tmp6 = autoComplete;
    }
    obj[7] = tmp6;
    obj[8] = global.textContentType;
    merged1 = Object.assign(merged);
    obj.forwardedRef = global.ref;
    return tmp2(tmp3, obj);
  }
}
TextInput.displayName = "TextInput";
let obj = { blurTextInput: require("set").blurTextInput, currentlyFocusedField: require("set").currentlyFocusedField, currentlyFocusedInput: require("set").currentlyFocusedInput, focusTextInput: require("set").focusTextInput };
TextInput.State = obj;
obj = require("get hairlineWidth").create({ multilineDefault: { paddingTop: 5 } });
let closure_19 = { auto: "auto", bottom: "bottom", middle: "center", top: "top" };

export default TextInput;