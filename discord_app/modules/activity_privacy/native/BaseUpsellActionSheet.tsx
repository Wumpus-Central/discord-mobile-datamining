// discord_app/modules/activity_privacy/native/BaseUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import ActivityPrivacyUpsellUtils from "../ActivityPrivacyUpsellUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function renderSuccessIcon() {
  return React5(CircleCheckIcon.CircleCheckIcon, {
    size: "sm",
    color: nativeDefault.colors.STATUS_POSITIVE,
    secondaryColor: nativeDefault.colors.WHITE,
  });
}
function StoreGuildIcon(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = { guild: stateFromStores, size: null };
  const obj = guildId(504);
  obj2.size = guildId(5889).GuildIconSizes.XSMALL;
  return closure_7(GuildIconDefault, obj2);
}
function GuildCard(guildIds) {
  guildIds = guildIds.guildIds;
  ({ direction, onPress } = guildIds);
  let substr;
  const tmp = closure_10();
  const items = [guildIds];
  const memo = noop.useMemo(() => ActivityPrivacyUpsellUtils.sortGuildIdsByFrecency(guildIds), items);
  const items1 = [GuildStore];
  const stateFromStores = guildIds(substr[7]).useStateFromStores(items1, () => GuildStore.getGuild(memo[0]));
  if (direction === guildIds(substr[9]).ChangeDirection.RESTRICTING) {
    const intl2 = tmp2(tmp3[10]).intl;
    let stringResult = intl2.string(tmp2(tmp3[10]).t.e6Kpa7);
  } else {
    const intl = tmp2(tmp3[10]).intl;
    stringResult = intl.string(tmp2(tmp3[10]).t.cy4G4y);
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp7 = null != stateFromStores;
  if (tmp7) {
    tmp7 = memo.length > 1;
  }
  substr = memo;
  if (4 !== memo.length) {
    substr = memo.slice(0, 3);
  }
  const obj = guildIds(substr[7]);
  const items2 = [GuildStore];
  const items3 = [substr];
  const obj2 = { style: tmp.card, onPress, children: null };
  const obj3 = { style: tmp.cardInfo, children: null };
  const stateFromStoresArray = guildIds(substr[7]).useStateFromStoresArray(
    items2,
    () =>
      substr.map((item) => {
        guild = guild.getGuild(item);
        let str;
        if (guild != null) {
          str = guild.name;
        }
        if (str == null) {
          str = "";
        }
        return str;
      }),
    items3,
  );
  const obj4 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl3 = tmp2(tmp3[10]).intl;
  obj4.children = intl3.format(guildIds(substr[10]).t["0fkj8J"], { count: guildIds.length });
  const items4 = [closure_7(guildIds(substr[11]).Text, obj4)];
  const obj6 = { style: tmp.statusRow, children: null };
  let str2 = "text-muted";
  if (direction === guildIds(substr[9]).ChangeDirection.RESTRICTING) {
    str2 = "text-feedback-positive";
  }
  const items5 = [
    closure_7(guildIds(substr[11]).Text, { variant: "text-sm/medium", color: str2, children: stringResult }),
  ];
  const obj7 = {
    variant: "text-sm/medium",
    color: "text-muted",
    lineClamp: 1,
    style: tmp.guildSummary,
    children: null,
  };
  const intl4 = tmp2(tmp3[10]).intl;
  const t = tmp2(tmp3[10]).t;
  obj7.children = intl4.format(tmp7 ? t["8ZLbvR"] : t["+NoTYm"], { guildName: str });
  items5[1] = closure_7(guildIds(substr[11]).Text, obj7);
  obj6.children = items5;
  items4[1] = closure_8(closure_5, obj6);
  obj3.children = items4;
  const items6 = [closure_8(closure_5, obj3), ,];
  const obj5 = { count: guildIds.length };
  const tmp10 = null != onPress ? closure_4 : closure_5;
  const tmp2Result = guildIds(substr[7]);
  items6[1] = closure_7(guildIds(substr[12]).GuildIconPile, {
    size: guildIds(substr[8]).GuildIconSizes.XSMALL,
    names: stateFromStoresArray,
    totalCount: memo.length,
    children: substr.map((guildId) => closure_1_7(StoreGuildIcon, { guildId }, guildId)),
  });
  let tmp12Result = null != onPress;
  if (tmp12Result) {
    const obj9 = { style: tmp.chevron, children: null };
    const obj10 = { color: memo(tmp3[5]).colors.TEXT_SUBTLE, size: "xs" };
    obj9.children = closure_7(tmp2(tmp3[13]).ChevronLargeRightIcon, obj10);
    tmp12Result = closure_7(closure_5, obj9);
  }
  items6[2] = tmp12Result;
  obj2.children = items6;
  return closure_8(tmp10, obj2);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24 },
  title: null,
  description: null,
  card: null,
  cardInfo: null,
  statusRow: null,
  guildSummary: null,
  chevron: null,
  buttonsContainer: null,
};
let obj3 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.title = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.description = { marginBottom: nativeDefault.space.PX_24 };
let obj5 = { marginBottom: nativeDefault.space.PX_24 };
obj2.card = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.cardInfo = { flex: 1, marginRight: nativeDefault.space.PX_12 };
let obj7 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj2.statusRow = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_4, paddingBottom: 2 };
obj2.guildSummary = { flexShrink: 1 };
const obj8 = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_4, paddingBottom: 2 };
obj2.chevron = { marginLeft: nativeDefault.space.PX_8 };
let obj9 = { marginLeft: nativeDefault.space.PX_8 };
obj2.buttonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_privacy/native/BaseUpsellActionSheet.tsx");

export default function BaseUpsellActionSheet(toastContent) {
  toastContent = toastContent.toastContent;
  const onConfirm = toastContent.onConfirm;
  ({ direction, affectedGuildIds, title, subtitle, confirmText, onCardPress } = toastContent);
  const tmp = closure_10();
  const items = [onConfirm, toastContent];
  const callback = noop.useCallback(() => {
    onConfirm();
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ToastActionCreatorsDefault.open({
      key: "ACTIVITY_PRIVACY_UPSELL_TOAST",
      content: toastContent,
      icon: renderSuccessIcon,
    });
  }, items);
  const callback1 = noop.useCallback(() => {
    onConfirm(dependencyMap[14]).hideActionSheet();
  }, []);
  let obj = { startExpanded: true, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items1 = [
    closure_7(toastContent(4825).Text, {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/bold",
      color: "text-strong",
      children: title,
    }),
    closure_7(toastContent(4825).Text, {
      style: tmp.description,
      variant: "text-md/medium",
      color: "text-default",
      children: subtitle,
    }),
    closure_7(GuildCard, { guildIds: affectedGuildIds, direction, onPress: onCardPress }),
  ];
  const obj5 = { style: tmp.buttonsContainer, children: null };
  const items2 = [
    closure_7(toastContent(5273).Button, { variant: "primary", size: "md", text: confirmText, onPress: callback }),
  ];
  const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = toastContent(1115).intl;
  obj6.text = intl.string(toastContent(1115).t.X1rGEm);
  obj6.onPress = callback1;
  items2[1] = closure_7(toastContent(5273).Button, obj6);
  obj5.children = items2;
  items1[3] = closure_8(closure_5, obj5);
  obj2.children = items1;
  obj.children = closure_8(closure_5, obj2);
  return closure_7(toastContent(7483).BottomSheet, obj);
}
