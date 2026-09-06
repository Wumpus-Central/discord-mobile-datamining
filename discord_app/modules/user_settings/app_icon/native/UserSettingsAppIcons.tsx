// === Module 15524: UserSettingsAppIcons ===

// Module 15524 (UserSettingsAppIcons)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9362 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9970 */;
import AppIconRowsDefault from "AppIconRows" /* 15525 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ UpsellTypes: metroRequire, AnalyticsPages: closure_7 } = Constants);
const getIconById = fn(9323).getIconById;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({ upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default noop.memo(() => {
  const currentUser = async function _onSelect(arg0) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const tmp24 = getIconById(stateFromStores);
            if (null != tmp24) {
              const id = tmp24.id;
              if (id === stateFromStores) {
                if (importDefault !== id) {
                  if (tmp26) {
                    if (!closure_2_2) {
                      let obj4 = v3(9313);
                      const obj1 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp27 };
                      const result = obj4.handleShowUpsellAlert(obj1);
                    }
                  }
                  let premiumType;
                  if (stateFromStores != null) {
                    premiumType = stateFromStores.premiumType;
                  }
                  dependencyMap = 1;
                  v3 = 1;
                  let obj2 = { value: stateFromStores(13363).setAppIcon(id, premiumType), done: false };
                  return obj2;
                }
              } else {
                obj2 = stateFromStores(13363);
                let premiumType1;
                if (stateFromStores != null) {
                  premiumType1 = stateFromStores.premiumType;
                }
                dependencyMap = 2;
                v3 = 1;
                const obj3 = { value: obj2.setAppIcon(stateFromStores(9324).FreemiumAppIconIds.DEFAULT, premiumType1), done: false };
                return obj3;
              }
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj4 = { value, done: true };
            return obj4;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        }
        v3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp17) {
        v3 = tmp;
        throw tmp17;
      }
    }
  };
  let analyticsLocation = stateFromStores(504);
  const items = [currentUser];
  stateFromStores = analyticsLocation.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = stateFromStores(13363);
  importDefault = obj1.useCurrentAppIcon();
  let obj2 = stateFromStores(1885);
  const isPremiumResult = obj2.isPremium(stateFromStores);
  dependencyMap = isPremiumResult;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  analyticsLocation = { page: constants.APP_ICONS };
  analyticsLocation = { children: null };
  obj1 = { accessibilityRole: "radiogroup", children: null };
  obj2 = {
    onSelect(arg0) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  };
  obj1.children = closure_9(AppIconRowsDefault, obj2);
  analyticsLocation.children = closure_9(analyticsLocation, obj1);
  const children = [closure_9(stateFromStores(8593).Form, analyticsLocation), ];
  let tmp9Result = !isPremiumResult;
  if (!isPremiumResult) {
    let obj3 = { style: tmp.upsellButtonContainer, children: null };
    let obj4 = {
      onPress() {
          analyticsLocation = { analyticsLocation, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
          openPremiumModalDefault(analyticsLocation);
        },
      text: null
    };
    const intl = tmp2(1114).intl;
    obj4.text = intl.string(tmp2(1114).t.M0rDSO);
    obj3.children = closure_9(NitroUpsellButtonDefault, obj4);
    tmp9Result = closure_9(analyticsLocation, obj3);
    const tmp6Result = NitroUpsellButtonDefault;
  }
  children[1] = tmp9Result;
  return closure_11(closure_10, { children });
});