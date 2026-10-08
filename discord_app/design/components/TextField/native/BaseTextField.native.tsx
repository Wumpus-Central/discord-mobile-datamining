// discord_app/design/components/TextField/native/BaseTextField.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import mergeProps from "../../../utils/native/mergeProps.native.tsx";
import useFocus from "../../../utils/native/useFocus.native.tsx";
import InputFieldContainer2 from "../../Input/native/InputFieldContainer.native.tsx";
import NativeTextInput2 from "../../Input/native/NativeTextInput.native.tsx";
import propsForNativeTextInput from "../../Input/native/propsForNativeTextInput.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref", "onChangeText"];
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseTextField(arg0) {
      const cResult = c.c(23);
      ({ ref, onChangeText } = arg0);
      const iter = _objectWithoutProperties(arg0, closure_2);
      const inputStyles = InputFieldContainer2.useInputStyles({
        size: iter.size,
        round: iter.round,
        hasLeadingIcon: null != iter.leadingIcon,
      });
      const obj3 = { size: iter.size, round: iter.round, hasLeadingIcon: null != iter.leadingIcon };
      const focus = useFocus.useFocus();
      const isFocused = focus.isFocused;
      let tmp7 = null;
      if (iter.enableAndroidSanitizedInputWorkaround) {
        ({ secureTextEntry, keyboardType, autoComplete } = iter);
        if (secureTextEntry === undefined) {
          secureTextEntry = false;
        }
        if (keyboardType === undefined) {
          keyboardType = "default";
        }
        let str = "off";
        if (!tmpResult.isAndroid()) {
          str = autoComplete;
        }
        const obj5 = { autoComplete: str, secureTextEntry: null, keyboardType: null };
        tmpResult = PlatformUtils;
        const tmpResult6 = PlatformUtils;
        obj5.secureTextEntry = PlatformUtils.isAndroid() || secureTextEntry;
        const tmp8 = PlatformUtils.isAndroid() || secureTextEntry;
        let str2 = "visible-password";
        if (!tmpResult7.isAndroid()) {
          str2 = keyboardType;
        }
        obj5.keyboardType = str2;
        tmp7 = obj5;
        tmpResult7 = PlatformUtils;
      }
      if (cResult[0] !== onChangeText) {
        const fn = function p(str) {
          let replaced = str;
          if (null != str) {
            replaced = str.replace(/\r\n?|\n/g, " ");
          }
          if (replaced !== str) {
            const current = ref1.current;
            if (current != null) {
              const obj = { text: replaced };
              current.setNativeProps(obj);
            }
          }
          if (onChangeText != null) {
            tmp4(replaced);
          }
        };
        cResult[0] = onChangeText;
        cResult[1] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
      const NativeTextInput = NativeTextInput2.NativeTextInput;
      const ref1 = noop.useRef(null);
      const tmpResult8 = propsForNativeTextInput;
      const result = tmpResult8.propsForNativeTextInput(mergeProps.mergeProps(iter, focus.focusProps));
      let replaced = str3;
      if (null != iter.value) {
        replaced = str3.replace(/\r\n?|\n/g, " ");
      }
      let replaced1 = str5;
      if (null != iter.defaultValue) {
        replaced1 = str5.replace(/\r\n?|\n/g, " ");
      }
      if (cResult[2] !== ref) {
        const mergeRefsResult = mergeProps.mergeRefs(ref1, ref);
        cResult[2] = ref;
        cResult[3] = mergeRefsResult;
        let tmp13 = mergeRefsResult;
        const tmpResult10 = mergeProps;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === iter.inputStyle) {
        if (cResult[5] === inputStyles.padding) {
          if (cResult[6] === inputStyles.text) {
            let tmp15 = cResult[7];
          }
          if (cResult[8] === NativeTextInput) {
            if (cResult[9] === tmp9) {
              if (cResult[10] === tmp7) {
                if (cResult[11] === inputStyles.placeholderText.color) {
                  if (cResult[12] === result) {
                    if (cResult[13] === replaced) {
                      if (cResult[14] === replaced1) {
                        if (cResult[15] === tmp13) {
                          if (cResult[16] === tmp15) {
                            let tmp16 = cResult[17];
                          }
                          if (cResult[18] === InputFieldContainer) {
                            if (cResult[19] === isFocused) {
                              if (cResult[20] === iter) {
                                if (cResult[21] === tmp16) {
                                  let tmp25 = cResult[22];
                                }
                                return tmp25;
                              }
                            }
                          }
                          const obj6 = {};
                          const merged = Object.assign(iter);
                          obj6.isFocused = isFocused;
                          const items = [iter.leading, tmp16, iter.trailing];
                          obj6.children = items;
                          const tmp30 = timestampProducer(InputFieldContainer, obj6);
                          cResult[18] = InputFieldContainer;
                          cResult[19] = isFocused;
                          cResult[20] = iter;
                          cResult[21] = tmp16;
                          cResult[22] = tmp30;
                          tmp25 = tmp30;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj7 = {};
          const merged1 = Object.assign(tmp7);
          const merged2 = Object.assign(result);
          obj7.value = replaced;
          obj7.defaultValue = replaced1;
          obj7.onChangeText = tmp9;
          obj7.ref = tmp13;
          obj7.style = tmp15;
          obj7.placeholderTextColor = inputStyles.placeholderText.color;
          const tmp24 = hasOwnProperty(NativeTextInput, obj7);
          cResult[8] = NativeTextInput;
          cResult[9] = tmp9;
          cResult[10] = tmp7;
          cResult[11] = inputStyles.placeholderText.color;
          cResult[12] = result;
          cResult[13] = replaced;
          cResult[14] = replaced1;
          cResult[15] = tmp13;
          cResult[16] = tmp15;
          cResult[17] = tmp24;
          tmp16 = tmp24;
        }
      }
      const items1 = [, ,];
      ({ padding: arr[0], text: arr[1] } = inputStyles);
      items1[2] = iter.inputStyle;
      cResult[4] = iter.inputStyle;
      cResult[5] = inputStyles.padding;
      cResult[6] = inputStyles.text;
      cResult[7] = items1;
      tmp15 = items1;
      const tmpResult9 = mergeProps;
    }
  : function BaseTextField(onChangeText) {
      onChangeText = onChangeText.onChangeText;
      const iter = Object.assign(onChangeText, Object.assign({ ref: 0, onChangeText: 0 }));
      const inputStyles = InputFieldContainer2.useInputStyles({
        size: iter.size,
        round: iter.round,
        hasLeadingIcon: null != iter.leadingIcon,
      });
      const obj2 = { size: iter.size, round: iter.round, hasLeadingIcon: null != iter.leadingIcon };
      const focus = useFocus.useFocus();
      ({ focusProps, isFocused } = focus);
      const ref = noop.useRef(null);
      let tmp6 = null;
      if (iter.enableAndroidSanitizedInputWorkaround) {
        ({ secureTextEntry, keyboardType, autoComplete } = iter);
        if (secureTextEntry === undefined) {
          secureTextEntry = false;
        }
        if (keyboardType === undefined) {
          keyboardType = "default";
        }
        let str = "off";
        if (!tmpResult.isAndroid()) {
          str = autoComplete;
        }
        const obj5 = { autoComplete: str, secureTextEntry: null, keyboardType: null };
        tmpResult = PlatformUtils;
        const tmpResult6 = PlatformUtils;
        obj5.secureTextEntry = PlatformUtils.isAndroid() || secureTextEntry;
        const tmp7 = PlatformUtils.isAndroid() || secureTextEntry;
        let str2 = "visible-password";
        if (!tmpResult7.isAndroid()) {
          str2 = keyboardType;
        }
        obj5.keyboardType = str2;
        tmp6 = obj5;
        tmpResult7 = PlatformUtils;
      }
      const items = [onChangeText];
      const callback = noop.useCallback((str) => {
        let replaced = str;
        if (null != str) {
          replaced = str.replace(/\r\n?|\n/g, " ");
        }
        if (replaced !== str) {
          const current = ref.current;
          if (current != null) {
            const obj = { text: replaced };
            current.setNativeProps(obj);
          }
        }
        if (onChangeText != null) {
          tmp4(replaced);
        }
      }, items);
      const obj6 = {};
      const merged = Object.assign(iter);
      obj6.isFocused = isFocused;
      const items1 = [iter.leading, ,];
      const obj7 = {};
      const merged1 = Object.assign(tmp6);
      const tmpResult8 = propsForNativeTextInput;
      const merged2 = Object.assign(tmpResult8.propsForNativeTextInput(mergeProps.mergeProps(iter, focusProps)));
      let replaced = str3;
      if (null != iter.value) {
        replaced = str3.replace(/\r\n?|\n/g, " ");
      }
      obj7.value = replaced;
      let replaced1 = str5;
      if (null != iter.defaultValue) {
        replaced1 = str5.replace(/\r\n?|\n/g, " ");
      }
      obj7.defaultValue = replaced1;
      obj7.onChangeText = callback;
      const tmpResult9 = mergeProps;
      obj7.ref = mergeProps.mergeRefs(ref, onChangeText.ref);
      const items2 = [, ,];
      ({ padding: arr3[0], text: arr3[1] } = inputStyles);
      items2[2] = iter.inputStyle;
      obj7.style = items2;
      obj7.placeholderTextColor = inputStyles.placeholderText.color;
      items1[1] = hasOwnProperty(NativeTextInput2.NativeTextInput, obj7);
      items1[2] = iter.trailing;
      obj6.children = items1;
      return timestampProducer(InputFieldContainer2.InputFieldContainer, obj6);
    };
