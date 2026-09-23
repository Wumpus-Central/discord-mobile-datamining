// === Module 12919: GuildPowerupsRecentActivitySection ===

// Module 12919 (GuildPowerupsRecentActivitySection)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import DateUtils from "DateUtils" /* 4505 */;
import Text_Text from "Text/Text" /* 4823 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7311 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8305 */;
import BoostGemIcon from "BoostGemIcon" /* 9568 */;
import useMaybeGetSortedBoosts from "useMaybeGetSortedBoosts" /* 12920 */;
import BoostTier1Icon from "BoostTier1Icon" /* 12922 */;
import BoostGemSlashIcon2 from "BoostGemSlashIcon" /* 12924 */;
import getBoostRowMessageTextDefault from "getBoostRowMessageText" /* 12926 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4827 */;
import size from "module_2" /* 2 */;

const useMaybeGetSortedBoostsDefault = useMaybeGetSortedBoosts;

function GuildPowerupsRecentActivityRow(row) {
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
}
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
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default function GuildPowerupsRecentActivitySection(guildId) {
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
    const obj4 = { style: tmp4.boostContainer, children: arr.map((row) => closure_1_5(GuildPowerupsRecentActivityRow, { row }, "boost-" + row.boost.id)) };
    items[1] = hasOwnProperty(View, obj4);
    obj2.children = items;
    tmp6Result = timestampProducer(View, obj2);
  }
  return tmp6Result;
};