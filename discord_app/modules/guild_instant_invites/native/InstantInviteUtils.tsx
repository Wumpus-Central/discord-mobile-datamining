// === Module 9967: useInviteActions ===

// Module 9967 (useInviteActions)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { InstantInviteSources } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

export const useInviteActions = function useInviteActions(invite) {
  invite = invite.invite;
  const onInviteRevoked = invite.onInviteRevoked;
  dependencyMap = undefined;
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
  obj[1] = onInviteRevoked(9953).share;
  obj[2] = function action() {
    onInviteRevoked(9968)(() => {
      let obj = invite(closure_1_2[7]);
      let tmp4;
      if (!closure_3) {
        tmp4 = onInviteRevoked(closure_1_2[8])(closure_0.code);
      }
      obj = { url: tmp4, message: null };
      let formatToPlainStringResult;
      if (closure_3) {
        const intl = invite(closure_1_2[4]).intl;
        const currentUser = closure_1_5.getCurrentUser();
        let str;
        if (currentUser != null) {
          str = currentUser.username;
        }
        if (str == null) {
          str = "";
        }
        obj = { username: null, link: null };
        obj[0] = str;
        obj[1] = onInviteRevoked(closure_1_2[8])(closure_0.code);
        formatToPlainStringResult = intl.formatToPlainString(invite(closure_1_2[4]).t["+zWvOQ"], obj);
      }
      obj[1] = formatToPlainStringResult;
      let str2 = "Guild Instant Invite";
      if (closure_3) {
        str2 = closure_1_6.GROUP_DM;
      }
      return obj.showShareActionSheet(obj, str2);
    });
  };
  const items = [obj, , ];
  obj = { label: null, iconSource: null, action: null };
  const intl2 = invite(1236).intl;
  obj[0] = intl2.string(invite(1236).t.OpuAlK);
  obj[1] = onInviteRevoked(9953).copy;
  obj[2] = function action() {
    if (c3) {
      let tmpResult = invite(8918);
      tmpResult.handleCopy(invite.code, invite.channel, InstantInviteSources.GROUP_DM, false);
    } else {
      tmpResult = invite(7167);
      tmpResult.copy(onInviteRevoked(7506)(invite.code));
      const result = invite(4093).presentCopiedToClipboard();
      const obj2 = invite(4093);
    }
  };
  items[1] = obj;
  obj1 = { label: null, iconSource: null, variant: "destructive", action: null };
  const intl3 = invite(1236).intl;
  obj1[0] = intl3.string(invite(1236).t.v6Yazx);
  obj1[1] = onInviteRevoked(9953).revoke;
  dependencyMap = callback(function*() {
    closure_0 = tmp3;
    c3 = 1;
    yield v0(closure_1_2[12]).revokeInvite(invite);
    if (1 === tmp7) {
      c3 = 0;
      obj1 = v0(closure_1_2[13]);
      const obj2 = { key: "ERROR_ANOTHER_TRY", content: null };
      const intl = invite(closure_1_2[4]).intl;
      obj2[1] = intl.string(invite(closure_1_2[4]).t.CKsXk3);
      obj1.open(obj2);
      c4 = 3;
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