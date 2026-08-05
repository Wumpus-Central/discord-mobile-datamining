// discord_app/modules/chat_input/native/ChatInputNativeComponent.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "get ActivityIndicator";

const require = arg1;
let c4 = importAllResult;
let obj = { style: { flex: 1 }, textColor: null, placeholderColor: null };
obj = { color: require("Themes").colors.TEXT_DEFAULT };
obj[1] = obj;
createCacheKey = { color: require("Themes").colors.TEXT_MUTED };
obj[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((markAsSpoilerTitle, ref) => {
  let accessibilityLabel;
  let customKeyboard;
  let editable;
  let onBeginFocus;
  let onChangeContentSize;
  let onEndBlur;
  let onMaxHeightChanged;
  let onPasteCommand;
  let onPasteImage;
  let onRequestSend;
  let onSelectionOrTextChange;
  let onTapAction;
  let onTextFlushed;
  let placeholder;
  let setNoExtractUI;
  let shouldShowCursor;
  let verticalInset;
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = _require(1236).intl;
    markAsSpoilerTitle = intl.string(_require(1236).t["gsI+xC"]);
  }
  _require = undefined;
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset } = markAsSpoilerTitle);
  const tmp3 = callback2();
  let obj = _require(4221);
  const theme = obj.useTheme();
  const isThemeDarkResult = _require(4131).isThemeDark(theme);
  const obj2 = _require(4131);
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  if (isThemeDarkResult) {
    let PRIMARY_500 = unsafe_rawColors.WHITE;
    let tmp9 = tmp8;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp9 = tmp8;
  }
  let num = 0.6;
  if (null != gradientPreset.gradientPreset) {
    num = 0.8;
  }
  const obj3 = _require(4129);
  let tmp4Result = tmp4(500);
  let tmp11;
  if (!tmp4Result.isAndroid()) {
    tmp11 = accessibilityLabel;
  }
  tmp4Result = tmp4(500);
  let tmp12;
  if (!tmp4Result.isAndroid()) {
    tmp12 = customKeyboard;
  }
  const hexWithOpacityResult = _require(4129).hexWithOpacity(PRIMARY_500, num);
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const tmp4Result1 = _require(500);
  const tmp13 = tmp9(11285)(onMaxHeightChanged);
  _require = _require(11291).useShouldUseFabricChatInput();
  obj = { accessibilityLabel: tmp11, children: tmp12, editable, keyboardAppearance: num2, keyboardType: str, markAsSpoilerTitle, maxHeight: tmp13, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset };
  return jsx(callback(importAllResult.useState(() => {
    if (callback) {
      let _default = callback(outer1_2[14]).default;
    } else {
      _default = outer1_8;
    }
    return _default;
  }), 1)[0], { accessibilityLabel: tmp11, children: tmp12, editable, keyboardAppearance: num2, keyboardType: str, markAsSpoilerTitle, maxHeight: tmp13, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset });
});
if (set.isAndroid()) {
  let _default = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default = require("get ActivityIndicator").requireNativeComponent("DCDChatInputLegacy");
}
forwardRefResult.displayName = "ChatInputNativeComponent";
const result = set.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;