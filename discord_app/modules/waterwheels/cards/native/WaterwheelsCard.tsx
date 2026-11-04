// === Module 18831: WaterwheelsCard ===

// Module 18831 (WaterwheelsCard)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5761 */;
import FastImageDefault from "FastImage" /* 5851 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 9073 */;
import noop from "module_19" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14191 */;

const require = globalThis.__r;

require = fn;
function WaterwheelsServerRowRenderer(server) {
  server = server.server;
  const onAction = server.onAction;
  const tmp = closure_11();
  const joined = server.joined;
  let obj = { style: tmp.row, children: null };
  const obj2 = {
    accessibilityRole: "link",
    accessibilityLabel: server.name,
    accessibilityState: { disabled: !joined },
    disabled: !joined,
    onPress: function open() {
      const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD, value: { guild_id: server.guildId } };
      return onAction(obj);
    },
    style: tmp.identity,
    children: null
  };
  if (null != server.iconUrl) {
    const obj3 = { style: tmp.icon, source: null };
    const obj4 = { uri: server.iconUrl };
    obj3.source = obj4;
    let tmp6 = closure_9(onAction(joined[9]), obj3);
    let tmp5 = closure_9;
  } else {
    tmp5 = closure_9;
    const obj5 = { style: tmp.icon };
    tmp6 = closure_9(closure_5, obj5);
  }
  items = [tmp6, , ];
  const obj6 = { style: tmp.copy, children: null };
  const obj7 = { style: tmp.row, children: null };
  if (!server.verified) {
    const items1 = [null, ];
    const obj9 = { variant: "body-md/semibold", lineClamp: 1, children: server.name };
    items1[1] = tmp5(server(joined[10]).Text, obj9);
    obj7.children = items1;
    const items2 = [closure_10(closure_5, obj7), ];
    const obj10 = { style: tmp.serverMeta, children: null };
    let tmp2Result = null;
    if (null != server.online) {
      const obj11 = { style: tmp.row, children: null };
      const obj12 = { style: tmp.dot };
      const items3 = [tmp5(closure_5, obj12), ];
      const obj13 = { variant: "body-xs/medium", children: null };
      const intl = tmp14(tmp15[14]).intl;
      const obj14 = { membersOnline: server.online };
      obj13.children = intl.format(tmp14(tmp15[14]).t["LC+S+m"], obj14);
      items3[1] = tmp5(tmp14(tmp15[10]).Text, obj13);
      obj11.children = items3;
      tmp2Result = closure_10(closure_5, obj11);
    }
    const items4 = [tmp2Result, ];
    let tmp2Result2 = null;
    if (null != server.members) {
      const obj15 = { style: tmp.row, children: null };
      const obj16 = { style: null };
      const items5 = [, ];
      ({ dot: arr8[0], mutedDot: arr8[1] } = tmp);
      obj16.style = items5;
      const items6 = [tmp5(closure_5, obj16), ];
      const obj17 = { variant: "body-xs/medium", children: null };
      const intl2 = tmp14(tmp15[14]).intl;
      const obj18 = { count: server.members };
      obj17.children = intl2.format(tmp14(tmp15[14]).t.zRl6XR, obj18);
      items6[1] = tmp5(tmp14(tmp15[10]).Text, obj17);
      obj15.children = items6;
      tmp2Result2 = closure_10(closure_5, obj15);
    }
    items4[1] = tmp2Result2;
    obj10.children = items4;
    items2[1] = closure_10(closure_5, obj10);
    obj6.children = items2;
    items[1] = closure_10(closure_5, obj6);
    let tmp5Result = null;
    if (joined) {
      const obj19 = { size: "md", color: onAction(tmp15[7]).colors.INTERACTIVE_MUTED };
      tmp5Result = tmp5(tmp14(tmp15[15]).ChevronSmallRightIcon, obj19);
    }
    items[2] = tmp5Result;
    obj2.children = items;
    const items7 = [closure_10(closure_3, obj2), ];
    const intl3 = tmp14(tmp15[14]).intl;
    const t = tmp14(tmp15[14]).t;
    const obj20 = {
      size: "sm",
      variant: "secondary",
      text: intl3.string(joined ? t["HO/oXl"] : t.VJlc0S),
      onPress() {
          const WaterwheelsActionType = WaterwheelsCardTypes.WaterwheelsActionType;
          const obj = { type: joined ? WaterwheelsActionType.OPEN_GUILD : WaterwheelsActionType.JOIN_GUILD, value: { guild_id: server.guildId } };
          return onAction(obj);
        }
    };
    items7[1] = tmp5(server(joined[11]).Button, obj20);
    obj.children = items7;
    return closure_10(closure_5, obj);
  } else {
    let REFRESH_SMALL_16 = joined;
    const obj21 = { id: null, name: null, icon: null, features: null, approximate_member_count: null, approximate_presence_count: null };
    ({ guildId: obj8.id, name: obj8.name, iconUrl: obj8.icon } = server);
    if (server.verified) {
      const items8 = [GuildFeatures.VERIFIED];
      let items9 = items8;
    } else {
      items9 = [];
    }
    const obj41 = { guild: null, size: null, disableColor: true };
    obj21.features = items9;
    ({ members: obj8.approximate_member_count, online: obj8.approximate_presence_count } = server);
    obj41.guild = obj21;
    REFRESH_SMALL_16 = onAction(REFRESH_SMALL_16[13]).Sizes.REFRESH_SMALL_16;
    obj41.size = REFRESH_SMALL_16;
    tmp5(onAction(joined[13]), obj41);
    const tmp11 = onAction(joined[13]);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildFeatures = fn(1072).GuildFeatures;
const constants = fn(8080).NotificationAuthorizationStatus;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { card: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE }, row: null, identity: null, copy: null, icon: null, media: null, game: null, hero: null, serverMeta: null, dot: null, mutedDot: null, rail: null };
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.identity = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
let obj5 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
obj2.copy = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.icon = size;
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.media = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj7 = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.game = { width: 280, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj8 = { width: 280, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.hero = { height: 144, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj9 = { height: 144, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.serverMeta = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const size1 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.dot = size1;
let obj10 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.mutedDot = { backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
let obj11 = { backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
obj2.rail = { gap: nativeDefault.space.PX_12 };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsCard.tsx");

export function getWaterwheelsCardEligible(clientEligibility) {
  let authorizationStatus = stateFromStores;
  if (stateFromStores === undefined) {
    authorizationStatus = PushNotificationPermissionStore.authorizationStatus;
  }
  let tmp2 = "notifications_permission" !== clientEligibility.clientEligibility;
  if (!tmp2) {
    tmp2 = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
    const tmp3 = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
  }
  return tmp2;
}
export function useWaterwheelsCardEligible(arg0) {
  _require = arg0;
  return require("initialize").useStateFromStores([], () => {
    const authorizationStatus = PushNotificationPermissionStore.authorizationStatus;
    let tmp = "notifications_permission" !== card.clientEligibility;
    if (!tmp) {
      tmp = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
      const tmp2 = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
    }
    return tmp;
  });
}
export function WaterwheelsCard(card) {
  card = card.card;
  const onAction = card.onAction;
  let first;
  function handleAction(arg0) {
    onAction(arg0, card);
  }
  let tmp = closure_11();
  dependencyMap = tmp;
  closure_129_0 = card;
  if (obj.useStateFromStores([], () => {
    const authorizationStatus = PushNotificationPermissionStore.authorizationStatus;
    let tmp = "notifications_permission" !== card.clientEligibility;
    if (!tmp) {
      tmp = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
      const tmp2 = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
    }
    return tmp;
  })) {
    const layout = card.layout;
    if ("server_row" === layout.type) {
      const obj2 = { style: tmp.card, children: null };
      let obj3 = { server: layout, onAction: handleAction };
      obj2.children = closure_9(WaterwheelsServerRowRenderer, obj3);
      return closure_9(closure_5, obj2);
    } else if ("carousel" === layout.type) {
      let obj4 = { style: tmp.card, children: null };
      const obj5 = { style: tmp.row, children: null };
      let tmp10 = null;
      if (null != layout.header.iconUrl) {
        const obj6 = { style: tmp.icon, source: null };
        let obj7 = { uri: layout.header.iconUrl };
        obj6.source = obj7;
        tmp10 = closure_9(onAction(5851), obj6);
      }
      items = [tmp10, ];
      const obj8 = { children: null };
      const obj9 = { variant: "heading-xs/semibold", children: layout.header.title };
      const items1 = [closure_9(tmp2(5761).Heading, obj9), ];
      const obj10 = { variant: "body-sm/normal", children: layout.header.subtitle };
      items1[1] = closure_9(tmp2(5761).Text, obj10);
      obj8.children = items1;
      items[1] = closure_10(closure_5, obj8);
      obj5.children = items;
      const items2 = [closure_10(closure_5, obj5), ];
      const obj11 = { horizontal: true, contentContainerStyle: tmp.rail, children: null };
      const items3 = layout.items;
      obj11.children = items3.map((children) => {
        const obj = { style: game.game, children: null };
        items = [React6(Text_Text.Text, { variant: "body-xs/medium", children: children.rank }), , , , ];
        let tmp4Result = null;
        if (null != children.coverUrl) {
          const obj3 = { style: game.hero, source: null };
          const obj4 = { uri: children.coverUrl };
          obj3.source = obj4;
          tmp4Result = React6(FastImageDefault, obj3);
        }
        items[1] = tmp4Result;
        items[2] = React6(Text_Text.Heading, { variant: "heading-sm/semibold", children: children.name });
        items[3] = React6(Text_Text.Text, { variant: "body-sm/normal", children: children.description });
        let tmp4Result2 = null;
        if (null != children.server) {
          const obj7 = { server: children.server, onAction: handleAction };
          tmp4Result2 = React6(WaterwheelsServerRowRenderer, obj7);
        }
        items[4] = tmp4Result2;
        obj.children = items;
        return closure_2_10(hasOwnProperty, obj, children.gameId);
      });
      items2[1] = closure_9(first, obj11);
      obj4.children = items2;
      return closure_10(closure_5, obj4);
    } else {
      first = card.actions[0];
      const obj12 = { style: tmp.card, children: null };
      const obj13 = { variant: "heading-sm/semibold", children: layout.title };
      const items4 = [closure_9(tmp2(5761).Heading, obj13), , , ];
      const obj14 = { variant: "body-md/normal", children: layout.body };
      items4[1] = closure_9(tmp2(5761).Text, obj14);
      let tmp21Result = null;
      if (null != layout.imageUrl) {
        const obj15 = { style: tmp.media, source: null };
        const obj16 = { uri: layout.imageUrl };
        obj15.source = obj16;
        tmp21Result = closure_9(onAction(5851), obj15);
      }
      items4[2] = tmp21Result;
      let tmp21Result2 = null;
      if (null != first) {
        tmp21Result2 = null;
        if (null != layout.actionLabel) {
          const obj17 = {
            text: layout.actionLabel,
            onPress() {
                      onAction(first, card);
                    }
          };
          tmp21Result2 = closure_9(tmp2(5768).Button, obj17);
        }
      }
      items4[3] = tmp21Result2;
      obj12.children = items4;
      return closure_10(closure_5, obj12);
    }
  } else {
    return null;
  }
  obj = card(504);
}