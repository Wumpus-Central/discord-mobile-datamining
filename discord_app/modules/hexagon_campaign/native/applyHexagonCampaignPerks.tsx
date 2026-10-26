// === Module 16378: applyHexagonCampaignPerks ===

// Module 16378 (applyHexagonCampaignPerks)
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7078 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4995 */;
import UserStore from "UserStore" /* 1392 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15642 */;

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
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+352" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          const dependencyMap2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          ({ selection: closure_130_0, displayNameStyles: closure_130_1, premiumType: closure_130_2, isThemeSynced: closure_130_3, analyticsLocations: closure_130_4 } = dependencyMap);
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          let previousPerkValues;
          closure_130_8 = undefined;
          closure_130_9 = undefined;
          closure_130_10 = undefined;
          closure_130_11 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "Reflect", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 2;
          c5 = 1;
          const obj9 = { value: closure_131_0(closure_131_2[8]).fetchCurrentAppIcon(), done: false };
          return obj9;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
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
            const obj22 = closure_131_0(closure_131_2[9]);
            let currentUser = closure_131_5.getCurrentUser();
            let displayNameStyles;
            if (currentUser != null) {
              displayNameStyles = currentUser.displayNameStyles;
            }
            obj11[closure_131_7.DISPLAY_NAME_STYLE] = closure_131_0(closure_131_2[9]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
            closure_130_6 = obj11;
            previousPerkValues = closure_131_6.previousPerkValues;
            const obj5 = closure_131_0(closure_131_2[9]);
            let result = closure_131_0(closure_131_2[10]).saveHexagonCampaignPreviousClientTheme();
            const obj6 = closure_131_0(closure_131_2[10]);
            const result1 = closure_131_0(closure_131_2[10]).saveHexagonCampaignPreviousAppIcon(closure_130_5);
            const obj7 = closure_131_0(closure_131_2[10]);
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
              const obj12 = { value: closure_131_0(closure_131_2[11]).ensureHexagonCampaignEnrollment(closure_130_8[0]), done: false };
              return obj12;
            }
            const obj8 = closure_131_0(closure_131_2[11]);
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_130_11 = value;
            const _Boolean = Boolean;
            c5 = 3;
            const obj15 = { value: closure_130_11.every(Boolean), done: true };
            return obj15;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj = { value, done: true };
          return obj;
        } else if (!value) {
          c5 = 3;
          return { value: false, done: true };
        }
        const obj16 = {};
        const obj18 = {
          apply() {
                  dependencyMap(16380).handleSaveTheme(closure_2_9, closure_1_4, closure_1_3);
                  return Promise.resolve(true);
                },
          restore() {
                  const obj = dependencyMap(16380);
                  let DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = closure_1_7.clientTheme;
                  if (DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME == null) {
                    DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = dependencyMap(16379).DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME;
                  }
                  obj.handleSaveTheme(dependencyMap(16379).getHexagonCampaignClientThemeItem(DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME), closure_1_4, closure_1_3);
                  return Promise.resolve(true);
                }
        };
        obj16[closure_131_7.CLIENT_THEME] = obj18;
        const obj19 = {
          apply() {
                  return dependencyMap(14766).setAppIcon(dependencyMap(9866).LimitedTimeAppIconIds.HEXAGON, dependencyMap2, { showErrorToast: false });
                },
          restore() {
                  let DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = closure_1_7.appIconId;
                  if (DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID == null) {
                    DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = dependencyMap(16379).DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID;
                  }
                  return dependencyMap(14766).setAppIcon(DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID, dependencyMap2, { showErrorToast: false });
                }
        };
        obj16[closure_131_7.APP_ICON] = obj19;
        const obj20 = {
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
                  const obj = dependencyMap(4998);
                  obj2.canUsePremiumProfileCustomization = closure_1(2053).canUsePremiumProfileCustomization(currentUser);
                  return closure_2_10(obj.getHexagonCampaignRestoredDisplayNameStyles(obj2));
                }
        };
        obj16[closure_131_7.DISPLAY_NAME_STYLE] = obj20;
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
        c4 = 3;
        c5 = 1;
        const obj21 = { value: Promise.all(items), done: false };
        return obj21;
      }
    } catch (tmp58) {
      c5 = tmp;
      throw tmp58;
    }
  }
};
const HexagonCampaignPerk = fn(4996).HexagonCampaignPerk;
const isHexagonCampaignAppIcon = fn(9865).isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = fn(1255).HEXAGON_GRADIENT_PRESET;
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