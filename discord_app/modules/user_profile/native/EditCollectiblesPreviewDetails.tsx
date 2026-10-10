// discord_app/modules/user_profile/native/EditCollectiblesPreviewDetails.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CollectiblesUtils from "../../collectibles/CollectiblesUtils.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({
  productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 },
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditCollectiblesPreviewDescription(product) {
      let stringResult = dependencyMap;
      const cResult = c.c(22);
      ({ user, purchase, nitroJoinCTA, nitroUpgradeCTA } = product);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function s() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(user);
      let result = CollectiblesUtils.isPremiumCollectiblesProduct(product.product);
      if (!result) {
        result = CollectiblesUtils.isPremiumCollectiblesPurchase(purchase);
        const tmpResult6 = CollectiblesUtils;
      }
      let result1 = !canUseCollectiblesResult;
      if (!canUseCollectiblesResult) {
        result1 = CollectiblesUtils.isPremiumCollectiblesPurchase(purchase);
        const tmpResult7 = CollectiblesUtils;
      }
      if (null != purchase) {
        if (!result1) {
          if (cResult[2] !== purchase) {
            let expiresAt1;
            if (purchase != null) {
              expiresAt1 = purchase.expiresAt;
            }
            let diffAsUnitsResult = null;
            if (null != expiresAt1) {
              const _Date = Date;
              const date = new Date();
              diffAsUnitsResult = DateUtils.diffAsUnits(date, purchase.expiresAt);
              const tmpResult8 = DateUtils;
            }
            let tmp19 = null != diffAsUnitsResult;
            if (tmp19) {
              const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl = util.intl;
              const obj4 = { days: diffAsUnitsResult.days.toString() };
              obj2.children = intl.format(util.t.Io7ozn, obj4);
              tmp19 = hasOwnProperty(Text_Text.Text, obj2);
            }
            cResult[2] = purchase;
            cResult[3] = tmp19;
            let tmp12 = tmp19;
          } else {
            tmp12 = cResult[3];
          }
          if (cResult[4] === stateFromStores) {
            let purchasedAt1;
            if (purchase != null) {
              purchasedAt1 = purchase.purchasedAt;
            }
            if (cResult[5] === purchasedAt1) {
              let tmp22 = cResult[6];
            }
            if (cResult[7] !== tmp22) {
              const obj5 = { variant: "text-sm/medium", color: "text-default", children: tmp22 };
              const tmp28 = hasOwnProperty(Text_Text.Text, obj5);
              cResult[7] = tmp22;
              cResult[8] = tmp28;
              let tmp26 = tmp28;
            } else {
              tmp26 = cResult[8];
            }
            if (cResult[9] === stateFromStores) {
              if (cResult[10] === purchase) {
                let tmp29 = cResult[11];
              }
              if (cResult[12] === tmp12) {
                if (cResult[13] === tmp26) {
                  if (cResult[14] === tmp29) {
                    let tmp33 = cResult[15];
                  }
                  return tmp33;
                }
              }
              const obj6 = { children: null };
              const items1 = [tmp12, tmp26, tmp29];
              obj6.children = items1;
              const tmp36 = React5(timestampProducer, obj6);
              cResult[12] = tmp12;
              cResult[13] = tmp26;
              cResult[14] = tmp29;
              cResult[15] = tmp36;
              tmp33 = tmp36;
            }
            let expiresAt2;
            if (purchase != null) {
              expiresAt2 = purchase.expiresAt;
            }
            let tmp31 = null != expiresAt2;
            if (tmp31) {
              const obj7 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl3 = util.intl;
              const obj8 = { date: null };
              const expiresAt = purchase.expiresAt;
              obj8.date = expiresAt.toLocaleDateString(stateFromStores, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              obj7.children = intl3.format(util.t.eZSTa5, obj8);
              tmp31 = hasOwnProperty(Text_Text.Text, obj7);
            }
            cResult[9] = stateFromStores;
            cResult[10] = purchase;
            cResult[11] = tmp31;
            tmp29 = tmp31;
          }
          const intl2 = util.intl;
          let toLocaleDateStringResult;
          if (purchase != null) {
            const purchasedAt = purchase.purchasedAt;
            toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, {
              month: "long",
              year: "numeric",
            });
          }
          const obj9 = { date: toLocaleDateStringResult };
          const formatResult = intl2.format(util.t.gW9R4B, obj9);
          cResult[4] = stateFromStores;
          let purchasedAt2;
          if (purchase != null) {
            purchasedAt2 = purchase.purchasedAt;
          }
          cResult[5] = purchasedAt2;
          cResult[6] = formatResult;
          tmp22 = formatResult;
        }
      }
      if (result) {
        if (!canUseCollectiblesResult) {
          if (tmp8Result.isPremium(user)) {
            if (cResult[17] !== nitroUpgradeCTA) {
              const obj10 = { variant: "text-sm/medium", color: "text-default", children: nitroUpgradeCTA };
              const tmp45 = hasOwnProperty(Text_Text.Text, obj10);
              cResult[17] = nitroUpgradeCTA;
              cResult[18] = tmp45;
            }
          } else if (cResult[19] !== nitroJoinCTA) {
            const obj11 = { variant: "text-sm/medium", color: "text-default", children: nitroJoinCTA };
            const tmp42 = hasOwnProperty(Text_Text.Text, obj11);
            cResult[19] = nitroJoinCTA;
            cResult[20] = tmp42;
          }
          tmp8Result = PremiumUtilsDefault;
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const obj12 = { variant: "text-sm/medium", color: "text-default", children: null };
          const intl5 = util.intl;
          stringResult = intl5.string(util.t.hmyYK8);
          obj12.children = stringResult;
          const tmp49 = hasOwnProperty(Text_Text.Text, obj12);
          cResult[16] = tmp49;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
          const intl4 = util.intl;
          obj13.children = intl4.string(util.t.fEGjVQ);
          const tmp39 = hasOwnProperty(Text_Text.Text, obj13);
          cResult[21] = tmp39;
          let tmp37 = tmp39;
        } else {
          tmp37 = cResult[21];
        }
        return tmp37;
      }
      const tmpResult5 = CollectiblesUtils;
    }
  : function EditCollectiblesPreviewDescription(arg0) {
      ({ user, purchase } = arg0);
      let stringResult = dependencyMap;
      ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
      const items = [LocaleStore];
      const stateFromStores = initialize.useStateFromStores(items, () => locale.locale);
      const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(user);
      let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
      if (!result) {
        result = CollectiblesUtils.isPremiumCollectiblesPurchase(purchase);
        const tmpResult = CollectiblesUtils;
      }
      let result1 = !canUseCollectiblesResult;
      if (!canUseCollectiblesResult) {
        result1 = CollectiblesUtils.isPremiumCollectiblesPurchase(purchase);
        const tmpResult3 = CollectiblesUtils;
      }
      if (null != purchase) {
        if (!result1) {
          let expiresAt1;
          if (purchase != null) {
            expiresAt1 = purchase.expiresAt;
          }
          let diffAsUnitsResult = null;
          if (null != expiresAt1) {
            const _Date = Date;
            const date = new Date();
            diffAsUnitsResult = DateUtils.diffAsUnits(date, purchase.expiresAt);
            const tmpResult4 = DateUtils;
          }
          let tmp17 = null != diffAsUnitsResult;
          if (tmp17) {
            const obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
            const intl = util.intl;
            const obj5 = { days: diffAsUnitsResult.days.toString() };
            obj4.children = intl.format(util.t.Io7ozn, obj5);
            tmp17 = hasOwnProperty(Text_Text.Text, obj4);
          }
          const items1 = [tmp17, ,];
          const intl2 = util.intl;
          let toLocaleDateStringResult;
          if (purchase != null) {
            const purchasedAt = purchase.purchasedAt;
            toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, {
              month: "long",
              year: "numeric",
            });
          }
          const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
          const obj7 = { date: toLocaleDateStringResult };
          obj6.children = intl2.format(util.t.gW9R4B, obj7);
          items1[1] = hasOwnProperty(Text_Text.Text, obj6);
          let expiresAt2;
          if (purchase != null) {
            expiresAt2 = purchase.expiresAt;
          }
          let tmp19Result = null != expiresAt2;
          if (tmp19Result) {
            const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
            const intl3 = util.intl;
            const obj9 = { date: null };
            const expiresAt = purchase.expiresAt;
            obj9.date = expiresAt.toLocaleDateString(stateFromStores, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric",
            });
            obj8.children = intl3.format(util.t.eZSTa5, obj9);
            tmp19Result = hasOwnProperty(Text_Text.Text, obj8);
          }
          const obj10 = { children: null };
          items1[2] = tmp19Result;
          obj10.children = items1;
          return React5(timestampProducer, obj10);
        }
      }
      if (result) {
        if (canUseCollectiblesResult) {
          const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
          const intl5 = util.intl;
          stringResult = intl5.string(util.t.hmyYK8);
          obj11.children = stringResult;
          let tmp25Result = hasOwnProperty(Text_Text.Text, obj11);
        } else {
          const tmp4Result = PremiumUtilsDefault;
          const Text = Text_Text.Text;
          const obj12 = { variant: "text-sm/medium", color: "text-default", children: null };
          if (isPremiumResult) {
            obj12.children = nitroUpgradeCTA;
            tmp25Result = hasOwnProperty(Text, obj12);
          } else {
            obj12.children = nitroJoinCTA;
            tmp25Result = hasOwnProperty(Text, obj12);
          }
          isPremiumResult = PremiumUtilsDefault.isPremium(user);
        }
      } else {
        const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl4 = util.intl;
        obj13.children = intl4.string(util.t.fEGjVQ);
        return hasOwnProperty(Text_Text.Text, obj13);
      }
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EditCollectiblesPreviewDetails(arg0) {
      const cResult = c.c(12);
      ({ user, previewSkuId, nitroJoinCTA, nitroUpgradeCTA } = arg0);
      const tmp4 = closure_8();
      ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
      if (null != previewSkuId) {
        let name;
        if (product != null) {
          name = product.name;
        }
        if (name == null) {
          let name1;
          if (purchase != null) {
            name1 = purchase.name;
          }
          name = name1;
        }
        if (cResult[0] !== name) {
          const obj2 = { variant: "text-md/bold", color: "text-default", children: name };
          const tmp10 = hasOwnProperty(Text_Text.Text, obj2);
          cResult[0] = name;
          cResult[1] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] === nitroJoinCTA) {
          if (cResult[3] === nitroUpgradeCTA) {
            if (cResult[4] === product) {
              if (cResult[5] === purchase) {
                if (cResult[6] === user) {
                  let tmp11 = cResult[7];
                }
                if (cResult[8] === tmp4.productDetailsContainer) {
                  if (cResult[9] === tmp8) {
                    if (cResult[10] === tmp11) {
                      let tmp15 = cResult[11];
                    }
                    return tmp15;
                  }
                }
                const obj3 = { style: tmp4.productDetailsContainer, children: null };
                const items = [tmp8, tmp11];
                obj3.children = items;
                const tmp18 = React5(View, obj3);
                cResult[8] = tmp4.productDetailsContainer;
                cResult[9] = tmp8;
                cResult[10] = tmp11;
                cResult[11] = tmp18;
                tmp15 = tmp18;
              }
            }
          }
        }
        const obj4 = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
        const tmp14 = hasOwnProperty(closure_9, obj4);
        cResult[2] = nitroJoinCTA;
        cResult[3] = nitroUpgradeCTA;
        cResult[4] = product;
        cResult[5] = purchase;
        cResult[6] = user;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
      return null;
    }
  : function EditCollectiblesPreviewDetails(previewSkuId) {
      previewSkuId = previewSkuId.previewSkuId;
      ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
      const tmp = closure_8();
      ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
      let tmp5Result = null;
      if (null != previewSkuId) {
        if (null != product) {
          const obj = { style: tmp.productDetailsContainer, children: null };
          let name;
          if (product != null) {
            name = product.name;
          }
          if (name == null) {
            let name1;
            if (purchase != null) {
              name1 = purchase.name;
            }
            name = name1;
          }
          const obj2 = { variant: "text-md/bold", color: "text-default", children: name };
          const items = [hasOwnProperty(Text_Text.Text, obj2)];
          const obj3 = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
          items[1] = hasOwnProperty(closure_9, obj3);
          obj.children = items;
          tmp5Result = React5(View, obj);
        } else {
          tmp5Result = null;
        }
      }
      return tmp5Result;
    };
