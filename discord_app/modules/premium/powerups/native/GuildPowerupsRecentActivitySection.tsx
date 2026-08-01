// === Module 11684: GuildPowerupsRecentActivityRow ===

// Module 11684 (GuildPowerupsRecentActivityRow)
import { View } from "getSystemLocale";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
function GuildPowerupsRecentActivityRow(row) {
  let boost;
  let phase;
  let roleColor;
  let roleColorStrings;
  let sortKey;
  let username;
  row = row.row;
  ({ boost, phase, sortKey } = row);
  const tmp = callback3();
  let obj = require(11685) /* useMaybeGetSortedBoosts */;
  const getBoostUserConfig = obj.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  if (row.isExpiringBoostsEnabled) {
    let tmp2Result = tmp2(3863);
    const _Date = Date;
    const date = new Date(sortKey);
    let calendarFormatResult = tmp2Result.calendarFormat(date);
  } else {
    tmp2Result = tmp2(5931);
    calendarFormatResult = tmp2Result.getRelativeTimestamp(sortKey, true);
  }
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      obj = { color: null };
      obj[0] = roleColor;
    }
    const processColorStringsArray = tmp2(7749).useProcessColorStringsArray(roleColorStrings);
    const tmp2Result3 = tmp2(7749);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result3.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = tmp2(6621).BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = tmp2(11688).BoostTier1Icon;
    } else {
      BoostGemSlashIcon = tmp2(11690).BoostGemSlashIcon;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.boostRowContainer;
    if ("gave" === phase) {
      const obj1 = { color: null, size: "sm" };
      obj1[0] = importDefault(712).unsafe_rawColors.GUILD_BOOSTING_PINK;
      let obj2 = obj1;
    } else {
      obj2 = { size: "sm" };
    }
    const items1 = [closure_5(BoostGemSlashIcon, obj2), , ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.boostMessage;
    let tmp23Result = "dot" === stateFromStores;
    if (tmp23Result) {
      tmp23Result = null != roleColor;
    }
    if (tmp23Result) {
      const obj4 = { size: "small", color: null, colors: null };
      obj4[1] = roleColor;
      obj4[2] = roleColorStrings;
      tmp23Result = tmp23(tmp2(1297).RoleDot, obj4);
    }
    const items2 = [tmp23Result, , , ];
    const obj5 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: null, gradientColors: null, children: null };
    const items3 = [tmp.username, {}];
    obj5[3] = items3;
    let tmp27;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp27 = processColorStringsArray;
    }
    obj5[4] = tmp27;
    obj5[5] = username;
    items2[1] = closure_5(tmp2(4189).Text, obj5);
    items2[2] = closure_5(tmp2(4189).Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    const obj6 = { variant: "text-md/medium", lineClamp: 1, style: null, children: null };
    obj6[2] = tmp.messageText;
    obj6[3] = importDefault(11692)(row);
    items2[3] = closure_5(tmp2(4189).Text, obj6);
    obj3[1] = items2;
    items1[1] = closure_6(View, obj3);
    const obj7 = { variant: "text-xs/semibold", style: null, children: null };
    obj7[1] = tmp.timestamp;
    obj7[2] = calendarFormatResult;
    items1[2] = closure_5(tmp2(4189).Text, obj7);
    obj[1] = items1;
    return closure_6(View, obj);
  }
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { sectionContainer: null, boostContainer: null, boostRowContainer: null, boostMessage: null, username: null, messageText: null, timestamp: null };
obj = { marginTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { gap: require("Themes").space.PX_12, marginTop: require("Themes").space.PX_16 };
obj[2] = { flexDirection: "row", alignItems: "center", gap: 8 };
obj[3] = { flex: 1, flexDirection: "row", alignItems: "center" };
obj[4] = { maxWidth: 170, flexShrink: 1 };
obj[5] = { flexShrink: 0 };
obj[6] = { flexShrink: 0 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { gap: require("Themes").space.PX_12, marginTop: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default function GuildPowerupsRecentActivitySection(guildId) {
  let _require;
  const tmp = callback3();
  const arr = importDefault(11685)(guildId.guildId, 10);
  let obj = _require(11686);
  _require = obj.useExpiringBoostsEnabled("GuildPowerupsRecentActivity");
  let tmp4 = null;
  if (0 !== arr.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.sectionContainer;
    obj = { variant: "heading-lg/semibold", color: "text-subtle", children: null };
    const intl = tmp3(1236).intl;
    obj[2] = intl.string(tmp3(1236).t.yM9Krm);
    const items = [callback(tmp3(4189).Text, obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.boostContainer;
    obj1[1] = arr.map((boost) => outer1_5(outer1_8, { row: boost, isExpiringBoostsEnabled: closure_0 }, "boost-" + boost.boost.id));
    items[1] = callback(View, obj1);
    obj[1] = items;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};