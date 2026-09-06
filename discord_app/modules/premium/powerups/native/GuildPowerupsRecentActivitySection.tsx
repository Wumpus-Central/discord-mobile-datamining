// discord_app/modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import useMaybeGetSortedBoosts from "../hooks/useMaybeGetSortedBoosts.tsx";
import getBoostRowMessageTextDefault from "../utils/getBoostRowMessageText.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    let tmpResult = tmp(7961);
    const processColorStringsArray = tmpResult.useProcessColorStringsArray(roleColorStrings);
    tmpResult = tmp(7961);
    const isRoleStyleAndRoleColorsEligibleForERC = tmpResult.useIsRoleStyleAndRoleColorsEligibleForERC(
      boost.guildId,
      boost.userId,
      stateFromStores,
      processColorStringsArray,
    );
    if ("gave" === phase) {
      let BoostGemSlashIcon = tmp(9375).BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = tmp(12582).BoostTier1Icon;
    } else {
      BoostGemSlashIcon = tmp(12584).BoostGemSlashIcon;
    }
    obj = { style: tmp4.boostRowContainer, children: null };
    if ("gave" === phase) {
      obj1 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      obj2 = obj1;
    } else {
      obj2 = { size: "sm" };
    }
    const items1 = [hasOwnProperty(BoostGemSlashIcon, obj2), ,];
    obj3 = { style: tmp4.boostMessage, children: null };
    let tmp19Result = "dot" === stateFromStores;
    if (tmp19Result) {
      tmp19Result = null != roleColor;
    }
    if (tmp19Result) {
      const obj4 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp19Result = tmp19(tmp(1178).RoleDot, obj4);
    }
    const items2 = [tmp19Result, , ,];
    const obj5 = {
      variant: "text-md/medium",
      color: "interactive-text-active",
      lineClamp: 1,
      style: null,
      gradientColors: null,
      children: null,
    };
    const items3 = [tmp4.username, {}];
    obj5.style = items3;
    let tmp23;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp23 = processColorStringsArray;
    }
    obj5.gradientColors = tmp23;
    obj5.children = username;
    items2[1] = hasOwnProperty(tmp(4556).Text, obj5);
    items2[2] = hasOwnProperty(tmp(4556).Text, {
      variant: "text-md/medium",
      color: "interactive-text-active",
      children: " ",
    });
    const obj6 = {
      variant: "text-md/medium",
      lineClamp: 1,
      style: tmp4.messageText,
      children: getBoostRowMessageTextDefault(row),
    };
    items2[3] = hasOwnProperty(tmp(4556).Text, obj6);
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
    items1[2] = hasOwnProperty(tmp(4556).Text, obj7);
    obj.children = items1;
    return timestampProducer(View, obj);
  }
}
const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  sectionContainer: null,
  boostContainer: null,
  boostRowContainer: null,
  boostMessage: null,
  username: null,
  messageText: null,
  timestamp: null,
};
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
    const intl = tmp(1114).intl;
    obj.children = intl.string(tmp(1114).t.yM9Krm);
    const items = [hasOwnProperty(tmp(4556).Text, obj)];
    const obj1 = {
      style: tmp4.boostContainer,
      children: arr.map((row) => closure_1_5(GuildPowerupsRecentActivityRow, { row }, "boost-" + row.boost.id)),
    };
    items[1] = hasOwnProperty(View, obj1);
    obj.children = items;
    tmp6Result = timestampProducer(tmp7, obj);
  }
  return tmp6Result;
}
