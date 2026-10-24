// discord_app/modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../premium/native/PremiumFeaturesCards.tsx";
import AppIconRowsDefault from "../../../app_icons/native/AppIconRows.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const NitroUpsellButtonDefault = tmp6(10178);
require = fn;
const View = fn(17).View;
const Constants = fn(1087);
({ UpsellTypes: closure_8, AnalyticsPages: closure_9 } = Constants);
const AppIconConstants = fn(9865);
({ getIconById: c10, isHexagonCampaignAppIcon: closure_11 } = AppIconConstants);
const HexagonCampaignPerk = fn(4996).HexagonCampaignPerk;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4971);
let closure_16 = createStyles.createStyles({
  upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default noop.memo(function UserSettingsAppIcons() {
  function setPending(current) {
    closure_6.current = current;
    noop(current);
  }
  closure_8 = async function _selectHexagonCampaignAppIcon(arg0) {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = stateFromStores;
            setPending(stateFromStores);
            c5 = 1;
            c7 = 2;
            c8 = 1;
            const obj6 = {
              value: stateFromStores(15851).ensureHexagonCampaignEnrollment(constants.APP_ICON),
              done: false,
            };
            return obj6;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_132_7(null);
          throw closure_6;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_132_7(null);
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (value) {
            const tmp51 = stateFromStores(16375);
            dependencyMap = tmp51;
            closure_1 = tmp51.saveHexagonCampaignPreviousAppIcon;
            c7 = 3;
            c8 = 1;
            const obj9 = { value: stateFromStores(14762).fetchCurrentAppIcon(), done: false };
            return obj9;
          } else {
            const obj10 = { text: null };
            const intl = stateFromStores(1128).intl;
            obj10.text = intl.string(stateFromStores(1128).t.F8FvUy);
            closure_1(5663).open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj10);
            c5 = 0;
            closure_132_7(null);
            c8 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_132_7(null);
            c8 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_1(value);
            let premiumType;
            if (closure_132_0 != null) {
              premiumType = closure_132_0.premiumType;
            }
            c7 = 4;
            c8 = 1;
            const obj15 = { value: stateFromStores(14762).setAppIcon(closure_131_0, premiumType), done: false };
            return obj15;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_132_7(null);
          c8 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          if (value) {
            const result = stateFromStores(15851).markHexagonCampaignPerkApplied(constants.APP_ICON);
            const obj = stateFromStores(15851);
            const obj17 = { perks: null, content: null, contentSurface: null };
            const items = [constants.APP_ICON];
            obj17.perks = items;
            obj17.content = stateFromStores(6713).QuestContent.APP_ICON_SETTINGS;
            obj17.contentSurface = stateFromStores(15852).HexagonCampaignContentSurface.APP_ICON_PICKER;
            const result1 = stateFromStores(15852).trackHexagonCampaignPerkAction(obj17);
            const obj2 = stateFromStores(15852);
          }
          c5 = 0;
          closure_132_7(null);
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp68) {
        closure_6 = tmp68;
        if (tmp4 === c5) {
          c8 = tmp2;
          throw tmp68;
        } else {
          c7 = tmp;
        }
      }
    }
  };
  constants = async function _onSelect(arg0) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        let num2 = dependencyMap;
        if (0 === dependencyMap) {
          num2 = 1;
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp24 = null;
            if (null == ref.current) {
              const tmp35 = closure_1_10(stateFromStores);
              if (tmp24 != tmp35) {
                const id = tmp35.id;
                if (id === stateFromStores) {
                  if (closure_1_11(id)) {
                    if (obj7.isHexagonCampaignPerkExpiredForCurrentUser(constants2.APP_ICON)) {
                      num2 = v3(9792);
                      obj4 = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
                      tmp24 = analyticsLocation;
                      obj4.analyticsLocation = analyticsLocation;
                      obj4.analyticsLocations = analyticsLocations;
                      obj4.premiumFeatureCardOrder = stateFromStores(9793).PremiumFeatureCardOrder.TIER_2_LEADING;
                      num2(obj4);
                    }
                    obj7 = stateFromStores(4999);
                  }
                  if (importDefault !== id) {
                    if (tmp36) {
                      if (!closure_2_2) {
                        const obj6 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp37 };
                        const result = v3(9672).handleShowUpsellAlert(obj6);
                        const obj8 = v3(9672);
                      }
                    }
                  }
                  if (closure_1_11(id)) {
                    dependencyMap = num2;
                    v3 = num2;
                    const obj9 = {
                      value: (function selectHexagonCampaignAppIcon(id) {
                        const self = this;
                        const apply = constants.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(id),
                      done: false,
                    };
                    return obj9;
                  } else {
                    let premiumType;
                    if (stateFromStores != tmp24) {
                      premiumType = stateFromStores.premiumType;
                    }
                    dependencyMap = 2;
                    v3 = num2;
                    const obj11 = { value: stateFromStores(14762).setAppIcon(id, premiumType), done: false };
                    return obj11;
                  }
                } else {
                  let premiumType1;
                  if (stateFromStores != tmp24) {
                    premiumType1 = stateFromStores.premiumType;
                  }
                  dependencyMap = 3;
                  v3 = num2;
                  const obj12 = {
                    value: stateFromStores(14762).setAppIcon(
                      stateFromStores(9866).FreemiumAppIconIds.DEFAULT,
                      premiumType1,
                    ),
                    done: false,
                  };
                  return obj12;
                }
              }
            }
          }
        } else if (1 === num2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj13 = { value, done: true };
            return obj13;
          }
        } else if (2 === num2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            v3 = 3;
            const obj15 = { value: undefined, done: true };
            return obj15;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        v3 = 3;
      } catch (tmp27) {
        v3 = tmp;
        throw tmp27;
      }
    }
  };
  const tmp = closure_16();
  let items = [setPending];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => setPending.getCurrentUser());
  let obj = stateFromStores(504);
  importDefault = stateFromStores(14762).useCurrentAppIcon();
  let obj2 = stateFromStores(14762);
  const isPremiumResult = stateFromStores(1991).isPremium(stateFromStores);
  dependencyMap = isPremiumResult;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj3 = stateFromStores(1991);
  let obj4 = { page: constants.APP_ICONS };
  [tmp8, noop] = { page: constants.APP_ICONS }(noop.useState(null), 2);
  closure_6 = noop.useRef(null);
  const obj5 = { children: null };
  let obj6 = {
    accessibilityRole: "radiogroup",
    children: closure_13(AppIconRowsDefault, {
      onSelect(arg0) {
        const self = this;
        const apply = closure_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      pendingAppIconId: tmp8,
    }),
  };
  obj5.children = closure_13(closure_6, obj6);
  const children = [closure_13(stateFromStores(8951).Form, obj5)];
  let tmp11Result = !isPremiumResult;
  if (!isPremiumResult) {
    let obj8 = { style: tmp.upsellButtonContainer, children: null };
    let obj9 = {
      onPress() {
        const obj = {
          analyticsLocation: obj4,
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        openPremiumModalDefault(obj);
      },
      text: null,
    };
    let intl = tmp2(1128).intl;
    obj9.text = intl.string(tmp2(1128).t.M0rDSO);
    obj8.children = closure_13(NitroUpsellButtonDefault, obj9);
    tmp11Result = closure_13(closure_6, obj8);
    const tmp6Result = NitroUpsellButtonDefault;
  }
  children[1] = tmp11Result;
  return closure_15(closure_14, { children });
});
