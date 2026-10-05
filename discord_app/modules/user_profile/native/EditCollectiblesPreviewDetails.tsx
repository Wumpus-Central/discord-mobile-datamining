// discord_app/modules/user_profile/native/EditCollectiblesPreviewDetails.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import intl6 from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CollectiblesUtils from "../../collectibles/CollectiblesUtils.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import react from "../../../../_runtime/00019_react.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({
  productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (product) {
      let Io7ozn;
      let eZSTa5;
      let expiresAt;
      let format;
      let format3;
      let intl4;
      let intl5;
      let items1;
      let locale;
      let nitroJoinCTA;
      let nitroUpgradeCTA;
      let obj4;
      let obj8;
      let purchase;
      let str;
      let tmp37;
      let tmp4;
      let tmp5;
      let user;
      const obj = react2;
      const cResult = obj.c(22);
      ({ user, purchase, nitroJoinCTA, nitroUpgradeCTA } = product);
      product = product.product;
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const obj3 = PremiumUtilsDefault;
      const canUseCollectiblesResult = obj3.canUseCollectibles(user);
      const tmpResult5 = CollectiblesUtils;
      let result = tmpResult5.isPremiumCollectiblesProduct(product);
      if (!result) {
        const tmpResult6 = CollectiblesUtils;
        result = tmpResult6.isPremiumCollectiblesPurchase(purchase);
      }
      let result1 = !canUseCollectiblesResult;
      if (result1) {
        const tmpResult7 = CollectiblesUtils;
        result1 = tmpResult7.isPremiumCollectiblesPurchase(purchase);
      }
      if (null != purchase) {
        if (!result1) {
          let tmp12;
          if (cResult[2] !== purchase) {
            let expiresAt1;
            if (purchase != null) {
              expiresAt1 = purchase.expiresAt;
            }
            let diffAsUnitsResult = null;
            if (null != expiresAt1) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              const diffAsUnits = DateUtils.diffAsUnits;
              DateUtils;
              const date = new Date();
              diffAsUnitsResult = diffAsUnits(date, purchase.expiresAt);
            }
            let tmp18 = null != diffAsUnitsResult;
            if (tmp18) {
              const obj2 = { variant: "text-sm/medium", color: "text-default", children: format(Io7ozn, obj4) };
              const Text = Text_Text.Text;
              const intl = intl6.intl;
              format = intl.format;
              obj4 = { days: str.toString() };
              str = diffAsUnitsResult.days;
              Io7ozn = intl6.t.Io7ozn;
              tmp18 = hasOwnProperty(Text, obj2);
            }
            cResult[2] = purchase;
            cResult[3] = tmp18;
            tmp12 = tmp18;
          } else {
            tmp12 = cResult[3];
          }
          if (cResult[4] === stateFromStores) {
            let tmp22;
            let tmp26;
            let purchasedAt1;
            const tmp20 = cResult[5];
            if (purchase != null) {
              purchasedAt1 = purchase.purchasedAt;
            }
            if (tmp20 === purchasedAt1) {
              tmp22 = cResult[6];
            }
            if (cResult[7] !== tmp22) {
              const obj5 = { variant: "text-sm/medium", color: "text-default", children: tmp22 };
              const tmp28 = hasOwnProperty(Text_Text.Text, obj5);
              cResult[7] = tmp22;
              cResult[8] = tmp28;
              tmp26 = tmp28;
            } else {
              tmp26 = cResult[8];
            }
            if (cResult[9] === stateFromStores) {
              let tmp29;
              if (cResult[10] === purchase) {
                tmp29 = cResult[11];
              }
              if (cResult[12] === tmp12) {
                if (cResult[13] === tmp26) {
                  let tmp33;
                  if (cResult[14] === tmp29) {
                    tmp33 = cResult[15];
                  }
                  return tmp33;
                }
              }
              const obj6 = { children: items1 };
              items1 = [tmp12, tmp26, tmp29];
              const tmp36 = metroImportDefault(metroRequire, obj6);
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
              const obj7 = { variant: "text-sm/medium", color: "text-default", children: format3(eZSTa5, obj8) };
              const Text2 = Text_Text.Text;
              const intl3 = intl6.intl;
              format3 = intl3.format;
              obj8 = {
                date: expiresAt.toLocaleDateString(stateFromStores, {
                  minute: "numeric",
                  hour: "numeric",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }),
              };
              expiresAt = purchase.expiresAt;
              eZSTa5 = intl6.t.eZSTa5;
              tmp31 = hasOwnProperty(Text2, obj7);
            }
            cResult[9] = stateFromStores;
            cResult[10] = purchase;
            cResult[11] = tmp31;
            tmp29 = tmp31;
          }
          const intl2 = intl6.intl;
          const format2 = intl2.format;
          let toLocaleDateStringResult;
          const gW9R4B = intl6.t.gW9R4B;
          if (purchase != null) {
            const purchasedAt = purchase.purchasedAt;
            toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, {
              month: "long",
              year: "numeric",
            });
          }
          const obj9 = { date: toLocaleDateStringResult };
          const format2Result = format2(gW9R4B, obj9);
          cResult[4] = stateFromStores;
          let purchasedAt2;
          if (purchase != null) {
            purchasedAt2 = purchase.purchasedAt;
          }
          cResult[5] = purchasedAt2;
          cResult[6] = format2Result;
          tmp22 = format2Result;
        }
      }
      if (result) {
        let tmp40;
        if (canUseCollectiblesResult) {
          let tmp46;
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-sm/medium", color: "text-default", children: intl5.string(intl6.t.hmyYK8) };
            const Text4 = Text_Text.Text;
            intl5 = intl6.intl;
            const tmp48 = hasOwnProperty(Text4, obj10);
            cResult[16] = tmp48;
            tmp46 = tmp48;
          } else {
            tmp46 = cResult[16];
          }
          tmp40 = tmp46;
        } else {
          const tmp8Result = PremiumUtilsDefault;
          if (tmp8Result.isPremium(user)) {
            let tmp43;
            if (cResult[17] !== nitroUpgradeCTA) {
              const obj11 = { variant: "text-sm/medium", color: "text-default", children: nitroUpgradeCTA };
              const tmp45 = hasOwnProperty(Text_Text.Text, obj11);
              cResult[17] = nitroUpgradeCTA;
              cResult[18] = tmp45;
              tmp43 = tmp45;
            } else {
              tmp43 = cResult[18];
            }
            tmp40 = tmp43;
          } else if (cResult[19] !== nitroJoinCTA) {
            const obj12 = { variant: "text-sm/medium", color: "text-default", children: nitroJoinCTA };
            const tmp42 = hasOwnProperty(Text_Text.Text, obj12);
            cResult[19] = nitroJoinCTA;
            cResult[20] = tmp42;
            tmp40 = tmp42;
          } else {
            tmp40 = cResult[20];
          }
        }
        tmp37 = tmp40;
      } else {
        const _Symbol = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const obj13 = { variant: "text-sm/medium", color: "text-default", children: intl4.string(intl6.t.fEGjVQ) };
          const Text3 = Text_Text.Text;
          intl4 = intl6.intl;
          const tmp39 = hasOwnProperty(Text3, obj13);
          cResult[21] = tmp39;
          tmp37 = tmp39;
        } else {
          tmp37 = cResult[21];
        }
      }
      return tmp37;
    }
  : function (arg0) {
      let Io7ozn;
      let eZSTa5;
      let expiresAt;
      let format;
      let format3;
      let intl4;
      let intl5;
      let locale;
      let nitroJoinCTA;
      let nitroUpgradeCTA;
      let obj5;
      let obj7;
      let obj9;
      let product;
      let purchase;
      let str;
      let tmp23;
      let user;
      ({ user, purchase } = arg0);
      ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
      const items = [LocaleStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      const obj2 = PremiumUtilsDefault;
      const canUseCollectiblesResult = obj2.canUseCollectibles(user);
      const obj3 = CollectiblesUtils;
      let result = obj3.isPremiumCollectiblesProduct(product);
      if (!result) {
        const tmpResult = CollectiblesUtils;
        result = tmpResult.isPremiumCollectiblesPurchase(purchase);
      }
      let result1 = !canUseCollectiblesResult;
      if (result1) {
        const tmpResult3 = CollectiblesUtils;
        result1 = tmpResult3.isPremiumCollectiblesPurchase(purchase);
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
            const self = this;
            const self2 = this;
            const diffAsUnits = DateUtils.diffAsUnits;
            DateUtils;
            const date = new Date();
            diffAsUnitsResult = diffAsUnits(date, purchase.expiresAt);
          }
          let tmp16 = null != diffAsUnitsResult;
          if (tmp16) {
            const obj4 = { variant: "text-sm/medium", color: "text-default", children: format(Io7ozn, obj5) };
            const Text = Text_Text.Text;
            const intl = intl6.intl;
            format = intl.format;
            obj5 = { days: str.toString() };
            str = diffAsUnitsResult.days;
            Io7ozn = intl6.t.Io7ozn;
            tmp16 = hasOwnProperty(Text, obj4);
          }
          const items1 = [tmp16, ,];
          const Text2 = Text_Text.Text;
          const intl2 = intl6.intl;
          const format2 = intl2.format;
          let toLocaleDateStringResult;
          const gW9R4B = intl6.t.gW9R4B;
          if (purchase != null) {
            const purchasedAt = purchase.purchasedAt;
            toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, {
              month: "long",
              year: "numeric",
            });
          }
          const obj6 = { variant: "text-sm/medium", color: "text-default", children: format2(gW9R4B, obj7) };
          obj7 = { date: toLocaleDateStringResult };
          items1[1] = hasOwnProperty(Text2, obj6);
          let expiresAt2;
          if (purchase != null) {
            expiresAt2 = purchase.expiresAt;
          }
          let tmp18Result = null != expiresAt2;
          if (tmp18Result) {
            const obj8 = { variant: "text-sm/medium", color: "text-default", children: format3(eZSTa5, obj9) };
            const Text3 = Text_Text.Text;
            const intl3 = intl6.intl;
            format3 = intl3.format;
            obj9 = {
              date: expiresAt.toLocaleDateString(stateFromStores, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric",
              }),
            };
            expiresAt = purchase.expiresAt;
            eZSTa5 = intl6.t.eZSTa5;
            tmp18Result = hasOwnProperty(Text3, obj8);
          }
          const obj10 = { children: items1 };
          items1[2] = tmp18Result;
          return metroImportDefault(metroRequire, obj10);
        }
      }
      if (result) {
        let tmp25Result;
        if (canUseCollectiblesResult) {
          const obj11 = { variant: "text-sm/medium", color: "text-default", children: intl5.string(intl6.t.hmyYK8) };
          const Text6 = Text_Text.Text;
          intl5 = intl6.intl;
          tmp25Result = hasOwnProperty(Text6, obj11);
        } else {
          const tmp4Result = PremiumUtilsDefault;
          const isPremiumResult = tmp4Result.isPremium(user);
          const Text5 = Text_Text.Text;
          const obj12 = { variant: "text-sm/medium", color: "text-default", children: null };
          if (isPremiumResult) {
            obj12.children = nitroUpgradeCTA;
            tmp25Result = hasOwnProperty(Text5, obj12);
          } else {
            obj12.children = nitroJoinCTA;
            tmp25Result = hasOwnProperty(Text5, obj12);
          }
        }
        tmp23 = tmp25Result;
      } else {
        const obj13 = { variant: "text-sm/medium", color: "text-default", children: intl4.string(intl6.t.fEGjVQ) };
        const Text4 = Text_Text.Text;
        intl4 = intl6.intl;
        tmp23 = hasOwnProperty(Text4, obj13);
      }
      return tmp23;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let nitroJoinCTA;
      let nitroUpgradeCTA;
      let previewSkuId;
      let product;
      let purchase;
      let user;
      const obj = react2;
      const cResult = obj.c(12);
      ({ user, previewSkuId, nitroJoinCTA, nitroUpgradeCTA } = arg0);
      const tmp4 = closure_8();
      ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
      useCollectiblesDataDefault(previewSkuId);
      if (null != previewSkuId) {
        let tmp8;
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
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] === nitroJoinCTA) {
          if (cResult[3] === nitroUpgradeCTA) {
            if (cResult[4] === product) {
              if (cResult[5] === purchase) {
                let tmp11;
                if (cResult[6] === user) {
                  tmp11 = cResult[7];
                }
                if (cResult[8] === tmp4.productDetailsContainer) {
                  if (cResult[9] === tmp8) {
                    let tmp15;
                    if (cResult[10] === tmp11) {
                      tmp15 = cResult[11];
                    }
                    return tmp15;
                  }
                }
                const obj3 = { style: tmp4.productDetailsContainer, children: items };
                items = [tmp8, tmp11];
                const tmp18 = metroImportDefault(View, obj3);
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
  : (previewSkuId) => {
      let items;
      let nitroJoinCTA;
      let nitroUpgradeCTA;
      let product;
      let purchase;
      let user;
      previewSkuId = previewSkuId.previewSkuId;
      ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
      const tmp = closure_8();
      ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
      let tmp5Result = null;
      useCollectiblesDataDefault(previewSkuId);
      if (null != previewSkuId) {
        if (null != product) {
          let name;
          const obj = { style: tmp.productDetailsContainer, children: items };
          const Text = Text_Text.Text;
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
          items = [hasOwnProperty(Text, obj2)];
          const obj3 = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
          items[1] = hasOwnProperty(closure_9, obj3);
          tmp5Result = metroImportDefault(View, obj);
        } else {
          tmp5Result = null;
        }
      }
      return tmp5Result;
    };
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default tmp4;
