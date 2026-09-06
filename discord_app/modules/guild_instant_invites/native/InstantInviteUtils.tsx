// === Module 10943: guild_instant_invites/InstantInviteUtils ===

// Module 10943 (guild_instant_invites/InstantInviteUtils)
import ToastUtils from "ToastUtils" /* 4258 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import getInviteURLDefault from "getInviteURL" /* 7759 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import _modDef10944 from "module_10944" /* 10944 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const InstantInviteSources = fn(1074).InstantInviteSources;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

export const useInviteActions = function useInviteActions(invite) {
  invite = invite.invite;
  const onInviteRevoked = invite.onInviteRevoked;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  const channel = ChannelStore.getChannel(invite.channel.id);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  asyncGeneratorStep = isPrivateResult;
  let obj = { label: null, iconSource: null, action: null };
  let intl = invite(1114).intl;
  obj.label = intl.string(invite(1114).t.RDE0Sc);
  obj.iconSource = onInviteRevoked(10937).share;
  obj.action = function action() {
    _modDef10944(() => {
      let obj = invite(dependencyMap[7]);
      let tmp4;
      if (!closure_1_3) {
        tmp4 = onInviteRevoked(dependencyMap[8])(closure_1_0.code);
      }
      obj = { url: tmp4, message: null };
      let formatToPlainStringResult;
      if (closure_1_3) {
        const intl = invite(dependencyMap[4]).intl;
        currentUser = currentUser.getCurrentUser();
        let str;
        if (currentUser != null) {
          str = currentUser.username;
        }
        if (str == null) {
          str = "";
        }
        obj = { username: str, link: onInviteRevoked(dependencyMap[8])(closure_1_0.code) };
        formatToPlainStringResult = intl.formatToPlainString(invite(dependencyMap[4]).t["+zWvOQ"], obj);
      }
      obj.message = formatToPlainStringResult;
      let str2 = "Guild Instant Invite";
      if (closure_1_3) {
        str2 = constants.GROUP_DM;
      }
      return obj.showShareActionSheet(obj, str2);
    });
  };
  const items = [obj, , ];
  obj = { label: null, iconSource: null, action: null };
  const intl2 = invite(1114).intl;
  obj.label = intl2.string(invite(1114).t.OpuAlK);
  obj.iconSource = onInviteRevoked(10937).copy;
  obj.action = function action() {
    if (c3) {
      let tmpResult = instant_invite_InstantInviteUtils;
      tmpResult.handleCopy(invite.code, invite.channel, InstantInviteSources.GROUP_DM, false);
    } else {
      tmpResult = ClipboardUtils;
      tmpResult.copy(getInviteURLDefault(invite.code));
      const result = ToastUtils.presentCopiedToClipboard();
    }
  };
  items[1] = obj;
  const obj1 = { label: null, iconSource: null, variant: "destructive", action: null };
  const intl3 = invite(1114).intl;
  obj1.label = intl3.string(invite(1114).t.v6Yazx);
  obj1.iconSource = onInviteRevoked(10937).revoke;
  dependencyMap = asyncGeneratorStep(async () => {
    await v2(tmp24[12]).revokeInvite(invite);
    if (1 === tmp7) {
      c3 = 0;
      const obj2 = { key: "ERROR_ANOTHER_TRY", content: null };
      const intl = tmp3(tmp24[4]).intl;
      obj2.content = intl.string(tmp3(tmp24[4]).t.CKsXk3);
      v2(tmp24[13]).open(obj2);
      c4 = 3;
      v2(tmp24[13]);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (closure_128_1 != null) {
        tmp9(closure_128_0);
      }
      c3 = 0;
    }
    return value;
  });
  obj1.action = function() {
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