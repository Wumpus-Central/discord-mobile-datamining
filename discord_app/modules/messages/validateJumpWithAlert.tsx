// === Module 13684: validateJumpWithAlert ===

// Module 13684 (validateJumpWithAlert)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5193 */;
import isSpam from "isSpam" /* 7835 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import PermissionStore from "PermissionStore" /* 4462 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

export default function validateJumpWithAlert(author, onConfirm) {
  if (RelationshipStore.isBlockedForMessage(author)) {
    const obj3 = { title: null, body: null, confirmText: null };
    const intl11 = util.intl;
    obj3.title = intl11.string(util.t["j7eA/g"]);
    const intl12 = util.intl;
    const obj5 = { name: author.author.username };
    obj3.body = intl12.formatToPlainString(util.t.dTNNgr, obj5);
    const intl13 = util.intl;
    obj3.confirmText = intl13.string(util.t.BddRzS);
    AlertActionCreatorsDefault.show(obj3);
    return false;
  } else if (RelationshipStore.isIgnoredForMessage(author)) {
    const obj6 = { title: null, body: null, confirmText: null };
    const intl8 = util.intl;
    obj6.title = intl8.string(util.t.XyWoKV);
    const intl9 = util.intl;
    const obj8 = { name: author.author.username };
    obj6.body = intl9.formatToPlainString(util.t["8t8doK"], obj8);
    const intl10 = util.intl;
    obj6.confirmText = intl10.string(util.t.BddRzS);
    AlertActionCreatorsDefault.show(obj6);
    return false;
  } else {
    if (obj2.isSpam(author)) {
      const channel = ChannelStore.getChannel(author.channel_id);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        if (!PermissionStore.can(Permissions.MODERATE_MEMBERS, channel)) {
          const obj9 = { title: null, body: null, confirmText: null };
          const intl = util.intl;
          obj9.title = intl.string(util.t["6vJKFk"]);
          const intl2 = util.intl;
          const obj11 = { name: author.author.username };
          obj9.body = intl2.formatToPlainString(util.t.zKNgPF, obj11);
          const intl3 = util.intl;
          obj9.confirmText = intl3.string(util.t.BddRzS);
          AlertActionCreatorsDefault.show(obj9);
        }
        return false;
      }
      const obj12 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl4 = util.intl;
      obj12.title = intl4.string(util.t["cZcG+P"]);
      const intl5 = util.intl;
      const obj14 = { name: author.author.username };
      obj12.body = intl5.formatToPlainString(util.t["1YTWty"], obj14);
      const intl6 = util.intl;
      obj12.confirmText = intl6.string(util.t["+TSRGD"]);
      const intl7 = util.intl;
      obj12.cancelText = intl7.string(util.t["ETE/oC"]);
      obj12.onConfirm = onConfirm;
      AlertActionCreatorsDefault.show(obj12);
    } else {
      return true;
    }
    obj2 = isSpam;
  }
};