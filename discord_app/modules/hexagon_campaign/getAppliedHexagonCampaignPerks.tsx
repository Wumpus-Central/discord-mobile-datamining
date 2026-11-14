// discord_app/modules/hexagon_campaign/getAppliedHexagonCampaignPerks.tsx
import HexagonCampaignUtils from "HexagonCampaignUtils.tsx";
import ClientThemesBackgroundStore from "../client_themes/ClientThemesBackgroundStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const HexagonCampaignPerk = fn(5331).HexagonCampaignPerk;
const SystemTheme = fn(1195).SystemTheme;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/getAppliedHexagonCampaignPerks.tsx");

export function getHexagonCampaignClientThemeSystemThemes() {
  items = [,];
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
    items = [,];
    ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
    let tmp6 =
      items.filter((item) => {
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
    tmp6 =
      (HexagonCampaignUtils.isHexagonCampaignClientThemePreset(id) &&
        !ClientThemesBackgroundStore.isUpsellGradientPreview) ||
      ClientThemesBackgroundStore.hasHiddenHexagonCampaignPreset;
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
  obj[HexagonCampaignPerk.DISPLAY_NAME_STYLE] =
    HexagonCampaignUtils.hasHexagonCampaignDisplayNameFont(displayNameStyles);
  obj[HexagonCampaignPerk.APP_ICON] = HexagonCampaignUtils.isHexagonCampaignAppIcon(currentAppIconId);
  const values = Object.values(HexagonCampaignPerk);
  return values.filter((item) => obj[item]);
}
