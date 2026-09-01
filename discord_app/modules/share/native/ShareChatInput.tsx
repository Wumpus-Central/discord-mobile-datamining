// === Module 11284: ShareChatInput ===

// Module 11284 (ShareChatInput)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import set from "set" /* 500 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, chatInput: null, chatText: null, inputPlaceholder: null, emojiButton: null, focused: null };
createCacheKey = { flex: 1, flexDirection: "row", backgroundColor: ThemesDefault.colors.SHARE_CHAT_INPUT_BACKGROUND, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, paddingVertical: 0, paddingHorizontal: ThemesDefault.space.PX_4, maxHeight: 80 };
const obj2 = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_NORMAL, color: ThemesDefault.colors.TEXT_STRONG, paddingTop: null, paddingBottom: null };
let num = 2;
if (set.isAndroid()) {
  num = 0;
}
obj2[4] = ThemesDefault.space.PX_8 + num;
obj2[5] = ThemesDefault.space.PX_8;
createCacheKey[2] = obj2;
const obj1 = { flex: 1, paddingVertical: 0, paddingHorizontal: ThemesDefault.space.PX_4, maxHeight: 80 };
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_MUTED };
const obj3 = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[4] = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8, alignSelf: "flex-end" };
set = { borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
createCacheKey[5] = set;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

export default function ShareChatInput(onFocus) {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let flag = onFocus.disabled;
  ({ text, inputRef, onChange, onSelectionChange, onPressEmoji, onSend } = onFocus);
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  const tmp = callback3();
  const tmp2 = onBlur;
  const tmp4 = onBlur(8160)();
  [focused, c2] = callback(React.useState(false), 2);
  const items = [onFocus];
  const items1 = [onBlur];
  callback = React.useCallback(() => {
    _undefined(true);
    onFocus();
  }, items);
  const items2 = [tmp.container, ];
  const callback1 = React.useCallback(() => {
    _undefined(false);
    onBlur();
  }, items1);
  if (focused) {
    focused = tmp.focused;
  }
  let obj = { style: items2, children: null };
  items2[1] = focused;
  obj = { ref: inputRef, maxLength: tmp4, placeholder: null, placeholderTextColor: null, accessibilityLabel: null, onSubmitEditing: null, onSelectionChange: null, style: null, value: null, onChange: null, onFocus: null, onBlur: null, multiline: true, showBorder: false, showTopContainer: false, textAlignVertical: "center", inputTextStyle: null, editable: null };
  const tmp5 = callback(React.useState(false), 2);
  const tmp8 = closure_7;
  const tmp9 = View;
  const intl = onFocus(1236).intl;
  obj[2] = intl.string(onFocus(1236).t.ZroO3G);
  obj[3] = tmp.inputPlaceholder.color;
  const intl2 = onFocus(1236).intl;
  obj[4] = intl2.string(onFocus(1236).t["/+MXmw"]);
  obj[5] = onSend;
  obj[6] = onSelectionChange;
  obj[7] = tmp.chatInput;
  obj[8] = text;
  obj[9] = onChange;
  obj[10] = callback;
  obj[11] = callback1;
  obj[16] = tmp.chatText;
  obj[17] = !flag;
  const items3 = [callback2(tmp2(8371), obj), ];
  obj = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, disabled: null, children: null };
  const intl3 = onFocus(1236).intl;
  obj[0] = intl3.string(onFocus(1236).t.iZ7Mz9);
  obj[2] = onPressEmoji;
  obj[3] = tmp.emojiButton;
  obj[4] = flag;
  obj[5] = callback2(onFocus(8228).ReactionIcon, { size: "md" });
  items3[1] = callback2(onFocus(5068).PressableOpacity, obj);
  obj[1] = items3;
  return tmp8(tmp9, obj);
};