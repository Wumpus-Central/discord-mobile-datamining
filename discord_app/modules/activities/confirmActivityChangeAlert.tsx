// discord_app/modules/activities/confirmActivityChangeAlert.tsx
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { set } from "../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { computeChannelName } from "../channel/useChannelName.tsx";

const require = arg1;
const result = require("computeChannelName").fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel) {
  let str = "";
  if (null != channel) {
    let obj = computeChannelName;
    str = obj.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
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
  const obj2 = set;
  if (tmp6Result.isNullOrEmpty(str)) {
    const intl6 = tmp6(1236).intl;
    str = intl6.string(tmp6(1236).t.OGUjmt);
  }
  obj[1] = str;
  obj[5] = intl4.format(getSystemLocale.t["5/Xort"], obj);
  obj2.show(obj);
};