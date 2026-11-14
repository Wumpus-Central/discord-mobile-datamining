// === Module 17635: restoreHexagonCampaignPerks ===

// Module 17635 (restoreHexagonCampaignPerks)
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5334 */;
import isPerModeThemingActive from "isPerModeThemingActive" /* 5375 */;
import AppIconUtils from "AppIconUtils" /* 15314 */;
import HexagonActionCreators from "HexagonActionCreators" /* 17084 */;
import getAppliedHexagonCampaignPerks from "getAppliedHexagonCampaignPerks" /* 17629 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 17630 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 17631 */;
import saveHexagonCampaignDisplayNameStyles from "saveHexagonCampaignDisplayNameStyles" /* 17634 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1388 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16845 */;

require = fn;
function restoreHexagonCampaignPerk(CLIENT_THEME, arg1) {
  ({ previousPerkValues, analyticsLocations } = arg1);
  if (constants.CLIENT_THEME === CLIENT_THEME) {
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
  } else if (constants.APP_ICON === CLIENT_THEME) {
    let appIconId = previousPerkValues.appIconId;
    if (appIconId == null) {
      appIconId = React5;
    }
    return AppIconUtils.setAppIcon(appIconId, tmp, { showErrorToast: false });
  } else if (constants.DISPLAY_NAME_STYLE === CLIENT_THEME) {
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
function getRestoreHexagonCampaignPerkParams(analyticsLocations) {
  const obj = { previousPerkValues: HexagonCampaignPersistedStore.previousPerkValues, premiumType: null, isThemeSynced: null, analyticsLocations: null };
  const currentUser = UserStore.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  obj.premiumType = premiumType;
  obj.isThemeSynced = SelectivelySyncedUserSettingsStore.shouldSync("appearance");
  obj.analyticsLocations = analyticsLocations;
  return obj;
}
let closure_12 = async function _restoreExpiredHexagonCampaignPerks() {
  const tmp13 = getRestoreHexagonCampaignPerkParams(closure_0);
  closure_0 = tmp13;
  const premiumType = tmp13.premiumType;
  const obj4 = {};
  obj4[constants.CLIENT_THEME] = getAppliedHexagonCampaignPerks.isHexagonCampaignClientThemeApplied();
  obj4[constants.DISPLAY_NAME_STYLE] = getAppliedHexagonCampaignPerks.isHexagonCampaignDisplayNameStyleApplied();
  items = [, ];
  ({ CLIENT_THEME: arr[0], DISPLAY_NAME_STYLE: arr[1] } = constants);
  const found = items.filter((item) => {
    let result = true === obj4[item];
    if (result) {
      result = closure_0(obj4[12]).isHexagonCampaignPerkExpired(item, premiumType);
      const obj = closure_0(obj4[12]);
    }
    return result;
  });
  await Promise.all(found.map((item) => closure_2_10(item, closure_0)));
  const _Boolean = Boolean;
  return value.every(Boolean);
};
const HexagonCampaignConstants = fn(5331);
({ DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID: closure_8, HexagonCampaignPerk: closure_9 } = HexagonCampaignConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/restoreHexagonCampaignPerks.tsx");

export { restoreHexagonCampaignPerk };
export function restoreExpiredHexagonCampaignClientTheme(analyticsLocations) {
  const currentUser = UserStore.getCurrentUser();
  let result = null != currentUser;
  if (result) {
    result = getAppliedHexagonCampaignPerks.isHexagonCampaignClientThemeApplied();
  }
  if (result) {
    result = HexagonCampaignUtils.isHexagonCampaignPerkExpired(constants.CLIENT_THEME, currentUser.premiumType);
  }
  if (result) {
    const obj4 = { previousPerkValues: HexagonCampaignPersistedStore.previousPerkValues, premiumType: null, isThemeSynced: null, analyticsLocations: null };
    const currentUser1 = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser1 != null) {
      premiumType = currentUser1.premiumType;
    }
    obj4.premiumType = premiumType;
    obj4.isThemeSynced = SelectivelySyncedUserSettingsStore.shouldSync("appearance");
    obj4.analyticsLocations = analyticsLocations;
    restoreHexagonCampaignPerk(constants.CLIENT_THEME, obj4);
    const result1 = HexagonActionCreators.markHexagonCampaignExpiredClientThemeRestored();
  }
}
export function restoreExpiredHexagonCampaignDisplayNameStyle(analyticsLocations) {
  const currentUser = UserStore.getCurrentUser();
  let result = null != currentUser;
  if (result) {
    result = getAppliedHexagonCampaignPerks.isHexagonCampaignDisplayNameStyleApplied();
  }
  if (result) {
    result = HexagonCampaignUtils.isHexagonCampaignPerkExpired(constants.DISPLAY_NAME_STYLE, currentUser.premiumType);
  }
  if (result) {
    const obj4 = { previousPerkValues: HexagonCampaignPersistedStore.previousPerkValues, premiumType: null, isThemeSynced: null, analyticsLocations: null };
    const currentUser1 = UserStore.getCurrentUser();
    let premiumType;
    if (currentUser1 != null) {
      premiumType = currentUser1.premiumType;
    }
    obj4.premiumType = premiumType;
    obj4.isThemeSynced = SelectivelySyncedUserSettingsStore.shouldSync("appearance");
    obj4.analyticsLocations = analyticsLocations;
    restoreHexagonCampaignPerk(constants.DISPLAY_NAME_STYLE, obj4);
  }
}
export function restoreExpiredHexagonCampaignPerks() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}