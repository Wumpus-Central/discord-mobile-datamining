// discord_app/modules/share/native/ShareChatInput.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import FormInputDefault from "../../../design/void/Form/native/FormInput.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import useMessageMaxLengthDefault from "../../messages/useMessageMaxLength.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.SHARE_CHAT_INPUT_BACKGROUND,
    borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS,
    borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH,
    borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
  chatInput: null,
  chatText: null,
  inputPlaceholder: null,
  emojiButton: null,
  focused: null,
};
let obj3 = {
  flex: 1,
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.SHARE_CHAT_INPUT_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.chatInput = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
const obj5 = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: fn(1074).Fonts.PRIMARY_NORMAL,
  color: nativeDefault.colors.TEXT_STRONG,
  paddingTop: null,
  paddingBottom: null,
};
const PlatformUtils = fn(1364);
let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
obj5.paddingTop = nativeDefault.space.PX_8 + num;
obj5.paddingBottom = nativeDefault.space.PX_8;
obj2.chatText = obj5;
const obj4 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
obj2.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
const obj7 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.emojiButton = {
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  alignSelf: "flex-end",
};
const obj8 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" };
obj2.focused = { borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let closure_8 = createStyles.createStyles(obj2);
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
  [focused, c2] = noop.useState(false);
  const items = [onFocus];
  const items1 = [onBlur];
  const callback = noop.useCallback(() => {
    _undefined(true);
    onFocus();
  }, items);
  const items2 = [tmp.container];
  const callback1 = noop.useCallback(() => {
    _undefined(false);
    onBlur();
  }, items1);
  if (focused) {
    focused = tmp.focused;
  }
  const obj = { style: items2, children: null };
  items2[1] = focused;
  const obj2 = {
    ref: inputRef,
    maxLength: tmp4,
    placeholder: null,
    placeholderTextColor: null,
    accessibilityLabel: null,
    onSubmitEditing: null,
    onSelectionChange: null,
    style: null,
    value: null,
    onChange: null,
    onFocus: null,
    onBlur: null,
    multiline: true,
    showBorder: false,
    showTopContainer: false,
    textAlignVertical: "center",
    inputTextStyle: null,
    editable: null,
  };
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj2.placeholder = intl.string(util.t.ZroO3G);
  obj2.placeholderTextColor = tmp.inputPlaceholder.color;
  const intl2 = util.intl;
  obj2.accessibilityLabel = intl2.string(util.t["/+MXmw"]);
  obj2.onSubmitEditing = onSend;
  obj2.onSelectionChange = onSelectionChange;
  obj2.style = tmp.chatInput;
  obj2.value = text;
  obj2.onChange = onChange;
  obj2.onFocus = callback;
  obj2.onBlur = callback1;
  obj2.inputTextStyle = tmp.chatText;
  obj2.editable = !flag;
  const items3 = [timestampProducer(FormInputDefault, obj2)];
  const obj3 = {
    accessibilityLabel: null,
    accessibilityRole: "button",
    onPress: null,
    style: null,
    disabled: null,
    children: null,
  };
  const intl3 = util.intl;
  obj3.accessibilityLabel = intl3.string(util.t.iZ7Mz9);
  obj3.onPress = onPressEmoji;
  obj3.style = tmp.emojiButton;
  obj3.disabled = flag;
  obj3.children = timestampProducer(ReactionIcon.ReactionIcon, { size: "md" });
  items3[1] = timestampProducer(Pressables.PressableOpacity, obj3);
  obj.children = items3;
  return React5(View, obj);
}
