import _slicedToArray from "_slicedToArray";
import useGetOrFetchApplications from "useGetOrFetchApplications";
import addApplication from "addApplication";
import addSku from "addSku";
import { PaymentGateways } from "ME";
import { InviteTypes } from "InviteSendStates";

const require = arg1;
let result = require("addApplication").fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
  let baseColors;
  let colors;
  let guildOrApplication;
  let skuId;
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = importDefault(7730)(theme.theme));
  let obj = addSku;
  const value = addSku.get(skuId);
  let applicationId;
  if (value != null) {
    applicationId = value.applicationId;
  }
  application = application.getApplication(applicationId);
  const isFetchingResult = obj.isFetching(skuId);
  let result = null != applicationId;
  const tmp3 = importDefault(7730)(theme.theme);
  if (result) {
    result = obj2.isFetchingApplication(applicationId);
  }
  const didFetchingSkuFailResult = obj.didFetchingSkuFail(skuId);
  let name;
  if (application != null) {
    name = application.name;
  }
  if (name == null) {
    const intl = require(1236) /* getSystemLocale */.intl;
    let str = intl.string(require(1236) /* getSystemLocale */.t.vyaWs7);
    name = str.toUpperCase();
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (tmp(10909)(application)) {
          if ("guild" !== guildOrApplication.type) {
            const result1 = require(5670) /* useSKUPrice */.isSlayerSkuAvailableOnThisPlatform(value);
            const obj4 = require(5670) /* useSKUPrice */;
            const str4 = require(5666) /* getPrice */.getCardImageURL(value);
            str = undefined;
            if (str4 != null) {
              str = str4.toString();
            }
            if (str == null) {
              str = application.getIconURL(64);
            }
            obj = {};
            const merged = Object.assign(baseColors);
            obj.headerText = name;
            obj.headerColor = colors.headerColor;
            obj.titleText = value.name;
            obj.titleColor = colors.titleColor;
            const intl2 = tmp12(1236).intl;
            obj.subtitle = intl2.string(require(1236) /* getSystemLocale */.t.V91tvy);
            obj.subtitleColor = colors.subtitleColor;
            obj.thumbnailUrl = str;
            obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
            const intl3 = tmp12(1236).intl;
            const string = intl3.string;
            if (result1) {
              let stringResult = string(tmp12(1236).t.boqtTA);
            } else {
              stringResult = string(tmp(3163).BKf0MM);
            }
            obj.acceptLabelText = stringResult;
            let prop;
            if (result1) {
              prop = colors.acceptLabelGreenColor;
            }
            obj.acceptLabelColor = prop;
            obj.acceptLabelBackgroundColor = result1 ? colors.acceptLabelGreenBackgroundColor : colors.acceptBlurpleLabelBackgroundColor;
            obj.embedCanBeTapped = true;
            obj.canBeAccepted = true;
            obj.type = InviteTypes.GUILD;
            return obj;
          }
        }
      }
      return null;
    }
  }
  obj = {};
  const merged1 = Object.assign(baseColors);
  obj.headerText = name;
  ({ resolvingGradientEnd: obj7.resolvingGradientEnd, resolvingGradientStart: obj7.resolvingGradientStart } = colors);
  obj.type = InviteTypes.GUILD;
  return obj;
};
export const useFetchSocialLayerStorefrontProductDetailsEmbedData = function useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores) {
  const _require = stateFromStores;
  const isEligibleForSocialLayerStorefrontMobilePurchasing = _require(country[12]).useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "use_fetch_social_layer_storefront_product_details_embed_data" });
  let obj = _require(country[12]);
  const tmp = _require;
  let tmp4 = isEligibleForSocialLayerStorefrontMobilePurchasing;
  const storeFront = isEligibleForSocialLayerStorefrontMobilePurchasing(country[13]).useNativeIAPPayments().storeFront;
  country = undefined;
  if (storeFront != null) {
    country = storeFront.country;
  }
  let items = [isEligibleForSocialLayerStorefrontMobilePurchasing, stateFromStores];
  let tmp6 = first(React.useMemo(() => {
    let items = [];
    const items1 = [, ];
    if (isEligibleForSocialLayerStorefrontMobilePurchasing) {
      items1[0] = items;
      items1[1] = [];
      let reduced = stateFromStores.reduce((arg0, arg1) => {
        let arr;
        let arr2;
        let code;
        let type;
        [arr, arr2] = arg0;
        const iter = arg1.codedLinks[Symbol.iterator]();
        while (iter !== undefined) {
          ({ type, code } = nextResult);
          let tmp2 = type;
          let tmp3 = callback;
          let tmp4 = table;
          if (type === callback(table[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
            let tmp8 = code;
            arr = arr.push(code.split("-"));
          } else {
            let tmp5 = type;
            if (tmp2 === tmp3(tmp4[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
              let tmp6 = code;
              arr = arr2.push(code.split("-"));
            }
          }
          continue;
        }
        const items = [arr, arr2];
        return items;
      }, items1);
    } else {
      items1[0] = items;
      items1[1] = [];
      reduced = items1;
    }
    return reduced;
  }, items), 2);
  first = tmp6[0];
  React = tmp8;
  let items1 = [first, tmp6[1], country];
  const effect = React.useEffect(() => {
    while (tmp2 !== undefined) {
      let tmp4 = first;
      let tmp5 = first(tmp3, 2);
      first = tmp5[0];
      let tmp7 = first;
      let tmp8 = tmp5[1];
      let tmp9 = outer1_6;
      let isFetchingResult = null != outer1_6.get(first);
      if (!isFetchingResult) {
        let tmp11 = outer1_6;
        let tmp12 = first;
        isFetchingResult = outer1_6.isFetching(tmp7);
      }
      if (!isFetchingResult) {
        let tmp13 = outer1_6;
        let tmp14 = first;
        isFetchingResult = outer1_6.didFetchingSkuFail(tmp7);
      }
      if (!isFetchingResult) {
        let tmp15 = stateFromStores;
        let tmp16 = country;
        let obj = stateFromStores(country[15]);
        let tmp17 = tmp8;
        let tmp18 = first;
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let tmp19 = stateFromStores;
        let tmp20 = country;
        let obj3 = stateFromStores(country[16]);
        obj[0] = obj3.isAndroid();
        let tmp21 = country;
        obj[1] = country;
        let tmp22 = stateFromStores;
        let tmp23 = country;
        let obj4 = stateFromStores(country[16]);
        let APPLE;
        if (obj4.isIOS()) {
          let tmp25 = outer1_7;
          APPLE = outer1_7.APPLE;
        }
        obj[2] = APPLE;
        let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp8, tmp7, obj);
      }
      continue;
    }
    for (const item10057 of useGetOrFetchApplications) {
      let tmp27 = first;
      let tmp28 = first(item10057, 2);
      let first1 = tmp28[0];
      let tmp30 = first1;
      let tmp31 = tmp28[1];
      let tmp32 = outer1_6;
      let isFetchingResult1 = null != outer1_6.get(first1);
      if (!isFetchingResult1) {
        let tmp34 = outer1_6;
        let tmp35 = first1;
        isFetchingResult1 = outer1_6.isFetching(tmp30);
      }
      if (!isFetchingResult1) {
        let tmp36 = outer1_6;
        let tmp37 = first1;
        isFetchingResult1 = outer1_6.didFetchingSkuFail(tmp30);
      }
      if (!isFetchingResult1) {
        let tmp38 = stateFromStores;
        let tmp39 = country;
        let obj5 = stateFromStores(country[15]);
        let tmp40 = tmp31;
        let tmp41 = first1;
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let tmp42 = stateFromStores;
        let tmp43 = country;
        let obj7 = stateFromStores(country[16]);
        obj[0] = obj7.isAndroid();
        let tmp44 = country;
        obj[1] = country;
        let tmp45 = stateFromStores;
        let tmp46 = country;
        let obj8 = stateFromStores(country[16]);
        let APPLE1;
        if (obj8.isIOS()) {
          let tmp48 = outer1_7;
          APPLE1 = outer1_7.APPLE;
        }
        obj[2] = APPLE1;
        let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp31, tmp30, obj);
      }
      continue;
    }
  }, items1);
  const obj2 = isEligibleForSocialLayerStorefrontMobilePurchasing(country[13]);
  const items2 = [addSku];
  const items3 = [tmp6[1], first];
  const stateFromStoresArray = tmp(country[17]).useStateFromStoresArray(items2, () => {
    const items = [
      ...first.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return store.get(tmp);
      }),
      ...useGetOrFetchApplications.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return store.get(tmp);
      })
    ];
    const found = items.filter(stateFromStores(country[18]).isNotNullish);
    const items1 = [...new Set(found.map((applicationId) => applicationId.applicationId))];
    return items1;
  }, items3);
  tmp4(country[19])(stateFromStoresArray);
};