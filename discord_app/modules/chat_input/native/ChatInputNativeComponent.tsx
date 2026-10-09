// discord_app/modules/chat_input/native/ChatInputNativeComponent.tsx
import c from "../../../../_runtime/00576_c.js";
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
const createStyles = fn(5091);
let obj2 = { style: { flex: 1 }, textColor: { color: nativeDefault.colors.TEXT_DEFAULT }, placeholderColor: null };
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.placeholderColor = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatInputNativeComponent(arg0) {
      const cResult = c.c(30);
      ({
        accessible,
        placeholder,
        editable,
        markAsSpoilerTitle,
        maxHeight,
        setNoExtractUI,
        shouldShowCursor,
        onBeginFocus,
        onEndBlur,
        onChangeContentSize,
        onSelectionOrTextChange,
        onTextFlushed,
        onPasteImage,
        onPasteCommand,
        onTapAction,
        onRequestSend,
        verticalInset,
        ref,
        accessibilityLabel,
        customKeyboard,
        onMaxHeightChanged,
      } = arg0);
      if (cResult[0] !== markAsSpoilerTitle) {
        let stringResult = markAsSpoilerTitle;
        if (undefined === markAsSpoilerTitle) {
          const intl = util.intl;
          stringResult = intl.string(util.t["gsI+xC"]);
        }
        cResult[0] = markAsSpoilerTitle;
        cResult[1] = stringResult;
        let tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = closure_5();
      const style = tmp6.style;
      const color = tmp6.textColor.color;
      const color2 = tmp6.placeholderColor.color;
      const theme = useTheme.useTheme();
      const tmpResult = useTheme;
      const isThemeDarkResult = shared.isThemeDark(theme);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (isThemeDarkResult) {
        let PRIMARY_500 = unsafe_rawColors.WHITE;
        let tmp10 = importDefault;
      } else {
        PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
        tmp10 = importDefault;
      }
      if (cResult[2] !== PRIMARY_500) {
        let num3 = 0.6;
        if (null != ClientThemesBackgroundStore.gradientPreset) {
          num3 = 0.8;
        }
        const hexWithOpacityResult = ColorUtils.hexWithOpacity(PRIMARY_500, num3);
        cResult[2] = PRIMARY_500;
        cResult[3] = hexWithOpacityResult;
        let tmp11 = hexWithOpacityResult;
        const tmpResult7 = ColorUtils;
      } else {
        tmp11 = cResult[3];
      }
      const tmpResult6 = shared;
      let tmp15;
      if (!tmpResult8.isAndroid()) {
        tmp15 = accessibilityLabel;
      }
      tmpResult8 = PlatformUtils;
      let tmp16;
      if (!tmpResult9.isAndroid()) {
        tmp16 = customKeyboard;
      }
      PlatformUtils;
      let num6 = 2;
      if (isThemeDarkResult) {
        num6 = 1;
      }
      if (maxHeight == null) {
        maxHeight = tmp10(11660)(onMaxHeightChanged);
      }
      if (cResult[4] === tmp15) {
        if (cResult[5] === accessible) {
          if (cResult[6] === tmp16) {
            if (cResult[7] === editable) {
              if (cResult[8] === ref) {
                if (cResult[9] === num6) {
                  if (cResult[10] === tmp4) {
                    if (cResult[11] === maxHeight) {
                      if (cResult[12] === onBeginFocus) {
                        if (cResult[13] === onChangeContentSize) {
                          if (cResult[14] === onEndBlur) {
                            if (cResult[15] === onPasteCommand) {
                              if (cResult[16] === onPasteImage) {
                                if (cResult[17] === onRequestSend) {
                                  if (cResult[18] === onSelectionOrTextChange) {
                                    if (cResult[19] === onTapAction) {
                                      if (cResult[20] === onTextFlushed) {
                                        if (cResult[21] === placeholder) {
                                          if (cResult[22] === color2) {
                                            if (cResult[23] === tmp11) {
                                              if (cResult[24] === setNoExtractUI) {
                                                if (cResult[25] === shouldShowCursor) {
                                                  if (cResult[26] === style) {
                                                    if (cResult[27] === color) {
                                                      if (cResult[28] === verticalInset) {
                                                        let tmp17 = cResult[29];
                                                      }
                                                      return tmp17;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmp18 = jsx(ChatInputNativeComponent.default, {
        accessible,
        accessibilityLabel: tmp15,
        children: tmp16,
        editable,
        keyboardAppearance: num6,
        keyboardType: "default",
        markAsSpoilerTitle: tmp4,
        maxHeight,
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
        placeholderColor: color2,
        ref,
        selectionColor: tmp11,
        setNoExtractUI,
        shouldShowCursor,
        style,
        textColor: color,
        verticalInset,
      });
      cResult[4] = tmp15;
      cResult[5] = accessible;
      cResult[6] = tmp16;
      cResult[7] = editable;
      cResult[8] = ref;
      cResult[9] = num6;
      cResult[10] = tmp4;
      cResult[11] = maxHeight;
      cResult[12] = onBeginFocus;
      cResult[13] = onChangeContentSize;
      cResult[14] = onEndBlur;
      cResult[15] = onPasteCommand;
      cResult[16] = onPasteImage;
      cResult[17] = onRequestSend;
      cResult[18] = onSelectionOrTextChange;
      cResult[19] = onTapAction;
      cResult[20] = onTextFlushed;
      cResult[21] = placeholder;
      cResult[22] = color2;
      cResult[23] = tmp11;
      cResult[24] = setNoExtractUI;
      cResult[25] = shouldShowCursor;
      cResult[26] = style;
      cResult[27] = color;
      cResult[28] = verticalInset;
      cResult[29] = tmp18;
      tmp17 = tmp18;
      tmpResult9 = PlatformUtils;
    }
  : function ChatInputNativeComponent(markAsSpoilerTitle) {
      markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
      ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
      if (markAsSpoilerTitle === undefined) {
        const intl = util.intl;
        markAsSpoilerTitle = intl.string(util.t["gsI+xC"]);
      }
      let maxHeight = markAsSpoilerTitle.maxHeight;
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
      } = markAsSpoilerTitle);
      const tmp3 = closure_5();
      const theme = useTheme.useTheme();
      const isThemeDarkResult = shared.isThemeDark(theme);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (isThemeDarkResult) {
        let PRIMARY_500 = unsafe_rawColors.WHITE;
      } else {
        PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
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
      const obj4 = {
        accessible,
        accessibilityLabel: tmp11,
        children: tmp12,
        editable,
        keyboardAppearance: num2,
        keyboardType: "default",
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
      obj4.maxHeight = maxHeight;
      obj4.onBeginFocus = onBeginFocus;
      obj4.onEndBlur = onEndBlur;
      obj4.onChangeContentSize = onChangeContentSize;
      obj4.onSelectionOrTextChange = onSelectionOrTextChange;
      obj4.onTextFlushed = onTextFlushed;
      obj4.onPasteImage = onPasteImage;
      obj4.onPasteCommand = onPasteCommand;
      obj4.onTapAction = onTapAction;
      obj4.onRequestSend = onRequestSend;
      obj4.placeholder = placeholder;
      obj4.placeholderColor = tmp3.placeholderColor.color;
      obj4.ref = ref;
      obj4.selectionColor = hexWithOpacityResult;
      obj4.setNoExtractUI = setNoExtractUI;
      obj4.shouldShowCursor = shouldShowCursor;
      obj4.style = tmp3.style;
      obj4.textColor = tmp3.textColor.color;
      obj4.verticalInset = verticalInset;
      return jsx(ChatInputNativeComponent.default, {
        accessible,
        accessibilityLabel: tmp11,
        children: tmp12,
        editable,
        keyboardAppearance: num2,
        keyboardType: "default",
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
      });
    };
tmp3.displayName = "ChatInputNativeComponent";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default tmp3;
