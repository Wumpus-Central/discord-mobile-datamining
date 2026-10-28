// discord_app/modules/conjure/publish/conjurePublishBlockedReason.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3863 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const ConjurePublishBlockedReason = {
  PUBLISH_APPROVAL_REQUIRED: "publish-approval-required",
  NO_PREVIEW: "no-preview",
  MISSING_MANAGE_SERVER: "missing-manage-server",
  MISSING_MANAGE_CHANNELS: "missing-manage-channels",
};
const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishBlockedReason.tsx");

export { ConjurePublishBlockedReason };
export const getConjurePublishBlockedCopy = function getConjurePublishBlockedCopy(reason, message) {
  if (obj.PUBLISH_APPROVAL_REQUIRED === reason) {
    const obj2 = { title: null, body: null, action: null, cancel: null };
    const intl9 = util.intl;
    obj2.title = intl9.string(_modDef3863["5qiUbF"]);
    const intl10 = util.intl;
    obj2.body = intl10.string(_modDef3863["8kdvyn"]);
    const intl11 = util.intl;
    obj2.action = intl11.string(_modDef3863.z25acw);
    const intl12 = util.intl;
    obj2.cancel = intl12.string(util.t["ETE/oC"]);
    return obj2;
  } else if (tmp.NO_PREVIEW === reason) {
    const obj3 = { title: null, body: null, action: null };
    const intl6 = util.intl;
    obj3.title = intl6.string(_modDef3863.ZNGLFE);
    const intl7 = util.intl;
    obj3.body = intl7.string(_modDef3863.ffxKGK);
    const intl8 = util.intl;
    obj3.action = intl8.string(_modDef3863["/omTNx"]);
    return obj3;
  } else {
    let str2 = message;
    if (tmp.MISSING_MANAGE_SERVER === reason) {
      const obj4 = { title: null, body: null, action: null };
      const intl4 = util.intl;
      obj4.title = intl4.string(_modDef3863.qpffbI);
      if (str2 == null) {
        str2 = "";
      }
      obj4.body = str2;
      const intl5 = util.intl;
      obj4.action = intl5.string(util.t.BddRzS);
      return obj4;
    } else if (tmp.MISSING_MANAGE_CHANNELS === reason) {
      obj = { title: null, body: null, action: null, cancel: null };
      const intl = util.intl;
      obj.title = intl.string(_modDef3863.qpffbI);
      let str = str2;
      if (str2 == null) {
        str = "";
      }
      obj.body = str;
      const intl2 = util.intl;
      obj.action = intl2.string(_modDef3863.dVtQRH);
      const intl3 = util.intl;
      obj.cancel = intl3.string(util.t["ETE/oC"]);
      return obj;
    }
  }
};
