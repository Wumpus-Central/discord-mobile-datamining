// discord_app/modules/messages/validateJumpWithAlert.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import obj132Default from "../../actions/AlertActionCreators.tsx";
import isSpamSupported from "isSpam.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import { Permissions } from "../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

export default function validateJumpWithAlert(author) {
  let obj = blockedForMessage;
  if (blockedForMessage.isBlockedForMessage(author)) {
    obj = { title: null, body: null, confirmText: null };
    const intl11 = getSystemLocale.intl;
    obj[0] = intl11.string(getSystemLocale.t["j7eA/g"]);
    const intl12 = getSystemLocale.intl;
    obj = { name: null };
    obj[0] = author.author.username;
    obj[1] = intl12.formatToPlainString(getSystemLocale.t.dTNNgr, obj);
    const intl13 = getSystemLocale.intl;
    obj[2] = intl13.string(getSystemLocale.t.BddRzS);
    obj132Default.show(obj);
    return false;
  } else if (obj.isIgnoredForMessage(author)) {
    obj1 = { title: null, body: null, confirmText: null };
    const intl8 = getSystemLocale.intl;
    obj1[0] = intl8.string(getSystemLocale.t.XyWoKV);
    const intl9 = getSystemLocale.intl;
    const obj2 = { name: null };
    obj2[0] = author.author.username;
    obj1[1] = intl9.formatToPlainString(getSystemLocale.t["8t8doK"], obj2);
    const intl10 = getSystemLocale.intl;
    obj1[2] = intl10.string(getSystemLocale.t.BddRzS);
    obj132Default.show(obj1);
    return false;
  } else {
    obj1 = isSpamSupported;
    if (obj1.isSpam(author)) {
      channel = channel.getChannel(author.channel_id);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        if (!closure_4.can(Permissions.MODERATE_MEMBERS, channel)) {
          const obj3 = { title: null, body: null, confirmText: null };
          const intl = getSystemLocale.intl;
          obj3[0] = intl.string(getSystemLocale.t["6vJKFk"]);
          const intl2 = getSystemLocale.intl;
          const obj4 = { name: null };
          obj4[0] = author.author.username;
          obj3[1] = intl2.formatToPlainString(getSystemLocale.t.zKNgPF, obj4);
          const intl3 = getSystemLocale.intl;
          obj3[2] = intl3.string(getSystemLocale.t.BddRzS);
          obj3.show(obj3);
        }
        return false;
      }
      const obj5 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl4 = getSystemLocale.intl;
      obj5[0] = intl4.string(getSystemLocale.t["cZcG+P"]);
      const intl5 = getSystemLocale.intl;
      const obj6 = { name: null };
      obj6[0] = author.author.username;
      obj5[1] = intl5.formatToPlainString(getSystemLocale.t["1YTWty"], obj6);
      const intl6 = getSystemLocale.intl;
      obj5[2] = intl6.string(getSystemLocale.t["+TSRGD"]);
      const intl7 = getSystemLocale.intl;
      obj5[3] = intl7.string(getSystemLocale.t["ETE/oC"]);
      obj5[4] = arg1;
      obj6.show(obj5);
    } else {
      return true;
    }
  }
};