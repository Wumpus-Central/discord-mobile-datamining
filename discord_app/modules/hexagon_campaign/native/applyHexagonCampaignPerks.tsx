// discord_app/modules/hexagon_campaign/native/applyHexagonCampaignPerks.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
import HexagonCampaignPersistedStore from "../HexagonCampaignPersistedStore.tsx";

const require = fn;
let closure_7 = async function _applyHexagonCampaignPerks(arg0) {
  await closure_131_0(closure_131_1[5]).fetchCurrentAppIcon();
  if (2 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_5 = value;
      const obj10 = {};
      obj10[closure_131_5.CLIENT_THEME] = closure_131_0(closure_131_1[6]).isHexagonCampaignClientThemeApplied();
      closure_131_0(closure_131_1[6]);
      obj10[closure_131_5.APP_ICON] = closure_131_0(closure_131_1[7]).isHexagonCampaignAppIcon(closure_130_5);
      closure_131_0(closure_131_1[7]);
      const currentUser = closure_131_3.getCurrentUser();
      let displayNameStyles;
      if (currentUser != null) {
        displayNameStyles = currentUser.displayNameStyles;
      }
      obj10[closure_131_5.DISPLAY_NAME_STYLE] = closure_131_0(closure_131_1[7]).hasHexagonCampaignDisplayNameFont(
        displayNameStyles,
      );
      closure_130_6 = obj10;
      const previousPerkValues = closure_131_4.previousPerkValues;
      closure_131_0(closure_131_1[7]);
      let result = closure_131_0(closure_131_1[8]).saveHexagonCampaignPreviousClientTheme();
      closure_131_0(closure_131_1[8]);
      const result1 = closure_131_0(closure_131_1[9]).saveHexagonCampaignPreviousAppIcon(closure_130_5);
      closure_131_0(closure_131_1[9]);
      const result2 = closure_131_0(closure_131_1[9]).saveHexagonCampaignPreviousDisplayNameStyles();
      const _Object = Object;
      const values = Object.values(closure_131_5);
      closure_130_8 = values.filter((item) => {
        let tmp = dependencyMap[item];
        if (tmp) {
          tmp = !dependencyMap3[item];
        }
        return tmp;
      });
      const _Object2 = Object;
      const values2 = Object.values(closure_131_5);
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
        return {
          value: closure_131_0(closure_131_1[9]).ensureHexagonCampaignEnrollment(closure_130_8[0]),
          done: false,
        };
      }
      closure_131_0(closure_131_1[9]);
    }
  } else if (3 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      const _Boolean = Boolean;
      value.didApply = value.every(Boolean);
      let fn = null;
      if (closure_130_14.includes(closure_131_5.APP_ICON)) {
        fn = () => closure_1_12(constants.APP_ICON);
      }
      value.updateAppIcon = fn;
      c5 = 3;
      return { value, done: true };
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    return { value, done: true };
  } else if (!value) {
    c5 = 3;
    return { value: { didApply: false, updateAppIcon: null }, done: true };
  }
  const obj17 = {};
  obj17[closure_131_5.CLIENT_THEME] = () => {
    dependencyMap(17513).handleSaveTheme(closure_2_6, closure_1_4, closure_1_3);
    return Promise.resolve(true);
  };
  obj17[closure_131_5.APP_ICON] = () =>
    dependencyMap(15200).setAppIcon(dependencyMap(5269).LimitedTimeAppIconIds.HEXAGON, closure_1_2, {
      showErrorToast: false,
    });
  obj17[closure_131_5.DISPLAY_NAME_STYLE] = () =>
    dependencyMap(17516).saveHexagonCampaignDisplayNameStyles(dependencyMap2);
  closure_130_10 = obj17;
  closure_130_11 = {
    previousPerkValues,
    premiumType: closure_130_2,
    isThemeSynced: closure_130_3,
    analyticsLocations: closure_130_4,
  };
  items = [];
  HermesBuiltin.arraySpread(closure_130_9, HermesBuiltin.arraySpread(closure_130_8, 0));
  closure_130_14 = items;
  value = {};
  const found = closure_130_14.filter((item) => item !== constants.APP_ICON);
  await Promise.all(found.map(closure_130_12));
  closure_2 = tmp2;
  ({
    selection: closure_130_0,
    displayNameStyles: closure_130_1,
    premiumType: closure_130_2,
    isThemeSynced: closure_130_3,
    analyticsLocations: closure_130_4,
  } = dependencyMap);
  closure_130_12 = function updatePerk() {
    const self = this;
    const apply = closure_13.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_130_13 = function _updatePerk() {
    const self = this;
    const tmp = closure_2(function* (arg0) {
      closure_129_0 = closure_0;
      if (closure_2_9.includes(closure_0)) {
        return closure_0(tmp2[13]).restoreHexagonCampaignPerk(closure_0, closure_2_11);
      }
      yield dependencyMap[closure_0]();
      closure_129_1 = value;
      if (closure_129_1) {
        const result = closure_0(tmp2[9]).markHexagonCampaignPerkApplied(closure_129_0);
        closure_0(tmp2[9]);
      }
      return closure_129_1;
    });
    closure_13 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return "flexDirection";
};
const HexagonCampaignPerk = fn(5268).HexagonCampaignPerk;
const HEXAGON_GRADIENT_PRESET = fn(1240).HEXAGON_GRADIENT_PRESET;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/applyHexagonCampaignPerks.tsx");

export function applyHexagonCampaignPerks() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
