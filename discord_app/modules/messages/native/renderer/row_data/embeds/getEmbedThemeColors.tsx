// discord_app/modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../../../../utils/ColorUtils.tsx";
import shared from "../../../../../../design/shared.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
let createStyles = fn(4890);
const result = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = fn(4890);
const result1 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.3);
    const tmpResult = ColorUtils;
  }
  return PRIMARY_600;
});
createStyles = fn(4890);
const result2 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = fn(4890);
const result3 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = fn(4890);
const result4 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
createStyles = fn(4890);
const result5 = createStyles.experimental_createToken((theme) => {
  const isThemeDarkResult = shared.isThemeDark(theme.theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
createStyles = fn(4890);
const result6 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
createStyles = fn(4890);
const result7 = createStyles.experimental_createToken((theme) => {
  let str = "#666b73";
  if (!obj.isThemeDark(theme.theme)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
createStyles = fn(4890);
const result8 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_200, 0.3);
    const tmpResult = ColorUtils;
  }
  return PRIMARY_600;
});
createStyles = fn(4890);
let closure_4 = createStyles.createNativeStyleProperties({
  acceptBlurpleLabelBackgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  acceptLabelGreenBackgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT,
  acceptLabelGreenColor: nativeDefault.unsafe_rawColors.WHITE,
  backgroundColor: nativeDefault.colors.MOBILE_EMBED_BACKGROUND_DEFAULT,
  bodyTextColor: nativeDefault.colors.TEXT_DEFAULT,
  clearLabelRedBackgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  clearLabelRedColor: nativeDefault.unsafe_rawColors.WHITE,
  headerColor: nativeDefault.colors.TEXT_SUBTLE,
  subtitleColor: nativeDefault.colors.TEXT_SUBTLE,
  titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  acceptLabelActiveBackgroundColor: result,
  acceptLabelDisabledBackgroundColor: result1,
  acceptLabelDisabledBorderColor: result2,
  acceptLabelDisabledTextColor: result3,
  acceptLabelDisabledColor: result4,
  borderColor: result5,
  resolvingGradientEnd: result6,
  resolvingGradientStart: result7,
  thumbnailBackgroundColor: result8,
  voiceActiveColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE,
  voiceHeaderBackgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  voiceMutedColor: nativeDefault.colors.TEXT_MUTED,
});
const ReactCompilerGating = fn(558);
const obj11 = {
  acceptBlurpleLabelBackgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  acceptLabelGreenBackgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT,
  acceptLabelGreenColor: nativeDefault.unsafe_rawColors.WHITE,
  backgroundColor: nativeDefault.colors.MOBILE_EMBED_BACKGROUND_DEFAULT,
  bodyTextColor: nativeDefault.colors.TEXT_DEFAULT,
  clearLabelRedBackgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  clearLabelRedColor: nativeDefault.unsafe_rawColors.WHITE,
  headerColor: nativeDefault.colors.TEXT_SUBTLE,
  subtitleColor: nativeDefault.colors.TEXT_SUBTLE,
  titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  acceptLabelActiveBackgroundColor: result,
  acceptLabelDisabledBackgroundColor: result1,
  acceptLabelDisabledBorderColor: result2,
  acceptLabelDisabledTextColor: result3,
  acceptLabelDisabledColor: result4,
  borderColor: result5,
  resolvingGradientEnd: result6,
  resolvingGradientStart: result7,
  thumbnailBackgroundColor: result8,
  voiceActiveColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE,
  voiceHeaderBackgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  voiceMutedColor: nativeDefault.colors.TEXT_MUTED,
};
function getEmbedThemeColors(arg0) {
  const tmp = closure_4(arg0);
  return {
    colors: tmp,
    baseColors: {
      borderColor: tmp.borderColor,
      backgroundColor: tmp.backgroundColor,
      thumbnailCornerRadius: 15,
      headerColor: tmp.headerColor,
    },
  };
}
const size = fn(2);
const result9 = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default getEmbedThemeColors;
export const useEmbedThemeColors = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const tmp4 = closure_4(arg0);
        const obj2 = { colors: tmp4, baseColors: null };
        ({
          borderColor: obj3.borderColor,
          backgroundColor: obj3.backgroundColor,
          headerColor: obj3.headerColor,
        } = tmp4);
        obj2.baseColors = { borderColor: null, backgroundColor: null, thumbnailCornerRadius: 15, headerColor: null };
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp2 = obj2;
        const obj5 = { borderColor: null, backgroundColor: null, thumbnailCornerRadius: 15, headerColor: null };
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      closure_0 = arg0;
      const items = [arg0];
      return noop.useMemo(() => {
        const tmp = closure_4(closure_0);
        return {
          colors: tmp,
          baseColors: {
            borderColor: tmp.borderColor,
            backgroundColor: tmp.backgroundColor,
            thumbnailCornerRadius: 15,
            headerColor: tmp.headerColor,
          },
        };
      }, items);
    };
