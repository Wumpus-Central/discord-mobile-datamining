// discord_app/modules/share/native/ShareChatInput.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import obj132 from "../../../utils/PlatformUtils.tsx";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { flex: 1, flexDirection: "row", backgroundColor: ThemesDefault.colors.SHARE_CHAT_INPUT_BACKGROUND, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, paddingVertical: 0, paddingHorizontal: ThemesDefault.space.PX_4, maxHeight: 80 };
const obj2 = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_NORMAL, color: ThemesDefault.colors.TEXT_STRONG, paddingTop: null, paddingBottom: null };
let num = 2;
if (obj132.isAndroid()) {
  num = 0;
}
obj2[4] = ThemesDefault.space.PX_8 + num;
obj2[5] = ThemesDefault.space.PX_8;
createCacheKey[2] = obj2;
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[4] = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8, alignSelf: "flex-end" };
obj132 = { borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
createCacheKey[5] = obj132;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

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
  const tmp4 = onBlur(8462)();
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
  items2[1] = focused;
  let obj = { ref: inputRef, maxLength: tmp4, placeholder: null, placeholderTextColor: null, accessibilityLabel: null, onSubmitEditing: null, onSelectionChange: null, style: null, value: null, onChange: null, onFocus: null, onBlur: null, multiline: true, showBorder: false, showTopContainer: false, textAlignVertical: "center", inputTextStyle: null, editable: null };
  const tmp5 = callback(React.useState(false), 2);
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
  const items3 = [callback2(tmp2(8091), obj), ];
  obj = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, disabled: null, children: null };
  const intl3 = onFocus(1236).intl;
  obj[0] = intl3.string(onFocus(1236).t.iZ7Mz9);
  obj[2] = onPressEmoji;
  obj[3] = tmp.emojiButton;
  obj[4] = flag;
  obj[5] = callback2(onFocus(7939).ReactionIcon, { size: "md" });
  items3[1] = callback2(onFocus(5433).PressableOpacity, obj);
  obj[1] = items3;
  return callback(View, obj);
};