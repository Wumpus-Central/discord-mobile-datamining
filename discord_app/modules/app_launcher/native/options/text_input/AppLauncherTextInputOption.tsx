// === Module 11810: AppLauncherTextInputOption ===

// Module 11810 (AppLauncherTextInputOption)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9879 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let react = react_mod;
let View = react_native.View;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, hasError: obj3, stringOptionInput: { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 }, expressionButton: { marginVertical: -8, marginRight: -8 } };
obj2 = { width: "100%", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 14, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((autoFocus) => {
  let closure_4;
  let first;
  let guildId;
  let hasError;
  let initialValue;
  let onChangeText;
  let onEndEditing;
  let onFocus;
  let onPressIn;
  let option;
  let style;
  let tmp15;
  let tmp5;
  let tmp8;
  let obj = onChangeText(initialValue[8]);
  const cResult = obj.c(38);
  ({ option, onChangeText } = autoFocus);
  ({ onFocus, onEndEditing, guildId } = autoFocus);
  ({ style, initialValue } = autoFocus);
  ({ hasError, onPressIn } = autoFocus);
  autoFocus = autoFocus.autoFocus;
  const tmp4 = V();
  if (cResult[0] !== initialValue) {
    const fn = function y() {
      let str = "";
      if (null != initialValue) {
        str = "";
        if ("text" === initialValue.type) {
          str = initialValue.text;
        }
      }
      return str;
    };
    cResult[0] = initialValue;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let obj2 = react;
  const tmp6 = first(react.useState(tmp5), 2);
  first = tmp6[0];
  react = tmp6[1];
  const tmpResult = onChangeText(initialValue[9]);
  const entrypoint = tmpResult.useAppLauncherContext().entrypoint;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { start: 0, end: 0 };
    cResult[2] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[2];
  }
  View = obj2.useRef(tmp8);
  const ref = obj2.useRef(null);
  const tmp10 = option.type === onChangeText(initialValue[10]).ApplicationCommandOptionType.STRING;
  let closure_7 = tmp10;
  if (cResult[3] !== onChangeText) {
    class G {
      constructor(arg0) {
        closure_4(arg0);
        onChangeText(arg0);
      }
    }
    cResult[3] = onChangeText;
    cResult[4] = G;
  } else {
    class G {
      constructor(arg0) {
        closure_4(arg0);
        onChangeText(arg0);
      }
    }
  }
  G = tmp11;
  if (cResult[5] === tmp11) {
    class G {
      constructor(arg0) {
        closure_4(arg0);
        onChangeText(arg0);
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          closure_4(arg0);
          onChangeText(arg0);
        }
      }
      cResult[8] = tmp13;
    } else {
      class G {
        constructor(arg0) {
          closure_4(arg0);
          onChangeText(arg0);
        }
      }
    }
    const onClose = tmp13;
    if (cResult[9] === guildId) {
      class G {
        constructor(arg0) {
          closure_4(arg0);
          onChangeText(arg0);
        }
      }
      const effect = obj2.useEffect(U, tmp15);
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(arg0) {
            closure_4(arg0);
            onChangeText(arg0);
          }
        }
        cResult[13] = tmp18;
      } else {
        class G {
          constructor(arg0) {
            closure_4(arg0);
            onChangeText(arg0);
          }
        }
      }
      const tmpResult2 = onChangeText(initialValue[12]);
      const animationDelayedAutoFocus = tmpResult2.useAnimationDelayedAutoFocus(autoFocus, tmp18);
      class U {
        constructor() {
          if (closure_7) {
            const obj = TopEmojisUtils;
            const result = obj.maybeFetchTopEmojisByGuild(guildId);
          }
        }
      }
      if (hasError) {
        class G {
          constructor(arg0) {
            closure_4(arg0);
            onChangeText(arg0);
          }
        }
      }
      if (cResult[14] === style) {
        class G {
          constructor(arg0) {
            closure_4(arg0);
            onChangeText(arg0);
          }
        }
      }
      const items = [tmp4.container, hasError, style];
      cResult[14] = style;
      cResult[15] = tmp4.container;
      cResult[16] = hasError;
      cResult[17] = items;
    }
    class U {
      constructor() {
        if (closure_7) {
          const obj = TopEmojisUtils;
          const result = obj.maybeFetchTopEmojisByGuild(guildId);
        }
      }
    }
    const items1 = [guildId, tmp10];
    cResult[9] = guildId;
    cResult[10] = tmp10;
    cResult[11] = U;
    cResult[12] = items1;
    tmp15 = items1;
  }
  class V {
    constructor(id) {
      let length;
      const substr = first.substring(0, ref.current.start);
      let start = ref.current.end;
      const substring = first.substring;
      if (start == null) {
        start = ref.current.start;
      }
      const substr1 = substring(start);
      if (null == id.id) {
        if (null != id.surrogates) {
          G(substr + id.surrogates + substr1);
          length = (substr + id.surrogates).length;
        }
        const obj = { start: length, end: length };
        ref.current = obj;
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
      if (null != id.uniqueName) {
        let name;
        if ("" !== id.uniqueName) {
          name = id.uniqueName;
        }
        const _HermesInternal = HermesInternal;
        G(substr + ":" + name + ": " + substr1);
        const _HermesInternal2 = HermesInternal;
        length = (substr + ":" + name + ": ").length;
      }
      name = id.name;
    }
  }
  cResult[5] = tmp11;
  cResult[6] = first;
  cResult[7] = V;
}) : ((guildId) => {
  let TextInput;
  let autoFocus;
  let closure_4;
  let hasError;
  let items4;
  let maxLength;
  let onChangeText;
  let onEndEditing;
  let onFocus;
  let onPressIn;
  let option;
  let str;
  let style;
  ({ option, onChangeText } = guildId);
  guildId = guildId.guildId;
  ({ initialValue: dependencyMap, hasError } = guildId);
  let value;
  react = undefined;
  onChangeText = undefined;
  let onPressEmoji;
  ({ onFocus, onEndEditing, style, autoFocus, onPressIn } = guildId);
  const tmp = onPressEmoji();
  const tmp2 = value(react.useState(() => {
    let str = "";
    if (null != dependencyMap) {
      str = "";
      if ("text" === dependencyMap.type) {
        str = dependencyMap.text;
      }
    }
    return str;
  }), 2);
  value = tmp2[0];
  react = tmp2[1];
  let obj = onChangeText(11007);
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  react.useRef({ start: 0, end: 0 });
  const ref = react.useRef(null);
  let tmp14Result = option.type === onChangeText(1985).ApplicationCommandOptionType.STRING;
  let closure_7 = tmp14Result;
  const items = [onChangeText];
  onChangeText = react.useCallback((arg0) => {
    closure_4(arg0);
    onChangeText(arg0);
  }, items);
  const items1 = [onChangeText, value];
  onPressEmoji = react.useCallback((id) => {
    let length;
    const substr = first.substring(0, ref.current.start);
    let start = ref.current.end;
    const substring = first.substring;
    if (start == null) {
      start = ref.current.start;
    }
    const substr1 = substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        callback(substr + id.surrogates + substr1);
        length = (substr + id.surrogates).length;
      }
      const obj = { start: length, end: length };
      ref.current = obj;
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
    if (null != id.uniqueName) {
      let name;
      if ("" !== id.uniqueName) {
        name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      callback(substr + ":" + name + ": " + substr1);
      const _HermesInternal2 = HermesInternal;
      length = (substr + ":" + name + ": ").length;
    }
    name = id.name;
  }, items1);
  const onClose = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const items2 = [guildId, tmp14Result];
  const effect = react.useEffect(() => {
    if (closure_7) {
      const obj = TopEmojisUtils;
      const result = obj.maybeFetchTopEmojisByGuild(guildId);
    }
  }, items2);
  let obj2 = onChangeText(11806);
  const animationDelayedAutoFocus = obj2.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (entrypoint === onChangeText(8961).AppLauncherEntrypoint.VOICE) {
    TextInput = tmp4(1188).TextInput;
  } else {
    TextInput = guildId(11811);
  }
  const items3 = [tmp.container, , ];
  const tmp12 = onChangeText;
  const tmp13 = ref;
  if (hasError) {
    hasError = tmp.hasError;
  }
  let obj3 = { style: items3, children: items4 };
  items3[1] = hasError;
  items3[2] = style;
  const obj4 = {
    ref,
    autoFocus: false,
    value,
    style: tmp.stringOptionInput,
    maxLength,
    autoComplete: "off",
    onChangeText,
    onSelectionChange(nativeEvent) {
      ref.current = nativeEvent.nativeEvent.selection;
    },
    onFocus,
    onEndEditing,
    textAlignVertical: "center",
    returnKeyType: "default",
    multiline: true,
    keyboardType: str,
    onPressIn
  };
  maxLength = undefined;
  if (option.type === onChangeText(1985).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  if (option.type === onChangeText(1985).ApplicationCommandOptionType.INTEGER) {
    let str2 = "numbers-and-punctuation";
    const tmp4Result = onChangeText(1369);
    if (tmp4Result.isAndroid()) {
      str2 = "numeric";
    }
    str = str2;
  } else {
    str = "default";
  }
  items4 = [closure_7(TextInput, obj4), ];
  if (tmp14Result) {
    const obj5 = {
      style: tmp.expressionButton,
      onPress() {
          const obj = KeyboardManagerUtils;
          const result = obj.dismissGlobalKeyboard();
          const obj2 = openEmojiPickerActionSheet;
          const obj3 = { pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, onPressEmoji, guildId, onClose };
          const result1 = obj2.openEmojiPickerActionSheet(obj3);
        }
    };
    tmp14Result = tmp14(guildId(11812), obj5);
  }
  items4[1] = tmp14Result;
  return tmp12(tmp13, obj3);
});
let result = size.fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default tmp4;