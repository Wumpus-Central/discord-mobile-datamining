// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl9 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2617 from "../../../premium/gifting/GiftingBadge.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useStoreConnectionErrorAlertDefault from "../../../premium/native/useStoreConnectionErrorAlert.tsx";
import BadgeId from "../../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../../badges/BadgeDirectoryActionCreators.tsx";
import PremiumFeaturesCards from "PremiumFeaturesCards.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13382_AssetRegistry.js";
import OutboundPromotionCardDefault from "../../../../components_native/premium/OutboundPromotionCard.tsx";
import EntitlementGiftGroupCardDefault from "../../../../components_native/premium/EntitlementGiftGroupCard.tsx";
import PremiumTierCardDefault from "../../../../components_native/premium/PremiumTierCard.tsx";
import GiftPurchaseButtonDefault from "../../../../components_native/premium/GiftPurchaseButton.tsx";
import PremiumUnverifiedWarningDefault from "../../../../components_native/premium/PremiumUnverifiedWarning.tsx";
import UserSettingsGiftingBadgeProgressDefault from "UserSettingsGiftingBadgeProgress.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";
import EntitlementStore from "../../../../stores/game_store/EntitlementStore.tsx";
import Constants from "../../../../Constants.tsx";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, constants, constants2, dependencyMap, importDefault, navigation, title, waitResult;

