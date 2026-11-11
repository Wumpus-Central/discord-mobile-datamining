// === Module 17517: HexagonCampaignPreviousPerkValues ===

// Module 17517 (HexagonCampaignPreviousPerkValues)
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5271 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5481 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16966 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5267 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;

const require = globalThis.__r;

require = fn;
let closure_6 = fn(5268).DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME;
const ClientThemesConstants = fn(1240);
({ BACKGROUND_GRADIENT_PRESETS_MAP: metroImportDefault, REFRESH_STANDARD_BACKGROUND_THEMES: closure_8 } = ClientThemesConstants);
const SystemThemeState = fn(1195).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPreviousPerkValues.tsx");

export function getHexagonCampaignClientThemeItem(clientTheme) {
  _require = clientTheme;
  if (null != clientTheme.backgroundGradientPresetId) {
    if (null != closure_7[clientTheme.backgroundGradientPresetId]) {
      return tmp2;
    }
  }
  if (null != clientTheme.customThemeSettings) {
    const obj = { type: require("ClientThemesTypes").ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, theme: null, customThemeSettings: null };
    ({ theme: obj.theme, customThemeSettings: obj.customThemeSettings } = clientTheme);
    let found = obj;
  } else {
    found = closure_8.find((theme) => theme.theme === theme.theme);
    if (found == null) {
      found = closure_8.find((theme) => theme.theme === theme2.theme);
    }
    if (found == null) {
      found = closure_8[0];
    }
  }
  return found;
}
export function saveHexagonCampaignPreviousClientTheme() {
  const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
  let id1;
  if (gradientPreset != null) {
    id1 = gradientPreset.id;
  }
  if (!obj.isHexagonCampaignClientThemePreset(id1)) {
    id = ClientThemesBackgroundStore.gradientPreset;
    if (null != id) {
      const obj2 = { theme: null, backgroundGradientPresetId: null };
      ({ theme: obj5.theme, id } = id);
      obj2.backgroundGradientPresetId = id;
      let obj6 = obj2;
    } else {
      const customBackgroundGradient = MobileThemesUtils.getCustomBackgroundGradient();
      if (null != customBackgroundGradient) {
        if (CustomThemeMobileStore.hasCustomTheme()) {
          ({ theme: obj4.theme, customThemeSettings: obj4.customThemeSettings } = customBackgroundGradient);
          obj6 = { theme: null, customThemeSettings: null };
          const obj3 = { theme: null, customThemeSettings: null };
        }
      }
      if (UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON) {
        obj6 = { theme: "system" };
      } else {
        obj6 = { theme: ThemeStore.theme };
      }
      const tmpResult2 = MobileThemesUtils;
    }
    const obj7 = { clientTheme: obj6 };
    const result = HexagonActionCreators.saveHexagonCampaignPreviousPerkValues(obj7);
    const tmpResult = HexagonActionCreators;
  }
  obj = HexagonCampaignUtils;
}