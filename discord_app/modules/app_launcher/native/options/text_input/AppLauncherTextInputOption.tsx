// discord_app/modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { EmojiIntention } from "../../../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, hasError: null, stringOptionInput: null, expressionButton: null };
createCacheKey = { width: "100%", backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.lg, padding: 14, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL };
createCacheKey[2] = { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 };
createCacheKey[3] = { marginVertical: -8, marginRight: -8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderColor: ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL };
let result = require("set").fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default function AppLauncherTextInputOption(guildId) {
  ({ option, onChangeText } = guildId);
  guildId = guildId.guildId;
  ({ initialValue: dependencyMap, hasError } = guildId);
  let first;
  let React;
  closure_5 = undefined;
  let ref;
  closure_7 = undefined;
  let callback;
  callback = undefined;
  closure_10 = undefined;
  ({ onFocus, onEndEditing, style, autoFocus, onPressIn } = guildId);
  const tmp = callback();
  const tmp2 = first(React.useState(() => {
    let str = "";
    if (null != closure_2) {
      str = "";
      if ("text" === tmp.type) {
        str = tmp.text;
      }
    }
    return str;
  }), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = onChangeText(9602);
  closure_5 = React.useRef({ start: 0, end: 0 });
  ref = React.useRef(null);
  let tmp14Result = option.type === onChangeText(1954).ApplicationCommandOptionType.STRING;
  closure_7 = tmp14Result;
  const items = [onChangeText];
  callback = React.useCallback((arg0) => {
    callback(arg0);
    onChangeText(arg0);
  }, items);
  const items1 = [callback, first];
  callback = React.useCallback((id) => {
    const substr = first.substring(0, ref.current.start);
    let start = ref.current.end;
    if (start == null) {
      start = tmp2.current.start;
    }
    const substr1 = first.substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        callback(substr + id.surrogates + substr1);
        let length = substr + id.surrogates.length;
      }
      const obj = { start: null, end: null };
      obj[0] = length;
      obj[1] = length;
      tmp2.current = obj;
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
  closure_10 = React.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const items2 = [guildId, tmp14Result];
  const effect = React.useEffect(() => {
    if (closure_7) {
      const result = onChangeText(closure_1_2[9]).maybeFetchTopEmojisByGuild(guildId);
      const obj = onChangeText(closure_1_2[9]);
    }
  }, items2);
  obj1 = onChangeText(11398);
  const animationDelayedAutoFocus = obj1.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (obj.useAppLauncherContext().entrypoint === onChangeText(9603).AppLauncherEntrypoint.VOICE) {
    let TextInput = tmp4(1297).TextInput;
  } else {
    TextInput = guildId(11402);
  }
  const items3 = [tmp.container, , ];
  if (hasError) {
    hasError = tmp.hasError;
  }
  obj = { style: items3, children: null };
  items3[1] = hasError;
  items3[2] = style;
  obj = { ref, autoFocus: false, value: first, style: tmp.stringOptionInput, maxLength: null, autoComplete: "off", onChangeText: null, onSelectionChange: null, onFocus: null, onEndEditing: null, textAlignVertical: "center", returnKeyType: "default", multiline: true, keyboardType: null, onPressIn: null };
  let maxLength;
  if (option.type === onChangeText(1954).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  obj[4] = maxLength;
  obj[6] = callback;
  obj[7] = function onSelectionChange(nativeEvent) {
    closure_5.current = nativeEvent.nativeEvent.selection;
  };
  obj[8] = onFocus;
  obj[9] = onEndEditing;
  if (option.type === onChangeText(1954).ApplicationCommandOptionType.INTEGER) {
    let str2 = "numbers-and-punctuation";
    if (tmp4Result.isAndroid()) {
      str2 = "numeric";
    }
    let str = str2;
    tmp4Result = tmp4(500);
  } else {
    str = "default";
  }
  obj[13] = str;
  obj[14] = onPressIn;
  const items4 = [closure_7(TextInput, obj), ];
  if (tmp14Result) {
    obj1 = { style: null, onPress: null };
    obj1[0] = tmp.expressionButton;
    obj1[1] = function onPress() {
      let obj = onChangeText(closure_1_2[16]);
      const result = obj.dismissGlobalKeyboard();
      obj = { pickerIntention: ref.CHAT, autoFocus: false, startExpanded: false, onPressEmoji: closure_9, guildId, onClose: closure_10 };
      const result1 = onChangeText(closure_1_2[17]).openEmojiPickerActionSheet(obj);
    };
    tmp14Result = tmp14(guildId(11403), obj1);
  }
  items4[1] = tmp14Result;
  obj[1] = items4;
  return callback(closure_5, obj);
};