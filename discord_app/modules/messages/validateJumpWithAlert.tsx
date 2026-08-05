import { set } from "../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { isSpamSupported } from "isSpam.tsx";
// discord_app/modules/messages/validateJumpWithAlert.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import { Permissions } from "ME";

const require = arg1;
const result = require("upsertRelationship").fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

export default function validateJumpWithAlert(author) {
  let obj = blockedForMessage;
  if (blockedForMessage.isBlockedForMessage(author)) {
    obj = { title: null, body: null, confirmText: null };
    const intl11 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl11.string(getSystemLocale /* getSystemLocale */.t["j7eA/g"]);
    const intl12 = getSystemLocale /* getSystemLocale */.intl;
    obj = { name: null };
    obj[0] = author.author.username;
    obj[1] = intl12.formatToPlainString(getSystemLocale /* getSystemLocale */.t.dTNNgr, obj);
    const intl13 = getSystemLocale /* getSystemLocale */.intl;
    obj[2] = intl13.string(getSystemLocale /* getSystemLocale */.t.BddRzS);
    set.show(obj);
    return false;
  } else if (obj.isIgnoredForMessage(author)) {
    let obj1 = { title: null, body: null, confirmText: null };
    const intl8 = getSystemLocale /* getSystemLocale */.intl;
    obj1[0] = intl8.string(getSystemLocale /* getSystemLocale */.t.XyWoKV);
    const intl9 = getSystemLocale /* getSystemLocale */.intl;
    const obj2 = { name: null };
    obj2[0] = author.author.username;
    obj1[1] = intl9.formatToPlainString(getSystemLocale /* getSystemLocale */.t["8t8doK"], obj2);
    const intl10 = getSystemLocale /* getSystemLocale */.intl;
    obj1[2] = intl10.string(getSystemLocale /* getSystemLocale */.t.BddRzS);
    set.show(obj1);
    return false;
  } else {
    obj1 = isSpamSupported /* isSpamSupported */;
    if (obj1.isSpam(author)) {
      channel = channel.getChannel(author.channel_id);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        if (!getUncachedChannelPermissions.can(Permissions.MODERATE_MEMBERS, channel)) {
          let obj3 = set;
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
      let obj6 = set;
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