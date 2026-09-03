// === Module 10894: LinkedChannelInvite ===

// Module 10894 (LinkedChannelInvite)
import memoResult1Default from "memoResult1" /* 10904 */;
import InviteRolesDisplayDefault from "InviteRolesDisplay" /* 10908 */;
import InstantInviteUsesLabelDefault from "InstantInviteUsesLabel" /* 10910 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { createChannelRecordFromInvite as closure_5 } from "createChannelRecord" /* 1390 */;
import { Routes } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ creatorWrapper: { marginLeft: -16, marginBottom: -16, marginTop: 8, flex: 1 }, gameWrapper: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }, gameText: { flex: 1 } });
const memoResult = importAllResult.memo((onInviteRevoked) => {
  const invite = onInviteRevoked.invite;
  const guild = invite.guild;
  let id;
  ({ uses, maxUses } = invite);
  if (guild != null) {
    id = guild.id;
  }
  const items = [invite];
  const memo = importAllResult.useMemo(() => closure_1_5(invite.channel), items);
  let obj = invite(10905);
  const items1 = [invite.roles];
  const inviteActions = obj.useInviteActions({ invite, onInviteRevoked: onInviteRevoked.onInviteRevoked });
  const memo1 = importAllResult.useMemo(() => {
    const roles = invite.roles;
    return roles.map((id) => id.id);
  }, items1);
  let tmp9Result = memo1.length > 0 && null != id;
  obj = { direction: "horizontal", justify: "space-between", children: null };
  obj = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items2 = [
    callback(invite(4474).Text, obj),
    callback(invite(8811).ContextMenu, {
      items: inviteActions,
      children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        const obj = { size: "sm", variant: "secondary", icon: callback(10899).more, accessibilityLabel: null, ref: null };
        const intl = invite(1233).intl;
        obj[3] = intl.string(invite(1233).t.DEoVWZ);
        obj[4] = ref.ref;
        const merged1 = Object.assign(merged);
        return callback2(invite(8018).IconButton, obj);
      }
    })
  ];
  obj[2] = items2;
  const items3 = [callback2(invite(4927).Stack, obj), , , ];
  obj1 = {
    items: inviteActions,
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { size: "sm", variant: "secondary", icon: callback(10899).more, accessibilityLabel: null, ref: null };
      const intl = invite(1233).intl;
      obj[3] = intl.string(invite(1233).t.DEoVWZ);
      obj[4] = ref.ref;
      const merged1 = Object.assign(merged);
      return callback2(invite(8018).IconButton, obj);
    }
  };
  const tmp = callback3();
  items3[1] = callback(invite(10903).InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  if (tmp9Result) {
    const obj3 = { roleIds: null, guildId: null };
    obj3[0] = memo1;
    obj3[1] = id;
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
    const obj5 = { start: true, end: true, userId: null, guildId: null };
    obj5[2] = id2;
    obj5[3] = id;
    tmp9Result = tmp9(memoResult1Default, obj5);
    const tmp15 = memoResult1Default;
  }
  const obj6 = { children: null };
  const obj7 = { direction: "horizontal", align: "flex-end", children: null };
  obj4[1] = tmp9Result;
  const items4 = [callback(View, obj4), callback(InstantInviteUsesLabelDefault, { uses, maxUses })];
  obj7[2] = items4;
  items3[3] = callback2(invite(4927).Stack, obj7);
  obj6[0] = items3;
  return callback2(invite(5610).Card, obj6);
});
const result = require("set").fileFinishedImporting("modules/guild_instant_invites/native/InstantInvite.tsx");

