// === Module 12364: AppLauncherTextInputOption ===

// Module 12364 (AppLauncherTextInputOption)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1888 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9939 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9945 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const EmojiIntention = fn(1386).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let closure_9 = createStyles.createStyles({ content: { flex: 1, flexDirection: "row", alignItems: "center" }, stringOptionInput: { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 }, expressionButton: { marginVertical: -8, marginRight: -8 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default function AppLauncherTextInputOption(initialValue) {
  ({ option, onChangeText } = initialValue);
  ({ onFocus: importDefault, guildId } = initialValue);
  initialValue = initialValue.initialValue;
  noop = undefined;
  closure_9 = undefined;
  onChangeText = undefined;
  ({ onEndEditing, autoFocus, hasError, onPressIn } = initialValue);
  const tmp = closure_9();
  const inputStyles = onChangeText(guildId[6]).useInputStyles({});
  let obj = onChangeText(guildId[6]);
  [tmp6, c4] = initialValue(noop.useState(false), 2);
  const tmp7 = initialValue(noop.useState(() => {
    let str = "";
    if (null != initialValue) {
      str = "";
      if ("text" === initialValue.type) {
        str = initialValue.text;
      }
    }
    return str;
  }), 2);
  value = tmp7[0];
  closure_6 = tmp7[1];
  const tmp5 = initialValue(noop.useState(false), 2);
  noop.useRef({ start: 0, end: 0 });
  const ref = noop.useRef(null);
  let tmp15Result = option.type === onChangeText(guildId[8]).ApplicationCommandOptionType.STRING;
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
  const obj2 = onChangeText(guildId[7]);
  const animationDelayedAutoFocus = onChangeText(guildId[10]).useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (obj2.useAppLauncherContext().entrypoint === onChangeText(guildId[11]).AppLauncherEntrypoint.VOICE) {
    let TextInput = tmp2(guildId[12]).TextInput;
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
  const obj6 = { ref, autoFocus: false, value, style: null, selectionColor: "Array", maxLength: "off", autoComplete: null, onChangeText: null, onSelectionChange: null, onFocus: null, onBlur: null, onEndEditing: "center", textAlignVertical: "default", returnKeyType: true, multiline: null, keyboardType: null, onPressIn: 186.286 };
  const items4 = [inputStyles.text, tmp.stringOptionInput];
  obj6.style = items4;
  let maxLength;
  if (option.type === onChangeText(guildId[8]).ApplicationCommandOptionType.STRING) {
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
  if (option.type === onChangeText(guildId[8]).ApplicationCommandOptionType.INTEGER) {
    let str3 = "numbers-and-punctuation";
    if (tmp2Result.isAndroid()) {
      str3 = "numeric";
    }
    str = str3;
    tmp2Result = tmp2(guildId[14]);
  }
  obj6.keyboardType = str;
  obj6.onPressIn = onPressIn;
  const items5 = [ref(TextInput, obj6), ];
  if (tmp15Result) {
    const obj7 = {
      style: tmp.expressionButton,
      onPress() {
          const result = KeyboardManagerUtils.dismissGlobalKeyboard();
          const result1 = openEmojiPickerActionSheet.openEmojiPickerActionSheet({ pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, onPressEmoji, guildId, onClose });
        }
    };
    tmp15Result = tmp15(require("ChatInputExpressionButton"), obj7);
  }
  items5[1] = tmp15Result;
  obj5.children = items5;
  obj4.children = ref(value, obj5);
  return ref(onChangeText(guildId[6]).InputFieldContainer, obj4);
};