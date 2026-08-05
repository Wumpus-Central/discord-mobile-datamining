// discord_app/modules/activity_privacy/native/BaseUpsellActionSheet.tsx
import noop from "noop";
import get_ActivityIndicator from "Button";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { CircleCheckIcon } from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import { GuildIconSizes } from "../../guild/native/GuildIcon.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
function renderSuccessIcon() {
  const obj = { size: "sm", color: null, secondaryColor: null };
  obj[1] = Themes.colors.STATUS_POSITIVE;
  obj[2] = Themes.colors.WHITE;
  return callback(CircleCheckIcon /* CircleCheckIcon */.CircleCheckIcon, obj);
}
function StoreGuildIcon(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  obj = { guild: stateFromStores, size: null };
  obj[1] = guildId(5661).GuildIconSizes.XSMALL;
  return callback(GuildIconSizes, obj);
}
function GuildCard(guildIds) {
  let direction;
  let onPress;
  guildIds = guildIds.guildIds;
  ({ direction, onPress } = guildIds);
  let memo;
  let substr;
  const tmp = createCacheKey();
  const items = [guildIds];
  memo = React.useMemo(() => guildIds(substr[9]).sortGuildIdsByFrecency(guildIds), items);
  let obj = guildIds(substr[7]);
  const items1 = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_6.getGuild(memo[0]));
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
  const items2 = [createGuildRecordFromRust];
  const items3 = [substr];
  obj = { style: tmp.card, onPress, children: null };
  obj = { style: tmp.cardInfo, children: null };
  const stateFromStoresArray = guildIds(substr[7]).useStateFromStoresArray(items2, () => substr.map((arg0) => {
    guild = guild.getGuild(arg0);
    let str;
    if (guild != null) {
      str = guild.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  }), items3);
  const obj1 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl3 = tmp2(tmp3[10]).intl;
  obj1[2] = intl3.format(guildIds(substr[10]).t["0fkj8J"], { count: guildIds.length });
  const items4 = [callback(guildIds(substr[11]).Text, obj1), ];
  const obj3 = { style: tmp.statusRow, children: null };
  let str2 = "text-muted";
  if (direction === guildIds(substr[9]).ChangeDirection.RESTRICTING) {
    str2 = "text-feedback-positive";
  }
  const items5 = [callback(guildIds(substr[11]).Text, { variant: "text-sm/medium", color: str2, children: stringResult }), ];
  const obj4 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.guildSummary, children: null };
  const intl4 = tmp2(tmp3[10]).intl;
  const t = tmp2(tmp3[10]).t;
  obj4[4] = intl4.format(tmp7 ? t["8ZLbvR"] : t["+NoTYm"], { guildName: str });
  items5[1] = callback(guildIds(substr[11]).Text, obj4);
  obj3[1] = items5;
  items4[1] = closure_8(closure_5, obj3);
  obj[1] = items4;
  const items6 = [closure_8(closure_5, obj), , ];
  const obj5 = { size: null, names: null, totalCount: null, children: null };
  obj5[0] = guildIds(substr[8]).GuildIconSizes.XSMALL;
  obj5[1] = stateFromStoresArray;
  obj5[2] = memo.length;
  obj5[3] = substr.map((guildId) => callback(closure_11, { guildId }, guildId));
  items6[1] = callback(guildIds(substr[12]).GuildIconPile, obj5);
  let tmp12Result = null != onPress;
  if (tmp12Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.chevron;
    const obj7 = { color: null, size: "xs" };
    obj7[0] = memo(tmp3[5]).colors.TEXT_SUBTLE;
    obj6[1] = tmp12(tmp2(tmp3[13]).ChevronLargeRightIcon, obj7);
    tmp12Result = tmp12(tmp11, obj6);
  }
  items6[2] = tmp12Result;
  obj[2] = items6;
  return closure_8(null != onPress ? closure_4 : closure_5, obj);
}
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, title: null, description: null, card: null, cardInfo: null, statusRow: null, guildSummary: null, chevron: null, buttonsContainer: null };
createCacheKey = { paddingVertical: require("Themes").space.PX_24, paddingHorizontal: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_8 };
let obj1 = { marginBottom: require("Themes").space.PX_8 };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_24 };
let obj2 = { marginBottom: require("Themes").space.PX_24 };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.md, padding: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.md, padding: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[4] = { flex: 1, marginRight: require("Themes").space.PX_12 };
let obj4 = { flex: 1, marginRight: require("Themes").space.PX_12 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", marginTop: require("Themes").space.PX_4, paddingBottom: 2 };
createCacheKey[6] = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", marginTop: require("Themes").space.PX_4, paddingBottom: 2 };
createCacheKey[7] = { marginLeft: require("Themes").space.PX_8 };
let obj6 = { marginLeft: require("Themes").space.PX_8 };
createCacheKey[8] = { gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { gap: require("Themes").space.PX_8 };
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/activity_privacy/native/BaseUpsellActionSheet.tsx");

export default function BaseUpsellActionSheet(toastContent) {
  let affectedGuildIds;
  let confirmText;
  let direction;
  let onCardPress;
  let subtitle;
  let title;
  toastContent = toastContent.toastContent;
  const onConfirm = toastContent.onConfirm;
  ({ direction, affectedGuildIds, title, subtitle, confirmText, onCardPress } = toastContent);
  const tmp = createCacheKey();
  const items = [onConfirm, toastContent];
  const callback = React.useCallback(() => {
    onConfirm();
    let obj = onConfirm(outer1_2[14]);
    obj.hideActionSheet();
    obj = { key: "ACTIVITY_PRIVACY_UPSELL_TOAST", content: toastContent, icon: outer1_9 };
    onConfirm(outer1_2[15]).open(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    onConfirm(table[14]).hideActionSheet();
  }, []);
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", color: "text-strong", children: title };
  const items1 = [callback(toastContent(4281).Text, obj), callback(toastContent(4281).Text, { style: tmp.description, variant: "text-md/medium", color: "text-default", children: subtitle }), callback(GuildCard, { guildIds: affectedGuildIds, direction, onPress: onCardPress }), ];
  const obj2 = { style: tmp.buttonsContainer, children: null };
  const items2 = [callback(toastContent(4695).Button, { variant: "primary", size: "md", text: confirmText, onPress: callback }), ];
  const obj3 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = toastContent(1236).intl;
  obj3[2] = intl.string(toastContent(1236).t.X1rGEm);
  obj3[3] = callback1;
  items2[1] = callback(toastContent(4695).Button, obj3);
  obj2[1] = items2;
  items1[3] = callback2(closure_5, obj2);
  obj[1] = items1;
  obj[1] = callback2(closure_5, obj);
  return callback(toastContent(5338).BottomSheet, obj);
};