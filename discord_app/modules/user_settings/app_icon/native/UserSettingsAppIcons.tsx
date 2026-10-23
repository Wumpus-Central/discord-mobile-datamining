// === Module 16847: UserSettingsAppIcons ===

// Module 16847 (UserSettingsAppIcons)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7251 */;
import openPremiumModalDefault from "openPremiumModal" /* 9791 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9792 */;
import AppIconRowsDefault from "AppIconRows" /* 16848 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

const NitroUpsellButtonDefault = tmp6(10177);
require = fn;
const View = fn(17).View;
const Constants = fn(1087);
({ UpsellTypes: closure_8, AnalyticsPages: closure_9 } = Constants);
const AppIconConstants = fn(9864);
({ getIconById: c10, isHexagonCampaignAppIcon: closure_11 } = AppIconConstants);
const HexagonCampaignPerk = fn(4994).HexagonCampaignPerk;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4969);
let closure_16 = createStyles.createStyles({ upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" } });
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj5 = { value: stateFromStores(15828).ensureHexagonCampaignEnrollment(constants.APP_ICON), done: false };
            return obj5;
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
            const tmp43 = stateFromStores(16357);
            dependencyMap = tmp43;
            closure_1 = tmp43.saveHexagonCampaignPreviousAppIcon;
            c7 = 3;
            c8 = 1;
            const obj8 = { value: stateFromStores(14739).fetchCurrentAppIcon(), done: false };
            return obj8;
          } else {
            const obj10 = { text: null };
            const intl = stateFromStores(1128).intl;
            obj10.text = intl.string(stateFromStores(1128).t.F8FvUy);
            closure_1(5661).open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj10);
            c5 = 0;
            closure_132_7(null);
            c8 = 3;
            const obj11 = { value: undefined, done: true };
            return obj11;
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
            const obj14 = { value: stateFromStores(14739).setAppIcon(closure_131_0, premiumType), done: false };
            return obj14;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_132_7(null);
          c8 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          if (value) {
            const result = stateFromStores(15828).markHexagonCampaignPerkApplied(constants.APP_ICON);
            const obj = stateFromStores(15828);
          }
          c5 = 0;
          closure_132_7(null);
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp60) {
        closure_6 = tmp60;
        if (tmp4 === c5) {
          c8 = tmp2;
          throw tmp60;
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
                      num2 = v3(9791);
                      obj4 = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
                      tmp24 = analyticsLocation;
                      obj4.analyticsLocation = analyticsLocation;
                      obj4.analyticsLocations = analyticsLocations;
                      obj4.premiumFeatureCardOrder = stateFromStores(9792).PremiumFeatureCardOrder.TIER_2_LEADING;
                      num2(obj4);
                    }
                    obj7 = stateFromStores(4997);
                  }
                  if (importDefault !== id) {
                    if (tmp36) {
                      if (!closure_2_2) {
                        const obj6 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp37 };
                        const result = v3(9671).handleShowUpsellAlert(obj6);
                        const obj8 = v3(9671);
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
                      done: false
                    };
                    return obj9;
                  } else {
                    let premiumType;
                    if (stateFromStores != tmp24) {
                      premiumType = stateFromStores.premiumType;
                    }
                    dependencyMap = 2;
                    v3 = num2;
                    const obj11 = { value: stateFromStores(14739).setAppIcon(id, premiumType), done: false };
                    return obj11;
                  }
                } else {
                  let premiumType1;
                  if (stateFromStores != tmp24) {
                    premiumType1 = stateFromStores.premiumType;
                  }
                  dependencyMap = 3;
                  v3 = num2;
                  const obj12 = { value: stateFromStores(14739).setAppIcon(stateFromStores(9865).FreemiumAppIconIds.DEFAULT, premiumType1), done: false };
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
  const items = [setPending];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => setPending.getCurrentUser());
  let obj = stateFromStores(504);
  importDefault = stateFromStores(14739).useCurrentAppIcon();
  let obj2 = stateFromStores(14739);
  const isPremiumResult = stateFromStores(1991).isPremium(stateFromStores);
  dependencyMap = isPremiumResult;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj3 = stateFromStores(1991);
  let obj4 = { page: constants.APP_ICONS };
  [tmp8, noop] = { page: constants.APP_ICONS }(noop.useState(null), 2);
  closure_6 = noop.useRef(null);
  let obj5 = { children: null };
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
      pendingAppIconId: tmp8
    })
  };
  obj5.children = closure_13(closure_6, obj6);
  const children = [closure_13(stateFromStores(8949).Form, obj5), ];
  let tmp11Result = !isPremiumResult;
  if (!isPremiumResult) {
    let obj8 = { style: tmp.upsellButtonContainer, children: null };
    let obj9 = {
      onPress() {
          const obj = { analyticsLocation: obj4, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
          openPremiumModalDefault(obj);
        },
      text: null
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