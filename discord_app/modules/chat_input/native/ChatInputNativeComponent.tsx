// discord_app/modules/chat_input/native/ChatInputNativeComponent.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import shared from "../../../design/shared.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import ChatInputNativeComponent2 from "../../../../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx";
import MobileMarkdownFormatMenuExperiment from "../experiments/MobileMarkdownFormatMenuExperiment.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../client_themes/ClientThemesBackgroundStore.tsx";

require = fn;
class ChatInputNativeComponent {
  constructor(arg0) {
    markAsSpoilerTitle = global.markAsSpoilerTitle;
    ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = global);
    if (markAsSpoilerTitle === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      intl = closure_0(closure_2[5]).intl;
      markAsSpoilerTitle = intl.string(closure_0(closure_2[5]).t["gsI+xC"]);
    }
    maxHeight = global.maxHeight;
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
      ref,
    } = global);
    tmp3 = closure_5();
    tmp4 = closure_0;
    tmp5 = closure_2;
    obj = closure_0(closure_2[6]);
    theme = obj.useTheme();
    obj2 = closure_0(closure_2[7]);
    isThemeDarkResult = obj2.isThemeDark(theme);
    obj3 = closure_0(closure_2[8]);
    tmp8 = closure_1;
    unsafe_rawColors = closure_1(closure_2[4]).unsafe_rawColors;
    if (isThemeDarkResult) {
      PRIMARY_500 = unsafe_rawColors.WHITE;
      tmp9 = tmp8;
    } else {
      PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
      tmp9 = tmp8;
    }
    num = 0.6;
    if (null != closure_3.gradientPreset) {
      num = 0.8;
    }
    hexWithOpacityResult = obj3.hexWithOpacity(PRIMARY_500, num);
    tmp4Result = tmp4(tmp5[9]);
    tmp11 = undefined;
    if (!tmp4Result.isAndroid()) {
      tmp11 = accessibilityLabel;
    }
    tmp4Result1 = tmp4(tmp5[9]);
    tmp12 = undefined;
    if (!tmp4Result1.isAndroid()) {
      tmp12 = customKeyboard;
    }
    tmp4Result2 = tmp4(tmp5[9]);
    str = "default";
    num2 = 2;
    if (isThemeDarkResult) {
      num2 = 1;
    }
    tmp13 = tmp9(tmp5[10])(onMaxHeightChanged);
    tmp4Result3 = tmp4(tmp5[11]);
    isMobileMarkdownFormatMenuEnabled = tmp4Result3.useIsMobileMarkdownFormatMenuEnabled("ChatInputNativeComponent");
    tmp15 = jsx;
    obj1 = {
      accessible,
      accessibilityLabel: tmp11,
      children: tmp12,
      editable,
      showFormatMenu: isMobileMarkdownFormatMenuEnabled,
      keyboardAppearance: num2,
      keyboardType: str,
      markAsSpoilerTitle,
      maxHeight: null,
      onBeginFocus: null,
      onEndBlur: null,
      onChangeContentSize: null,
      onSelectionOrTextChange: null,
      onTextFlushed: null,
      onPasteImage: null,
      onPasteCommand: null,
      onTapAction: null,
      onRequestSend: null,
      placeholder: null,
      placeholderColor: null,
      ref: null,
      selectionColor: null,
      setNoExtractUI: null,
      shouldShowCursor: null,
      style: null,
      textColor: null,
      verticalInset: null,
    };
    if (maxHeight == null) {
      maxHeight = tmp13;
    }
    obj1.maxHeight = maxHeight;
    obj1.onBeginFocus = onBeginFocus;
    obj1.onEndBlur = onEndBlur;
    obj1.onChangeContentSize = onChangeContentSize;
    obj1.onSelectionOrTextChange = onSelectionOrTextChange;
    obj1.onTextFlushed = onTextFlushed;
    obj1.onPasteImage = onPasteImage;
    obj1.onPasteCommand = onPasteCommand;
    obj1.onTapAction = onTapAction;
    obj1.onRequestSend = onRequestSend;
    obj1.placeholder = placeholder;
    obj1.placeholderColor = tmp3.placeholderColor.color;
    obj1.ref = ref;
    obj1.selectionColor = hexWithOpacityResult;
    obj1.setNoExtractUI = setNoExtractUI;
    obj1.shouldShowCursor = shouldShowCursor;
    obj1.style = tmp3.style;
    obj1.textColor = tmp3.textColor.color;
    obj1.verticalInset = verticalInset;
    return tmp15(tmp4(tmp5[12]).default, obj1);
  }
}
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { style: { flex: 1 }, textColor: { color: nativeDefault.colors.TEXT_DEFAULT }, placeholderColor: null };
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.placeholderColor = { color: nativeDefault.colors.TEXT_MUTED };
const hasOwnProperty = createStyles.createStyles(obj2);
ChatInputNativeComponent.displayName = "ChatInputNativeComponent";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default ChatInputNativeComponent;
