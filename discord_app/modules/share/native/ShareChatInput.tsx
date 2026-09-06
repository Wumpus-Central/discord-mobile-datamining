// === Module 11701: ShareChatInput ===

// Module 11701 (ShareChatInput)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 5123 */;
import FormInputDefault from "FormInput" /* 8601 */;
import ReactionIcon from "ReactionIcon" /* 8757 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 9304 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, chatInput: null, chatText: null, inputPlaceholder: null, emojiButton: null, focused: null };
createStyles = { flex: 1, flexDirection: "row", backgroundColor: nativeDefault.colors.SHARE_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
createStyles.chatInput = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
const obj2 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_STRONG, paddingTop: null, paddingBottom: null };
let PlatformUtils = fn(1115);
let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
obj2.paddingTop = nativeDefault.space.PX_8 + num;
obj2.paddingBottom = nativeDefault.space.PX_8;
createStyles.chatText = obj2;
const obj1 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
createStyles.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
const obj3 = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.emojiButton = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" };
PlatformUtils = { borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
createStyles.focused = PlatformUtils;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

export default function ShareChatInput(onFocus) {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let flag = onFocus.disabled;
  ({ text, inputRef, onChange, onSelectionChange, onPressEmoji, onSend } = onFocus);
  if (flag === undefined) {
    flag = false;
  }
  c2 = undefined;
  const tmp = closure_8();
  const tmp4 = useMessageMaxLengthDefault();
  [focused, c2] = _slicedToArray(noop.useState(false), 2);
  const items = [onFocus];
  const items1 = [onBlur];
  const callback = noop.useCallback(() => {
    _undefined(true);
    onFocus();
  }, items);
  const items2 = [tmp.container, ];
  const callback1 = noop.useCallback(() => {
    _undefined(false);
    onBlur();
  }, items1);
  if (focused) {
    focused = tmp.focused;
  }
  let obj = { style: items2, children: null };
  items2[1] = focused;
  obj = { ref: inputRef, maxLength: tmp4, placeholder: null, placeholderTextColor: null, accessibilityLabel: null, onSubmitEditing: null, onSelectionChange: null, style: null, value: null, onChange: null, onFocus: null, onBlur: null, multiline: true, showBorder: false, showTopContainer: false, textAlignVertical: "center", inputTextStyle: null, editable: null };
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj.placeholder = intl.string(util.t.ZroO3G);
  obj.placeholderTextColor = tmp.inputPlaceholder.color;
  const intl2 = util.intl;
  obj.accessibilityLabel = intl2.string(util.t["/+MXmw"]);
  obj.onSubmitEditing = onSend;
  obj.onSelectionChange = onSelectionChange;
  obj.style = tmp.chatInput;
  obj.value = text;
  obj.onChange = onChange;
  obj.onFocus = callback;
  obj.onBlur = callback1;
  obj.inputTextStyle = tmp.chatText;
  obj.editable = !flag;
  const items3 = [timestampProducer(FormInputDefault, obj), ];
  obj = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, disabled: null, children: null };
  const intl3 = util.intl;
  obj.accessibilityLabel = intl3.string(util.t.iZ7Mz9);
  obj.onPress = onPressEmoji;
  obj.style = tmp.emojiButton;
  obj.disabled = flag;
  obj.children = timestampProducer(ReactionIcon.ReactionIcon, { size: "md" });
  items3[1] = timestampProducer(Pressables.PressableOpacity, obj);
  obj.children = items3;
  return React5(View, obj);
};