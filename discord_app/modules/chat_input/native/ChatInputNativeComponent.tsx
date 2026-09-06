// discord_app/modules/chat_input/native/ChatInputNativeComponent.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import shared from "../../../design/shared.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import ChatInputNativeComponent from "../../../../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../client_themes/ClientThemesBackgroundStore.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let obj = { style: { flex: 1 }, textColor: null, placeholderColor: null };
obj = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.textColor = obj;
const createStyles = { color: nativeDefault.colors.TEXT_MUTED };
obj.placeholderColor = createStyles;
let closure_5 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((markAsSpoilerTitle, ref) => {
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = util.intl;
    markAsSpoilerTitle = intl.string(util.t["gsI+xC"]);
  }
  ({
    setNoExtractUI,
    shouldShowCursor,
    onBeginFocus,
    onEndBlur,
    onChangeContentSize,
    onMaxHeightChanged,
    onSelectionOrTextChange,
    onTextFlushed,
    onPasteImage,
    onPasteCommand,
    onTapAction,
    onRequestSend,
    verticalInset,
  } = markAsSpoilerTitle);
  const tmp3 = closure_5();
  let obj = useTheme;
  const theme = obj.useTheme();
  const isThemeDarkResult = shared.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let PRIMARY_500 = unsafe_rawColors.WHITE;
    let tmp9 = tmp8;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp9 = tmp8;
  }
  let num = 0.6;
  if (null != ClientThemesBackgroundStore.gradientPreset) {
    num = 0.8;
  }
  let tmp4Result = tmp4(1115);
  let tmp11;
  if (!tmp4Result.isAndroid()) {
    tmp11 = accessibilityLabel;
  }
  tmp4Result = tmp4(1115);
  let tmp12;
  if (!tmp4Result.isAndroid()) {
    tmp12 = customKeyboard;
  }
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(PRIMARY_500, num);
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const tmp4Result1 = PlatformUtils;
  obj = {
    accessible,
    accessibilityLabel: tmp11,
    children: tmp12,
    editable,
    keyboardAppearance: num2,
    keyboardType: str,
    markAsSpoilerTitle,
    maxHeight: tmp9(12031)(onMaxHeightChanged),
    onBeginFocus,
    onEndBlur,
    onChangeContentSize,
    onSelectionOrTextChange,
    onTextFlushed,
    onPasteImage,
    onPasteCommand,
    onTapAction,
    onRequestSend,
    placeholder,
    placeholderColor: tmp3.placeholderColor.color,
    ref,
    selectionColor: hexWithOpacityResult,
    setNoExtractUI,
    shouldShowCursor,
    style: tmp3.style,
    textColor: tmp3.textColor.color,
    verticalInset,
  };
  return jsx(ChatInputNativeComponent.default, {
    accessible,
    accessibilityLabel: tmp11,
    children: tmp12,
    editable,
    keyboardAppearance: num2,
    keyboardType: str,
    markAsSpoilerTitle,
    maxHeight: tmp9(12031)(onMaxHeightChanged),
    onBeginFocus,
    onEndBlur,
    onChangeContentSize,
    onSelectionOrTextChange,
    onTextFlushed,
    onPasteImage,
    onPasteCommand,
    onTapAction,
    onRequestSend,
    placeholder,
    placeholderColor: tmp3.placeholderColor.color,
    ref,
    selectionColor: hexWithOpacityResult,
    setNoExtractUI,
    shouldShowCursor,
    style: tmp3.style,
    textColor: tmp3.textColor.color,
    verticalInset,
  });
});
forwardRefResult.displayName = "ChatInputNativeComponent";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;
