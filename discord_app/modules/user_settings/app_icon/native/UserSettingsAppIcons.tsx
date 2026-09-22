// discord_app/modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import PremiumFeaturesCards from "../../premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import NitroUpsellButtonDefault from "../../../premium/components/native/NitroUpsellButton.tsx";
import AppIconRowsDefault from "../../../app_icons/native/AppIconRows.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ UpsellTypes: metroRequire, AnalyticsPages: closure_7 } = Constants);
const getIconById = fn(9443).getIconById;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4757);
let closure_12 = createStyles.createStyles({
  upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" },
});
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
        const obj2 = { value, done: true };
        return obj2;
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
            obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp24 = getIconById(stateFromStores);
            if (null != tmp24) {
              const id = tmp24.id;
              if (id === stateFromStores) {
                if (importDefault !== id) {
                  if (tmp26) {
                    if (!closure_2_2) {
                      const obj6 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp27 };
                      const result = v3(9433).handleShowUpsellAlert(obj6);
                      const obj5 = v3(9433);
                    }
                  }
                  let premiumType;
                  if (stateFromStores != null) {
                    premiumType = stateFromStores.premiumType;
                  }
                  dependencyMap = 1;
                  v3 = 1;
                  const obj8 = { value: stateFromStores(13728).setAppIcon(id, premiumType), done: false };
                  return obj8;
                }
              } else {
                let premiumType1;
                if (stateFromStores != null) {
                  premiumType1 = stateFromStores.premiumType;
                }
                dependencyMap = 2;
                v3 = 1;
                const obj9 = {
                  value: stateFromStores(13728).setAppIcon(
                    stateFromStores(9444).FreemiumAppIconIds.DEFAULT,
                    premiumType1,
                  ),
                  done: false,
                };
                return obj9;
              }
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj10 = { value, done: true };
            return obj10;
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
        return { value: "HermesInternal", done: null };
      } catch (tmp17) {
        v3 = tmp;
        throw tmp17;
      }
    }
  };
  const tmp = closure_12();
  const items = [currentUser];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = stateFromStores(504);
  importDefault = stateFromStores(13728).useCurrentAppIcon();
  let obj2 = stateFromStores(13728);
  const isPremiumResult = stateFromStores(1969).isPremium(stateFromStores);
  dependencyMap = isPremiumResult;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj4 = { page: constants.APP_ICONS };
  let obj5 = { children: null };
  let obj6 = {
    accessibilityRole: "radiogroup",
    children: closure_9(AppIconRowsDefault, {
      onSelect(arg0) {
        const self = this;
        const apply = closure_5.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
    }),
  };
  obj5.children = closure_9(obj4, obj6);
  const children = [closure_9(stateFromStores(8876).Form, obj5)];
  let tmp9Result = !isPremiumResult;
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
    const intl = tmp2(1115).intl;
    obj9.text = intl.string(tmp2(1115).t.M0rDSO);
    obj8.children = closure_9(NitroUpsellButtonDefault, obj9);
    tmp9Result = closure_9(obj4, obj8);
    const tmp6Result = NitroUpsellButtonDefault;
  }
  children[1] = tmp9Result;
  return closure_11(closure_10, { children });
});
