// _runtime/00423_InternalTextInput.js
import _modDef144 from "metro/00144__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _slicedToArray from "metro/00032__.js";
import "module_19";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

function InternalTextInput(value) {
  importDefault = value;
  ({ aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-selected: tmp5, accessibilityState, id, tabIndex, selection, selectionColor, selectionHandleColor, cursorColor } = value);
  const tmp8 = closure_12(null);
  let mostRecentEventCount = tmp8;
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
    let defaultValue = value.value;
  } else if (typeof value.defaultValue === "string") {
    defaultValue = value.defaultValue;
  }
  if (!textAndSelection) {
    const multiline = value.multiline;
  }
  const tmp11 = editable(closure_13(0), 2);
  defaultValue = tmp11[1];
  importDefault = value;
  obj = tmp9;
  mostRecentEventCount = tmp8;
  textAndSelection = tmp10;
  editable = undefined;
  const tmp13 = editable(closure_13(value.value), 2);
  const first1 = tmp13[0];
  editable = tmp15;
  const tmp16 = editable(closure_13({ mostRecentEventCount, selection: { end: -1, start: -1 } }), 2);
  let hitSlop = tmp17;
  const selection2 = tmp16[0].selection;
  let onPress = selection2;
  const items = [mostRecentEventCount, tmp8, , , , , , , ];
  ({ value: arr[2], defaultValue: arr[3] } = value);
  items[4] = first1;
  items[5] = tmp9;
  items[6] = selection2;
  items[7] = defaultValue;
  items[8] = textAndSelection;
  onPressIn(() => {
    obj = {};
    if (tmp) {
      obj.text = value.value;
      editable(value.value);
    }
    let tmp5 = obj;
    if (obj) {
      tmp5 = onPress;
    }
    if (tmp5) {
      tmp5 = onPress.start !== tmp4.start || onPress.end !== tmp4.end;
      const tmp6 = onPress.start !== tmp4.start || onPress.end !== tmp4.end;
    }
    if (tmp5) {
      obj.selection = tmp4;
      obj = { mostRecentEventCount, selection: tmp4 };
      hitSlop(obj);
    }
    let tmp10 = 0 !== Object.keys(obj).length;
    if (tmp10) {
      tmp10 = null != mostRecentEventCount.current;
    }
    if (tmp10) {
      const current = mostRecentEventCount.current;
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
      textAndSelection.setTextAndSelection(current, mostRecentEventCount, defaultValue, num, num2);
    }
    tmp = closure_6 !== value.value && typeof value.value === "string";
  }, items);
  textAndSelection = tmp15;
  _objectWithoutProperties = tmp17;
  onPressIn(() => {
    const current = first.current;
    if (null != current) {
      _modDef144.registerInput(current);
      return () => {
        current(first[5]).unregisterInput(current);
        obj = current(first[5]);
        if (obj2.currentlyFocusedInput() === current) {
          current(first[6])(current).blur();
          const obj3 = current(first[6])(current);
        }
        obj2 = current(first[5]);
      };
    }
  }, []);
  const items1 = [mostRecentEventCount, textAndSelection];
  let tmp6 = _objectWithoutProperties;
  const tmp7 = _objectWithoutProperties(value, obj);
  let flag = value.multiline;
  const tmp20 = onPress((current) => {
    first.current = current;
    if (null != current) {
      obj = _modDef144;
      obj.registerInput(current);
      const _Object = Object;
      obj = {
        clear() {
            if (null != ref.current) {
              obj.setTextAndSelection(tmp.current, mostRecentEventCount, "", 0, 0);
            }
          },
        getNativeRef() {
            return mostRecentEventCount.current;
          },
        isFocused() {
            const result = closure_0(first[5]).currentlyFocusedInput();
            let tmp2 = null != result;
            if (tmp2) {
              tmp2 = result === mostRecentEventCount.current;
            }
            return tmp2;
          },
        setSelection(channel, channel2) {
            if (null != ref.current) {
              obj.setTextAndSelection(tmp.current, mostRecentEventCount, null, channel, channel2);
            }
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
  const tmp23 = require("metro/00334__.js")(onPress((current) => {
    first.current = current;
    if (null != current) {
      obj = _modDef144;
      obj.registerInput(current);
      const _Object = Object;
      obj = {
        clear() {
            if (null != ref.current) {
              obj.setTextAndSelection(tmp.current, mostRecentEventCount, "", 0, 0);
            }
          },
        getNativeRef() {
            return mostRecentEventCount.current;
          },
        isFocused() {
            const result = closure_0(first[5]).currentlyFocusedInput();
            let tmp2 = null != result;
            if (tmp2) {
              tmp2 = result === mostRecentEventCount.current;
            }
            return tmp2;
          },
        setSelection(channel, channel2) {
            if (null != ref.current) {
              obj.setTextAndSelection(tmp.current, mostRecentEventCount, null, channel, channel2);
            }
          }
      };
      const merged = Object.assign(current, obj);
    }
  }, items1), value.forwardedRef);
  if (require("get Version").isTesting) {
    caretHidden = true;
  }
  const tmp25 = require("metro/00301__.js")(onPressOut(() => ({
    cancelable: null,
    hitSlop,
    onPress(arg0) {
      if (onPress != null) {
        tmp(arg0);
      }
      let tmp4 = false !== editable;
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
      if (onPress != null) {
        tmp(arg0);
      }
      let tmp4 = false !== editable;
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
    obj = { busy: tmp, checked: null, disabled: null, expanded: null, selected: null };
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
    if (tmp5 == null) {
      let selected;
      if (accessibilityState != null) {
        selected = accessibilityState.selected;
      }
    }
    obj.selected = tmp5;
    tmp30 = obj;
  }
  const style = value.style;
  const tmp36 = require("flattenStyle")(value.style);
  let tmp37 = style;
  if (null != tmp36) {
    let fontWeight;
    if (tmp36 != null) {
      fontWeight = tmp36.fontWeight;
    }
    let tmp39 = null;
    if (typeof fontWeight === "number") {
      obj = { fontWeight: tmp36.fontWeight.toString() };
      tmp39 = obj;
    }
    let tmp40 = tmp39;
    if (null != tmp36.verticalAlign) {
      let obj1 = tmp39;
      if (!tmp39) {
        obj1 = {};
      }
      obj1.textAlignVertical = closure_19[tmp36.verticalAlign];
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
  const tmp6Result = tmp6(tmp25, mostRecentEventCount);
  if (tmp47) {
    tmp47 = countResult;
  }
  require("metro/00038__.js")(!tmp47, "Cannot specify both value and children.");
  let tmp49 = children;
  if (countResult > 1) {
    let obj2 = { children };
    tmp49 = jsx(tmp21(tmp22[12]), { children });
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
  obj4.selectionHandleColor = selectionHandleColor;
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
  obj3.mostRecentEventCount = mostRecentEventCount;
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
    _modDef144.blurInput(first.current);
    if (value.onBlur) {
      value.onBlur(arg0);
    }
  };
  obj3.onChange = function onChange(nativeEvent) {
    const text = nativeEvent.nativeEvent.text;
    if (value.onChange) {
      value.onChange(nativeEvent);
    }
    if (value.onChangeText) {
      value.onChangeText(text);
    }
    if (null != first.current) {
      textAndSelection(text);
      defaultValue(nativeEvent.nativeEvent.eventCount);
    }
  };
  obj3.onFocus = function onFocus(arg0) {
    _modDef144.focusInput(first.current);
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
    obj = value;
    if (value.onSelectionChange) {
      obj.onSelectionChange(nativeEvent);
    }
    if (null != first.current) {
      obj = { mostRecentEventCount, selection: nativeEvent.nativeEvent.selection };
      closure_6(obj);
    }
  };
  obj3.placeholder = str6;
  obj3.style = tmp37;
  obj3.text = defaultValue;
  obj3.textBreakStrategy = value.textBreakStrategy;
  children = <defaultValue ref={tmp23} />;
  return jsx(require("metro/00111__.js"), { value: true, children });
}
let closure_2 = ["aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-selected", "accessibilityState", "id", "tabIndex", "selection", "selectionColor", "selectionHandleColor", "cursorColor"];
let closure_3 = ["onBlur", "onFocus"];
const noop = fn(19);
({ useCallback: closure_9, useLayoutEffect: c10, useMemo: closure_11, useRef: closure_12, useState: map1 } = noop);
const jsx = fn(21).jsx;
let closure_4 = fn(145).default;
const Commands = fn(145).Commands;
const value = { done: "done", enter: "default", go: "go", next: "next", previous: "previous", search: "search", send: "send" };
let closure_17 = { decimal: "decimal-pad", email: "email-address", none: "default", numeric: "number-pad", search: "default", tel: "phone-pad", text: "default", url: "url" };
const collapsedCategories = { "additional-name": "name-middle", "address-line1": "postal-address-region", "address-line2": "postal-address-locality", bday: "birthdate-full", "bday-day": "birthdate-day", "bday-month": "birthdate-month", "bday-year": "birthdate-year", "cc-csc": "cc-csc", "cc-exp": "cc-exp", "cc-exp-month": "cc-exp-month", "cc-exp-year": "cc-exp-year", "cc-number": "cc-number", country: "postal-address-country", "current-password": "password", email: "email", "family-name": "name-family", "given-name": "name-given", "honorific-prefix": "name-prefix", "honorific-suffix": "name-suffix", name: "name", "new-password": "password-new", off: "off", "one-time-code": "sms-otp", "postal-code": "postal-code", sex: "gender", "street-address": "street-address", tel: "tel", "tel-country-code": "tel-country-code", "tel-national": "tel-national", username: "username" };
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
    merged = Object.assign(global, Object.assign({ ref: 0, allowFontScaling: 0, rejectResponderTermination: 0, underlineColorAndroid: 0, autoComplete: 0, textContentType: 0, readOnly: 0, editable: 0, enterKeyHint: 0, returnKeyType: 0, inputMode: 0, showSoftInputOnFocus: 0, keyboardType: 0 }));
    obj = { allowFontScaling: flag, rejectResponderTermination: flag2, underlineColorAndroid: str, editable: null, returnKeyType: null, keyboardType: null, showSoftInputOnFocus: null, autoComplete: null, textContentType: null };
    tmp2 = jsx;
    tmp3 = InternalTextInput;
    if (undefined !== readOnly) {
      editable = !readOnly;
    }
    obj.editable = editable;
    if (enterKeyHint) {
      tmp4 = closure_16;
      returnKeyType = closure_16[enterKeyHint];
    }
    obj.returnKeyType = returnKeyType;
    if (inputMode) {
      tmp5 = closure_17;
      keyboardType = closure_17[inputMode];
    }
    obj.keyboardType = keyboardType;
    if (null != inputMode) {
      str2 = "none";
      showSoftInputOnFocus = "none" !== inputMode;
    }
    obj.showSoftInputOnFocus = showSoftInputOnFocus;
    tmp6 = closure_18[autoComplete];
    if (tmp6 == null) {
      tmp6 = autoComplete;
    }
    obj.autoComplete = tmp6;
    obj.textContentType = global.textContentType;
    merged1 = Object.assign(merged);
    obj.forwardedRef = global.ref;
    return tmp2(tmp3, obj);
  }
}
TextInput.displayName = "TextInput";
let obj = { blurTextInput: _modDef144.blurTextInput, currentlyFocusedField: _modDef144.currentlyFocusedField, currentlyFocusedInput: _modDef144.currentlyFocusedInput, focusTextInput: _modDef144.focusTextInput };
TextInput.State = obj;
obj = get_hairlineWidth.create({ multilineDefault: { paddingTop: 5 } });
let closure_19 = { auto: "auto", bottom: "bottom", middle: "center", top: "top" };

export default TextInput;