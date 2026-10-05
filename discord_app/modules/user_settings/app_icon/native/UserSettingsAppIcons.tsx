// discord_app/modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AppIconConstants from "../../../app_icons/native/AppIconConstants.tsx";
import PremiumFeaturesCards from "../../premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import AppIconRowsDefault from "../../../app_icons/native/AppIconRows.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c1, c2, dependencyMap, importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let tmp6;
let unpackModuleId;
const NitroUpsellButtonDefault = tmp6(9648);
const View = react_native.View;
({ UpsellTypes: metroRequire, AnalyticsPages: metroImportDefault } = Constants);
const getIconById = AppIconConstants.getIconById;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({
  upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" },
});
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let closure_2;
        let currentUser;
        let intl;
        let items1;
        let obj4;
        let obj5;
        let obj8;
        let stateFromStores;
        let tmp10;
        let tmp12Result;
        let tmp13;
        let tmp5;
        let tmp6;
        let tmp = stateFromStores;
        const tmp2 = dependencyMap;
        let obj = stateFromStores(576);
        const cResult = obj.c(18);
        const tmp4 = closure_12();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function s() {
            return currentUser.getCurrentUser();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp6 = fn;
          tmp5 = items;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = tmp(504);
        stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        const tmpResult3 = tmp(13261);
        const currentAppIcon = tmpResult3.useCurrentAppIcon();
        if (cResult[2] !== stateFromStores) {
          const tmpResult4 = tmp(1976);
          const isPremiumResult = tmpResult4.isPremium(stateFromStores);
          cResult[2] = stateFromStores;
          cResult[3] = isPremiumResult;
          tmp10 = isPremiumResult;
        } else {
          tmp10 = cResult[3];
        }
        dependencyMap = tmp10;
        const analyticsLocations = currentAppIcon(6657)().analyticsLocations;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { page: constants.APP_ICONS };
          cResult[4] = obj2;
          tmp13 = obj2;
        } else {
          tmp13 = cResult[4];
        }
        const analyticsLocation = tmp13;
        if (cResult[5] === currentAppIcon) {
          let tmp16 = null;
          let premiumType;
          const tmp15 = cResult[6];
          if (stateFromStores != null) {
            premiumType = stateFromStores.premiumType;
          }
          if (tmp15 === premiumType) {
            let tmp18;
            let tmp20;
            if (cResult[7] === tmp10) {
              tmp18 = cResult[8];
            }
            if (cResult[9] !== tmp18) {
              let obj3 = { children: closure_9(analyticsLocation, obj4) };
              obj4 = { accessibilityRole: "radiogroup", children: closure_9(currentAppIcon(15352), obj5) };
              const Form = tmp(8895).Form;
              obj5 = { onSelect: tmp18 };
              const tmp23 = closure_9(Form, obj3);
              cResult[9] = tmp18;
              cResult[10] = tmp23;
              tmp20 = tmp23;
            } else {
              tmp20 = cResult[10];
            }
            if (cResult[11] === analyticsLocations) {
              if (cResult[12] === tmp10) {
                let tmp24;
                if (cResult[13] === tmp4) {
                  tmp24 = cResult[14];
                }
                if (cResult[15] === tmp20) {
                  let tmp29;
                  if (cResult[16] === tmp24) {
                    tmp29 = cResult[17];
                  }
                  return tmp29;
                }
                let obj6 = { children: items1 };
                items1 = [tmp20, tmp24];
                const tmp32 = closure_11(closure_10, obj6);
                cResult[15] = tmp20;
                cResult[16] = tmp24;
                cResult[17] = tmp32;
                tmp29 = tmp32;
              }
            }
            let tmp25 = !tmp10;
            if (tmp25) {
              const tmp27 = analyticsLocation;
              let obj7 = { style: tmp4.upsellButtonContainer, children: closure_9(tmp12Result, obj8) };
              obj8 = {
                onPress() {
                  const obj = {
                    analyticsLocation,
                    analyticsLocations,
                    premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
                  };
                  const tmp = openPremiumModalDefault;
                  tmp(obj);
                },
                text: intl.string(tmp(1126).t.M0rDSO),
              };
              tmp12Result = currentAppIcon(9648);
              intl = tmp(1126).intl;
              tmp25 = closure_9(analyticsLocation, obj7);
            }
            cResult[11] = analyticsLocations;
            cResult[12] = tmp10;
            cResult[13] = tmp4;
            cResult[14] = tmp25;
            tmp24 = tmp25;
          }
        }
        let closure_0 = analyticsLocations(function* (arg0) {
          closure_0 = arg0;
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              c1 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const tmp24 = getIconById(closure_0);
                  if (null != tmp24) {
                    const id = tmp24.id;
                    if (id === closure_0) {
                      if (c1 !== id) {
                        if (tmp26) {
                          const tmp9 = c2;
                          if (!tmp9) {
                            const obj5 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp27 };
                            const obj4 = currentAppIcon(closure_2_2[15]);
                            const result = obj4.handleShowUpsellAlert(obj5);
                          }
                        }
                        let premiumType;
                        const setAppIcon2 = closure_0(closure_2_2[11]).setAppIcon;
                        const tmp16 = closure_0(closure_2_2[11]);
                        if (closure_0 != null) {
                          premiumType = closure_0.premiumType;
                        }
                        c2 = 1;
                        c1 = 1;
                        const obj6 = { value: setAppIcon2(id, premiumType), done: false };
                        return obj6;
                      }
                    } else {
                      const setAppIcon = closure_0(closure_2_2[11]).setAppIcon;
                      let premiumType1;
                      const tmp6 = closure_0(closure_2_2[11]);
                      const DEFAULT = closure_0(closure_2_2[14]).FreemiumAppIconIds.DEFAULT;
                      if (closure_0 != null) {
                        premiumType1 = closure_0.premiumType;
                      }
                      c2 = 2;
                      c1 = 1;
                      const obj7 = { value: setAppIcon(DEFAULT, premiumType1), done: false };
                      return obj7;
                    }
                  }
                }
              } else if (1 === tmp3) {
                if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                }
              } else if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c1 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp18) {
              c1 = 3;
              throw tmp18;
            }
          }
        });
        cResult[5] = currentAppIcon;
        let premiumType1;
        if (stateFromStores != null) {
          premiumType1 = stateFromStores.premiumType;
        }
        function onSelect() {
          return closure_0(...arguments);
        }
        cResult[6] = premiumType1;
        cResult[7] = tmp10;
        cResult[8] = onSelect;
        tmp18 = onSelect;
      }
    : () => {
        let closure_1;
        let intl;
        let obj6;
        let obj7;
        let obj9;
        let stateFromStores;
        let tmp6Result;
        let obj = function _onSelect2() {
          obj = _asyncToGenerator(async (arg0) => {
            let v3;
            let closure_0 = arg0;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const tmp24 = closure_1_8(closure_0);
                    if (null != tmp24) {
                      const id = tmp24.id;
                      if (id === closure_0) {
                        if (closure_2_1 !== id) {
                          if (tmp26) {
                            if (!dependencyMap) {
                              const obj5 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp27 };
                              obj4 = v3(c2[15]);
                              const result = obj4.handleShowUpsellAlert(obj5);
                            }
                          }
                          let premiumType;
                          const setAppIcon2 = closure_0(c2[11]).setAppIcon;
                          const tmp16 = closure_0(c2[11]);
                          if (stateFromStores != null) {
                            premiumType = stateFromStores.premiumType;
                          }
                          c2 = 1;
                          v3 = 1;
                          const obj6 = { value: setAppIcon2(id, premiumType), done: false };
                          return obj6;
                        }
                      } else {
                        const setAppIcon = closure_0(c2[11]).setAppIcon;
                        let premiumType1;
                        const tmp6 = closure_0(c2[11]);
                        const DEFAULT = closure_0(c2[14]).FreemiumAppIconIds.DEFAULT;
                        if (stateFromStores != null) {
                          premiumType1 = stateFromStores.premiumType;
                        }
                        c2 = 2;
                        v3 = 1;
                        const obj7 = { value: setAppIcon(DEFAULT, premiumType1), done: false };
                        return obj7;
                      }
                    }
                  }
                } else if (1 === tmp3) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
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
                return { value: "IconComponent", done: null };
              } catch (tmp18) {
                v3 = 3;
                throw tmp18;
              }
            }
          });
          return obj(...arguments);
        };
        const tmp2 = stateFromStores;
        const tmp3 = dependencyMap;
        let tmp = closure_12();
        obj = stateFromStores(504);
        const items = [obj];
        stateFromStores = obj.useStateFromStores(items, () => obj.getCurrentUser());
        let obj2 = stateFromStores(13261);
        importDefault = obj2.useCurrentAppIcon();
        let obj3 = stateFromStores(1976);
        const isPremiumResult = obj3.isPremium(stateFromStores);
        dependencyMap = isPremiumResult;
        let tmp6 = importDefault;
        const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
        let obj4 = { page: constants.APP_ICONS };
        let obj5 = { children: closure_9(obj4, obj6) };
        obj6 = { accessibilityRole: "radiogroup", children: closure_9(AppIconRowsDefault, obj7) };
        const Form = stateFromStores(8895).Form;
        obj7 = {
          onSelect(arg0) {
            return obj(...arguments);
          },
        };
        const children = [closure_9(Form, obj5)];
        let tmp9Result = !isPremiumResult;
        const tmp10 = obj4;
        if (tmp9Result) {
          let obj8 = { style: tmp.upsellButtonContainer, children: closure_9(tmp6Result, obj9) };
          obj9 = {
            onPress() {
              obj = {
                analyticsLocation: obj4,
                analyticsLocations,
                premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
              };
              const tmp = openPremiumModalDefault;
              tmp(obj);
            },
            text: intl.string(tmp2(1126).t.M0rDSO),
          };
          tmp6Result = NitroUpsellButtonDefault;
          intl = tmp2(1126).intl;
          tmp9Result = closure_9(tmp10, obj8);
        }
        children[1] = tmp9Result;
        return closure_11(closure_10, { children });
      },
);
let result = size.fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default memoResult;
