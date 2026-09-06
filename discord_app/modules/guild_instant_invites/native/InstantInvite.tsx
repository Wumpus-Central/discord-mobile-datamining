// discord_app/modules/guild_instant_invites/native/InstantInvite.tsx
import util from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import ArrowSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ArrowSmallRightIcon.tsx";
import InstantInviteIconsDefault from "InstantInviteIcons.tsx";
import DetailedGuildIdentityUserRowDefault from "../../guild_settings/native/DetailedGuildIdentityUserRow.tsx";
import InviteRolesDisplayDefault from "../../instant_invite/native/InviteRolesDisplay.tsx";
import InstantInviteUsesLabelDefault from "InstantInviteUsesLabel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(1961).createChannelRecordFromInvite;
const Routes = fn(1074).Routes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({
  creatorWrapper: { marginLeft: -16, marginBottom: -16, marginTop: 8, flex: 1 },
  gameWrapper: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 },
  gameText: { flex: 1 },
});
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
  let obj = invite(10943);
  const items1 = [invite.roles];
  const inviteActions = obj.useInviteActions({ invite, onInviteRevoked: onInviteRevoked.onInviteRevoked });
  const memo1 = noop.useMemo(() => {
    const roles = invite.roles;
    return roles.map((id) => id.id);
  }, items1);
  let tmp9Result = memo1.length > 0 && null != id;
  obj = { direction: "horizontal", justify: "space-between", children: null };
  obj = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items2 = [
    closure_7(invite(4556).Text, obj),
    closure_7(invite(8666).ContextMenu, {
      items: inviteActions,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = {
          size: "sm",
          variant: "secondary",
          icon: InstantInviteIconsDefault.more,
          accessibilityLabel: null,
          ref: null,
        };
        const intl = invite(1114).intl;
        obj.accessibilityLabel = intl.string(invite(1114).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_7(invite(8097).IconButton, obj);
      },
    }),
  ];
  obj.children = items2;
  const items3 = [closure_8(invite(4973).Stack, obj), , ,];
  const obj1 = {
    items: inviteActions,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = {
        size: "sm",
        variant: "secondary",
        icon: InstantInviteIconsDefault.more,
        accessibilityLabel: null,
        ref: null,
      };
      const intl = invite(1114).intl;
      obj.accessibilityLabel = intl.string(invite(1114).t.DEoVWZ);
      obj.ref = ref.ref;
      const merged1 = Object.assign(merged);
      return closure_1_7(invite(8097).IconButton, obj);
    },
  };
  const tmp = closure_9();
  items3[1] = closure_7(invite(10941).InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  if (tmp9Result) {
    const obj3 = { roleIds: memo1, guildId: id };
    tmp9Result = tmp9(InviteRolesDisplayDefault, obj3);
  }
  items3[2] = tmp9Result;
  const obj4 = { style: tmp.creatorWrapper, children: null };
  const inviter = invite.inviter;
  let id1;
  if (inviter != null) {
    id1 = inviter.id;
  }
  tmp9Result = null;
  if (null != id1) {
    const inviter2 = invite.inviter;
    let id2;
    if (inviter2 != null) {
      id2 = inviter2.id;
    }
    const obj5 = { start: true, end: true, userId: id2, guildId: id };
    tmp9Result = tmp9(DetailedGuildIdentityUserRowDefault, obj5);
  }
  const obj6 = { children: null };
  const obj7 = { direction: "horizontal", align: "flex-end", children: null };
  obj4.children = tmp9Result;
  const items4 = [closure_7(View, obj4), closure_7(InstantInviteUsesLabelDefault, { uses, maxUses })];
  obj7.children = items4;
  items3[3] = closure_8(invite(4973).Stack, obj7);
  obj6.children = items3;
  return closure_8(invite(5607).Card, obj6);
});
export const LinkedChannelInvite = function LinkedChannelInvite(channel) {
  channel = channel.channel;
  let canUnlinkLobbyChannel;
  dependencyMap = undefined;
  let action;
  const tmp = closure_9();
  const linkedLobby = channel.linkedLobby;
  let linked_by;
  if (linkedLobby != null) {
    linked_by = linkedLobby.linked_by;
  }
  let obj = channel(7168);
  const linkedLobby2 = channel.linkedLobby;
  let application_id;
  if (linkedLobby2 != null) {
    application_id = linkedLobby2.application_id;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  canUnlinkLobbyChannel = channel(10933).useCanUnlinkLobbyChannel(channel);
  let str;
  const tmp3Result = channel(10933);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp9Result = canUnlinkLobbyChannel(10934)(channel.id, str);
  dependencyMap = tmp9Result;
  let items = [canUnlinkLobbyChannel, tmp9Result];
  action = action.useCallback(() => {
    if (canUnlinkLobbyChannel) {
      dependencyMap();
    } else {
      const obj = { title: null, body: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.JmUENg);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.SrvsML);
      obj.show(obj);
    }
  }, items);
  const items1 = [, ,];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  items1[2] = action;
  const memo = action.useMemo(() => {
    let obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.aW2YlJ);
    obj.IconComponent = ArrowSmallRightIcon.ArrowSmallRightIcon;
    obj.action = function action() {
      channel(closure_2[12]).transitionTo(Routes.CHANNEL(closure_1_0.guild_id, closure_1_0.id));
    };
    const items = [obj];
    obj = { label: null, iconSource: null, variant: "destructive", action: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.JmUENg);
    obj.iconSource = InstantInviteIconsDefault.revoke;
    obj.action = action;
    items[1] = obj;
    return items;
  }, items1);
  obj = { style: tmp.gameWrapper, children: null };
  obj = { game: getOrFetchApplication, size: null };
  const tmp9 = canUnlinkLobbyChannel(10934);
  obj.size = channel(7172).GameIconSizes.SIZE_24;
  const items2 = [closure_7(canUnlinkLobbyChannel(7172), obj)];
  const obj1 = { ellipsizeMode: "tail", lineClamp: 1, variant: "text-lg/bold", style: tmp.gameText, children: null };
  let name;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  const obj2 = { direction: "horizontal", justify: "space-between", children: null };
  obj1.children = name;
  items2[1] = closure_7(channel(4556).Text, obj1);
  obj.children = items2;
  const items3 = [
    closure_8(View, obj),
    closure_7(channel(8666).ContextMenu, {
      items: memo,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = {
          size: "sm",
          variant: "secondary",
          icon: canUnlinkLobbyChannel(10937).more,
          accessibilityLabel: null,
          ref: null,
        };
        const intl = channel(1114).intl;
        obj.accessibilityLabel = intl.string(channel(1114).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_7(channel(8097).IconButton, obj);
      },
    }),
  ];
  obj2.children = items3;
  const items4 = [closure_8(channel(4973).Stack, obj2), closure_7(channel(10941).InstantInviteDetails, { channel })];
  const obj4 = { style: tmp.creatorWrapper, children: null };
  let tmp15Result = null;
  if (null != linked_by) {
    const obj5 = { start: true, end: true, userId: linked_by, guildId: channel.guild_id };
    tmp15Result = tmp15(tmp8(10942), obj5);
  }
  const obj6 = { children: null };
  const obj3 = {
    items: memo,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = {
        size: "sm",
        variant: "secondary",
        icon: canUnlinkLobbyChannel(10937).more,
        accessibilityLabel: null,
        ref: null,
      };
      const intl = channel(1114).intl;
      obj.accessibilityLabel = intl.string(channel(1114).t.DEoVWZ);
      obj.ref = ref.ref;
      const merged1 = Object.assign(merged);
      return closure_1_7(channel(8097).IconButton, obj);
    },
  };
  const tmp8Result = canUnlinkLobbyChannel(7172);
  obj4.children = tmp15Result;
  items4[2] = closure_7(channel(4973).Stack, {
    direction: "horizontal",
    align: "flex-end",
    children: closure_7(View, obj4),
  });
  obj6.children = items4;
  return closure_8(channel(5607).Card, obj6);
};
