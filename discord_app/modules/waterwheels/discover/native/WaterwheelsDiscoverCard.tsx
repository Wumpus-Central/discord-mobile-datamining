// === Module 18884: WaterwheelsDiscoverCard ===

// Module 18884 (WaterwheelsDiscoverCard)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import FastImageDefault from "FastImage" /* 5957 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10156 */;
import entry_data_ErrorBoundary from "entry_data/ErrorBoundary" /* 18879 */;
import selectDiscoverServerAction from "selectDiscoverServerAction" /* 18885 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;

require = fn;
function ServerIdentity(server) {
  server = server.server;
  let flag = server.compact;
  if (flag === undefined) {
    flag = false;
  }
  const onAction = server.onAction;
  const fontScale = server(5881).useFontScale();
  const tmp4 = closure_15();
  let obj = server(5881);
  items = [GuildStore];
  const items1 = [server.guildId];
  const stateFromStores = server(504).useStateFromStores(items, () => {
    const discoverServerAction = selectDiscoverServerAction.selectDiscoverServerAction(GuildStore.getGuild(server.guildId));
    return discoverServerAction === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD;
  }, items1);
  let identityCompact = flag;
  const obj2 = server(504);
  if (null != server.iconUrl) {
    const items2 = [tmp4.icon, ];
    let iconCompact2 = identityCompact;
    if (identityCompact) {
      iconCompact2 = tmp4.iconCompact;
    }
    const obj3 = { style: null, source: null };
    items2[1] = iconCompact2;
    obj3.style = items2;
    const obj4 = { uri: server.iconUrl };
    obj3.source = obj4;
    let tmp9Result4 = closure_10(onAction(5957), obj3);
    let tmp9 = closure_10;
    const tmp14 = onAction(5957);
  } else {
    tmp9 = closure_10;
    const items3 = [tmp4.icon, ];
    let iconCompact = identityCompact;
    if (identityCompact) {
      iconCompact = tmp4.iconCompact;
    }
    const obj5 = { style: null };
    items3[1] = iconCompact;
    obj5.style = items3;
    tmp9Result4 = tmp9(closure_7, obj5);
  }
  const items4 = [tmp9Result4, ];
  const obj6 = { style: tmp4.identityCopy, children: null };
  const obj7 = { style: tmp4.nameRow, children: null };
  const tmpResult = server(5866);
  if (identityCompact) {
    const obj8 = { variant: "body-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    let tmp9Result = tmp9(tmpResult.Text, obj8);
  } else {
    const obj9 = { variant: "heading-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    tmp9Result = tmp9(tmpResult.Heading, obj9);
  }
  const items5 = [tmp9Result, , ];
  if (!server.verified) {
    items5[1] = null;
    let tmp9Result5 = null;
    if (stateFromStores) {
      const obj11 = { size: "xxs", color: onAction(575).colors.ICON_MUTED };
      tmp9Result5 = tmp9(tmp(7897).ChevronSmallRightIcon, obj11);
    }
    items5[2] = tmp9Result5;
    obj7.children = items5;
    const items6 = [closure_11(closure_7, obj7), ];
    const obj12 = { style: tmp4.meta, children: null };
    const obj13 = { style: tmp4.metaItem, children: null };
    const obj14 = { style: tmp4.dot };
    const items7 = [tmp9(closure_7, obj14), ];
    const obj15 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: null };
    const intl = tmp(1113).intl;
    const obj16 = { membersOnline: server.online };
    obj15.children = intl.format(tmp(1113).t["LC+S+m"], obj16);
    items7[1] = tmp9(tmp(5866).Text, obj15);
    obj13.children = items7;
    const items8 = [closure_11(closure_7, obj13), ];
    let tmp7Result = null;
    if (!identityCompact) {
      const obj17 = { style: tmp4.metaItem, children: null };
      const obj18 = { style: null };
      const items9 = [, ];
      ({ dot: arr12[0], mutedDot: arr12[1] } = tmp4);
      obj18.style = items9;
      const items10 = [tmp9(closure_7, obj18), ];
      const obj19 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: null };
      const intl2 = tmp(1113).intl;
      const obj20 = { count: server.members };
      obj19.children = intl2.format(tmp(1113).t.zRl6XR, obj20);
      items10[1] = tmp9(tmp(5866).Text, obj19);
      obj17.children = items10;
      tmp7Result = closure_11(closure_7, obj17);
    }
    const obj21 = { children: null };
    items8[1] = tmp7Result;
    obj12.children = items8;
    items6[1] = closure_11(closure_7, obj12);
    obj6.children = items6;
    items4[1] = closure_11(closure_7, obj6);
    obj21.children = items4;
    const tmp7Result2 = closure_11(closure_12, obj21);
    const items11 = [tmp4.identity, tmp6.scaled, ];
    if (identityCompact) {
      identityCompact = tmp4.identityCompact;
    }
    items11[2] = identityCompact;
    if (stateFromStores) {
      const obj22 = {
        accessibilityRole: "link",
        accessibilityLabel: server.name,
        onPress() {
              const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD, value: { guild_id: server.guildId } };
              return onAction(obj, "identity");
            },
        style: items11,
        children: tmp7Result2
      };
      let tmp9Result6 = tmp9(closure_5, obj22);
    } else {
      const obj23 = { style: items11, children: tmp7Result2 };
      tmp9Result6 = tmp9(closure_7, obj23);
    }
    return tmp9Result6;
  } else {
    let obj24 = { id: null, name: null, icon: null, features: null, approximate_member_count: null, approximate_presence_count: null };
    ({ guildId: obj10.id, name: obj10.name, iconUrl: obj10.icon } = server);
    if (server.verified) {
      const items12 = [GuildFeatures.VERIFIED];
      let items13 = items12;
    } else {
      items13 = [];
    }
    const obj46 = { guild: null, size: null };
    obj24.features = items13;
    ({ members: obj10.approximate_member_count, online: obj10.approximate_presence_count } = server);
    obj46.guild = obj24;
    obj24 = onAction(7657).Sizes.REFRESH_SMALL_16;
    obj46.size = obj24;
    tmp9(onAction(7657), obj46);
    const tmp19 = onAction(7657);
  }
  tmp6 = closure_16(fontScale, flag);
}
function ServerActionButton(server) {
  server = server.server;
  const onAction = server.onAction;
  let stateFromStores;
  items = [GuildStore];
  const items1 = [server.guildId];
  stateFromStores = server(stateFromStores[9]).useStateFromStores(items, () => selectDiscoverServerAction.selectDiscoverServerAction(GuildStore.getGuild(server.guildId)), items1);
  const tmp4 = stateFromStores === server(stateFromStores[11]).WaterwheelsActionType.OPEN_GUILD;
  const intl = server(stateFromStores[16]).intl;
  const t = server(stateFromStores[16]).t;
  let formatToPlainStringResult;
  let obj = server(stateFromStores[9]);
  if (!tmp4) {
    const intl2 = tmp(tmp2[16]).intl;
    const obj2 = { guild: server.name };
    formatToPlainStringResult = intl2.formatToPlainString(onAction(tmp2[17]).NOfX8z, obj2);
  }
  const stringResult = intl.string(tmp4 ? t["HO/oXl"] : t.VJlc0S);
  return closure_10(server(stateFromStores[18]).Button, {
    size: "sm",
    variant: server.variant,
    text: intl.string(tmp4 ? t["HO/oXl"] : t.VJlc0S),
    accessibilityLabel: formatToPlainStringResult,
    onPress: function handlePress() {
      const obj = { type: stateFromStores, value: { guild_id: server.guildId } };
      onAction(obj, "button");
    }
  });
}
function ServerRowCard(arg0) {
  ({ server, onAction } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.row, children: null };
  const obj2 = { style: tmp.identityRow, children: null };
  items = [refs(ServerIdentity, { server, onAction }), refs(ServerActionButton, { server, variant: "primary", onAction })];
  obj2.children = items;
  obj.children = closure_1_11(metroImportDefault, obj2);
  return refs(metroImportDefault, obj);
}
function GameHero(game) {
  game = game.game;
  const width = game.width;
  const onAction = game.onAction;
  const tmp = closure_15();
  const hero = tmp;
  items = [tmp.hero, width];
  let obj = {
    style: noop.useMemo(() => {
      items = [hero.hero, { width }];
      return items;
    }, items),
    children: null
  };
  const obj2 = {
    style: tmp.heroBody,
    accessibilityRole: "button",
    accessibilityLabel: game.name,
    onPress() {
      const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME, value: { game_id: game.gameId } };
      return onAction(obj, "identity");
    },
    children: null
  };
  const obj3 = { style: tmp.heroTop, children: null };
  const obj4 = { style: tmp.heroTitle, children: null };
  const obj5 = { variant: "display-lg", color: "text-strong", accessibilityLabel: null, children: null };
  const intl = game(onAction[16]).intl;
  obj5.accessibilityLabel = intl.formatToPlainString(width(onAction[17]).mnK52O, { rank: game.rank });
  obj5.children = game.rank;
  const items1 = [closure_10(game(onAction[13]).Text, obj5), closure_10(game(onAction[13]).Heading, { variant: "heading-md/semibold", color: "text-strong", lineClamp: 2, children: game.name })];
  obj4.children = items1;
  const items2 = [closure_11(closure_7, obj4), ];
  let tmp5Result = null;
  if (null != game.coverUrl) {
    const obj8 = { style: tmp.cover, source: null };
    const obj9 = { uri: game.coverUrl };
    obj8.source = obj9;
    tmp5Result = closure_10(width(tmp7[12]), obj8);
  }
  items2[1] = tmp5Result;
  obj3.children = items2;
  const items3 = [closure_11(closure_7, obj3), closure_10(game(onAction[13]).Text, { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: game.description })];
  obj2.children = items3;
  const items4 = [closure_11(closure_5, obj2), ];
  let tmp2Result = null;
  if (null != game.server) {
    const obj11 = { style: tmp.heroServer, children: null };
    const obj12 = { server: game.server, compact: true, onAction };
    const items5 = [closure_10(ServerIdentity, obj12), ];
    const obj13 = { server: game.server, variant: "secondary", onAction };
    items5[1] = closure_10(ServerActionButton, obj13);
    obj11.children = items5;
    tmp2Result = closure_11(closure_7, obj11);
  }
  items4[1] = tmp2Result;
  obj.children = items4;
  return closure_11(closure_7, obj);
}
function CarouselCard(arg0) {
  ({ carousel, onAction: require } = arg0);
  importDefault = undefined;
  const tmp = closure_15();
  [tmp3, c1] = noop.useState(null);
  let num = 309;
  if (null != tmp3) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(240, Math.min(309, tmp3 - closure_13 - PX_32));
  }
  const obj = { style: tmp.carouselSection, children: null };
  const obj2 = { style: tmp.carouselHeader, children: null };
  let tmp9 = null;
  if (null != carousel.header.iconUrl) {
    const obj3 = { style: tmp.icon, source: null };
    const obj4 = { uri: carousel.header.iconUrl };
    obj3.source = obj4;
    tmp9 = closure_10(require("FastImage"), obj3);
  }
  items = [tmp9, ];
  const obj5 = { style: tmp.identityCopy, children: null };
  const items1 = [closure_10(require("Text/Text").Heading, { variant: "heading-sm/semibold", color: "text-strong", children: carousel.header.title }), closure_10(require("Text/Text").Text, { variant: "body-sm/medium", color: "text-subtle", children: carousel.header.subtitle })];
  obj5.children = items1;
  items[1] = closure_11(closure_7, obj5);
  obj2.children = items;
  const items2 = [closure_11(closure_7, obj2), ];
  const obj8 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    onLayout: function handleLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.width);
    },
    contentContainerStyle: tmp.carouselContent,
    children: null
  };
  const items3 = carousel.items;
  obj8.children = items3.map((game) => refs(GameHero, { game, width: num, onAction }, game.gameId));
  items2[1] = closure_10(closure_6, obj8);
  obj.children = items2;
  return closure_11(closure_7, obj);
}
function PostCard(onAction) {
  ({ post, action } = onAction);
  onAction = onAction.onAction;
  const tmp = closure_15();
  const obj = { style: tmp.row, children: null };
  items = [refs(Text_Text.Heading, { variant: "heading-sm/semibold", color: "text-strong", children: post.title }), refs(Text_Text.Text, { variant: "body-md/normal", color: "text-default", lineClamp: 4, children: post.body }), , ];
  let tmp4Result = null;
  if (null != post.imageUrl) {
    const obj4 = { style: tmp.media, source: null };
    const obj5 = { uri: post.imageUrl };
    obj4.source = obj5;
    tmp4Result = refs(FastImageDefault, obj4);
  }
  items[2] = tmp4Result;
  let tmp4Result2 = null;
  if (null != action) {
    tmp4Result2 = null;
    if (null != post.actionLabel) {
      const obj6 = { style: tmp.postAction, children: null };
      const obj7 = {
        size: "sm",
        variant: "primary",
        text: post.actionLabel,
        onPress() {
              return onAction(action, "button");
            }
      };
      obj6.children = refs(components_Button_Button.Button, obj7);
      tmp4Result2 = refs(metroImportDefault, obj6);
    }
  }
  items[3] = tmp4Result2;
  obj.children = items;
  return closure_1_11(metroImportDefault, obj);
}
function WaterwheelsDiscoverCardContent(entry) {
  entry = entry.entry;
  const onAction = entry.onAction;
  const card = entry.card;
  const layout = card.layout;
  items = [entry, onAction];
  const callback = noop.useCallback((arg0, arg1) => onAction(entry, arg0, arg1), items);
  const type = layout.type;
  if ("server_row" === type) {
    const obj2 = { server: layout, onAction: callback };
    return refs(ServerRowCard, obj2);
  } else if ("carousel" === type) {
    const obj3 = { carousel: layout, onAction: callback };
    return refs(CarouselCard, obj3);
  } else if ("post" === type) {
    const obj = { post: layout, action: card.actions[0], onAction: callback };
    return refs(PostCard, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const GuildFeatures = fn(1072).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_12 = nativeDefault.space.PX_12;
const sum = PX_40 + PX_12;
const PX_32 = nativeDefault.space.PX_32;
let createStyles = fn(5243);
let obj2 = { row: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 }, carouselSection: null, carouselHeader: null, carouselContent: null, identityRow: null, identity: null, identityCompact: null, identityCopy: null, nameRow: null, name: null, icon: null, iconCompact: null, meta: null, metaItem: null, metaText: null, dot: null, mutedDot: null, hero: null, heroBody: null, heroTop: null, heroTitle: null, cover: null, heroServer: null, media: null, postAction: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.carouselSection = { paddingTop: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
let obj4 = { paddingTop: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.carouselHeader = { flexDirection: "row", alignItems: "center", gap: PX_12, paddingRight: nativeDefault.space.PX_16 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: PX_12, paddingRight: nativeDefault.space.PX_16 };
obj2.carouselContent = { paddingTop: nativeDefault.space.PX_4, paddingLeft: sum, paddingRight: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj6 = { paddingTop: nativeDefault.space.PX_4, paddingLeft: sum, paddingRight: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.identityRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.identity = { flex: 1, flexDirection: "row", alignItems: "center", gap: PX_12, minWidth: 0 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.identityCompact = { gap: nativeDefault.space.PX_8 };
let obj8 = { gap: nativeDefault.space.PX_8 };
obj2.identityCopy = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let obj9 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.nameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.name = { flexShrink: 1 };
let size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.icon = size;
const size1 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm };
obj2.iconCompact = size1;
const obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.meta = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj11 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.metaItem = { flexDirection: "row", maxWidth: "100%", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.metaText = { flexShrink: 1 };
const size2 = { flexShrink: 0, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_STATUS_ONLINE };
obj2.dot = size2;
let obj12 = { flexDirection: "row", maxWidth: "100%", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.mutedDot = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
let obj13 = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
obj2.hero = { borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj14 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.heroBody = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj15 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.heroTop = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj16 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.heroTitle = { flex: 1, justifyContent: "space-between", gap: nativeDefault.space.PX_8, minWidth: 0 };
const size3 = { width: 105, height: 140, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.cover = size3;
let obj17 = { flex: 1, justifyContent: "space-between", gap: nativeDefault.space.PX_8, minWidth: 0 };
obj2.heroServer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj18 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.media = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.postAction = { alignSelf: "flex-start" };
let closure_15 = createStyles.createStyles(obj2);
createStyles = fn(5243);
let closure_16 = createStyles.createStyles((arg0, arg1) => {
  let num = 180;
  if (arg1) {
    num = 120;
  }
  return { scaled: { flexBasis: num * arg0 } };
});
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverCard.tsx");

export default function WaterwheelsDiscoverCard(entry) {
  const obj = { fallback: null, children: null };
  const merged = Object.assign(entry);
  obj.children = refs(WaterwheelsDiscoverCardContent, {});
  return refs(entry_data_ErrorBoundary.ErrorBoundary, obj, entry.entry.key);
};