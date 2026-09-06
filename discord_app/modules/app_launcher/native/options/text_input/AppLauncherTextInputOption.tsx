// === Module 12172: AppLauncherTextInputOption ===

// Module 12172 (AppLauncherTextInputOption)
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1874 */;
import TopEmojisUtils from "TopEmojisUtils" /* 10278 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11121 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, hasError: null, stringOptionInput: null, expressionButton: null };
createStyles = { width: "100%", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 14, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
createStyles.container = createStyles;
createStyles.hasError = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
createStyles.stringOptionInput = { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 };
createStyles.expressionButton = { marginVertical: -8, marginRight: -8 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default function AppLauncherTextInputOption(guildId) {
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
  let obj = onChangeText(11215);
  noop.useRef({ start: 0, end: 0 });
  const ref = noop.useRef(null);
  let tmp14Result = option.type === onChangeText(1894).ApplicationCommandOptionType.STRING;
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
  let obj1 = onChangeText(12169);
  const animationDelayedAutoFocus = obj1.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (obj.useAppLauncherContext().entrypoint === onChangeText(9409).AppLauncherEntrypoint.VOICE) {
    let TextInput = tmp4(1178).TextInput;
  } else {
    TextInput = guildId(12173);
  }
  const items3 = [tmp.container, , ];
  if (hasError) {
    hasError = tmp.hasError;
  }
  obj = { style: items3, children: null };
  items3[1] = hasError;
  items3[2] = style;
  obj = { ref, autoFocus: false, value, style: tmp.stringOptionInput, maxLength: null, autoComplete: "off", onChangeText: null, onSelectionChange: null, onFocus: null, onEndEditing: null, textAlignVertical: "center", returnKeyType: "default", multiline: true, keyboardType: null, onPressIn: null };
  let maxLength;
  if (option.type === onChangeText(1894).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  obj.maxLength = maxLength;
  obj.onChangeText = onChangeText;
  obj.onSelectionChange = function onSelectionChange(nativeEvent) {
    closure_5.current = nativeEvent.nativeEvent.selection;
  };
  obj.onFocus = onFocus;
  obj.onEndEditing = onEndEditing;
  if (option.type === onChangeText(1894).ApplicationCommandOptionType.INTEGER) {
    let str2 = "numbers-and-punctuation";
    if (tmp4Result.isAndroid()) {
      str2 = "numeric";
    }
    let str = str2;
    tmp4Result = tmp4(1115);
  } else {
    str = "default";
  }
  obj.keyboardType = str;
  obj.onPressIn = onPressIn;
  const items4 = [closure_7(TextInput, obj), ];
  if (tmp14Result) {
    obj1 = {
      style: tmp.expressionButton,
      onPress() {
          let obj = KeyboardManagerUtils;
          const result = obj.dismissGlobalKeyboard();
          obj = { pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, onPressEmoji, guildId, onClose };
          const result1 = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj);
        }
    };
    tmp14Result = tmp14(guildId(12174), obj1);
  }
  items4[1] = tmp14Result;
  obj.children = items4;
  return onChangeText(ref, obj);
};