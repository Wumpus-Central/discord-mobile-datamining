// === Module 10790: GuildPowerupsRecentActivitySection ===

// Module 10790 (GuildPowerupsRecentActivitySection)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import DateUtils from "DateUtils" /* 5128 */;
import Text_Text from "Text/Text" /* 5929 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 9189 */;
import BoostGemIcon from "BoostGemIcon" /* 9981 */;
import useMaybeGetSortedBoosts from "useMaybeGetSortedBoosts" /* 10791 */;
import BoostTier1Icon from "BoostTier1Icon" /* 10793 */;
import BoostGemSlashIcon2 from "BoostGemSlashIcon" /* 10795 */;
import getBoostRowMessageTextDefault from "getBoostRowMessageText" /* 10797 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const useMaybeGetSortedBoostsDefault = useMaybeGetSortedBoosts;

function GuildPowerupsRecentActivityRow(row) {
  row = row.row;
  ({ boost, phase, sortKey } = row);
  const tmp = closure_7();
  const getBoostUserConfig = useMaybeGetSortedBoosts.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  const obj2 = DateUtils;
  const date = new Date(sortKey);
  const calendarFormatResult = obj2.calendarFormat(new Date(sortKey));
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      const obj4 = { color: roleColor };
    }
    const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(roleColorStrings);
    const tmp2Result2 = enhanced_role_colors_EnhancedRoleColorUtils;
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result2.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = BoostGemIcon.BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = BoostTier1Icon.BoostTier1Icon;
    } else {
      BoostGemSlashIcon = BoostGemSlashIcon2.BoostGemSlashIcon;
    }
    const obj5 = { style: tmp.boostRowContainer, children: null };
    if ("gave" === phase) {
      const obj6 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      let obj7 = obj6;
    } else {
      obj7 = { size: "sm" };
    }
    const items1 = [hasOwnProperty(BoostGemSlashIcon, obj7), , ];
    const obj8 = { style: tmp.boostMessage, children: null };
    let tmp18Result = "dot" === stateFromStores;
    if (tmp18Result) {
      tmp18Result = null != roleColor;
    }
    if (tmp18Result) {
      const obj9 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp18Result = hasOwnProperty(native.RoleDot, obj9);
    }
    const items2 = [tmp18Result, , , ];
    const obj10 = { variant: "body-md/medium", color: "interactive-text-active", lineClamp: 1, style: null, gradientColors: null, children: null };
    const items3 = [tmp.username, {}];
    obj10.style = items3;
    let tmp22;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp22 = processColorStringsArray;
    }
    obj10.gradientColors = tmp22;
    obj10.children = username;
    items2[1] = hasOwnProperty(Text_Text.Text, obj10);
    items2[2] = hasOwnProperty(Text_Text.Text, { variant: "body-md/medium", color: "interactive-text-active", children: " " });
    const obj11 = { variant: "body-md/medium", lineClamp: 1, style: tmp.messageText, children: getBoostRowMessageTextDefault(row) };
    items2[3] = hasOwnProperty(Text_Text.Text, obj11);
    obj8.children = items2;
    items1[1] = timestampProducer(View, obj8);
    const obj12 = { variant: "body-xs/medium", color: "text-subtle", style: tmp.timestamp, children: calendarFormatResult };
    items1[2] = hasOwnProperty(Text_Text.Text, obj12);
    obj5.children = items1;
    return timestampProducer(View, obj5);
  }
}
const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
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
  const tmp = closure_7();
  const arr = useMaybeGetSortedBoostsDefault(guildId.guildId, 10);
  let tmp3 = null;
  if (0 !== arr.length) {
    const obj = { style: tmp.sectionContainer, children: null };
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.yM9Krm);
    items = [hasOwnProperty(Text_Text.Text, obj2), ];
    const obj3 = { style: tmp.boostContainer, children: arr.map((row) => closure_1_5(GuildPowerupsRecentActivityRow, { row }, "boost-" + row.boost.id)) };
    items[1] = hasOwnProperty(View, obj3);
    obj.children = items;
    tmp3 = timestampProducer(View, obj);
  }
  return tmp3;
};