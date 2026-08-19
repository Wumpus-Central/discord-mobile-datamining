// === Module 8739: confirmActivityChangeModal ===

// Module 8739 (confirmActivityChangeModal)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isNullOrEmpty from "isNullOrEmpty" /* 1903 */;
import obj132Default from "obj132" /* 4827 */;
import computeChannelName from "computeChannelName" /* 4984 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel) {
  let str = "";
  if (null != channel) {
    let obj = computeChannelName;
    str = obj.computeChannelName(channel, closure_4, closure_3);
  }
  obj = { title: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.XkIWkk);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["ETE/oC"]);
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t["cY+Oob"]);
  obj[3] = arg2;
  obj[4] = arg3;
  const intl4 = getSystemLocale.intl;
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  if (name == null) {
    const intl5 = getSystemLocale.intl;
    name = intl5.string(getSystemLocale.t.G99XFs);
  }
  obj = { currentApplicationName: name, currentApplicationChannelName: null };
  const obj2 = obj132Default;
  if (tmp6Result.isNullOrEmpty(str)) {
    const intl6 = getSystemLocale.intl;
    str = intl6.string(getSystemLocale.t.OGUjmt);
  }
  obj[1] = str;
  obj[5] = intl4.format(getSystemLocale.t["5/Xort"], obj);
  obj2.show(obj);
  tmp6Result = isNullOrEmpty;
};