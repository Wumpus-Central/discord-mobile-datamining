// === Module 19853: useHexagonCampaignExpirySheetEligibility ===

// Module 19853 (useHexagonCampaignExpirySheetEligibility)
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5334 */;
import restoreHexagonCampaignPerks from "restoreHexagonCampaignPerks" /* 17635 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5330 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6800 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1388 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16845 */;

require = fn;
const HexagonCampaignConstants = fn(5331);
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_9, HexagonCampaignPerk: closure_10 } = HexagonCampaignConstants);
const SystemTheme = fn(1195).SystemTheme;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/useHexagonCampaignExpirySheetEligibility.tsx");

export function useHexagonCampaignExpirySheetEligibility(MainViewTooltipActionSheets) {
  let isHexagonCampaignEnabled = require("HexagonCampaignExperiment").useIsHexagonCampaignEnabled(MainViewTooltipActionSheets);
  let obj = require("HexagonCampaignExperiment");
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("initialize");
  const items1 = [GatewayConnectionStore];
  let stateFromStores1 = require("initialize").useStateFromStores(items1, () => connected.isConnected());
  const obj3 = require("initialize");
  [tmp7, tmp8] = result2(noop.useState(stateFromStores1), 2);
  if (stateFromStores1) {
    stateFromStores1 = !tmp7;
  }
  if (stateFromStores1) {
    tmp8(true);
  }
  const tmp6 = result2(noop.useState(stateFromStores1), 2);
  const currentAppIcon = require("AppIconUtils").useCurrentAppIcon();
  let tmpResult = require("AppIconUtils");
  const items2 = [ClientThemesBackgroundStore, ThemeStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    if (obj.isPerModeThemingActive()) {
      items = [, ];
      ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
      let someResult = items.some((item) => {
        syncedClientTheme = syncedClientTheme.getSyncedClientTheme(item);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        return closure_1_0(result1[9]).isHexagonCampaignClientThemePreset(prop);
      });
    } else {
      gradientPreset = gradientPreset.gradientPreset;
      let id;
      if (gradientPreset != null) {
        id = gradientPreset.id;
      }
      someResult = result(result1[9]).isHexagonCampaignClientThemePreset(id) && !tmp3.isUpsellGradientPreview || tmp3.hasHiddenHexagonCampaignPreset;
      const tmpResult = result(result1[9]);
    }
    return someResult;
  });
  const tmpResult8 = require("initialize");
  const items3 = [HexagonCampaignPersistedStore];
  let stateFromStores3 = require("initialize").useStateFromStores(items3, () => HexagonCampaignPersistedStore.hasRestoredExpiredClientTheme);
  let result = tmp7;
  if (tmp7) {
    result = null != stateFromStores;
  }
  if (result) {
    result = stateFromStores2;
  }
  if (result) {
    result = tmp(tmp2[9]).isHexagonCampaignPerkExpired(constants.CLIENT_THEME, stateFromStores.premiumType);
    const tmpResult10 = tmp(tmp2[9]);
  }
  require = result;
  const items4 = [result];
  const effect = noop.useEffect(() => {
    if (result) {
      result = restoreHexagonCampaignPerks.restoreExpiredHexagonCampaignClientTheme([]);
    }
  }, items4);
  const tmpResult9 = require("initialize");
  result1 = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[16]).DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET, { bypassNewUserCheck: true });
  result2 = tmp7;
  if (tmp7) {
    result2 = null != stateFromStores;
  }
  if (result2) {
    result2 = tmp(tmp2[9]).hasHexagonCampaignDisplayNameFont(stateFromStores.displayNameStyles);
    const tmpResult12 = tmp(tmp2[9]);
  }
  if (result2) {
    result2 = tmp(tmp2[9]).isHexagonCampaignPerkExpired(constants.DISPLAY_NAME_STYLE, stateFromStores.premiumType);
    const tmpResult13 = tmp(tmp2[9]);
  }
  const items5 = [result1, result2];
  const effect1 = noop.useEffect(() => {
    let tmp = result1;
    if (result1) {
      tmp = result2;
    }
    if (tmp) {
      result = restoreHexagonCampaignPerks.restoreExpiredHexagonCampaignDisplayNameStyle([]);
    }
  }, items5);
  if (tmp7) {
    if (null != stateFromStores) {
      const obj5 = { isClientThemeApplied: stateFromStores2, displayNameStyles: stateFromStores.displayNameStyles, currentAppIconId: currentAppIcon };
      const appliedHexagonCampaignPerks = tmp(tmp2[17]).getAppliedHexagonCampaignPerks(obj5);
      const premiumType = stateFromStores.premiumType;
      const _Date = Date;
      closure_129_1 = Date.now();
      const mapped = appliedHexagonCampaignPerks.map((item) => HexagonCampaignUtils.getHexagonCampaignPerkCutoffMs(item, result));
      if (!stateFromStores3) {
        stateFromStores3 = mapped.some((item) => result1 >= item);
      }
      if (isHexagonCampaignEnabled) {
        isHexagonCampaignEnabled = !stateFromStores3;
      }
      if (isHexagonCampaignEnabled) {
        isHexagonCampaignEnabled = mapped.some((item) => {
          result = item === React6;
          if (result) {
            result = HexagonCampaignUtils.isWithinHexagonCampaignExpiringSoonWindow(item, result1);
          }
          return result;
        });
      }
      const obj6 = { isExpiringSoonEligible: isHexagonCampaignEnabled, isExpiredEligible: stateFromStores3 };
      const tmpResult14 = tmp(tmp2[17]);
    }
    return { isExpiringSoonEligible: false, isExpiredEligible: false };
  }
  const tmpResult11 = require("DismissibleContentUnsafeUtils");
}