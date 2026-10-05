// discord_app/modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import useMaybeGetSortedBoosts from "../hooks/useMaybeGetSortedBoosts.tsx";
import BoostTier1Icon from "../../../../design/components/Icon/native/redesign/generated/BoostTier1Icon.tsx";
import BoostGemSlashIcon2 from "../../../../design/components/Icon/native/redesign/generated/BoostGemSlashIcon.tsx";
import getBoostRowMessageTextDefault from "../utils/getBoostRowMessageText.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useMaybeGetSortedBoostsDefault = useMaybeGetSortedBoosts;
let guildId;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  sectionContainer: obj2,
  boostContainer: obj3,
  boostRowContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  boostMessage: { flex: 1, flexDirection: "row", alignItems: "center" },
  username: { maxWidth: 170, flexShrink: 1 },
  messageText: { flexShrink: 0 },
  timestamp: { flexShrink: 0 },
};
obj2 = { marginTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (row) {
      let boost;
      let phase;
      let roleColor;
      let roleColorStrings;
      let roleStyle;
      let sortKey;
      let tmp14;
      let tmp15;
      let tmp18;
      let tmp31;
      let username;
      const obj = react;
      const cResult = obj.c(42);
      row = row.row;
      const obj2 = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivityRow");
      ({ boost, phase, sortKey } = row);
      const tmp5 = closure_7();
      const obj3 = useMaybeGetSortedBoosts;
      const getBoostUserConfig = obj3.useGetBoostUserConfig(boost);
      ({ username, roleColor, roleColorStrings } = getBoostUserConfig);
      if (cResult[0] !== sortKey) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const calendarFormat = DateUtils.calendarFormat;
        DateUtils;
        const date = new Date(sortKey);
        cResult[0] = sortKey;
        cResult[1] = calendarFormat(date);
        const calendarFormatResult = calendarFormat(date);
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        class R {
          constructor() {
            return closure_1_4.roleStyle;
          }
        }
        cResult[2] = items;
        cResult[3] = R;
        tmp15 = R;
        tmp14 = items;
      } else {
        tmp14 = cResult[2];
        tmp15 = cResult[3];
      }
      const tmpResult3 = get_initialized;
      const stateFromStores = tmpResult3.useStateFromStores(tmp14, tmp15);
      if (cResult[4] === roleColor) {
        let BoostGemSlashIcon;
        let obj7;
        if (cResult[5] === stateFromStores) {
          tmp18 = cResult[6];
        }
        const tmpResult4 = enhanced_role_colors_EnhancedRoleColorUtils;
        const processColorStringsArray = tmpResult4.useProcessColorStringsArray(roleColorStrings);
        class R {
          constructor() {
            return closure_1_4.roleStyle;
          }
        }
        const isRoleStyleAndRoleColorsEligibleForERC = obj8.useIsRoleStyleAndRoleColorsEligibleForERC(
          boost.guildId,
          boost.userId,
          stateFromStores,
          processColorStringsArray,
        );
        if ("gave" === phase) {
          BoostGemSlashIcon = BoostGemIcon.BoostGemIcon;
        } else if ("expiring" === phase) {
          BoostGemSlashIcon = BoostTier1Icon.BoostTier1Icon;
        } else {
          BoostGemSlashIcon = BoostGemSlashIcon2.BoostGemSlashIcon;
        }
        if (cResult[7] === BoostGemSlashIcon) {
          if (cResult[10] === roleColor) {
            if (cResult[11] === roleColorStrings) {
              if (cResult[14] === tmp18) {
                let tmp34;
                if (cResult[15] === tmp5.username) {
                  tmp34 = cResult[16];
                }
                let tmp35;
                if (isRoleStyleAndRoleColorsEligibleForERC) {
                  tmp35 = processColorStringsArray;
                }
                class R {
                  constructor() {
                    return closure_1_4.roleStyle;
                  }
                }
                const obj4 = {
                  variant: "text-md/medium",
                  color: "interactive-text-active",
                  lineClamp: 1,
                  style: tmp34,
                  gradientColors: tmp35,
                  children: username,
                };
                cResult[17] = tmp35;
                cResult[18] = tmp34;
                cResult[19] = username;
                cResult[20] = hasOwnProperty(Text_Text.Text, obj4);
                const tmp38 = hasOwnProperty(Text_Text.Text, obj4);
              }
              const items1 = [,];
              class R {
                constructor() {
                  return closure_1_4.roleStyle;
                }
              }
              items1[1] = tmp18;
              cResult[14] = tmp18;
              cResult[15] = tmp5.username;
              cResult[16] = items1;
              tmp34 = items1;
            }
          }
          class R {
            constructor() {
              return closure_1_4.roleStyle;
            }
          }
          if (tmp31) {
            tmp31 = null != roleColor;
          }
          if (tmp31) {
            const obj5 = { size: "small", color: roleColor, colors: null };
            class R {
              constructor() {
                return closure_1_4.roleStyle;
              }
            }
            tmp31 = hasOwnProperty(native.RoleDot, obj5);
          }
          cResult[10] = roleColor;
          cResult[11] = roleColorStrings;
          cResult[12] = stateFromStores;
          cResult[13] = tmp31;
        }
        if ("gave" === phase) {
          ({ color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" });
          class R {
            constructor() {
              return closure_1_4.roleStyle;
            }
          }
        } else {
          obj7 = { size: "sm" };
        }
        cResult[7] = BoostGemSlashIcon;
        cResult[8] = phase;
        cResult[9] = hasOwnProperty(BoostGemSlashIcon, obj7);
        const tmp27Result = hasOwnProperty(BoostGemSlashIcon, obj7);
      }
      if ("username" === stateFromStores) {
        let obj10;
        if (null != roleColor) {
          obj10 = { color: roleColor };
          const obj9 = { color: roleColor };
        }
        class R {
          constructor() {
            return closure_1_4.roleStyle;
          }
        }
        cResult[5] = stateFromStores;
        cResult[6] = obj10;
        tmp18 = obj10;
      }
      obj10 = {};
    }
  : (row) => {
      let boost;
      let items1;
      let items2;
      let items3;
      let phase;
      let roleColor;
      let roleColorStrings;
      let roleStyle;
      let sortKey;
      let str5;
      let tmp24;
      let username;
      row = row.row;
      const obj = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivityRow");
      ({ boost, phase, sortKey } = row);
      const tmp4 = closure_7();
      const obj2 = useMaybeGetSortedBoosts;
      const getBoostUserConfig = obj2.useGetBoostUserConfig(boost);
      ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
      const calendarFormat = DateUtils.calendarFormat;
      DateUtils;
      const date = new Date(sortKey);
      const items = [AccessibilityStore];
      const calendarFormatResult = calendarFormat(date);
      const obj3 = get_initialized;
      const stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
      if ("username" === stateFromStores) {
        let BoostGemSlashIcon;
        let obj7;
        const tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
        const processColorStringsArray = tmpResult.useProcessColorStringsArray(roleColorStrings);
        const tmpResult2 = enhanced_role_colors_EnhancedRoleColorUtils;
        const isRoleStyleAndRoleColorsEligibleForERC = tmpResult2.useIsRoleStyleAndRoleColorsEligibleForERC(
          boost.guildId,
          boost.userId,
          stateFromStores,
          processColorStringsArray,
        );
        if ("gave" === phase) {
          BoostGemSlashIcon = BoostGemIcon.BoostGemIcon;
        } else if ("expiring" === phase) {
          BoostGemSlashIcon = BoostTier1Icon.BoostTier1Icon;
        } else {
          BoostGemSlashIcon = BoostGemSlashIcon2.BoostGemSlashIcon;
        }
        const obj5 = { style: tmp4.boostRowContainer, children: items1 };
        if ("gave" === phase) {
          obj7 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
          const obj6 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
        } else {
          obj7 = { size: "sm" };
        }
        items1 = [hasOwnProperty(BoostGemSlashIcon, obj7), ,];
        let tmp20Result = "dot" === stateFromStores && null != roleColor;
        const obj8 = { style: tmp4.boostMessage, children: items2 };
        if (tmp20Result) {
          const obj9 = { size: "small", color: roleColor, colors: roleColorStrings };
          tmp20Result = hasOwnProperty(native.RoleDot, obj9);
        }
        items2 = [tmp20Result, , ,];
        const obj10 = {
          variant: "text-md/medium",
          color: "interactive-text-active",
          lineClamp: 1,
          style: items3,
          gradientColors: tmp24,
          children: username,
        };
        items3 = [tmp4.username, {}];
        tmp24 = undefined;
        const Text = Text_Text.Text;
        if (isRoleStyleAndRoleColorsEligibleForERC) {
          tmp24 = processColorStringsArray;
        }
        items2[1] = hasOwnProperty(Text, obj10);
        items2[2] = hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "interactive-text-active",
          children: " ",
        });
        const obj11 = {
          variant: "text-md/medium",
          lineClamp: 1,
          style: tmp4.messageText,
          children: getBoostRowMessageTextDefault(row),
        };
        const Text2 = Text_Text.Text;
        items2[3] = hasOwnProperty(Text2, obj11);
        items1[1] = metroRequire(View, obj8);
        let str4 = "text-xs/semibold";
        const Text3 = Text_Text.Text;
        if (manaTypeConsolidationExperiment) {
          str4 = "text-xs/medium";
        }
        const obj12 = { variant: str4, color: str5, style: tmp4.timestamp, children: calendarFormatResult };
        str5 = undefined;
        if (manaTypeConsolidationExperiment) {
          str5 = "text-subtle";
        }
        items1[2] = hasOwnProperty(Text3, obj12);
        return metroRequire(View, obj5);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let items;
      let obj = react;
      const cResult = obj.c(13);
      guildId = guildId.guildId;
      const obj2 = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment(
        "GuildPowerupsRecentActivitySection",
      );
      const tmp5 = closure_7();
      const arr = useMaybeGetSortedBoostsDefault(guildId, 10);
      if (0 === arr.length) {
        return null;
      } else {
        let first;
        let tmp9;
        let tmp12;
        let str = "text-subtle";
        const sectionContainer = tmp5.sectionContainer;
        if (manaTypeConsolidationExperiment) {
          str = "text-strong";
        }
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.yM9Krm);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== str) {
          const obj3 = { variant: "heading-lg/semibold", color: str, children: first };
          const tmp11 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[1] = str;
          cResult[2] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[2];
        }
        const boostContainer = tmp5.boostContainer;
        if (cResult[3] !== arr) {
          let tmp13;
          const _Symbol2 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function w(row) {
              const obj = { row };
              return closure_1_5(closure_1_8, obj, "boost-" + row.boost.id);
            };
            cResult[5] = fn;
            tmp13 = fn;
          } else {
            tmp13 = cResult[5];
          }
          const mapped = arr.map(tmp13);
          cResult[3] = arr;
          cResult[4] = mapped;
          tmp12 = mapped;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[6] === tmp5.boostContainer) {
          let tmp15;
          if (cResult[7] === tmp12) {
            tmp15 = cResult[8];
          }
          if (cResult[9] === tmp5.sectionContainer) {
            if (cResult[10] === tmp9) {
              let tmp19;
              if (cResult[11] === tmp15) {
                tmp19 = cResult[12];
              }
              return tmp19;
            }
          }
          const obj4 = { style: sectionContainer, children: items };
          items = [tmp9, tmp15];
          const tmp22 = metroRequire(View, obj4);
          cResult[9] = tmp5.sectionContainer;
          cResult[10] = tmp9;
          cResult[11] = tmp15;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        }
        const obj5 = { style: boostContainer, children: tmp12 };
        const tmp18 = hasOwnProperty(View, obj5);
        cResult[6] = tmp5.boostContainer;
        cResult[7] = tmp12;
        cResult[8] = tmp18;
        tmp15 = tmp18;
      }
    }
  : (guildId) => {
      let intl;
      let items;
      guildId = guildId.guildId;
      let obj = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment(
        "GuildPowerupsRecentActivitySection",
      );
      const tmp4 = closure_7();
      const arr = useMaybeGetSortedBoostsDefault(guildId, 10);
      let tmp6Result = null;
      if (0 !== arr.length) {
        let str = "text-subtle";
        const obj2 = { style: tmp4.sectionContainer, children: items };
        const Text = Text_Text.Text;
        if (manaTypeConsolidationExperiment) {
          str = "text-strong";
        }
        const obj3 = { variant: "heading-lg/semibold", color: str, children: intl.string(intl2.t.yM9Krm) };
        intl = intl2.intl;
        items = [hasOwnProperty(Text, obj3)];
        const obj4 = {
          style: tmp4.boostContainer,
          children: arr.map((row) => {
            const obj = { row };
            return closure_1_5(closure_1_8, obj, "boost-" + row.boost.id);
          }),
        };
        items[1] = hasOwnProperty(View, obj4);
        tmp6Result = metroRequire(View, obj2);
      }
      return tmp6Result;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default tmp4;
