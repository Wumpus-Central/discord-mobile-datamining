// === Module 9540: confirmActivityChangeAlert ===

// Module 9540 (confirmActivityChangeAlert)
import util from "util" /* 1114 */;
import StringUtils from "StringUtils" /* 1925 */;
import useChannelName from "useChannelName" /* 4713 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel, onConfirm, onCancel) {
  let str = "";
  if (null != channel) {
    let obj = useChannelName;
    str = obj.computeChannelName(channel, UserStore, RelationshipStore);
  }
  obj = { title: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.XkIWkk);
  const intl2 = util.intl;
  obj.cancelText = intl2.string(util.t["ETE/oC"]);
  const intl3 = util.intl;
  obj.confirmText = intl3.string(util.t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  const intl4 = util.intl;
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  if (name == null) {
    const intl5 = util.intl;
    name = intl5.string(util.t.G99XFs);
  }
  obj = { currentApplicationName: name, currentApplicationChannelName: null };
  const obj2 = AlertActionCreatorsDefault;
  if (tmp6Result.isNullOrEmpty(str)) {
    const intl6 = util.intl;
    str = intl6.string(util.t.OGUjmt);
  }
  obj.currentApplicationChannelName = str;
  obj.body = intl4.format(util.t["5/Xort"], obj);
  obj2.show(obj);
  tmp6Result = StringUtils;
};