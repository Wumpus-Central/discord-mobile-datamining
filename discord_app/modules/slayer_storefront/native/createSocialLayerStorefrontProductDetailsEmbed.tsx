// discord_app/modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx
import intl4 from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import _modDef3593 from "../intl/SlayerStorefront.messages.js";
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import StorefrontUtils from "../../storefront/StorefrontUtils.tsx";
import Constants from "../../instant_invite/Constants.tsx";
import getEmbedThemeColorsDefault from "../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import isSocialLayerApplicationDefault from "../../applications/isSocialLayerApplication.tsx";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const InviteTypes = Constants.InviteTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let closure_0;
      let tmp10;
      let tmp11;
      let tmp4;
      let tmp8;
      const obj = require("react");
      const cResult = obj.c(7);
      const tmp = _require;
      if (cResult[0] !== arr) {
        let tmp6;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(arr, arg1) {
            let code;
            let type;
            const iter = arg1.codedLinks[Symbol.iterator]();
            const nextResult = iter.next();
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
          tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const reduced = arr.reduce(tmp6, []);
        cResult[0] = arr;
        cResult[1] = reduced;
        tmp4 = reduced;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [SKUStore];
        cResult[3] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp4) {
        const fn2 = function s() {
          const f141056 = (applicationId) => applicationId.applicationId;
          const mapped = closure_0.map((item) => closure_1_5.get(item));
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const items = [...new Set(found.map(f141056))];
          new Set(found.map(f141056));
          return items;
        };
        const items1 = [tmp4];
        cResult[4] = tmp4;
        cResult[5] = fn2;
        cResult[6] = items1;
        tmp11 = items1;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp8, tmp10, tmp11);
      useGetOrFetchApplicationsDefault(stateFromStoresArray);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let items = [arg0];
      const memo = react.useMemo(
        () =>
          closure_0.reduce((arr, item) => {
            let code;
            let type;
            const iter = item.codedLinks[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              ({ type, code } = nextResult);
              if (type === closure_1_0(closure_1_2[12]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                let tmp3Result = closure_1_0(closure_1_2[13]);
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
      const obj = require("get initialized");
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items1,
        () => {
          const f141059 = (applicationId) => applicationId.applicationId;
          const mapped = memo.map((item) => closure_1_5.get(item));
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const items = [...new Set(found.map(f141059))];
          new Set(found.map(f141059));
          return items;
        },
        items2,
      );
      memo(6663)(stateFromStoresArray);
    };
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx",
);

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(
  theme,
) {
  let baseColors;
  let colors;
  let guildOrApplication;
  let intl2;
  let prop;
  let skuId;
  let stringResult;
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme.theme));
  getEmbedThemeColorsDefault(theme.theme);
  const value = SKUStore.get(skuId);
  let applicationId;
  if (value != null) {
    applicationId = value.applicationId;
  }
  const application = ApplicationStore.getApplication(applicationId);
  let result = null != applicationId;
  const isFetchingResult = SKUStore.isFetching(skuId);
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
    const intl = intl4.intl;
    const str = intl.string(intl4.t.vyaWs7);
    name = str.toUpperCase();
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (isSocialLayerApplicationDefault(application)) {
          if ("guild" !== guildOrApplication.type) {
            const obj4 = StorefrontUtils;
            const result1 = obj4.isSlayerSkuAvailableOnThisPlatform(value);
            const obj5 = SlayerStorefrontUtils;
            const str4 = obj5.getCardImageURL(value);
            let str1;
            if (str4 != null) {
              str1 = str4.toString();
            }
            if (str1 == null) {
              str1 = application.getIconURL(64);
            }
            const obj3 = {
              headerText: name,
              headerColor: colors.headerColor,
              titleText: value.name,
              titleColor: colors.titleColor,
              subtitle: intl2.string(intl4.t.V91tvy),
              subtitleColor: colors.subtitleColor,
              thumbnailUrl: str1,
              thumbnailBackgroundColor: colors.thumbnailBackgroundColor,
              acceptLabelText: stringResult,
              acceptLabelColor: prop,
              acceptLabelBackgroundColor: result1
                ? colors.acceptLabelGreenBackgroundColor
                : colors.acceptBlurpleLabelBackgroundColor,
              embedCanBeTapped: true,
              canBeAccepted: true,
              type: InviteTypes.GUILD,
            };
            const merged = Object.assign(baseColors);
            intl2 = intl4.intl;
            const intl3 = intl4.intl;
            const string = intl3.string;
            if (result1) {
              stringResult = string(intl4.t.boqtTA);
            } else {
              stringResult = string(_modDef3593.BKf0MM);
            }
            prop = undefined;
            if (result1) {
              prop = colors.acceptLabelGreenColor;
            }
            return obj3;
          }
        }
      }
      return null;
    }
  }
  const obj6 = { headerText: name, type: InviteTypes.GUILD };
  const merged1 = Object.assign(baseColors);
  ({ resolvingGradientEnd: obj7.resolvingGradientEnd, resolvingGradientStart: obj7.resolvingGradientStart } = colors);
  return obj6;
};
export const useFetchSocialLayerStorefrontProductDetailsEmbedApplications = tmp2;
