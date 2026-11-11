// === Module 17522: restoreHexagonCampaignPerks ===

// Module 17522 (restoreHexagonCampaignPerks)
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5271 */;
import isPerModeThemingActive from "isPerModeThemingActive" /* 5312 */;
import AppIconUtils from "AppIconUtils" /* 15203 */;
import getAppliedHexagonCampaignPerks from "getAppliedHexagonCampaignPerks" /* 17516 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 17517 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 17518 */;
import saveHexagonCampaignDisplayNameStyles from "saveHexagonCampaignDisplayNameStyles" /* 17521 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const HexagonCampaignConstants = fn(5268);
({ DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID: hasOwnProperty, HexagonCampaignPerk: closure_6 } = HexagonCampaignConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/restoreHexagonCampaignPerks.tsx");

export function restoreHexagonCampaignPerk(arg0, arg1) {
  ({ previousPerkValues, analyticsLocations } = arg1);
  if (constants.CLIENT_THEME === arg0) {
    if (obj6.isPerModeThemingActive()) {
      const hexagonCampaignClientThemeSystemThemes = getAppliedHexagonCampaignPerks.getHexagonCampaignClientThemeSystemThemes();
      for (const item10084 of hexagonCampaignClientThemeSystemThemes) {
        let obj11 = UserSettingsAppearanceThemeUtils;
        let obj12 = HexagonCampaignPreviousPerkValues;
        let obj3 = { theme: ThemeStore.themePreferenceForSystemTheme(item10084) };
        let result = obj11.handleSaveSyncedModeTheme(obj12.getHexagonCampaignClientThemeItem(obj3), item10084, analyticsLocations);
        continue;
      }
      return Promise.resolve(true);
    } else {
      const tmp20Result3 = UserSettingsAppearanceThemeUtils;
      let clientTheme = previousPerkValues.clientTheme;
      if (clientTheme == null) {
        const obj7 = { theme: ThemeStore.theme };
        clientTheme = obj7;
      }
      tmp20Result3.handleSaveTheme(HexagonCampaignPreviousPerkValues.getHexagonCampaignClientThemeItem(clientTheme), analyticsLocations, tmp2);
      return Promise.resolve(true);
    }
    obj6 = isPerModeThemingActive;
  } else if (constants.APP_ICON === arg0) {
    let appIconId = previousPerkValues.appIconId;
    if (appIconId == null) {
      appIconId = hasOwnProperty;
    }
    return AppIconUtils.setAppIcon(appIconId, tmp, { showErrorToast: false });
  } else if (constants.DISPLAY_NAME_STYLE === arg0) {
    const currentUser = UserStore.getCurrentUser();
    const obj = saveHexagonCampaignDisplayNameStyles;
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    const obj8 = { currentDisplayNameStyles: displayNameStyles, previousDisplayNameStyles: previousPerkValues.displayNameStyles, canUsePremiumProfileCustomization: null };
    const obj2 = HexagonCampaignUtils;
    obj8.canUsePremiumProfileCustomization = PremiumUtilsDefault.canUsePremiumProfileCustomization(currentUser);
    return obj.saveHexagonCampaignDisplayNameStyles(obj2.getHexagonCampaignRestoredDisplayNameStyles(obj8));
  }
}