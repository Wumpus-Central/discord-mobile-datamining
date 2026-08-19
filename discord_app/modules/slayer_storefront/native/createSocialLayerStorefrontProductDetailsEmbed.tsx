// === Module 10723: createSocialLayerStorefrontProductDetailsEmbed ===

// Module 10723 (createSocialLayerStorefrontProductDetailsEmbed)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3271 */;
import getPrice from "getPrice" /* 7200 */;
import useSKUPrice from "useSKUPrice" /* 7205 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8169 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 10724 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import addApplication from "addApplication" /* 4478 */;
import addSku from "addSku" /* 4521 */;
import { PaymentGateways } from "ME" /* 676 */;
import { InviteTypes } from "InviteSendStates" /* 4371 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme.theme));
  let obj = closure_6;
  const value = closure_6.get(skuId);
  let applicationId;
  if (value != null) {
    applicationId = value.applicationId;
  }
  application = application.getApplication(applicationId);
  const tmp3 = getEmbedThemeColorsDefault(theme.theme);
  let result = null != applicationId;
  obj.didFetchingSkuFail(skuId);
  if (result) {
    result = obj2.isFetchingApplication(applicationId);
  }
  null != applicationId && application.didFetchingApplicationFail(applicationId);
  let name;
  if (application != null) {
    name = application.name;
  }
  if (name == null) {
    const intl = getSystemLocale.intl;
    let str = intl.string(getSystemLocale.t.vyaWs7);
    name = str.toUpperCase();
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (isSocialLayerApplicationDefault(application)) {
          if ("guild" !== guildOrApplication.type) {
            const result1 = useSKUPrice.isSlayerSkuAvailableOnThisPlatform(value);
            const str4 = getPrice.getCardImageURL(value);
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
            const intl2 = getSystemLocale.intl;
            obj.subtitle = intl2.string(getSystemLocale.t.V91tvy);
            obj.subtitleColor = colors.subtitleColor;
            obj.thumbnailUrl = str;
            obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
            const intl3 = getSystemLocale.intl;
            const string = intl3.string;
            if (result1) {
              let stringResult = string(getSystemLocale.t.boqtTA);
            } else {
              stringResult = string(messagesProxyDefault.BKf0MM);
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
  const tmp6 = first(React.useMemo(() => {
    let items = [];
    const items1 = [, ];
    if (isEligibleForSocialLayerStorefrontMobilePurchasing) {
      items1[0] = items;
      items1[1] = [];
      let reduced = stateFromStores.reduce((acc, item, index) => {
        [arr, arr2] = acc;
        const iter = item.codedLinks[Symbol.iterator]();
        while (iter !== undefined) {
          ({ type, code } = nextResult);
          if (type === callback(table[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
            arr = arr.push(code.split("-"));
          } else if (type === callback(table[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
            arr = arr2.push(code.split("-"));
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
      let tmp5 = first(tmp3, 2);
      first = tmp5[0];
      let tmp7 = first;
      let tmp8 = tmp5[1];
      let isFetchingResult = null != closure_1_6.get(first);
      if (!isFetchingResult) {
        isFetchingResult = closure_1_6.isFetching(tmp7);
      }
      if (!isFetchingResult) {
        isFetchingResult = closure_1_6.didFetchingSkuFail(tmp7);
      }
      if (!isFetchingResult) {
        stateFromStores(country[15]);
        let obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let obj3 = stateFromStores(country[16]);
        obj[0] = obj3.isAndroid();
        obj[1] = country;
        let obj4 = stateFromStores(country[16]);
        let APPLE;
        if (obj4.isIOS()) {
          APPLE = PaymentGateways.APPLE;
        }
        obj[2] = APPLE;
        let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp8, tmp7, obj);
      }
      continue;
    }
    for (const item10057 of closure_4) {
      let tmp28 = first(item10057, 2);
      let first1 = tmp28[0];
      let tmp30 = first1;
      let tmp31 = tmp28[1];
      let isFetchingResult1 = null != closure_1_6.get(first1);
      if (!isFetchingResult1) {
        isFetchingResult1 = closure_1_6.isFetching(tmp30);
      }
      if (!isFetchingResult1) {
        isFetchingResult1 = closure_1_6.didFetchingSkuFail(tmp30);
      }
      if (!isFetchingResult1) {
        let obj5 = stateFromStores(country[15]);
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let obj7 = stateFromStores(country[16]);
        obj[0] = obj7.isAndroid();
        obj[1] = country;
        let obj8 = stateFromStores(country[16]);
        let APPLE1;
        if (obj8.isIOS()) {
          APPLE1 = PaymentGateways.APPLE;
        }
        obj[2] = APPLE1;
        let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp31, tmp30, obj);
      }
      continue;
    }
    tmp2 = first[Symbol.iterator]();
  }, items1);
  const obj2 = isEligibleForSocialLayerStorefrontMobilePurchasing(country[13]);
  const items2 = [closure_6];
  const items3 = [tmp6[1], first];
  const stateFromStoresArray = tmp(country[17]).useStateFromStoresArray(items2, () => {
    const items = [
      ...first.map((item, index) => {
        [tmp] = item;
        return store.get(tmp);
      }),
      ...closure_4.map((item, index) => {
        [tmp] = item;
        return store.get(tmp);
      })
    ];
    const found = items.filter(stateFromStores(country[18]).isNotNullish);
    const items1 = [...new Set(found.map((item, index) => item.applicationId))];
    return items1;
  }, items3);
  tmp4(country[19])(stateFromStoresArray);
};