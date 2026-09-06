// === Module 13285: validateJumpWithAlert ===

// Module 13285 (validateJumpWithAlert)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import isSpam from "isSpam" /* 7507 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

export default function validateJumpWithAlert(author, onConfirm) {
  let obj = RelationshipStore;
  if (RelationshipStore.isBlockedForMessage(author)) {
    obj = { title: null, body: null, confirmText: null };
    const intl11 = util.intl;
    obj.title = intl11.string(util.t["j7eA/g"]);
    const intl12 = util.intl;
    obj = { name: author.author.username };
    obj.body = intl12.formatToPlainString(util.t.dTNNgr, obj);
    const intl13 = util.intl;
    obj.confirmText = intl13.string(util.t.BddRzS);
    AlertActionCreatorsDefault.show(obj);
    return false;
  } else if (obj.isIgnoredForMessage(author)) {
    let obj1 = { title: null, body: null, confirmText: null };
    const intl8 = util.intl;
    obj1.title = intl8.string(util.t.XyWoKV);
    const intl9 = util.intl;
    const obj2 = { name: author.author.username };
    obj1.body = intl9.formatToPlainString(util.t["8t8doK"], obj2);
    const intl10 = util.intl;
    obj1.confirmText = intl10.string(util.t.BddRzS);
    AlertActionCreatorsDefault.show(obj1);
    return false;
  } else {
    obj1 = isSpam;
    if (obj1.isSpam(author)) {
      const channel = ChannelStore.getChannel(author.channel_id);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        if (!PermissionStore.can(Permissions.MODERATE_MEMBERS, channel)) {
          const obj3 = { title: null, body: null, confirmText: null };
          const intl = util.intl;
          obj3.title = intl.string(util.t["6vJKFk"]);
          const intl2 = util.intl;
          const obj4 = { name: author.author.username };
          obj3.body = intl2.formatToPlainString(util.t.zKNgPF, obj4);
          const intl3 = util.intl;
          obj3.confirmText = intl3.string(util.t.BddRzS);
          obj3.show(obj3);
        }
        return false;
      }
      const obj5 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl4 = util.intl;
      obj5.title = intl4.string(util.t["cZcG+P"]);
      const intl5 = util.intl;
      const obj6 = { name: author.author.username };
      obj5.body = intl5.formatToPlainString(util.t["1YTWty"], obj6);
      const intl6 = util.intl;
      obj5.confirmText = intl6.string(util.t["+TSRGD"]);
      const intl7 = util.intl;
      obj5.cancelText = intl7.string(util.t["ETE/oC"]);
      obj5.onConfirm = onConfirm;
      obj6.show(obj5);
    } else {
      return true;
    }
  }
};