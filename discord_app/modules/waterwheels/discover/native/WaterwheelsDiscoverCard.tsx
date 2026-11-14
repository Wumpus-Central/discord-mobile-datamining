// === Module 19019: WaterwheelsDiscoverCard ===

// Module 19019 (WaterwheelsDiscoverCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2569 from "module_2569" /* 2569 */;
import GuildRecordUtils from "GuildRecordUtils" /* 5169 */;
import Text_Text from "Text/Text" /* 5929 */;
import FastImageDefault from "FastImage" /* 6020 */;
import GameControllerIcon from "GameControllerIcon" /* 7438 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7963 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 10390 */;
import useChannelListWidthDefault from "useChannelListWidth" /* 18739 */;
import entry_data_ErrorBoundary from "entry_data/ErrorBoundary" /* 19008 */;
import WaterwheelsPostCardDefault from "WaterwheelsPostCard" /* 19009 */;
import selectDiscoverServerAction from "selectDiscoverServerAction" /* 19020 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;

require = fn;
function ServerIdentity(server) {
  server = server.server;
  let flag = server.compact;
  if (flag === undefined) {
    flag = false;
  }
  const onAction = server.onAction;
  const fontScale = server(5944).useFontScale();
  const tmp4 = closure_16();
  const guildId = server.guildId;
  closure_129_0 = guildId;
  let obj = server(5944);
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = server(504).useStateFromStores(items, () => selectDiscoverServerAction.selectDiscoverServerAction(GuildStore.getGuild(guildId)), items1);
  const set = new Set();
  if (server.verified) {
    set.add(GuildFeatures.VERIFIED);
  }
  if (server.partnered) {
    set.add(GuildFeatures.PARTNERED);
  }
  let result = null;
  if (0 !== set.size) {
    const obj3 = { id: null, name: null, icon: null, features: null };
    ({ guildId: obj5.id, name: obj5.name } = server);
    obj3.features = set;
    result = tmp(5169).constructFromPartialGuildRecord(obj3);
    const tmpResult = tmp(5169);
  }
  const obj2 = server(504);
  if (null != server.iconUrl) {
    const items2 = [tmp4.icon, ];
    let iconCompact2 = flag;
    if (flag) {
      iconCompact2 = tmp4.iconCompact;
    }
    const obj4 = { accessible: false, style: null, source: null };
    items2[1] = iconCompact2;
    obj4.style = items2;
    const obj6 = { uri: server.iconUrl };
    obj4.source = obj6;
    let tmp14Result4 = closure_10(onAction(6020), obj4);
    let tmp14 = closure_10;
    const tmp19 = onAction(6020);
  } else {
    tmp14 = closure_10;
    const items3 = [tmp4.icon, ];
    let iconCompact = flag;
    if (flag) {
      iconCompact = tmp4.iconCompact;
    }
    const obj7 = { style: null };
    items3[1] = iconCompact;
    obj7.style = items3;
    tmp14Result4 = tmp14(closure_7, obj7);
  }
  const items4 = [tmp14Result4, ];
  const obj8 = { style: tmp4.identityCopy, children: null };
  const obj9 = { style: tmp4.nameRow, children: null };
  const tmpResult2 = server(5929);
  if (flag) {
    const obj10 = { variant: "body-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    let tmp14Result = tmp14(tmpResult2.Text, obj10);
  } else {
    const obj11 = { variant: "heading-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    tmp14Result = tmp14(tmpResult2.Heading, obj11);
  }
  const items5 = [tmp14Result, , ];
  let tmp14Result5 = null;
  if (null != result) {
    const obj12 = { guild: result, style: tmp4.badge };
    tmp14Result5 = tmp14(onAction(10390), obj12);
  }
  const tmp25 = stateFromStores === server(10225).WaterwheelsActionType.OPEN_GUILD;
  items5[1] = tmp14Result5;
  let tmp14Result6 = null;
  if (tmp25) {
    const obj13 = { size: "xxs", color: onAction(575).colors.ICON_MUTED };
    tmp14Result6 = tmp14(tmp(7963).ChevronSmallRightIcon, obj13);
  }
  items5[2] = tmp14Result6;
  obj9.children = items5;
  const items6 = [closure_11(closure_7, obj9), ];
  const obj14 = { style: tmp4.meta, children: null };
  const obj15 = { style: tmp4.metaItem, children: null };
  const items7 = [tmp14(closure_7, { style: tmp4.dot }), ];
  const obj17 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: null };
  const intl = tmp(1113).intl;
  obj17.children = intl.format(server(1113).t["LC+S+m"], { membersOnline: server.online });
  items7[1] = tmp14(server(5929).Text, obj17);
  obj15.children = items7;
  const items8 = [closure_11(closure_7, obj15), ];
  let tmp12Result = null;
  if (!flag) {
    const obj19 = { style: tmp4.metaItem, children: null };
    const obj20 = { style: null };
    const items9 = [, ];
    ({ dot: arr10[0], mutedDot: arr10[1] } = tmp4);
    obj20.style = items9;
    const items10 = [tmp14(closure_7, obj20), ];
    const obj21 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: null };
    const intl2 = tmp(1113).intl;
    const obj22 = { count: server.members };
    obj21.children = intl2.format(tmp(1113).t.zRl6XR, obj22);
    items10[1] = tmp14(tmp(5929).Text, obj21);
    obj19.children = items10;
    tmp12Result = closure_11(closure_7, obj19);
  }
  const obj23 = { children: null };
  items8[1] = tmp12Result;
  obj14.children = items8;
  items6[1] = closure_11(closure_7, obj14);
  obj8.children = items6;
  items4[1] = closure_11(closure_7, obj8);
  obj23.children = items4;
  const tmp12Result2 = closure_11(closure_12, obj23);
  const items11 = [tmp4.identity, closure_17(fontScale, flag).scaled, ];
  if (flag) {
    flag = tmp4.identityCompact;
  }
  items11[2] = flag;
  if (tmp25) {
    const obj24 = {
      accessibilityRole: "link",
      accessibilityLabel: server.name,
      onPress() {
          const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD, value: { guild_id: server.guildId } };
          return onAction(obj, "identity");
        },
      style: items11,
      children: tmp12Result2
    };
    let tmp14Result7 = tmp14(closure_5, obj24);
  } else {
    const obj25 = { style: items11, children: tmp12Result2 };
    tmp14Result7 = tmp14(closure_7, obj25);
  }
  return tmp14Result7;
}
class ServerActionButton {
  constructor(arg0) {
    server = global.server;
    guildId = server;
    flag = global.fullWidth;
    if (flag === undefined) {
      flag = false;
    }
    ({ joiningGuildIds, onAction } = global);
    c2 = undefined;
    closure_3 = undefined;
    flag2 = undefined;
    if (joiningGuildIds != null) {
      flag2 = joiningGuildIds.has(server.guildId);
    }
    if (flag2 == null) {
      flag2 = false;
    }
    c2 = flag2;
    guildId = server.guildId;
    tmp = guildId;
    tmp2 = c2;
    obj = guildId(c2[9]);
    items = [];
    items[0] = closure_8;
    items1 = [];
    items1[0] = guildId;
    stateFromStores = obj.useStateFromStores(items, () => selectDiscoverServerAction.selectDiscoverServerAction(GuildStore.getGuild(guildId)), items1);
    closure_3 = stateFromStores;
    tmp4 = stateFromStores === guildId(c2[12]).WaterwheelsActionType.OPEN_GUILD;
    intl = guildId(c2[17]).intl;
    t = guildId(c2[17]).t;
    stringResult = intl.string(tmp4 ? t["HO/oXl"] : t.VJlc0S);
    intl2 = tmp(tmp2[17]).intl;
    tmp6 = onAction(tmp2[18]);
    obj1 = { guild: server.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp4 ? tmp6.qGeMEE : tmp6.NOfX8z, obj1);
    tmp8 = jsx;
    str = "sm";
    if (flag) {
      str = "lg";
    }
    obj4 = {
      size: str,
      variant: global.variant,
      text: stringResult,
      accessibilityLabel: formatToPlainStringResult,
      loading: flag2,
      disabled: flag2,
      onPress: function handlePress() {
            if (!flag2) {
              const obj = { type: stateFromStores, value: null };
              const obj2 = { guild_id: guildId.guildId };
              obj.value = obj2;
              importDefault(obj, "button");
            }
          }
    };
    return tmp8(tmp(tmp2[19]).Button, obj4);
  }
}
function ServerRowCard(server) {
  server = server.server;
  const onProfileOpen = server.onProfileOpen;
  ({ joiningGuildIds, onAction } = server);
  const tmp = closure_16();
  const set = new Set();
  if (server.verified) {
    set.add(GuildFeatures.VERIFIED);
  }
  if (server.partnered) {
    set.add(GuildFeatures.PARTNERED);
  }
  let result = null;
  if (0 !== set.size) {
    const obj = { id: null, name: null, icon: null, features: null };
    ({ guildId: obj3.id, name: obj3.name } = server);
    obj.features = set;
    result = GuildRecordUtils.constructFromPartialGuildRecord(obj);
  }
  function openProfile() {
    onProfileOpen(server);
  }
  const obj4 = { style: null, children: null };
  items = [, ];
  ({ serverRow: arr[0], serverProfile: arr[1] } = tmp);
  obj4.style = items;
  const obj5 = { style: tmp.serverHeader, children: null };
  const obj6 = { style: tmp.serverIdentity, accessibilityRole: "button", accessibilityLabel: server.name, accessibilityHint: null, onPress: null, children: null };
  const intl = util.intl;
  obj6.accessibilityHint = intl.string(_modDef2569.nkweXX);
  obj6.onPress = openProfile;
  if (null != server.iconUrl) {
    const obj7 = { accessible: false, style: tmp.icon, source: null };
    const obj8 = { uri: server.iconUrl };
    obj7.source = obj8;
    let tmp16 = refs(FastImageDefault, obj7);
    let tmp15 = refs;
  } else {
    tmp15 = refs;
    const obj9 = { style: tmp.icon };
    tmp16 = refs(metroImportDefault, obj9);
  }
  const items1 = [tmp16, ];
  const obj10 = { style: tmp.identityCopy, children: null };
  const obj11 = { style: tmp.nameRow, children: null };
  const items2 = [tmp15(Text_Text.Text, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, style: tmp.name, children: server.name }), , ];
  let tmp15Result = null;
  if (null != result) {
    const obj13 = { guild: result, style: tmp.badge };
    tmp15Result = tmp15(GuildBadgeV2Default, obj13);
  }
  items2[1] = tmp15Result;
  items2[2] = tmp15(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs", accessible: false });
  obj11.children = items2;
  const items3 = [closure_1_11(metroImportDefault, obj11), ];
  const obj14 = { style: tmp.serverOnline, children: null };
  const obj15 = { style: null };
  const items4 = [, ];
  ({ dot: arr5[0], serverDot: arr5[1] } = tmp);
  obj15.style = items4;
  const items5 = [tmp15(metroImportDefault, obj15), ];
  const obj16 = { variant: "body-xs/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj16.children = intl2.format(util.t["LC+S+m"], { membersOnline: server.online });
  items5[1] = tmp15(Text_Text.Text, obj16);
  obj14.children = items5;
  items3[1] = closure_1_11(metroImportDefault, obj14);
  obj10.children = items3;
  items1[1] = closure_1_11(metroImportDefault, obj10);
  obj6.children = items1;
  const items6 = [closure_1_11(hasOwnProperty, obj6), tmp15(metroImportDefault, { style: tmp.serverJoinTarget, children: tmp15(ServerActionButton, { server, variant: "primary", joiningGuildIds, onAction }) })];
  obj5.children = items6;
  const items7 = [closure_1_11(metroImportDefault, obj5), ];
  let tmp15Result2 = null;
  if (null != server.description) {
    tmp15Result2 = null;
    if ("" !== server.description) {
      const obj19 = { accessible: false, onPress: openProfile, children: null };
      const obj20 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: server.description };
      obj19.children = tmp15(Text_Text.Text, obj20);
      tmp15Result2 = tmp15(hasOwnProperty, obj19);
    }
  }
  items7[1] = tmp15Result2;
  obj4.children = items7;
  return closure_1_11(metroImportDefault, obj4);
}
function GameHero(game) {
  game = game.game;
  const width = game.width;
  const onAction = game.onAction;
  const tmp = closure_16();
  const hero = tmp;
  items = [tmp.hero, width];
  let coverUrl = game.heroUrl;
  const memo = noop.useMemo(() => {
    items = [hero.hero, { width }];
    return items;
  }, items);
  if (coverUrl == null) {
    coverUrl = game.coverUrl;
  }
  let formatToPlainStringResult = null;
  if (null != game.l30Rank) {
    const intl = game(onAction[17]).intl;
    let obj = { rank: game.l30Rank };
    formatToPlainStringResult = intl.formatToPlainString(width(onAction[18]).mnK52O, obj);
  }
  const items1 = [game.name, formatToPlainStringResult, game.description];
  const found = items1.filter((item) => null != item);
  const obj2 = { style: memo, children: null };
  const obj3 = { style: tmp.heroBody, accessibilityRole: "button", accessibilityLabel: found.join(", "), accessibilityHint: null, onPress: null, children: null };
  const intl2 = game(onAction[17]).intl;
  obj3.accessibilityHint = intl2.string(width(onAction[18]).xH6QTw);
  obj3.onPress = function onPress() {
    const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME, value: { game_id: game.gameId } };
    return onAction(obj, "identity");
  };
  const obj4 = { style: tmp.heroArt, children: null };
  let tmp13 = null;
  if (null != coverUrl) {
    const obj5 = { accessible: false, style: tmp.heroImage, source: null, resizeMode: "cover" };
    const obj6 = { uri: coverUrl };
    obj5.source = obj6;
    tmp13 = closure_10(tmp12(tmp11[13]), obj5);
  }
  const items2 = [tmp13, closure_10(width(onAction[20]), { pointerEvents: "none", colors, style: tmp.heroImage }), ];
  const obj8 = { style: tmp.heroTop, children: null };
  let tmp15Result = null;
  if (null != game.coverUrl) {
    const obj9 = { accessible: false, style: tmp.cover, source: null };
    const obj10 = { uri: game.coverUrl };
    obj9.source = obj10;
    tmp15Result = closure_10(tmp12(tmp11[13]), obj9);
  }
  const items3 = [tmp15Result, ];
  const obj11 = { style: tmp.heroTitle, children: null };
  let tmp15Result3 = null;
  if (null != game.l30Rank) {
    const obj12 = { style: tmp.heroRank, children: null };
    const obj13 = { rank: game.l30Rank, compact: true };
    obj12.children = closure_10(tmp12(tmp11[21]), obj13);
    tmp15Result3 = closure_10(closure_7, obj12);
  }
  const items4 = [tmp15Result3, closure_10(game(onAction[14]).Heading, { variant: "heading-md/semibold", color: "text-overlay-light", lineClamp: 2, children: game.name })];
  obj11.children = items4;
  items3[1] = closure_11(closure_7, obj11);
  obj8.children = items3;
  items2[2] = closure_11(closure_7, obj8);
  obj4.children = items2;
  const items5 = [closure_11(closure_7, obj4), , ];
  let tmp15Result4 = null;
  if (null != game.description) {
    const obj15 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: game.description };
    tmp15Result4 = closure_10(tmp10(tmp11[14]).Text, obj15);
  }
  items5[1] = tmp15Result4;
  let tmp7Result = null;
  if (null == game.server) {
    const obj16 = { style: tmp.heroCta, children: null };
    const obj17 = { variant: "body-sm/semibold", color: "text-strong", children: null };
    const intl3 = tmp10(tmp11[17]).intl;
    obj17.children = intl3.string(tmp12(tmp11[18]).xH6QTw);
    const items6 = [closure_10(tmp10(tmp11[14]).Text, obj17), ];
    const obj18 = { size: "xxs", color: tmp12(tmp11[6]).colors.ICON_MUTED };
    items6[1] = closure_10(tmp10(tmp11[16]).ChevronSmallRightIcon, obj18);
    obj16.children = items6;
    tmp7Result = closure_11(closure_7, obj16);
  }
  items5[2] = tmp7Result;
  obj3.children = items5;
  const items7 = [closure_11(closure_5, obj3), ];
  let tmp7Result2 = null;
  if (null != game.server) {
    const obj19 = { style: tmp.heroServer, children: null };
    const obj20 = { server: game.server, compact: true, onAction };
    const items8 = [closure_10(ServerIdentity, obj20), ];
    const obj21 = { server: game.server, variant: "secondary", joiningGuildIds: game.joiningGuildIds, onAction };
    items8[1] = closure_10(ServerActionButton, obj21);
    obj19.children = items8;
    tmp7Result2 = closure_11(closure_7, obj19);
  }
  items7[1] = tmp7Result2;
  obj2.children = items7;
  return closure_11(closure_7, obj2);
}
function CarouselCard(arg0) {
  ({ carousel, joiningGuildIds: require, onAction: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_16();
  const tmp4 = useChannelListWidthDefault();
  [tmp6, c2] = noop.useState(null);
  if (diff == null) {
    diff = tmp4 - 2 * PX_16;
  }
  let num = 0;
  if (carousel.items.length > 1) {
    num = PX_64;
  }
  _slicedToArray = Math.max(0, diff - num);
  const obj = { style: tmp.carouselSection, children: null };
  const obj2 = { style: tmp.carouselHeader, children: null };
  const obj3 = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items = [, ];
  ({ icon: arr[0], carouselIconTile: arr[1] } = tmp);
  obj3.style = items;
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  obj3.children = closure_10(GameControllerIcon.GameControllerIcon, { size: "md", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, accessible: false });
  const items1 = [closure_10(closure_7, obj3), ];
  const obj5 = { style: tmp.identityCopy, children: null };
  const items2 = [closure_10(Text_Text.Heading, { variant: "heading-sm/semibold", color: "text-strong", children: carousel.header.title }), closure_10(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: carousel.header.subtitle })];
  obj5.children = items2;
  items1[1] = closure_11(closure_7, obj5);
  obj2.children = items1;
  const items3 = [closure_11(closure_7, obj2), ];
  const obj8 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    onLayout: function handleLayout(nativeEvent) {
      width = nativeEvent.nativeEvent.layout.width;
      if (width > 0) {
        _undefined(width);
      }
    },
    contentContainerStyle: tmp.carouselContent,
    children: null
  };
  const items4 = carousel.items;
  obj8.children = items4.map((game) => refs(GameHero, { game, width, joiningGuildIds, onAction }, game.gameId));
  items3[1] = closure_10(closure_6, obj8);
  obj.children = items3;
  return closure_11(closure_7, obj);
}
function WaterwheelsDiscoverCardContent(entry) {
  entry = entry.entry;
  ({ joiningGuildIds, onAction } = entry);
  const onProfileOpen = entry.onProfileOpen;
  onAction = undefined;
  const card = entry.card;
  const layout = card.layout;
  items = [entry, onAction];
  onAction = noop.useCallback((arg0, arg1) => onAction(entry, arg0, arg1), items);
  const items1 = [entry, onProfileOpen];
  const type = layout.type;
  if ("server_row" === type) {
    const obj2 = { server: layout, joiningGuildIds, onAction, onProfileOpen: tmp3 };
    return refs(ServerRowCard, obj2);
  } else if ("carousel" === type) {
    const obj3 = { carousel: layout, joiningGuildIds, onAction };
    return refs(CarouselCard, obj3);
  } else if ("post" === type) {
    const obj = { style: tmp.row, children: null };
    const obj4 = {
      post: layout,
      action: card.actions[0],
      onAction(arg0) {
          return callback(arg0, "button");
        }
    };
    obj.children = refs(WaterwheelsPostCardDefault, obj4);
    return refs(metroImportDefault, obj);
  }
  tmp = closure_16();
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, ScrollView: closure_6, View: metroImportDefault, StyleSheet } = get_ActivityIndicator);
const GuildFeatures = fn(1072).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_12 = nativeDefault.space.PX_12;
const PX_64 = nativeDefault.space.PX_64;
const PX_16 = nativeDefault.space.PX_16;
const colors = ["rgba(0,0,0,0.65)", "rgba(0,0,0,0.85)"];
let createStyles = fn(5306);
let obj2 = { row: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 }, carouselSection: null, carouselHeader: null, carouselIconTile: null, carouselContent: null, serverRow: null, serverProfile: null, serverJoinTarget: null, serverHeader: null, serverIdentity: null, badge: null, identity: null, identityCompact: null, identityCopy: null, nameRow: null, name: null, icon: null, iconCompact: null, meta: null, serverOnline: null, metaItem: null, metaText: null, dot: null, serverDot: null, mutedDot: null, hero: null, heroBody: null, heroArt: null, heroImage: null, heroTop: null, heroTitle: null, heroRank: null, cover: null, heroCta: null, heroServer: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.carouselSection = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.carouselHeader = { flexDirection: "row", alignItems: "center", gap: PX_12 };
let obj4 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.carouselIconTile = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj5 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.carouselContent = { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_12 };
let obj6 = { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_12 };
obj2.serverRow = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.serverProfile = { paddingVertical: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.serverJoinTarget = { flexShrink: 0 };
let obj8 = { paddingVertical: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.serverHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.serverIdentity = { flex: 1, minWidth: 0, flexDirection: "row", alignItems: "center", gap: PX_12, minHeight: nativeDefault.space.PX_48 };
let size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
obj2.badge = size;
obj2.identity = { flex: 1, flexDirection: "row", alignItems: "center", gap: PX_12, minWidth: 0 };
let obj10 = { flex: 1, minWidth: 0, flexDirection: "row", alignItems: "center", gap: PX_12, minHeight: nativeDefault.space.PX_48 };
obj2.identityCompact = { gap: nativeDefault.space.PX_8 };
let obj11 = { gap: nativeDefault.space.PX_8 };
obj2.identityCopy = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let obj12 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.nameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.name = { flexShrink: 1 };
const size1 = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.icon = size1;
const size2 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm };
obj2.iconCompact = size2;
let obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.meta = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj14 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.serverOnline = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj15 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.metaItem = { flexDirection: "row", maxWidth: "100%", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.metaText = { flexShrink: 1 };
const size3 = { flexShrink: 0, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_STATUS_ONLINE };
obj2.dot = size3;
const size4 = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.serverDot = size4;
let obj16 = { flexDirection: "row", maxWidth: "100%", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.mutedDot = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
let obj17 = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
obj2.hero = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj18 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.heroBody = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
let obj19 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
obj2.heroArt = { minHeight: 184, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
obj2.heroImage = StyleSheet.absoluteFillObject;
let obj20 = { minHeight: 184, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
obj2.heroTop = { flexDirection: "row", alignItems: "flex-end", gap: nativeDefault.space.PX_12 };
let obj21 = { flexDirection: "row", alignItems: "flex-end", gap: nativeDefault.space.PX_12 };
obj2.heroTitle = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let obj22 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.heroRank = { flexDirection: "row", minHeight: 20, marginBottom: nativeDefault.space.PX_4 };
const size5 = { width: 72, height: 96, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.cover = size5;
let obj23 = { flexDirection: "row", minHeight: 20, marginBottom: nativeDefault.space.PX_4 };
obj2.heroCta = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: nativeDefault.space.PX_12 };
let obj24 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: nativeDefault.space.PX_12 };
obj2.heroServer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_16 = createStyles.createStyles(obj2);
createStyles = fn(5306);
let closure_17 = createStyles.createStyles((arg0, arg1) => {
  let num = 180;
  if (arg1) {
    num = 120;
  }
  return { scaled: { flexBasis: num * arg0 } };
});
size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverCard.tsx");

export default function WaterwheelsDiscoverCard(entry) {
  const obj = { fallback: null, children: null };
  const merged = Object.assign(entry);
  obj.children = refs(WaterwheelsDiscoverCardContent, {});
  return refs(entry_data_ErrorBoundary.ErrorBoundary, obj, entry.entry.key);
};
export { ServerActionButton };