// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators.tsx";
import SocialLayerStorefrontGiftProductDetailsDefault from "SocialLayerStorefrontGiftProductDetails.tsx";
import SocialLayerStorefrontGiftPurchaseSectionDefault from "SocialLayerStorefrontGiftPurchaseSection.tsx";
import react from "../../../../_runtime/00019_react.js";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let skuId;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, PaymentGateways: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (skuId) => {
      let GOOGLE;
      let analyticsLocations;
      let analyticsLocations2;
      let first;
      let giftingOrigin;
      let lockedRecipientUser;
      let onGiftModalDismiss;
      let stateFromStores;
      let tmp10;
      let tmp17;
      let tmp18;
      let tmp7;
      let tmp8;
      let obj = skuId(stateFromStores[5]);
      const cResult = obj.c(45);
      skuId = skuId.skuId;
      ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = skuId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [analyticsLocations2];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== skuId) {
        const fn = function u() {
          return SKUStore.get(skuId);
        };
        const items1 = [skuId];
        cResult[1] = skuId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmp2Result = skuId(stateFromStores[6]);
      stateFromStores = tmp2Result.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] !== analyticsLocations) {
        const items2 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items2, analyticsLocations, 0);
        items2[arraySpreadResult] = giftingOrigin(stateFromStores[7]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
        cResult[4] = analyticsLocations;
        cResult[5] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[5];
      }
      analyticsLocations2 = giftingOrigin(tmp3[8])(tmp10).analyticsLocations;
      const tmp2Result3 = skuId(stateFromStores[9]);
      if (tmp2Result3.isIOS()) {
        GOOGLE = constants.APPLE_ADVANCED_COMMERCE;
        tmp17 = constants;
      } else {
        GOOGLE = constants.GOOGLE;
        tmp17 = constants;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "SocialLayerStorefrontGiftModal" };
        cResult[6] = obj2;
        tmp18 = obj2;
      } else {
        tmp18 = cResult[6];
      }
      const GiftACOMOrderExperiment = tmp2(tmp3[10]).GiftACOMOrderExperiment;
      let enabled = GiftACOMOrderExperiment.useConfig(tmp18).enabled;
      if (cResult[7] === analyticsLocations2) {
        let applicationId;
        const tmp19 = cResult[8];
        if (stateFromStores != null) {
          applicationId = stateFromStores.applicationId;
        }
        if (tmp19 === applicationId) {
          let tmp22;
          if (cResult[9] === skuId) {
            tmp22 = cResult[10];
          }
          giftingOrigin(stateFromStores[13])(tmp22);
          if (null == stateFromStores) {
            return null;
          } else {
            const tmp2Result4 = skuId(stateFromStores[14]);
            if (tmp2Result4.isSocialLayerStorefrontGiftingSupported()) {
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const items3 = [];
                cResult[14] = items3;
              }
              if (enabled) {
                enabled = GOOGLE === tmp17.APPLE_ADVANCED_COMMERCE;
              }
              if (cResult[15] !== skuId) {
                const items4 = [skuId];
                cResult[15] = skuId;
                cResult[16] = items4;
              }
              if (cResult[17] === analyticsLocations2) {
                if (cResult[18] === stateFromStores.applicationId) {
                  if (cResult[19] === stateFromStores.productLine) {
                    if (cResult[20] === stateFromStores.type) {
                      const _Symbol2 = Symbol;
                      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                        const fn2 = function b() {
                          return Promise.resolve(true);
                        };
                        cResult[23] = fn2;
                      }
                      if (cResult[24] !== stateFromStores) {
                        class N {
                          constructor() {
                            return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                          }
                        }
                        cResult[24] = stateFromStores;
                        cResult[25] = N;
                      } else {
                        class N {
                          constructor() {
                            return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                          }
                        }
                      }
                      if (cResult[26] === analyticsLocations2) {
                        class N {
                          constructor() {
                            return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                          }
                        }
                      }
                      class F {
                        constructor(arg0) {
                          let giftOptions;
                          let isPurchaseDisabled;
                          ({ isPurchaseDisabled, giftOptions } = arg0);
                          return jsx(SocialLayerStorefrontGiftPurchaseSectionDefault, {
                            skuId,
                            sku: stateFromStores,
                            isPurchaseDisabled,
                            giftOptions,
                            giftingOrigin,
                            analyticsLocations: analyticsLocations2,
                          });
                        }
                      }
                      cResult[26] = analyticsLocations2;
                      cResult[27] = giftingOrigin;
                      cResult[28] = stateFromStores;
                      cResult[29] = skuId;
                      cResult[30] = F;
                    }
                  }
                }
              }
              tmp32[1] = analyticsLocations2;
              tmp32[3] = skuId;
              ({ type: tmp32[4], productLine: tmp32[5], applicationId: tmp32[6] } = stateFromStores);
              cResult[17] = analyticsLocations2;
              cResult[18] = stateFromStores.applicationId;
              cResult[19] = stateFromStores.productLine;
              cResult[20] = stateFromStores.type;
              cResult[21] = skuId;
              cResult[22] = tmp32;
            } else {
              let tmp25;
              let tmp27;
              class N {
                constructor() {
                  return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                }
              }
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                class N {
                  constructor() {
                    return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                  }
                }
                const stringResult = obj5.string(skuId(stateFromStores[15]).t["JCFN/y"]);
                cResult[11] = stringResult;
                tmp25 = stringResult;
              } else {
                class N {
                  constructor() {
                    return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                  }
                }
              }
              if (cResult[12] !== onGiftModalDismiss) {
                class N {
                  constructor() {
                    return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                  }
                }
                const tmp28 = jsx(giftingOrigin(stateFromStores[16]), { onDismiss: onGiftModalDismiss, title: tmp25 });
                class F {
                  constructor(arg0) {
                    let giftOptions;
                    let isPurchaseDisabled;
                    ({ isPurchaseDisabled, giftOptions } = arg0);
                    return jsx(SocialLayerStorefrontGiftPurchaseSectionDefault, {
                      skuId,
                      sku: stateFromStores,
                      isPurchaseDisabled,
                      giftOptions,
                      giftingOrigin,
                      analyticsLocations: analyticsLocations2,
                    });
                  }
                }
                cResult[13] = tmp28;
                tmp27 = tmp28;
              } else {
                class N {
                  constructor() {
                    return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
                  }
                }
              }
              return tmp27;
            }
          }
        }
      }
      cResult[7] = analyticsLocations2;
      if (stateFromStores != null) {
        class N {
          constructor() {
            return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: stateFromStores });
          }
        }
      }
      class R {
        constructor() {
          let applicationId;
          const tmp = AnalyticsUtilsDefault;
          const track = tmp.track;
          const OPEN_MODAL = constants.OPEN_MODAL;
          const obj = {
            location_stack: analyticsLocations2,
            type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY,
            sku_id: skuId,
            application_id: applicationId,
          };
          applicationId = undefined;
          if (stateFromStores != null) {
            applicationId = stateFromStores.applicationId;
          }
          track(OPEN_MODAL, obj);
        }
      }
      cResult[8] = undefined;
      cResult[9] = skuId;
      cResult[10] = R;
      tmp22 = R;
    }
  : (skuId) => {
      let GOOGLE;
      let analyticsLocations;
      let giftingOrigin;
      let items3;
      let obj5;
      let onGiftModalDismiss;
      let tmp9;
      skuId = skuId.skuId;
      ({ analyticsLocations, onGiftModalDismiss, giftingOrigin } = skuId);
      let stateFromStores;
      let analyticsLocations2;
      const lockedRecipientUser = skuId.lockedRecipientUser;
      let obj = skuId(stateFromStores[6]);
      const items = [analyticsLocations2];
      const items1 = [skuId];
      stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(skuId), items1);
      const items2 = [];
      const tmp6 = giftingOrigin(stateFromStores[8]);
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, analyticsLocations, 0);
      items2[arraySpreadResult] = giftingOrigin(stateFromStores[7]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
      analyticsLocations2 = tmp6(items2).analyticsLocations;
      const obj2 = skuId(stateFromStores[9]);
      if (obj2.isIOS()) {
        GOOGLE = constants.APPLE_ADVANCED_COMMERCE;
        tmp9 = constants;
      } else {
        GOOGLE = constants.GOOGLE;
        tmp9 = constants;
      }
      const GiftACOMOrderExperiment = tmp2(tmp3[10]).GiftACOMOrderExperiment;
      let enabled = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
      giftingOrigin(stateFromStores[13])(() => {
        let applicationId;
        const tmp = AnalyticsUtilsDefault;
        const track = tmp.track;
        const OPEN_MODAL = constants.OPEN_MODAL;
        const obj = {
          location_stack: analyticsLocations2,
          type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY,
          sku_id: skuId,
          application_id: applicationId,
        };
        applicationId = undefined;
        if (stateFromStores != null) {
          applicationId = stateFromStores.applicationId;
        }
        track(OPEN_MODAL, obj);
      });
      let tmp11 = null;
      if (null != stateFromStores) {
        let tmp12Result;
        const tmp2Result = skuId(stateFromStores[14]);
        if (tmp2Result.isSocialLayerStorefrontGiftingSupported()) {
          const NativePaymentContextProvider = tmp2(tmp3[20]).NativePaymentContextProvider;
          ({
            paymentGateway: GOOGLE,
            orderRequired: enabled,
            skuIds: items3,
            isGift: true,
            activeSubscription: null,
            onOrderRetryCancellation: skuId(stateFromStores[12]).closeSocialLayerStorefrontGiftModal,
            checkoutAnalyticsFields: obj5,
            analyticsInitialStep: "gift_customization",
            children: null,
          });
          giftingOrigin(stateFromStores[21]);
          if (enabled) {
            enabled = GOOGLE === tmp9.APPLE_ADVANCED_COMMERCE;
          }
          items3 = [skuId];
          obj5 = {
            is_gift: true,
            location_stack: analyticsLocations2,
            payment_type: "sku",
            sku_id: skuId,
            sku_type: null,
            sku_product_line: null,
            application_id: null,
          };
          ({
            type: obj7.sku_type,
            productLine: obj7.sku_product_line,
            applicationId: obj7.application_id,
          } = stateFromStores);
          tmp12Result = (
            <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>
              {null}
            </NativePaymentContextProvider>
          );
        } else {
          giftingOrigin(stateFromStores[16]);
          const intl = tmp2(tmp3[15]).intl;
          tmp12Result = (
            <tmp5Result2 onDismiss={onGiftModalDismiss} title={intl.string(skuId(stateFromStores[15]).t["JCFN/y"])} />
          );
        }
        tmp11 = tmp12Result;
      }
      return tmp11;
    };
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx");

export default tmp4;
