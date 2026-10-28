// discord_app/modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import openEmojiPickerActionSheet from "../../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import TopEmojisUtils from "../../../../emojis/top_emojis/TopEmojisUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const EmojiIntention = fn(1392).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5004);
let closure_9 = createStyles.createStyles({
  content: { flex: 1, flexDirection: "row", alignItems: "center" },
  stringOptionInput: { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 },
  expressionButton: { marginVertical: -8, marginRight: -8 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherTextInputOption(onFocus) {
      const cResult = onChangeText(guildId[7]).c(48);
      ({ option, onChangeText } = onFocus);
      onFocus = onFocus.onFocus;
      ({ onEndEditing, guildId } = onFocus);
      const initialValue = onFocus.initialValue;
      const onPressIn = onFocus.onPressIn;
      ({ autoFocus, hasError } = onFocus);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      let obj = onChangeText(guildId[7]);
      const inputStyles = onChangeText(guildId[8]).useInputStyles(first);
      const tmp7 = initialValue;
      const tmpResult = onChangeText(guildId[8]);
      [r10040, noop] = initialValue(noop.useState(false), 2);
      if (cResult[1] !== initialValue) {
        class F {
          constructor() {
            tmp = initialValue;
            str = "";
            if (null != initialValue) {
              str2 = "text";
              str = "";
              if ("text" === tmp.type) {
                str = tmp.text;
              }
            }
            return str;
          }
        }
        cResult[1] = initialValue;
        cResult[2] = F;
      } else {
        class F {
          constructor() {
            tmp = initialValue;
            str = "";
            if (null != initialValue) {
              str2 = "text";
              str = "";
              if ("text" === tmp.type) {
                str = tmp.text;
              }
            }
            return str;
          }
        }
      }
      const tmp7Result = tmp7(noop.useState(F), 2);
      const first1 = tmp7Result[0];
      closure_6 = tmp7Result[1];
      const tmp8 = initialValue(noop.useState(false), 2);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            tmp = initialValue;
            str = "";
            if (null != initialValue) {
              str2 = "text";
              str = "";
              if ("text" === tmp.type) {
                str = tmp.text;
              }
            }
            return str;
          }
        }
        cResult[3] = tmp13;
      } else {
        class F {
          constructor() {
            tmp = initialValue;
            str = "";
            if (null != initialValue) {
              str2 = "text";
              str = "";
              if ("text" === tmp.type) {
                str = tmp.text;
              }
            }
            return str;
          }
        }
      }
      noop.useRef(tmp13);
      ref = noop.useRef(null);
      const tmp15 = option.type === onChangeText(guildId[10]).ApplicationCommandOptionType.STRING;
      closure_9 = tmp15;
      if (cResult[4] !== onChangeText) {
        class F {
          constructor() {
            tmp = initialValue;
            str = "";
            if (null != initialValue) {
              str2 = "text";
              str = "";
              if ("text" === tmp.type) {
                str = tmp.text;
              }
            }
            return str;
          }
        }
        cResult[4] = onChangeText;
        cResult[5] = tmp17;
      } else {
        class F {
          constructor() {
            tmp = initialValue;
            str = "";
            if (null != initialValue) {
              str2 = "text";
              str = "";
              if ("text" === tmp.type) {
                str = tmp.text;
              }
            }
            return str;
          }
        }
      }
      if (cResult[6] === tmp16) {
        class F {
          constructor() {
            tmp = initialValue;
            str = "";
            if (null != initialValue) {
              str2 = "text";
              str = "";
              if ("text" === tmp.type) {
                str = tmp.text;
              }
            }
            return str;
          }
        }
        const onPressEmoji = H;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              tmp = initialValue;
              str = "";
              if (null != initialValue) {
                str2 = "text";
                str = "";
                if ("text" === tmp.type) {
                  str = tmp.text;
                }
              }
              return str;
            }
          }
          cResult[9] = tmp19;
        } else {
          class F {
            constructor() {
              tmp = initialValue;
              str = "";
              if (null != initialValue) {
                str2 = "text";
                str = "";
                if ("text" === tmp.type) {
                  str = tmp.text;
                }
              }
              return str;
            }
          }
        }
        const onClose = tmp19;
        if (cResult[10] === guildId) {
          class F {
            constructor() {
              tmp = initialValue;
              str = "";
              if (null != initialValue) {
                str2 = "text";
                str = "";
                if ("text" === tmp.type) {
                  str = tmp.text;
                }
              }
              return str;
            }
          }
          const effect = noop.useEffect(tmp20, tmp21);
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                current = closure_8.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
            cResult[14] = Q;
          } else {
            class Q {
              constructor() {
                current = closure_8.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
          }
          const animationDelayedAutoFocus = onChangeText(guildId[12]).useAnimationDelayedAutoFocus(autoFocus, Q);
          if (tmpResult3.useAppLauncherContext().entrypoint === onChangeText(guildId[13]).AppLauncherEntrypoint.VOICE) {
            class Q {
              constructor() {
                current = closure_8.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
          } else {
            class Q {
              constructor() {
                current = closure_8.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
            const tmp25 = onFocus(guildId[15]);
          }
          let str = "default";
          if (hasError) {
            class Q {
              constructor() {
                current = closure_8.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
          }
          if (cResult[15] === inputStyles.padding) {
            class Q {
              constructor() {
                current = closure_8.current;
                if (current != null) {
                  focusResult = current.focus();
                }
                return;
              }
            }
            if (cResult[18] === inputStyles.text) {
              class Q {
                constructor() {
                  current = closure_8.current;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return;
                }
              }
              if (option.type === onChangeText(guildId[10]).ApplicationCommandOptionType.STRING) {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
                cResult[21] = tmp30;
              } else {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
              }
              if (cResult[22] !== onFocus) {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
                cResult[22] = onFocus;
                cResult[23] = tmp32;
              } else {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
              }
              const _Symbol4 = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
                cResult[24] = tmp34;
              } else {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
              }
              if (option.type === onChangeText(guildId[10]).ApplicationCommandOptionType.INTEGER) {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
                if (obj7.isAndroid()) {
                  class Q {
                    constructor() {
                      current = closure_8.current;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return;
                    }
                  }
                }
                str = str3;
              } else {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
              }
              if (cResult[25] === tmp25) {
                class Q {
                  constructor() {
                    current = closure_8.current;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return;
                  }
                }
              }
              const obj3 = {
                ref,
                autoFocus: false,
                value: first1,
                style: tmp27,
                selectionColor: "Array",
                maxLength: undefined,
                autoComplete: null,
                onChangeText: tmp16,
                onSelectionChange: tmp30,
                onFocus: tmp32,
                onBlur: tmp34,
                onEndEditing,
                textAlignVertical: "default",
                returnKeyType: true,
                multiline: null,
                keyboardType: str,
                onPressIn,
              };
              const tmp38 = ref(tmp25, obj3);
              cResult[25] = tmp25;
              cResult[26] = tmp16;
              cResult[27] = onEndEditing;
              cResult[28] = onPressIn;
              cResult[29] = tmp27;
              cResult[30] = undefined;
              cResult[31] = tmp32;
              cResult[32] = str;
              cResult[33] = first1;
              cResult[34] = tmp38;
            }
            const items = [inputStyles.text, tmp4.stringOptionInput];
            cResult[18] = inputStyles.text;
            cResult[19] = tmp4.stringOptionInput;
            cResult[20] = items;
          }
          const items1 = [inputStyles.padding, tmp4.content];
          cResult[15] = inputStyles.padding;
          cResult[16] = tmp4.content;
          cResult[17] = items1;
          const tmpResult4 = onChangeText(guildId[12]);
        }
        const fn = function z() {
          if (closure_9) {
            const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(guildId);
          }
        };
        const items2 = [guildId, tmp15];
        cResult[10] = guildId;
        cResult[11] = tmp15;
        cResult[12] = fn;
        cResult[13] = items2;
        tmp20 = fn;
        tmp21 = items2;
      }
      class H {
        constructor(arg0) {
          tmp2 = closure_7;
          tmp = closure_5;
          substr = closure_5.substring(0, closure_7.current.start);
          start = closure_7.current.end;
          if (start == null) {
            start = tmp2.current.start;
          }
          substr1 = closure_5.substring(start);
          if (null == onFocus.id) {
            if (null != onFocus.surrogates) {
              tmp8 = closure_10;
              tmp9 = closure_10(substr + onFocus.surrogates + substr1);
              length = substr + onFocus.surrogates.length;
            }
            obj = { start: null, end: null };
            obj.start = length;
            obj.end = length;
            tmp2.current = obj;
            tmp10 = closure_8;
            current = closure_8.current;
            if (current != null) {
              focusResult = current.focus();
            }
            return;
          }
          if (null != onFocus.uniqueName) {
            str = "";
            if ("" !== onFocus.uniqueName) {
              name = onFocus.uniqueName;
            }
            tmp5 = closure_10;
            tmp6 = globalThis;
            _HermesInternal = HermesInternal;
            str2 = ": ";
            str3 = ":";
            tmp7 = closure_10(substr + ":" + name + ": " + substr1);
            _HermesInternal2 = HermesInternal;
            length = substr + ":" + name + ": ".length;
          }
          name = onFocus.name;
          return;
        }
      }
      cResult[6] = tmp16;
      cResult[7] = first1;
      cResult[8] = H;
      tmpResult3 = onChangeText(guildId[9]);
    }
  : function AppLauncherTextInputOption(initialValue) {
      ({ option, onChangeText } = initialValue);
      ({ onFocus: importDefault, guildId } = initialValue);
      initialValue = initialValue.initialValue;
      noop = undefined;
      closure_9 = undefined;
      onChangeText = undefined;
      ({ onEndEditing, autoFocus, hasError, onPressIn } = initialValue);
      const tmp = closure_9();
      const inputStyles = onChangeText(guildId[8]).useInputStyles({});
      let obj = onChangeText(guildId[8]);
      [tmp6, c4] = initialValue(noop.useState(false), 2);
      const tmp7 = initialValue(
        noop.useState(() => {
          let str = "";
          if (null != initialValue) {
            str = "";
            if ("text" === initialValue.type) {
              str = initialValue.text;
            }
          }
          return str;
        }),
        2,
      );
      value = tmp7[0];
      closure_6 = tmp7[1];
      const tmp5 = initialValue(noop.useState(false), 2);
      noop.useRef({ start: 0, end: 0 });
      ref = noop.useRef(null);
      let tmp15Result = option.type === onChangeText(guildId[10]).ApplicationCommandOptionType.STRING;
      closure_9 = tmp15Result;
      const items = [onChangeText];
      onChangeText = noop.useCallback((arg0) => {
        closure_6(arg0);
        onChangeText(arg0);
      }, items);
      const items1 = [onChangeText, value];
      const onPressEmoji = noop.useCallback((id) => {
        const substr = first.substring(0, ref.current.start);
        let start = ref.current.end;
        if (start == null) {
          start = ref.current.start;
        }
        const substr1 = first.substring(start);
        if (null == id.id) {
          if (null != id.surrogates) {
            callback(substr + id.surrogates + substr1);
            let length = substr + id.surrogates.length;
          }
          const obj = { start: length, end: length };
          ref.current = obj;
          const current = ref.current;
          if (current != null) {
            current.focus();
          }
        }
        if (null != id.uniqueName) {
          if ("" !== id.uniqueName) {
            let name = id.uniqueName;
          }
          const _HermesInternal = HermesInternal;
          callback(substr + ":" + name + ": " + substr1);
          const _HermesInternal2 = HermesInternal;
          length = substr + ":" + name + ": ".length;
        }
        name = id.name;
      }, items1);
      const onClose = noop.useCallback(() => {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }, []);
      const items2 = [guildId, tmp15Result];
      const effect = noop.useEffect(() => {
        if (closure_9) {
          const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(guildId);
        }
      }, items2);
      const obj2 = onChangeText(guildId[9]);
      const animationDelayedAutoFocus = onChangeText(guildId[12]).useAnimationDelayedAutoFocus(autoFocus, () => {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      });
      if (obj2.useAppLauncherContext().entrypoint === onChangeText(guildId[13]).AppLauncherEntrypoint.VOICE) {
        let TextInput = tmp2(guildId[14]).TextInput;
      } else {
        TextInput = require("components/BottomSheetTextInput");
      }
      let str = "default";
      let str2 = "default";
      if (hasError) {
        str2 = "error";
      }
      const obj4 = { status: str2, isFocused: tmp6, children: null };
      const obj5 = { style: null, children: null };
      const items3 = [inputStyles.padding, tmp.content];
      obj5.style = items3;
      const obj6 = {
        ref,
        autoFocus: false,
        value,
        style: null,
        selectionColor: "Array",
        maxLength: "off",
        autoComplete: null,
        onChangeText: null,
        onSelectionChange: null,
        onFocus: null,
        onBlur: null,
        onEndEditing: "center",
        textAlignVertical: "default",
        returnKeyType: true,
        multiline: null,
        keyboardType: null,
        onPressIn: 154.857,
      };
      const items4 = [inputStyles.text, tmp.stringOptionInput];
      obj6.style = items4;
      let maxLength;
      if (option.type === onChangeText(guildId[10]).ApplicationCommandOptionType.STRING) {
        maxLength = option.maxLength;
      }
      obj6.maxLength = maxLength;
      obj6.onChangeText = onChangeText;
      obj6.onSelectionChange = function onSelectionChange(nativeEvent) {
        closure_7.current = nativeEvent.nativeEvent.selection;
      };
      obj6.onFocus = function onFocus() {
        _undefined(true);
        if (importDefault != null) {
          importDefault();
        }
      };
      obj6.onBlur = function onBlur() {
        return _undefined(false);
      };
      obj6.onEndEditing = onEndEditing;
      if (option.type === onChangeText(guildId[10]).ApplicationCommandOptionType.INTEGER) {
        let str3 = "numbers-and-punctuation";
        if (tmp2Result.isAndroid()) {
          str3 = "numeric";
        }
        str = str3;
        tmp2Result = tmp2(guildId[16]);
      }
      obj6.keyboardType = str;
      obj6.onPressIn = onPressIn;
      const items5 = [ref(TextInput, obj6)];
      if (tmp15Result) {
        const obj7 = {
          style: tmp.expressionButton,
          onPress() {
            const result = KeyboardManagerUtils.dismissGlobalKeyboard();
            const result1 = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
              pickerIntention: EmojiIntention.CHAT,
              autoFocus: false,
              startExpanded: false,
              onPressEmoji,
              guildId,
              onClose,
            });
          },
        };
        tmp15Result = tmp15(require("ChatInputExpressionButton"), obj7);
      }
      items5[1] = tmp15Result;
      obj5.children = items5;
      obj4.children = ref(value, obj5);
      return ref(onChangeText(guildId[8]).InputFieldContainer, obj4);
    };
