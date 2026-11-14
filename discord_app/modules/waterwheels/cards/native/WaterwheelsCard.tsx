// discord_app/modules/waterwheels/cards/native/WaterwheelsCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import WaterwheelsCardTypes from "../WaterwheelsCardTypes.tsx";
import entry_data_ErrorBoundary from "../../../content_inventory/entry_data/ErrorBoundary.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import PushNotificationPermissionStore from "../../../../stores/native/PushNotificationPermissionStore.tsx";

const require = globalThis.__r;

require = fn;
function getWaterwheelsCardEligible(card) {
  if (authorizationStatus === undefined) {
    authorizationStatus = PushNotificationPermissionStore.authorizationStatus;
  }
  let mapped = memo;
  if (memo === undefined) {
    const accounts = ConnectedAccountsStore.getAccounts();
    const found = accounts.filter((revoked) => !revoked.revoked);
    mapped = found.map((type) => type.type);
  }
  const actions = card.actions;
  const iter = actions.find(
    (type) => type.type === require("WaterwheelsCardTypes").WaterwheelsActionType.OPEN_CONNECTION,
  );
  let type;
  if (iter != null) {
    type = iter.type;
  }
  let tmp4 =
    type !== WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION || !mapped.includes(iter.value.provider);
  if (tmp4) {
    let tmp5 = "notifications_permission" !== card.clientEligibility;
    if (!tmp5) {
      tmp5 = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
      const tmp6 = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
function WaterwheelsCardContent(card) {
  card = card.card;
  const onAction = card.onAction;
  let action;
  function handleAction(arg0) {
    onAction(arg0, card);
  }
  const tmp = closure_12();
  dependencyMap = tmp;
  closure_129_0 = card;
  items = [ConnectedAccountsStore, PushNotificationPermissionStore];
  if (
    obj.useStateFromStores(items, () => {
      const accounts = ConnectedAccountsStore.getAccounts();
      const found = accounts.filter((revoked) => !revoked.revoked);
      return getWaterwheelsCardEligible(
        card,
        PushNotificationPermissionStore.authorizationStatus,
        found.map((type) => type.type),
      );
    })
  ) {
    const layout = card.layout;
    if ("server_row" === layout.type) {
      const obj2 = { style: tmp.card, children: null };
      let obj3 = { server: layout, onAction: handleAction };
      obj2.children = closure_10(WaterwheelsServerRowRenderer, obj3);
      return closure_10(closure_5, obj2);
    } else if ("carousel" === layout.type) {
      let obj4 = { style: tmp.card, children: null };
      const obj5 = { style: tmp.row, children: null };
      let tmp15 = null;
      if (null != layout.header.iconUrl) {
        const obj6 = { style: tmp.icon, source: null };
        let obj7 = { uri: layout.header.iconUrl };
        obj6.source = obj7;
        tmp15 = closure_10(onAction(6020), obj6);
      }
      const items1 = [tmp15];
      const obj8 = { children: null };
      const obj9 = { variant: "heading-xs/semibold", children: layout.header.title };
      const items2 = [closure_10(tmp2(5929).Heading, obj9)];
      const obj10 = { variant: "body-sm/normal", children: layout.header.subtitle };
      items2[1] = closure_10(tmp2(5929).Text, obj10);
      obj8.children = items2;
      items1[1] = closure_11(closure_5, obj8);
      obj5.children = items1;
      const items3 = [closure_11(closure_5, obj5)];
      const obj11 = { horizontal: true, contentContainerStyle: tmp.rail, children: null };
      const items4 = layout.items;
      obj11.children = items4.map((children) => {
        const obj = { style: game.game, children: null };
        items = [refs(Text_Text.Text, { variant: "body-xs/medium", children: children.rank }), , , ,];
        let tmp4Result = null;
        if (null != children.coverUrl) {
          const obj3 = { style: game.hero, source: null };
          const obj4 = { uri: children.coverUrl };
          obj3.source = obj4;
          tmp4Result = refs(FastImageDefault, obj3);
        }
        items[1] = tmp4Result;
        items[2] = refs(Text_Text.Heading, { variant: "heading-sm/semibold", children: children.name });
        items[3] = refs(Text_Text.Text, { variant: "body-sm/normal", children: children.description });
        let tmp4Result2 = null;
        if (null != children.server) {
          const obj7 = { server: children.server, onAction: handleAction };
          tmp4Result2 = refs(WaterwheelsServerRowRenderer, obj7);
        }
        items[4] = tmp4Result2;
        obj.children = items;
        return closure_2_11(hasOwnProperty, obj, children.gameId);
      });
      items3[1] = closure_10(action, obj11);
      obj4.children = items3;
      return closure_11(closure_5, obj4);
    } else {
      action = card.actions[0];
      let type;
      if (action != null) {
        type = action.type;
      }
      if (type === tmp2(10225).WaterwheelsActionType.OPEN_CONNECTION) {
        const obj12 = { style: tmp.card, children: null };
        const obj13 = { post: layout, action, onAction: handleAction };
        obj12.children = closure_10(onAction(19009), obj13);
        let tmp25Result = closure_10(closure_5, obj12);
      } else {
        const obj14 = { style: tmp.card, children: null };
        const obj15 = { variant: "heading-sm/semibold", children: layout.title };
        const items5 = [closure_10(tmp2(5929).Heading, obj15), , ,];
        const obj16 = { variant: "body-md/normal", children: layout.body };
        items5[1] = closure_10(tmp2(5929).Text, obj16);
        let tmp27Result = null;
        if (null != layout.imageUrl) {
          const obj17 = { style: tmp.media, source: null };
          const obj18 = { uri: layout.imageUrl };
          obj17.source = obj18;
          tmp27Result = closure_10(onAction(6020), obj17);
        }
        items5[2] = tmp27Result;
        let tmp27Result2 = null;
        if (null != action) {
          tmp27Result2 = null;
          if (null != layout.actionLabel) {
            const obj19 = {
              text: layout.actionLabel,
              onPress() {
                onAction(first, card);
              },
            };
            tmp27Result2 = closure_10(tmp2(5936).Button, obj19);
          }
        }
        items5[3] = tmp27Result2;
        obj14.children = items5;
        tmp25Result = closure_11(closure_5, obj14);
      }
      return tmp25Result;
    }
  } else {
    return null;
  }
  obj = card(504);
}
function WaterwheelsServerRowRenderer(server) {
  server = server.server;
  const onAction = server.onAction;
  const tmp = closure_12();
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
    children: null,
  };
  if (null != server.iconUrl) {
    const obj3 = { style: tmp.icon, source: null };
    const obj4 = { uri: server.iconUrl };
    obj3.source = obj4;
    let tmp6 = closure_10(onAction(joined[12]), obj3);
    let tmp5 = closure_10;
  } else {
    tmp5 = closure_10;
    const obj5 = { style: tmp.icon };
    tmp6 = closure_10(closure_5, obj5);
  }
  items = [tmp6, ,];
  const obj6 = { style: tmp.copy, children: null };
  const obj7 = { style: tmp.row, children: null };
  if (!server.verified) {
    const items1 = [null];
    const obj9 = { variant: "body-md/semibold", lineClamp: 1, children: server.name };
    items1[1] = tmp5(server(joined[13]).Text, obj9);
    obj7.children = items1;
    const items2 = [closure_11(closure_5, obj7)];
    const obj10 = { style: tmp.serverMeta, children: null };
    let tmp2Result = null;
    if (null != server.online) {
      const obj11 = { style: tmp.row, children: null };
      const obj12 = { style: tmp.dot };
      const items3 = [tmp5(closure_5, obj12)];
      const obj13 = { variant: "body-xs/medium", children: null };
      const intl = tmp14(tmp15[17]).intl;
      const obj14 = { membersOnline: server.online };
      obj13.children = intl.format(tmp14(tmp15[17]).t["LC+S+m"], obj14);
      items3[1] = tmp5(tmp14(tmp15[13]).Text, obj13);
      obj11.children = items3;
      tmp2Result = closure_11(closure_5, obj11);
    }
    const items4 = [tmp2Result];
    let tmp2Result2 = null;
    if (null != server.members) {
      const obj15 = { style: tmp.row, children: null };
      const obj16 = { style: null };
      const items5 = [,];
      ({ dot: arr8[0], mutedDot: arr8[1] } = tmp);
      obj16.style = items5;
      const items6 = [tmp5(closure_5, obj16)];
      const obj17 = { variant: "body-xs/medium", children: null };
      const intl2 = tmp14(tmp15[17]).intl;
      const obj18 = { count: server.members };
      obj17.children = intl2.format(tmp14(tmp15[17]).t.zRl6XR, obj18);
      items6[1] = tmp5(tmp14(tmp15[13]).Text, obj17);
      obj15.children = items6;
      tmp2Result2 = closure_11(closure_5, obj15);
    }
    items4[1] = tmp2Result2;
    obj10.children = items4;
    items2[1] = closure_11(closure_5, obj10);
    obj6.children = items2;
    items[1] = closure_11(closure_5, obj6);
    let tmp5Result = null;
    if (joined) {
      const obj19 = { size: "md", color: onAction(tmp15[8]).colors.INTERACTIVE_MUTED };
      tmp5Result = tmp5(tmp14(tmp15[18]).ChevronSmallRightIcon, obj19);
    }
    items[2] = tmp5Result;
    obj2.children = items;
    const items7 = [closure_11(closure_3, obj2)];
    const intl3 = tmp14(tmp15[17]).intl;
    const t = tmp14(tmp15[17]).t;
    const obj20 = {
      size: "sm",
      variant: "secondary",
      text: intl3.string(joined ? t["HO/oXl"] : t.VJlc0S),
      onPress() {
        const WaterwheelsActionType = WaterwheelsCardTypes.WaterwheelsActionType;
        const obj = {
          type: joined ? WaterwheelsActionType.OPEN_GUILD : WaterwheelsActionType.JOIN_GUILD,
          value: { guild_id: server.guildId },
        };
        return onAction(obj);
      },
    };
    items7[1] = tmp5(server(joined[15]).Button, obj20);
    obj.children = items7;
    return closure_11(closure_5, obj);
  } else {
    let REFRESH_SMALL_16 = joined;
    const obj21 = {
      id: null,
      name: null,
      icon: null,
      features: null,
      approximate_member_count: null,
      approximate_presence_count: null,
    };
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
    REFRESH_SMALL_16 = onAction(REFRESH_SMALL_16[16]).Sizes.REFRESH_SMALL_16;
    obj41.size = REFRESH_SMALL_16;
    tmp5(onAction(joined[16]), obj41);
    const tmp11 = onAction(joined[16]);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildFeatures = fn(1072).GuildFeatures;
const constants = fn(6902).NotificationAuthorizationStatus;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  card: {
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_12,
    borderBottomWidth: 1,
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  row: null,
  identity: null,
  copy: null,
  icon: null,
  media: null,
  game: null,
  hero: null,
  serverMeta: null,
  dot: null,
  mutedDot: null,
  rail: null,
};
let obj3 = {
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.identity = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
let obj5 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
obj2.copy = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let size = {
  width: nativeDefault.space.PX_40,
  height: nativeDefault.space.PX_40,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.icon = size;
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.media = {
  width: "100%",
  aspectRatio: 1.7777777777777777,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj7 = {
  width: "100%",
  aspectRatio: 1.7777777777777777,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.game = {
  width: 280,
  padding: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj8 = {
  width: 280,
  padding: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.hero = {
  height: 144,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj9 = {
  height: 144,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.serverMeta = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const size1 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
};
obj2.dot = size1;
let obj10 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.mutedDot = { backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
let obj11 = { backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
obj2.rail = { gap: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsCard.tsx");

export { getWaterwheelsCardEligible };
export function useWaterwheelsCardEligible(arg0) {
  _require = arg0;
  items = [ConnectedAccountsStore, PushNotificationPermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const accounts = ConnectedAccountsStore.getAccounts();
    const found = accounts.filter((revoked) => !revoked.revoked);
    return getWaterwheelsCardEligible(
      card,
      PushNotificationPermissionStore.authorizationStatus,
      found.map((type) => type.type),
    );
  });
}
export function WaterwheelsCard(card) {
  const obj = { fallback: null, children: null };
  const merged = Object.assign(card);
  obj.children = refs(WaterwheelsCardContent, {});
  return refs(entry_data_ErrorBoundary.ErrorBoundary, obj, card.card.id);
}
