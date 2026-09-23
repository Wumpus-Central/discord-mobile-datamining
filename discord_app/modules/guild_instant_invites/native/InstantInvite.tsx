// === Module 11278: InstantInvite ===

// Module 11278 (InstantInvite)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5194 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 11281 */;
import InstantInviteIconsDefault from "InstantInviteIcons" /* 11283 */;
import InstantInviteCreatorDefault from "InstantInviteCreator" /* 11288 */;
import InviteRolesDisplayDefault from "InviteRolesDisplay" /* 11293 */;
import InstantInviteUsesLabelDefault from "InstantInviteUsesLabel" /* 11295 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(2046).createChannelRecordFromInvite;
const Routes = fn(1074).Routes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4827);
let obj = { creatorWrapper: { marginTop: nativeDefault.space.PX_8, flex: 1 }, gameWrapper: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }, gameText: { flex: 1 } };
let closure_10 = createStyles.createStyles(obj);
let obj3 = { marginTop: nativeDefault.space.PX_8, flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInvite.tsx");

export default noop.memo((onInviteRevoked) => {
  const invite = onInviteRevoked.invite;
  const guild = invite.guild;
  let id;
  ({ uses, maxUses } = invite);
  if (guild != null) {
    id = guild.id;
  }
  const items = [invite];
  const memo = noop.useMemo(() => closure_5(invite.channel), items);
  const tmp = closure_10();
  const items1 = [invite.roles];
  const inviteActions = invite(11290).useInviteActions({ invite, onInviteRevoked: onInviteRevoked.onInviteRevoked });
  const memo1 = noop.useMemo(() => {
    const roles = invite.roles;
    return roles.map((id) => id.id);
  }, items1);
  let tmp9Result = memo1.length > 0 && null != id;
  const obj2 = { direction: "horizontal", justify: "space-between", children: null };
  const items2 = [
    closure_8(invite(4823).Text, { variant: "text-lg/bold", tabularNumbers: true, children: invite.code }),
    closure_8(invite(8260).ContextMenu, {
      items: inviteActions,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { size: "sm", variant: "secondary", icon: InstantInviteIconsDefault.more, accessibilityLabel: null, ref: null };
        const intl = invite(1115).intl;
        obj.accessibilityLabel = intl.string(invite(1115).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_8(invite(8265).IconButton, obj);
      }
    })
  ];
  obj2.children = items2;
  const items3 = [closure_9(invite(5269).Stack, obj2), , , ];
  let obj = invite(11290);
  const obj3 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const obj4 = {
    items: inviteActions,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { size: "sm", variant: "secondary", icon: InstantInviteIconsDefault.more, accessibilityLabel: null, ref: null };
      const intl = invite(1115).intl;
      obj.accessibilityLabel = intl.string(invite(1115).t.DEoVWZ);
      obj.ref = ref.ref;
      const merged1 = Object.assign(merged);
      return closure_1_8(invite(8265).IconButton, obj);
    }
  };
  items3[1] = closure_8(invite(11287).InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  if (tmp9Result) {
    const obj6 = { roleIds: memo1, guildId: id };
    tmp9Result = closure_8(InviteRolesDisplayDefault, obj6);
  }
  const obj7 = { children: null };
  items3[2] = tmp9Result;
  const obj8 = { direction: "horizontal", align: "flex-end", children: null };
  const obj9 = { style: tmp.creatorWrapper, children: closure_8(InstantInviteCreatorDefault, { user: invite.inviter, guildId: id }) };
  const items4 = [closure_8(View, obj9), closure_8(InstantInviteUsesLabelDefault, { uses, maxUses })];
  obj8.children = items4;
  items3[3] = closure_9(invite(5269).Stack, obj8);
  obj7.children = items3;
  return closure_9(invite(5910).Card, obj7);
});
export const LinkedChannelInvite = function LinkedChannelInvite(channel) {
  channel = channel.channel;
  let canUnlinkLobbyChannel;
  dependencyMap = undefined;
  let action;
  const tmp = closure_10();
  let items = [UserStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    if (linkedLobby != null) {
      linked_by = linkedLobby.linked_by;
    }
    return UserStore.getUser(linked_by);
  });
  let obj = channel(504);
  let linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(7499).useGetOrFetchApplication(application_id);
  let obj2 = channel(7499);
  canUnlinkLobbyChannel = channel(11279).useCanUnlinkLobbyChannel(channel);
  let str;
  const tmp2Result = channel(11279);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp9Result = canUnlinkLobbyChannel(11280)(channel.id, str);
  dependencyMap = tmp9Result;
  const items1 = [canUnlinkLobbyChannel, tmp9Result];
  action = action.useCallback(() => {
    if (canUnlinkLobbyChannel) {
      dependencyMap();
    } else {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.JmUENg);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.SrvsML);
      actions_AlertActionCreatorsDefault.show(obj2);
    }
  }, items1);
  const items2 = [, , ];
  ({ guild_id: arr3[0], id: arr3[1] } = channel);
  items2[2] = action;
  const memo = action.useMemo(() => {
    const obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.aW2YlJ);
    obj.IconComponent = ArrowSmallRightIcon.ArrowSmallRightIcon;
    obj.action = function action() {
      channel(closure_2[15]).transitionTo(Routes.CHANNEL(closure_1_0.guild_id, closure_1_0.id));
    };
    const items = [obj, ];
    const obj2 = { label: null, iconSource: null, variant: "destructive", action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.JmUENg);
    obj2.iconSource = InstantInviteIconsDefault.revoke;
    obj2.action = action;
    items[1] = obj2;
    return items;
  }, items2);
  const obj3 = { style: tmp.gameWrapper, children: null };
  const obj4 = { game: getOrFetchApplication, size: null };
  const tmp9 = canUnlinkLobbyChannel(11280);
  obj4.size = channel(7503).GameIconSizes.SIZE_24;
  const items3 = [closure_8(canUnlinkLobbyChannel(7503), obj4), ];
  const obj5 = { ellipsizeMode: "tail", lineClamp: 1, variant: "text-lg/bold", style: tmp.gameText, children: null };
  let name;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  const obj6 = { children: null };
  const obj7 = { direction: "horizontal", justify: "space-between", children: null };
  obj5.children = name;
  items3[1] = closure_8(channel(4823).Text, obj5);
  obj3.children = items3;
  const items4 = [
    closure_9(View, obj3),
    closure_8(channel(8260).ContextMenu, {
      items: memo,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { size: "sm", variant: "secondary", icon: canUnlinkLobbyChannel(11283).more, accessibilityLabel: null, ref: null };
        const intl = channel(1115).intl;
        obj.accessibilityLabel = intl.string(channel(1115).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_8(channel(8265).IconButton, obj);
      }
    })
  ];
  obj7.children = items4;
  const items5 = [closure_9(channel(5269).Stack, obj7), closure_8(channel(11287).InstantInviteDetails, { channel }), ];
  const obj9 = { direction: "horizontal", align: "flex-end", children: null };
  const obj10 = { style: tmp.creatorWrapper, children: closure_8(canUnlinkLobbyChannel(11288), { user: stateFromStores, guildId: channel.guild_id }) };
  obj9.children = closure_8(View, obj10);
  items5[2] = closure_8(channel(5269).Stack, obj9);
  obj6.children = items5;
  return closure_9(channel(5910).Card, obj6);
};