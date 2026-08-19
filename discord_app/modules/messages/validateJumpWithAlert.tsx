// === Module 12724: validateJumpWithAlert ===

// Module 12724 (validateJumpWithAlert)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setDefault from "set" /* 4827 */;
import isSpamSupported from "isSpamSupported" /* 5231 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "getUncachedChannelPermissions" /* 4021 */;
import closure_5 from "markAllUserIdListsStale" /* 4030 */;
import { Permissions } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

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
    setDefault.show(obj);
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
    setDefault.show(obj1);
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
          let obj3 = setDefault;
          obj3 = { title: null, body: null, confirmText: null };
          const intl = tmp(1236).intl;
          obj3[0] = intl.string(tmp(1236).t["6vJKFk"]);
          const intl2 = tmp(1236).intl;
          const obj4 = { name: null };
          obj4[0] = author.author.username;
          obj3[1] = intl2.formatToPlainString(tmp(1236).t.zKNgPF, obj4);
          const intl3 = tmp(1236).intl;
          obj3[2] = intl3.string(tmp(1236).t.BddRzS);
          obj3.show(obj3);
        }
        return false;
      }
      let obj6 = setDefault;
      const obj5 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl4 = tmp(1236).intl;
      obj5[0] = intl4.string(tmp(1236).t["cZcG+P"]);
      const intl5 = tmp(1236).intl;
      obj6 = { name: null };
      obj6[0] = author.author.username;
      obj5[1] = intl5.formatToPlainString(tmp(1236).t["1YTWty"], obj6);
      const intl6 = tmp(1236).intl;
      obj5[2] = intl6.string(tmp(1236).t["+TSRGD"]);
      const intl7 = tmp(1236).intl;
      obj5[3] = intl7.string(tmp(1236).t["ETE/oC"]);
      obj5[4] = arg1;
      obj6.show(obj5);
    } else {
      return true;
    }
  }
};