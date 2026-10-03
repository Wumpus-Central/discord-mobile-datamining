// === Module 12238: GuildPowerupsRecentActivitySection ===

// Module 12238 (GuildPowerupsRecentActivitySection)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import DateUtils from "DateUtils" /* 4552 */;
import BoostGemIcon from "BoostGemIcon" /* 4826 */;
import Text_Text from "Text/Text" /* 4886 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6470 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7620 */;
import useMaybeGetSortedBoosts from "useMaybeGetSortedBoosts" /* 12239 */;
import BoostTier1Icon from "BoostTier1Icon" /* 12241 */;
import BoostGemSlashIcon2 from "BoostGemSlashIcon" /* 12243 */;
import getBoostRowMessageTextDefault from "getBoostRowMessageText" /* 12245 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useMaybeGetSortedBoostsDefault = useMaybeGetSortedBoosts;

const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { sectionContainer: { marginTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, boostContainer: null, boostRowContainer: null, boostMessage: null, username: null, messageText: null, timestamp: null };
let obj2 = { marginTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.boostContainer = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_16 };
obj.boostRowContainer = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.boostMessage = { flex: 1, flexDirection: "row", alignItems: "center" };
obj.username = { maxWidth: 170, flexShrink: 1 };
obj.messageText = { flexShrink: 0 };
obj.timestamp = { flexShrink: 0 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((row) => {
  const cResult = c.c(42);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivityRow");
  ({ boost, phase, sortKey } = row.row);
  const tmp5 = closure_7();
  const getBoostUserConfig = useMaybeGetSortedBoosts.useGetBoostUserConfig(boost);
  ({ username, roleColor, roleColorStrings } = getBoostUserConfig);
  if (cResult[0] !== sortKey) {
    const _Date = Date;
    const date = new Date(sortKey);
    const calendarFormatResult = DateUtils.calendarFormat(date);
    cResult[0] = sortKey;
    cResult[1] = calendarFormatResult;
    const tmpResult = DateUtils;
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
    let tmp16 = R;
    let tmp15 = items;
  } else {
    tmp15 = cResult[2];
    tmp16 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp15, tmp16);
  if (cResult[4] === roleColor) {
    if (cResult[5] === stateFromStores) {
      const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(roleColorStrings);
      class R {
        constructor() {
          return closure_1_4.roleStyle;
        }
      }
      const isRoleStyleAndRoleColorsEligibleForERC = obj8.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
      if ("gave" === phase) {
        let BoostGemSlashIcon = BoostGemIcon.BoostGemIcon;
      } else if ("expiring" === phase) {
        BoostGemSlashIcon = BoostTier1Icon.BoostTier1Icon;
      } else {
        BoostGemSlashIcon = BoostGemSlashIcon2.BoostGemSlashIcon;
      }
      if (cResult[7] === BoostGemSlashIcon) {
        if (cResult[8] === phase) {
          if (cResult[10] === roleColor) {
            if (cResult[11] === roleColorStrings) {
              if (cResult[14] === tmp19) {
                if (cResult[15] === tmp5.username) {
                  let tmp37 = cResult[16];
                }
                let tmp38;
                if (isRoleStyleAndRoleColorsEligibleForERC) {
                  tmp38 = processColorStringsArray;
                }
                class R {
                  constructor() {
                    return closure_1_4.roleStyle;
                  }
                }
                const obj4 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: tmp37, gradientColors: tmp38, children: username };
                const tmp41 = hasOwnProperty(Text_Text.Text, obj4);
                cResult[17] = tmp38;
                cResult[18] = tmp37;
                cResult[19] = username;
                cResult[20] = tmp41;
              }
              const items1 = [, ];
              class R {
                constructor() {
                  return closure_1_4.roleStyle;
                }
              }
              items1[1] = tmp19;
              cResult[14] = tmp19;
              cResult[15] = tmp5.username;
              cResult[16] = items1;
              tmp37 = items1;
            }
          }
          class R {
            constructor() {
              return closure_1_4.roleStyle;
            }
          }
          if (tmp34) {
            tmp34 = null != roleColor;
          }
          if (tmp34) {
            const obj5 = { size: "small", color: roleColor, colors: null };
            class R {
              constructor() {
                return closure_1_4.roleStyle;
              }
            }
            tmp34 = hasOwnProperty(native.RoleDot, obj5);
          }
          cResult[10] = roleColor;
          cResult[11] = roleColorStrings;
          cResult[12] = stateFromStores;
          cResult[13] = tmp34;
        }
      }
      if ("gave" === phase) {
        { color: null, size: "sm" }.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
        class R {
          constructor() {
            return closure_1_4.roleStyle;
          }
        }
        const obj6 = { color: null, size: "sm" };
      } else {
        const obj7 = { size: "sm" };
      }
      const tmp29Result = hasOwnProperty(BoostGemSlashIcon, obj7);
      cResult[7] = BoostGemSlashIcon;
      cResult[8] = phase;
      cResult[9] = tmp29Result;
      const tmpResult4 = enhanced_role_colors_EnhancedRoleColorUtils;
    }
  }
  if ("username" !== stateFromStores) {
    let obj9 = {};
    cResult[4] = roleColor;
    class R {
      constructor() {
        return closure_1_4.roleStyle;
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = obj9;
  }
  obj9 = { color: roleColor };
  const tmpResult3 = initialize;
}) : ((row) => {
  row = row.row;
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivityRow");
  ({ boost, phase, sortKey } = row);
  const tmp4 = closure_7();
  const getBoostUserConfig = useMaybeGetSortedBoosts.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  const obj3 = DateUtils;
  const date = new Date(sortKey);
  const calendarFormatResult = obj3.calendarFormat(new Date(sortKey));
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      const obj5 = { color: roleColor };
    }
    const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(roleColorStrings);
    const tmpResult2 = enhanced_role_colors_EnhancedRoleColorUtils;
    const isRoleStyleAndRoleColorsEligibleForERC = tmpResult2.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = BoostGemIcon.BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = BoostTier1Icon.BoostTier1Icon;
    } else {
      BoostGemSlashIcon = BoostGemSlashIcon2.BoostGemSlashIcon;
    }
    const obj6 = { style: tmp4.boostRowContainer, children: null };
    if ("gave" === phase) {
      const obj7 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      let obj8 = obj7;
    } else {
      obj8 = { size: "sm" };
    }
    const items1 = [hasOwnProperty(BoostGemSlashIcon, obj8), , ];
    const obj9 = { style: tmp4.boostMessage, children: null };
    let tmp19Result = "dot" === stateFromStores;
    if (tmp19Result) {
      tmp19Result = null != roleColor;
    }
    if (tmp19Result) {
      const obj10 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp19Result = hasOwnProperty(native.RoleDot, obj10);
    }
    const items2 = [tmp19Result, , , ];
    const obj11 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: null, gradientColors: null, children: null };
    const items3 = [tmp4.username, {}];
    obj11.style = items3;
    let tmp23;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp23 = processColorStringsArray;
    }
    obj11.gradientColors = tmp23;
    obj11.children = username;
    items2[1] = hasOwnProperty(Text_Text.Text, obj11);
    items2[2] = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    const obj12 = { variant: "text-md/medium", lineClamp: 1, style: tmp4.messageText, children: getBoostRowMessageTextDefault(row) };
    items2[3] = hasOwnProperty(Text_Text.Text, obj12);
    obj9.children = items2;
    items1[1] = timestampProducer(View, obj9);
    let str4 = "text-xs/semibold";
    if (manaTypeConsolidationExperiment) {
      str4 = "text-xs/medium";
    }
    const obj13 = { variant: str4, color: null, style: null, children: null };
    let str5;
    if (manaTypeConsolidationExperiment) {
      str5 = "text-subtle";
    }
    obj13.color = str5;
    obj13.style = tmp4.timestamp;
    obj13.children = calendarFormatResult;
    items1[2] = hasOwnProperty(Text_Text.Text, obj13);
    obj6.children = items1;
    return timestampProducer(View, obj6);
  }
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj3 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = c.c(13);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivitySection");
  const tmp5 = closure_7();
  const arr = useMaybeGetSortedBoostsDefault(guildId.guildId, 10);
  if (0 === arr.length) {
    return null;
  } else {
    let str = "text-subtle";
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.yM9Krm);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== str) {
      const obj3 = { variant: "heading-lg/semibold", color: str, children: first };
      const tmp11 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[1] = str;
      cResult[2] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== arr) {
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function w(row) {
          return closure_1_5(closure_1_8, { row }, "boost-" + row.boost.id);
        };
        cResult[5] = fn;
        let tmp14 = fn;
      } else {
        tmp14 = cResult[5];
      }
      const mapped = arr.map(tmp14);
      cResult[3] = arr;
      cResult[4] = mapped;
    } else {
      if (cResult[6] === tmp5.boostContainer) {
        if (cResult[7] === tmp13) {
          let tmp17 = cResult[8];
        }
        if (cResult[9] === tmp5.sectionContainer) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp17) {
              let tmp21 = cResult[12];
            }
            return tmp21;
          }
        }
        const obj4 = { style: tmp5.sectionContainer, children: null };
        const items = [tmp9, tmp17];
        obj4.children = items;
        const tmp24 = timestampProducer(View, obj4);
        cResult[9] = tmp5.sectionContainer;
        cResult[10] = tmp9;
        cResult[11] = tmp17;
        cResult[12] = tmp24;
        tmp21 = tmp24;
      }
      const obj5 = { style: tmp12, children: cResult[4] };
      const tmp20 = hasOwnProperty(View, obj5);
      cResult[6] = tmp5.boostContainer;
      cResult[7] = cResult[4];
      cResult[8] = tmp20;
      tmp17 = tmp20;
    }
  }
}) : ((guildId) => {
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivitySection");
  const tmp4 = closure_7();
  const arr = useMaybeGetSortedBoostsDefault(guildId.guildId, 10);
  let tmp6Result = null;
  if (0 !== arr.length) {
    const obj2 = { style: tmp4.sectionContainer, children: null };
    let str = "text-subtle";
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    const obj3 = { variant: "heading-lg/semibold", color: str, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.yM9Krm);
    const items = [hasOwnProperty(Text_Text.Text, obj3), ];
    const obj4 = { style: tmp4.boostContainer, children: arr.map((row) => closure_1_5(closure_1_8, { row }, "boost-" + row.boost.id)) };
    items[1] = hasOwnProperty(View, obj4);
    obj2.children = items;
    tmp6Result = timestampProducer(View, obj2);
  }
  return tmp6Result;
});