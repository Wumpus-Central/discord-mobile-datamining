// discord_app/modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ReleaseChannelUtils from "../../../utils/ReleaseChannelUtils.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import openGiftModal from "openGiftModal.tsx";
import UnlockWithNitroButton from "UnlockWithNitroButton.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

require = fn;
function VCButton(balance) {
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: dependencyMap, stageCollectibleChangeForEditProfile } = balance);
  let navigation;
  let analyticsLocations;
  closure_7 = undefined;
  let color;
  const tmp = closure_17();
  noop = tmp;
  const virtualCurrencyData = balance(13428).useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj = balance(13428);
  let isPartiallyOwnedBundle = balance(9083).useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(9083);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj3.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  obj3 = balance(9044);
  navigation = balance(1503).useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(13431, dependencyMap.paths),
      {
        skuId: product.skuId,
        analyticsLocations,
        onCheckoutSuccess(arg0) {
          const collectiblesPurchases = balance(7262).fetchCollectiblesPurchases();
          const obj = balance(7262);
          product(5934).popWithKey(ORB_CHECKOUT_MODAL);
          if (product.skuId === constants.ORB_PROFILE_BADGE) {
            const obj3 = {
              modalKey,
              onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
              orbBalancePriorToPurchase,
            };
            product(5934).pushLazy(balance(2000)(13435, dependencyMap.paths), obj3, modalKey);
            const tmp4Result = product(5934);
          } else {
            const ALL = balance(1088).FractionalPremiumSKUsSets.ALL;
            if (ALL.has(product.skuId)) {
              const obj4 = {
                skuId: product.skuId,
                consumed: null,
                onPressExplorePerks: null,
                onPressViewCredits: null,
              };
              const first = arg0.entitlements[0];
              let flag;
              const tmp4Result3 = product(5056);
              if (first != null) {
                flag = first.consumed;
              }
              if (flag == null) {
                flag = false;
              }
              obj4.consumed = flag;
              obj4.onPressExplorePerks = function onPressExplorePerks() {
                navigation.navigate(constants2.PREMIUM);
                product(5056).hideActionSheet();
              };
              obj4.onPressViewCredits = function onPressViewCredits() {
                navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
                product(5056).hideActionSheet();
              };
              tmp4Result3.openLazy(
                balance(2000)(13436, dependencyMap.paths),
                "FractionalNitroCollectedActionSheet",
                obj4,
              );
              const tmp10 = balance(2000)(13436, dependencyMap.paths);
            } else {
              const obj5 = {
                product,
                useCategoryImage: true,
                showOrbBalancePill: true,
                orbBalancePriorToPurchase,
                stageCollectibleChangeForEditProfile,
              };
              product(12770).open(obj5);
              const tmp4Result4 = product(12770);
            }
          }
          const obj2 = product(5934);
        },
      },
      ORB_CHECKOUT_MODAL,
    );
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    const intl = tmp2(1126).intl;
    let obj4 = {
      orbPrice: price.amount,
      orbIconHook() {
        return map1(OrbsIcon.OrbsIcon, { size: "sm", color }, "orbs-icon");
      },
    };
    const formatResult = intl.format(tmp2(1126).t.JC15qj, obj4);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    let obj5 = { style: tmp.orbsButtonLabel, accessibilityLabel: null, children: null };
    const intl2 = tmp2(1126).intl;
    const obj6 = { orbPrice: price.amount };
    obj5.accessibilityLabel = intl2.formatToPlainString(tmp2(1126).t.yi41qQ, obj6);
    obj5.children = arr2.map((children, index) => {
      if (typeof children === "string") {
        const obj = { style: orbsButtonText.orbsButtonText, variant: "text-md/semibold", color: str, children };
        let tmp7 = map1(Text_Text.Text, obj, index);
      } else {
        tmp7 = children;
      }
      return tmp7;
    });
    const obj7 = { style: tmp.buttonContainer, children: null };
    const obj8 = {
      loading: false,
      textElement: closure_13(navigation, obj5),
      onPress() {
        if (dependencyMap != null) {
          tmp(constants.BUY_WITH_ORBS);
        }
        closure_7();
      },
      disabled: isPartiallyOwnedBundle,
      size: "lg",
      variant: null,
      grow: true,
    };
    let str2 = "primary";
    if (isPartiallyOwnedBundle) {
      str2 = "secondary";
    }
    obj8.variant = str2;
    obj7.children = closure_13(tmp2(5380).BaseTextButton, obj8);
    return closure_13(navigation, obj7);
  }
  const tmp2Result = balance(1503);
}
const View = fn(17).View;
const CollectiblesShopConstants = fn(1087);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const Constants = fn(1085);
({ MarketingURLs: closure_9, UserSettingsSections: c10 } = Constants);
const RootNavigatorScreen = fn(10636).RootNavigatorScreen;
const PremiumTypes = fn(1392).PremiumTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
const createStyles = fn(5092);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_8,
  },
  purchaseSection: null,
  disclaimer: null,
  buttonContainer: null,
  orbsButtonLabel: null,
  orbsButtonText: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
};
obj2.purchaseSection = { gap: nativeDefault.space.PX_12 };
obj2.disclaimer = { opacity: 0.75 };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj2.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.orbsButtonLabel = { flexDirection: "row", alignItems: "center" };
obj2.orbsButtonText = { flexShrink: 1 };
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GiftButton(product) {
      const cResult = require("c").c(11);
      product = product.product;
      require = product;
      const analyticsLocations = product.analyticsLocations;
      ({ variant, onTrackPress } = product);
      let str = "primary";
      if (undefined !== variant) {
        str = variant;
      }
      if ("primary" === str) {
        let TEXT_STRONG = analyticsLocations(onTrackPress[10]).colors.WHITE;
      } else {
        TEXT_STRONG = analyticsLocations(onTrackPress[10]).colors.TEXT_STRONG;
      }
      if (cResult[0] !== TEXT_STRONG) {
        let obj2 = { size: "md", color: TEXT_STRONG };
        const tmp8 = closure_13(tmp(onTrackPress[13]).GiftIcon, obj2);
        cResult[0] = TEXT_STRONG;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === onTrackPress) {
          if (cResult[4] === product.skuId) {
            let tmp9 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(onTrackPress[16]).intl;
            const stringResult = intl.string(tmp(onTrackPress[16]).t.PEjaCx);
            cResult[6] = stringResult;
            let tmp11 = stringResult;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] === tmp6) {
            if (cResult[8] === tmp9) {
              if (cResult[9] === str) {
                let tmp13 = cResult[10];
              }
              return tmp13;
            }
          }
          let obj3 = { size: "lg", variant: str, icon: tmp6, onPress: tmp9, accessibilityLabel: tmp11 };
          const tmp15 = closure_13(tmp(onTrackPress[17]).IconButton, obj3);
          cResult[7] = tmp6;
          cResult[8] = tmp9;
          cResult[9] = str;
          cResult[10] = tmp15;
          tmp13 = tmp15;
        }
      }
      const fn = function n() {
        if (onTrackPress != null) {
          tmp(constants.SEND_AS_GIFT);
        }
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        openGiftModal.openShopGiftModal({ skuId: product.skuId, analyticsLocations });
        const obj3 = { skuId: product.skuId, analyticsLocations };
      };
      cResult[2] = analyticsLocations;
      cResult[3] = onTrackPress;
      cResult[4] = product.skuId;
      cResult[5] = fn;
      tmp9 = fn;
      let obj = require("c");
    }
  : function GiftButton(onTrackPress) {
      ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
      if (variant === undefined) {
        variant = "primary";
      }
      onTrackPress = onTrackPress.onTrackPress;
      let obj = { size: "lg", variant, icon: null, onPress: null, accessibilityLabel: null };
      if ("primary" === variant) {
        let TEXT_STRONG = require("native").colors.WHITE;
      } else {
        TEXT_STRONG = require("native").colors.TEXT_STRONG;
      }
      obj.icon = closure_13(require("GiftIcon").GiftIcon, { size: "md", color: TEXT_STRONG });
      obj.onPress = function onPress() {
        if (onTrackPress != null) {
          tmp(constants.SEND_AS_GIFT);
        }
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        openGiftModal.openShopGiftModal({ skuId: skuId.skuId, analyticsLocations });
        const obj3 = { skuId: skuId.skuId, analyticsLocations };
      };
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.string(require("util").t.PEjaCx);
      return closure_13(require("IconButton").IconButton, obj);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PurchaseDisclaimer(arg0) {
      const cResult = c.c(6);
      ({ product, buyButtonLabel } = arg0);
      const tmp4 = closure_17();
      if (cResult[0] === buyButtonLabel) {
        if (cResult[1] === product.type) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.disclaimer) {
          if (cResult[4] === tmp5) {
            let tmp8 = cResult[5];
          }
          return tmp8;
        }
        const obj2 = {
          style: tmp4.disclaimer,
          variant: "text-xxs/normal",
          color: "interactive-text-active",
          children: tmp5,
        };
        const tmp10 = map1(Text_Text.Text, obj2);
        cResult[3] = tmp4.disclaimer;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
      if (formatResult) {
        const intl = util.intl;
        const obj3 = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
        formatResult = intl.format(util.t.iIglwJ, obj3);
      }
      cResult[0] = buyButtonLabel;
      cResult[1] = product.type;
      cResult[2] = formatResult;
      tmp5 = formatResult;
    }
  : function PurchaseDisclaimer(arg0) {
      ({ product, buyButtonLabel } = arg0);
      const obj = {
        style: closure_17().disclaimer,
        variant: "text-xxs/normal",
        color: "interactive-text-active",
        children: null,
      };
      let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
      if (formatResult) {
        const intl = util.intl;
        const obj2 = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
        formatResult = intl.format(util.t.iIglwJ, obj2);
      }
      obj.children = formatResult;
      return map1(Text_Text.Text, obj);
    };
ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ProductDetailsActionSheetPurchaseSection(product) {
      const cResult = require("c").c(58);
      product = product.product;
      require = product;
      const analyticsLocations = product.analyticsLocations;
      isBuying = product.isBuying;
      const onStartPurchase = product.onStartPurchase;
      const onTrackPress = product.onTrackPress;
      const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      let tmp4 = isApplying();
      closure_6 = tmp4;
      let obj = require("c");
      const currentUser = require("useCurrentUser").useCurrentUser();
      let obj2 = require("useCurrentUser");
      const productPurchaseState = require("useProductPurchaseState").useProductPurchaseState(product);
      const isPurchased = productPurchaseState.isPurchased;
      const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [closure_6];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== product.skuId) {
        const fn = function c() {
          const items = [CollectiblesPurchaseStore.isClaiming === product.skuId];
          return items;
        };
        cResult[1] = product.skuId;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== product) {
        let items1 = [product];
        cResult[3] = product;
        cResult[4] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[4];
      }
      let obj3 = require("useProductPurchaseState");
      const first1 = onStartPurchase(require("initialize").useStateFromStoresArray(first, tmp9, tmp10), 1)[0];
      const tmpResult = require("initialize");
      isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(isPremiumSubscriber.TIER_2);
      if (cResult[5] !== currentUser) {
        const canUseShopDiscountsResult = analyticsLocations(tmp2[38]).canUseShopDiscounts(currentUser);
        cResult[5] = currentUser;
        cResult[6] = canUseShopDiscountsResult;
        let tmp13 = canUseShopDiscountsResult;
        let obj6 = analyticsLocations(tmp2[38]);
      } else {
        tmp13 = cResult[6];
      }
      const hasShopDiscount = tmp13;
      if (cResult[7] !== product) {
        const result = tmp(tmp2[39]).isPremiumCollectiblesProduct(product);
        cResult[7] = product;
        cResult[8] = result;
        let tmp16 = result;
        const tmpResult12 = tmp(tmp2[39]);
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] !== product) {
        const result1 = tmp(tmp2[39]).isFreeCollectiblesProduct(product);
        cResult[9] = product;
        cResult[10] = result1;
        let tmp18 = result1;
        const tmpResult13 = tmp(tmp2[39]);
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] !== product) {
        const result2 = tmp(tmp2[40]).isOrbsExclusiveProduct(product);
        cResult[11] = product;
        cResult[12] = result2;
        let tmp20 = result2;
        const tmpResult14 = tmp(tmp2[40]);
      } else {
        tmp20 = cResult[12];
      }
      closure_11 = tmp20;
      let tmp22 = tmp18;
      if (!tmp18) {
        let tmp23 = tmp16;
        if (tmp16) {
          tmp23 = isPremiumSubscriber;
        }
        tmp22 = tmp23;
      }
      isPremiumSubscriber = tmp22;
      const tmpResult11 = require("useIsPremiumSubscriber");
      const balance = require("../../virtual_currency/hooks/index.tsx").useFetchVirtualCurrencyBalance().balance;
      const tmpResult15 = require("../../virtual_currency/hooks/index.tsx");
      let obj11 = analyticsLocations(isBuying[42]);
      const tmp25 =
        require("ShopStandalonePdpMobileExperiment").useIsShopStandalonePdpMobileEnabled(
          "product_details_action_sheet",
        ) && !obj11.useNativeIAPPayments().nativePaymentsConnected;
      closure_14 = tmp25;
      const tmpResult16 = require("ShopStandalonePdpMobileExperiment");
      const canAfford = require("useVirtualCurrencyData").useVirtualCurrencyData(product, tmp13).canAfford;
      if (cResult[13] === analyticsLocations) {
        if (cResult[14] === product) {
          if (cResult[15] === stageCollectibleChangeForEditProfile) {
            let tmp26 = cResult[16];
          }
          const handleUseNow1 = tmp(tmp2[44]).useHandleUseNow(tmp26);
          const handleUseNow = handleUseNow1.handleUseNow;
          isApplying = handleUseNow1.isApplying;
          const canUseNow = handleUseNow1.canUseNow;
          const handleEditProfile = handleUseNow1.handleEditProfile;
          if (cResult[17] === product) {
            if (cResult[18] === stageCollectibleChangeForEditProfile) {
              let tmp28 = cResult[19];
            }
            const handleClaim = tmp(tmp2[45]).useHandleClaim(tmp28).handleClaim;
            if (tmp16) {
              tmp16 = !isPremiumSubscriber;
            }
            if (tmp16) {
              tmp16 = !tmp18;
            }
            closure_21 = tmp16;
            const tmpResult19 = tmp(tmp2[45]);
            const canGiftProduct = tmp(tmp2[46]).useCanGiftProduct(product);
            let PX_16 = tmp24(tmp2[47])().bottom;
            if (cResult[20] !== product.type) {
              function getBuyButtonLabel() {
                if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
                  const intl6 = util.intl;
                  let stringResult = intl6.string(util.t.V1AWw0);
                } else if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
                  const intl5 = util.intl;
                  stringResult = intl5.string(util.t.kAeDcK);
                } else if (product.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
                  const intl4 = util.intl;
                  stringResult = intl4.string(util.t.H3vhqU);
                } else if (product.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
                  const intl3 = util.intl;
                  stringResult = intl3.string(util.t.AQ0Veg);
                } else if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
                  const intl2 = util.intl;
                  stringResult = intl2.string(util.t.BlSW1e);
                } else {
                  const intl = util.intl;
                  stringResult = intl.string(util.t.AQ0Veg);
                }
                return stringResult;
              }
              cResult[20] = product.type;
              cResult[21] = getBuyButtonLabel;
              let tmp30 = getBuyButtonLabel;
            } else {
              tmp30 = cResult[21];
            }
            closure_23 = tmp30;
            if (cResult[22] === analyticsLocations) {
              if (cResult[23] === balance) {
                if (cResult[24] === tmp22) {
                  if (cResult[25] === canAfford) {
                    if (cResult[26] === canUseNow) {
                      if (cResult[27] === tmp30) {
                        if (cResult[28] === handleClaim) {
                          if (cResult[29] === handleEditProfile) {
                            if (cResult[30] === handleUseNow) {
                              if (cResult[31] === tmp13) {
                                if (cResult[32] === isApplying) {
                                  if (cResult[33] === tmp25) {
                                    if (cResult[34] === isBuying) {
                                      if (cResult[35] === first1) {
                                        if (cResult[36] === canGiftProduct) {
                                          if (cResult[37] === tmp20) {
                                            if (cResult[38] === isPartiallyOwnedBundle) {
                                              if (cResult[39] === isPurchased) {
                                                if (cResult[40] === onStartPurchase) {
                                                  if (cResult[41] === onTrackPress) {
                                                    if (cResult[42] === product) {
                                                      if (cResult[43] === tmp16) {
                                                        if (cResult[44] === stageCollectibleChangeForEditProfile) {
                                                          if (cResult[45] === tmp4.buttonContainer) {
                                                            if (cResult[46] === tmp4.purchaseSection) {
                                                              let tmp31 = cResult[47];
                                                            }
                                                            if (PX_16 == null) {
                                                              PX_16 = tmp24(tmp2[10]).space.PX_16;
                                                            }
                                                            if (cResult[48] !== PX_16) {
                                                              let obj4 = { paddingBottom: PX_16 };
                                                              cResult[48] = PX_16;
                                                              cResult[49] = obj4;
                                                              let tmp33 = obj4;
                                                            } else {
                                                              tmp33 = cResult[49];
                                                            }
                                                            if (cResult[50] === tmp4.container) {
                                                              if (cResult[51] === tmp33) {
                                                                let tmp34 = cResult[52];
                                                              }
                                                              if (cResult[53] !== tmp31) {
                                                                const tmp31Result = tmp31();
                                                                cResult[53] = tmp31;
                                                                cResult[54] = tmp31Result;
                                                                let tmp35 = tmp31Result;
                                                              } else {
                                                                tmp35 = cResult[54];
                                                              }
                                                              if (cResult[55] === tmp34) {
                                                                if (cResult[56] === tmp35) {
                                                                  let tmp37 = cResult[57];
                                                                }
                                                                return tmp37;
                                                              }
                                                              let obj5 = { style: tmp34, children: tmp35 };
                                                              const tmp40 = balance(
                                                                stageCollectibleChangeForEditProfile,
                                                                obj5,
                                                              );
                                                              cResult[55] = tmp34;
                                                              cResult[56] = tmp35;
                                                              cResult[57] = tmp40;
                                                              tmp37 = tmp40;
                                                            }
                                                            let items2 = [tmp4.container, tmp33];
                                                            cResult[50] = tmp4.container;
                                                            cResult[51] = tmp33;
                                                            cResult[52] = items2;
                                                            tmp34 = items2;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            function children() {
              if (isPurchased) {
                let tmp59Result = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
                if (tmp59Result) {
                  let obj2 = { style: closure_6.buttonContainer, children: null };
                  if (canUseNow) {
                    let obj3 = { loading: isApplying, text: null, onPress: null, size: "lg", grow: true };
                    const intl3 = util.intl;
                    obj3.text = intl3.string(util.t.MAS7uK);
                    obj3.onPress = function onPress() {
                      if (onTrackPress != null) {
                        tmp(isPartiallyOwnedBundle.USE_NOW);
                      }
                      handleUseNow();
                    };
                    let obj4 = obj3;
                  } else {
                    obj4 = { text: null, onPress: null, size: "lg", grow: true };
                    let intl2 = util.intl;
                    obj4.text = intl2.string(util.t["2p2aYz"]);
                    obj4.onPress = function onPress() {
                      if (onTrackPress != null) {
                        tmp(isPartiallyOwnedBundle.EDIT_PROFILE);
                      }
                      handleEditProfile();
                    };
                  }
                  const items = [map1(components_Button_Button.Button, obj4)];
                  let tmp75 = canGiftProduct;
                  if (canGiftProduct) {
                    let obj5 = { product, analyticsLocations, onTrackPress };
                    tmp75 = map1(closure_18, obj5);
                  }
                  items[1] = tmp75;
                  obj2.children = items;
                  tmp59Result = closure_2_14(View, obj2);
                }
                return tmp59Result;
              } else if (closure_21) {
                const obj6 = { onTrackPress };
                return map1(UnlockWithNitroButton.UnlockWithNitroButton, obj6);
              } else if (isPremiumSubscriber) {
                const obj7 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
                let intl = util.intl;
                obj7.text = intl.string(util.t.zp6caO);
                obj7.loading = first1;
                obj7.onPress = function onPress() {
                  if (onTrackPress != null) {
                    tmp(isPartiallyOwnedBundle.ADD_TO_COLLECTION);
                  }
                  handleClaim();
                };
                return map1(components_Button_Button.Button, obj7);
              } else {
                const tmp4 = closure_23();
                let obj = { style: closure_6.purchaseSection, children: null };
                let tmp9 = canAfford;
                if (canAfford) {
                  const obj8 = {
                    product,
                    hasShopDiscount,
                    balance,
                    onTrackPress,
                    stageCollectibleChangeForEditProfile,
                  };
                  tmp9 = map1(VCButton, obj8);
                }
                const items1 = [tmp9, , ,];
                let tmp19Result = !closure_11;
                if (!closure_11) {
                  const obj9 = { style: closure_6.buttonContainer, children: null };
                  const obj10 = {
                    loading: isBuying,
                    text: tmp4,
                    onPress() {
                      if (onTrackPress != null) {
                        tmp(isPartiallyOwnedBundle.BUY_WITH_FIAT);
                      }
                      if (closure_1_14) {
                        const obj2 = product(isBuying[51]);
                        const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj2.isIOS()}`;
                        const obj3 = { tags: { source: "standalone_pdp" } };
                        analyticsLocations(isBuying[50]).captureMessage(
                          `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj2.isIOS()}`} isStable: ${product(isBuying[52]).isStable}`,
                          obj3,
                        );
                        const obj = analyticsLocations(isBuying[50]);
                        const obj5 = { title: null, body: null, hideActionSheet: false };
                        const intl = product(isBuying[16]).intl;
                        obj5.title = intl.string(product(isBuying[16]).t.zrhHH3);
                        const intl2 = product(isBuying[16]).intl;
                        obj5.body = intl2.string(product(isBuying[16]).t.PjfUXe);
                        analyticsLocations(isBuying[53]).show(obj5);
                        const obj4 = analyticsLocations(isBuying[53]);
                      } else {
                        onStartPurchase();
                      }
                    },
                    disabled: null,
                    variant: null,
                    size: "lg",
                    grow: true,
                  };
                  let tmp24 = isPartiallyOwnedBundle;
                  if (!isPartiallyOwnedBundle) {
                    tmp24 = isBuying;
                  }
                  obj10.disabled = tmp24;
                  let str = "primary";
                  let str2 = "primary";
                  if (canAfford) {
                    str2 = "secondary";
                  }
                  obj10.variant = str2;
                  const items2 = [map1(components_Button_Button.Button, obj10)];
                  let tmp26Result = canGiftProduct;
                  if (canGiftProduct) {
                    const obj11 = { product, analyticsLocations, variant: null, onTrackPress: null };
                    if (canAfford) {
                      str = "secondary";
                    }
                    obj11.variant = str;
                    obj11.onTrackPress = onTrackPress;
                    tmp26Result = map1(closure_18, obj11);
                  }
                  items2[1] = tmp26Result;
                  obj9.children = items2;
                  tmp19Result = closure_2_14(View, obj9);
                }
                items1[1] = tmp19Result;
                let tmp31 = !canAfford;
                if (!canAfford) {
                  const obj12 = {
                    product,
                    hasShopDiscount,
                    balance,
                    onTrackPress,
                    stageCollectibleChangeForEditProfile,
                  };
                  tmp31 = map1(VCButton, obj12);
                }
                items1[2] = tmp31;
                let tmp39 = !closure_11;
                if (!closure_11) {
                  const obj13 = { product, buyButtonLabel: tmp4 };
                  tmp39 = map1(closure_20, obj13);
                }
                items1[3] = tmp39;
                obj.children = items1;
                return closure_2_14(View, obj);
              }
            }
            cResult[22] = analyticsLocations;
            cResult[23] = balance;
            cResult[24] = tmp22;
            cResult[25] = canAfford;
            cResult[26] = canUseNow;
            cResult[27] = tmp30;
            cResult[28] = handleClaim;
            cResult[29] = handleEditProfile;
            cResult[30] = handleUseNow;
            cResult[31] = tmp13;
            cResult[32] = isApplying;
            cResult[33] = tmp25;
            cResult[34] = isBuying;
            cResult[35] = first1;
            cResult[36] = canGiftProduct;
            cResult[37] = tmp20;
            cResult[38] = isPartiallyOwnedBundle;
            cResult[39] = isPurchased;
            cResult[40] = onStartPurchase;
            cResult[41] = onTrackPress;
            cResult[42] = product;
            cResult[43] = tmp16;
            cResult[44] = stageCollectibleChangeForEditProfile;
            cResult[45] = tmp4.buttonContainer;
            cResult[46] = tmp4.purchaseSection;
            cResult[47] = children;
            tmp31 = children;
            const tmpResult20 = tmp(tmp2[46]);
          }
          let obj7 = { product, stageCollectibleChangeForEditProfile };
          cResult[17] = product;
          cResult[18] = stageCollectibleChangeForEditProfile;
          cResult[19] = obj7;
          tmp28 = obj7;
          const tmpResult18 = tmp(tmp2[44]);
        }
      }
      let obj8 = { product, analyticsLocations, stageCollectibleChangeForEditProfile };
      cResult[13] = analyticsLocations;
      cResult[14] = product;
      cResult[15] = stageCollectibleChangeForEditProfile;
      cResult[16] = obj8;
      tmp26 = obj8;
    }
  : function ProductDetailsActionSheetPurchaseSection(product) {
      product = product.product;
      require = product;
      ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
      const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      c5 = undefined;
      c6 = undefined;
      const tmp = closure_17();
      const currentUser = require("useCurrentUser").useCurrentUser();
      let obj = require("useCurrentUser");
      const productPurchaseState = require("useProductPurchaseState").useProductPurchaseState(product);
      ({ isPartiallyOwnedBundle, isPurchased } = productPurchaseState);
      let obj2 = require("useProductPurchaseState");
      let items = [c6];
      const items1 = [product];
      let obj3 = require("initialize");
      const isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
      let obj4 = require("useIsPremiumSubscriber");
      const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
      let obj5 = require("PremiumUtils");
      const result = require("CollectiblesUtils").isPremiumCollectiblesProduct(product);
      const obj6 = require("CollectiblesUtils");
      const result1 = require("CollectiblesUtils").isFreeCollectiblesProduct(product);
      const obj7 = require("CollectiblesUtils");
      const result2 = require("CollectiblesProductUtils").isOrbsExclusiveProduct(product);
      const obj8 = require("CollectiblesProductUtils");
      const balance = require("../../virtual_currency/hooks/index.tsx").useFetchVirtualCurrencyBalance().balance;
      const obj9 = require("../../virtual_currency/hooks/index.tsx");
      const nativePaymentsConnected = require("NativePaymentHooks").useNativeIAPPayments().nativePaymentsConnected;
      const obj10 = require("NativePaymentHooks");
      closure_4 = require("ShopStandalonePdpMobileExperiment").useIsShopStandalonePdpMobileEnabled(
        "product_details_action_sheet",
      );
      const obj11 = require("ShopStandalonePdpMobileExperiment");
      const canAfford = require("useVirtualCurrencyData").useVirtualCurrencyData(
        product,
        canUseShopDiscountsResult,
      ).canAfford;
      const obj12 = require("useVirtualCurrencyData");
      const handleUseNow = require("useHandleUseNow").useHandleUseNow({
        product,
        analyticsLocations,
        stageCollectibleChangeForEditProfile,
      });
      ({ handleUseNow: c5, handleEditProfile: c6, isApplying, canUseNow } = handleUseNow);
      const obj13 = require("useHandleUseNow");
      const handleClaim = require("useHandleClaim").useHandleClaim({
        product,
        stageCollectibleChangeForEditProfile,
      }).handleClaim;
      const obj14 = require("useHandleClaim");
      let canGiftProduct = require("useCanGiftProduct").useCanGiftProduct(product);
      let PX_16 = require("useSafeAreaInsets")().bottom;
      const items2 = [tmp.container];
      if (PX_16 == null) {
        PX_16 = require("native").space.PX_16;
      }
      const obj16 = { style: items2, children: null };
      items2[1] = { paddingBottom: PX_16 };
      if (isPurchased) {
        let tmp29Result = product.type !== tmp2(onTrackPress[34]).CollectiblesItemType.EXTERNAL_SKU;
        if (tmp29Result) {
          const obj17 = { style: tmp.buttonContainer, children: null };
          if (canUseNow) {
            const obj18 = { loading: isApplying, text: null, onPress: null, size: "lg", grow: true };
            const intl9 = tmp2(onTrackPress[16]).intl;
            obj18.text = intl9.string(tmp2(onTrackPress[16]).t.MAS7uK);
            obj18.onPress = function onPress() {
              if (onTrackPress != null) {
                tmp(constants.USE_NOW);
              }
              _undefined();
            };
            let obj19 = obj18;
          } else {
            obj19 = { text: null, onPress: null, size: "lg", grow: true };
            const intl8 = tmp2(onTrackPress[16]).intl;
            obj19.text = intl8.string(tmp2(onTrackPress[16]).t["2p2aYz"]);
            obj19.onPress = function onPress() {
              if (onTrackPress != null) {
                tmp(constants.EDIT_PROFILE);
              }
              _undefined2();
            };
          }
          const items3 = [closure_13(tmp2(onTrackPress[48]).Button, obj19)];
          if (canGiftProduct) {
            const obj20 = { product, analyticsLocations, onTrackPress };
            canGiftProduct = closure_13(closure_18, obj20);
          }
          items3[1] = canGiftProduct;
          obj17.children = items3;
          tmp29Result = closure_14(tmp15, obj17);
        }
        let tmp18Result1 = tmp29Result;
      } else {
        if (result) {
          if (!isPremiumSubscriber) {
            if (!result1) {
              const obj21 = { onTrackPress };
              tmp18Result1 = closure_13(tmp2(onTrackPress[49]).UnlockWithNitroButton, obj21);
            }
          }
        }
        if (!result1) {
          if (product.type === tmp2(onTrackPress[34]).CollectiblesItemType.BUNDLE) {
            const intl6 = tmp2(onTrackPress[16]).intl;
            let stringResult = intl6.string(tmp2(onTrackPress[16]).t.V1AWw0);
          } else if (product.type === tmp2(onTrackPress[34]).CollectiblesItemType.PROFILE_EFFECT) {
            const intl5 = tmp2(onTrackPress[16]).intl;
            stringResult = intl5.string(tmp2(onTrackPress[16]).t.kAeDcK);
          } else if (product.type === tmp2(onTrackPress[34]).CollectiblesItemType.NAMEPLATE) {
            const intl4 = tmp2(onTrackPress[16]).intl;
            stringResult = intl4.string(tmp2(onTrackPress[16]).t.H3vhqU);
          } else if (product.type === tmp2(onTrackPress[34]).CollectiblesItemType.AVATAR_DECORATION) {
            const intl3 = tmp2(onTrackPress[16]).intl;
            stringResult = intl3.string(tmp2(onTrackPress[16]).t.AQ0Veg);
          } else if (product.type === tmp2(onTrackPress[34]).CollectiblesItemType.PROFILE_FRAME) {
            let intl2 = tmp2(onTrackPress[16]).intl;
            stringResult = intl2.string(tmp2(onTrackPress[16]).t.BlSW1e);
          } else {
            let intl = tmp2(onTrackPress[16]).intl;
            stringResult = intl.string(tmp2(onTrackPress[16]).t.AQ0Veg);
          }
          const obj22 = { style: tmp.purchaseSection, children: null };
          let tmp14Result5 = canAfford;
          if (canAfford) {
            const obj23 = {
              product,
              hasShopDiscount: canUseShopDiscountsResult,
              balance,
              onTrackPress,
              stageCollectibleChangeForEditProfile,
            };
            tmp14Result5 = closure_13(VCButton, obj23);
          }
          const items4 = [tmp14Result5, , ,];
          let tmp18Result = !result2;
          if (!result2) {
            const obj24 = { style: tmp.buttonContainer, children: null };
            const obj25 = {
              loading: isBuying,
              text: stringResult,
              onPress() {
                if (onTrackPress != null) {
                  tmp(constants.BUY_WITH_FIAT);
                }
                if (closure_4) {
                  if (!nativePaymentsConnected) {
                    const obj2 = PlatformUtils;
                    const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj2.isIOS()}`;
                    const obj3 = { tags: { source: "standalone_pdp" } };
                    SentryUtilsDefault.captureMessage(
                      `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj2.isIOS()}`} isStable: ${ReleaseChannelUtils.isStable}`,
                      obj3,
                    );
                    const obj5 = { title: null, body: null, hideActionSheet: false };
                    const intl = util.intl;
                    obj5.title = intl.string(util.t.zrhHH3);
                    const intl2 = util.intl;
                    obj5.body = intl2.string(util.t.PjfUXe);
                    actions_AlertActionCreatorsDefault.show(obj5);
                  }
                }
                closure_1_1();
              },
              disabled: null,
              variant: null,
              size: "lg",
              grow: true,
            };
            if (!isPartiallyOwnedBundle) {
              isPartiallyOwnedBundle = isBuying;
            }
            obj25.disabled = isPartiallyOwnedBundle;
            let str = "primary";
            let str2 = "primary";
            if (canAfford) {
              str2 = "secondary";
            }
            obj25.variant = str2;
            const items5 = [closure_13(tmp2(onTrackPress[48]).Button, obj25)];
            let tmp14Result6 = canGiftProduct;
            if (canGiftProduct) {
              const obj26 = { product, analyticsLocations, variant: null, onTrackPress: null };
              if (canAfford) {
                str = "secondary";
              }
              obj26.variant = str;
              obj26.onTrackPress = onTrackPress;
              tmp14Result6 = closure_13(closure_18, obj26);
            }
            items5[1] = tmp14Result6;
            obj24.children = items5;
            tmp18Result = closure_14(tmp15, obj24);
          }
          items4[1] = tmp18Result;
          let tmp14Result7 = !canAfford;
          if (!canAfford) {
            const obj27 = {
              product,
              hasShopDiscount: canUseShopDiscountsResult,
              balance,
              onTrackPress,
              stageCollectibleChangeForEditProfile,
            };
            tmp14Result7 = closure_13(VCButton, obj27);
          }
          items4[2] = tmp14Result7;
          let tmp14Result8 = !result2;
          if (!result2) {
            const obj28 = { product, buyButtonLabel: stringResult };
            tmp14Result8 = closure_13(closure_20, obj28);
          }
          items4[3] = tmp14Result8;
          obj22.children = items4;
          tmp18Result1 = closure_14(tmp15, obj22);
        }
        const obj29 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
        const intl7 = tmp2(onTrackPress[16]).intl;
        obj29.text = intl7.string(tmp2(onTrackPress[16]).t.zp6caO);
        obj29.loading = nativePaymentsConnected(
          obj3.useStateFromStoresArray(
            items,
            () => {
              const items = [CollectiblesPurchaseStore.isClaiming === product.skuId];
              return items;
            },
            items1,
          ),
          1,
        )[0];
        obj29.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.ADD_TO_COLLECTION);
          }
          handleClaim();
        };
        tmp18Result1 = closure_13(tmp2(onTrackPress[48]).Button, obj29);
      }
      obj16.children = tmp18Result1;
      return closure_13(c5, obj16);
    };
