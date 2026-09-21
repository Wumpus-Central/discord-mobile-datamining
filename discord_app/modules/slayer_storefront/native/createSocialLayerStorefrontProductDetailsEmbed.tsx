// discord_app/modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx
import util from "../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import _modDef3548 from "../intl/SlayerStorefront.messages.js";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import StorefrontUtils from "../../storefront/StorefrontUtils.tsx";
import getEmbedThemeColorsDefault from "../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import SocialLayerStorefrontActionCreators from "../SocialLayerStorefrontActionCreators.tsx";
import isSocialLayerApplicationDefault from "../../applications/isSocialLayerApplication.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";

const require = globalThis.__r;

require = fn;
const PaymentGateways = fn(1074).PaymentGateways;
const InviteTypes = fn(7978).InviteTypes;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx",
);

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(
  theme,
) {
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme.theme));
  value = SKUStore.get(skuId);
  let applicationId;
  if (value != null) {
    applicationId = value.applicationId;
  }
  const application = ApplicationStore.getApplication(applicationId);
  const tmp3 = getEmbedThemeColorsDefault(theme.theme);
  let result = null != applicationId;
  SKUStore.didFetchingSkuFail(skuId);
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
    name = intl.string(util.t.vyaWs7).toUpperCase();
    const str = intl.string(util.t.vyaWs7);
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
            let str1;
            if (str4 != null) {
              str1 = str4.toString();
            }
            if (str1 == null) {
              str1 = application.getIconURL(64);
            }
            const obj3 = {};
            const merged = Object.assign(baseColors);
            obj3.headerText = name;
            obj3.headerColor = colors.headerColor;
            obj3.titleText = value.name;
            obj3.titleColor = colors.titleColor;
            const intl2 = util.intl;
            obj3.subtitle = intl2.string(util.t.V91tvy);
            obj3.subtitleColor = colors.subtitleColor;
            obj3.thumbnailUrl = str1;
            obj3.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
            const intl3 = util.intl;
            const string = intl3.string;
            if (result1) {
              let stringResult = string(util.t.boqtTA);
            } else {
              stringResult = string(_modDef3548.BKf0MM);
            }
            obj3.acceptLabelText = stringResult;
            let prop;
            if (result1) {
              prop = colors.acceptLabelGreenColor;
            }
            obj3.acceptLabelColor = prop;
            obj3.acceptLabelBackgroundColor = result1
              ? colors.acceptLabelGreenBackgroundColor
              : colors.acceptBlurpleLabelBackgroundColor;
            obj3.embedCanBeTapped = true;
            obj3.canBeAccepted = true;
            obj3.type = InviteTypes.GUILD;
            return obj3;
          }
        }
      }
      return null;
    }
  }
  const obj6 = {};
  const merged1 = Object.assign(baseColors);
  obj6.headerText = name;
  ({ resolvingGradientEnd: obj7.resolvingGradientEnd, resolvingGradientStart: obj7.resolvingGradientStart } = colors);
  obj6.type = InviteTypes.GUILD;
  return obj6;
};
export const useFetchSocialLayerStorefrontProductDetailsEmbedData =
  function useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores) {
    _require = stateFromStores;
    const mobileStoreFront = country(first[12]).useMobileStoreFront();
    country = undefined;
    if (mobileStoreFront != null) {
      country = mobileStoreFront.country;
    }
    let items = [stateFromStores];
    const tmp5 = _slicedToArray(
      noop.useMemo(() => {
        let items = [[], []];
        return stateFromStores.reduce((acc, item) => {
          [arr, arr2] = acc;
          const iter = item.codedLinks[Symbol.iterator]();
          while (iter !== undefined) {
            ({ type, code } = nextResult);
            if (type === stateFromStores(first[13]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
              let arr3 = arr.push(code.split("-"));
            } else if (type === stateFromStores(first[13]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
              let arr5 = arr2.push(code.split("-"));
            }
            continue;
          }
          const items = [arr, arr2];
          return items;
        }, items);
      }, items),
      2,
    );
    first = tmp5[0];
    _slicedToArray = tmp7;
    let items1 = [first, tmp5[1], country];
    const effect = noop.useEffect(() => {
      while (tmp2 !== undefined) {
        [first, tmp8] = tmp3;
        let tmp7 = first;
        let isFetchingResult = null != SKUStore.get(first);
        if (!isFetchingResult) {
          isFetchingResult = SKUStore.isFetching(tmp7);
        }
        if (!isFetchingResult) {
          isFetchingResult = SKUStore.didFetchingSkuFail(tmp7);
        }
        if (!isFetchingResult) {
          let obj = SocialLayerStorefrontActionCreators;
          let obj2 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
          let obj3 = utils_PlatformUtils;
          obj2.withGoogleSkuIds = obj3.isAndroid();
          obj2.countryCode = country;
          let obj4 = utils_PlatformUtils;
          let APPLE;
          if (obj4.isIOS()) {
            APPLE = PaymentGateways.APPLE;
          }
          obj2.paymentGateway = APPLE;
          let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp8, tmp7, obj2);
        }
        continue;
      }
      for (const item10057 of closure_3) {
        [first1, tmp31] = item10057;
        let tmp30 = first1;
        let isFetchingResult1 = null != SKUStore.get(first1);
        if (!isFetchingResult1) {
          isFetchingResult1 = SKUStore.isFetching(tmp30);
        }
        if (!isFetchingResult1) {
          isFetchingResult1 = SKUStore.didFetchingSkuFail(tmp30);
        }
        if (!isFetchingResult1) {
          let obj5 = SocialLayerStorefrontActionCreators;
          let obj6 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
          let obj7 = utils_PlatformUtils;
          obj6.withGoogleSkuIds = obj7.isAndroid();
          obj6.countryCode = country;
          let obj8 = utils_PlatformUtils;
          let APPLE1;
          if (obj8.isIOS()) {
            APPLE1 = PaymentGateways.APPLE;
          }
          obj6.paymentGateway = APPLE1;
          let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(
            tmp31,
            tmp30,
            obj6,
          );
        }
        continue;
      }
      tmp2 = first[Symbol.iterator]();
    }, items1);
    let obj = country(first[12]);
    const tmp = country;
    const items2 = [SKUStore];
    const items3 = [tmp5[1], first];
    const stateFromStoresArray = require("initialize").useStateFromStoresArray(
      items2,
      () => {
        const items = [
          ...first.map((item) => {
            [tmp] = item;
            return closure_1_6.get(tmp);
          }),
          ...closure_3.map((item) => {
            [tmp] = item;
            return closure_1_6.get(tmp);
          }),
        ];
        const found = items.filter(GlobalUtils.isNotNullish);
        const items1 = [...new Set(found.map((applicationId) => applicationId.applicationId))];
        return items1;
      },
      items3,
    );
    tmp(first[18])(stateFromStoresArray);
  };
