// discord_app/modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx
import { View } from "get ActivityIndicator";
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
  let obj = require(11851) /* useMaybeGetSortedBoosts */;
  const getBoostUserConfig = obj.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  let obj1 = require(3955) /* resetCache */;
  const date = new Date(sortKey);
  let obj2 = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj2.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      obj = { color: null };
      obj[0] = roleColor;
    }
    let tmp2Result = tmp2(7880);
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(roleColorStrings);
    tmp2Result = tmp2(7880);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = tmp2(7616).BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = tmp2(11853).BoostTier1Icon;
    } else {
      BoostGemSlashIcon = tmp2(11855).BoostGemSlashIcon;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.boostRowContainer;
    if ("gave" === phase) {
      obj1 = { color: null, size: "sm" };
      obj1[0] = importDefault(712).unsafe_rawColors.GUILD_BOOSTING_PINK;
      obj2 = obj1;
    } else {
      obj2 = { size: "sm" };
    }
    const items1 = [closure_5(BoostGemSlashIcon, obj2), , ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.boostMessage;
    let tmp18Result = "dot" === stateFromStores;
    if (tmp18Result) {
      tmp18Result = null != roleColor;
    }
    if (tmp18Result) {
      const obj4 = { size: "small", color: null, colors: null };
      obj4[1] = roleColor;
      obj4[2] = roleColorStrings;
      tmp18Result = tmp18(tmp2(1297).RoleDot, obj4);
    }
    const items2 = [tmp18Result, , , ];
    const obj5 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: null, gradientColors: null, children: null };
    const items3 = [tmp.username, {}];
    obj5[3] = items3;
    let tmp22;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp22 = processColorStringsArray;
    }
    obj5[4] = tmp22;
    obj5[5] = username;
    items2[1] = closure_5(tmp2(4281).Text, obj5);
    items2[2] = closure_5(tmp2(4281).Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    const obj6 = { variant: "text-md/medium", lineClamp: 1, style: null, children: null };
    obj6[2] = tmp.messageText;
    obj6[3] = importDefault(11857)(row);
    items2[3] = closure_5(tmp2(4281).Text, obj6);
    obj3[1] = items2;
    items1[1] = closure_6(View, obj3);
    const obj7 = { variant: "text-xs/semibold", style: null, children: null };
    obj7[1] = tmp.timestamp;
    obj7[2] = calendarFormatResult;
    items1[2] = closure_5(tmp2(4281).Text, obj7);
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
  const tmp = callback3();
  const arr = importDefault(11851)(guildId.guildId, 10);
  let tmp3 = null;
  if (0 !== arr.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.sectionContainer;
    obj = { variant: "heading-lg/semibold", color: "text-subtle", children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl.string(require(1236) /* getSystemLocale */.t.yM9Krm);
    const items = [callback(require(4281) /* Text */.Text, obj), ];
    obj = { style: null, children: null };
    obj[0] = tmp.boostContainer;
    obj[1] = arr.map((boost) => callback(closure_8, { row: boost }, "boost-" + boost.boost.id));
    items[1] = callback(View, obj);
    obj[1] = items;
    tmp3 = callback2(View, obj);
  }
  return tmp3;
};