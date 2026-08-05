// discord_app/modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx
import items from "items";
import { View } from "openPremiumModal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { getIconById } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "getSystemLocale";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
import { BackwardsCompatibleAppIconRows } from "../../../app_icons/native/AppIconRows.tsx";
import { NitroUpsellButton } from "../../../premium/components/native/NitroUpsellButton.tsx";

let c10;
let c9;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ UpsellTypes: closure_6, AnalyticsPages: error } = ME);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" } });
const memoResult = require("getSystemLocale").memo(() => {
  function _onSelect() {
    const self = this;
    const tmp = analyticsLocations((arg0) => {
      let closure_0 = arg0;
      let c2 = 0;
      let c1 = 0;
      return (function*(arg0) {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v0 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const tmp25 = outer1_8(lib);
                if (null != tmp25) {
                  const id = tmp25.id;
                  if (id === tmp23) {
                    if (v0 !== id) {
                      if (tmp27) {
                        if (!dependencyMap) {
                          let obj4 = v0(8173);
                          const obj1 = { initialUpsellKey: null, imageSource: null };
                          obj1[0] = outer1_6.APP_ICONS;
                          obj1[1] = tmp28;
                          const result = obj4.handleShowUpsellAlert(obj1);
                        }
                      }
                      let premiumType;
                      if (lib != null) {
                        premiumType = lib.premiumType;
                      }
                      dependencyMap = 1;
                      v0 = 1;
                      let obj2 = { value: null, done: false };
                      obj2[0] = lib(7582).setAppIcon(id, premiumType);
                      return obj2;
                    }
                  } else {
                    obj2 = lib(7582);
                    let premiumType1;
                    if (lib != null) {
                      premiumType1 = lib.premiumType;
                    }
                    dependencyMap = 2;
                    v0 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj2.setAppIcon(lib(7584).FreemiumAppIconIds.DEFAULT, premiumType1);
                    return obj3;
                  }
                }
                tmp23 = lib;
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            v0 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp17) {
            v0 = tmp;
            throw tmp17;
          }
        }
      })();
    });
    const _onSelect = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = stateFromStores(589);
  const items = [_onSelect];
  stateFromStores = obj.useStateFromStores(items, () => _onSelect.getCurrentUser());
  let obj1 = stateFromStores(7582);
  const importDefault = obj1.useCurrentAppIcon();
  let obj2 = stateFromStores(1897);
  const isPremiumResult = obj2.isPremium(stateFromStores);
  let dependencyMap = isPremiumResult;
  const analyticsLocations = context().analyticsLocations;
  obj = { page: constants.APP_ICONS };
  obj = { children: null };
  obj1 = { accessibilityRole: "radiogroup", children: null };
  obj2 = {
    onSelect(arg0) {
      const self = this;
      const apply = _onSelect.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  };
  obj1[1] = callback(BackwardsCompatibleAppIconRows, obj2);
  obj[0] = callback(obj, obj1);
  const children = [callback(stateFromStores(7777).Form, obj), ];
  let tmp9Result = !isPremiumResult;
  if (!isPremiumResult) {
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.upsellButtonContainer;
    let obj4 = { onPress: null, text: null };
    obj4[0] = function onPress() {
      obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: null };
      obj[2] = stateFromStores(isPremiumResult[18]).PremiumFeatureCardOrder.TIER_2_LEADING;
      callback(isPremiumResult[17])(obj);
    };
    const intl = tmp2(1236).intl;
    obj4[1] = intl.string(tmp2(1236).t.M0rDSO);
    obj3[1] = tmp9(NitroUpsellButton, obj4);
    tmp9Result = tmp9(obj, obj3);
    const tmp6Result = NitroUpsellButton;
  }
  children[1] = tmp9Result;
  return closure_11(closure_10, { children });
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default memoResult;