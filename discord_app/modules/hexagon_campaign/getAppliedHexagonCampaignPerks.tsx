// === Module 16282: getAppliedHexagonCampaignPerks ===

// Module 16282 (getAppliedHexagonCampaignPerks)
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4822 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4818 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const HexagonCampaignPerk = fn(4819).HexagonCampaignPerk;
const SystemTheme = fn(1194).SystemTheme;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/getAppliedHexagonCampaignPerks.tsx");

export function getHexagonCampaignClientThemeSystemThemes() {
  items = [, ];
  ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
  return items.filter((item) => {
    syncedClientTheme = syncedClientTheme.getSyncedClientTheme(item);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.backgroundGradientPresetId;
    }
    return HexagonCampaignUtils.isHexagonCampaignClientThemePreset(prop);
  });
}
export function isHexagonCampaignClientThemeApplied() {
  if (obj.isPerModeThemingActive()) {
    items = [, ];
    ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
    let tmp6 = items.filter((item) => {
      syncedClientTheme = syncedClientTheme.getSyncedClientTheme(item);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.backgroundGradientPresetId;
      }
      return HexagonCampaignUtils.isHexagonCampaignClientThemePreset(prop);
    }).length > 0;
  } else {
    const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
    let id;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    tmp6 = HexagonCampaignUtils.isHexagonCampaignClientThemePreset(id) && !ClientThemesBackgroundStore.isUpsellGradientPreview || ClientThemesBackgroundStore.hasHiddenHexagonCampaignPreset;
    const tmpResult = HexagonCampaignUtils;
  }
  return tmp6;
}
export function isHexagonCampaignDisplayNameStyleApplied() {
  const currentUser = UserStore.getCurrentUser();
  let displayNameStyles;
  if (currentUser != null) {
    displayNameStyles = currentUser.displayNameStyles;
  }
  return HexagonCampaignUtils.hasHexagonCampaignDisplayNameFont(displayNameStyles);
}
export function getAppliedHexagonCampaignPerks(isClientThemeApplied) {
  const obj = { [closure_1_5.CLIENT_THEME]: isClientThemeApplied.isClientThemeApplied };
  ({ displayNameStyles, currentAppIconId } = isClientThemeApplied);
  obj[HexagonCampaignPerk.DISPLAY_NAME_STYLE] = HexagonCampaignUtils.hasHexagonCampaignDisplayNameFont(displayNameStyles);
  obj[HexagonCampaignPerk.APP_ICON] = HexagonCampaignUtils.isHexagonCampaignAppIcon(currentAppIconId);
  const values = Object.values(HexagonCampaignPerk);
  return values.filter((item) => obj[item]);
}