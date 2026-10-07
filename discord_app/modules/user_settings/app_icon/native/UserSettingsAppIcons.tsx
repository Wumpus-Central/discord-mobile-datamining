// === Module 15366: UserSettingsAppIcons ===

// Module 15366 (UserSettingsAppIcons)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9661 */;
import AppIconRowsDefault from "AppIconRows" /* 15367 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ UpsellTypes: metroRequire, AnalyticsPages: closure_7 } = Constants);
const getIconById = fn(8858).getIconById;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let closure_12 = createStyles.createStyles({ upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(18);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  _require = stateFromStores;
  const tmpResult = require("initialize");
  const currentAppIcon = require("AppIconUtils").useCurrentAppIcon();
  if (cResult[2] !== stateFromStores) {
    const isPremiumResult = tmp(1976).isPremium(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    let tmp10 = isPremiumResult;
    const tmpResult4 = tmp(1976);
  } else {
    tmp10 = cResult[3];
  }
  dependencyMap = tmp10;
  const analyticsLocations = currentAppIcon(6664)().analyticsLocations;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { page: constants.APP_ICONS };
    cResult[4] = obj2;
    let tmp13 = obj2;
  } else {
    tmp13 = cResult[4];
  }
  const analyticsLocation = tmp13;
  if (cResult[5] === currentAppIcon) {
    let premiumType;
    if (stateFromStores != null) {
      premiumType = stateFromStores.premiumType;
    }
    if (cResult[6] === premiumType) {
      if (cResult[7] === tmp10) {
        let tmp17 = cResult[8];
      }
      if (cResult[9] !== tmp17) {
        const obj3 = { children: null };
        let obj4 = { accessibilityRole: "radiogroup", children: null };
        let obj5 = { onSelect: tmp17 };
        obj4.children = closure_9(tmp12(15367), obj5);
        obj3.children = closure_9(analyticsLocation, obj4);
        const tmp22 = closure_9(tmp(8924).Form, obj3);
        cResult[9] = tmp17;
        cResult[10] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === analyticsLocations) {
        if (cResult[12] === tmp10) {
          if (cResult[13] === tmp4) {
            let tmp23 = cResult[14];
          }
          if (cResult[15] === tmp19) {
            if (cResult[16] === tmp23) {
              let tmp28 = cResult[17];
            }
            return tmp28;
          }
          let obj6 = { children: null };
          const items1 = [tmp19, tmp23];
          obj6.children = items1;
          const tmp31 = closure_11(closure_10, obj6);
          cResult[15] = tmp19;
          cResult[16] = tmp23;
          cResult[17] = tmp31;
          tmp28 = tmp31;
        }
      }
      let tmp24 = !tmp10;
      if (!tmp10) {
        const obj7 = { style: tmp4.upsellButtonContainer, children: null };
        let obj8 = {
          onPress() {
                  const obj = { analyticsLocation, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
                  openPremiumModalDefault(obj);
                },
          text: null
        };
        const intl = tmp(1126).intl;
        obj8.text = intl.string(tmp(1126).t.M0rDSO);
        obj7.children = closure_9(tmp12(9661), obj8);
        tmp24 = closure_9(analyticsLocation, obj7);
        const tmp12Result = tmp12(9661);
      }
      cResult[11] = analyticsLocations;
      cResult[12] = tmp10;
      cResult[13] = tmp4;
      cResult[14] = tmp24;
      tmp23 = tmp24;
    }
  }
  _require = analyticsLocations(function*(arg0) {
    if (c1 === 2) {
      c1 = 3;
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp24 = getIconById(closure_0);
            if (null != tmp24) {
              const id = tmp24.id;
              if (id === closure_0) {
                if (c1 !== id) {
                  if (tmp26) {
                    if (!c2) {
                      const obj6 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp27 };
                      const result = currentAppIcon(8848).handleShowUpsellAlert(obj6);
                      const obj5 = currentAppIcon(8848);
                    }
                  }
                  let premiumType;
                  if (closure_0 != null) {
                    premiumType = closure_0.premiumType;
                  }
                  c2 = 1;
                  c1 = 1;
                  const obj8 = { value: closure_0(13280).setAppIcon(id, premiumType), done: false };
                  return obj8;
                }
              } else {
                let premiumType1;
                if (closure_0 != null) {
                  premiumType1 = closure_0.premiumType;
                }
                c2 = 2;
                c1 = 1;
                const obj9 = { value: closure_0(13280).setAppIcon(closure_0(8859).FreemiumAppIconIds.DEFAULT, premiumType1), done: false };
                return obj9;
              }
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj10 = { value, done: true };
            return obj10;
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
      } catch (tmp17) {
        c1 = tmp;
        throw tmp17;
      }
    }
  });
  cResult[5] = currentAppIcon;
  let premiumType1;
  if (stateFromStores != null) {
    premiumType1 = stateFromStores.premiumType;
  }
  function onSelect() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[6] = premiumType1;
  cResult[7] = tmp10;
  cResult[8] = onSelect;
  tmp17 = onSelect;
  const tmpResult3 = require("AppIconUtils");
}) : (() => {
  const currentUser = async function _onSelect2(arg0) {
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
                      const result = v3(8848).handleShowUpsellAlert(obj6);
                      const obj5 = v3(8848);
                    }
                  }
                  let premiumType;
                  if (stateFromStores != null) {
                    premiumType = stateFromStores.premiumType;
                  }
                  dependencyMap = 1;
                  v3 = 1;
                  const obj8 = { value: stateFromStores(13280).setAppIcon(id, premiumType), done: false };
                  return obj8;
                }
              } else {
                let premiumType1;
                if (stateFromStores != null) {
                  premiumType1 = stateFromStores.premiumType;
                }
                dependencyMap = 2;
                v3 = 1;
                const obj9 = { value: stateFromStores(13280).setAppIcon(stateFromStores(8859).FreemiumAppIconIds.DEFAULT, premiumType1), done: false };
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
        return { value: "IconComponent", done: null };
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
  importDefault = stateFromStores(13280).useCurrentAppIcon();
  let obj2 = stateFromStores(13280);
  const isPremiumResult = stateFromStores(1976).isPremium(stateFromStores);
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
      }
    })
  };
  obj5.children = closure_9(obj4, obj6);
  const children = [closure_9(stateFromStores(8924).Form, obj5), ];
  let tmp9Result = !isPremiumResult;
  if (!isPremiumResult) {
    let obj8 = { style: tmp.upsellButtonContainer, children: null };
    let obj9 = {
      onPress() {
          const obj = { analyticsLocation: obj4, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
          openPremiumModalDefault(obj);
        },
      text: null
    };
    const intl = tmp2(1126).intl;
    obj9.text = intl.string(tmp2(1126).t.M0rDSO);
    obj8.children = closure_9(NitroUpsellButtonDefault, obj9);
    tmp9Result = closure_9(obj4, obj8);
    const tmp6Result = NitroUpsellButtonDefault;
  }
  children[1] = tmp9Result;
  return closure_11(closure_10, { children });
}));