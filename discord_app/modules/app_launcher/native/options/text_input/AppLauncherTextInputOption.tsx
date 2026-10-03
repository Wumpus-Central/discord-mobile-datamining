// === Module 11796: AppLauncherTextInputOption ===

// Module 11796 (AppLauncherTextInputOption)
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9866 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9872 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let View = fn(17).View;
const EmojiIntention = fn(1380).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
const obj2 = { container: { width: "100%", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 14, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" }, hasError: null, stringOptionInput: null, expressionButton: null };
let obj3 = { width: "100%", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 14, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
obj2.hasError = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
obj2.stringOptionInput = { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 };
obj2.expressionButton = { marginVertical: -8, marginRight: -8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((autoFocus) => {
  const cResult = onChangeText(initialValue[8]).c(38);
  ({ option, onChangeText } = autoFocus);
  ({ onFocus, onEndEditing, guildId } = autoFocus);
  ({ style, initialValue } = autoFocus);
  ({ hasError, onPressIn } = autoFocus);
  const tmp4 = onPressEmoji();
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
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = first(noop.useState(tmp5), 2);
  first = tmp6[0];
  noop = tmp6[1];
  let obj = onChangeText(initialValue[8]);
  const entrypoint = onChangeText(initialValue[9]).useAppLauncherContext().entrypoint;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { start: 0, end: 0 };
    cResult[2] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[2];
  }
  View = obj2.useRef(tmp8);
  noop.useRef(null);
  const tmp10 = option.type === onChangeText(initialValue[10]).ApplicationCommandOptionType.STRING;
  closure_7 = tmp10;
  if (cResult[3] !== onChangeText) {
    class G {
      constructor(arg0) {
        tmp = closure_4(autoFocus);
        tmp2 = onChangeText(autoFocus);
        return;
      }
    }
    cResult[3] = onChangeText;
    cResult[4] = G;
  } else {
    class G {
      constructor(arg0) {
        tmp = closure_4(autoFocus);
        tmp2 = onChangeText(autoFocus);
        return;
      }
    }
  }
  G = tmp11;
  if (cResult[5] === tmp11) {
    class G {
      constructor(arg0) {
        tmp = closure_4(autoFocus);
        tmp2 = onChangeText(autoFocus);
        return;
      }
    }
    onPressEmoji = V;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          tmp = closure_4(autoFocus);
          tmp2 = onChangeText(autoFocus);
          return;
        }
      }
      cResult[8] = tmp13;
    } else {
      class G {
        constructor(arg0) {
          tmp = closure_4(autoFocus);
          tmp2 = onChangeText(autoFocus);
          return;
        }
      }
    }
    const onClose = tmp13;
    if (cResult[9] === guildId) {
      class G {
        constructor(arg0) {
          tmp = closure_4(autoFocus);
          tmp2 = onChangeText(autoFocus);
          return;
        }
      }
      const effect = obj2.useEffect(U, tmp15);
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(arg0) {
            tmp = closure_4(autoFocus);
            tmp2 = onChangeText(autoFocus);
            return;
          }
        }
        cResult[13] = tmp18;
      } else {
        class G {
          constructor(arg0) {
            tmp = closure_4(autoFocus);
            tmp2 = onChangeText(autoFocus);
            return;
          }
        }
      }
      const animationDelayedAutoFocus = onChangeText(initialValue[12]).useAnimationDelayedAutoFocus(autoFocus.autoFocus, tmp18);
      class U {
        constructor() {
          if (closure_7) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[11]);
            tmp3 = guildId;
            result = obj.maybeFetchTopEmojisByGuild(guildId);
          }
          return;
        }
      }
      if (hasError) {
        class G {
          constructor(arg0) {
            tmp = closure_4(autoFocus);
            tmp2 = onChangeText(autoFocus);
            return;
          }
        }
      }
      if (cResult[14] === style) {
        class G {
          constructor(arg0) {
            tmp = closure_4(autoFocus);
            tmp2 = onChangeText(autoFocus);
            return;
          }
        }
      }
      const items = [tmp4.container, hasError, style];
      cResult[14] = style;
      cResult[15] = tmp4.container;
      cResult[16] = hasError;
      cResult[17] = items;
      const tmpResult2 = onChangeText(initialValue[12]);
    }
    class U {
      constructor() {
        if (closure_7) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[11]);
          tmp3 = guildId;
          result = obj.maybeFetchTopEmojisByGuild(guildId);
        }
        return;
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
    constructor(arg0) {
      tmp2 = closure_5;
      tmp = closure_3;
      substr = closure_3.substring(0, closure_5.current.start);
      start = closure_5.current.end;
      if (start == null) {
        start = tmp2.current.start;
      }
      substr1 = closure_3.substring(start);
      if (null == autoFocus.id) {
        if (null != autoFocus.surrogates) {
          tmp8 = closure_8;
          tmp9 = closure_8(substr + autoFocus.surrogates + substr1);
          length = substr + autoFocus.surrogates.length;
        }
        obj = { start: null, end: null };
        obj.start = length;
        obj.end = length;
        tmp2.current = obj;
        tmp10 = closure_6;
        current = closure_6.current;
        if (current != null) {
          focusResult = current.focus();
        }
        return;
      }
      if (null != autoFocus.uniqueName) {
        str = "";
        if ("" !== autoFocus.uniqueName) {
          name = autoFocus.uniqueName;
        }
        tmp5 = closure_8;
        tmp6 = globalThis;
        _HermesInternal = HermesInternal;
        str2 = ": ";
        str3 = ":";
        tmp7 = closure_8(substr + ":" + name + ": " + substr1);
        _HermesInternal2 = HermesInternal;
        length = substr + ":" + name + ": ".length;
      }
      name = autoFocus.name;
      return;
    }
  }
  cResult[5] = tmp11;
  cResult[6] = first;
  cResult[7] = V;
  const tmpResult = onChangeText(initialValue[9]);
}) : ((guildId) => {
  ({ option, onChangeText } = guildId);
  guildId = guildId.guildId;
  ({ initialValue: dependencyMap, hasError } = guildId);
  value = undefined;
  noop = undefined;
  onChangeText = undefined;
  let onPressEmoji;
  ({ onFocus, onEndEditing, style, autoFocus, onPressIn } = guildId);
  const tmp = onPressEmoji();
  const tmp2 = value(noop.useState(() => {
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
  noop = tmp2[1];
  noop.useRef({ start: 0, end: 0 });
  const ref = noop.useRef(null);
  let tmp14Result = option.type === onChangeText(1985).ApplicationCommandOptionType.STRING;
  closure_7 = tmp14Result;
  const items = [onChangeText];
  onChangeText = noop.useCallback((arg0) => {
    closure_4(arg0);
    onChangeText(arg0);
  }, items);
  const items1 = [onChangeText, value];
  onPressEmoji = noop.useCallback((id) => {
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
  const items2 = [guildId, tmp14Result];
  const effect = noop.useEffect(() => {
    if (closure_7) {
      const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(guildId);
    }
  }, items2);
  let obj = onChangeText(10994);
  const animationDelayedAutoFocus = onChangeText(11792).useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (obj.useAppLauncherContext().entrypoint === onChangeText(8932).AppLauncherEntrypoint.VOICE) {
    let TextInput = tmp4(1188).TextInput;
  } else {
    TextInput = guildId(11797);
  }
  const items3 = [tmp.container, , ];
  if (hasError) {
    hasError = tmp.hasError;
  }
  const obj3 = { style: items3, children: null };
  items3[1] = hasError;
  items3[2] = style;
  const obj4 = { ref, autoFocus: false, value, style: tmp.stringOptionInput, maxLength: null, autoComplete: "off", onChangeText: null, onSelectionChange: null, onFocus: null, onEndEditing: null, textAlignVertical: "center", returnKeyType: "default", multiline: true, keyboardType: null, onPressIn: null };
  let maxLength;
  if (option.type === onChangeText(1985).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  obj4.maxLength = maxLength;
  obj4.onChangeText = onChangeText;
  obj4.onSelectionChange = function onSelectionChange(nativeEvent) {
    closure_5.current = nativeEvent.nativeEvent.selection;
  };
  obj4.onFocus = onFocus;
  obj4.onEndEditing = onEndEditing;
  if (option.type === onChangeText(1985).ApplicationCommandOptionType.INTEGER) {
    let str2 = "numbers-and-punctuation";
    if (tmp4Result.isAndroid()) {
      str2 = "numeric";
    }
    let str = str2;
    tmp4Result = tmp4(1369);
  } else {
    str = "default";
  }
  obj4.keyboardType = str;
  obj4.onPressIn = onPressIn;
  const items4 = [closure_7(TextInput, obj4), ];
  if (tmp14Result) {
    const obj5 = {
      style: tmp.expressionButton,
      onPress() {
          const result = KeyboardManagerUtils.dismissGlobalKeyboard();
          const result1 = openEmojiPickerActionSheet.openEmojiPickerActionSheet({ pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, onPressEmoji, guildId, onClose });
        }
    };
    tmp14Result = tmp14(guildId(11798), obj5);
  }
  items4[1] = tmp14Result;
  obj3.children = items4;
  return onChangeText(ref, obj3);
});