let StyleSheet;
let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ UserSettingsSections: c10, AnalyticsPages: unpackModuleId } = Constants);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  scrollView: obj2,
  giftingSettingsContainer: { flex: 1 },
  inventorySectionWrapper: { flex: 1 },
  giftPurchaseSectionWrapper: { flex: 1, paddingTop: 36, paddingBottom: 16 },
  emptyGiftLinks: obj3,
  emptyImage: { marginRight: 18 },
  emptyGiftHeader: { lineHeight: 20 },
  emptyGiftDescription: { flex: 1 },
  emptyGiftInformation: { marginTop: 8 },
  titleWrapper: { paddingTop: 28, paddingBottom: 8 },
  cardText: { lineHeight: 18 },
  tierCard: { marginTop: 16 },
  giftPurchaseButton: { marginTop: 8, height: 40 },
  buttonWrapper: { marginTop: 16 },
  loading: { marginTop: 32 },
  warningMargins: { marginHorizontal: 16 },
};
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
createStyles = createStyles.createStyles;
obj3 = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 16,
  borderWidth: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (title) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      title = title.title;
      if (cResult[0] !== title) {
        const obj2 = { title };
        const tmp6 = authStore2(TableRowGroup.TableRowGroupTitle, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (title) => authStore2(TableRowGroup.TableRowGroupTitle, { title: title.title });
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (recipientUserId, arg1) => {
        let closure_11;
        let closure_2;
        let closure_4;
        let enabled;
        let obj5;
        let tmp10;
        let tmp11;
        let tmp14;
        let tmp19;
        let tmp20;
        let tmp21;
        let tmp26;
        let tmp27;
        let tmp30;
        let tmp4;
        let tmp = recipientUserId;
        const tmp2 = dependencyMap;
        let obj = recipientUserId(576);
        const cResult = obj.c(93);
        recipientUserId = recipientUserId.recipientUserId;
        const analyticsLocation = recipientUserId.analyticsLocation;
        if (cResult[0] !== analyticsLocation) {
          let tmp5 = analyticsLocation;
          if (undefined === analyticsLocation) {
            let obj2 = { page: constants2.GIFTING_SETTINGS };
            tmp5 = obj2;
          }
          cResult[0] = analyticsLocation;
          cResult[1] = tmp5;
          tmp4 = tmp5;
        } else {
          tmp4 = cResult[1];
        }
        importDefault = tmp4;
        const tmp7 = closure_17();
        dependencyMap = tmp7;
        useStoreConnectionErrorAlertDefault();
        let tmpResult = tmp(1490);
        navigation = tmpResult.useNavigation();
        const bottom = useSafeAreaInsetsDefault().bottom;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [enabled];
          class U {
            constructor() {
              return enabled.getGiftable();
            }
          }
          cResult[2] = items;
          cResult[3] = U;
          tmp11 = U;
          tmp10 = items;
        } else {
          tmp10 = cResult[2];
          tmp11 = cResult[3];
        }
        const tmpResult6 = tmp(504);
        const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp10, tmp11);
        if (cResult[4] !== stateFromStoresArray) {
          let tmp15;
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function w(skuId) {
              const obj = recipientUserId(closure_2[17]);
              return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
            };
            cResult[6] = fn;
            class U {
              constructor() {
                return enabled.getGiftable();
              }
            }
          } else {
            tmp15 = cResult[6];
          }
          class U {
            constructor() {
              return enabled.getGiftable();
            }
          }
          const groupByResult = obj5.groupBy(stateFromStoresArray, tmp15);
          cResult[4] = stateFromStoresArray;
          cResult[5] = groupByResult;
          tmp14 = groupByResult;
        } else {
          tmp14 = cResult[5];
        }
        react = tmp14;
        const tmpResult7 = tmp(6936);
        const isPaymentsBlocked = tmpResult7.useIsPaymentsBlocked();
        const tmpResult8 = tmp(13381);
        const outboundPromotions = tmpResult8.useOutboundPromotions();
        const promotionsLoaded = outboundPromotions.promotionsLoaded;
        const activeOutboundPromotions = outboundPromotions.activeOutboundPromotions;
        const claimedEndedOutboundPromotions = outboundPromotions.claimedEndedOutboundPromotions;
        const claimedOutboundPromotionCodeMap = outboundPromotions.claimedOutboundPromotionCodeMap;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { location: "gift_inventory" };
          cResult[7] = obj3;
          class U {
            constructor() {
              return enabled.getGiftable();
            }
          }
        } else {
          tmp19 = cResult[7];
        }
        const GiftingBadgeExperiment = tmp(10484).GiftingBadgeExperiment;
        enabled = GiftingBadgeExperiment.useConfig(tmp19).enabled;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let items1 = [claimedOutboundPromotionCodeMap];
          class Z {
            constructor() {
              return claimedOutboundPromotionCodeMap.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
            }
          }
          cResult[8] = items1;
          cResult[9] = Z;
          tmp21 = Z;
          tmp20 = items1;
        } else {
          tmp20 = cResult[8];
          tmp21 = cResult[9];
        }
        const tmpResult9 = tmp(504);
        const stateFromStores = tmpResult9.useStateFromStores(tmp20, tmp21);
        const tmp24 = navigation(react.useState(false), 2);
        constants = tmp24[0];
        constants2 = tmp24[1];
        const tmpResult10 = tmp(13224);
        const subscriptionPlansLoaded = tmpResult10.useSubscriptionPlansLoaded();
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              obj = closure_1(closure_2[24]);
              waitResult = obj.wait(() => {
                const obj = recipientUserId(closure_2[25]);
                const giftableEntitlements = obj.fetchGiftableEntitlements();
                giftableEntitlements.then(() => {
                  /* body not rendered: F153044 */
                });
                const obj2 = analyticsLocation(closure_2[26]);
                obj2.init();
              });
              return;
            }
          }
          let items2 = [];
          class Z {
            constructor() {
              return claimedOutboundPromotionCodeMap.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
            }
          }
          cResult[11] = X;
          tmp27 = X;
          tmp26 = items2;
        } else {
          class X {
            constructor() {
              obj = closure_1(closure_2[24]);
              waitResult = obj.wait(() => {
                const obj = recipientUserId(closure_2[25]);
                const giftableEntitlements = obj.fetchGiftableEntitlements();
                giftableEntitlements.then(() => {
                  /* body not rendered: F153044 */
                });
                const obj2 = analyticsLocation(closure_2[26]);
                obj2.init();
              });
              return;
            }
          }
          tmp27 = cResult[11];
        }
        const effect = obj10.useEffect(tmp27, tmp26);
        if (cResult[12] !== enabled) {
          class J {
            constructor() {
              if (enabled) {
                const obj = BadgeDirectoryActionCreators;
                const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
              }
            }
          }
          const items3 = [enabled];
          class Z {
            constructor() {
              return claimedOutboundPromotionCodeMap.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
            }
          }
          cResult[12] = enabled;
          cResult[13] = J;
          cResult[14] = items3;
          tmp30 = items3;
        } else {
          class J {
            constructor() {
              if (enabled) {
                const obj = BadgeDirectoryActionCreators;
                const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
              }
            }
          }
          tmp30 = cResult[14];
        }
        const effect1 = obj10.useEffect(J, tmp30);
        if (cResult[15] !== navigation) {
          class J {
            constructor() {
              if (enabled) {
                const obj = BadgeDirectoryActionCreators;
                const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
              }
            }
          }
          cResult[15] = navigation;
          class Z {
            constructor() {
              return claimedOutboundPromotionCodeMap.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
            }
          }
          cResult[16] = tmp33;
        } else {
          class J {
            constructor() {
              if (enabled) {
                const obj = BadgeDirectoryActionCreators;
                const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
              }
            }
          }
        }
        const onClick = tmp33;
        if (cResult[17] !== navigation) {
          class J {
            constructor() {
              if (enabled) {
                const obj = BadgeDirectoryActionCreators;
                const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
              }
            }
          }
          cResult[17] = navigation;
          class Z {
            constructor() {
              return claimedOutboundPromotionCodeMap.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
            }
          }
          cResult[18] = tmp35;
        } else {
          class J {
            constructor() {
              if (enabled) {
                const obj = BadgeDirectoryActionCreators;
                const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
              }
            }
          }
        }
        const onClick2 = tmp35;
        if (cResult[19] === tmp7.emptyGiftDescription) {
          class J {
            constructor() {
              if (enabled) {
                const obj = BadgeDirectoryActionCreators;
                const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
              }
            }
          }
        }
        function st() {
          let intl;
          let intl2;
          let items;
          let items1;
          const obj = { style: closure_2.emptyGiftLinks, children: items };
          items = [,];
          const obj2 = { style: closure_2.emptyImage, source: AssetRegistryDefault };
          items[0] = authStore2(hasOwnProperty, obj2);
          const obj3 = { style: closure_2.emptyGiftDescription, accessible: true, children: items1 };
          const obj4 = {
            style: closure_2.emptyGiftHeader,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: intl.string(intl9.t.B1qgZn),
          };
          const Text = Text_Text.Text;
          intl = intl9.intl;
          items1 = [authStore2(Text, obj4)];
          const obj5 = {
            style: closure_2.emptyGiftInformation,
            variant: "text-sm/medium",
            color: "text-default",
            children: intl2.string(intl9.t["OV/u0n"]),
          };
          const Text2 = Text_Text.Text;
          intl2 = intl9.intl;
          items1[1] = authStore2(Text2, obj5);
          items[1] = closure_15(metroRequire, obj3);
          return closure_15(metroRequire, obj);
        }
        cResult[19] = tmp7.emptyGiftDescription;
        cResult[20] = tmp7.emptyGiftHeader;
        cResult[21] = tmp7.emptyGiftInformation;
        cResult[22] = tmp7.emptyGiftLinks;
        cResult[23] = tmp7.emptyImage;
        cResult[24] = st;
      }
    : (arg0, ref) => {
        let _undefined;
        let activeOutboundPromotions;
        let analyticsLocation;
        let badgeById;
        let c3;
        let c5;
        let claimedEndedOutboundPromotions;
        let closure_0;
        let giftable;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let intl7;
        let intl8;
        let items10;
        let items11;
        let items12;
        let items13;
        let items14;
        let items15;
        let items16;
        let items17;
        let items5;
        let items7;
        let items8;
        let items9;
        let obj10;
        let obj15;
        let obj25;
        let obj28;
        let obj34;
        let obj42;
        let promotionsLoaded;
        let recipientUserId;
        let tmp13;
        let tmp17Result8;
        ({ recipientUserId, analyticsLocation } = arg0);
        if (analyticsLocation === undefined) {
          let obj = { page: constants2.GIFTING_SETTINGS };
          analyticsLocation = obj;
        }
        _require = undefined;
        let stateFromStoresArray;
        let memo;
        _slicedToArray = undefined;
        let enabled;
        c5 = undefined;
        const tmp2 = closure_17();
        stateFromStoresArray(memo[13])();
        let obj2 = require("useNavigation");
        _require = obj2.useNavigation();
        const bottom = stateFromStoresArray(memo[15])().bottom;
        let obj3 = require("get initialized");
        const items = [EntitlementStore];
        stateFromStoresArray = obj3.useStateFromStoresArray(items, () => giftable.getGiftable());
        const items1 = [stateFromStoresArray];
        memo = enabled.useMemo(() => {
          let obj = _modDef12;
          return obj.groupBy(stateFromStoresArray, (skuId) => {
            const obj = closure_1_0(memo[17]);
            return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
          });
        }, items1);
        let obj4 = require("BlockedPaymentsCountryExperiment");
        const isPaymentsBlocked = obj4.useIsPaymentsBlocked();
        const obj5 = require("PromotionsHooks");
        const outboundPromotions = obj5.useOutboundPromotions();
        ({
          activeOutboundPromotions,
          claimedEndedOutboundPromotions,
          claimedOutboundPromotionCodeMap: c3,
          promotionsLoaded,
        } = outboundPromotions);
        const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
        enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
        const items2 = [BadgeDirectoryStore];
        const obj6 = require("get initialized");
        const stateFromStores = obj6.useStateFromStores(items2, () =>
          badgeById.getBadgeById(closure_0(memo[22]).BadgeId.GIFTING),
        );
        [tmp13, c5] = enabled.useState(false);
        _slicedToArray(enabled.useState(false), 2);
        const obj7 = require("useSubscriptionPlansLoaded");
        const subscriptionPlansLoaded = obj7.useSubscriptionPlansLoaded();
        const effect = enabled.useEffect(() => {
          let obj = DispatcherDefault;
          obj.wait(() => {
            const obj = closure_0(memo[25]);
            const giftableEntitlements = obj.fetchGiftableEntitlements();
            giftableEntitlements.then(() => closure_1_5(true));
            const obj2 = stateFromStoresArray(memo[26]);
            obj2.init();
          });
        }, []);
        const items3 = [enabled];
        const effect1 = enabled.useEffect(() => {
          if (enabled) {
            const obj = BadgeDirectoryActionCreators;
            const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
          }
        }, items3);
        const obj8 = { paddingBottom: bottom + stateFromStoresArray(memo[9]).space.PX_16 };
        if (isPaymentsBlocked) {
          const obj9 = { style: tmp2.giftingSettingsContainer, children: closure_14(closure_7, obj10) };
          obj10 = {
            ref,
            contentInset: { top: 40 },
            contentContainerStyle: obj8,
            style: tmp2.scrollView,
            children: closure_14(stateFromStoresArray(memo[42]), {}),
          };
          tmp17Result8 = closure_14(closure_6, obj9);
        } else {
          const obj11 = { style: tmp2.giftingSettingsContainer, children: null };
          const items4 = [closure_14(stateFromStoresArray(memo[43]), {})];
          const obj12 = { ref, style: tmp2.scrollView, contentContainerStyle: obj8, children: null };
          if (enabled) {
            enabled = null != stateFromStores;
          }
          if (enabled) {
            const obj13 = { children: items5 };
            const obj14 = { style: tmp2.titleWrapper, children: closure_14(closure_18, obj15) };
            obj15 = { title: intl.string(stateFromStoresArray(memo[39]).sFokBp) };
            intl = tmp6(tmp4[33]).intl;
            items5 = [closure_14(closure_6, obj14)];
            const obj16 = { analyticsLocation };
            items5[1] = closure_14(stateFromStoresArray(memo[40]), obj16);
            enabled = closure_15(closure_16, obj13);
          }
          const items6 = [enabled, ,];
          if (tmp13) {
            if (promotionsLoaded) {
              let tmp19Result;
              if (subscriptionPlansLoaded) {
                const _Object = Object;
                const keys = Object.keys(memo);
                if (0 === keys.length) {
                  if (0 === activeOutboundPromotions.length) {
                    let tmp17Result;
                    if (0 === claimedEndedOutboundPromotions.length) {
                      const obj17 = { style: tmp2.emptyGiftLinks, children: items7 };
                      const obj18 = { style: tmp2.emptyImage, source: stateFromStoresArray(memo[31]) };
                      items7 = [closure_14(c5, obj18)];
                      const obj19 = { style: tmp2.emptyGiftDescription, accessible: true, children: items8 };
                      const obj20 = {
                        style: tmp2.emptyGiftHeader,
                        variant: "text-md/semibold",
                        color: "mobile-text-heading-primary",
                        children: intl3.string(require("intl").t.B1qgZn),
                      };
                      const Text = tmp6(tmp4[32]).Text;
                      intl3 = tmp6(tmp4[33]).intl;
                      items8 = [closure_14(Text, obj20)];
                      const obj21 = {
                        style: tmp2.emptyGiftInformation,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: intl4.string(require("intl").t["OV/u0n"]),
                      };
                      const Text2 = tmp6(tmp4[32]).Text;
                      intl4 = tmp6(tmp4[33]).intl;
                      items8[1] = closure_14(Text2, obj21);
                      items7[1] = closure_15(closure_6, obj19);
                      tmp17Result = closure_15(closure_6, obj17);
                    }
                    tmp19Result = tmp17Result;
                  }
                }
                let tmp17Result5 = null;
                const obj22 = { style: tmp2.inventorySectionWrapper, children: items10 };
                if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
                  const obj23 = { children: items9 };
                  const obj24 = { style: tmp2.titleWrapper, children: closure_14(closure_18, obj25) };
                  obj25 = { title: intl8.string(require("intl").t.wFsj3B) };
                  intl8 = tmp6(tmp4[33]).intl;
                  items9 = [
                    closure_14(closure_6, obj24),
                    claimedEndedOutboundPromotions.map((code) => {
                      const outboundPromotion = code.promotion;
                      return closure_1_14(
                        stateFromStoresArray(memo[34]),
                        { outboundPromotion, code: code.code },
                        outboundPromotion.id,
                      );
                    }),
                    activeOutboundPromotions.map((outboundPromotion) => {
                      const obj = { outboundPromotion, code: c3[outboundPromotion.id] };
                      return authStore2(OutboundPromotionCardDefault, obj, outboundPromotion.id);
                    }),
                  ];
                  tmp17Result5 = closure_15(closure_16, obj23);
                }
                items10 = [tmp17Result5];
                let tmp17Result6 = null;
                if (keys.length > 0) {
                  const obj26 = { children: items11 };
                  const obj27 = { style: tmp2.titleWrapper, children: closure_14(closure_18, obj28) };
                  obj28 = { title: intl2.string(require("intl").t["9KeUbY"]) };
                  intl2 = tmp6(tmp4[33]).intl;
                  items11 = [
                    closure_14(closure_6, obj27),
                    keys.map((item) => {
                      let giftStyle;
                      let skuId;
                      let subscriptionPlanId;
                      const obj = GiftCodeUtils;
                      ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(item));
                      const obj2 = { skuId, subscriptionPlanId, entitlements: memo[item], giftStyle };
                      obj.parseComboId(item);
                      return authStore2(EntitlementGiftGroupCardDefault, obj2, item);
                    }),
                  ];
                  tmp17Result6 = closure_15(closure_16, obj26);
                }
                items10[1] = tmp17Result6;
                tmp17Result = closure_15(closure_6, obj22);
              }
              const obj29 = { children: tmp19Result };
              items6[1] = closure_14(closure_6, obj29);
              let tmp17Result7 = null;
              if (subscriptionPlansLoaded) {
                const obj30 = { style: tmp2.giftPurchaseSectionWrapper, children: items12 };
                function handleLearnMorePremiumClick() {
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.PREMIUM_GIFTING);
                  const obj2 = UserSettingsUtils;
                  const obj3 = { destinationPane: constants.PREMIUM_GIFTING };
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  closure_0.push(constants.PREMIUM);
                }
                function handleLearnMoreNitroBasicClick() {
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.PREMIUM_GIFTING);
                  const obj2 = UserSettingsUtils;
                  const obj3 = { destinationPane: constants.PREMIUM_GIFTING };
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj4 = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                  closure_0.push(constants.PREMIUM, obj4);
                }
                const obj31 = { title: intl5.string(require("intl").t["55Ccy0"]) };
                intl5 = tmp6(tmp4[33]).intl;
                items12 = [closure_14(closure_18, obj31), , ,];
                const obj32 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard, children: items13 };
                const obj33 = {
                  style: tmp2.cardText,
                  variant: "text-sm/medium",
                  color: "text-default",
                  children: intl6.format(require("intl").t.thORji, obj34),
                };
                const tmp3Result = stateFromStoresArray(memo[36]);
                const Text3 = tmp6(tmp4[32]).Text;
                intl6 = tmp6(tmp4[33]).intl;
                obj34 = { onClick: handleLearnMorePremiumClick };
                items13 = [closure_14(Text3, obj33)];
                const obj35 = { style: tmp2.buttonWrapper, children: items14 };
                const obj36 = {
                  recipientUserId,
                  style: tmp2.giftPurchaseButton,
                  variant: "active",
                  planId: closure_13.PREMIUM_YEAR_TIER_2,
                  analyticsLocation,
                };
                items14 = [closure_14(stateFromStoresArray(memo[37]), obj36)];
                const obj37 = {
                  recipientUserId,
                  style: tmp2.giftPurchaseButton,
                  variant: "secondary",
                  planId: closure_13.PREMIUM_MONTH_TIER_2,
                  analyticsLocation,
                };
                items14[1] = closure_14(stateFromStoresArray(memo[37]), obj37);
                items13[1] = closure_15(closure_6, obj35);
                items12[1] = closure_15(tmp3Result, obj32);
                const obj38 = { style: tmp2.warningMargins };
                items12[2] = closure_14(stateFromStoresArray(memo[38]), obj38);
                const obj39 = { children: items17 };
                const obj40 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard, children: items15 };
                const obj41 = {
                  style: tmp2.cardText,
                  variant: "text-sm/medium",
                  color: "text-default",
                  children: intl7.format(require("intl").t.NmpnsP, obj42),
                };
                const tmp3Result2 = stateFromStoresArray(memo[36]);
                const Text4 = tmp6(tmp4[32]).Text;
                intl7 = tmp6(tmp4[33]).intl;
                obj42 = { onClick: handleLearnMoreNitroBasicClick };
                items15 = [closure_14(Text4, obj41)];
                const obj43 = { style: tmp2.buttonWrapper, children: items16 };
                const obj44 = {
                  recipientUserId,
                  style: tmp2.giftPurchaseButton,
                  variant: "active",
                  planId: closure_13.PREMIUM_YEAR_TIER_0,
                  analyticsLocation,
                };
                items16 = [closure_14(stateFromStoresArray(memo[37]), obj44)];
                const obj45 = {
                  recipientUserId,
                  style: tmp2.giftPurchaseButton,
                  variant: "secondary",
                  planId: closure_13.PREMIUM_MONTH_TIER_0,
                  analyticsLocation,
                };
                items16[1] = closure_14(stateFromStoresArray(memo[37]), obj45);
                items15[1] = closure_15(closure_6, obj43);
                items17 = [closure_15(tmp3Result2, obj40)];
                const obj46 = { style: tmp2.warningMargins };
                items17[1] = closure_14(stateFromStoresArray(memo[38]), obj46);
                items12[3] = closure_15(closure_16, obj39);
                tmp17Result7 = closure_15(closure_6, obj30);
              }
              items6[2] = tmp17Result7;
              obj12.children = items6;
              items4[1] = closure_15(closure_7, obj12);
              obj11.children = items4;
              tmp17Result8 = closure_15(closure_6, obj11);
            }
          }
          const obj47 = { style: tmp2.loading };
          tmp19Result = closure_14(tmp6(tmp4[41]).ActivityIndicator, obj47);
        }
        return tmp17Result8;
      },
);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default forwardRefResult;
