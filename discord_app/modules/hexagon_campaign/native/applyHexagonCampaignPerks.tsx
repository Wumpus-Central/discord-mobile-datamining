// === Module 16646: applyHexagonCampaignPerks ===

// Module 16646 (applyHexagonCampaignPerks)
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7114 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5028 */;
import UserStore from "UserStore" /* 1389 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15905 */;

require = fn;
function saveDisplayNameStyles() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _saveDisplayNameStyles() {
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    closure_1 = tmp2;
    await UserSettingsAccountActionCreators.saveProfileAndAccountChanges({ displayNameStyles });
    closure_129_0 = value;
    if (closure_129_0 != null) {
      const ok = closure_129_0.ok;
    }
    return true === ok;
  })();
};
let closure_12 = async function _applyHexagonCampaignPerks(arg0) {
  await closure_131_0(closure_131_2[8]).fetchCurrentAppIcon();
  if (2 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_5 = value;
      const gradientPreset = closure_131_4.gradientPreset;
      let id;
      if (gradientPreset != null) {
        id = gradientPreset.id;
      }
      const obj11 = {};
      obj11[closure_131_7.CLIENT_THEME] = closure_131_0(closure_131_2[9]).isHexagonCampaignClientThemePreset(id);
      obj11[closure_131_7.APP_ICON] = closure_131_8(closure_130_5);
      closure_131_0(closure_131_2[9]);
      let currentUser = closure_131_5.getCurrentUser();
      let displayNameStyles;
      if (currentUser != null) {
        displayNameStyles = currentUser.displayNameStyles;
      }
      obj11[closure_131_7.DISPLAY_NAME_STYLE] = closure_131_0(closure_131_2[9]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
      closure_130_6 = obj11;
      const previousPerkValues = closure_131_6.previousPerkValues;
      closure_131_0(closure_131_2[9]);
      let result = closure_131_0(closure_131_2[10]).saveHexagonCampaignPreviousClientTheme();
      closure_131_0(closure_131_2[10]);
      const result1 = closure_131_0(closure_131_2[10]).saveHexagonCampaignPreviousAppIcon(closure_130_5);
      closure_131_0(closure_131_2[10]);
      const result2 = closure_131_0(closure_131_2[11]).saveHexagonCampaignPreviousDisplayNameStyles();
      const _Object = Object;
      const values = Object.values(closure_131_7);
      closure_130_8 = values.filter((item) => {
        let tmp = dependencyMap[item];
        if (tmp) {
          tmp = !dependencyMap3[item];
        }
        return tmp;
      });
      const _Object2 = Object;
      const values2 = Object.values(closure_131_7);
      closure_130_9 = values2.filter((item) => {
        let tmp2 = !tmp;
        if (!dependencyMap[item]) {
          tmp2 = dependencyMap3[item];
        }
        return tmp2;
      });
      if (closure_130_8.length > 0) {
        c4 = 4;
        c5 = 1;
        return { value: closure_131_0(closure_131_2[11]).ensureHexagonCampaignEnrollment(closure_130_8[0]), done: false };
      }
      closure_131_0(closure_131_2[11]);
    }
  } else if (3 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_11 = value;
      const _Boolean = Boolean;
      c5 = 3;
      return { value: closure_130_11.every(Boolean), done: true };
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    return { value, done: true };
  } else if (!value) {
    c5 = 3;
    return { value: false, done: true };
  }
  const obj16 = {};
  obj16[closure_131_7.CLIENT_THEME] = {
    apply() {
      dependencyMap(16648).handleSaveTheme(closure_2_9, closure_1_4, closure_1_3);
      return Promise.resolve(true);
    },
    restore() {
      const obj = dependencyMap(16648);
      let DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = closure_1_7.clientTheme;
      if (DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME == null) {
        DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = dependencyMap(16647).DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME;
      }
      obj.handleSaveTheme(dependencyMap(16647).getHexagonCampaignClientThemeItem(DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME), closure_1_4, closure_1_3);
      return Promise.resolve(true);
    }
  };
  obj16[closure_131_7.APP_ICON] = {
    apply() {
      return dependencyMap(15026).setAppIcon(dependencyMap(9900).LimitedTimeAppIconIds.HEXAGON, dependencyMap2, { showErrorToast: false });
    },
    restore() {
      let DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = closure_1_7.appIconId;
      if (DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID == null) {
        DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = dependencyMap(16647).DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID;
      }
      return dependencyMap(15026).setAppIcon(DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID, dependencyMap2, { showErrorToast: false });
    }
  };
  obj16[closure_131_7.DISPLAY_NAME_STYLE] = {
    apply() {
      return closure_2_10(closure_1_1);
    },
    restore() {
      currentUser = currentUser.getCurrentUser();
      let displayNameStyles;
      if (currentUser != null) {
        displayNameStyles = currentUser.displayNameStyles;
      }
      const obj2 = { currentDisplayNameStyles: displayNameStyles, previousDisplayNameStyles: closure_1_7.displayNameStyles, canUsePremiumProfileCustomization: null };
      const obj = dependencyMap(5031);
      obj2.canUsePremiumProfileCustomization = closure_1(2050).canUsePremiumProfileCustomization(currentUser);
      return closure_2_10(obj.getHexagonCampaignRestoredDisplayNameStyles(obj2));
    }
  };
  closure_130_10 = obj16;
  closure_1 = 0;
  const items = [];
  closure_1 = HermesBuiltin.arraySpread(closure_130_8.map((() => {
    closure_0 = closure_1_3(function*(arg0) {
      closure_2 = tmp5;
      closure_1 = tmp2;
      closure_129_0 = closure_0;
      yield closure_1_10[closure_0].apply();
      closure_129_1 = value;
      if (closure_129_1) {
        const result = closure_0(dependencyMap2[11]).markHexagonCampaignPerkApplied(closure_129_0);
        closure_0(dependencyMap2[11]);
      }
      return closure_129_1;
    });
    return function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  })()), closure_1);
  closure_1 = HermesBuiltin.arraySpread(closure_130_9.map((item) => closure_1_10[item].restore()), closure_1);
  await Promise.all(items);
  const dependencyMap2 = tmp2;
  ({ selection: closure_130_0, displayNameStyles: closure_130_1, premiumType: closure_130_2, isThemeSynced: closure_130_3, analyticsLocations: closure_130_4 } = dependencyMap);
  return "Reflect";
};
const HexagonCampaignPerk = fn(5029).HexagonCampaignPerk;
const isHexagonCampaignAppIcon = fn(9899).isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = fn(1252).HEXAGON_GRADIENT_PRESET;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/applyHexagonCampaignPerks.tsx");

export const applyHexagonCampaignPerks = function applyHexagonCampaignPerks() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};