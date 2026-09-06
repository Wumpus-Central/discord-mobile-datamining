// discord_app/design/migrations/native/LegacyTokens.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import shared from "../../shared.tsx";
import createStyles from "../../components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Platform = _mod17.Platform;
const result = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.PRIMARY_230;
});
const result1 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_660;
});
const result2 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.BLACK : unsafe_rawColors.PRIMARY_100;
});
const result3 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_400;
});
const result4 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_600;
});
const result5 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.PRIMARY_100;
});
const result6 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.BLACK;
});
const result7 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.PRIMARY_100;
});
const result8 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_500;
});
const result9 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
});
const result10 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
const result11 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_430;
});
const result12 = createStyles.experimental_createToken((primaryColor) => {
  if (null == primaryColor.primaryColor) {
    let PROFILE_GRADIENT_ROLE_PILL_BORDER = nativeDefault.colors.BORDER_SUBTLE;
  } else {
    PROFILE_GRADIENT_ROLE_PILL_BORDER = nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER;
  }
  return PROFILE_GRADIENT_ROLE_PILL_BORDER;
});
const result13 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
const result14 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.PRIMARY_260;
});
const result15 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_160 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.25);
    const tmpResult = ColorUtils;
  } else {
    PRIMARY_160 = nativeDefault.unsafe_rawColors.PRIMARY_160;
  }
  return PRIMARY_160;
});
const result16 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
});
const result17 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_360 : unsafe_rawColors.PRIMARY_400;
});
const result18 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.WHITE;
});
const result19 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result20 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_400 : unsafe_rawColors.PRIMARY_360;
});
const result21 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_330 : unsafe_rawColors.BRAND_530;
});
const result22 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.BLACK : unsafe_rawColors.PRIMARY_400;
});
const result23 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.WHITE;
});
const result24 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let BACKGROUND_BASE_LOW = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
    const tmpResult = ColorUtils;
  } else {
    BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  return BACKGROUND_BASE_LOW;
});
const result25 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.WHITE;
});
const result26 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PLATFORM_PLAYSTATION;
});
const result27 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let WHITE = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
    const tmpResult = ColorUtils;
  } else {
    WHITE = nativeDefault.unsafe_rawColors.WHITE;
  }
  return WHITE;
});
const result28 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.RED_500 : unsafe_rawColors.RED_400;
});
const result29 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.RED_400 : unsafe_rawColors.RED_360;
});
const result30 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.PRIMARY_230;
});
const result31 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_200;
});
const result32 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.YELLOW_460 : unsafe_rawColors.YELLOW_200;
});
const result33 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_400 : unsafe_rawColors.PRIMARY_300;
});
const result34 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300;
});
const result35 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_200 : unsafe_rawColors.PRIMARY_400;
});
const result36 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
});
const result37 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
});
const result38 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_200;
});
const result39 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_230;
});
const result40 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_130;
});
const result41 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_130;
});
const result42 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_300;
});
const result43 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_300;
});
const result44 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.TRANSPARENT;
});
const result45 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.TRANSPARENT : unsafe_rawColors.WHITE;
});
const result46 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.PRIMARY_160;
});
const result47 = createStyles.experimental_createToken((theme) => {
  let str = "#dee0e4";
  if (obj.isThemeDark(theme.theme)) {
    str = "#393c42";
  }
  return str;
});
const result48 = createStyles.experimental_createToken((theme) => {
  let num = 1;
  if (obj.isThemeDark(theme.theme)) {
    num = 0;
  }
  return num;
});
const result49 = createStyles.experimental_createToken((theme) => {
  let num = 0.8;
  if (obj.isThemeDark(theme.theme)) {
    num = 1;
  }
  return num;
});
const result50 = createStyles.experimental_createToken((theme) => {
  let num = 0.4;
  if (obj.isThemeDark(theme.theme)) {
    num = 1;
  }
  return num;
});
const result51 = createStyles.experimental_createToken((theme) => {
  let num = 0.2;
  if (obj.isThemeDark(theme.theme)) {
    num = 0.3;
  }
  return num;
});
const result52 = createStyles.experimental_createToken((theme) => {
  let num = 0.16;
  if (obj.isThemeDark(theme.theme)) {
    num = 0.24;
  }
  return num;
});
const result53 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    const PRIMARY_200 = unsafe_rawColors.PRIMARY_200;
  } else {
    const PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
  }
});
const result54 = createStyles.experimental_createToken((theme) => {
  let str = "rgba(0, 0, 0, 0.16)";
  if (obj.isThemeDark(theme.theme)) {
    str = "rgba(0, 0, 0, 0.24)";
  }
  return str;
});
const result55 = createStyles.experimental_createToken((theme) => {
  let str = "rgba(106, 116, 128, 0.16)";
  if (obj.isThemeDark(theme.theme)) {
    str = "rgba(79, 84, 92, 0.4)";
  }
  return str;
});
let c3 = 0.5;
const result56 = createStyles.experimental_createToken((theme) => {
  let str = "rgba(106, 116, 128, 0.16)";
  if (obj.isThemeDark(theme.theme)) {
    str = "rgba(79, 84, 92, 0.4)";
  }
  return str;
});
const result57 = createStyles.experimental_createToken((theme) => {
  const isThemeDarkResult = shared.isThemeDark(theme.theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_100, c3);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_500, c3);
  }
  return hexWithOpacityResult;
});
const result58 = createStyles.experimental_createToken((theme) => {
  const isThemeDarkResult = shared.isThemeDark(theme.theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_500, c3);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_430, c3);
  }
  return hexWithOpacityResult;
});
const result59 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_500 = nativeDefault.unsafe_rawColors.PRIMARY_500;
  } else {
    PRIMARY_500 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.3);
    const tmpResult = ColorUtils;
  }
  return PRIMARY_500;
});
const result60 = size.fileFinishedImporting("design/migrations/native/LegacyTokens.tsx");

