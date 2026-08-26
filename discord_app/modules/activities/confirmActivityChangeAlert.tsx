// === Module 10789: confirmActivityChangeModal ===

// Module 10789 (confirmActivityChangeModal)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import computeChannelName from "computeChannelName" /* 4638 */;
import setDefault from "set" /* 4808 */;
import closure_3 from "markAllUserIdListsStale" /* 4098 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

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
    const intl5 = tmp6(1236).intl;
    name = intl5.string(tmp6(1236).t.G99XFs);
  }
  obj = { currentApplicationName: name, currentApplicationChannelName: null };
  const obj2 = setDefault;
  if (tmp6Result.isNullOrEmpty(str)) {
    const intl6 = tmp6(1236).intl;
    str = intl6.string(tmp6(1236).t.OGUjmt);
  }
  obj[1] = str;
  obj[5] = intl4.format(getSystemLocale.t["5/Xort"], obj);
  obj2.show(obj);
};