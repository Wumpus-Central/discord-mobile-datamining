// discord_app/modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import resetCache from "../../../../utils/DateUtils.tsx";
import apexExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import useMaybeGetSortedBoosts from "../hooks/useMaybeGetSortedBoosts.tsx";
import useMaybeGetSortedBoostsDefault from "../hooks/useMaybeGetSortedBoosts.tsx";
import getBoostRowMessageTextDefault from "../utils/getBoostRowMessageText.tsx";
import closure_4 from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function GuildPowerupsRecentActivityRow(row) {
  row = row.row;
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivityRow");
  ({ boost, phase, sortKey } = row);
  const tmp4 = callback();
  obj1 = useMaybeGetSortedBoosts;
  const getBoostUserConfig = obj1.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  let obj2 = resetCache;
  const date = new Date(sortKey);
  let obj3 = initialize;
  const items = [closure_4];
  const stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      obj = { color: null };
      obj[0] = roleColor;
    }
    let tmpResult = tmp(8222);
    const processColorStringsArray = tmpResult.useProcessColorStringsArray(roleColorStrings);
    tmpResult = tmp(8222);
    const isRoleStyleAndRoleColorsEligibleForERC = tmpResult.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = tmp(7840).BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = tmp(12140).BoostTier1Icon;
    } else {
      BoostGemSlashIcon = tmp(12142).BoostGemSlashIcon;
    }
    obj = { style: null, children: null };
    obj[0] = tmp4.boostRowContainer;
    if ("gave" === phase) {
      obj1 = { color: null, size: "sm" };
      obj1[0] = ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
      obj2 = obj1;
    } else {
      obj2 = { size: "sm" };
    }
    const items1 = [closure_5(BoostGemSlashIcon, obj2), , ];
    obj3 = { style: null, children: null };
    obj3[0] = tmp4.boostMessage;
    let tmp19Result = "dot" === stateFromStores;
    if (tmp19Result) {
      tmp19Result = null != roleColor;
    }
    if (tmp19Result) {
      const obj4 = { size: "small", color: null, colors: null };
      obj4[1] = roleColor;
      obj4[2] = roleColorStrings;
      tmp19Result = tmp19(tmp(1297).RoleDot, obj4);
    }
    const items2 = [tmp19Result, , , ];
    const obj5 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: null, gradientColors: null, children: null };
    const items3 = [tmp4.username, {}];
    obj5[3] = items3;
    let tmp23;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp23 = processColorStringsArray;
    }
    obj5[4] = tmp23;
    obj5[5] = username;
    items2[1] = closure_5(tmp(4376).Text, obj5);
    items2[2] = closure_5(tmp(4376).Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    const obj6 = { variant: "text-md/medium", lineClamp: 1, style: null, children: null };
    obj6[2] = tmp4.messageText;
    obj6[3] = getBoostRowMessageTextDefault(row);
    items2[3] = closure_5(tmp(4376).Text, obj6);
    obj3[1] = items2;
    items1[1] = closure_6(View, obj3);
    let str4 = "text-xs/semibold";
    if (manaTypeConsolidationExperiment) {
      str4 = "text-xs/medium";
    }
    const obj7 = { variant: null, color: null, style: null, children: null };
    obj7[0] = str4;
    let str5;
    if (manaTypeConsolidationExperiment) {
      str5 = "text-subtle";
    }
    obj7[1] = str5;
    obj7[2] = tmp4.timestamp;
    obj7[3] = calendarFormatResult;
    items1[2] = closure_5(tmp(4376).Text, obj7);
    obj[1] = items1;
    return closure_6(View, obj);
  }
}
const View = get_ActivityIndicator.View;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { sectionContainer: null, boostContainer: null, boostRowContainer: null, boostMessage: null, username: null, messageText: null, timestamp: null };
obj = { marginTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { gap: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_16 };
obj[2] = { flexDirection: "row", alignItems: "center", gap: 8 };
obj[3] = { flex: 1, flexDirection: "row", alignItems: "center" };
obj[4] = { maxWidth: 170, flexShrink: 1 };
obj[5] = { flexShrink: 0 };
obj[6] = { flexShrink: 0 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { gap: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_16 };
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default function GuildPowerupsRecentActivitySection(guildId) {
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivitySection");
  const tmp4 = callback();
  const arr = useMaybeGetSortedBoostsDefault(guildId.guildId, 10);
  let tmp6Result = null;
  if (0 !== arr.length) {
    obj = { style: null, children: null };
    obj[0] = tmp4.sectionContainer;
    let str = "text-subtle";
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    obj = { variant: "heading-lg/semibold", color: null, children: null };
    obj[1] = str;
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t.yM9Krm);
    const items = [closure_5(tmp(4376).Text, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp4.boostContainer;
    obj1[1] = arr.map((boost) => callback(closure_8, { row: boost }, "boost-" + boost.boost.id));
    items[1] = closure_5(View, obj1);
    obj[1] = items;
    tmp6Result = closure_6(tmp7, obj);
    const tmp6 = closure_6;
  }
  return tmp6Result;
};