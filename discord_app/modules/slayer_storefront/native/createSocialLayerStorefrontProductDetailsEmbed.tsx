// === Module 11351: createSocialLayerStorefrontProductDetailsEmbed ===

// Module 11351 (createSocialLayerStorefrontProductDetailsEmbed)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getPrice from "getPrice" /* 6081 */;
import useSKUPrice from "useSKUPrice" /* 6086 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7863 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "addApplication" /* 4519 */;
import closure_6 from "addSku" /* 4527 */;
import { PaymentGateways } from "ME" /* 673 */;
import { InviteTypes } from "InviteSendStates" /* 7491 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

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
  const isFetchingResult = obj.isFetching(skuId);
  let result = null != applicationId;
  const tmp3 = getEmbedThemeColorsDefault(theme.theme);
  if (result) {
    result = obj2.isFetchingApplication(applicationId);
  }
  const didFetchingSkuFailResult = obj.didFetchingSkuFail(skuId);
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
        if (tmp(11352)(application)) {
          if ("guild" !== guildOrApplication.type) {
            const result1 = useSKUPrice.isSlayerSkuAvailableOnThisPlatform(value);
            const obj4 = useSKUPrice;
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
            const intl2 = tmp12(1233).intl;
            obj.subtitle = intl2.string(getSystemLocale.t.V91tvy);
            obj.subtitleColor = colors.subtitleColor;
            obj.thumbnailUrl = str;
            obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
            const intl3 = tmp12(1233).intl;
            const string = intl3.string;
            if (result1) {
              let stringResult = string(tmp12(1233).t.boqtTA);
            } else {
              stringResult = string(tmp(3370).BKf0MM);
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
  const storeFront = country(first[12]).useNativeIAPPayments().storeFront;
  country = undefined;
  if (storeFront != null) {
    country = storeFront.country;
  }
  let items = [stateFromStores];
  let tmp4 = callback(React.useMemo(() => {
    let items = [[], []];
    return stateFromStores.reduce((arg0, arg1) => {
      [arr, arr2] = arg0;
      const iter = arg1.codedLinks[Symbol.iterator]();
      while (iter !== undefined) {
        ({ type, code } = nextResult);
        let tmp2 = type;
        let tmp3 = callback;
        let tmp4 = table;
        if (type === callback(table[13]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
          let tmp8 = code;
          arr = arr.push(code.split("-"));
        } else {
          let tmp5 = type;
          if (tmp2 === tmp3(tmp4[13]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
            let tmp6 = code;
            arr = arr2.push(code.split("-"));
          }
        }
        continue;
      }
      const items = [arr, arr2];
      return items;
    }, items);
  }, items), 2);
  first = tmp4[0];
  callback = tmp6;
  let items1 = [first, tmp4[1], country];
  const effect = React.useEffect(() => {
    while (tmp2 !== undefined) {
      let tmp4 = lib;
      let tmp5 = lib(tmp3, 2);
      first = tmp5[0];
      let tmp7 = first;
      let tmp8 = tmp5[1];
      let tmp9 = closure_1_6;
      let isFetchingResult = null != closure_1_6.get(first);
      if (!isFetchingResult) {
        let tmp11 = closure_1_6;
        let tmp12 = first;
        isFetchingResult = closure_1_6.isFetching(tmp7);
      }
      if (!isFetchingResult) {
        let tmp13 = closure_1_6;
        let tmp14 = first;
        isFetchingResult = closure_1_6.didFetchingSkuFail(tmp7);
      }
      if (!isFetchingResult) {
        let tmp15 = stateFromStores;
        let tmp16 = first;
        let obj = stateFromStores(first[14]);
        let tmp17 = tmp8;
        let tmp18 = first;
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let tmp19 = stateFromStores;
        let tmp20 = first;
        let obj3 = stateFromStores(first[15]);
        obj[0] = obj3.isAndroid();
        let tmp21 = country;
        obj[1] = country;
        let tmp22 = stateFromStores;
        let tmp23 = first;
        let obj4 = stateFromStores(first[15]);
        let APPLE;
        if (obj4.isIOS()) {
          let tmp25 = closure_1_7;
          APPLE = closure_1_7.APPLE;
        }
        obj[2] = APPLE;
        let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp8, tmp7, obj);
      }
      continue;
    }
    for (const item10057 of closure_3) {
      let tmp27 = lib;
      let tmp28 = lib(item10057, 2);
      let first1 = tmp28[0];
      let tmp30 = first1;
      let tmp31 = tmp28[1];
      let tmp32 = closure_1_6;
      let isFetchingResult1 = null != closure_1_6.get(first1);
      if (!isFetchingResult1) {
        let tmp34 = closure_1_6;
        let tmp35 = first1;
        isFetchingResult1 = closure_1_6.isFetching(tmp30);
      }
      if (!isFetchingResult1) {
        let tmp36 = closure_1_6;
        let tmp37 = first1;
        isFetchingResult1 = closure_1_6.didFetchingSkuFail(tmp30);
      }
      if (!isFetchingResult1) {
        let tmp38 = stateFromStores;
        let tmp39 = first;
        let obj5 = stateFromStores(first[14]);
        let tmp40 = tmp31;
        let tmp41 = first1;
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let tmp42 = stateFromStores;
        let tmp43 = first;
        let obj7 = stateFromStores(first[15]);
        obj[0] = obj7.isAndroid();
        let tmp44 = country;
        obj[1] = country;
        let tmp45 = stateFromStores;
        let tmp46 = first;
        let obj8 = stateFromStores(first[15]);
        let APPLE1;
        if (obj8.isIOS()) {
          let tmp48 = closure_1_7;
          APPLE1 = closure_1_7.APPLE;
        }
        obj[2] = APPLE1;
        let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp31, tmp30, obj);
      }
      continue;
    }
  }, items1);
  let obj = country(first[12]);
  const tmp = country;
  const items2 = [closure_6];
  const items3 = [tmp4[1], first];
  const stateFromStoresArray = _require(first[16]).useStateFromStoresArray(items2, () => {
    const items = [
      ...first.map((arg0) => {
        [tmp] = arg0;
        return store.get(tmp);
      }),
      ...closure_3.map((arg0) => {
        [tmp] = arg0;
        return store.get(tmp);
      })
    ];
    const found = items.filter(stateFromStores(first[17]).isNotNullish);
    const items1 = [...new Set(found.map((applicationId) => applicationId.applicationId))];
    return items1;
  }, items3);
  tmp(first[18])(stateFromStoresArray);
};