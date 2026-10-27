// discord_app/modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef4248 from "../HexagonCampaign.messages.js";
import shared from "../../../design/shared.tsx";
import HexagonCampaignUtils from "../HexagonCampaignUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useCountdownDefault from "../../../hooks/useCountdown.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = 60 * DurationsDefault.Millis.SECOND;
let closure_9 = Object.values(fn(4997).HexagonCampaignPerk);
const createStyles = fn(4972);
let obj2 = {
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    paddingHorizontal: nativeDefault.space.PX_6,
    paddingVertical: 3,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  },
  badgeOverlay: null,
  badgeExpressiveDark: null,
  badgeExpressiveLight: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_6,
  paddingVertical: 3,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
};
obj2.badgeOverlay = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_40 };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_40 };
obj2.badgeExpressiveDark = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
let obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
obj2.badgeExpressiveLight = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHexagonCampaignDaysLeft(item) {
      let obj = stateFromStores;
      const cResult = stateFromStores(576).c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          currentUser = currentUser.getCurrentUser();
          let premiumType;
          if (currentUser != null) {
            premiumType = currentUser.premiumType;
          }
          return premiumType;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp3 = items;
        tmp4 = fn;
      } else {
        [tmp3, tmp4] = cResult;
      }
      const obj2 = stateFromStores(576);
      stateFromStores = obj(504).useStateFromStores(tmp3, tmp4);
      if (cResult[2] === item) {
        if (cResult[3] === stateFromStores) {
          const tmp15 = useCountdownDefault(cResult[4], closure_8);
          let num4 = 0;
          if (tmp15.hours > 0) {
            num4 = 1;
          }
          return Math.max(tmp15.days + num4, 1);
        }
      }
      if (null != item) {
        obj = obj(4999);
        let hexagonCampaignPerkCutoffMs = obj.getHexagonCampaignPerkCutoffMs(item, stateFromStores);
      } else {
        const _Math = Math;
        const items1 = [];
        HermesBuiltin.arraySpread(
          closure_9.map((item) => HexagonCampaignUtils.getHexagonCampaignPerkCutoffMs(item, stateFromStores)),
          0,
        );
        const _Math2 = Math;
        hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(items1, Math);
      }
      cResult[2] = item;
      cResult[3] = stateFromStores;
      cResult[4] = hexagonCampaignPerkCutoffMs;
      const objResult = obj(504);
    }
  : function useHexagonCampaignDaysLeft(arg0) {
      _require = arg0;
      let items = [UserStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let premiumType;
        if (currentUser != null) {
          premiumType = currentUser.premiumType;
        }
        return premiumType;
      });
      const items1 = [arg0, stateFromStores];
      const memo = noop.useMemo(() => {
        if (null != closure_0) {
          let hexagonCampaignPerkCutoffMs = HexagonCampaignUtils.getHexagonCampaignPerkCutoffMs(tmp, stateFromStores);
        } else {
          const _Math = Math;
          const items = [];
          HermesBuiltin.arraySpread(
            closure_9.map((item) => closure_0(dependencyMap[11]).getHexagonCampaignPerkCutoffMs(item, stateFromStores)),
            0,
          );
          const _Math2 = Math;
          hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(items, Math);
        }
        return hexagonCampaignPerkCutoffMs;
      }, items1);
      const tmp3 = stateFromStores(7555)(memo, closure_8);
      let num = 0;
      if (tmp3.hours > 0) {
        num = 1;
      }
      return Math.max(tmp3.days + num, 1);
    };
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HexagonCampaignBadge(arg0) {
      const cResult = c.c(23);
      ({ variant, renderIcon: badgeExpressiveLight, text } = arg0);
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      let badgeOverlay = closure_10();
      const theme = native.useThemeContext().theme;
      if (cResult[0] === badgeExpressiveLight) {
        if (cResult[1] === badgeOverlay.badge) {
          if (cResult[2] === badgeOverlay.badgeExpressiveDark) {
            if (cResult[3] === badgeOverlay.badgeExpressiveLight) {
              if (cResult[4] === badgeOverlay.badgeOverlay) {
                if (cResult[5] === theme) {
                  if (cResult[6] === str) {
                    if (cResult[15] === text) {
                      if (cResult[16] === tmp7) {
                        let tmp22 = cResult[17];
                      }
                      if (cResult[18] === tmp4) {
                        if (cResult[19] === tmp5) {
                          if (cResult[20] === tmp6) {
                            if (cResult[21] === tmp22) {
                              let tmp25 = cResult[22];
                            }
                            return tmp25;
                          }
                        }
                      }
                      const obj2 = { style: tmp5, children: null };
                      const items = [tmp6, tmp22];
                      obj2.children = items;
                      const tmp27 = React5(tmp4, obj2);
                      cResult[18] = tmp4;
                      cResult[19] = tmp5;
                      cResult[20] = tmp6;
                      cResult[21] = tmp22;
                      cResult[22] = tmp27;
                      tmp25 = tmp27;
                    }
                    const obj3 = { variant: "text-xxs/semibold", color: cResult[10], children: text };
                    const tmp24 = timestampProducer(Text_Text.Text, obj3);
                    cResult[15] = text;
                    cResult[16] = cResult[10];
                    cResult[17] = tmp24;
                    tmp22 = tmp24;
                  }
                }
              }
            }
          }
        }
      }
      const tmpResult = native;
      const isThemeDarkResult = shared.isThemeDark(theme);
      if ("overlay" === str) {
        const obj4 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
        let obj7 = obj4;
      } else if ("expressive" === str) {
        if (isThemeDarkResult) {
          const obj5 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_DARK, textColor: "text-overlay-dark" };
          let obj6 = obj5;
        } else {
          obj6 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
        }
        obj7 = obj6;
      } else {
        obj7 = { iconColor: nativeDefault.colors.TEXT_DEFAULT, textColor: "text-default" };
      }
      ({ iconColor, textColor } = obj7);
      if ("expressive" !== str) {
        if (cResult[11] === badgeOverlay.badge) {
          if (cResult[12] === tmp14) {
            if (cResult[13] === tmp15) {
              let tmp17 = cResult[14];
            }
            iconColor = badgeExpressiveLight(iconColor);
            cResult[0] = badgeExpressiveLight;
            cResult[1] = badgeOverlay.badge;
            ({ badgeExpressiveDark: tmp3[2], badgeExpressiveLight } = badgeOverlay);
            cResult[3] = badgeExpressiveLight;
            badgeOverlay = badgeOverlay.badgeOverlay;
            cResult[4] = badgeOverlay;
            cResult[5] = theme;
            cResult[6] = str;
            cResult[7] = View;
            cResult[8] = tmp17;
            cResult[9] = iconColor;
            cResult[10] = textColor;
          }
        }
        const items1 = [badgeOverlay.badge, tmp14, tmp15];
        cResult[11] = badgeOverlay.badge;
        cResult[12] = tmp14;
        cResult[13] = tmp15;
        cResult[14] = items1;
        tmp17 = items1;
      }
      const tmpResult2 = shared;
    }
  : function HexagonCampaignBadge(variant) {
      let str = variant.variant;
      if (str === undefined) {
        str = "default";
      }
      ({ renderIcon, text } = variant);
      const tmp = closure_10();
      const obj = native;
      const isThemeDarkResult = shared.isThemeDark(obj.useThemeContext().theme);
      if ("overlay" === str) {
        const obj3 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
        let obj6 = obj3;
      } else if ("expressive" === str) {
        if (isThemeDarkResult) {
          const obj4 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_DARK, textColor: "text-overlay-dark" };
          let obj5 = obj4;
        } else {
          obj5 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
        }
        obj6 = obj5;
      } else {
        obj6 = { iconColor: nativeDefault.colors.TEXT_DEFAULT, textColor: "text-default" };
      }
      const items = [tmp.badge, ,];
      let badgeOverlay = "overlay" === str;
      ({ iconColor, textColor } = obj6);
      if (badgeOverlay) {
        badgeOverlay = tmp.badgeOverlay;
      }
      items[1] = badgeOverlay;
      if ("expressive" !== str) {
        const obj7 = { style: null, children: null };
        items[2] = tmp11;
        obj7.style = items;
        const items1 = [renderIcon(iconColor)];
        const obj8 = { variant: "text-xxs/semibold", color: textColor, children: text };
        items1[1] = timestampProducer(Text_Text.Text, obj8);
        obj7.children = items1;
        return React5(View, obj7);
      }
    };
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function HexagonCampaignDaysLeftBadge(variant) {
      const cResult = c.c(6);
      variant = variant.variant;
      const tmp4 = closure_11(variant.perk);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(color) {
          return closure_1_6(require("ClockIcon").ClockIcon, { size: "xxs", color });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const intl = util.intl;
        const obj2 = { days: tmp4 };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef4248["noGK/D"], obj2);
        cResult[1] = tmp4;
        cResult[2] = formatToPlainStringResult;
        let tmp6 = formatToPlainStringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp6) {
        if (cResult[4] === variant) {
          let tmp9 = cResult[5];
        }
        return tmp9;
      }
      const tmp10 = timestampProducer(closure_12, { variant, renderIcon: first, text: tmp6 });
      cResult[3] = tmp6;
      cResult[4] = variant;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : function HexagonCampaignDaysLeftBadge(variant) {
      const obj = {
        variant: variant.variant,
        renderIcon(color) {
          return closure_1_6(require("ClockIcon").ClockIcon, { size: "xxs", color });
        },
        text: null,
      };
      const intl = util.intl;
      obj.text = intl.formatToPlainString(_modDef4248["noGK/D"], { days: closure_11(variant.perk) });
      return timestampProducer(closure_12, obj);
    };
export const useHexagonCampaignDaysLeft = tmp3;
