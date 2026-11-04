// discord_app/modules/waterwheels/interest/native/InterestGuildRecommendations.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2537 from "../../WaterwheelsUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import InterestScrollHeader from "InterestScrollHeader.tsx";
import InterestGhostDefault from "InterestGhost.tsx";
import InterestGuildProfileSheetDefault from "InterestGuildProfileSheet.tsx";
import InterestPickedGamesDefault from "InterestPickedGames.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function InterestGuildSkeleton() {
  _require = closure_12();
  let obj = { accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.ZTNur7);
  obj.accessibilityState = { busy: true };
  obj.children = closure_8(closure_6, {
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: Array.from({ length: 6 }, (arg0, arg1) => {
      const obj = { style: closure_0.row, children: null };
      const obj2 = { style: closure_0.rowHeader, children: null };
      const obj3 = { style: closure_0.profile, children: null };
      items = [React5(InterestGhostDefault, { style: closure_0.skeletonIcon })];
      const obj5 = { style: closure_0.details, children: null };
      const obj6 = { style: closure_0.skeletonNameFrame, children: null };
      const items1 = [closure_0.skeletonLine, arg1 % 2 === 0 ? closure_0.skeletonName : closure_0.skeletonShortName];
      obj6.children = React5(InterestGhostDefault, { style: items1 });
      const items2 = [React5(timestampProducer, obj6)];
      const obj7 = { style: closure_0.skeletonCountFrame, children: null };
      const obj8 = { style: null };
      const items3 = [,];
      ({ skeletonLine: arr4[0], skeletonCount: arr4[1] } = closure_0);
      obj8.style = items3;
      obj7.children = React5(InterestGhostDefault, obj8);
      items2[1] = React5(timestampProducer, obj7);
      obj5.children = items2;
      items[1] = React6(timestampProducer, obj5);
      obj3.children = items;
      const items4 = [
        React6(timestampProducer, obj3),
        React5(InterestGhostDefault, { style: closure_0.skeletonButton }),
      ];
      obj2.children = items4;
      const items5 = [React6(timestampProducer, obj2)];
      const obj10 = { children: null };
      const obj11 = { style: closure_0.skeletonDescriptionFrame, children: null };
      const obj12 = { style: null };
      const items6 = [,];
      ({ skeletonLine: arr7[0], skeletonDescription: arr7[1] } = closure_0);
      obj12.style = items6;
      obj11.children = React5(InterestGhostDefault, obj12);
      const items7 = [React5(timestampProducer, obj11)];
      const obj13 = { style: closure_0.skeletonDescriptionFrame, children: null };
      const obj14 = { style: null };
      const items8 = [,];
      ({ skeletonLine: arr9[0], skeletonShortDescription: arr9[1] } = closure_0);
      obj14.style = items8;
      obj13.children = React5(InterestGhostDefault, obj14);
      items7[1] = React5(timestampProducer, obj13);
      obj10.children = items7;
      items5[1] = React6(timestampProducer, obj10);
      obj.children = items5;
      return React6(timestampProducer, obj, arg1);
    }),
  });
  return closure_8(closure_6, obj);
}
function ProgressiveGuildRows(arg0) {
  ({ guilds, joins: require } = arg0);
  c1 = undefined;
  [tmp2, c1] = noop.useState(5);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1(10), 80);
    const timeout2 = setTimeout(() => closure_1(15), 160);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  const obj = { children: null };
  const substr = guilds.slice(0, tmp2);
  obj.children = substr.map((guild) => React5(closure_14, { guild, joins }, guild.id));
  return closure_8(closure_10, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const GuildFeatures = fn(1072).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
const NavigatorHeader = fn(7139);
const headerBackButton = NavigatorHeader.getHeaderBackButton();
const createStyles = fn(5141);
let obj = {
  screen: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  header: null,
  content: null,
  intro: null,
  completion: null,
  guildIcon: null,
  guildIconImage: null,
  centered: null,
  row: null,
  joinSpace: null,
  joinTarget: null,
  rowHeader: null,
  profile: null,
  details: null,
  name: null,
  nameText: null,
  badge: null,
  online: null,
  dot: null,
  empty: null,
  skeletonIcon: null,
  skeletonNameFrame: null,
  skeletonCountFrame: null,
  skeletonDescriptionFrame: null,
  skeletonLine: null,
  skeletonName: null,
  skeletonShortName: null,
  skeletonCount: null,
  skeletonDescription: null,
  skeletonShortDescription: null,
  skeletonButton: null,
};
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.header = {
  height: nativeDefault.space.PX_64,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj5 = {
  height: nativeDefault.space.PX_64,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj.intro = {
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_4,
};
let obj7 = {
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_4,
};
obj.completion = { color: nativeDefault.colors.TEXT_BRAND };
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, overflow: "hidden" };
obj.guildIcon = size;
let obj8 = { color: nativeDefault.colors.TEXT_BRAND };
obj.guildIconImage = { borderRadius: nativeDefault.radii.none };
obj.centered = { textAlign: "center" };
let obj9 = { borderRadius: nativeDefault.radii.none };
obj.row = {
  paddingVertical: nativeDefault.space.PX_16,
  borderBottomWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: nativeDefault.space.PX_8,
};
let obj10 = {
  paddingVertical: nativeDefault.space.PX_16,
  borderBottomWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: nativeDefault.space.PX_8,
};
obj.joinSpace = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
const rect = { position: "absolute", right: 0, top: nativeDefault.space.PX_24 };
obj.joinTarget = rect;
let obj11 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
obj.rowHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj.profile = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  minHeight: nativeDefault.space.PX_48,
};
obj.details = { flex: 1, minWidth: 0 };
let obj13 = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  minHeight: nativeDefault.space.PX_48,
};
obj.name = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.nameText = { flexShrink: 1 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
obj.badge = size1;
let obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.online = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size2 = {
  width: nativeDefault.space.PX_6,
  height: nativeDefault.space.PX_6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE,
};
obj.dot = size2;
let obj15 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.empty = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
const size3 = {
  width: nativeDefault.space.PX_40,
  height: nativeDefault.space.PX_40,
  borderRadius: nativeDefault.radii.sm,
};
obj.skeletonIcon = size3;
let obj16 = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
obj.skeletonNameFrame = { height: fn(5761).TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" };
let obj17 = { height: fn(5761).TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" };
obj.skeletonCountFrame = { height: fn(5761).TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" };
const obj18 = { height: fn(5761).TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" };
obj.skeletonDescriptionFrame = {
  height: fn(5761).TextStyleSheet["body-sm/normal"].lineHeight,
  justifyContent: "center",
};
let obj19 = { height: fn(5761).TextStyleSheet["body-sm/normal"].lineHeight, justifyContent: "center" };
obj.skeletonLine = { height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
obj.skeletonName = { width: "72%" };
obj.skeletonShortName = { width: "56%" };
const size4 = { width: "40%", height: nativeDefault.space.PX_8 };
obj.skeletonCount = size4;
obj.skeletonDescription = { width: "96%" };
obj.skeletonShortDescription = { width: "78%" };
const size5 = {
  width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
};
obj.skeletonButton = size5;
let closure_12 = createStyles.createStyles(obj);
let closure_14 = noop.memo(function InterestGuildRow(guild) {
  guild = guild.guild;
  const joins = guild.joins;
  const tmp = closure_12();
  const token = guild(5732).useToken(joins(575).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj = guild(5732);
  const token1 = guild(5732).useToken(joins(575).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj2 = guild(5732);
  const guildIconURL = joins(1411).getGuildIconURL({ id: guild.id, icon: guild.icon, size: 40 });
  const obj5 = {
    accessibilityRole: "button",
    accessibilityLabel: guild.name,
    accessibilityHint: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = guild(1113).intl;
  obj5.accessibilityHint = intl.string(joins(2537).nkweXX);
  obj5.onPress = function openProfile() {
    const obj = ActionSheetActionCreatorsDefault;
    const resolved = Promise.resolve({ default: InterestGuildProfileSheetDefault });
    obj.openLazy(resolved, "GuildProfileActionSheet:" + guild.id, { guildId: guild.id, guildName: guild.name, joins });
  };
  obj5.style = tmp.row;
  const obj6 = { style: tmp.rowHeader, children: null };
  const obj7 = { style: tmp.profile, children: null };
  const obj8 = { style: null, children: null };
  items = [tmp.guildIcon];
  const obj9 = { borderRadius: null };
  const obj3 = joins(1411);
  const obj4 = { id: guild.id, icon: guild.icon, size: 40 };
  obj9.borderRadius = (token * joins(575).space.PX_40) / token1;
  items[1] = obj9;
  obj8.style = items;
  const obj10 = { icon: guildIconURL, value: guild.name, size: null, selected: false, style: null };
  const tmp11 = joins(9656);
  obj10.size = guild(7098).GuildIconSizes.NORMAL;
  obj10.style = tmp.guildIconImage;
  obj8.children = closure_8(joins(7098), obj10);
  const items1 = [closure_8(tmp11, obj8)];
  const obj11 = { style: tmp.details, spacing: joins(575).space.PX_0, children: null };
  const obj12 = { style: tmp.name, children: null };
  const items2 = [
    closure_8(guild(5761).Text, {
      style: tmp.nameText,
      variant: "body-md/semibold",
      color: "text-strong",
      lineClamp: 1,
      children: guild.name,
    }),
    ,
  ];
  const features = guild.features;
  let hasItem = features.includes(GuildFeatures.VERIFIED);
  if (!hasItem) {
    const features2 = guild.features;
    hasItem = features2.includes(GuildFeatures.PARTNERED);
  }
  if (hasItem) {
    const obj14 = { guild: null, style: null };
    const tmp4Result = tmp4(9452);
    const obj15 = { id: null, name: null, icon: null, features: null };
    ({ id: obj16.id, name: obj16.name, icon: obj16.icon } = guild);
    const _Set = Set;
    const set = new Set(guild.features);
    obj15.features = set;
    obj14.guild = tmp2(5004).constructFromPartialGuildRecord(obj15);
    obj14.style = tmp.badge;
    hasItem = closure_8(tmp4Result, obj14);
    const tmp2Result = tmp2(5004);
  }
  items2[1] = hasItem;
  items2[2] = closure_8(guild(7514).ChevronSmallRightIcon, { size: "xxs", accessible: false });
  obj12.children = items2;
  const items3 = [closure_9(closure_6, obj12)];
  const obj17 = { style: tmp.online, children: null };
  const items4 = [closure_8(closure_6, { style: tmp.dot })];
  const obj19 = { variant: "body-xs/medium", color: "text-muted", children: null };
  const intl2 = tmp2(1113).intl;
  obj19.children = intl2.format(guild(1113).t["LC+S+m"], { membersOnline: guild.approximate_presence_count });
  items4[1] = closure_8(guild(5761).Text, obj19);
  obj17.children = items4;
  items3[1] = closure_9(closure_6, obj17);
  obj11.children = items3;
  items1[1] = closure_9(guild(6162).Stack, obj11);
  obj7.children = items1;
  const items5 = [closure_9(closure_6, obj7), closure_8(closure_6, { style: tmp.joinSpace })];
  obj6.children = items5;
  const items6 = [closure_9(closure_6, obj6)];
  let tmp10Result = null != guild.description;
  if (tmp10Result) {
    tmp10Result = "" !== guild.description;
  }
  if (tmp10Result) {
    const obj22 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: guild.description };
    tmp10Result = closure_8(tmp2(5761).Text, obj22);
  }
  const obj23 = { children: null };
  items6[1] = tmp10Result;
  obj5.children = items6;
  const items7 = [closure_9(guild(7121).PressableHighlight, obj5)];
  const obj24 = {
    style: tmp.joinTarget,
    children: closure_8(joins(19839), { guildId: guild.id, guildName: guild.name, joins }),
  };
  items7[1] = closure_8(closure_6, obj24);
  obj23.children = items7;
  return closure_9(closure_6, obj23);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildRecommendations.tsx");

export default function InterestGuildRecommendations(arg0) {
  ({ resource, joins, onComplete } = arg0);
  ({ gameIds, onBack } = arg0);
  const tmp = closure_12();
  const syncExternalStore = noop.useSyncExternalStore(resource.subscribe, resource.getSnapshot);
  const syncExternalStore1 = noop.useSyncExternalStore(joins.subscribe, joins.getSnapshot);
  const interestScrollHeader = InterestScrollHeader.useInterestScrollHeader();
  const obj2 = { style: tmp.screen, children: null };
  ({ scrollY, onScroll } = interestScrollHeader);
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { accessibilityLabel: null, onPress: null };
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj4.onPress = onBack;
  items = [React5(closure_11, obj4), ,];
  const obj5 = { title: null, scrollY: null };
  const intl2 = util.intl;
  obj5.title = intl2.string(_modDef2537["mdhU/Q"]);
  obj5.scrollY = scrollY;
  items[1] = React5(InterestScrollHeader.InterestCompactTitle, obj5);
  const intl3 = util.intl;
  const t = util.t;
  const obj6 = { top: true, children: null };
  const tmp7 = syncExternalStore1.joined.length > 0;
  items[2] = React5(HeaderShared.HeaderTextButton, {
    label: intl3.string(syncExternalStore1.joined.length > 0 ? t.i4jeWR : t["5Wxrcd"]),
    labelStyle: tmp.completion,
    onPress: onComplete,
  });
  obj3.children = items;
  obj6.children = React6(timestampProducer, obj3);
  const items1 = [React5(common_SafeAreaView.SafeAreaPaddingView, obj6)];
  const obj8 = { contentContainerStyle: tmp.content, onScroll, scrollEventThrottle: 16, children: null };
  const obj9 = { style: tmp.intro, children: null };
  const obj10 = { variant: "heading-xl/semibold", color: "text-strong", children: null };
  const intl4 = util.intl;
  obj10.children = intl4.string(_modDef2537.TQdfcH);
  const items2 = [React5(Text_Text.Heading, obj10)];
  const obj11 = { variant: "body-sm/normal", color: "text-default", style: tmp.centered, children: null };
  const intl5 = util.intl;
  obj11.children = intl5.string(_modDef2537["G++b7J"]);
  items2[1] = React5(Text_Text.Text, obj11);
  obj9.children = items2;
  const items3 = [React6(timestampProducer, obj9), React5(InterestPickedGamesDefault, { gameIds }), , ,];
  let tmp10Result = syncExternalStore.guilds.length > 0;
  if (tmp10Result) {
    const obj12 = { guilds: syncExternalStore.guilds, joins };
    tmp10Result = React5(ProgressiveGuildRows, obj12, syncExternalStore.key);
  }
  items3[2] = tmp10Result;
  let tmp10Result2 = 0 === syncExternalStore.guilds.length;
  if (tmp10Result2) {
    tmp10Result2 = "loading" === syncExternalStore.status;
  }
  if (tmp10Result2) {
    tmp10Result2 = React5(InterestGuildSkeleton, {});
  }
  items3[3] = tmp10Result2;
  let tmp8Result = 0 === syncExternalStore.guilds.length;
  if (tmp8Result) {
    tmp8Result = "loading" !== syncExternalStore.status;
  }
  if (tmp8Result) {
    const obj13 = { style: tmp.empty, children: null };
    const obj14 = { variant: "heading-sm/semibold", color: "text-strong", children: null };
    const intl6 = util.intl;
    obj14.children = intl6.string(_modDef2537.rtXXRe);
    const items4 = [React5(Text_Text.Heading, obj14), , ,];
    const obj15 = { variant: "body-sm/normal", color: "text-muted", style: tmp.centered, children: null };
    const intl7 = util.intl;
    obj15.children = intl7.string(_modDef2537.A3YsGV);
    items4[1] = React5(Text_Text.Text, obj15);
    const obj16 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl8 = util.intl;
    obj16.text = intl8.string(_modDef2537.uGhymA);
    obj16.onPress = resource.retry;
    items4[2] = React5(components_Button_Button.Button, obj16);
    const obj17 = { label: null, labelStyle: null, onPress: null };
    const intl9 = util.intl;
    obj17.label = intl9.string(util.t.i4jeWR);
    obj17.labelStyle = tmp.completion;
    obj17.onPress = onComplete;
    items4[3] = React5(HeaderShared.HeaderTextButton, obj17);
    obj13.children = items4;
    tmp8Result = React6(timestampProducer, obj13);
  }
  items3[4] = tmp8Result;
  obj8.children = items3;
  items1[1] = React6(hasOwnProperty, obj8);
  obj2.children = items1;
  return React6(timestampProducer, obj2);
}
