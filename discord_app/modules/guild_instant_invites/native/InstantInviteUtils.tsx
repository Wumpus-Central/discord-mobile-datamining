// discord_app/modules/guild_instant_invites/native/InstantInviteUtils.tsx
import getMore from "get more";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { InstantInviteSources } from "ME";

const require = arg1;
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

export const useInviteActions = function useInviteActions(invite) {
  invite = invite.invite;
  const onInviteRevoked = invite.onInviteRevoked;
  let dependencyMap;
  let callback;
  channel = channel.getChannel(invite.channel.id);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  callback = isPrivateResult;
  let obj = { label: null, iconSource: null, action: null };
  let intl = invite(1236).intl;
  obj[0] = intl.string(invite(1236).t.RDE0Sc);
  obj[1] = onInviteRevoked(9609).share;
  obj[2] = function action() {
    onInviteRevoked(9616)(() => {
      let obj = outer1_0(outer1_2[7]);
      let tmp4;
      if (!getMore) {
        tmp4 = outer1_1(tmp2[8])(closure_0.code);
      }
      obj = { url: tmp4, message: null };
      let formatToPlainStringResult;
      if (getMore) {
        const intl = tmp(tmp2[4]).intl;
        const currentUser = outer1_5.getCurrentUser();
        let str;
        if (currentUser != null) {
          str = currentUser.username;
        }
        if (str == null) {
          str = "";
        }
        obj = { username: null, link: null };
        obj[0] = str;
        obj[1] = outer1_1(tmp2[8])(closure_0.code);
        formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[4]).t["+zWvOQ"], obj);
      }
      obj[1] = formatToPlainStringResult;
      let str2 = "Guild Instant Invite";
      if (getMore) {
        str2 = outer1_6.GROUP_DM;
      }
      return obj.showShareActionSheet(obj, str2);
    });
  };
  const items = [obj, , ];
  obj = { label: null, iconSource: null, action: null };
  const intl2 = invite(1236).intl;
  obj[0] = intl2.string(invite(1236).t.OpuAlK);
  obj[1] = onInviteRevoked(9609).copy;
  obj[2] = function action() {
    if (c3) {
      let tmpResult = tmp(8988);
      tmpResult.handleCopy(invite.code, invite.channel, outer1_6.GROUP_DM, false);
    } else {
      tmpResult = tmp(5677);
      tmpResult.copy(onInviteRevoked(7139)(invite.code));
      const result = invite(3984).presentCopiedToClipboard();
      const obj2 = invite(3984);
    }
  };
  items[1] = obj;
  let obj1 = { label: null, iconSource: null, variant: "destructive", action: null };
  const intl3 = invite(1236).intl;
  obj1[0] = intl3.string(invite(1236).t.v6Yazx);
  obj1[1] = onInviteRevoked(9609).revoke;
  dependencyMap = callback(function*() {
    let closure_0 = tmp3;
    let c3 = 1;
    yield v0(outer1_2[12]).revokeInvite(outer1_0);
    if (1 === tmp7) {
      c3 = 0;
      const obj1 = v0(outer1_2[13]);
      const obj2 = { key: "ERROR_ANOTHER_TRY", content: null };
      const intl = outer1_0(outer1_2[4]).intl;
      obj2[1] = intl.string(outer1_0(outer1_2[4]).t.CKsXk3);
      obj1.open(obj2);
      let c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      if (v0 != null) {
        tmp9(closure_0);
      }
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  });
  obj1[3] = function() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[2] = obj1;
  return items;
};