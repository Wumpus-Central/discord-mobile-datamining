// discord_app/modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx
import util from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import _modDef3697 from "../intl/SlayerStorefront.messages.js";
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import StorefrontUtils from "../../storefront/StorefrontUtils.tsx";
import getEmbedThemeColorsDefault from "../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import isSocialLayerApplicationDefault from "../../applications/isSocialLayerApplication.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";

const require = globalThis.__r;

require = fn;
const InviteTypes = fn(7418).InviteTypes;
const ReactCompilerGating = fn(558);
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
              stringResult = string(_modDef3697.BKf0MM);
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
export const useFetchSocialLayerStorefrontProductDetailsEmbedApplications = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchSocialLayerStorefrontProductDetailsEmbedApplications(arr) {
      const cResult = require("c").c(7);
      if (cResult[0] !== arr) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(arr, arg1) {
            const iter = arg1.codedLinks[Symbol.iterator]();
            while (iter !== undefined) {
              ({ type, code } = nextResult);
              if (type === closure_0(dependencyMap[12]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                let tmp3Result = closure_0(dependencyMap[13]);
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
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const reduced = arr.reduce(tmp6, []);
        cResult[0] = arr;
        cResult[1] = reduced;
      } else {
        _require = tmp4;
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [SKUStore];
          cResult[3] = items;
          let tmp10 = items;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== cResult[1]) {
          const fn2 = function s() {
            const mapped = closure_0.map((item) => closure_1_5.get(item));
            const found = mapped.filter(GlobalUtils.isNotNullish);
            const items = [...new Set(found.map((applicationId) => applicationId.applicationId))];
            return items;
          };
          const items1 = [tmp4];
          cResult[4] = tmp4;
          cResult[5] = fn2;
          cResult[6] = items1;
          let tmp13 = items1;
          let tmp12 = fn2;
        } else {
          tmp12 = cResult[5];
          tmp13 = cResult[6];
        }
        const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp10, tmp12, tmp13);
        useGetOrFetchApplicationsDefault(stateFromStoresArray);
        const tmpResult = tmp(504);
      }
      const obj = require("c");
      tmp = _require;
    }
  : function useFetchSocialLayerStorefrontProductDetailsEmbedApplications(arg0) {
      _require = arg0;
      let items = [arg0];
      const memo = noop.useMemo(
        () =>
          closure_0.reduce((arr, item) => {
            const iter = item.codedLinks[Symbol.iterator]();
            while (iter !== undefined) {
              ({ type, code } = nextResult);
              if (type === closure_1_0(dependencyMap[12]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                let tmp3Result = closure_1_0(dependencyMap[13]);
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
          }, []),
        items,
      );
      const items1 = [SKUStore];
      const items2 = [memo];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items1,
        () => {
          const mapped = memo.map((item) => closure_1_5.get(item));
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const items = [...new Set(found.map((applicationId) => applicationId.applicationId))];
          return items;
        },
        items2,
      );
      memo(6847)(stateFromStoresArray);
    };
