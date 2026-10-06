// discord_app/modules/client_themes/native/useColorThemeBackground.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import ClientThemesTypes from "../ClientThemesTypes.tsx";
import GuildThemePresets from "../../guild_themes/GuildThemePresets.tsx";
import useRoutedActiveGuildThemeDefault from "../../guild_themes/native/useRoutedActiveGuildTheme.tsx";
import MobileThemesUtils from "MobileThemesUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ClientThemesBackgroundStore from "../ClientThemesBackgroundStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function getGuildThemeName() {
  const intl = intl2.intl;
  return intl.string(intl2.t.CFzDOG);
}
function getGuildThemeBackground(type, stateFromStores) {
  let GUILD_THEME_DEFAULT_BASE_MIX;
  let colors;
  let colors1;
  let items;
  let num2;
  let obj2;
  let obj9;
  if (null == type) {
    return null;
  } else if ("custom" === type.type) {
    const customUserThemeSettings = type.customUserThemeSettings;
    const first = customUserThemeSettings.colors[0];
    const obj = {
      type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
      getName: getGuildThemeName,
      theme: stateFromStores,
      customThemeSettings: obj2,
    };
    obj2 = { colors: items, gradientColorStops: [], gradientAngle: num2, baseMix: GUILD_THEME_DEFAULT_BASE_MIX };
    items = [];
    const obj3 = GuildThemePresets;
    HermesBuiltin.arraySpread(items, obj3.getSingleColorGuildThemeGradientColors(first, stateFromStores), 0);
    num2 = customUserThemeSettings.gradientAngle;
    if (num2 == null) {
      num2 = 0;
    }
    GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
      GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
    }
    return obj;
  } else {
    const obj4 = GuildThemePresets;
    const guildThemePresetAppearance = obj4.getGuildThemePresetAppearance(type.preset, stateFromStores);
    const obj5 = {
      type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
      getName: getGuildThemeName,
      theme: stateFromStores,
      customThemeSettings: obj9,
    };
    obj9 = {
      colors: colors1.map((hex) => hex.hex),
      gradientAngle: null,
      gradientColorStops: colors.map((stop) => stop.stop),
      baseMix: guildThemePresetAppearance.baseMix,
    };
    colors1 = guildThemePresetAppearance.colors;
    ({ angle: obj6.gradientAngle, colors } = guildThemePresetAppearance);
    return obj5;
  }
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let gradientPreset;
      let theme;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      const tmp4 = useRoutedActiveGuildThemeDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        const fn = function s() {
          return theme.theme;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ClientThemesBackgroundStore];
        const fn2 = function h() {
          return gradientPreset.gradientPreset;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp10 = fn2;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult3 = useStateFromStores;
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
      MobileThemesUtils;
      if (cResult[4] === tmp4) {
        let tmp15;
        if (cResult[5] === stateFromStores) {
          tmp15 = cResult[6];
        }
        if (tmp15 == null) {
          tmp15 = tmp14;
        }
        if (tmp15 == null) {
          tmp15 = stateFromStores1;
        }
        return tmp15;
      }
      const tmp16 = getGuildThemeBackground(tmp4, stateFromStores);
      cResult[4] = tmp4;
      cResult[5] = stateFromStores;
      cResult[6] = tmp16;
      tmp15 = tmp16;
    }
  : () => {
      let closure_0;
      let gradientPreset;
      let stateFromStores;
      let theme;
      const tmp = stateFromStores(4741)();
      _require = tmp;
      const items = [ThemeStore];
      const obj = require("useStateFromStores");
      stateFromStores = obj.useStateFromStores(items, () => theme.theme);
      const items1 = [ClientThemesBackgroundStore];
      const obj2 = require("useStateFromStores");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => gradientPreset.gradientPreset);
      const items2 = [tmp, stateFromStores];
      const obj3 = require("MobileThemesUtils");
      const customBackgroundGradient = obj3.useCustomBackgroundGradient();
      let memo = react.useMemo(() => getGuildThemeBackground(closure_0, stateFromStores), items2);
      if (memo == null) {
        memo = customBackgroundGradient;
      }
      if (memo == null) {
        memo = stateFromStores1;
      }
      return memo;
    };
const result = size.fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default tmp2;