export const DARK_PRIMARY_630_LIGHT_PRIMARY_230 = result;
export const DARK_WHITE_500_LIGHT_PRIMARY_660 = result1;
export const DARK_BLACK_500_LIGHT_PRIMARY_100 = result2;
export const DARK_PRIMARY_300_LIGHT_PRIMARY_400 = result3;
export const DARK_WHITE_500_LIGHT_PRIMARY_600 = result4;
export const DARK_PRIMARY_630_LIGHT_PRIMARY_100 = result5;
export const DARK_WHITE_500_LIGHT_BLACK_500 = result6;
export const DARK_PRIMARY_700_LIGHT_PRIMARY_100 = result7;
export const DARK_PRIMARY_300_LIGHT_PRIMARY_500 = result8;
export const DARK_PRIMARY_100_LIGHT_PRIMARY_500 = result9;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_100 = result10;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_430 = result11;
export const DIVIDER_BACKGROUND = result12;
export const DARK_BRAND_260_LIGHT_BRAND_200 = result13;
export const DARK_PRIMARY_700_LIGHT_PRIMARY_260 = result14;
export const DARK_WHITE_500_WITH_OPACITY_LIGHT_PRIMARY_160 = result15;
export const DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK = result16;
export const DARK_PRIMARY_360_LIGHT_PRIMARY_400 = result17;
export const DARK_PRIMARY_630_LIGHT_WHITE_500 = result18;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_400 = result19;
export const DARK_PRIMARY_400_LIGHT_PRIMARY_360 = result20;
export const DARK_BRAND_330_LIGHT_BRAND_530 = result21;
export const DARK_BLACK_500_LIGHT_PRIMARY_400 = result22;
export const DARK_PRIMARY_700_LIGHT_WHITE_500 = result23;
export const ACTION_BAR_BUTTON_BACKGROUND = result24;
export const DARK_PRIMARY_600_LIGHT_WHITE_500 = result25;
export const DARK_WHITE_500_LIGHT_PLAYSTATION = result26;
export const CONTAINER_BACKGROUND = result27;
export const DARK_RED_500_LIGHT_RED_400 = result28;
export const DARK_RED_400_LIGHT_RED_360 = result29;
export const DARK_PRIMARY_700_LIGHT_PRIMARY_230 = result30;
export const DARK_PRIMARY_800_LIGHT_PRIMARY_200 = result31;
export const DARK_YELLOW_460_LIGHT_YELLOW_200 = result32;
export const DARK_PRIMARY_400_LIGHT_PRIMARY_300 = result33;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_300 = result34;
export const DARK_PRIMARY_200_LIGHT_PRIMARY_400 = result35;
export const DARK_WHITE_500_LIGHT_PRIMARY_500 = result36;
export const DARK_PRIMARY_330_LIGHT_PRIMARY_460 = result37;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_200 = result38;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_230 = result39;
export const DARK_PRIMARY_600_LIGHT_PRIMARY_130 = result40;
export const DARK_PRIMARY_660_LIGHT_PRIMARY_130 = result41;
export const DARK_PRIMARY_800_LIGHT_PRIMARY_300 = result42;
export const DARK_PRIMARY_660_LIGHT_PRIMARY_300 = result43;
export const DARK_PRIMARY_630_LIGHT_TRANSPARENT = result44;
export const DARK_TRANSPARENT_LIGHT_WHITE_500 = result45;
export const DARK_PRIMARY_630_LIGHT_PRIMARY_160 = result46;
export const DARK_393C42_LIGHT_DEE0E4 = result47;
export const DARK_0_LIGHT_1 = result48;
export const DARK_1_LIGHT_08 = result49;
export const DARK_1_LIGHT_04 = result50;
export const DARK_03_LIGHT_02 = result51;
export const DARK_024_LIGHT_016 = result52;
export const FORM_TERNARY_CHECK_BOX_PASSTHROUGH_ACTIVE_BG = result53;
export const TOAST_CONTAINER_SHADOW_COLOR = result54;
export const PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG = result55;
export const TIER_0_MARKETING_PAGE_BACK_BUTTON_BG = result56;
export const BUTTON_PRIMARY_DISABLED_BACKGROUND = result57;
export const BUTTON_GREY_DISABLED_BACKGROUND = result58;
export const BUTTON_OUTLINED_BORDER = result59;
