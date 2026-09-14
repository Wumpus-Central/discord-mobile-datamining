// === Module 9670: confirmActivityChangeAlert ===

// Module 9670 (confirmActivityChangeAlert)
import util from "util" /* 1114 */;
import StringUtils from "StringUtils" /* 1925 */;
import useChannelName from "useChannelName" /* 4789 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4980 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel, onConfirm, onCancel) {
  let str = "";
  if (null != channel) {
    str = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  }
  const obj3 = { title: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, body: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.XkIWkk);
  const intl2 = util.intl;
  obj3.cancelText = intl2.string(util.t["ETE/oC"]);
  const intl3 = util.intl;
  obj3.confirmText = intl3.string(util.t["cY+Oob"]);
  obj3.onConfirm = onConfirm;
  obj3.onCancel = onCancel;
  const intl4 = util.intl;
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  if (name == null) {
    const intl5 = util.intl;
    name = intl5.string(util.t.G99XFs);
  }
  const obj4 = { currentApplicationName: name, currentApplicationChannelName: null };
  const obj2 = AlertActionCreatorsDefault;
  if (tmp6Result.isNullOrEmpty(str)) {
    const intl6 = util.intl;
    str = intl6.string(util.t.OGUjmt);
  }
  obj4.currentApplicationChannelName = str;
  obj3.body = intl4.format(util.t["5/Xort"], obj4);
  obj2.show(obj3);
  tmp6Result = StringUtils;
};