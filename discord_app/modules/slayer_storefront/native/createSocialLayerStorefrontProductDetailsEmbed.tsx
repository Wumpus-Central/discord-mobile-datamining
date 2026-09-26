// === Module 11024: createSocialLayerStorefrontProductDetailsEmbed ===

// Module 11024 (createSocialLayerStorefrontProductDetailsEmbed)
import util from "util" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import _modDef3585 from "module_3585" /* 3585 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import StorefrontUtils from "StorefrontUtils" /* 6652 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7387 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 11025 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import SKUStore from "SKUStore" /* 5822 */;

const require = globalThis.__r;

require = fn;
const InviteTypes = fn(7155).InviteTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
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
              stringResult = string(_modDef3585.BKf0MM);
            }
            obj3.acceptLabelText = stringResult;
            let prop;
            if (result1) {
              prop = colors.acceptLabelGreenColor;
            }
            obj3.acceptLabelColor = prop;
            obj3.acceptLabelBackgroundColor = result1 ? colors.acceptLabelGreenBackgroundColor : colors.acceptBlurpleLabelBackgroundColor;
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
export const useFetchSocialLayerStorefrontProductDetailsEmbedApplications = function useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores) {
  _require = stateFromStores;
  let items = [stateFromStores];
  const memo = noop.useMemo(() => stateFromStores.reduce((arr, item) => {
    const iter = item.codedLinks[Symbol.iterator]();
    while (iter !== undefined) {
      ({ type, code } = nextResult);
      if (type === stateFromStores(dependencyMap[10]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
        let tmp3Result = stateFromStores(dependencyMap[11]);
        let result = tmp3Result.parseStorefrontCodedLink(code);
        let tmp8 = result;
        let tmp9 = null != result;
        if (tmp9) {
          tmp9 = 1 === tmp8.skuIds.length;
        }
        if (tmp9) {
          arr = arr.push(tmp8.skuIds[0]);
        }
      }
      continue;
    }
    return arr;
  }, []), items);
  const items1 = [SKUStore];
  const items2 = [memo];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const mapped = memo.map((item) => closure_1_5.get(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const items = [...new Set(found.map((applicationId) => applicationId.applicationId))];
    return items;
  }, items2);
  memo(6589)(stateFromStoresArray);
};