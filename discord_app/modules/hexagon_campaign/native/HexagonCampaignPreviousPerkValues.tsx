// === Module 16357: HexagonCampaignPreviousPerkValues ===

// Module 16357 (HexagonCampaignPreviousPerkValues)
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4996 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5200 */;
import HexagonActionCreators from "HexagonActionCreators" /* 15828 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4993 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1253 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;

const require = globalThis.__r;

require = fn;
const isHexagonCampaignAppIcon = fn(9864).isHexagonCampaignAppIcon;
const ClientThemesConstants = fn(1255);
({ BACKGROUND_GRADIENT_PRESETS_MAP: closure_7, REFRESH_STANDARD_BACKGROUND_THEMES: closure_8 } = ClientThemesConstants);
const SystemThemeState = fn(1210).SystemThemeState;
const DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = { theme: "system" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPreviousPerkValues.tsx");

export { DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME };
export const DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = fn(9865).FreemiumAppIconIds.DEFAULT;
export const getHexagonCampaignClientThemeItem = function getHexagonCampaignClientThemeItem(DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME) {
  _require = DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME;
  if (null != DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.backgroundGradientPresetId) {
    if (null != closure_7[DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.backgroundGradientPresetId]) {
      return tmp2;
    }
  }
  if (null != DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.customThemeSettings) {
    const obj = { type: require("ClientThemesTypes").ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, theme: null, customThemeSettings: null };
    ({ theme: obj.theme, customThemeSettings: obj.customThemeSettings } = DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME);
    let found = obj;
  } else {
    found = closure_8.find((theme) => theme.theme === DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.theme);
    if (found == null) {
      found = closure_8.find((theme) => theme.theme === theme.theme);
    }
    if (found == null) {
      found = closure_8[0];
    }
  }
  return found;
};
export const saveHexagonCampaignPreviousClientTheme = function saveHexagonCampaignPreviousClientTheme() {
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
};
export const saveHexagonCampaignPreviousAppIcon = function saveHexagonCampaignPreviousAppIcon(appIconId) {
  if (!isHexagonCampaignAppIcon(appIconId)) {
    const obj2 = { appIconId };
    const result = HexagonActionCreators.saveHexagonCampaignPreviousPerkValues(obj2);
  }
};