// discord_app/modules/guild_instant_invites/native/InstantInviteUtils.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/UserStore.tsx";
import { InstantInviteSources } from "../../../Constants.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

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
  obj[1] = onInviteRevoked(9840).share;
  obj[2] = function action() {
    onInviteRevoked(9847)(() => {
      let obj = closure_1_0(closure_1_2[7]);
      let tmp4;
      if (!closure_3) {
        tmp4 = closure_1_1(tmp2[8])(closure_0.code);
      }
      obj = { url: tmp4, message: null };
      let formatToPlainStringResult;
      if (closure_3) {
        const intl = tmp(tmp2[4]).intl;
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
        obj[1] = closure_1_1(tmp2[8])(closure_0.code);
        formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[4]).t["+zWvOQ"], obj);
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
  obj[1] = onInviteRevoked(9840).copy;
  obj[2] = function action() {
    if (c3) {
      let tmpResult = tmp(9212);
      tmpResult.handleCopy(invite.code, invite.channel, closure_1_6.GROUP_DM, false);
    } else {
      tmpResult = tmp(5862);
      tmpResult.copy(onInviteRevoked(7362)(invite.code));
      const result = invite(4097).presentCopiedToClipboard();
      const obj2 = invite(4097);
    }
  };
  items[1] = obj;
  obj1 = { label: null, iconSource: null, variant: "destructive", action: null };
  const intl3 = invite(1236).intl;
  obj1[0] = intl3.string(invite(1236).t.v6Yazx);
  obj1[1] = onInviteRevoked(9840).revoke;
  dependencyMap = callback(function*() {
    closure_0 = tmp3;
    c3 = 1;
    yield v0(closure_1_2[12]).revokeInvite(closure_1_0);
    if (1 === tmp7) {
      c3 = 0;
      obj1 = v0(closure_1_2[13]);
      const obj2 = { key: "ERROR_ANOTHER_TRY", content: null };
      const intl = closure_1_0(closure_1_2[4]).intl;
      obj2[1] = intl.string(closure_1_0(closure_1_2[4]).t.CKsXk3);
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