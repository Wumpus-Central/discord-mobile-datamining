// discord_app/modules/chat_input/native/ChatInputNativeComponent.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import shared from "../../../design/shared.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import ChatInputNativeComponent from "../../../../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx";
import react from "../../../../_runtime/00019_react.js";
import ClientThemesBackgroundStore from "../../client_themes/ClientThemesBackgroundStore.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { style: { flex: 1 }, textColor: obj2, placeholderColor: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let PRIMARY_500;
        let accessibilityLabel;
        let accessible;
        let customKeyboard;
        let editable;
        let markAsSpoilerTitle;
        let maxHeight;
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
        let tmp10;
        let tmp11;
        let tmp4;
        let verticalInset;
        const obj = react2;
        const cResult = obj.c(30);
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
          accessibilityLabel,
          customKeyboard,
          onMaxHeightChanged,
        } = arg0);
        if (cResult[0] !== markAsSpoilerTitle) {
          let stringResult = markAsSpoilerTitle;
          if (undefined === markAsSpoilerTitle) {
            const intl = intl2.intl;
            stringResult = intl.string(intl2.t["gsI+xC"]);
          }
          cResult[0] = markAsSpoilerTitle;
          cResult[1] = stringResult;
          tmp4 = stringResult;
        } else {
          tmp4 = cResult[1];
        }
        const tmp6 = closure_5();
        const style = tmp6.style;
        const color = tmp6.textColor.color;
        const color2 = tmp6.placeholderColor.color;
        const tmpResult = useTheme;
        const theme = tmpResult.useTheme();
        const tmpResult6 = shared;
        const isThemeDarkResult = tmpResult6.isThemeDark(theme);
        const unsafe_rawColors = nativeDefault.unsafe_rawColors;
        if (isThemeDarkResult) {
          PRIMARY_500 = unsafe_rawColors.WHITE;
          tmp10 = importDefault;
        } else {
          PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
          tmp10 = importDefault;
        }
        if (cResult[2] !== PRIMARY_500) {
          let num3 = 0.6;
          const hexWithOpacity = ColorUtils.hexWithOpacity;
          ColorUtils;
          if (null != ClientThemesBackgroundStore.gradientPreset) {
            num3 = 0.8;
          }
          const hexWithOpacityResult = hexWithOpacity(PRIMARY_500, num3);
          cResult[2] = PRIMARY_500;
          cResult[3] = hexWithOpacityResult;
          tmp11 = hexWithOpacityResult;
        } else {
          tmp11 = cResult[3];
        }
        let tmp16;
        const tmpResult8 = PlatformUtils;
        if (!tmpResult8.isAndroid()) {
          tmp16 = accessibilityLabel;
        }
        let tmp17;
        const tmpResult9 = PlatformUtils;
        if (!tmpResult9.isAndroid()) {
          tmp17 = customKeyboard;
        }
        PlatformUtils;
        let num6 = 2;
        if (isThemeDarkResult) {
          num6 = 1;
        }
        if (maxHeight == null) {
          maxHeight = tmp10(11659)(onMaxHeightChanged);
        }
        if (cResult[4] === tmp16) {
          if (cResult[5] === accessible) {
            if (cResult[6] === tmp17) {
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
                                                        let tmp18;
                                                        if (cResult[28] === verticalInset) {
                                                          tmp18 = cResult[29];
                                                        }
                                                        return tmp18;
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
        const tmp19 = jsx(ChatInputNativeComponent.default, {
          accessible,
          accessibilityLabel: tmp16,
          children: tmp17,
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
        cResult[4] = tmp16;
        cResult[5] = accessible;
        cResult[6] = tmp17;
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
        cResult[29] = tmp19;
        tmp18 = tmp19;
      }
    : (markAsSpoilerTitle, ref) => {
        let PRIMARY_500;
        let accessibilityLabel;
        let accessible;
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
        let tmp10;
        let verticalInset;
        markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
        ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
        if (markAsSpoilerTitle === undefined) {
          const intl = intl2.intl;
          markAsSpoilerTitle = intl.string(intl2.t["gsI+xC"]);
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
        } = markAsSpoilerTitle);
        const tmp3 = closure_5();
        const style = tmp3.style;
        const color = tmp3.textColor.color;
        const color2 = tmp3.placeholderColor.color;
        const obj = useTheme;
        const theme = obj.useTheme();
        const obj2 = shared;
        const isThemeDarkResult = obj2.isThemeDark(theme);
        const hexWithOpacity = ColorUtils.hexWithOpacity;
        ColorUtils;
        const unsafe_rawColors = nativeDefault.unsafe_rawColors;
        if (isThemeDarkResult) {
          PRIMARY_500 = unsafe_rawColors.WHITE;
          tmp10 = importDefault;
        } else {
          PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
          tmp10 = importDefault;
        }
        let num = 0.6;
        if (null != ClientThemesBackgroundStore.gradientPreset) {
          num = 0.8;
        }
        let tmp12;
        const hexWithOpacityResult = hexWithOpacity(PRIMARY_500, num);
        const tmp4Result = PlatformUtils;
        if (!tmp4Result.isAndroid()) {
          tmp12 = accessibilityLabel;
        }
        let tmp13;
        const tmp4Result3 = PlatformUtils;
        if (!tmp4Result3.isAndroid()) {
          tmp13 = customKeyboard;
        }
        PlatformUtils;
        let num2 = 2;
        if (isThemeDarkResult) {
          num2 = 1;
        }
        const tmp14 = tmp10(11659)(onMaxHeightChanged);
        ChatInputNativeComponent.default;
        if (maxHeight == null) {
          maxHeight = tmp14;
        }
        return (
          <_default
            accessible={accessible}
            accessibilityLabel={tmp12}
            editable={editable}
            keyboardAppearance={num2}
            keyboardType="default"
            markAsSpoilerTitle={markAsSpoilerTitle}
            maxHeight={maxHeight}
            onBeginFocus={onBeginFocus}
            onEndBlur={onEndBlur}
            onChangeContentSize={onChangeContentSize}
            onSelectionOrTextChange={onSelectionOrTextChange}
            onTextFlushed={onTextFlushed}
            onPasteImage={onPasteImage}
            onPasteCommand={onPasteCommand}
            onTapAction={onTapAction}
            onRequestSend={onRequestSend}
            placeholder={placeholder}
            placeholderColor={color2}
            ref={ref}
            selectionColor={hexWithOpacityResult}
            setNoExtractUI={setNoExtractUI}
            shouldShowCursor={shouldShowCursor}
            style={style}
            textColor={color}
            verticalInset={verticalInset}
          >
            {tmp13}
          </_default>
        );
      },
);
forwardRefResult.displayName = "ChatInputNativeComponent";
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;
