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
const createStyles = fn(4827);
let obj = { style: { flex: 1 }, textColor: { color: nativeDefault.colors.TEXT_DEFAULT }, placeholderColor: null };
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.placeholderColor = { color: nativeDefault.colors.TEXT_MUTED };
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
  const theme = useTheme.useTheme();
  const isThemeDarkResult = shared.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let PRIMARY_500 = unsafe_rawColors.WHITE;
    let tmp9 = importDefault;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp9 = importDefault;
  }
  let num = 0.6;
  if (null != ClientThemesBackgroundStore.gradientPreset) {
    num = 0.8;
  }
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(PRIMARY_500, num);
  let tmp11;
  if (!tmp4Result.isAndroid()) {
    tmp11 = accessibilityLabel;
  }
  tmp4Result = PlatformUtils;
  let tmp12;
  if (!tmp4Result3.isAndroid()) {
    tmp12 = customKeyboard;
  }
  PlatformUtils;
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  tmp4Result3 = PlatformUtils;
  const tmp13 = tmp9(12364)(onMaxHeightChanged);
  return jsx(ChatInputNativeComponent.default, {
    accessible,
    accessibilityLabel: tmp11,
    children: tmp12,
    editable,
    keyboardAppearance: num2,
    keyboardType: "default",
    markAsSpoilerTitle,
    maxHeight: tmp9(12364)(onMaxHeightChanged),
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
