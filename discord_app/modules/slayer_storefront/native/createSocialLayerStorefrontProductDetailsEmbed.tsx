// === Module 11531: createSocialLayerStorefrontProductDetailsEmbed ===

// Module 11531 (createSocialLayerStorefrontProductDetailsEmbed)
import util from "util" /* 1114 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import _modDef3417 from "module_3417" /* 3417 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7226 */;
import StorefrontUtils from "StorefrontUtils" /* 7231 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10798 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 11532 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import SKUStore from "SKUStore" /* 5510 */;

require = fn;
const PaymentGateways = fn(1074).PaymentGateways;
const InviteTypes = fn(7736).InviteTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme.theme));
  let obj = SKUStore;
  value = SKUStore.get(skuId);
  let applicationId;
  if (value != null) {
    applicationId = value.applicationId;
  }
  const application = ApplicationStore.getApplication(applicationId);
  const tmp3 = getEmbedThemeColorsDefault(theme.theme);
  let result = null != applicationId;
  obj.didFetchingSkuFail(skuId);
  if (result) {
    result = ApplicationStore.isFetchingApplication(applicationId);
  }
  null != applicationId && ApplicationStore.didFetchingApplicationFail(applicationId);
  let name;
  if (application != null) {
    name = application.name;
  }
  if (name == null) {
    const intl = util.intl;
    let str = intl.string(util.t.vyaWs7);
    name = str.toUpperCase();
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (isSocialLayerApplicationDefault(application)) {
          if ("guild" !== guildOrApplication.type) {
            const result1 = StorefrontUtils.isSlayerSkuAvailableOnThisPlatform(value);
            const str4 = SlayerStorefrontUtils.getCardImageURL(value);
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
            const intl2 = util.intl;
            obj.subtitle = intl2.string(util.t.V91tvy);
            obj.subtitleColor = colors.subtitleColor;
            obj.thumbnailUrl = str;
            obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
            const intl3 = util.intl;
            const string = intl3.string;
            if (result1) {
              let stringResult = string(util.t.boqtTA);
            } else {
              stringResult = string(_modDef3417.BKf0MM);
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
  _require = stateFromStores;
  const storeFront = country(first[12]).useNativeIAPPayments().storeFront;
  country = undefined;
  if (storeFront != null) {
    country = storeFront.country;
  }
  let items = [stateFromStores];
  const tmp4 = _slicedToArray(noop.useMemo(() => {
    let items = [[], []];
    return stateFromStores.reduce((acc, item) => {
      [arr, arr2] = acc;
      const iter = item.codedLinks[Symbol.iterator]();
      while (iter !== undefined) {
        ({ type, code } = nextResult);
        if (type === stateFromStores(first[13]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
          arr = arr.push(code.split("-"));
        } else if (type === stateFromStores(first[13]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
          arr = arr2.push(code.split("-"));
        }
        continue;
      }
      const items = [arr, arr2];
      return items;
    }, items);
  }, items), 2);
  first = tmp4[0];
  _slicedToArray = tmp6;
  let items1 = [first, tmp4[1], country];
  const effect = noop.useEffect(() => {
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      first = tmp5[0];
      let tmp7 = first;
      let tmp8 = tmp5[1];
      let isFetchingResult = null != SKUStore.get(first);
      if (!isFetchingResult) {
        isFetchingResult = SKUStore.isFetching(tmp7);
      }
      if (!isFetchingResult) {
        isFetchingResult = SKUStore.didFetchingSkuFail(tmp7);
      }
      if (!isFetchingResult) {
        let obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let obj3 = utils_PlatformUtils;
        obj.withGoogleSkuIds = obj3.isAndroid();
        obj.countryCode = country;
        let obj4 = utils_PlatformUtils;
        let APPLE;
        if (obj4.isIOS()) {
          APPLE = PaymentGateways.APPLE;
        }
        obj.paymentGateway = APPLE;
        let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp8, tmp7, obj);
      }
      continue;
    }
    for (const item10057 of closure_3) {
      let tmp28 = _slicedToArray(item10057, 2);
      let first1 = tmp28[0];
      let tmp30 = first1;
      let tmp31 = tmp28[1];
      let isFetchingResult1 = null != SKUStore.get(first1);
      if (!isFetchingResult1) {
        isFetchingResult1 = SKUStore.isFetching(tmp30);
      }
      if (!isFetchingResult1) {
        isFetchingResult1 = SKUStore.didFetchingSkuFail(tmp30);
      }
      if (!isFetchingResult1) {
        let obj5 = SocialLayerStorefrontActionCreators;
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let obj7 = utils_PlatformUtils;
        obj.withGoogleSkuIds = obj7.isAndroid();
        obj.countryCode = country;
        let obj8 = utils_PlatformUtils;
        let APPLE1;
        if (obj8.isIOS()) {
          APPLE1 = PaymentGateways.APPLE;
        }
        obj.paymentGateway = APPLE1;
        let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp31, tmp30, obj);
      }
      continue;
    }
    tmp2 = first[Symbol.iterator]();
  }, items1);
  let obj = country(first[12]);
  const tmp = country;
  const items2 = [SKUStore];
  const items3 = [tmp4[1], first];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
    const items = [
      ...first.map((item) => {
        [tmp] = item;
        return closure_1_6.get(tmp);
      }),
      ...closure_3.map((item) => {
        [tmp] = item;
        return closure_1_6.get(tmp);
      })
    ];
    const found = items.filter(GlobalUtils.isNotNullish);
    const items1 = [...new Set(found.map((applicationId) => applicationId.applicationId))];
    return items1;
  }, items3);
  tmp(first[18])(stateFromStoresArray);
};