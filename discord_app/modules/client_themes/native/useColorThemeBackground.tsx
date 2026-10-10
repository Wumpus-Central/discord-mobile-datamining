// === Module 4972: useColorThemeBackground ===

// Module 4972 (useColorThemeBackground)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1254 */;
import GuildThemePresets from "GuildThemePresets" /* 4973 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4975 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5028 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;

const require = globalThis.__r;

require = fn;
function getGuildThemeName() {
  const intl = util.intl;
  return intl.string(util.t.CFzDOG);
}
function getGuildThemeBackground(type, stateFromStores) {
  if (null == type) {
    return null;
  } else if ("custom" === type.type) {
    const customUserThemeSettings = type.customUserThemeSettings;
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getGuildThemeName, theme: stateFromStores, customThemeSettings: null };
    const obj2 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    const items = [];
    HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], stateFromStores), 0);
    obj2.colors = items;
    obj2.gradientColorStops = [];
    let num2 = customUserThemeSettings.gradientAngle;
    if (num2 == null) {
      num2 = 0;
    }
    obj2.gradientAngle = num2;
    let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
      GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
    }
    obj2.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
    obj.customThemeSettings = obj2;
    return obj;
  } else {
    const guildThemePresetAppearance = GuildThemePresets.getGuildThemePresetAppearance(type.preset, stateFromStores);
    const obj5 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getGuildThemeName, theme: stateFromStores, customThemeSettings: null };
    const obj9 = { colors: null, gradientAngle: null, gradientColorStops: null, baseMix: null };
    const colors1 = guildThemePresetAppearance.colors;
    obj9.colors = colors1.map((hex) => hex.hex);
    ({ angle: obj6.gradientAngle, colors } = guildThemePresetAppearance);
    obj9.gradientColorStops = colors.map((stop) => stop.stop);
    obj9.baseMix = guildThemePresetAppearance.baseMix;
    obj5.customThemeSettings = obj9;
    return obj5;
  }
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useColorThemeBackground() {
  const cResult = c.c(7);
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
  const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ClientThemesBackgroundStore];
    const fn2 = function h() {
      return gradientPreset.gradientPreset;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  const stateFromStores1 = useStateFromStores.useStateFromStores(tmp9, tmp10);
  MobileThemesUtils;
  if (cResult[4] === tmp4) {
    if (cResult[5] === stateFromStores) {
      let tmp15 = cResult[6];
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
  const tmpResult3 = useStateFromStores;
}) : (function useColorThemeBackground() {
  const tmp = stateFromStores(4975)();
  _require = tmp;
  const items = [ThemeStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => theme.theme);
  const obj = require("useStateFromStores");
  const items1 = [ClientThemesBackgroundStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => gradientPreset.gradientPreset);
  const obj2 = require("useStateFromStores");
  const items2 = [tmp, stateFromStores];
  const customBackgroundGradient = require("MobileThemesUtils").useCustomBackgroundGradient();
  let memo = noop.useMemo(() => getGuildThemeBackground(closure_0, stateFromStores), items2);
  if (memo == null) {
    memo = customBackgroundGradient;
  }
  if (memo == null) {
    memo = stateFromStores1;
  }
  return memo;
});