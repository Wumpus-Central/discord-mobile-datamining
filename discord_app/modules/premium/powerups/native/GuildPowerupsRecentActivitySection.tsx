// === Module 12579: GuildPowerupsRecentActivitySection ===

// Module 12579 (GuildPowerupsRecentActivitySection)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import DateUtils from "DateUtils" /* 4242 */;
import Text_Text from "Text/Text" /* 4556 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7961 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 8095 */;
import BoostGemIcon from "BoostGemIcon" /* 9375 */;
import useMaybeGetSortedBoosts from "useMaybeGetSortedBoosts" /* 12580 */;
import BoostTier1Icon from "BoostTier1Icon" /* 12582 */;
import BoostGemSlashIcon2 from "BoostGemSlashIcon" /* 12584 */;
import getBoostRowMessageTextDefault from "getBoostRowMessageText" /* 12586 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const useMaybeGetSortedBoostsDefault = useMaybeGetSortedBoosts;

function GuildPowerupsRecentActivityRow(row) {
  row = row.row;
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivityRow");
  ({ boost, phase, sortKey } = row);
  const tmp4 = closure_7();
  let obj1 = useMaybeGetSortedBoosts;
  const getBoostUserConfig = obj1.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  let obj2 = DateUtils;
  const date = new Date(sortKey);
  let obj3 = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      obj = { color: roleColor };
    }
    let tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
    const processColorStringsArray = tmpResult.useProcessColorStringsArray(roleColorStrings);
    tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
    const isRoleStyleAndRoleColorsEligibleForERC = tmpResult.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = BoostGemIcon.BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = BoostTier1Icon.BoostTier1Icon;
    } else {
      BoostGemSlashIcon = BoostGemSlashIcon2.BoostGemSlashIcon;
    }
    obj = { style: tmp4.boostRowContainer, children: null };
    if ("gave" === phase) {
      obj1 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      obj2 = obj1;
    } else {
      obj2 = { size: "sm" };
    }
    const items1 = [hasOwnProperty(BoostGemSlashIcon, obj2), , ];
    obj3 = { style: tmp4.boostMessage, children: null };
    let tmp19Result = "dot" === stateFromStores;
    if (tmp19Result) {
      tmp19Result = null != roleColor;
    }
    if (tmp19Result) {
      const obj4 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp19Result = hasOwnProperty(native.RoleDot, obj4);
    }
    const items2 = [tmp19Result, , , ];
    const obj5 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: null, gradientColors: null, children: null };
    const items3 = [tmp4.username, {}];
    obj5.style = items3;
    let tmp23;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp23 = processColorStringsArray;
    }
    obj5.gradientColors = tmp23;
    obj5.children = username;
    items2[1] = hasOwnProperty(Text_Text.Text, obj5);
    items2[2] = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    const obj6 = { variant: "text-md/medium", lineClamp: 1, style: tmp4.messageText, children: getBoostRowMessageTextDefault(row) };
    items2[3] = hasOwnProperty(Text_Text.Text, obj6);
    obj3.children = items2;
    items1[1] = timestampProducer(View, obj3);
    let str4 = "text-xs/semibold";
    if (manaTypeConsolidationExperiment) {
      str4 = "text-xs/medium";
    }
    const obj7 = { variant: str4, color: null, style: null, children: null };
    let str5;
    if (manaTypeConsolidationExperiment) {
      str5 = "text-subtle";
    }
    obj7.color = str5;
    obj7.style = tmp4.timestamp;
    obj7.children = calendarFormatResult;
    items1[2] = hasOwnProperty(Text_Text.Text, obj7);
    obj.children = items1;
    return timestampProducer(View, obj);
  }
  calendarFormatResult = obj2.calendarFormat(new Date(sortKey));
}
const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { sectionContainer: null, boostContainer: null, boostRowContainer: null, boostMessage: null, username: null, messageText: null, timestamp: null };
obj = { marginTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.sectionContainer = obj;
obj.boostContainer = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_16 };
obj.boostRowContainer = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.boostMessage = { flex: 1, flexDirection: "row", alignItems: "center" };
obj.username = { maxWidth: 170, flexShrink: 1 };
obj.messageText = { flexShrink: 0 };
obj.timestamp = { flexShrink: 0 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default function GuildPowerupsRecentActivitySection(guildId) {
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivitySection");
  const tmp4 = closure_7();
  const arr = useMaybeGetSortedBoostsDefault(guildId.guildId, 10);
  let tmp6Result = null;
  if (0 !== arr.length) {
    obj = { style: tmp4.sectionContainer, children: null };
    let str = "text-subtle";
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    obj = { variant: "heading-lg/semibold", color: str, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.yM9Krm);
    const items = [hasOwnProperty(Text_Text.Text, obj), ];
    const obj1 = { style: tmp4.boostContainer, children: arr.map((row) => closure_1_5(GuildPowerupsRecentActivityRow, { row }, "boost-" + row.boost.id)) };
    items[1] = hasOwnProperty(View, obj1);
    obj.children = items;
    tmp6Result = timestampProducer(View, obj);
  }
  return tmp6Result;
};