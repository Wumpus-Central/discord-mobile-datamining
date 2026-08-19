// === Module 11414: ChatInputNativeComponent ===

// Module 11414 (ChatInputNativeComponent)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import useTheme from "useTheme" /* 4310 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 11161 */;
import closure_3 from "isSyncedModeThemesEnabled" /* 4195 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let obj = { style: { flex: 1 }, textColor: null, placeholderColor: null };
obj = { color: ThemesDefault.colors.TEXT_DEFAULT };
obj[1] = obj;
createCacheKey = { color: ThemesDefault.colors.TEXT_MUTED };
obj[2] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((markAsSpoilerTitle, ref) => {
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = getSystemLocale.intl;
    markAsSpoilerTitle = intl.string(getSystemLocale.t["gsI+xC"]);
  }
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset } = markAsSpoilerTitle);
  const tmp3 = callback();
  let obj = useTheme;
  const theme = obj.useTheme();
  const isThemeDarkResult = AccessibilityAnnouncer.isThemeDark(theme);
  const obj2 = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
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
  const obj3 = hexToRgba;
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
  const hexWithOpacityResult = hexToRgba.hexWithOpacity(PRIMARY_500, num);
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const tmp4Result1 = set;
  obj = { accessibilityLabel: tmp11, children: tmp12, editable, keyboardAppearance: num2, keyboardType: str, markAsSpoilerTitle, maxHeight: tmp9(11153)(onMaxHeightChanged), onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset };
  return jsx(__INTERNAL_VIEW_CONFIG.default, { accessibilityLabel: tmp11, children: tmp12, editable, keyboardAppearance: num2, keyboardType: str, markAsSpoilerTitle, maxHeight: tmp9(11153)(onMaxHeightChanged), onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset });
});
forwardRefResult.displayName = "ChatInputNativeComponent";
const result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;