export default memoResult;
export const LinkedChannelInvite = function LinkedChannelInvite(channel) {
  channel = channel.channel;
  let canUnlinkLobbyChannel;
  dependencyMap = undefined;
  let callback;
  const tmp = callback3();
  const linkedLobby = channel.linkedLobby;
  let linked_by;
  if (linkedLobby != null) {
    linked_by = linkedLobby.linked_by;
  }
  let obj = channel(5968);
  const linkedLobby2 = channel.linkedLobby;
  let application_id;
  if (linkedLobby2 != null) {
    application_id = linkedLobby2.application_id;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  canUnlinkLobbyChannel = channel(10895).useCanUnlinkLobbyChannel(channel);
  let str;
  const tmp3Result = channel(10895);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp9Result = canUnlinkLobbyChannel(10896)(channel.id, str);
  dependencyMap = tmp9Result;
  let items = [canUnlinkLobbyChannel, tmp9Result];
  callback = callback.useCallback(() => {
    if (canUnlinkLobbyChannel) {
      dependencyMap();
    } else {
      let obj = canUnlinkLobbyChannel(4859);
      obj = { title: null, body: null };
      const intl = channel(1233).intl;
      obj[0] = intl.string(channel(1233).t.JmUENg);
      const intl2 = channel(1233).intl;
      obj[1] = intl2.string(channel(1233).t.SrvsML);
      obj.show(obj);
    }
  }, items);
  const items1 = [, , ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  items1[2] = callback;
  const memo = callback.useMemo(() => {
    let obj = { label: null, IconComponent: null, action: null };
    const intl = channel(1233).intl;
    obj[0] = intl.string(channel(1233).t.aW2YlJ);
    obj[1] = channel(10897).ArrowSmallRightIcon;
    obj[2] = function action() {
      closure_1_0(closure_1_2[12]).transitionTo(closure_1_6.CHANNEL(closure_0.guild_id, closure_0.id));
    };
    const items = [obj, ];
    obj = { label: null, iconSource: null, variant: "destructive", action: null };
    const intl2 = channel(1233).intl;
    obj[0] = intl2.string(channel(1233).t.JmUENg);
    obj[1] = canUnlinkLobbyChannel(10899).revoke;
    obj[3] = callback;
    items[1] = obj;
    return items;
  }, items1);
  obj = { style: tmp.gameWrapper, children: null };
  obj = { game: getOrFetchApplication, size: null };
  const tmp9 = canUnlinkLobbyChannel(10896);
  obj[1] = channel(5972).GameIconSizes.SIZE_24;
  const items2 = [callback(canUnlinkLobbyChannel(5972), obj), ];
  obj1 = { ellipsizeMode: "tail", lineClamp: 1, variant: "text-lg/bold", style: tmp.gameText, children: null };
  let name;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  const obj2 = { direction: "horizontal", justify: "space-between", children: null };
  obj1[4] = name;
  items2[1] = callback(channel(4474).Text, obj1);
  obj[1] = items2;
  const items3 = [
    closure_8(View, obj),
    callback(channel(8811).ContextMenu, {
      items: memo,
      children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        const obj = { size: "sm", variant: "secondary", icon: canUnlinkLobbyChannel(10899).more, accessibilityLabel: null, ref: null };
        const intl = channel(1233).intl;
        obj[3] = intl.string(channel(1233).t.DEoVWZ);
        obj[4] = ref.ref;
        const merged1 = Object.assign(merged);
        return callback(channel(8018).IconButton, obj);
      }
    })
  ];
  obj2[2] = items3;
  const items4 = [closure_8(channel(4927).Stack, obj2), callback(channel(10903).InstantInviteDetails, { channel }), ];
  const obj4 = { style: tmp.creatorWrapper, children: null };
  let tmp15Result = null;
  if (null != linked_by) {
    const obj5 = { start: true, end: true, userId: null, guildId: null };
    obj5[2] = linked_by;
    obj5[3] = channel.guild_id;
    tmp15Result = tmp15(tmp8(10904), obj5);
  }
  const obj6 = { children: null };
  const obj3 = {
    items: memo,
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { size: "sm", variant: "secondary", icon: canUnlinkLobbyChannel(10899).more, accessibilityLabel: null, ref: null };
      const intl = channel(1233).intl;
      obj[3] = intl.string(channel(1233).t.DEoVWZ);
      obj[4] = ref.ref;
      const merged1 = Object.assign(merged);
      return callback(channel(8018).IconButton, obj);
    }
  };
  const tmp8Result = canUnlinkLobbyChannel(5972);
  obj4[1] = tmp15Result;
  items4[2] = callback(channel(4927).Stack, { direction: "horizontal", align: "flex-end", children: callback(View, obj4) });
  obj6[0] = items4;
  return closure_8(channel(5610).Card, obj6);
};