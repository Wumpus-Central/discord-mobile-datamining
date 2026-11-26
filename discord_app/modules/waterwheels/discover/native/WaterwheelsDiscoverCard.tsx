// discord_app/modules/waterwheels/discover/native/WaterwheelsDiscoverCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2655 from "../../Waterwheels.messages.js";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import GuildBadgeV2Default from "../../../guild/native/GuildBadgeV2.tsx";
import WaterwheelsCardTypes from "../../cards/WaterwheelsCardTypes.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import useChannelListWidthDefault from "../../../channel_list_v2/native/useChannelListWidth.tsx";
import entry_data_ErrorBoundary from "../../../content_inventory/entry_data/ErrorBoundary.tsx";
import WaterwheelsPostCardDefault from "../../cards/native/WaterwheelsPostCard.tsx";
import WaterwheelsSectionLabelDefault from "../../cards/native/WaterwheelsSectionLabel.tsx";
import selectDiscoverServerAction from "../selectDiscoverServerAction.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameStore from "../../../games/GameStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function ServerIdentity(server) {
  server = server.server;
  let flag = server.compact;
  if (flag === undefined) {
    flag = false;
  }
  const onAction = server.onAction;
  const fontScale = server(5649).useFontScale();
  const tmp4 = closure_17();
  const guildId = server.guildId;
  closure_129_0 = guildId;
  let obj = server(5649);
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = server(504).useStateFromStores(
    items,
    () => selectDiscoverServerAction.selectDiscoverServerAction(GuildStore.getGuild(guildId)),
    items1,
  );
  set = new Set();
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
    result = tmp(4906).constructFromPartialGuildRecord(obj3);
    const tmpResult = tmp(4906);
  }
  const obj2 = server(504);
  if (null != server.iconUrl) {
    const items2 = [tmp4.icon];
    let iconCompact2 = flag;
    if (flag) {
      iconCompact2 = tmp4.iconCompact;
    }
    const obj4 = { accessible: false, style: null, source: null };
    items2[1] = iconCompact2;
    obj4.style = items2;
    const obj6 = { uri: server.iconUrl };
    obj4.source = obj6;
    let tmp14Result4 = closure_11(onAction(5730), obj4);
    let tmp14 = closure_11;
    const tmp19 = onAction(5730);
  } else {
    tmp14 = closure_11;
    const items3 = [tmp4.icon];
    let iconCompact = flag;
    if (flag) {
      iconCompact = tmp4.iconCompact;
    }
    const obj7 = { style: null };
    items3[1] = iconCompact;
    obj7.style = items3;
    tmp14Result4 = tmp14(closure_7, obj7);
  }
  const items4 = [tmp14Result4];
  const obj8 = { style: tmp4.identityCopy, children: null };
  const obj9 = { style: tmp4.nameRow, children: null };
  const tmpResult2 = server(5634);
  if (flag) {
    const obj10 = {
      variant: "body-sm/semibold",
      color: "text-strong",
      lineClamp: 1,
      style: tmp4.name,
      children: server.name,
    };
    let tmp14Result = tmp14(tmpResult2.Text, obj10);
  } else {
    const obj11 = {
      variant: "heading-sm/semibold",
      color: "text-strong",
      lineClamp: 1,
      style: tmp4.name,
      children: server.name,
    };
    tmp14Result = tmp14(tmpResult2.Heading, obj11);
  }
  const items5 = [tmp14Result, ,];
  let tmp14Result5 = null;
  if (null != result) {
    const obj12 = { guild: result, style: tmp4.badge };
    tmp14Result5 = tmp14(onAction(8735), obj12);
  }
  const tmp25 = stateFromStores === server(8932).WaterwheelsActionType.OPEN_GUILD;
  items5[1] = tmp14Result5;
  let tmp14Result6 = null;
  if (tmp25) {
    const obj13 = { size: "xxs", color: onAction(575).colors.ICON_MUTED };
    tmp14Result6 = tmp14(tmp(7558).ChevronSmallRightIcon, obj13);
  }
  items5[2] = tmp14Result6;
  obj9.children = items5;
  const items6 = [closure_12(closure_7, obj9)];
  const obj14 = { style: tmp4.meta, children: null };
  const obj15 = { style: tmp4.metaItem, children: null };
  const items7 = [tmp14(closure_7, { style: tmp4.dot })];
  const obj17 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: null };
  const intl = tmp(1112).intl;
  obj17.children = intl.format(server(1112).t["LC+S+m"], { membersOnline: server.online });
  items7[1] = tmp14(server(5634).Text, obj17);
  obj15.children = items7;
  const items8 = [closure_12(closure_7, obj15)];
  let tmp12Result = null;
  if (!flag) {
    const obj19 = { style: tmp4.metaItem, children: null };
    const obj20 = { style: null };
    const items9 = [,];
    ({ dot: arr10[0], mutedDot: arr10[1] } = tmp4);
    obj20.style = items9;
    const items10 = [tmp14(closure_7, obj20)];
    const obj21 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: null };
    const intl2 = tmp(1112).intl;
    const obj22 = { count: server.members };
    obj21.children = intl2.format(tmp(1112).t.zRl6XR, obj22);
    items10[1] = tmp14(tmp(5634).Text, obj21);
    obj19.children = items10;
    tmp12Result = closure_12(closure_7, obj19);
  }
  const obj23 = { children: null };
  items8[1] = tmp12Result;
  obj14.children = items8;
  items6[1] = closure_12(closure_7, obj14);
  obj8.children = items6;
  items4[1] = closure_12(closure_7, obj8);
  obj23.children = items4;
  const tmp12Result2 = closure_12(closure_13, obj23);
  const items11 = [tmp4.identity, closure_18(fontScale, flag).scaled];
  if (flag) {
    flag = tmp4.identityCompact;
  }
  items11[2] = flag;
  if (tmp25) {
    const obj24 = {
      accessibilityRole: "link",
      accessibilityLabel: server.name,
      onPress() {
        const obj = {
          type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD,
          value: { guild_id: server.guildId },
        };
        return onAction(obj, "identity");
      },
      style: items11,
      children: tmp12Result2,
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
    flag2 = global.grow;
    if (flag2 === undefined) {
      flag2 = false;
    }
    ({ joiningGuildIds, onAction } = global);
    c2 = undefined;
    closure_3 = undefined;
    flag3 = undefined;
    if (joiningGuildIds != null) {
      flag3 = joiningGuildIds.has(server.guildId);
    }
    if (flag3 == null) {
      flag3 = false;
    }
    c2 = flag3;
    guildId = server.guildId;
    tmp = guildId;
    tmp2 = c2;
    obj = guildId(c2[10]);
    items = [];
    items[0] = closure_9;
    items1 = [];
    items1[0] = guildId;
    stateFromStores = obj.useStateFromStores(
      items,
      () => selectDiscoverServerAction.selectDiscoverServerAction(GuildStore.getGuild(guildId)),
      items1,
    );
    closure_3 = stateFromStores;
    tmp4 = stateFromStores === guildId(c2[13]).WaterwheelsActionType.OPEN_GUILD;
    intl = guildId(c2[18]).intl;
    t = guildId(c2[18]).t;
    stringResult = intl.string(tmp4 ? t["HO/oXl"] : t.VJlc0S);
    intl2 = tmp(tmp2[18]).intl;
    tmp6 = onAction(tmp2[19]);
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
      grow: flag2,
      text: stringResult,
      accessibilityLabel: formatToPlainStringResult,
      loading: flag3,
      disabled: flag3,
      onPress: function handlePress() {
        if (!flag3) {
          const obj = { type: stateFromStores, value: null };
          const obj2 = { guild_id: guildId.guildId };
          obj.value = obj2;
          importDefault(obj, "button");
        }
      },
    };
    return tmp8(tmp(tmp2[20]).Button, obj4);
  }
}
function ServerRowCard(server) {
  server = server.server;
  const onProfileOpen = server.onProfileOpen;
  ({ showSectionLabel, joiningGuildIds, onAction } = server);
  let tmp = closure_17();
  set = new Set();
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
  items = [server.name, , ,];
  const intl = util.intl;
  items[1] = intl.formatToPlainString(util.t["LC+S+m"], { membersOnline: server.online });
  const intl2 = util.intl;
  items[2] = intl2.formatToPlainString(util.t.zRl6XR, { count: server.members });
  items[3] = server.description;
  const found = items.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  const obj6 = { style: null, children: null };
  const items1 = [,];
  ({ serverRow: arr2[0], serverProfile: arr2[1] } = tmp);
  obj6.style = items1;
  let tmp14 = null;
  const joined = found.join(", ");
  if (showSectionLabel) {
    const obj7 = { icon: null, text: null };
    const obj8 = { size: "sm", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    obj7.icon = closure_1_11(ServerIcon.ServerIcon, obj8);
    const intl3 = util.intl;
    obj7.text = intl3.string(_modDef2655["2iP+h2"]);
    tmp14 = closure_1_11(WaterwheelsSectionLabelDefault, obj7);
  }
  const items2 = [tmp14];
  const obj9 = { style: tmp.serverCard, children: null };
  const obj10 = {
    accessibilityRole: "button",
    accessibilityLabel: joined,
    accessibilityHint: null,
    onPress: null,
    children: null,
  };
  const intl4 = util.intl;
  obj10.accessibilityHint = intl4.string(_modDef2655.nkweXX);
  obj10.onPress = function openProfile() {
    onProfileOpen(server);
  };
  let tmp20 = null;
  if (null != server.bannerUrl) {
    const obj11 = { accessible: false, style: tmp.serverBanner, source: null, resizeMode: "cover" };
    const obj12 = { uri: server.bannerUrl };
    obj11.source = obj12;
    tmp20 = closure_1_11(FastImageDefault, obj11);
  }
  const items3 = [tmp20];
  const items4 = [tmp.serverContent];
  const obj13 = { style: items4, children: null };
  items4[1] = null == server.bannerUrl && tmp.serverContentWithoutBanner;
  if (null != server.iconUrl) {
    const items5 = [tmp.serverIcon];
    let serverIconOverlap = null != server.bannerUrl;
    if (serverIconOverlap) {
      serverIconOverlap = tmp.serverIconOverlap;
    }
    const obj14 = { accessible: false, style: null, source: null };
    items5[1] = serverIconOverlap;
    obj14.style = items5;
    const obj15 = { uri: server.iconUrl };
    obj14.source = obj15;
    let tmp23Result2 = closure_1_11(FastImageDefault, obj14);
    let tmp23 = closure_1_11;
    const tmp19Result = FastImageDefault;
  } else {
    tmp23 = closure_1_11;
    const items6 = [tmp.serverIcon];
    const obj16 = { style: null };
    items6[1] = null != server.bannerUrl && tmp.serverIconOverlap;
    obj16.style = items6;
    tmp23Result2 = tmp23(metroImportDefault, obj16);
    const tmp24 = null != server.bannerUrl && tmp.serverIconOverlap;
  }
  const items7 = [tmp23Result2];
  const obj17 = { style: tmp.serverCopy, children: null };
  const obj18 = { style: tmp.serverTitle, children: null };
  const obj19 = { style: tmp.nameRow, children: null };
  const items8 = [
    tmp23(Text_Text.Text, {
      variant: "body-md/medium",
      color: "text-default",
      lineClamp: 1,
      style: tmp.name,
      children: server.name,
    }),
  ];
  let tmp23Result = null;
  if (null != result) {
    const obj21 = { guild: result, style: tmp.badge };
    tmp23Result = tmp23(GuildBadgeV2Default, obj21);
  }
  items8[1] = tmp23Result;
  obj19.children = items8;
  const items9 = [application_id(metroImportDefault, obj19)];
  const obj22 = { style: null, children: null };
  const items10 = [,];
  ({ meta: arr11[0], serverMeta: arr11[1] } = tmp);
  obj22.style = items10;
  const obj23 = { style: tmp.metaItem, children: null };
  const obj24 = { style: null };
  const items11 = [,];
  ({ dot: arr12[0], serverOnlineDot: arr12[1] } = tmp);
  obj24.style = items11;
  const items12 = [tmp23(metroImportDefault, obj24)];
  const obj25 = { variant: "body-xs/normal", color: "text-subtle", style: tmp.metaText, children: null };
  const intl5 = util.intl;
  obj25.children = intl5.format(util.t["LC+S+m"], { membersOnline: server.online });
  items12[1] = tmp23(Text_Text.Text, obj25);
  obj23.children = items12;
  const items13 = [application_id(metroImportDefault, obj23)];
  const obj27 = { style: tmp.metaItem, children: null };
  const obj28 = { style: null };
  const items14 = [,];
  ({ dot: arr15[0], serverOfflineDot: arr15[1] } = tmp);
  obj28.style = items14;
  const items15 = [tmp23(metroImportDefault, obj28)];
  const obj29 = { variant: "body-xs/normal", color: "text-subtle", style: tmp.metaText, children: null };
  const intl6 = util.intl;
  obj29.children = intl6.format(util.t.zRl6XR, { count: server.members });
  items15[1] = tmp23(Text_Text.Text, obj29);
  obj27.children = items15;
  items13[1] = application_id(metroImportDefault, obj27);
  obj22.children = items13;
  items9[1] = application_id(metroImportDefault, obj22);
  obj18.children = items9;
  const items16 = [application_id(metroImportDefault, obj18)];
  let tmp23Result3 = null;
  if (null != server.description) {
    tmp23Result3 = null;
    if ("" !== server.description) {
      const obj31 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: server.description };
      tmp23Result3 = tmp23(Text_Text.Text, obj31);
    }
  }
  items16[1] = tmp23Result3;
  obj17.children = items16;
  items7[1] = application_id(metroImportDefault, obj17);
  obj13.children = items7;
  items3[1] = application_id(metroImportDefault, obj13);
  obj10.children = items3;
  const items17 = [
    application_id(hasOwnProperty, obj10),
    tmp23(metroImportDefault, {
      style: tmp.serverContent,
      children: tmp23(ServerActionButton, { server, variant: "secondary", grow: true, joiningGuildIds, onAction }),
    }),
  ];
  obj9.children = items17;
  items2[1] = application_id(metroImportDefault, obj9);
  obj6.children = items2;
  return application_id(metroImportDefault, obj6);
}
function GameHero(game) {
  game = game.game;
  const width = game.width;
  const onAction = game.onAction;
  const tmp = closure_17();
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
    const intl = game(onAction[18]).intl;
    let obj = { rank: game.l30Rank };
    formatToPlainStringResult = intl.formatToPlainString(width(onAction[19]).mnK52O, obj);
  }
  const items1 = [game.name, formatToPlainStringResult, game.description];
  const found = items1.filter((item) => null != item);
  const obj2 = { style: memo, children: null };
  const obj3 = {
    style: tmp.heroBody,
    accessibilityRole: "button",
    accessibilityLabel: found.join(", "),
    accessibilityHint: null,
    onPress: null,
    children: null,
  };
  const intl2 = game(onAction[18]).intl;
  obj3.accessibilityHint = intl2.string(width(onAction[19]).xH6QTw);
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
    tmp13 = closure_11(tmp12(tmp11[14]), obj5);
  }
  const items2 = [tmp13, closure_11(width(onAction[23]), { pointerEvents: "none", colors, style: tmp.heroImage })];
  const obj8 = { style: tmp.heroTop, children: null };
  let tmp15Result = null;
  if (null != game.coverUrl) {
    const obj9 = { accessible: false, style: tmp.cover, source: null };
    const obj10 = { uri: game.coverUrl };
    obj9.source = obj10;
    tmp15Result = closure_11(tmp12(tmp11[14]), obj9);
  }
  const items3 = [tmp15Result];
  const obj11 = { style: tmp.heroTitle, children: null };
  let tmp15Result3 = null;
  if (null != game.l30Rank) {
    const obj12 = { style: tmp.heroRank, children: null };
    const obj13 = { rank: game.l30Rank, compact: true };
    obj12.children = closure_11(tmp12(tmp11[24]), obj13);
    tmp15Result3 = closure_11(closure_7, obj12);
  }
  const items4 = [
    tmp15Result3,
    closure_11(game(onAction[15]).Heading, {
      variant: "heading-md/semibold",
      color: "text-overlay-light",
      lineClamp: 2,
      children: game.name,
    }),
  ];
  obj11.children = items4;
  items3[1] = closure_12(closure_7, obj11);
  obj8.children = items3;
  items2[2] = closure_12(closure_7, obj8);
  obj4.children = items2;
  const items5 = [closure_12(closure_7, obj4), ,];
  let tmp15Result4 = null;
  if (null != game.description) {
    const obj15 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: game.description };
    tmp15Result4 = closure_11(tmp10(tmp11[15]).Text, obj15);
  }
  items5[1] = tmp15Result4;
  let tmp7Result = null;
  if (null == game.server) {
    const obj16 = { style: tmp.heroCta, children: null };
    const obj17 = { variant: "body-sm/semibold", color: "text-strong", children: null };
    const intl3 = tmp10(tmp11[18]).intl;
    obj17.children = intl3.string(tmp12(tmp11[19]).xH6QTw);
    const items6 = [closure_11(tmp10(tmp11[15]).Text, obj17)];
    const obj18 = { size: "xxs", color: tmp12(tmp11[7]).colors.ICON_MUTED };
    items6[1] = closure_11(tmp10(tmp11[17]).ChevronSmallRightIcon, obj18);
    obj16.children = items6;
    tmp7Result = closure_12(closure_7, obj16);
  }
  items5[2] = tmp7Result;
  obj3.children = items5;
  const items7 = [closure_12(closure_5, obj3)];
  let tmp7Result2 = null;
  if (null != game.server) {
    const obj19 = { style: tmp.heroServer, children: null };
    const obj20 = { server: game.server, compact: true, onAction };
    const items8 = [closure_11(ServerIdentity, obj20)];
    const obj21 = { server: game.server, variant: "secondary", joiningGuildIds: game.joiningGuildIds, onAction };
    items8[1] = closure_11(ServerActionButton, obj21);
    obj19.children = items8;
    tmp7Result2 = closure_12(closure_7, obj19);
  }
  items7[1] = tmp7Result2;
  obj2.children = items7;
  return closure_12(closure_7, obj2);
}
function GamePoster(game) {
  game = game.game;
  const onAction = game.onAction;
  const tmp = closure_17();
  items = [GameStore];
  const items1 = [game.gameId];
  let formatToPlainStringResult = null;
  const stateFromStores = game(504).useStateFromStores(items, () => GameStore.getGame(game.gameId), items1);
  if (null != game.l30Rank) {
    const intl = tmp2(1112).intl;
    const obj2 = { rank: game.l30Rank };
    formatToPlainStringResult = intl.formatToPlainString(onAction(2655).mnK52O, obj2);
  }
  const items2 = [game.name, formatToPlainStringResult, game.description];
  const found = items2.filter((item) => null != item);
  const obj3 = {
    style: tmp.poster,
    accessibilityRole: "button",
    accessibilityLabel: found.join(", "),
    accessibilityHint: null,
    onPress: null,
    children: null,
  };
  const intl2 = tmp2(1112).intl;
  obj3.accessibilityHint = intl2.string(onAction(2655).xH6QTw);
  obj3.onPress = function onPress() {
    const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME, value: { game_id: game.gameId } };
    return onAction(obj, "identity");
  };
  const obj4 = {
    style: tmp.posterClip,
    children: closure_11(game(18029).GameCoverFromURLs, {
      gameId: game.gameId,
      name: game.name,
      coverUrl: game.coverUrl,
      iconGame: stateFromStores,
      width: 114,
      aspectRatio: 0.6909090909090909,
    }),
  };
  const items3 = [
    closure_11(closure_7, obj4),
    closure_11(closure_7, { pointerEvents: "none", style: tmp.posterBorder }),
  ];
  let tmp9Result = null;
  if (null != game.l30Rank) {
    const obj7 = {
      style: tmp.posterRank,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj8 = { type: null, variant: "inverted", icon: null };
    const obj9 = { text: null };
    const intl3 = tmp2(1112).intl;
    const obj10 = { rank: game.l30Rank };
    obj9.text = intl3.formatToPlainString(tmp2(1112).t.UA6RoE, obj10);
    obj8.type = obj9;
    obj8.icon = tmp2(14303).FireIcon;
    obj7.children = closure_11(tmp2(6159).Badge, obj8);
    tmp9Result = closure_11(closure_7, obj7);
  }
  items3[2] = tmp9Result;
  obj3.children = items3;
  return closure_12(closure_5, obj3);
}
function CarouselCard(arg0) {
  ({ carousel, joiningGuildIds: require, onAction: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_17();
  let tmp4 = useChannelListWidthDefault();
  [tmp6, c2] = noop.useState(null);
  if (diff == null) {
    diff = tmp4 - 2 * PX_16;
  }
  let num = 0;
  if (carousel.items.length > 1) {
    num = PX_64;
  }
  _slicedToArray = Math.max(0, diff - num);
  let obj = { style: tmp.carouselSection, children: null };
  let obj2 = { icon: null, text: null };
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const tmp2Result = WaterwheelsSectionLabelDefault;
  obj2.icon = closure_11(GameControllerIcon.GameControllerIcon, {
    size: "sm",
    color: nativeDefault.colors.ICON_MUTED,
    accessible: false,
  });
  obj2.text = carousel.header.title;
  items = [closure_11(tmp2Result, obj2)];
  const obj4 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    onLayout: function handleLayout(nativeEvent) {
      width = nativeEvent.nativeEvent.layout.width;
      if (width > 0) {
        _undefined(width);
      }
    },
    contentContainerStyle: tmp.carouselContent,
    children: null,
  };
  const items1 = carousel.items;
  obj4.children = items1.map((server) => {
    if (null != server.server) {
      const obj2 = { game: server, width, joiningGuildIds, onAction };
      let tmp4 = closure_2_11(GameHero, obj2, server.gameId);
    } else {
      const obj = { game: server, onAction };
      tmp4 = closure_2_11(GamePoster, obj, server.gameId);
    }
    return tmp4;
  });
  items[1] = closure_11(closure_6, obj4);
  obj.children = items;
  return closure_12(closure_7, obj);
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
    const obj2 = {
      server: layout,
      showSectionLabel: entry.showServerSectionLabel,
      joiningGuildIds,
      onAction,
      onProfileOpen: tmp3,
    };
    return closure_1_11(ServerRowCard, obj2);
  } else if ("carousel" === type) {
    const obj3 = { carousel: layout, joiningGuildIds, onAction };
    return closure_1_11(CarouselCard, obj3);
  } else if ("post" === type) {
    const obj = { style: tmp.row, children: null };
    const obj4 = {
      post: layout,
      discoverSectionLabel: true,
      action: card.actions[0],
      onAction(arg0) {
        return callback(arg0, "button");
      },
    };
    obj.children = closure_1_11(WaterwheelsPostCardDefault, obj4);
    return closure_1_11(metroImportDefault, obj);
  }
  tmp = closure_17();
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, ScrollView: closure_6, StyleSheet, View: metroImportDefault } = get_ActivityIndicator);
const GuildFeatures = fn(1071).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_64 = nativeDefault.space.PX_64;
const PX_16 = nativeDefault.space.PX_16;
const colors = ["rgba(0,0,0,0.65)", "rgba(0,0,0,0.85)"];
let createStyles = fn(5043);
let obj2 = {
  row: {
    paddingTop: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_8,
  },
  carouselSection: null,
  carouselContent: null,
  poster: null,
  posterClip: null,
  posterBorder: null,
  posterRank: null,
  serverRow: null,
  serverProfile: null,
  serverCard: null,
  serverBanner: null,
  serverContent: null,
  serverContentWithoutBanner: null,
  serverIcon: null,
  serverIconOverlap: null,
  serverCopy: null,
  serverTitle: null,
  serverMeta: null,
  serverOnlineDot: null,
  serverOfflineDot: null,
  badge: null,
  identity: null,
  identityCompact: null,
  identityCopy: null,
  nameRow: null,
  name: null,
  icon: null,
  iconCompact: null,
  meta: null,
  metaItem: null,
  metaText: null,
  dot: null,
  mutedDot: null,
  hero: null,
  heroBody: null,
  heroArt: null,
  heroImage: null,
  heroTop: null,
  heroTitle: null,
  heroRank: null,
  cover: null,
  heroCta: null,
  heroServer: null,
};
let obj3 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
obj2.carouselSection = {
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: PX_16,
  paddingBottom: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
let obj4 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: PX_16,
  paddingBottom: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
obj2.carouselContent = {
  gap: nativeDefault.space.PX_10,
  paddingTop: nativeDefault.space.PX_4,
  paddingBottom: nativeDefault.space.PX_12,
};
let size = {
  width: 114,
  height: 165,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj2.poster = size;
let obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.borderRadius = nativeDefault.radii.md;
obj6.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj6.overflow = "hidden";
obj2.posterClip = obj6;
let obj7 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj7.borderRadius = nativeDefault.radii.md;
obj7.borderWidth = 1;
obj7.borderColor = nativeDefault.colors.BORDER_SUBTLE;
obj2.posterBorder = obj7;
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
  alignItems: "flex-start",
  overflow: "hidden",
};
obj2.posterRank = rect;
let obj5 = {
  gap: nativeDefault.space.PX_10,
  paddingTop: nativeDefault.space.PX_4,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.serverRow = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj8 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.serverProfile = { paddingVertical: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
let obj9 = { paddingVertical: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
obj2.serverCard = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
obj2.serverBanner = { height: 111, width: "100%" };
let obj10 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
obj2.serverContent = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
};
let obj11 = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
};
obj2.serverContentWithoutBanner = { paddingTop: nativeDefault.space.PX_12 };
const size1 = {
  width: nativeDefault.space.PX_48,
  height: nativeDefault.space.PX_48,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 4,
  borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.serverIcon = size1;
obj2.serverIconOverlap = { marginTop: -30 };
let obj12 = { paddingTop: nativeDefault.space.PX_12 };
obj2.serverCopy = { gap: nativeDefault.space.PX_12 };
let obj13 = { gap: nativeDefault.space.PX_12 };
obj2.serverTitle = { gap: nativeDefault.space.PX_4 };
let obj14 = { gap: nativeDefault.space.PX_4 };
obj2.serverMeta = { gap: nativeDefault.space.PX_12 };
let obj15 = { gap: nativeDefault.space.PX_12 };
obj2.serverOnlineDot = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
let obj16 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.serverOfflineDot = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
const size2 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
obj2.badge = size2;
obj2.identity = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, minWidth: 0 };
let obj17 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
obj2.identityCompact = { gap: nativeDefault.space.PX_8 };
let obj18 = { gap: nativeDefault.space.PX_8 };
obj2.identityCopy = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let obj19 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.nameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.name = { flexShrink: 1 };
const size3 = {
  width: PX_40,
  height: PX_40,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.icon = size3;
const size4 = {
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.sm,
};
obj2.iconCompact = size4;
let obj20 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.meta = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj21 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.metaItem = {
  flexDirection: "row",
  maxWidth: "100%",
  flexShrink: 1,
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
obj2.metaText = { flexShrink: 1 };
const size5 = {
  flexShrink: 0,
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.ICON_STATUS_ONLINE,
};
obj2.dot = size5;
let obj22 = {
  flexDirection: "row",
  maxWidth: "100%",
  flexShrink: 1,
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
obj2.mutedDot = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
let obj23 = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
obj2.hero = {
  borderRadius: nativeDefault.radii.xl,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj24 = {
  borderRadius: nativeDefault.radii.xl,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.heroBody = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
let obj25 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
obj2.heroArt = {
  minHeight: 184,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  justifyContent: "flex-end",
  padding: nativeDefault.space.PX_12,
};
obj2.heroImage = StyleSheet.absoluteFillObject;
const obj26 = {
  minHeight: 184,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  justifyContent: "flex-end",
  padding: nativeDefault.space.PX_12,
};
obj2.heroTop = { flexDirection: "row", alignItems: "flex-end", gap: nativeDefault.space.PX_12 };
let obj27 = { flexDirection: "row", alignItems: "flex-end", gap: nativeDefault.space.PX_12 };
obj2.heroTitle = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let obj28 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.heroRank = { flexDirection: "row", minHeight: 20, marginBottom: nativeDefault.space.PX_4 };
const size6 = {
  width: 72,
  height: 96,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.cover = size6;
let obj29 = { flexDirection: "row", minHeight: 20, marginBottom: nativeDefault.space.PX_4 };
obj2.heroCta = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingTop: nativeDefault.space.PX_12,
};
const obj30 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingTop: nativeDefault.space.PX_12,
};
obj2.heroServer = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_17 = createStyles.createStyles(obj2);
createStyles = fn(5043);
let closure_18 = createStyles.createStyles((arg0, arg1) => {
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
  obj.children = closure_1_11(WaterwheelsDiscoverCardContent, {});
  return closure_1_11(entry_data_ErrorBoundary.ErrorBoundary, obj, entry.entry.key);
}
export { ServerActionButton };
